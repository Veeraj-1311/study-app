import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit, Palette, Flame } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme } from '../contexts/ThemeContext.jsx'
import CustomizePanel from '../components/CustomizePanel.jsx'
import useStreak from '../hooks/useStreak.js'

const iconMap = { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit }

const quotes = [
  'The expert in anything was once a beginner.',
  'Education is the passport to the future.',
  'Small steps every day lead to big results.',
  'The beautiful thing about learning is that no one can take it away from you.',
  'Success is the sum of small efforts repeated day in and day out.',
]

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18, delay: i * 0.1 },
  }),
}

const getProgress = () => {
  try {
    return JSON.parse(localStorage.getItem('learnflow-progress') || '{}')
  } catch {
    return {}
  }
}

function ProgressRing({ completed, total, color, size = 48, strokeWidth = 4 }) {
  const { accentRgb } = useTheme()
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const percent = total > 0 ? completed / total : 0
  const offset = circumference - percent * circumference

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={`rgba(${accentRgb}, 0.15)`}
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      />
    </svg>
  )
}

function SubjectCard({ subjectId, subject, index, progress }) {
  const [hovered, setHovered] = useState(false)
  const { getSubjectColor, accentRgb } = useTheme()
  const IconComponent = iconMap[subject.icon]
  const subjectProgress = progress[subjectId] || {}
  let completed = 0
  subject.chapters.forEach((ch) => {
    if (subjectProgress[ch.id]?.status === 'completed') completed++
  })
  const total = subject.chapters.length
  const color = getSubjectColor(subjectId)

  const iconColor = hovered ? color : '#6a6a70'
  const iconBg = hovered ? `${color}20` : 'rgba(255,255,255,0.05)'
  const nameColor = hovered ? color : '#a0a0a5'
  const ringColor = hovered ? color : '#6a6a70'

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <Link to={`/subject/${subjectId}`} className="block" onClick={playClick}>
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{
            scale: 1.04,
            borderColor: color,
            boxShadow: `0 0 25px ${color}30, 0 0 50px ${color}15, inset 0 0 30px ${color}08`,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="bg-bg-card/80 backdrop-blur-xl rounded-2xl p-7 cursor-pointer h-full"
          style={{ border: `1px solid rgba(${accentRgb}, 0.15)` }}
        >
          <div className="flex items-start justify-between mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{ backgroundColor: iconBg }}
            >
              {IconComponent && (
                <IconComponent size={24} className="transition-all duration-300" style={{ color: iconColor }} />
              )}
            </div>
            <div className="relative">
              <ProgressRing completed={completed} total={total} color={ringColor} />
              <span className="absolute inset-0 flex items-center justify-center text-xs text-text-secondary font-medium">
                {total > 0 ? Math.round((completed / total) * 100) : 0}%
              </span>
            </div>
          </div>

          <h3
            className="text-xl font-heading font-semibold mb-1 transition-all duration-300"
            style={{ color: nameColor }}
          >
            {subject.name}
          </h3>
          <p className="text-text-muted text-sm transition-colors duration-300">
            {subject.chapters.length} chapter{subject.chapters.length !== 1 ? 's' : ''} ·{' '}
            {completed} completed
          </p>
        </motion.div>
      </Link>
    </motion.div>
  )
}

function StreakBar() {
  const { streak, todayMinutes, goalReached, progress } = useStreak()
  const { colors, accentRgb } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 18 }}
      className="w-full max-w-md mx-auto mb-6"
    >
      <div
        className="bg-bg-card/80 backdrop-blur-xl rounded-2xl px-5 py-3 flex items-center gap-4"
        style={{ border: `1px solid rgba(${accentRgb}, 0.15)` }}
      >
        {/* Flame + streak count */}
        <div className="flex items-center gap-2">
          <motion.div
            animate={goalReached ? {
              scale: [1, 1.2, 1],
              rotate: [0, -8, 8, 0],
            } : {}}
            transition={{ duration: 0.6, repeat: goalReached ? Infinity : 0, repeatDelay: 2 }}
          >
            <Flame
              size={28}
              style={{
                color: streak > 0 ? '#f97316' : '#6a6a70',
                filter: streak > 0 ? 'drop-shadow(0 0 6px rgba(249, 115, 22, 0.5))' : 'none',
              }}
              fill={streak > 0 ? '#f97316' : 'none'}
            />
          </motion.div>
          <div>
            <span className="text-2xl font-heading font-bold" style={{ color: streak > 0 ? '#f97316' : '#6a6a70' }}>
              {streak}
            </span>
            <span className="text-text-muted text-xs ml-1">day{streak !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-text-secondary text-xs font-medium">
              {goalReached ? 'Goal reached!' : `${todayMinutes}/30 min today`}
            </span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `rgba(${accentRgb}, 0.1)` }}>
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                background: goalReached
                  ? 'linear-gradient(90deg, #f97316, #facc15)'
                  : `linear-gradient(90deg, ${colors.accent}, ${colors.accentCyan})`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [showCustomize, setShowCustomize] = useState(false)
  const progress = getProgress()
  const { colors, accentRgb } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const subjects = Object.entries(quizData)

  return (
    <PageTransition
      className="min-h-screen w-full px-6 py-10 sm:px-10 lg:px-16"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {/* Streak Bar */}
      <StreakBar />

      {/* Header — Bigger Logo with Pulse */}
      <div className="mb-8 w-full" style={{ display: 'flex', justifyContent: 'center' }}>
        <motion.img
          src="/logo.png"
          alt="LearnFlow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          style={{
            height: '13rem',
            display: 'block',
            margin: '0 auto',
            objectFit: 'contain',
            animation: 'pulseGlow 4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10 w-full max-w-7xl mx-auto">
        {subjects.map(([subjectId, subject], index) => (
          <SubjectCard
            key={subjectId}
            subjectId={subjectId}
            subject={subject}
            index={index}
            progress={progress}
          />
        ))}
      </div>

      {/* Motivational Quotes */}
      <div className="text-center h-16 flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-text-muted italic text-sm sm:text-base max-w-lg mx-auto"
          >
            "{quotes[quoteIndex]}"
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Customize Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={() => { setShowCustomize(true); playClick() }}
        className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm cursor-pointer transition-all duration-300"
        style={{
          border: `1px solid rgba(${accentRgb}, 0.3)`,
          color: colors.accent,
          backgroundColor: `rgba(${accentRgb}, 0.08)`,
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: `0 0 20px rgba(${accentRgb}, 0.3)`,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette size={18} />
        Customize
      </motion.button>

      {/* Customize Panel */}
      <AnimatePresence>
        {showCustomize && (
          <CustomizePanel onClose={() => setShowCustomize(false)} />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
