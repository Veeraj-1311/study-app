// Vercel serverless function: proxies Google's Gemini API so the key stays server-side.
// Set GEMINI_API_KEY in Vercel project settings > Environment Variables.

const SYSTEM_PROMPT = `You are a friendly, patient study tutor helping a student work through a doubt.
- Explain concepts in clear, simple language. Use everyday examples when helpful.
- Match your depth to what the student is studying (school-level by default).
- If a calculation is involved, show the steps briefly.
- If the question is unclear, ask one specific follow-up to clarify before answering.
- Keep responses focused. No filler intros like "Great question!". Get to the point.
- Use light markdown if it helps (short bullet lists, **bold** for key terms). Avoid huge headers.`

const MODEL = 'gemini-2.5-flash'
const MAX_IMAGES_PER_MESSAGE = 3
const MAX_IMAGE_BYTES = 1_500_000
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])
const RATE_WINDOW_MS = 6 * 60 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 40

const rateBuckets = globalThis.__learnflowRateBuckets || new Map()
globalThis.__learnflowRateBuckets = rateBuckets

function rateLimitKey(req) {
  const forwarded = String(req.headers['x-forwarded-for'] || '')
  return forwarded.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown'
}

function checkRateLimit(req) {
  const now = Date.now()
  const key = rateLimitKey(req)
  const bucket = rateBuckets.get(key) || { count: 0, resetAt: now + RATE_WINDOW_MS }

  if (bucket.resetAt <= now) {
    bucket.count = 0
    bucket.resetAt = now + RATE_WINDOW_MS
  }

  bucket.count += 1
  rateBuckets.set(key, bucket)

  if (rateBuckets.size > 500) {
    for (const [entryKey, entry] of rateBuckets) {
      if (entry.resetAt <= now) rateBuckets.delete(entryKey)
    }
  }

  return {
    allowed: bucket.count <= MAX_REQUESTS_PER_WINDOW,
    resetAt: bucket.resetAt,
  }
}

function imageToPart(image) {
  const mimeType = typeof image?.mimeType === 'string' ? image.mimeType : ''
  const data = String(image?.data || '').replace(/^data:[^;]+;base64,/, '')

  if (!ALLOWED_IMAGE_TYPES.has(mimeType)) {
    throw new Error('Only JPEG, PNG, and WebP images are supported.')
  }
  if (!data || !/^[a-zA-Z0-9+/=]+$/.test(data)) {
    throw new Error('Image data is invalid.')
  }

  const bytes = Math.ceil((data.length * 3) / 4)
  if (bytes > MAX_IMAGE_BYTES) {
    throw new Error('Image is too large. Try a closer crop or screenshot.')
  }

  return { inlineData: { mimeType, data } }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const rate = checkRateLimit(req)
  if (!rate.allowed) {
    return res.status(429).json({
      error: `AI request limit reached. Try again after ${new Date(rate.resetAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}.`,
    })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(503).json({
      error: 'AI not configured yet. Add GEMINI_API_KEY under Vercel > Settings > Environment Variables.',
    })
  }

  const body = req.body || {}
  const messages = Array.isArray(body.messages) ? body.messages : null
  const context = typeof body.context === 'string' ? body.context.trim() : ''

  if (!messages || messages.length === 0) {
    return res.status(400).json({ error: 'messages array required' })
  }

  let contents
  try {
    contents = messages.slice(-12).map((message) => {
      const parts = [{ text: String(message.content || '').slice(0, 4000) }]
      const images = message.role === 'assistant' ? [] : (Array.isArray(message.images) ? message.images : [])
      if (images.length > MAX_IMAGES_PER_MESSAGE) {
        throw new Error(`Attach up to ${MAX_IMAGES_PER_MESSAGE} images per message.`)
      }
      images.forEach((image) => parts.push(imageToPart(image)))
      return {
        role: message.role === 'assistant' ? 'model' : 'user',
        parts,
      }
    })
  } catch (validationError) {
    return res.status(400).json({ error: validationError?.message || 'Invalid message payload.' })
  }

  const systemText = context
    ? `${SYSTEM_PROMPT}\n\nThe student is currently studying: ${context}`
    : SYSTEM_PROMPT

  try {
    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: {
          'x-goog-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: systemText }] },
          generationConfig: {
            temperature: 0.45,
            maxOutputTokens: 900,
            topP: 0.9,
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
          ],
        }),
      }
    )

    if (!upstream.ok) {
      const text = await upstream.text()
      let detail = text
      let reason = ''
      try {
        const parsed = JSON.parse(text)
        detail = parsed?.error?.message || text
        reason = parsed?.error?.details?.find((item) => item?.reason)?.reason || ''
      } catch {
        detail = text
      }
      if (reason === 'API_KEY_SERVICE_BLOCKED') {
        return res.status(403).json({
          error: 'AI key is blocked from the Generative Language API. In Google Cloud Credentials > API restrictions, allow Generative Language API, or temporarily choose Don\'t restrict key.',
        })
      }
      return res.status(upstream.status).json({ error: `Upstream: ${detail}` })
    }

    const data = await upstream.json()
    const answer = data?.candidates?.[0]?.content?.parts?.map((part) => part.text).join('').trim() || ''
    if (!answer) {
      const finish = data?.candidates?.[0]?.finishReason
      return res.status(502).json({ error: finish ? `Empty response (${finish})` : 'Empty response from model' })
    }
    return res.status(200).json({ answer })
  } catch (error) {
    return res.status(500).json({ error: `Server error: ${error?.message || 'unknown'}` })
  }
}
