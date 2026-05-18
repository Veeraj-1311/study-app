import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BarChart3, BookOpenCheck, Filter, RotateCcw } from 'lucide-react'
import quizMeta from '../data/quizMeta.js'
import { loadQuestionsForChapters } from '../data/questionLoaders.js'
import PageTransition from '../components/PageTransition'
import { AppNav, Button, Card, EmptyState, PageHeader, PageShell } from '../components/ui.jsx'
import { getSmartStudyTarget, loadMistakes, loadProgress, questionId } from '../utils/progress.js'
import { useTheme } from '../hooks/useTheme.js'

function collectMistakeChapters(mistakes) {
  return Object.entries(mistakes).flatMap(([subjectId, chapters]) =>
    Object.entries(chapters).map(([chapterId, ids]) => ({
      subjectId,
      chapterId: Number(chapterId),
      ids,
    }))
  )
}

export default function Review() {
  const [mistakes] = useState(loadMistakes)
  const [progress] = useState(loadProgress)
  const mistakeChapters = useMemo(() => collectMistakeChapters(mistakes), [mistakes])
  const loadKey = JSON.stringify(mistakeChapters.map((item) => [item.subjectId, item.chapterId, item.ids]))
  const [reviewState, setReviewState] = useState({ key: '', items: [] })
  const [filter, setFilter] = useState('all')
  const { getSubjectColor } = useTheme()

  useEffect(() => {
    let cancelled = false
    loadQuestionsForChapters(mistakeChapters)
      .then((entries) => {
        if (cancelled) return
        const next = entries.flatMap((entry) => {
          const source = mistakeChapters.find((item) => item.subjectId === entry.subjectId && item.chapterId === entry.chapterId)
          const ids = new Set(source?.ids || [])
          const subject = quizMeta[entry.subjectId]
          const chapter = subject?.chapters.find((item) => item.id === entry.chapterId)
          return entry.questions
            .filter((question) => ids.has(questionId(question)))
            .map((question) => ({
              id: questionId(question),
              subjectId: entry.subjectId,
              chapterId: entry.chapterId,
              subjectName: subject?.name || entry.subjectId,
              chapterName: chapter?.name || `Chapter ${entry.chapterId}`,
              question: question.question,
              explanation: question.explanation,
            }))
        })
        setReviewState({ key: loadKey, items: next })
      })
    return () => {
      cancelled = true
    }
  }, [loadKey, mistakeChapters])

  const loading = reviewState.key !== loadKey
  const items = loading ? [] : reviewState.items
  const subjects = Object.entries(quizMeta).filter(([subjectId]) => items.some((item) => item.subjectId === subjectId))
  const smartTarget = getSmartStudyTarget(quizMeta, progress)
  const startPath = smartTarget ? `/chapter/${smartTarget.subjectId}/${smartTarget.chapterId}` : '/'
  const visible = filter === 'all' ? items : items.filter((item) => item.subjectId === filter)
  const grouped = visible.reduce((acc, item) => {
    const key = `${item.subjectId}_${item.chapterId}`
    if (!acc[key]) acc[key] = { ...item, questions: [] }
    acc[key].questions.push(item)
    return acc
  }, {})

  return (
    <PageTransition>
      <PageShell>
        <AppNav backTo="/" />
        <PageHeader
          icon={RotateCcw}
          eyebrow="Review"
          title="Mistake center"
          description="All saved mistakes live here, grouped by chapter so revision has a clear starting point."
          actions={items.length > 0 && <Button to="/quiz/review/all" variant="accent" icon={BookOpenCheck}>Review all</Button>}
        />

        {loading ? (
          <EmptyState icon={BarChart3} title="Loading mistakes" description="Building your review list." />
        ) : items.length === 0 ? (
          <EmptyState
            icon={BookOpenCheck}
            title="No mistakes saved"
            description="Missed quiz questions will appear here automatically."
            action={<Button to={startPath} icon={ArrowLeft}>Continue studying</Button>}
          />
        ) : (
          <>
            <div className="review-filters" aria-label="Review filters">
              <button type="button" data-active={filter === 'all'} onClick={() => setFilter('all')}>
                <Filter size={14} />
                All
              </button>
              {subjects.map(([subjectId, subject]) => (
                <button
                  type="button"
                  key={subjectId}
                  data-active={filter === subjectId}
                  onClick={() => setFilter(subjectId)}
                  style={{ '--filter-color': getSubjectColor(subjectId) }}
                >
                  {subject.name}
                </button>
              ))}
            </div>

            <section className="review-list">
              {Object.values(grouped).map((group) => (
                <Card key={`${group.subjectId}-${group.chapterId}`} className="review-card">
                  <div className="review-card-head">
                    <div>
                      <p>{group.subjectName}</p>
                      <h2>{group.chapterName}</h2>
                    </div>
                    <Button to={`/quiz/${group.subjectId}/${group.chapterId}?review=mistakes`} variant="secondary" size="sm" icon={RotateCcw}>
                      Review
                    </Button>
                  </div>
                  <div className="review-question-list">
                    {group.questions.slice(0, 3).map((item) => (
                      <Link key={item.id} to={`/chapter/${item.subjectId}/${item.chapterId}`} className="review-question">
                        {item.question}
                      </Link>
                    ))}
                    {group.questions.length > 3 && (
                      <p>{group.questions.length - 3} more saved questions</p>
                    )}
                  </div>
                </Card>
              ))}
            </section>
          </>
        )}
      </PageShell>
    </PageTransition>
  )
}
