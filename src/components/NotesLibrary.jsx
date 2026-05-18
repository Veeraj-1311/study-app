import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Pin, Search, StickyNote } from 'lucide-react'
import quizMeta from '../data/quizMeta.js'
import { loadJson } from '../utils/progress.js'
import { Card, EmptyState } from './ui.jsx'

const NOTES_KEY = 'learnflow-chapter-notes'

function collectNotes() {
  const raw = loadJson(NOTES_KEY, {})
  return Object.entries(raw).flatMap(([key, item]) => {
    const [subjectId, chapterIdText] = key.split('_')
    const chapterId = Number(chapterIdText)
    const subject = quizMeta[subjectId]
    const chapter = subject?.chapters.find((entry) => entry.id === chapterId)
    if (!subject || !chapter) return []
    const record = typeof item === 'string' ? { text: item, pinned: false } : item
    const text = record?.text || ''
    if (!text.trim() && !record?.pinned) return []
    return {
      key,
      subjectId,
      chapterId,
      subjectName: subject.name,
      chapterName: chapter.name,
      text,
      pinned: Boolean(record?.pinned),
      updatedAt: record?.updatedAt || 0,
    }
  })
}

export default function NotesLibrary() {
  const [query, setQuery] = useState('')
  const [subjectFilter, setSubjectFilter] = useState('all')
  const notes = useMemo(() => collectNotes(), [])
  const subjects = [...new Set(notes.map((note) => note.subjectId))]
  const needle = query.trim().toLowerCase()
  const filtered = notes
    .filter((note) => subjectFilter === 'all' || note.subjectId === subjectFilter)
    .filter((note) => {
      if (!needle) return true
      return `${note.subjectName} ${note.chapterName} ${note.text}`.toLowerCase().includes(needle)
    })
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || (b.updatedAt || 0) - (a.updatedAt || 0))

  return (
    <Card className="notes-library">
      <div className="panel-title-row">
        <div>
          <h2>Notes library</h2>
          <p>Search pinned notes, formulas, doubts, and chapter reminders.</p>
        </div>
        <StickyNote size={20} style={{ color: 'var(--color-accent)' }} />
      </div>

      <div className="notes-library-controls">
        <div className="field-shell">
          <Search size={16} style={{ color: 'var(--color-text-muted)' }} />
          <input
            className="text-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search notes..."
          />
        </div>
        <div className="issue-chip-row">
          <button type="button" data-active={subjectFilter === 'all'} onClick={() => setSubjectFilter('all')}>All</button>
          {subjects.map((subjectId) => (
            <button
              key={subjectId}
              type="button"
              data-active={subjectFilter === subjectId}
              onClick={() => setSubjectFilter(subjectId)}
            >
              {quizMeta[subjectId]?.name || subjectId}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={BookOpen} title="No notes found" description="Pinned and saved chapter notes will show here." />
      ) : (
        <div className="notes-result-list">
          {filtered.map((note) => (
            <Link className="note-result" to={`/chapter/${note.subjectId}/${note.chapterId}`} key={note.key}>
              <span className="note-result-meta">
                {note.pinned && <Pin size={13} />}
                {note.subjectName} / {note.chapterName}
              </span>
              <strong>{note.chapterName}</strong>
              <p>{note.text}</p>
            </Link>
          ))}
        </div>
      )}
    </Card>
  )
}
