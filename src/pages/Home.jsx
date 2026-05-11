import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit, ChevronRight, Sparkles } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import TaskList from '../components/TaskList'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { useTheme } from '../contexts/ThemeContext.jsx'

const iconMap = { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit }

const quotes = [
  'The expert in anything was once a beginner.',
  'Education is the passport to the future.',
  'Small steps every day lead to big results.',
  'The beautiful thing about learning is that no one can take it away from you.',
  'Success is the sum of small efforts repeated day in and day out.',
]

const getProgress = () => {
  try { return JSON.parse(localStorage.getItem('learnflow-progress') || '{}') } catch { return {} }
}

const greetingFor = (h) => {
  if (h < 5) return 'Late night session'
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  if (h < 21) return 'Good evening'
  return 'Burning the midnight oil'
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
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/subject/${subjectId}`} onClick={playClick} className="block group">
        <motion.div
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.985 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl p-5 h-full overflow-hidden"
          style={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #3c3c3c',
            transition: 'border-color 0.28s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.28s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = color
            e.currentTarget.style.backgroundColor = '#2f2f2f'
            e.currentTarget.style.boxShadow = `0 14px 38px -16px ${color}99, 0 4px 12px -6px rgba(0,0,0,0.4), 0 0 0 1px ${color}33 inset`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#3c3c3c'
            e.currentTarget.style.backgroundColor = '#2a2a2a'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <div
            aria-hidden
            className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: `radial-gradient(circle, ${color}33, transparent 70%)` }}
          />

          <div className="flex items-center justify-between mb-5 relative">
            <motion.div
              whileHover={{ rotate: -6, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${color}1f`, boxShadow: `inset 0 0 0 1px ${color}33` }}
            >
              {IconComponent && <IconComponent size={20} style={{ color }} strokeWidth={2} />}
            </motion.div>
            <ChevronRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
              style={{ color: '#5f6368' }}
            />
          </div>

          <h3 className="text-base font-medium mb-1" style={{ color: '#e8eaed' }}>
            {subject.name}
          </h3>
          <p className="text-xs mb-4" style={{ color: '#9aa0a6' }}>
            {total} chapter{total !== 1 ? 's' : ''} · {completed} done
          </p>

          <div className="flex items-center gap-2">
            <div className="h-1 flex-1 rounded-full overflow-hidden" style={{ backgroundColor: '#3c3c3c' }}>
              <motion.div
                className="h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.9, delay: 0.4 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)` }}
              />
            </div>
            <span className="text-xs tabular-nums" style={{ color: '#9aa0a6' }}>{pct}%</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [greeting, setGreeting] = useState(() => greetingFor(new Date().getHours()))
  const progress = getProgress()

  useEffect(() => {
    const id = setInterval(() => setQuoteIndex((p) => (p + 1) % quotes.length), 8000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setGreeting(greetingFor(new Date().getHours()))
  }, [])

  const subjects = Object.entries(quizData)

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden" style={{ color: '#e8eaed' }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(800px 500px at 50% -10%, rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.12), transparent 60%),' +
              'radial-gradient(700px 400px at 0% 50%, rgba(var(--color-accent-cyan-r), var(--color-accent-cyan-g), var(--color-accent-cyan-b), 0.07), transparent 60%),' +
              'radial-gradient(700px 400px at 100% 50%, rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.06), transparent 60%),' +
              'radial-gradient(600px 400px at 50% 110%, rgba(var(--color-accent-cyan-r), var(--color-accent-cyan-g), var(--color-accent-cyan-b), 0.05), transparent 60%)',
          }}
        />
        <motion.div
          aria-hidden
          className="absolute pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{
            top: '20%', left: '50%', width: 420, height: 420,
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.08), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative min-h-screen flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 py-16">
          <motion.header
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}>
              <Sparkles size={12} style={{ color: 'var(--color-accent)' }} />
              <span className="text-xs" style={{ color: '#9aa0a6' }}>{greeting}</span>
            </div>
            <motion.img
              src="/logo.png"
              alt="LearnFlow"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              style={{
                height: '7rem',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 22px rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.4)) drop-shadow(0 0 50px rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.18))',
              }}
            />
            <p className="text-base mt-4 max-w-md" style={{ color: '#9aa0a6' }}>
              Pick a subject and keep the momentum going.
            </p>
          </motion.header>

          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-16 mb-12 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-[600px]">
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

            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: 'easeOut' }}
              className="w-full lg:w-[320px] lg:shrink-0 rounded-2xl p-5"
              style={{ backgroundColor: '#242424', border: '1px solid #3c3c3c' }}
            >
              <TaskList />
            </motion.section>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pt-6 flex items-center justify-center gap-3 w-full max-w-xl border-t"
            style={{ borderColor: '#3c3c3c' }}
          >
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-accent)', boxShadow: '0 0 8px var(--color-accent)' }} />
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 4 }}
                transition={{ duration: 0.4 }}
                className="text-sm text-center"
                style={{ color: '#9aa0a6', fontStyle: 'italic' }}
              >
                {quotes[quoteIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        <ThemeSwitcher />
      </div>
    </PageTransition>
  )
}
