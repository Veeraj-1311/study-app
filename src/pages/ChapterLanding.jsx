import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Brain, FileText, Play, ChevronRight } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme, useSubjectBackground } from '../contexts/ThemeContext.jsx'
import QuestionCountSelector from '../components/QuestionCountSelector.jsx'

function OptionRow({ to, onClick, icon: Icon, label, description, accentColor, index, children }) {
  const inner = (
    <div
      className="relative flex items-start gap-4 px-5 py-5 rounded-xl w-full text-left overflow-hidden transition-all"
      style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#303030'
        e.currentTarget.style.borderColor = `${accentColor}66`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#2a2a2a'
        e.currentTarget.style.borderColor = '#3c3c3c'
      }}
    >
      <motion.div
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 240, damping: 18 }}
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: `${accentColor}1f`, boxShadow: `inset 0 0 0 1px ${accentColor}33` }}
      >
        <Icon size={20} style={{ color: accentColor }} strokeWidth={2} />
      </motion.div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium" style={{ color: '#e8eaed' }}>{label}</h3>
          <ChevronRight size={16} style={{ color: '#5f6368' }} />
        </div>
        <p className="text-xs mt-0.5" style={{ color: '#9aa0a6' }}>{description}</p>
        {children && <div className="mt-3" onClick={(e) => e.stopPropagation()}>{children}</div>}
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {to ? (
        <Link to={to} className="block" onClick={playClick}>{inner}</Link>
      ) : (
        <button type="button" className="block w-full" onClick={onClick}>{inner}</button>
      )}
    </motion.div>
  )
}

export default function ChapterLanding() {
  const { subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))
  const { getSubjectColor } = useTheme()
  useSubjectBackground(subjectId)

  const [questionCount, setQuestionCount] = useState(() => {
    try { return parseInt(localStorage.getItem('learnflow-quiz-count') || '10', 10) } catch { return 10 }
  })

  const handleCountChange = (count) => {
    setQuestionCount(count)
    localStorage.setItem('learnflow-quiz-count', String(count))
  }

  const handleStartQuiz = () => {
    playClick()
    navigate(`/quiz/${subjectId}/${chapterId}?count=${questionCount}`)
  }

  if (!subject || !chapter) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ color: '#e8eaed' }}>
          <h2 className="text-2xl font-medium mb-3" style={{ letterSpacing: '-0.02em' }}>Chapter not found</h2>
          <Link to="/" className="inline-flex items-center gap-2 text-sm" style={{ color: '#f9ab00' }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </PageTransition>
    )
  }

  const subjectColor = getSubjectColor(subjectId)

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden" style={{ color: '#e8eaed' }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(700px 400px at 50% -10%, ${subjectColor}1a, transparent 60%), radial-gradient(500px 300px at 100% 100%, rgba(249,171,0,0.06), transparent 60%)`,
          }}
        />

        <div className="relative max-w-2xl mx-auto px-6 py-10 sm:py-14">
          <Link
            to={`/subject/${subjectId}`}
            onClick={playClick}
            className="inline-flex items-center gap-2 text-sm mb-10"
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
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <p className="text-sm mb-2 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: subjectColor, boxShadow: `0 0 8px ${subjectColor}` }} />
              <span style={{ color: subjectColor }}>{subject.name}</span>
            </p>
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
              {chapter.name}
            </h1>
          </motion.header>

          <div className="space-y-2">
            <OptionRow
              onClick={handleStartQuiz}
              icon={Brain}
              label="Quiz"
              description="Test your knowledge with multiple choice questions"
              accentColor="#f9ab00"
              index={0}
            >
              <QuestionCountSelector
                value={questionCount}
                onChange={handleCountChange}
                maxAvailable={chapter.questions?.length || 15}
              />
            </OptionRow>

            <OptionRow
              to={`/summary/${subjectId}/${chapterId}`}
              icon={FileText}
              label="Summary"
              description="Review the key concepts of this chapter"
              accentColor="#8ab4f8"
              index={1}
            />

            <OptionRow
              to={`/video/${subjectId}/${chapterId}`}
              icon={Play}
              label="Video"
              description="Watch a video explanation"
              accentColor="#f28b82"
              index={2}
            />
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
