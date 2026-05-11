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
  if (r >= 0.5) return { msg: 'Good effort', icon: TrendingUp, color: 'var(--color-accent)' }
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
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-10 overflow-hidden" style={{ color: '#e8eaed' }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(700px 400px at 50% 20%, ${color}1f, transparent 60%), radial-gradient(500px 300px at 50% 100%, rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.10), transparent 60%)`,
          }}
        />
        {percent === 1 && (
          <>
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
            {[
              { x: -120, y: -40, c: '#f9ab00', d: 0.1 },
              { x: 110, y: -50, c: '#8ab4f8', d: 0.15 },
              { x: -80, y: 100, c: '#c58af9', d: 0.2 },
              { x: 130, y: 90, c: '#81c995', d: 0.25 },
              { x: -150, y: 30, c: '#f28b82', d: 0.3 },
              { x: 90, y: 130, c: '#fdd663', d: 0.35 },
              { x: 0, y: -90, c: '#4fc3b8', d: 0.4 },
              { x: 40, y: 60, c: '#e08aaf', d: 0.45 },
            ].map((p, i) => (
              <motion.div
                key={i}
                aria-hidden
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], x: p.x, y: p.y, scale: [0, 1, 0.6] }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: p.d }}
                className="absolute pointer-events-none rounded-full"
                style={{
                  top: '38%', left: '50%',
                  width: 8, height: 8,
                  backgroundColor: p.c,
                  boxShadow: `0 0 12px ${p.c}`,
                }}
              />
            ))}
          </>
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
                  <stop offset="0%" stopColor="var(--color-accent)" />
                  <stop offset="100%" stopColor="var(--color-accent-cyan)" />
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
                  backgroundImage: 'linear-gradient(135deg, #e8eaed 0%, var(--color-accent) 100%)',
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
                style={{ backgroundColor: 'var(--color-accent)', color: '#1f1f1f', boxShadow: '0 6px 20px -8px rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.55)' }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.08)' }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)' }}
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
