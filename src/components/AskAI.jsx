import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Copy, Check, ExternalLink } from 'lucide-react'

const TARGETS = [
  { id: 'claude',  label: 'Claude',  url: 'https://claude.ai/new' },
  { id: 'chatgpt', label: 'ChatGPT', url: 'https://chatgpt.com/' },
  { id: 'gemini',  label: 'Gemini',  url: 'https://gemini.google.com/app' },
]

const buildPrompt = (context, doubt) => {
  const ctx = context?.trim()
  const q = doubt?.trim() || '(write your question here)'
  if (!ctx) return q
  return `Context: ${ctx}\n\nMy question: ${q}`
}

export default function AskAI({ defaultContext = '' }) {
  const [open, setOpen] = useState(false)
  const [doubt, setDoubt] = useState('')
  const [context, setContext] = useState(defaultContext)
  const [copied, setCopied] = useState(null)
  const wrapRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => { setContext(defaultContext) }, [defaultContext])

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 200)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleSend = async (target) => {
    const prompt = buildPrompt(context, doubt)
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(target.id)
      setTimeout(() => setCopied(null), 1600)
    } catch {}
    window.open(target.url, '_blank', 'noopener,noreferrer')
  }

  const handleCopy = async () => {
    const prompt = buildPrompt(context, doubt)
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied('clipboard')
      setTimeout(() => setCopied(null), 1600)
    } catch {}
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
              ref={wrapRef}
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
                width: 'min(520px, calc(100vw - 32px))',
                maxHeight: '85vh',
                backgroundColor: '#202020',
                border: '1px solid #3c3c3c',
                borderRadius: 16,
                zIndex: 51,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 24px 60px -20px rgba(0,0,0,0.7)',
              }}
            >
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #3c3c3c' }}>
                <div className="flex items-center gap-2">
                  <Bot size={18} style={{ color: 'var(--color-accent)' }} />
                  <h2 className="text-base font-medium" style={{ color: '#e8eaed', letterSpacing: '-0.01em' }}>Ask AI a doubt</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ color: '#9aa0a6' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a'; e.currentTarget.style.color = '#e8eaed' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#9aa0a6' }}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-5 space-y-4 overflow-y-auto">
                <div>
                  <label className="text-xs font-medium mb-1.5 block" style={{ color: '#9aa0a6' }}>Context (optional)</label>
                  <input
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    placeholder="e.g., Maths · Algebra · linear equations"
                    className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #3c3c3c', color: '#e8eaed' }}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block" style={{ color: '#9aa0a6' }}>Your doubt</label>
                  <textarea
                    ref={inputRef}
                    value={doubt}
                    onChange={(e) => setDoubt(e.target.value)}
                    placeholder="Explain what's confusing you. Be specific — the more detail, the better the answer."
                    rows={5}
                    className="w-full rounded-lg px-3 py-2.5 text-sm outline-none resize-y leading-relaxed"
                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #3c3c3c', color: '#e8eaed', fontFamily: 'inherit' }}
                  />
                </div>

                <div className="rounded-lg px-3 py-2 text-xs leading-relaxed" style={{ backgroundColor: '#1a1a1a', border: '1px solid #3c3c3c', color: '#9aa0a6' }}>
                  Click an AI below — your prompt copies to the clipboard and the chat opens in a new tab. Paste with Ctrl+V (Cmd+V on Mac).
                </div>

                <div className="flex flex-wrap gap-2">
                  {TARGETS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleSend(t)}
                      disabled={!doubt.trim()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        color: '#1f1f1f',
                      }}
                      onMouseEnter={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.filter = 'brightness(1.08)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)' }}
                    >
                      {copied === t.id ? <Check size={14} /> : <ExternalLink size={14} />}
                      {copied === t.id ? `Copied — opening ${t.label}` : `Open in ${t.label}`}
                    </button>
                  ))}
                  <button
                    onClick={handleCopy}
                    disabled={!doubt.trim()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm transition disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#e8eaed',
                      border: '1px solid #3c3c3c',
                    }}
                    onMouseEnter={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.backgroundColor = '#2a2a2a' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                  >
                    {copied === 'clipboard' ? <Check size={14} /> : <Copy size={14} />}
                    {copied === 'clipboard' ? 'Copied' : 'Copy only'}
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
