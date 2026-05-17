import { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ArrowLeft, BarChart3, RotateCcw, Star, Target, Trophy } from 'lucide-react'
import quizData from '../data/quizData.js'
import PageTransition from '../components/PageTransition'
import { AppNav, Button, Card, EmptyState, PageHeader, PageShell } from '../components/ui.jsx'
import { saveProgress } from '../utils/progress.js'
import { useSubjectBackground } from '../hooks/useTheme.js'

function getMessage(score, total) {
  const ratio = total > 0 ? score / total : 0
  if (ratio === 1) return { title: 'Perfect score', icon: Trophy, color: '#d97706' }
  if (ratio >= 0.8) return { title: 'Strong work', icon: Star, color: '#16a34a' }
  if (ratio >= 0.5) return { title: 'Good progress', icon: BarChart3, color: 'var(--color-accent)' }
  return { title: 'Keep practicing', icon: Target, color: '#64748b' }
}

export default function Results() {
  const { subjectId, chapterId } = useParams()
  const location = useLocation()
  const state = location.state
  const score = Number(state?.score)
  const total = Number(state?.total)
  const review = Boolean(state?.review)
  useSubjectBackground(subjectId)

  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((item) => item.id === Number(chapterId))
  const [displayScore, setDisplayScore] = useState(0)
  const savedRef = useRef(false)

  useEffect(() => {
    if (!savedRef.current && subject && chapter && !review && Number.isFinite(score) && Number.isFinite(total)) {
      saveProgress(subjectId, chapterId, score, total)
      savedRef.current = true
    }
  }, [chapter, chapterId, review, score, subject, subjectId, total])

  useEffect(() => {
    if (!Number.isFinite(score)) return undefined
    const duration = 700
    const start = performance.now()
    let frame = null
    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayScore(Math.round(eased * score))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => {
      if (frame) cancelAnimationFrame(frame)
    }
  }, [score])

  if (!subject || !chapter || !Number.isFinite(score) || !Number.isFinite(total)) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo={`/chapter/${subjectId}/${chapterId}`} />
          <EmptyState
            icon={BarChart3}
            title="No result to show"
            description="Start a quiz from the chapter page to generate a fresh result."
            action={<Button to={`/chapter/${subjectId}/${chapterId}`}>Back to chapter</Button>}
          />
        </PageShell>
      </PageTransition>
    )
  }

  const ratio = total > 0 ? score / total : 0
  const percent = Math.round(ratio * 100)
  const result = getMessage(score, total)
  const Icon = result.icon

  return (
    <PageTransition>
      <PageShell size="narrow">
        <AppNav backTo={`/chapter/${subjectId}/${chapterId}`} />
        <PageHeader
          icon={Icon}
          eyebrow={review ? 'Mistake review complete' : 'Quiz complete'}
          title={result.title}
          description={`${chapter.name} / ${subject.name}`}
        />

        <Card className="p-6 text-center">
          <div className="result-score" style={{ '--score-deg': `${percent * 3.6}deg` }}>
            <div className="result-score-inner">
              <strong>{displayScore}</strong>
              <span>of {total}</span>
            </div>
          </div>
          <p className="text-lg font-extrabold m-0" style={{ color: result.color }}>
            {percent}%
          </p>
          <p className="mt-2 mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            {review ? 'Review sessions do not overwrite chapter progress.' : 'Your best score is saved on this device.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to={`/quiz/${subjectId}/${chapterId}`} icon={RotateCcw}>Retry quiz</Button>
            <Button to={`/chapter/${subjectId}/${chapterId}`} variant="secondary" icon={ArrowLeft}>Chapter</Button>
          </div>
        </Card>
      </PageShell>
    </PageTransition>
  )
}
