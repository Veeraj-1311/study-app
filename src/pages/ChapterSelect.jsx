import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  BookOpen,
  BrainCircuit,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Clock,
  FlaskConical,
  Globe,
  Languages,
} from 'lucide-react'
import quizMeta from '../data/quizMeta.js'
import PageTransition from '../components/PageTransition'
import { AppNav, Button, Card, EmptyState, PageHeader, PageShell, ProgressBar } from '../components/ui.jsx'
import { loadProgress } from '../utils/progress.js'
import { playClick } from '../utils/sounds.js'
import { useSubjectBackground, useTheme } from '../hooks/useTheme.js'

const iconMap = { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit }

function StatusIndicator({ status, score, total }) {
  if (status === 'completed') {
    return (
      <span className="status-pill" style={{ color: '#16a34a' }}>
        <CheckCircle2 size={14} />
        {score}/{total}
      </span>
    )
  }
  if (status === 'in_progress') {
    return (
      <span className="status-pill" style={{ color: '#d97706' }}>
        <Clock size={14} />
        In progress
      </span>
    )
  }
  return <span className="status-pill">Not started</span>
}

export default function ChapterSelect() {
  const { subjectId } = useParams()
  const subject = quizMeta[subjectId]
  const progress = loadProgress()
  const { getSubjectColor } = useTheme()
  useSubjectBackground(subjectId)

  if (!subject) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo="/" />
          <EmptyState
            icon={BookOpen}
            title="Subject not found"
            description="This subject is not available in LearnFlow."
            action={<Button to="/" icon={ArrowLeft}>Back home</Button>}
          />
        </PageShell>
      </PageTransition>
    )
  }

  const Icon = iconMap[subject.icon] || BookOpen
  const color = getSubjectColor(subjectId)
  const subjectProgress = progress[subjectId] || {}
  const completed = subject.chapters.filter((chapter) => subjectProgress[chapter.id]?.status === 'completed').length
  const percent = subject.chapters.length ? Math.round((completed / subject.chapters.length) * 100) : 0

  return (
    <PageTransition>
      <PageShell size="focus">
        <AppNav backTo="/" />
        <PageHeader
          icon={Icon}
          eyebrow="Subject"
          title={subject.name}
          description={`${completed} of ${subject.chapters.length} chapters completed. Choose the next chapter to study, quiz, or review.`}
          actions={<Button to="/stats" variant="secondary" size="sm">View stats</Button>}
        >
          <div className="mt-5" style={{ maxWidth: 420 }}>
            <ProgressBar value={percent} color={color} label={`${percent}%`} />
          </div>
        </PageHeader>

        <section className="chapter-list">
          {subject.chapters.map((chapter, index) => {
            const item = subjectProgress[chapter.id]
            const status = item?.status || 'not_started'
            const bestScore = item?.bestScore
            const bestTotal = item?.bestTotal || chapter.questionCount || 10
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 * index, duration: 0.2 }}
              >
                <Card as={Link} to={`/chapter/${subjectId}/${chapter.id}`} interactive className="chapter-card" onClick={playClick}>
                  <div className="chapter-number" style={{ color, background: `${color}14` }}>{index + 1}</div>
                  <div className="chapter-copy">
                    <h3>{chapter.name}</h3>
                    {chapter.description && <p>{chapter.description}</p>}
                  </div>
                  <div className="chapter-meta">
                    <StatusIndicator status={status} score={bestScore} total={bestTotal} />
                    <ChevronRight size={17} />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </section>
      </PageShell>
    </PageTransition>
  )
}
