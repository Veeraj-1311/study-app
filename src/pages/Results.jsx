import { useParams, useLocation, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { RotateCcw, ArrowLeft, Trophy, Target, TrendingUp, Star } from 'lucide-react'
import quizData from '../data/quizData.js'
import PageTransition from '../components/PageTransition'
import { useSubjectBackground } from '../contexts/ThemeContext.jsx'

const saveProgress = (subjectId, chapterId, score, total) => {
  let progress = {}
  try { progress = JSON.parse(localStorage.getItem('learnflow-progress') || '{}') } catch { progress = {} }
  if (!progress[subjectId]) progress[subjectId] = {}
  const existing = progress[subjectId][chapterId]
  progress[subjectId][chapterId] = {
    bestScore: Math.max(score, existing?.bestScore || 0),
    bestTotal: total,
    status: score === total ? 'completed' : 'in_progress',
  }
  localStorage.setItem('learnflow-progress', JSON.stringify(progress))
}

function getMessage(s, t) {
  const r = t > 0 ? s / t : 0
  if (r === 1) return { msg: 'Perfect score', icon: Trophy, color: '#fdd663' }
  if (r >= 0.8) return { msg: 'Great job', icon: Star, color: '#81c995' }
  if (r >= 0.5) return { msg: 'Good effort', icon: TrendingUp, color: '#f9ab00' }
  return { msg: 'Keep practicing', icon: Target, color: '#9aa0a6' }
}

export default function Results() {
  const { subjectId, chapterId } = useParams()
  const location = useLocation()
  const { score = 0, total = 10 } = location.state || {}
  useSubjectBackground(subjectId)

  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))

  const [displayScore, setDisplayScore] = useState(0)
  const animationRef = useRef(null)
  const hasSaved = useRef(false)

  useEffect(() => {
    if (!hasSaved.current && subject && chapter) {
      saveProgress(subjectId, chapterId, score, total)
      hasSaved.current = true
    }
  }, [subjectId, chapterId, score, total, subject, chapter])

  useEffect(() => {
    const duration = 1200
    const startTime = performance.now()
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setDisplayScore(Math.round(eased * score))
      if (p < 1) animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current) }
  }, [score])

  const { msg, icon: Icon, color } = getMessage(score, total)

  const size = 200
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const percent = total > 0 ? score / total : 0
  const offset = circumference - percent * circumference

  return (
    <PageTransition>
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-10" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
        <div className="w-full max-w-md">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative mx-auto mb-8"
            style={{ width: size, height: size }}
          >
            <svg width={size} height={size} className="transform -rotate-90">
              <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#3c3c3c" strokeWidth={strokeWidth} />
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#f9ab00"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-medium tabular-nums" style={{ color: '#e8eaed', letterSpacing: '-0.03em' }}>
                {displayScore}
              </span>
              <span className="text-sm" style={{ color: '#9aa0a6' }}>of {total}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <Icon size={18} style={{ color }} />
              <h2 className="text-xl font-medium" style={{ color: '#e8eaed', letterSpacing: '-0.01em' }}>
                {msg}
              </h2>
            </div>
            {chapter && (
              <p className="text-sm" style={{ color: '#9aa0a6' }}>
                {chapter.name} · {subject?.name}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link to={`/quiz/${subjectId}/${chapterId}`} className="flex-1">
              <button
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors"
                style={{ backgroundColor: '#f9ab00', color: '#1f1f1f' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fbbc04' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f9ab00' }}
              >
                <RotateCcw size={16} />
                Retry quiz
              </button>
            </Link>
            <Link to={`/subject/${subjectId}`} className="flex-1">
              <button
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors"
                style={{ backgroundColor: 'transparent', color: '#e8eaed', border: '1px solid #3c3c3c' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                <ArrowLeft size={16} />
                Chapters
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
