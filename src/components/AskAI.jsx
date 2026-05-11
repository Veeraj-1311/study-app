import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Sparkles, Trash2, AlertCircle, User } from 'lucide-react'

const STORAGE_KEY = 'learnflow-ai-chat'

const loadHistory = () => {
  try { return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]') } catch { return [] }
}

const saveHistory = (msgs) => {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(msgs)) } catch {}
}

function FormattedAnswer({ text }) {
  // Tiny markdown helper: **bold**, line breaks, and simple lists.
  const lines = text.split('\n')
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        const trimmed = line.trim()
        if (trimmed === '') return <div key={i} style={{ height: 4 }} />
        const isBullet = /^[-*•]\s/.test(trimmed)
        const cleaned = isBullet ? trimmed.replace(/^[-*•]\s/, '') : trimmed
        const parts = cleaned.split(/(\*\*[^*]+\*\*)/g)
        return (
          <div key={i} className={isBullet ? 'flex gap-2' : ''}>
            {isBullet && <span style={{ color: 'var(--color-accent)', marginTop: 6 }}>•</span>}
            <p className="text-sm leading-relaxed flex-1" style={{ color: '#e8eaed' }}>
              {parts.map((p, j) =>
                p.startsWith('**') && p.endsWith('**') ? (
                  <strong key={j} style={{ color: '#ffffff' }}>{p.slice(2, -2)}</strong>
                ) : (
                  <span key={j}>{p}</span>
                )
              )}
            </p>
          </div>
        )
      })}
    </div>
  )
}

function TypingDots() {
  return (
    <div className="flex gap-1 items-center px-1 py-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
      ))}
    </div>
  )
}

export default function AskAI({ defaultContext = '' }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [context, setContext] = useState(defaultContext)
  const [messages, setMessages] = useState(loadHistory)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)
  const listEndRef = useRef(null)

  useEffect(() => { setContext(defaultContext) }, [defaultContext])

  useEffect(() => { saveHistory(messages) }, [messages])

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 220)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    if (open) listEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, loading, open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || loading) return
    setError(null)
    setInput('')
    const next = [...messages, { role: 'user', content: text, id: Date.now() }]
    setMessages(next)
    setLoading(true)
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.map(({ role, content }) => ({ role, content })), context: context.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || `Request failed (${res.status})`)
      } else {
        setMessages((m) => [...m, { role: 'assistant', content: data.answer, id: Date.now() + 1 }])
      }
    } catch (e) {
      setError(e?.message || 'Network error')
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setMessages([])
    setError(null)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full text-sm font-medium z-30"
        style={{
          backgroundColor: '#2a2a2a',
          color: '#e8eaed',
          border: '1px solid #3c3c3c',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.6)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#353535'
          e.currentTarget.style.borderColor = 'var(--color-accent)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2a2a2a'
          e.currentTarget.style.borderColor = '#3c3c3c'
        }}
        aria-label="Ask AI"
      >
        <Bot size={16} style={{ color: 'var(--color-accent)' }} />
        Ask AI
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                backgroundColor: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
                zIndex: 50,
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-label="Ask AI"
              style={{
                position: 'fixed',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(640px, calc(100vw - 32px))',
                height: 'min(82vh, 760px)',
                backgroundColor: '#202020',
                border: '1px solid #3c3c3c',
                borderRadius: 16,
                zIndex: 51,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 24px 60px -20px rgba(0,0,0,0.7)',
              }}
            >
              <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ borderBottom: '1px solid #3c3c3c' }}>
                <div className="flex items-center gap-2">
                  <Bot size={18} style={{ color: 'var(--color-accent)' }} />
                  <div>
                    <h2 className="text-base font-medium leading-tight" style={{ color: '#e8eaed', letterSpacing: '-0.01em' }}>Ask AI</h2>
                    <p className="text-xs" style={{ color: '#5f6368' }}>Gemini 2.0 Flash · in-app</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {messages.length > 0 && (
                    <button
                      onClick={handleClear}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs transition-colors"
                      style={{ color: '#9aa0a6', backgroundColor: 'transparent' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a'; e.currentTarget.style.color = '#f28b82' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#9aa0a6' }}
                    >
                      <Trash2 size={12} />
                      New chat
                    </button>
                  )}
                  <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{ color: '#9aa0a6' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a'; e.currentTarget.style.color = '#e8eaed' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#9aa0a6' }}
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="px-5 pt-3 shrink-0">
                <input
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Context (optional) — e.g., Maths · Algebra · linear equations"
                  className="w-full rounded-lg px-3 py-2 text-xs outline-none"
                  style={{ backgroundColor: '#1a1a1a', border: '1px solid #3c3c3c', color: '#e8eaed' }}
                />
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {messages.length === 0 && !loading && !error && (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-2 py-8" style={{ color: '#5f6368' }}>
                    <Sparkles size={22} style={{ color: 'var(--color-accent)' }} />
                    <p className="text-sm font-medium" style={{ color: '#e8eaed' }}>Ask anything you're stuck on</p>
                    <p className="text-xs max-w-xs">Explain a concept, walk through a problem, give an example. Add a context line above for sharper answers.</p>
                  </div>
                )}

                <AnimatePresence initial={false}>
                  {messages.map((m) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="flex gap-3"
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: m.role === 'user' ? '#2a2a2a' : 'rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.18)',
                          border: m.role === 'user' ? '1px solid #3c3c3c' : '1px solid rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.4)',
                          color: m.role === 'user' ? '#9aa0a6' : 'var(--color-accent)',
                        }}
                      >
                        {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                      </div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        {m.role === 'assistant'
                          ? <FormattedAnswer text={m.content} />
                          : <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: '#e8eaed' }}>{m.content}</p>
                        }
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: 'rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.18)',
                        border: '1px solid rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.4)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      <Bot size={14} />
                    </div>
                    <TypingDots />
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2 items-start rounded-lg px-3 py-2.5"
                    style={{ backgroundColor: 'rgba(242, 139, 130, 0.10)', border: '1px solid rgba(242, 139, 130, 0.35)' }}
                  >
                    <AlertCircle size={14} style={{ color: '#f28b82', marginTop: 2 }} />
                    <p className="text-xs leading-relaxed" style={{ color: '#f28b82' }}>{error}</p>
                  </motion.div>
                )}

                <div ref={listEndRef} />
              </div>

              <div className="px-5 pb-5 pt-3 shrink-0" style={{ borderTop: '1px solid #3c3c3c' }}>
                <div
                  className="flex gap-2 items-end rounded-xl px-3 py-2 transition-colors"
                  style={{ backgroundColor: '#1a1a1a', border: '1px solid #3c3c3c' }}
                >
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="What's your doubt? (Enter to send, Shift+Enter for newline)"
                    rows={1}
                    className="flex-1 bg-transparent text-sm py-1.5 outline-none resize-none leading-relaxed"
                    style={{ color: '#e8eaed', fontFamily: 'inherit', maxHeight: 160 }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: input.trim() && !loading ? 'var(--color-accent)' : 'transparent',
                      color: input.trim() && !loading ? '#1f1f1f' : '#5f6368',
                    }}
                    aria-label="Send"
                  >
                    <Send size={16} strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
