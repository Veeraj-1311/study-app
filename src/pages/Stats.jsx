import { Link } from 'react-router-dom'
import { BarChart3, BookOpenCheck, Layers, Target } from 'lucide-react'
import quizMeta from '../data/quizMeta.js'
import PageTransition from '../components/PageTransition'
import NotesLibrary from '../components/NotesLibrary.jsx'
import QuestionReports from '../components/QuestionReports.jsx'
import StorageTools from '../components/StorageTools.jsx'
import { AppNav, Card, Metric, PageHeader, PageShell, ProgressBar } from '../components/ui.jsx'
import { loadMistakes, loadProgress } from '../utils/progress.js'
import { useTheme } from '../hooks/useTheme.js'

function SubjectRow({ subjectId, subject, progress, mistakes, color }) {
  const subjectProgress = progress[subjectId] || {}
  const completed = subject.chapters.filter((chapter) => subjectProgress[chapter.id]?.status === 'completed').length
  const inProgress = subject.chapters.filter((chapter) => subjectProgress[chapter.id]?.status === 'in_progress').length
  const total = subject.chapters.length
  const subjectMistakes = Object.values(mistakes[subjectId] || {}).reduce((sum, list) => sum + list.length, 0)
  const percent = total ? Math.round((completed / total) * 100) : 0

  let score = 0
  let max = 0
  subject.chapters.forEach((chapter) => {
    const item = subjectProgress[chapter.id]
    if (!item) return
    score += item.bestScore || 0
    max += item.bestTotal || 0
  })

  return (
    <Card as={Link} to={`/subject/${subjectId}`} interactive className="p-4">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div>
          <h3 className="font-extrabold m-0">{subject.name}</h3>
          <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            {completed}/{total} done{inProgress > 0 ? ` / ${inProgress} in progress` : ''}
          </p>
        </div>
        <strong style={{ color }}>{max ? `${Math.round((score / max) * 100)}%` : `${percent}%`}</strong>
      </div>
      <ProgressBar value={percent} color={color} />
      {subjectMistakes > 0 && (
        <p className="mt-3 text-sm font-bold" style={{ color: '#d97706' }}>{subjectMistakes} mistakes to review</p>
      )}
    </Card>
  )
}

export default function Stats() {
  const progress = loadProgress()
  const mistakes = loadMistakes()
  const { getSubjectColor } = useTheme()
  const subjects = Object.entries(quizMeta)

  let totalScore = 0
  let totalQuestions = 0
  let completedChapters = 0
  let totalChapters = 0
  let totalMistakes = 0

  subjects.forEach(([subjectId, subject]) => {
    totalChapters += subject.chapters.length
    subject.chapters.forEach((chapter) => {
      const item = progress[subjectId]?.[chapter.id]
      if (!item) return
      totalScore += item.bestScore || 0
      totalQuestions += item.bestTotal || 0
      if (item.status === 'completed') completedChapters += 1
    })
    Object.values(mistakes[subjectId] || {}).forEach((list) => {
      totalMistakes += list.length
    })
  })

  const accuracy = totalQuestions ? Math.round((totalScore / totalQuestions) * 100) : 0

  return (
    <PageTransition>
      <PageShell>
        <AppNav backTo="/" />
        <PageHeader
          icon={BarChart3}
          eyebrow="Progress"
          title="Your stats"
          description="A compact view of progress saved locally on this device."
        />

        <div className="quick-stats">
          <Metric icon={Target} label="Accuracy" value={`${accuracy}%`} />
          <Metric icon={BookOpenCheck} label="Questions" value={`${totalScore}/${totalQuestions}`} color="#16a34a" />
          <Metric icon={Layers} label="Chapters done" value={`${completedChapters}/${totalChapters}`} color="#d97706" />
          <Metric icon={BarChart3} label="To review" value={totalMistakes} color="#dc2626" to="/review" />
        </div>

        <section className="stats-list">
          {subjects.map(([subjectId, subject]) => (
            <SubjectRow
              key={subjectId}
              subjectId={subjectId}
              subject={subject}
              progress={progress}
              mistakes={mistakes}
              color={getSubjectColor(subjectId)}
            />
          ))}
        </section>

        <section className="stats-tools-grid mt-4">
          <NotesLibrary />
          <QuestionReports />
        </section>

        <section className="mt-4">
          <StorageTools />
        </section>
      </PageShell>
    </PageTransition>
  )
}
