import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit, ChevronRight, CheckCircle2, Clock } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme, useSubjectBackground } from '../contexts/ThemeContext.jsx'

const iconMap = { Calculator, FlaskConical, Globe, BookOpen, Languages, BrainCircuit }

const getProgress = () => {
  try {
    return JSON.parse(localStorage.getItem('learnflow-progress') || '{}')
  } catch {
    return {}
  }
}

function StatusIndicator({ status, score, total }) {
  if (status === 'completed') {
    return (
      <div className="flex items-center gap-1.5 text-xs" style={{ color: '#81c995' }}>
        <CheckCircle2 size={14} />
        <span>Done · {score}/{total}</span>
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
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
          <h2 className="text-2xl font-medium mb-3" style={{ letterSpacing: '-0.02em' }}>Subject not found</h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: '#f9ab00' }}
          >
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

  return (
    <PageTransition>
      <div className="min-h-screen w-full" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
        <div className="max-w-3xl mx-auto px-6 py-10 sm:py-14">
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

          <header className="flex items-center gap-4 mb-10">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${subjectColor}20` }}
            >
              {IconComponent && <IconComponent size={24} style={{ color: subjectColor }} strokeWidth={2} />}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-medium" style={{ color: '#e8eaed', letterSpacing: '-0.02em' }}>
                {subject.name}
              </h1>
              <p className="text-sm mt-0.5" style={{ color: '#9aa0a6' }}>
                {subject.chapters.length} chapter{subject.chapters.length !== 1 ? 's' : ''}
              </p>
            </div>
          </header>

          <div className="space-y-2">
            {subject.chapters.map((chapter, index) => {
              const chapterProgress = subjectProgress[chapter.id]
              const status = chapterProgress?.status || 'not_started'
              const bestScore = chapterProgress?.bestScore
              const bestTotal = chapterProgress?.bestTotal || 10

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.03, ease: 'easeOut' }}
                >
                  <Link to={`/chapter/${subjectId}/${chapter.id}`} onClick={playClick} className="block">
                    <div
                      className="flex items-center gap-4 px-5 py-4 rounded-xl transition-colors"
                      style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#353535' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a' }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium shrink-0"
                        style={{ backgroundColor: '#1f1f1f', color: '#9aa0a6' }}
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
                        <ChevronRight size={16} style={{ color: '#5f6368' }} />
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
