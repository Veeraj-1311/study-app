import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Brain, FileText, Play } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme, useSubjectBackground } from '../contexts/ThemeContext.jsx'
import QuestionCountSelector from '../components/QuestionCountSelector.jsx'

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18, delay: 0.2 + i * 0.15 },
  }),
}

function OptionCard({ to, onClick, icon: Icon, label, description, color, index, children }) {
  const [hovered, setHovered] = useState(false)
  const { accentRgb } = useTheme()

  const iconColor = hovered ? color : '#6a6a70'
  const iconBg = hovered ? `${color}20` : 'rgba(255,255,255,0.05)'
  const nameColor = hovered ? color : '#a0a0a5'

  const content = (
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
      className="bg-bg-card/80 backdrop-blur-xl rounded-2xl p-8 cursor-pointer h-full flex flex-col items-center text-center"
      style={{ border: `1px solid rgba(${accentRgb}, 0.15)` }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={32} className="transition-all duration-300" style={{ color: iconColor }} />
      </div>

      <h3
        className="text-2xl font-heading font-semibold mb-2 transition-all duration-300"
        style={{ color: nameColor }}
      >
        {label}
      </h3>
      <p className="text-text-muted text-sm transition-colors duration-300">
        {description}
      </p>
      {children}
    </motion.div>
  )

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      {to ? (
        <Link to={to} className="block" onClick={playClick}>
          {content}
        </Link>
      ) : (
        <div className="block" onClick={onClick}>
          {content}
        </div>
      )}
    </motion.div>
  )
}

export default function ChapterLanding() {
  const { subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))
  const { colors, accentRgb, accentCyanRgb, getSubjectColor } = useTheme()
  useSubjectBackground(subjectId)

  const [questionCount, setQuestionCount] = useState(() => {
    try {
      return parseInt(localStorage.getItem('learnflow-quiz-count') || '10', 10)
    } catch {
      return 10
    }
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
      <PageTransition
        className="min-h-screen flex flex-col items-center justify-center px-4"
      >
        <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
          Chapter not found
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

  const subjectColor = getSubjectColor(subjectId)

  return (
    <PageTransition
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col justify-center items-center"
    >
      {/* Back Button */}
      <div className="w-full mb-6">
        <Link to={`/subject/${subjectId}`} onClick={playClick}>
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
      <div className="flex flex-col items-center mb-10">
        <p className="text-text-muted text-sm mb-1">{subject.name}</p>
        <h1
          className="text-2xl sm:text-3xl font-heading font-bold text-center"
          style={{
            color: subjectColor,
            textShadow: `0 0 20px ${subjectColor}40`,
          }}
        >
          {chapter.name}
        </h1>
      </div>

      {/* Quiz / Summary / Video Options */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          <OptionCard
            onClick={handleStartQuiz}
            icon={Brain}
            label="Quiz"
            description="Test your knowledge"
            color={colors.accent}
            index={0}
          >
            <div className="mt-4 w-full" onClick={(e) => e.stopPropagation()}>
              <QuestionCountSelector
                value={questionCount}
                onChange={handleCountChange}
                maxAvailable={chapter.questions?.length || 15}
              />
            </div>
          </OptionCard>
          <OptionCard
            to={`/summary/${subjectId}/${chapterId}`}
            icon={FileText}
            label="Summary"
            description="Review key concepts and important points"
            color={colors.accentCyan}
            index={1}
          />
          <OptionCard
            to={`/video/${subjectId}/${chapterId}`}
            icon={Play}
            label="Video"
            description="Watch a video explanation of this chapter"
            color="#f59e0b"
            index={2}
          />
        </div>
      </div>
    </PageTransition>
  )
}
