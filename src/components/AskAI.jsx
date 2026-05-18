import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, Bot, ImagePlus, Send, Sparkles, Trash2, User, X } from 'lucide-react'
import { Button, IconButton } from './ui.jsx'

const STORAGE_KEY = 'learnflow-ai-chat'
const MAX_IMAGES = 3
const MAX_IMAGE_BYTES = 1_200_000
const IMAGE_MIME_TYPE = 'image/jpeg'

const makeId = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`

const dataUrlBytes = (dataUrl) => {
  const base64 = dataUrl.split(',')[1] || ''
  return Math.ceil((base64.length * 3) / 4)
}

const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = () => resolve(reader.result)
  reader.onerror = () => reject(new Error(`${file.name} could not be read.`))
  reader.readAsDataURL(file)
})

const loadImage = (src, name) => new Promise((resolve, reject) => {
  const image = new Image()
  image.onload = () => resolve(image)
  image.onerror = () => reject(new Error(`${name} could not be loaded as an image.`))
  image.src = src
})

async function prepareImage(file) {
  if (!file.type.startsWith('image/')) {
    throw new Error(`${file.name} is not an image.`)
  }

  const source = await readFileAsDataUrl(file)
  const image = await loadImage(source, file.name)
  const longestSide = Math.max(image.naturalWidth, image.naturalHeight)
  const sideLimits = [1600, 1280, 960]
  const qualities = [0.9, 0.82, 0.74, 0.66]

  for (const maxSide of sideLimits) {
    const scale = Math.min(1, maxSide / longestSide)
    const width = Math.max(1, Math.round(image.naturalWidth * scale))
    const height = Math.max(1, Math.round(image.naturalHeight * scale))
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, width, height)
    context.imageSmoothingQuality = 'high'
    context.drawImage(image, 0, 0, width, height)

    for (const quality of qualities) {
      const dataUrl = canvas.toDataURL(IMAGE_MIME_TYPE, quality)
      if (dataUrlBytes(dataUrl) <= MAX_IMAGE_BYTES) {
        return {
          id: makeId(),
          name: file.name,
          mimeType: IMAGE_MIME_TYPE,
          data: dataUrl.split(',')[1] || '',
          dataUrl,
          size: dataUrlBytes(dataUrl),
        }
      }
    }
  }

  throw new Error(`${file.name} is too large. Try a closer crop or screenshot.`)
}

const loadHistory = () => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

const saveHistory = (messages) => {
  try {
    const compact = messages.map((message) => ({
      ...message,
      attachments: message.attachments?.map(({ id, name, mimeType, size }) => ({ id, name, mimeType, size })),
    }))
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(compact))
  } catch {
    return false
  }
  return true
}

function MessageImages({ attachments = [] }) {
  if (!attachments.length) return null
  return (
    <div className="ai-message-images">
      {attachments.map((attachment) => (
        <div className="ai-message-image" key={attachment.id || attachment.name}>
          {attachment.dataUrl ? (
            <img src={attachment.dataUrl} alt={attachment.name || 'Uploaded question'} />
          ) : (
            <span>{attachment.name || 'Image attached'}</span>
          )}
        </div>
      ))}
    </div>
  )
}

function FormattedAnswer({ text }) {
  const lines = text.split('\n')
  return (
    <div>
      {lines.map((line, index) => {
        const trimmed = line.trim()
        if (!trimmed) return <p key={index} aria-hidden>&nbsp;</p>
        const isBullet = /^[-*]\s/.test(trimmed)
        const cleaned = isBullet ? trimmed.replace(/^[-*]\s/, '') : trimmed
        const parts = cleaned.split(/(\*\*[^*]+\*\*)/g)
        return (
          <p key={index} style={{ display: isBullet ? 'flex' : 'block', gap: 8 }}>
            {isBullet && <span style={{ color: 'var(--color-accent)' }}>&bull;</span>}
            <span>
              {parts.map((part, partIndex) => (
                part.startsWith('**') && part.endsWith('**')
                  ? <strong key={partIndex}>{part.slice(2, -2)}</strong>
                  : <span key={partIndex}>{part}</span>
              ))}
            </span>
          </p>
        )
      })}
    </div>
  )
}

function TypingDots() {
  return (
    <div className="typing-dots" aria-label="AI is typing">
      <span />
      <span />
      <span />
    </div>
  )
}

export default function AskAI({ defaultContext = '', inline = false, label = 'Ask AI', draft = '' }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [context, setContext] = useState(defaultContext)
  const [messages, setMessages] = useState(loadHistory)
  const [attachments, setAttachments] = useState([])
  const [loading, setLoading] = useState(false)
  const [preparingImages, setPreparingImages] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)
  const fileInputRef = useRef(null)
  const listEndRef = useRef(null)

  useEffect(() => {
    saveHistory(messages)
  }, [messages])

  useEffect(() => {
    if (!open) return undefined
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 180)
    return () => window.clearTimeout(focusTimer)
  }, [open])

  useEffect(() => {
    if (open) listEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, loading, open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape' && open) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleSend = async () => {
    const text = input.trim()
    if ((!text && attachments.length === 0) || loading || preparingImages) return
    setError(null)
    setInput('')
    setAttachments([])
    const outgoingAttachments = attachments
    const next = [
      ...messages,
      {
        role: 'user',
        content: text || 'Please explain the uploaded image.',
        attachments: outgoingAttachments,
        id: makeId(),
      },
    ]
    setMessages(next)
    setLoading(true)
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map(({ role, content, attachments: messageAttachments }) => ({
            role,
            content,
            images: role === 'user'
              ? messageAttachments?.filter((image) => image.data).map(({ data, mimeType, name }) => ({ data, mimeType, name }))
              : undefined,
          })),
          context: context.trim(),
        }),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        setError(data.error || `Ask AI is unavailable right now (${response.status}).`)
        return
      }
      setMessages((current) => [
        ...current,
        { role: 'assistant', content: data.answer || 'I did not get a usable answer.', id: makeId() },
      ])
    } catch (requestError) {
      setError(requestError?.message || 'Network error. Try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setMessages([])
    setAttachments([])
    setError(null)
  }

  const openDialog = () => {
    if (defaultContext) setContext(defaultContext)
    if (draft) setInput(draft)
    setOpen(true)
  }

  const handleFilesSelected = async (event) => {
    const selected = Array.from(event.target.files || [])
    event.target.value = ''
    if (!selected.length) return

    const slots = MAX_IMAGES - attachments.length
    if (slots <= 0) {
      setError(`Attach up to ${MAX_IMAGES} images at once.`)
      return
    }

    const files = selected.slice(0, slots)
    setError(selected.length > slots ? `Only the first ${slots} image${slots === 1 ? '' : 's'} were attached.` : null)
    setPreparingImages(true)
    try {
      const prepared = []
      for (const file of files) {
        prepared.push(await prepareImage(file))
      }
      setAttachments((current) => [...current, ...prepared])
    } catch (imageError) {
      setError(imageError?.message || 'That image could not be attached.')
    } finally {
      setPreparingImages(false)
    }
  }

  const removeAttachment = (id) => {
    setAttachments((current) => current.filter((attachment) => attachment.id !== id))
  }

  const canSend = (input.trim() || attachments.length > 0) && !loading && !preparingImages

  return (
    <>
      <div className={inline ? 'inline-tool' : 'ai-fab'}>
        <motion.button
          type="button"
          className={inline ? 'button button-secondary button-sm' : 'floating-button'}
          onClick={openDialog}
          whileTap={{ scale: 0.96 }}
          aria-label={label}
        >
          <Bot size={17} style={{ color: 'var(--color-accent)' }} />
          <span>{label}</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="ai-dialog"
              role="dialog"
              aria-label="Ask AI"
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="ai-header">
                <div className="ai-title">
                  <span className="ai-avatar">
                    <Bot size={16} />
                  </span>
                  <div className="ai-title-copy">
                    <h2>Ask AI</h2>
                    <p>AI-powered tutor for quick explanations.</p>
                  </div>
                </div>
                <div className="ai-header-actions">
                  {messages.length > 0 && (
                    <Button variant="ghost" size="sm" icon={Trash2} onClick={handleClear}>
                      New chat
                    </Button>
                  )}
                  <IconButton label="Close Ask AI" icon={X} onClick={() => setOpen(false)} />
                </div>
              </div>

              <div className="ai-context">
                <div className="field-shell">
                  <input
                    className="text-input"
                    value={context}
                    onChange={(event) => setContext(event.target.value)}
                    placeholder="Context, e.g. Maths / Polynomials"
                  />
                </div>
              </div>

              <div className="ai-messages">
                {messages.length === 0 && !loading && !error && (
                  <div className="empty-state ai-empty">
                    <div className="empty-icon">
                      <Sparkles size={22} />
                    </div>
                    <h2>Ask what you are stuck on</h2>
                    <p>Add the chapter context above, then ask for an explanation, example, or quick check.</p>
                  </div>
                )}

                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className="ai-message"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="ai-avatar">
                        {message.role === 'user' ? <User size={15} /> : <Bot size={15} />}
                      </span>
                      <div className="ai-bubble">
                        {message.role === 'assistant' ? (
                          <FormattedAnswer text={message.content} />
                        ) : (
                          <>
                            <p>{message.content}</p>
                            <MessageImages attachments={message.attachments} />
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {loading && (
                  <div className="ai-message">
                    <span className="ai-avatar"><Bot size={15} /></span>
                    <TypingDots />
                  </div>
                )}

                {error && (
                  <div className="error-box">
                    <AlertCircle size={16} style={{ flex: '0 0 auto', marginTop: 2 }} />
                    <span>{error}</span>
                  </div>
                )}

                <div ref={listEndRef} />
              </div>

              <div className="ai-composer">
                {attachments.length > 0 && (
                  <div className="ai-attachments" aria-label="Attached images">
                    {attachments.map((attachment) => (
                      <div className="ai-attachment" key={attachment.id}>
                        <img src={attachment.dataUrl} alt={attachment.name} />
                        <span>{attachment.name}</span>
                        <IconButton
                          label={`Remove ${attachment.name}`}
                          icon={X}
                          className="ai-remove-attachment"
                          onClick={() => removeAttachment(attachment.id)}
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="field-shell ai-composer-field">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="ai-file-input"
                    onChange={handleFilesSelected}
                  />
                  <IconButton
                    label="Attach image"
                    icon={ImagePlus}
                    className="ai-attach-button"
                    disabled={loading || preparingImages || attachments.length >= MAX_IMAGES}
                    onClick={() => fileInputRef.current?.click()}
                  />
                  <textarea
                    ref={inputRef}
                    className="ai-input"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && !event.shiftKey) {
                        event.preventDefault()
                        handleSend()
                      }
                    }}
                    placeholder="Type your doubt..."
                    rows={1}
                  />
                  <IconButton label="Send message" icon={Send} disabled={!canSend} onClick={handleSend} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
