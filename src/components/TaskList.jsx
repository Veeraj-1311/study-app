import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Check, Trash2, ClipboardList } from 'lucide-react'

const STORAGE_KEY = 'learnflow-todos'
const EXPIRY_MS = 48 * 60 * 60 * 1000

const newId = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`

const filterExpired = (list, now = Date.now()) =>
  list.filter((t) => now - (t.createdAt || 0) < EXPIRY_MS)

const loadTodos = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return filterExpired(raw)
  } catch {
    return []
  }
}

const saveTodos = (t) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(t)) } catch {}
}

export default function TaskList() {
  const [todos, setTodos] = useState(loadTodos)
  const [input, setInput] = useState('')

  useEffect(() => { saveTodos(todos) }, [todos])

  // Auto-cleanup expired tasks every 5 minutes
  useEffect(() => {
    const tick = () => setTodos((prev) => {
      const filtered = filterExpired(prev)
      return filtered.length === prev.length ? prev : filtered
    })
    const id = setInterval(tick, 5 * 60 * 1000)
    return () => clearInterval(id)
  }, [])

  const addTodo = () => {
    const t = input.trim()
    if (!t) return
    setTodos((prev) => [
      { id: newId(), text: t, done: false, createdAt: Date.now(), completedAt: null },
      ...prev,
    ])
    setInput('')
  }

  const toggle = (id) => {
    setTodos((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, done: !it.done, completedAt: !it.done ? Date.now() : null } : it
      )
    )
  }

  const remove = (id) => {
    setTodos((prev) => prev.filter((it) => it.id !== id))
  }

  const sorted = [...todos].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1
    if (a.done) return (b.completedAt || 0) - (a.completedAt || 0)
    return b.createdAt - a.createdAt
  })

  return (
    <div className="w-full text-left">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-lg font-medium" style={{ color: '#e8eaed', letterSpacing: '-0.01em' }}>
          Tasks
        </h2>
        <span className="text-xs" style={{ color: '#5f6368' }}>
          auto-removes after 48h
        </span>
      </div>

      <div
        className="flex gap-1 items-center rounded-lg px-3 mb-3 transition-colors"
        style={{ backgroundColor: '#1a1a1a', border: '1px solid #3c3c3c' }}
        onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)' }}
        onBlur={(e) => { e.currentTarget.style.borderColor = '#3c3c3c' }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a task..."
          className="flex-1 bg-transparent text-sm py-2.5 outline-none"
          style={{ color: '#e8eaed' }}
        />
        <button
          onClick={addTodo}
          disabled={!input.trim()}
          className="w-8 h-8 rounded-md flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            color: input.trim() ? '#1f1f1f' : '#5f6368',
            backgroundColor: input.trim() ? 'var(--color-accent)' : 'transparent',
          }}
          aria-label="Add task"
        >
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </div>

      <div className="space-y-1.5 min-h-[60px]">
        <AnimatePresence initial={false}>
          {sorted.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center py-6 gap-2"
              style={{ color: '#5f6368' }}
            >
              <ClipboardList size={22} strokeWidth={1.5} />
              <p className="text-sm">No tasks yet</p>
              <p className="text-xs" style={{ color: '#4a4a4e' }}>Add one above to get started.</p>
            </motion.div>
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
                  backgroundColor: todo.done ? 'var(--color-accent)' : 'transparent',
                  border: `1.5px solid ${todo.done ? 'var(--color-accent)' : '#5f6368'}`,
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
                aria-label="Delete task"
              >
                <Trash2 size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
