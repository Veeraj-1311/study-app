import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Check, Trash2 } from 'lucide-react'

const STORAGE_KEY = 'learnflow-todos'

const loadTodos = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') } catch { return [] }
}
const saveTodos = (t) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(t)) } catch {}
}

const newId = () => (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`)

export default function TodoPanel({ open, onClose }) {
  const [todos, setTodos] = useState(loadTodos)
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  useEffect(() => { saveTodos(todos) }, [todos])

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 200)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const addTodo = () => {
    const t = input.trim()
    if (!t) return
    setTodos((prev) => [{ id: newId(), text: t, done: false, createdAt: Date.now(), completedAt: null }, ...prev])
    setInput('')
  }

  const toggle = (id) => {
    setTodos((prev) => prev.map((it) => it.id === id ? { ...it, done: !it.done, completedAt: !it.done ? Date.now() : null } : it))
  }

  const remove = (id) => {
    setTodos((prev) => prev.filter((it) => it.id !== id))
  }

  const sorted = [...todos].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1
    if (a.done) return (b.completedAt || 0) - (a.completedAt || 0)
    return b.createdAt - a.createdAt
  })

  const pendingCount = todos.filter((t) => !t.done).length
  const doneCount = todos.length - pendingCount

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.55)',
              backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)',
              zIndex: 50,
            }}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: 'min(420px, 100vw)',
              backgroundColor: '#202020',
              borderLeft: '1px solid #3c3c3c',
              boxShadow: '-24px 0 48px -16px rgba(0,0,0,0.6)',
              zIndex: 51,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid #3c3c3c' }}>
              <div>
                <h2 className="text-lg font-medium" style={{ color: '#e8eaed', letterSpacing: '-0.01em' }}>Notes</h2>
                <p className="text-xs mt-0.5" style={{ color: '#9aa0a6' }}>
                  {pendingCount === 0 && doneCount === 0 ? 'Nothing here yet'
                    : pendingCount === 0 ? `${doneCount} done`
                    : `${pendingCount} pending${doneCount > 0 ? ` · ${doneCount} done` : ''}`}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ color: '#9aa0a6', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a'; e.currentTarget.style.color = '#e8eaed' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#9aa0a6' }}
                aria-label="Close notes"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 pt-4">
              <div
                className="flex gap-1 items-center rounded-lg px-3 py-1 transition-colors"
                style={{ backgroundColor: '#1a1a1a', border: '1px solid #3c3c3c' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#f9ab00' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#3c3c3c' }}
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                  placeholder="Add a note..."
                  className="flex-1 bg-transparent text-sm py-2.5 outline-none"
                  style={{ color: '#e8eaed' }}
                />
                <button
                  onClick={addTodo}
                  disabled={!input.trim()}
                  className="w-8 h-8 rounded-md flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    color: input.trim() ? '#1f1f1f' : '#5f6368',
                    backgroundColor: input.trim() ? '#f9ab00' : 'transparent',
                  }}
                  aria-label="Add note"
                >
                  <Plus size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1.5">
              <AnimatePresence initial={false}>
                {sorted.length === 0 ? (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-center py-12"
                    style={{ color: '#5f6368' }}
                  >
                    No notes yet. Add one above.
                  </motion.p>
                ) : sorted.map((todo) => (
                  <motion.div
                    key={todo.id}
                    layout
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.25,
                      ease: 'easeOut',
                      layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    }}
                    className="group flex items-start gap-3 px-3 py-2.5 rounded-lg"
                    style={{
                      backgroundColor: todo.done ? 'transparent' : '#2a2a2a',
                      border: todo.done ? '1px solid transparent' : '1px solid #3c3c3c',
                    }}
                  >
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => toggle(todo.id)}
                      className="mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        backgroundColor: todo.done ? '#f9ab00' : 'transparent',
                        border: `1.5px solid ${todo.done ? '#f9ab00' : '#5f6368'}`,
                        color: todo.done ? '#1f1f1f' : 'transparent',
                      }}
                      aria-label={todo.done ? 'Mark as not done' : 'Mark as done'}
                    >
                      <AnimatePresence>
                        {todo.done && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.18, ease: 'backOut' }}
                            style={{ display: 'inline-flex' }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>

                    <span
                      className="flex-1 text-sm leading-relaxed break-words"
                      style={{
                        color: todo.done ? '#5f6368' : '#e8eaed',
                        textDecoration: todo.done ? 'line-through' : 'none',
                        textDecorationColor: todo.done ? '#5f6368' : 'transparent',
                        transition: 'color 0.25s ease',
                      }}
                    >
                      {todo.text}
                    </span>

                    <button
                      onClick={() => remove(todo.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded shrink-0"
                      style={{ color: '#5f6368' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#f28b82' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#5f6368' }}
                      aria-label="Delete note"
                    >
                      <Trash2 size={14} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
