import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, Bot, Send, Sparkles, Trash2, User, X } from 'lucide-react'
import { Button, IconButton } from './ui.jsx'

const STORAGE_KEY = 'learnflow-ai-chat'

const loadHistory = () => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

const saveHistory = (messages) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  } catch {
    return false
  }
  return true
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

export default function AskAI({ defaultContext = '', inline = false }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [context, setContext] = useState(defaultContext)
  const [messages, setMessages] = useState(loadHistory)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)
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
    if (!text || loading) return
    setError(null)
    setInput('')
    const next = [...messages, { role: 'user', content: text, id: crypto.randomUUID?.() || `${Date.now()}` }]
    setMessages(next)
    setLoading(true)
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
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
        { role: 'assistant', content: data.answer || 'I did not get a usable answer.', id: crypto.randomUUID?.() || `${Date.now()}-ai` },
      ])
    } catch (requestError) {
      setError(requestError?.message || 'Network error. Try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setMessages([])
    setError(null)
  }

  return (
    <>
      <div className={inline ? 'inline-tool' : 'ai-fab'}>
        <motion.button
          type="button"
          className={inline ? 'button button-secondary button-sm' : 'floating-button'}
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.96 }}
          aria-label="Ask AI"
        >
          <Bot size={17} style={{ color: 'var(--color-accent)' }} />
          <span>Ask AI</span>
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
                  <div>
                    <h2>Ask AI</h2>
                    <p>Gemini-powered tutor, once the API key is added.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
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
                  <div className="empty-state" style={{ minHeight: 260 }}>
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
                        {message.role === 'assistant'
                          ? <FormattedAnswer text={message.content} />
                          : <p>{message.content}</p>}
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
                <div className="field-shell" style={{ alignItems: 'flex-end', paddingRight: 4 }}>
                  <textarea
                    ref={inputRef}
                    className="text-area"
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
                    style={{ minHeight: 44, maxHeight: 150, resize: 'none' }}
                  />
                  <IconButton label="Send message" icon={Send} disabled={!input.trim() || loading} onClick={handleSend} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
