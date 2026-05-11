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

  const size = 210
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const percent = total > 0 ? score / total : 0
  const offset = circumference - percent * circumference

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-10 overflow-hidden" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(700px 400px at 50% 20%, ${color}1f, transparent 60%), radial-gradient(500px 300px at 50% 100%, rgba(249,171,0,0.08), transparent 60%)`,
          }}
        />
        {percent === 1 && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.4, 1.6] }}
            transition={{ duration: 1.6, ease: 'easeOut', repeat: Infinity, repeatDelay: 1 }}
            className="absolute pointer-events-none"
            style={{
              top: '20%', left: '50%', transform: 'translateX(-50%)',
              width: 280, height: 280, borderRadius: '50%',
              background: `radial-gradient(circle, ${color}33, transparent 70%)`,
              filter: 'blur(20px)',
            }}
          />
        )}

        <div className="relative w-full max-w-md">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mb-8"
            style={{ width: size, height: size }}
          >
            <svg width={size} height={size} className="transform -rotate-90">
              <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#3c3c3c" strokeWidth={strokeWidth} />
              <defs>
                <linearGradient id="resultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f9ab00" />
                  <stop offset="100%" stopColor="#fdd663" />
                </linearGradient>
              </defs>
              <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="url(#resultGrad)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-6xl font-medium tabular-nums"
                style={{
                  letterSpacing: '-0.04em',
                  backgroundImage: 'linear-gradient(135deg, #e8eaed 0%, #f9ab00 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {displayScore}
              </span>
              <span className="text-sm mt-1" style={{ color: '#9aa0a6' }}>of {total}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
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
            transition={{ delay: 0.5, duration: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link to={`/quiz/${subjectId}/${chapterId}`} className="flex-1">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors"
                style={{ backgroundColor: '#f9ab00', color: '#1f1f1f', boxShadow: '0 6px 20px -8px rgba(249,171,0,0.6)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fbbc04' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f9ab00' }}
              >
                <RotateCcw size={16} />
                Retry quiz
              </motion.button>
            </Link>
            <Link to={`/subject/${subjectId}`} className="flex-1">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors"
                style={{ backgroundColor: 'transparent', color: '#e8eaed', border: '1px solid #3c3c3c' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                <ArrowLeft size={16} />
                Chapters
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
