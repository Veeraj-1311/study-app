import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  Calculator,
  ChevronRight,
  FlaskConical,
  Globe,
  Languages,
  Sparkles,
  Target,
} from 'lucide-react'
import quizData from '../data/quizData.js'
import AskAI from '../components/AskAI'
import PageTransition from '../components/PageTransition'
import TaskList from '../components/TaskList'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { AppNav, Button, Card, Metric, PageHeader, PageShell, ProgressBar } from '../components/ui.jsx'
import { loadMistakes, loadProgress } from '../utils/progress.js'
import { playClick } from '../utils/sounds.js'
import { useTheme } from '../hooks/useTheme.js'

const iconMap = { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit }

const greetingFor = (hour) => {
  if (hour < 5) return 'Late-night focus'
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  if (hour < 21) return 'Good evening'
  return 'Evening study mode'
}

function SubjectCard({ subjectId, subject, progress, mistakes, index }) {
  const { getSubjectColor } = useTheme()
  const Icon = iconMap[subject.icon] || BookOpen
  const color = getSubjectColor(subjectId)
  const subjectProgress = progress[subjectId] || {}
  const completed = subject.chapters.filter((chapter) => subjectProgress[chapter.id]?.status === 'completed').length
  const total = subject.chapters.length
  const percent = total ? Math.round((completed / total) * 100) : 0
  const mistakeCount = Object.values(mistakes[subjectId] || {}).reduce((sum, item) => sum + item.length, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.04, duration: 0.22 }}
    >
      <Card as={Link} to={`/subject/${subjectId}`} interactive className="subject-card" onClick={playClick}>
        <div className="subject-card-top">
          <div className="subject-icon" style={{ color, background: `${color}14` }}>
            <Icon size={22} />
          </div>
          <ChevronRight size={18} style={{ color: 'var(--color-text-muted)' }} />
        </div>
        <h3>{subject.name}</h3>
        <p>{total} chapters / {completed} completed</p>
        <div className="mt-5">
          <ProgressBar value={percent} color={color} label={`${percent}%`} />
        </div>
        {mistakeCount > 0 && (
          <p className="mt-3 text-sm font-bold" style={{ color: '#d97706' }}>
            {mistakeCount} mistakes to review
          </p>
        )}
      </Card>
    </motion.div>
  )
}

export default function Home() {
  const progress = loadProgress()
  const mistakes = loadMistakes()
  const subjects = Object.entries(quizData)
  const greeting = greetingFor(new Date().getHours())

  let totalChapters = 0
  let completedChapters = 0
  let totalScore = 0
  let totalQuestions = 0
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
        <AppNav
          actions={(
            <>
              <ThemeSwitcher inline />
              <AskAI inline />
              <Button to="/stats" variant="secondary" size="sm" icon={BarChart3}>Stats</Button>
            </>
          )}
        />

        <PageHeader
          icon={Sparkles}
          eyebrow={greeting}
          title="Study with less friction."
          description="Pick a chapter, quiz yourself, keep quick notes, and use the progress trail to decide what needs attention next."
          actions={<Button to={`/subject/${subjects[0]?.[0] || 'math'}`} variant="accent" size="lg" icon={Target}>Start studying</Button>}
        />

        <div className="quick-stats">
          <Metric icon={BookOpen} label="Chapters done" value={`${completedChapters}/${totalChapters}`} />
          <Metric icon={Target} label="Accuracy" value={`${accuracy}%`} color="#16a34a" />
          <Metric icon={BarChart3} label="To review" value={totalMistakes} color="#dc2626" />
        </div>

        <div className="dashboard-grid">
          <section>
            <div className="subject-grid">
              {subjects.map(([subjectId, subject], index) => (
                <div key={subjectId}>
                  <SubjectCard
                    subjectId={subjectId}
                    subject={subject}
                    progress={progress}
                    mistakes={mistakes}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </section>

          <aside className="home-panel">
            <TaskList />
          </aside>
        </div>
      </PageShell>
    </PageTransition>
  )
}
