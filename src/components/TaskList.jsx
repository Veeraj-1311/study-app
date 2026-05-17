import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ClipboardList, Plus, Trash2 } from 'lucide-react'
import { IconButton } from './ui.jsx'

const STORAGE_KEY = 'learnflow-todos'
const EXPIRY_MS = 48 * 60 * 60 * 1000

const newId = () => (
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`
)

const filterExpired = (list, now = Date.now()) =>
  list.filter((task) => now - (task.createdAt || 0) < EXPIRY_MS)

const loadTodos = () => {
  try {
    return filterExpired(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
  } catch {
    return []
  }
}

const saveTodos = (todos) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch {
    return false
  }
  return true
}

export default function TaskList() {
  const [todos, setTodos] = useState(loadTodos)
  const [input, setInput] = useState('')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  useEffect(() => {
    const tick = () => {
      setTodos((prev) => {
        const filtered = filterExpired(prev)
        return filtered.length === prev.length ? prev : filtered
      })
    }
    const id = setInterval(tick, 5 * 60 * 1000)
    return () => clearInterval(id)
  }, [])

  const addTodo = () => {
    const text = input.trim()
    if (!text) return
    setTodos((prev) => [
      { id: newId(), text, done: false, createdAt: Date.now(), completedAt: null },
      ...prev,
    ])
    setInput('')
  }

  const toggle = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done, completedAt: !item.done ? Date.now() : null } : item
      )
    )
  }

  const remove = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const sorted = [...todos].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1
    if (a.done) return (b.completedAt || 0) - (a.completedAt || 0)
    return b.createdAt - a.createdAt
  })

  return (
    <section className="card task-box">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg font-extrabold m-0">Today</h2>
          <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>Tasks clear after 48 hours.</p>
        </div>
        <ClipboardList size={20} style={{ color: 'var(--color-accent)' }} />
      </div>

      <div className="field-shell mb-3">
        <input
          className="text-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') addTodo()
          }}
          placeholder="Add a task..."
        />
        <IconButton label="Add task" icon={Plus} onClick={addTodo} disabled={!input.trim()} />
      </div>

      <div className="grid gap-2">
        <AnimatePresence initial={false}>
          {sorted.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="empty-state"
              style={{ padding: 24 }}
            >
              <p>No tasks yet. Keep it simple.</p>
            </motion.div>
          ) : sorted.map((todo) => (
            <motion.div
              key={todo.id}
              layout
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 12 }}
              className="flex items-start gap-3 p-3"
              style={{
                borderRadius: 'var(--radius-card)',
                background: todo.done ? 'transparent' : '#f8fafc',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <button
                type="button"
                onClick={() => toggle(todo.id)}
                className="mt-0.5 grid place-items-center"
                aria-label={todo.done ? 'Mark as not done' : 'Mark as done'}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 7,
                  border: `1px solid ${todo.done ? 'var(--color-accent)' : 'var(--color-border-subtle)'}`,
                  color: todo.done ? 'white' : 'transparent',
                  background: todo.done ? 'var(--color-accent)' : 'white',
                  cursor: 'pointer',
                }}
              >
                <Check size={13} />
              </button>
              <span
                className="flex-1 text-sm leading-relaxed break-words"
                style={{
                  color: todo.done ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
                  textDecoration: todo.done ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <button
                type="button"
                onClick={() => remove(todo.id)}
                aria-label="Delete task"
                style={{ color: 'var(--color-text-muted)', background: 'transparent', cursor: 'pointer' }}
              >
                <Trash2 size={15} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
