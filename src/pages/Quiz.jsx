import { useState, useEffect, useCallback, useMemo } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import quizData from '../data/quizData.js'
import { playCorrect, playWrong } from '../utils/sounds.js'
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

export default function Quiz() {
  const { subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { colors, accentRgb, accentCyanRgb } = useTheme()
  useSubjectBackground(subjectId)

  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))

  const questionCount = parseInt(searchParams.get('count') || '10', 10)

  // Shuffle all questions and pick questionCount
  const questions = useMemo(() => {
    const arr = [...(chapter?.questions || [])]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.slice(0, questionCount)
  }, [chapter, questionCount])

  const total = questions.length

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])

  const question = questions[currentQuestion]
  const progressPercent = total > 0 ? ((currentQuestion + (showResult ? 1 : 0)) / total) * 100 : 0

  const handleAnswer = useCallback(
    (optionIndex) => {
      if (selectedAnswer !== null) return

      setSelectedAnswer(optionIndex)
      setShowResult(true)

      const isCorrect = optionIndex === question.correct
      if (isCorrect) {
        setScore((prev) => prev + 1)
        playCorrect()
      } else {
        playWrong()
      }

      setAnswers((prev) => [...prev, { questionIndex: currentQuestion, selected: optionIndex, correct: question.correct, isCorrect }])
    },
    [selectedAnswer, question, currentQuestion]
  )

  useEffect(() => {
    if (!showResult) return

    const timeout = setTimeout(() => {
      if (currentQuestion < total - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        const computedScore = answers.filter((a) => a.isCorrect).length

        saveProgress(subjectId, chapterId, computedScore, total)
        navigate(`/results/${subjectId}/${chapterId}`, {
          state: { score: computedScore, total },
        })
      }
    }, 1500)

    return () => clearTimeout(timeout)
  }, [showResult, currentQuestion, total, score, selectedAnswer, question, subjectId, chapterId, navigate, answers])

  if (!subject || !chapter) {
    return (
      <PageTransition
        className="min-h-screen flex flex-col items-center justify-center px-4"
      >
        <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
          Quiz not found
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

  if (!question) {
    return (
      <PageTransition
        className="min-h-screen flex items-center justify-center"
      >
        <p className="text-text-secondary">No questions available for this chapter.</p>
      </PageTransition>
    )
  }

  const getOptionStyle = (index) => {
    if (!showResult) {
      return {
        bg: 'bg-bg-card',
        border: '',
        borderStyle: { border: `1px solid rgba(${accentRgb}, 0.12)` },
        text: 'text-text-primary',
        glow: {},
      }
    }
    if (index === question.correct) {
      return {
        bg: 'bg-emerald-500/15',
        border: '',
        borderStyle: { border: '1px solid rgba(16, 185, 129, 0.5)' },
        text: 'text-emerald-400',
        glow: { boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)' },
      }
    }
    if (index === selectedAnswer && index !== question.correct) {
      return {
        bg: 'bg-red-500/15',
        border: '',
        borderStyle: { border: `1px solid rgba(${accentRgb}, 0.5)` },
        text: 'text-red-400',
        glow: { boxShadow: `0 0 15px rgba(${accentRgb}, 0.3)` },
      }
    }
    return {
      bg: 'bg-bg-card',
      border: '',
      borderStyle: { border: `1px solid rgba(${accentRgb}, 0.06)` },
      text: 'text-text-muted',
      glow: {},
    }
  }

  return (
    <PageTransition
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 max-w-3xl mx-auto"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-heading font-semibold text-text-primary truncate pr-4">
            {chapter.name}
          </h2>
          <span className="text-sm text-text-secondary whitespace-nowrap">
            Question {currentQuestion + 1} of {total}
          </span>
        </div>

        {/* Progress Bar with Glow */}
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.accent}, ${colors.accentCyan})`,
              boxShadow: `0 0 10px rgba(${accentRgb}, 0.4), 0 0 20px rgba(${accentCyanRgb}, 0.2)`,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Question Card */}
          <div
            className="bg-bg-card/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 mb-6"
            style={{
              border: `1px solid rgba(${accentRgb}, 0.15)`,
              boxShadow: `0 0 20px rgba(${accentRgb}, 0.05)`,
            }}
          >
            <p className="text-xl sm:text-2xl font-heading font-semibold text-text-primary leading-relaxed">
              {question.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const style = getOptionStyle(index)
              const isWrongSelected = showResult && index === selectedAnswer && index !== question.correct

              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  animate={
                    isWrongSelected
                      ? { x: [0, -8, 8, -8, 0] }
                      : {}
                  }
                  transition={
                    isWrongSelected
                      ? { duration: 0.4 }
                      : { type: 'spring', stiffness: 200, damping: 22 }
                  }
                  whileHover={!showResult ? {
                    scale: 1.02,
                    y: -2,
                    boxShadow: `0 0 20px rgba(${accentCyanRgb}, 0.2)`,
                    borderColor: colors.accentCyan,
                  } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  className={`w-full text-left rounded-xl p-4 transition-all duration-300 flex items-center gap-3 ${style.bg} ${style.text} ${
                    showResult ? 'cursor-default' : 'cursor-pointer'
                  }`}
                  style={{ ...style.borderStyle, ...style.glow }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold shrink-0 transition-colors duration-300"
                    style={{
                      backgroundColor: showResult
                        ? index === question.correct
                          ? 'rgba(16, 185, 129, 0.2)'
                          : index === selectedAnswer
                          ? `rgba(${accentRgb}, 0.2)`
                          : 'rgba(255,255,255,0.05)'
                        : 'rgba(255,255,255,0.05)',
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {showResult && index === question.correct && (
                    <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                  )}
                  {showResult && index === selectedAnswer && index !== question.correct && (
                    <XCircle size={20} className="text-red-400 shrink-0" />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showResult && question.explanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className="mt-4 p-4 rounded-xl bg-white/5"
                  style={{ border: `1px solid rgba(${accentRgb}, 0.1)` }}
                >
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <span className="font-semibold text-text-primary">Explanation: </span>
                    {question.explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </PageTransition>
  )
}
