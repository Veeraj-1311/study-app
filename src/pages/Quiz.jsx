import { useState, useEffect, useCallback, useMemo } from 'react'
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowLeft } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playCorrect, playWrong } from '../utils/sounds.js'
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

export default function Quiz() {
  const { subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  useSubjectBackground(subjectId)

  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))
  const questionCount = parseInt(searchParams.get('count') || '10', 10)

  const questions = useMemo(() => {
    const arr = [...(chapter?.questions || [])]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
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
        setScore((p) => p + 1)
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
    const t = setTimeout(() => {
      if (currentQuestion < total - 1) {
        setCurrentQuestion((p) => p + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        const computedScore = answers.filter((a) => a.isCorrect).length
        saveProgress(subjectId, chapterId, computedScore, total)
        navigate(`/results/${subjectId}/${chapterId}`, { state: { score: computedScore, total } })
      }
    }, 1500)
    return () => clearTimeout(t)
  }, [showResult, currentQuestion, total, score, selectedAnswer, question, subjectId, chapterId, navigate, answers])

  if (!subject || !chapter) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
          <h2 className="text-2xl font-medium mb-3" style={{ letterSpacing: '-0.02em' }}>Quiz not found</h2>
          <Link to="/" className="inline-flex items-center gap-2 text-sm" style={{ color: '#f9ab00' }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </PageTransition>
    )
  }

  if (!question) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1f1f1f', color: '#9aa0a6' }}>
          <p>No questions available for this chapter.</p>
        </div>
      </PageTransition>
    )
  }

  const optionStyle = (index) => {
    const base = {
      backgroundColor: '#2a2a2a',
      border: '1px solid #3c3c3c',
      color: '#e8eaed',
    }
    if (!showResult) return base
    if (index === question.correct) {
      return {
        backgroundColor: 'rgba(129, 201, 149, 0.12)',
        border: '1px solid rgba(129, 201, 149, 0.5)',
        color: '#81c995',
      }
    }
    if (index === selectedAnswer && index !== question.correct) {
      return {
        backgroundColor: 'rgba(242, 139, 130, 0.12)',
        border: '1px solid rgba(242, 139, 130, 0.5)',
        color: '#f28b82',
      }
    }
    return { backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c', color: '#5f6368' }
  }

  return (
    <PageTransition>
      <div className="min-h-screen w-full" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
        <div className="max-w-2xl mx-auto px-6 py-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-base font-medium truncate pr-4" style={{ color: '#e8eaed' }}>
              {chapter.name}
            </h2>
            <span className="text-sm tabular-nums whitespace-nowrap" style={{ color: '#9aa0a6' }}>
              {currentQuestion + 1} / {total}
            </span>
          </div>

          <div className="w-full h-1 rounded-full overflow-hidden mb-10" style={{ backgroundColor: '#3c3c3c' }}>
            <motion.div
              className="h-full"
              style={{ backgroundColor: '#f9ab00' }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h1 className="text-xl sm:text-2xl font-medium mb-8 leading-snug" style={{ color: '#e8eaed', letterSpacing: '-0.01em' }}>
                {question.question}
              </h1>

              <div className="space-y-2">
                {question.options.map((option, index) => {
                  const s = optionStyle(index)
                  const isWrongSelected = showResult && index === selectedAnswer && index !== question.correct
                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      animate={isWrongSelected ? { x: [0, -6, 6, -6, 0] } : {}}
                      transition={isWrongSelected ? { duration: 0.35 } : { duration: 0.2 }}
                      className="w-full text-left rounded-xl px-4 py-3.5 flex items-center gap-3 transition-colors"
                      style={{ ...s, cursor: showResult ? 'default' : 'pointer' }}
                      onMouseEnter={(e) => {
                        if (!showResult) e.currentTarget.style.backgroundColor = '#353535'
                      }}
                      onMouseLeave={(e) => {
                        if (!showResult) e.currentTarget.style.backgroundColor = '#2a2a2a'
                      }}
                    >
                      <span
                        className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-medium shrink-0"
                        style={{
                          backgroundColor: '#1f1f1f',
                          color: showResult && index === question.correct ? '#81c995'
                            : showResult && index === selectedAnswer ? '#f28b82'
                            : '#9aa0a6',
                        }}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1 text-sm">{option}</span>
                      {showResult && index === question.correct && <CheckCircle2 size={18} className="shrink-0" style={{ color: '#81c995' }} />}
                      {showResult && index === selectedAnswer && index !== question.correct && <XCircle size={18} className="shrink-0" style={{ color: '#f28b82' }} />}
                    </motion.button>
                  )
                })}
              </div>

              <AnimatePresence>
                {showResult && question.explanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 px-4 py-3 rounded-xl" style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}>
                      <p className="text-sm leading-relaxed" style={{ color: '#9aa0a6' }}>
                        <span className="font-medium" style={{ color: '#e8eaed' }}>Why: </span>
                        {question.explanation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  )
}
