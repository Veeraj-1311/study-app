import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, FileText, HelpCircle, Search, X } from 'lucide-react'
import quizMeta from '../data/quizMeta.js'
import { searchQuestionBank } from '../data/questionLoaders.js'
import { IconButton } from './ui.jsx'

const baseResultsFor = (query) => {
  const needle = query.trim().toLowerCase()
  if (needle.length < 2) return []

  const results = []
  Object.entries(quizMeta).forEach(([subjectId, subject]) => {
    if (subject.name.toLowerCase().includes(needle)) {
      results.push({
        type: 'subject',
        to: `/subject/${subjectId}`,
        title: subject.name,
        description: `${subject.chapters.length} chapters`,
      })
    }

    subject.chapters.forEach((chapter) => {
      const haystack = `${chapter.name} ${chapter.description}`.toLowerCase()
      if (!haystack.includes(needle)) return
      results.push({
        type: 'chapter',
        to: `/chapter/${subjectId}/${chapter.id}`,
        title: chapter.name,
        description: `${subject.name} / ${chapter.questionCount} questions`,
      })
    })
  })

  return results.slice(0, 8)
}

const iconFor = {
  subject: BookOpen,
  chapter: BookOpen,
  summary: FileText,
  question: HelpCircle,
}

export default function StudySearch() {
  const [query, setQuery] = useState('')
  const [asyncResults, setAsyncResults] = useState([])
  const baseResults = useMemo(() => baseResultsFor(query), [query])
  const hasQuery = query.trim().length >= 2

  useEffect(() => {
    let cancelled = false
    const needle = query.trim()
    if (needle.length < 2) {
      return undefined
    }

    const timer = window.setTimeout(async () => {
      try {
        const [{ default: summaries }, questionResults] = await Promise.all([
          import('../data/summaries.js'),
          searchQuestionBank(needle, quizMeta, 6),
        ])
        if (cancelled) return

        const lower = needle.toLowerCase()
        const summaryResults = []
        Object.entries(summaries).forEach(([subjectId, chapters]) => {
          const subject = quizMeta[subjectId]
          if (!subject) return
          Object.entries(chapters).forEach(([chapterId, points]) => {
            const chapter = subject.chapters.find((item) => item.id === Number(chapterId))
            if (!chapter) return
            const match = points.find((point) => point.toLowerCase().includes(lower))
            if (!match) return
            summaryResults.push({
              type: 'summary',
              to: `/summary/${subjectId}/${chapterId}`,
              title: chapter.name,
              description: match,
            })
          })
        })

        setAsyncResults([
          ...summaryResults.slice(0, 4),
          ...questionResults.map((result) => ({
            ...result,
            to: `/chapter/${result.subjectId}/${result.chapterId}`,
          })),
        ])
      } catch {
        if (!cancelled) setAsyncResults([])
      }
    }, 260)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [query])

  const results = [...baseResults, ...(hasQuery ? asyncResults : [])]
    .filter((result, index, list) => index === list.findIndex((item) => item.type === result.type && item.to === result.to && item.title === result.title))
    .slice(0, 12)

  return (
    <div className="study-search">
      <div className="field-shell study-search-field">
        <Search size={17} style={{ color: 'var(--color-text-muted)' }} />
        <input
          className="text-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search chapters, summaries, or questions..."
          aria-label="Search study content"
        />
        {query && <IconButton label="Clear search" icon={X} onClick={() => setQuery('')} />}
      </div>

      {hasQuery && (
        <div className="study-search-results">
          {results.length === 0 ? (
            <p>No matches found.</p>
          ) : (
            results.map((result) => {
              const Icon = iconFor[result.type] || Search
              return (
                <Link key={`${result.type}-${result.to}-${result.title}`} to={result.to} className="study-search-result">
                  <span className="search-result-icon"><Icon size={16} /></span>
                  <span>
                    <strong>{result.title}</strong>
                    <small>{result.description}</small>
                  </span>
                </Link>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}
