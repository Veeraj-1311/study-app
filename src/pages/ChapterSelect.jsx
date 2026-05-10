import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme, useSubjectBackground } from '../contexts/ThemeContext.jsx'

const iconMap = { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit }

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18, delay: i * 0.06 },
  }),
}

const getProgress = () => {
  try {
    return JSON.parse(localStorage.getItem('learnflow-progress') || '{}')
  } catch {
    return {}
  }
}

function StatusBadge({ status }) {
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">
        Completed
      </span>
    )
  }
  if (status === 'in_progress') {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
        In Progress
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-text-muted">
      Not Started
    </span>
  )
}

export default function ChapterSelect() {
  const { subjectId } = useParams()
  const subject = quizData[subjectId]
  const { colors, accentRgb, accentCyanRgb, getSubjectColor } = useTheme()
  useSubjectBackground(subjectId)

  if (!subject) {
    return (
      <PageTransition
        className="min-h-screen flex flex-col items-center justify-center px-4"
      >
        <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
          Subject not found
        </h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 transition-all duration-300"
          style={{ color: colors.accentCyan }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </PageTransition>
    )
  }

  const progress = getProgress()
  const subjectProgress = progress[subjectId] || {}
  const IconComponent = iconMap[subject.icon]
  const subjectColor = getSubjectColor(subjectId)

  return (
    <PageTransition
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center items-center"
    >
      {/* Back Button */}
      <div className="w-full mb-6">
        <Link to="/" onClick={playClick}>
          <motion.div
            className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              background: `linear-gradient(135deg, rgba(${accentCyanRgb}, 0.12), rgba(${accentRgb}, 0.12))`,
              border: `2px solid rgba(${accentCyanRgb}, 0.3)`,
              boxShadow: `0 0 15px rgba(${accentCyanRgb}, 0.1), inset 0 0 15px rgba(${accentCyanRgb}, 0.05)`,
            }}
            whileHover={{
              scale: 1.15,
              rotate: -10,
              borderColor: colors.accentCyan,
              boxShadow: `0 0 25px rgba(${accentCyanRgb}, 0.35), inset 0 0 20px rgba(${accentCyanRgb}, 0.1)`,
            }}
            whileTap={{ scale: 0.85, rotate: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <ArrowLeft size={26} style={{ color: colors.accentCyan }} />
          </motion.div>
        </Link>
      </div>

      {/* Title — Centered */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${subjectColor}20` }}
        >
          {IconComponent && <IconComponent size={24} style={{ color: subjectColor }} />}
        </div>
        <h1
          className="text-2xl sm:text-3xl font-heading font-bold text-center"
          style={{
            color: subjectColor,
            textShadow: `0 0 20px ${subjectColor}40`,
          }}
        >
          {subject.name}
        </h1>
      </div>

      {/* Chapter List */}
      <div className="space-y-4 w-full">
        {subject.chapters.map((chapter, index) => {
          const chapterProgress = subjectProgress[chapter.id]
          const status = chapterProgress?.status || 'not_started'
          const bestScore = chapterProgress?.bestScore
          const bestTotal = chapterProgress?.bestTotal || 10

          return (
            <motion.div
              key={chapter.id}
              custom={index}
              variants={itemVariants}
              initial="initial"
              animate="animate"
            >
              <Link to={`/chapter/${subjectId}/${chapter.id}`} className="block group" onClick={playClick}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    borderColor: `${subjectColor}60`,
                    boxShadow: `0 0 20px ${subjectColor}20, 0 0 5px rgba(${accentRgb}, 0.1)`,
                  }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                  className="bg-bg-card rounded-xl p-5 flex items-center gap-4"
                  style={{ border: `1px solid rgba(${accentRgb}, 0.12)` }}
                >
                  {/* Chapter Number */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold font-heading text-white"
                    style={{
                      backgroundColor: colors.accent,
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Chapter Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-text-primary font-heading font-semibold text-base group-hover:text-white transition-all duration-300 truncate">
                      {chapter.name}
                    </h3>
                    {chapter.description && (
                      <p className="text-text-muted text-sm mt-0.5 truncate">
                        {chapter.description}
                      </p>
                    )}
                  </div>

                  {/* Status & Score */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <StatusBadge status={status} />
                    {bestScore !== undefined && bestScore !== null && (
                      <span className="text-xs text-text-muted">
                        Best: {bestScore}/{bestTotal}
                      </span>
                    )}
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </PageTransition>
  )
}
