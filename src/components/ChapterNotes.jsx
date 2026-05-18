import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, List, Pin, StickyNote, Trash2 } from 'lucide-react'
import { Card, IconButton } from './ui.jsx'

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

const loadNoteRecord = (subjectId, chapterId) => {
  const item = loadAll()[keyFor(subjectId, chapterId)]
  if (!item) return { text: '', pinned: false, updatedAt: null }
  if (typeof item === 'string') return { text: item, pinned: false, updatedAt: null }
  return { text: item.text || '', pinned: Boolean(item.pinned), updatedAt: item.updatedAt || null }
}

export default function ChapterNotes({ subjectId, chapterId }) {
  const initial = loadNoteRecord(subjectId, chapterId)
  const [value, setValue] = useState(initial.text)
  const [pinned, setPinned] = useState(initial.pinned)
  const [saved, setSaved] = useState(false)
  const debounceRef = useRef(null)
  const initialRenderRef = useRef(true)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false
      return undefined
    }
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      const all = loadAll()
      const key = keyFor(subjectId, chapterId)
      if (value.trim() || pinned) all[key] = { text: value, pinned, updatedAt: Date.now() }
      else delete all[key]
      saveAll(all)
      setSaved(true)
      window.setTimeout(() => setSaved(false), 1200)
    }, 350)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [value, pinned, subjectId, chapterId])

  const insertSnippet = (snippet) => {
    const textarea = textareaRef.current
    if (!textarea) {
      setValue((current) => `${current}${snippet}`)
      return
    }
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const prefix = value.slice(0, start)
    const suffix = value.slice(end)
    const next = `${prefix}${snippet}${suffix}`
    setValue(next)
    window.requestAnimationFrame(() => {
      textarea.focus()
      textarea.setSelectionRange(start + snippet.length, start + snippet.length)
    })
  }

  return (
    <Card className="notes-box">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <StickyNote size={17} style={{ color: 'var(--color-accent)' }} />
          <h2 className="text-base font-extrabold m-0">Chapter notes</h2>
        </div>
        <div className="notes-actions">
          <IconButton label={pinned ? 'Unpin note' : 'Pin note'} icon={Pin} className={pinned ? 'is-active' : ''} onClick={() => setPinned((value) => !value)} />
          <IconButton label="Clear note" icon={Trash2} onClick={() => setValue('')} disabled={!value.trim()} />
        </div>
      </div>
      <div className="notes-toolbar" aria-label="Note shortcuts">
        <button type="button" onClick={() => insertSnippet('\n- ')}><List size={14} /> Bullet</button>
        <button type="button" onClick={() => insertSnippet('\n[ ] ')}><Check size={14} /> Check</button>
        <button type="button" onClick={() => insertSnippet('\nFormula: ')}>fx Formula</button>
      </div>
      <textarea
        ref={textareaRef}
        className="text-area"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Jot formulas, doubts, examples, or quick reminders. Notes auto-save."
        rows={5}
      />
      <div className="notes-footer">
        <span>{value.length} chars{pinned ? ' / pinned' : ''}</span>
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
    </Card>
  )
}
