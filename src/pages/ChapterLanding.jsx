import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Brain, FileText, Play, ChevronRight } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme, useSubjectBackground } from '../contexts/ThemeContext.jsx'
import QuestionCountSelector from '../components/QuestionCountSelector.jsx'

function OptionRow({ to, onClick, icon: Icon, label, description, index, children }) {
  const content = (
    <div
      className="flex items-start gap-4 px-5 py-5 rounded-xl transition-colors w-full text-left"
      style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#353535' }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a' }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: '#1f1f1f' }}
      >
        <Icon size={18} style={{ color: '#f9ab00' }} strokeWidth={2} />
      </div>
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
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05, ease: 'easeOut' }}
    >
      {to ? (
        <Link to={to} className="block" onClick={playClick}>{content}</Link>
      ) : (
        <button type="button" className="block w-full" onClick={onClick}>{content}</button>
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
        <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
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
      <div className="min-h-screen w-full" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
        <div className="max-w-2xl mx-auto px-6 py-10 sm:py-14">
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

          <header className="mb-10">
            <p className="text-sm mb-2" style={{ color: subjectColor }}>{subject.name}</p>
            <h1 className="text-2xl sm:text-3xl font-medium" style={{ color: '#e8eaed', letterSpacing: '-0.02em' }}>
              {chapter.name}
            </h1>
          </header>

          <div className="space-y-2">
            <OptionRow
              onClick={handleStartQuiz}
              icon={Brain}
              label="Quiz"
              description="Test your knowledge with multiple choice questions"
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
              index={1}
            />

            <OptionRow
              to={`/video/${subjectId}/${chapterId}`}
              icon={Play}
              label="Video"
              description="Watch a video explanation"
              index={2}
            />
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
