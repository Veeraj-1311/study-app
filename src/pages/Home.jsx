import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit, Flame, ChevronRight } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme } from '../contexts/ThemeContext.jsx'
import useStreak from '../hooks/useStreak.js'

const iconMap = { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit }

const quotes = [
  'The expert in anything was once a beginner.',
  'Education is the passport to the future.',
  'Small steps every day lead to big results.',
  'The beautiful thing about learning is that no one can take it away from you.',
  'Success is the sum of small efforts repeated day in and day out.',
]

const getProgress = () => {
  try {
    return JSON.parse(localStorage.getItem('learnflow-progress') || '{}')
  } catch {
    return {}
  }
}

function StreakChip() {
  const { streak, todayMinutes, goalReached, progress } = useStreak()
  const flameOn = streak > 0
  return (
    <div
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full"
      style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}
    >
      <Flame
        size={16}
        style={{ color: flameOn ? '#f9ab00' : '#5f6368' }}
        fill={flameOn ? '#f9ab00' : 'none'}
      />
      <span className="text-sm" style={{ color: '#e8eaed' }}>
        {streak} day{streak !== 1 ? 's' : ''}
      </span>
      <span style={{ color: '#3c3c3c' }}>·</span>
      <span className="text-sm" style={{ color: '#9aa0a6' }}>
        {goalReached ? 'Goal reached' : `${todayMinutes}/30 min`}
      </span>
      <div
        className="h-1 w-12 rounded-full overflow-hidden ml-1"
        style={{ backgroundColor: '#3c3c3c' }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ backgroundColor: '#f9ab00' }}
        />
      </div>
    </div>
  )
}

function SubjectCard({ subjectId, subject, progress, index }) {
  const { getSubjectColor } = useTheme()
  const IconComponent = iconMap[subject.icon]
  const subjectProgress = progress[subjectId] || {}
  let completed = 0
  subject.chapters.forEach((ch) => {
    if (subjectProgress[ch.id]?.status === 'completed') completed++
  })
  const total = subject.chapters.length
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0
  const color = getSubjectColor(subjectId)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
    >
      <Link to={`/subject/${subjectId}`} onClick={playClick} className="block group">
        <div
          className="rounded-2xl p-5 h-full transition-colors"
          style={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #3c3c3c',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#353535' }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a' }}
        >
          <div className="flex items-center justify-between mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${color}20` }}
            >
              {IconComponent && <IconComponent size={20} style={{ color }} strokeWidth={2} />}
            </div>
            <ChevronRight size={18} style={{ color: '#5f6368' }} />
          </div>

          <h3 className="text-base font-medium mb-1" style={{ color: '#e8eaed' }}>
            {subject.name}
          </h3>
          <p className="text-xs mb-4" style={{ color: '#9aa0a6' }}>
            {total} chapter{total !== 1 ? 's' : ''} · {completed} done
          </p>

          <div className="flex items-center gap-2">
            <div
              className="h-1 flex-1 rounded-full overflow-hidden"
              style={{ backgroundColor: '#3c3c3c' }}
            >
              <motion.div
                className="h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.04, ease: 'easeOut' }}
                style={{ backgroundColor: color }}
              />
            </div>
            <span className="text-xs tabular-nums" style={{ color: '#9aa0a6' }}>{pct}%</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const progress = getProgress()

  useEffect(() => {
    const id = setInterval(() => setQuoteIndex((p) => (p + 1) % quotes.length), 8000)
    return () => clearInterval(id)
  }, [])

  const subjects = Object.entries(quizData)

  return (
    <PageTransition>
      <div
        className="min-h-screen w-full"
        style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
          <header className="flex items-center justify-between mb-12">
            <div>
              <h1
                className="text-3xl sm:text-4xl font-medium tracking-tight"
                style={{ color: '#e8eaed', letterSpacing: '-0.02em' }}
              >
                LearnFlow
              </h1>
              <p className="text-sm mt-1" style={{ color: '#9aa0a6' }}>
                Pick a subject to continue.
              </p>
            </div>
            <StreakChip />
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {subjects.map(([subjectId, subject], index) => (
              <SubjectCard
                key={subjectId}
                subjectId={subjectId}
                subject={subject}
                progress={progress}
                index={index}
              />
            ))}
          </div>

          <div className="border-t pt-8" style={{ borderColor: '#3c3c3c' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm text-center"
                style={{ color: '#5f6368', fontStyle: 'italic' }}
              >
                "{quotes[quoteIndex]}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
