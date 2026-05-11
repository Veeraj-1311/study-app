import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StickyNote, Check } from 'lucide-react'

const STORAGE_KEY = 'learnflow-chapter-notes'

const loadAll = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch { return {} }
}

const saveAll = (obj) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)) } catch {}
}

const keyFor = (s, c) => `${s}_${c}`

export default function ChapterNotes({ subjectId, chapterId }) {
  const [value, setValue] = useState('')
  const [saved, setSaved] = useState(false)
  const debounceRef = useRef(null)
  const initialLoadRef = useRef(true)

  useEffect(() => {
    const all = loadAll()
    setValue(all[keyFor(subjectId, chapterId)] || '')
    initialLoadRef.current = true
  }, [subjectId, chapterId])

  useEffect(() => {
    if (initialLoadRef.current) {
      initialLoadRef.current = false
      return
    }
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      const all = loadAll()
      const k = keyFor(subjectId, chapterId)
      if (value.trim() === '') delete all[k]
      else all[k] = value
      saveAll(all)
      setSaved(true)
      setTimeout(() => setSaved(false), 1400)
    }, 400)
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [value, subjectId, chapterId])

  const charCount = value.length

  return (
    <div
      className="rounded-2xl p-5"
      style={{ backgroundColor: '#242424', border: '1px solid #3c3c3c' }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <StickyNote size={16} style={{ color: 'var(--color-accent)' }} />
          <h3 className="text-sm font-medium" style={{ color: '#e8eaed' }}>Notes</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs tabular-nums" style={{ color: '#5f6368' }}>
            {charCount > 0 ? `${charCount} chars` : ''}
          </span>
          <AnimatePresence>
            {saved && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-1 text-xs"
                style={{ color: '#81c995' }}
              >
                <Check size={12} />
                Saved
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Jot down formulas, doubts, mnemonics… auto-saves as you type."
        rows={5}
        className="w-full bg-transparent text-sm leading-relaxed outline-none resize-y"
        style={{ color: '#e8eaed', fontFamily: 'inherit' }}
      />
    </div>
  )
}
