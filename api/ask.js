// Vercel serverless function: proxies Google's Gemini API so the key stays server-side.
// Set GEMINI_API_KEY in Vercel project settings → Environment Variables.

const SYSTEM_PROMPT = `You are a friendly, patient study tutor helping a student work through a doubt.
- Explain concepts in clear, simple language. Use everyday examples when helpful.
- Match your depth to what the student is studying (school-level by default).
- If a calculation is involved, show the steps briefly.
- If the question is unclear, ask one specific follow-up to clarify before answering.
- Keep responses focused. No filler intros like "Great question!". Get to the point.
- Use light markdown if it helps (short bullet lists, **bold** for key terms). Avoid huge headers.`

const MODEL = 'gemini-2.0-flash'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(503).json({
      error: 'AI not configured yet. The owner of this app needs to add a GEMINI_API_KEY environment variable on Vercel. Get a free key at aistudio.google.com/apikey, then add it under Vercel → Settings → Environment Variables.',
    })
  }

  const body = req.body || {}
  const messages = Array.isArray(body.messages) ? body.messages : null
  const context = typeof body.context === 'string' ? body.context.trim() : ''

  if (!messages || messages.length === 0) {
    return res.status(400).json({ error: 'messages array required' })
  }

  // Trim history to last 12 turns and map to Gemini's contents shape.
  const contents = messages.slice(-12).map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: String(m.content || '').slice(0, 4000) }],
  }))

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
      try {
        const parsed = JSON.parse(text)
        detail = parsed?.error?.message || text
      } catch {}
      return res.status(upstream.status).json({ error: `Upstream: ${detail}` })
    }

    const data = await upstream.json()
    const answer = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('').trim() || ''
    if (!answer) {
      const finish = data?.candidates?.[0]?.finishReason
      return res.status(502).json({ error: finish ? `Empty response (${finish})` : 'Empty response from model' })
    }
    return res.status(200).json({ answer })
  } catch (e) {
    return res.status(500).json({ error: `Server error: ${e?.message || 'unknown'}` })
  }
}
