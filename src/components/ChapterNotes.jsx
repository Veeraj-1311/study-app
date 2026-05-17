import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, StickyNote } from 'lucide-react'
import { Card } from './ui.jsx'

const STORAGE_KEY = 'learnflow-chapter-notes'

const keyFor = (subjectId, chapterId) => `${subjectId}_${chapterId}`

const loadAll = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

const saveAll = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  } catch {
    return false
  }
  return true
}

const loadNote = (subjectId, chapterId) => loadAll()[keyFor(subjectId, chapterId)] || ''

export default function ChapterNotes({ subjectId, chapterId }) {
  const [value, setValue] = useState(() => loadNote(subjectId, chapterId))
  const [saved, setSaved] = useState(false)
  const debounceRef = useRef(null)
  const initialRenderRef = useRef(true)

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false
      return undefined
    }
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      const all = loadAll()
      const key = keyFor(subjectId, chapterId)
      if (value.trim()) all[key] = value
      else delete all[key]
      saveAll(all)
      setSaved(true)
      window.setTimeout(() => setSaved(false), 1200)
    }, 350)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [value, subjectId, chapterId])

  return (
    <Card className="notes-box">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <StickyNote size={17} style={{ color: 'var(--color-accent)' }} />
          <h2 className="text-base font-extrabold m-0">Chapter notes</h2>
        </div>
        <AnimatePresence>
          {saved && (
            <motion.span
              initial={{ opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              className="status-pill"
              style={{ color: '#16a34a' }}
            >
              <Check size={14} />
              Saved
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <textarea
        className="text-area"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Jot formulas, doubts, examples, or quick reminders. Notes auto-save."
        rows={5}
      />
    </Card>
  )
}
