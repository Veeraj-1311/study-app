import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, BarChart3, BookOpenCheck, Target, Layers } from 'lucide-react'
import quizData from '../data/quizData.js'
import PageTransition from '../components/PageTransition'
import { useTheme } from '../contexts/ThemeContext.jsx'

const loadProgress = () => {
  try { return JSON.parse(localStorage.getItem('learnflow-progress') || '{}') } catch { return {} }
}

const loadMistakes = () => {
  try { return JSON.parse(localStorage.getItem('learnflow-mistakes') || '{}') } catch { return {} }
}

function StatCard({ icon: Icon, label, value, accent = 'var(--color-accent)' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl p-5"
      style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} style={{ color: accent }} />
        <span className="text-xs uppercase tracking-wide" style={{ color: '#9aa0a6', letterSpacing: '0.06em' }}>
          {label}
        </span>
      </div>
      <div className="text-3xl font-medium tabular-nums" style={{ color: '#e8eaed', letterSpacing: '-0.02em' }}>
        {value}
      </div>
    </motion.div>
  )
}

function SubjectRow({ subjectId, subject, progress, mistakes, color, index }) {
  const subProg = progress[subjectId] || {}
  const completed = subject.chapters.filter((c) => subProg[c.id]?.status === 'completed').length
  const inProgress = subject.chapters.filter((c) => subProg[c.id]?.status === 'in_progress').length
  const total = subject.chapters.length

  let scoreSum = 0
  let scoreMax = 0
  subject.chapters.forEach((c) => {
    const p = subProg[c.id]
    if (p) {
      scoreSum += p.bestScore || 0
      scoreMax += p.bestTotal || 0
    }
  })
  const accuracy = scoreMax > 0 ? Math.round((scoreSum / scoreMax) * 100) : null
  const subjectMistakes = Object.values(mistakes[subjectId] || {}).reduce((acc, arr) => acc + arr.length, 0)

  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 + index * 0.04, ease: 'easeOut' }}
      className="rounded-xl p-4"
      style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
          <h3 className="text-sm font-medium" style={{ color: '#e8eaed' }}>{subject.name}</h3>
        </div>
        {accuracy !== null && (
          <span className="text-sm tabular-nums" style={{ color }}>
            {accuracy}%
          </span>
        )}
      </div>

      <div className="h-1.5 rounded-full overflow-hidden mb-3" style={{ backgroundColor: '#3c3c3c' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: total ? `${(completed / total) * 100}%` : 0 }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)` }}
        />
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: '#9aa0a6' }}>
        <span>{completed}/{total} done</span>
        {inProgress > 0 && <span>· {inProgress} in progress</span>}
        {scoreMax > 0 && <span>· {scoreSum}/{scoreMax} questions</span>}
        {subjectMistakes > 0 && <span style={{ color: '#fdd663' }}>· {subjectMistakes} mistakes to review</span>}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const progress = loadProgress()
  const mistakes = loadMistakes()
  const { getSubjectColor } = useTheme()
  const subjects = Object.entries(quizData)

  let totalScore = 0
  let totalQuestions = 0
  let completedChapters = 0
  let totalChapters = 0
  let totalMistakes = 0

  subjects.forEach(([sid, subj]) => {
    totalChapters += subj.chapters.length
    subj.chapters.forEach((c) => {
      const p = progress[sid]?.[c.id]
      if (p) {
        totalScore += p.bestScore || 0
        totalQuestions += p.bestTotal || 0
        if (p.status === 'completed') completedChapters++
      }
    })
    Object.values(mistakes[sid] || {}).forEach((arr) => { totalMistakes += arr.length })
  })

  const overallAccuracy = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden" style={{ color: '#e8eaed' }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(800px 400px at 50% -10%, rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.10), transparent 60%),' +
              'radial-gradient(500px 300px at 100% 100%, rgba(var(--color-accent-cyan-r), var(--color-accent-cyan-g), var(--color-accent-cyan-b), 0.06), transparent 60%)',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-10 sm:py-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm mb-10"
            style={{ color: '#9aa0a6' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#e8eaed' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#9aa0a6' }}
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <motion.header
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <p className="text-sm mb-2 inline-flex items-center gap-2">
              <BarChart3 size={14} style={{ color: 'var(--color-accent)' }} />
              <span style={{ color: 'var(--color-accent)' }}>Progress</span>
            </p>
            <h1
              className="text-3xl sm:text-4xl font-medium leading-tight"
              style={{
                letterSpacing: '-0.02em',
                backgroundImage: 'linear-gradient(135deg, #e8eaed 0%, var(--color-accent) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Your stats
            </h1>
          </motion.header>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            <StatCard icon={Target} label="Accuracy" value={`${overallAccuracy}%`} />
            <StatCard icon={BookOpenCheck} label="Questions" value={`${totalScore}/${totalQuestions}`} />
            <StatCard icon={Layers} label="Chapters done" value={`${completedChapters}/${totalChapters}`} />
            <StatCard icon={BarChart3} label="To review" value={totalMistakes} accent="#fdd663" />
          </div>

          <h2 className="text-sm font-medium mb-3" style={{ color: '#9aa0a6' }}>
            By subject
          </h2>
          <div className="space-y-2">
            {subjects.map(([sid, subj], i) => (
              <SubjectRow
                key={sid}
                subjectId={sid}
                subject={subj}
                progress={progress}
                mistakes={mistakes}
                color={getSubjectColor(sid)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
