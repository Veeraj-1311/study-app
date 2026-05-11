import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit, ChevronRight, CheckCircle2, Clock } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme, useSubjectBackground } from '../contexts/ThemeContext.jsx'

const iconMap = { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit }

const getProgress = () => {
  try { return JSON.parse(localStorage.getItem('learnflow-progress') || '{}') } catch { return {} }
}

function StatusIndicator({ status, score, total }) {
  if (status === 'completed') {
    return (
      <div className="flex items-center gap-1.5 text-xs" style={{ color: '#81c995' }}>
        <CheckCircle2 size={14} />
        <span>{score}/{total}</span>
      </div>
    )
  }
  if (status === 'in_progress') {
    return (
      <div className="flex items-center gap-1.5 text-xs" style={{ color: '#fdd663' }}>
        <Clock size={14} />
        <span>In progress</span>
      </div>
    )
  }
  return null
}

export default function ChapterSelect() {
  const { subjectId } = useParams()
  const subject = quizData[subjectId]
  const { getSubjectColor } = useTheme()
  useSubjectBackground(subjectId)

  if (!subject) {
    return (
      <PageTransition>
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-6" style={{ color: '#e8eaed' }}>
          <h2 className="text-2xl font-medium mb-3" style={{ letterSpacing: '-0.02em' }}>Subject not found</h2>
          <Link to="/" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--color-accent)' }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </PageTransition>
    )
  }

  const progress = getProgress()
  const subjectProgress = progress[subjectId] || {}
  const IconComponent = iconMap[subject.icon]
  const subjectColor = getSubjectColor(subjectId)

  const totalChapters = subject.chapters.length
  const completedChapters = subject.chapters.filter((c) => subjectProgress[c.id]?.status === 'completed').length
  const overallPct = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden" style={{ color: '#e8eaed' }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(900px 480px at 20% -10%, ${subjectColor}1a, transparent 60%), radial-gradient(600px 400px at 100% 100%, ${subjectColor}0d, transparent 60%)`,
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 py-10 sm:py-14">
          <Link
            to="/"
            onClick={playClick}
            className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
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
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-start gap-4 mb-10"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -6 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.05 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${subjectColor}1f`, boxShadow: `inset 0 0 0 1px ${subjectColor}40, 0 0 24px -8px ${subjectColor}55` }}
            >
              {IconComponent && <IconComponent size={26} style={{ color: subjectColor }} strokeWidth={2} />}
            </motion.div>
            <div className="flex-1 min-w-0">
              <h1
                className="text-3xl sm:text-4xl font-medium leading-tight"
                style={{
                  letterSpacing: '-0.02em',
                  backgroundImage: `linear-gradient(135deg, #e8eaed 0%, ${subjectColor} 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {subject.name}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm" style={{ color: '#9aa0a6' }}>
                  {completedChapters} of {totalChapters} done
                </span>
                <span style={{ color: '#3c3c3c' }}>·</span>
                <span className="text-sm tabular-nums" style={{ color: subjectColor }}>
                  {overallPct}%
                </span>
              </div>
            </div>
          </motion.header>

          <div className="space-y-2">
            {subject.chapters.map((chapter, index) => {
              const chapterProgress = subjectProgress[chapter.id]
              const status = chapterProgress?.status || 'not_started'
              const bestScore = chapterProgress?.bestScore
              const bestTotal = chapterProgress?.bestTotal || 10

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.035, ease: 'easeOut' }}
                >
                  <Link to={`/chapter/${subjectId}/${chapter.id}`} onClick={playClick} className="block group">
                    <div
                      className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all"
                      style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#303030'
                        e.currentTarget.style.borderColor = `${subjectColor}55`
                        e.currentTarget.style.transform = 'translateX(2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2a2a2a'
                        e.currentTarget.style.borderColor = '#3c3c3c'
                        e.currentTarget.style.transform = 'translateX(0)'
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium shrink-0 transition-colors"
                        style={{
                          backgroundColor: status === 'completed' ? `${subjectColor}26` : '#1f1f1f',
                          color: status === 'completed' ? subjectColor : '#9aa0a6',
                        }}
                      >
                        {index + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate" style={{ color: '#e8eaed' }}>
                          {chapter.name}
                        </h3>
                        {chapter.description && (
                          <p className="text-xs mt-0.5 truncate" style={{ color: '#9aa0a6' }}>
                            {chapter.description}
                          </p>
                        )}
                      </div>

                      <div className="shrink-0 flex items-center gap-3">
                        <StatusIndicator status={status} score={bestScore} total={bestTotal} />
                        <ChevronRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5"
                          style={{ color: '#5f6368' }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
