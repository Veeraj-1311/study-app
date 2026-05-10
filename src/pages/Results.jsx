import { useParams, useLocation, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { RotateCcw, ArrowLeft, Trophy, Target, TrendingUp, Star } from 'lucide-react'
import quizData from '../data/quizData.js'
import PageTransition from '../components/PageTransition'
import { useTheme, useSubjectBackground } from '../contexts/ThemeContext.jsx'

const saveProgress = (subjectId, chapterId, score, total) => {
  let progress = {}
  try {
    progress = JSON.parse(localStorage.getItem('learnflow-progress') || '{}')
  } catch {
    progress = {}
  }
  if (!progress[subjectId]) progress[subjectId] = {}
  const existing = progress[subjectId][chapterId]
  progress[subjectId][chapterId] = {
    bestScore: Math.max(score, existing?.bestScore || 0),
    bestTotal: total,
    status: score === total ? 'completed' : 'in_progress',
  }
  localStorage.setItem('learnflow-progress', JSON.stringify(progress))
}

export default function Results() {
  const { subjectId, chapterId } = useParams()
  const location = useLocation()
  const { score = 0, total = 10 } = location.state || {}
  const { colors, accentRgb, accentCyanRgb } = useTheme()
  useSubjectBackground(subjectId)

  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))

  const [displayScore, setDisplayScore] = useState(0)
  const animationRef = useRef(null)
  const hasSaved = useRef(false)

  function getPerformanceMessage(s, t) {
    const ratio = t > 0 ? s / t : 0
    if (ratio === 1) return { message: 'Perfect score!', icon: Trophy, color: '#f59e0b' }
    if (ratio >= 0.8) return { message: 'Great job!', icon: Star, color: colors.accentCyan }
    if (ratio >= 0.5) return { message: 'Good effort! Almost there!', icon: TrendingUp, color: colors.accent }
    return { message: 'Keep practicing!', icon: Target, color: colors.accent }
  }

  // Save progress on mount
  useEffect(() => {
    if (!hasSaved.current && subject && chapter) {
      saveProgress(subjectId, chapterId, score, total)
      hasSaved.current = true
    }
  }, [subjectId, chapterId, score, total, subject, chapter])

  // Animate score count up with smoother easing
  useEffect(() => {
    const duration = 1800
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplayScore(Math.round(eased * score))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [score])

  const { message, icon: PerformanceIcon, color: perfColor } = getPerformanceMessage(score, total)

  // SVG circle parameters
  const size = 200
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const percent = total > 0 ? score / total : 0
  const offset = circumference - percent * circumference

  return (
    <PageTransition
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 max-w-2xl mx-auto flex flex-col items-center justify-center"
    >
      {/* Score Circle with Pulsing Glow */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
        className="relative mb-8"
        style={{
          animation: 'scoreGlow 3s ease-in-out infinite',
        }}
      >
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`rgba(${accentRgb}, 0.1)`}
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={colors.accent}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-heading font-bold text-text-primary">
            {displayScore}
          </span>
          <span className="text-text-muted text-sm">out of {total}</span>
        </div>
      </motion.div>

      {/* Performance Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <PerformanceIcon size={24} style={{ color: perfColor }} />
          <h2
            className="text-2xl sm:text-3xl font-heading font-bold"
            style={{
              color: perfColor,
              textShadow: `0 0 20px ${perfColor}40`,
            }}
          >
            {message}
          </h2>
        </div>
        {chapter && (
          <p className="text-text-secondary text-sm">
            {chapter.name} - {subject?.name}
          </p>
        )}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-sm"
      >
        <Link to={`/quiz/${subjectId}/${chapterId}`} className="flex-1">
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: `0 0 30px rgba(${accentRgb}, 0.4)`,
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-heading font-semibold text-white cursor-pointer"
            style={{ backgroundColor: colors.accent }}
          >
            <RotateCcw size={18} />
            Retry Quiz
          </motion.div>
        </Link>

        <Link to={`/subject/${subjectId}`} className="flex-1">
          <motion.div
            whileHover={{
              scale: 1.04,
              borderColor: colors.accentCyan,
              boxShadow: `0 0 20px rgba(${accentCyanRgb}, 0.25)`,
              color: colors.accentCyan,
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-bg-card font-heading font-semibold text-text-primary hover:text-white transition-all duration-300 cursor-pointer"
            style={{ border: `1px solid ${colors.accentCyan}` }}
          >
            <ArrowLeft size={18} />
            Back to Chapters
          </motion.div>
        </Link>
      </motion.div>
    </PageTransition>
  )
}
