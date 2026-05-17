import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, RotateCcw, XCircle } from 'lucide-react'
import quizData from '../data/quizData.js'
import PageTransition from '../components/PageTransition'
import { AppNav, Button, Card, EmptyState, PageHeader, PageShell, ProgressBar } from '../components/ui.jsx'
import { loadMistakes, questionId, saveMistakes, saveProgress } from '../utils/progress.js'
import { playCorrect, playWrong } from '../utils/sounds.js'
import { useSubjectBackground } from '../hooks/useTheme.js'

function shuffle(items) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function createQuestionSet({ chapter, reviewMode, subjectId, chapterId, questionCount }) {
  const all = chapter?.questions || []
  if (reviewMode) {
    const wrongIds = new Set(loadMistakes()[subjectId]?.[chapterId] || [])
    return shuffle(all.filter((question) => wrongIds.has(questionId(question))))
  }
  return shuffle(all).slice(0, questionCount)
}

export default function Quiz() {
  const { subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  useSubjectBackground(subjectId)

  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((item) => item.id === Number(chapterId))
  const questionCount = parseInt(searchParams.get('count') || '10', 10)
  const reviewMode = searchParams.get('review') === 'mistakes'
  const [questions] = useState(() => createQuestionSet({ chapter, reviewMode, subjectId, chapterId, questionCount }))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answers, setAnswers] = useState([])

  const total = questions.length
  const question = questions[currentQuestion]
  const hasAnswered = selectedAnswer !== null
  const progressPercent = total ? ((currentQuestion + (hasAnswered ? 1 : 0)) / total) * 100 : 0

  const handleAnswer = useCallback((optionIndex) => {
    if (!question || selectedAnswer !== null) return
    const isCorrect = optionIndex === question.correct
    setSelectedAnswer(optionIndex)
    setAnswers((prev) => [
      ...prev,
      {
        questionIndex: currentQuestion,
        selected: optionIndex,
        correct: question.correct,
        isCorrect,
      },
    ])
    if (isCorrect) playCorrect()
    else playWrong()
  }, [currentQuestion, question, selectedAnswer])

  const finishQuiz = useCallback(() => {
    const computedScore = answers.filter((answer) => answer.isCorrect).length
    const fixedIds = answers
      .filter((answer) => answer.isCorrect)
      .map((answer) => questionId(questions[answer.questionIndex]))
    const wrongIds = answers
      .filter((answer) => !answer.isCorrect)
      .map((answer) => questionId(questions[answer.questionIndex]))

    saveMistakes(subjectId, chapterId, wrongIds, fixedIds)
    if (!reviewMode) saveProgress(subjectId, chapterId, computedScore, total)
    navigate(`/results/${subjectId}/${chapterId}`, {
      state: { score: computedScore, total, review: reviewMode },
    })
  }, [answers, chapterId, navigate, questions, reviewMode, subjectId, total])

  const handleNext = useCallback(() => {
    if (!hasAnswered) return
    if (currentQuestion < total - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      return
    }
    finishQuiz()
  }, [currentQuestion, finishQuiz, hasAnswered, total])

  useEffect(() => {
    const onKey = (event) => {
      const tag = (event.target?.tagName || '').toLowerCase()
      if (tag === 'input' || tag === 'textarea') return
      const keyMap = { 1: 0, 2: 1, 3: 2, 4: 3 }
      if (!hasAnswered && event.key in keyMap && question?.options[keyMap[event.key]]) {
        event.preventDefault()
        handleAnswer(keyMap[event.key])
      }
      if (hasAnswered && event.key === 'Enter') {
        event.preventDefault()
        handleNext()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handleAnswer, handleNext, hasAnswered, question])

  if (!subject || !chapter) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo="/" />
          <EmptyState
            icon={ArrowLeft}
            title="Quiz not found"
            description="This quiz route does not match an available chapter."
            action={<Button to="/" icon={ArrowLeft}>Back home</Button>}
          />
        </PageShell>
      </PageTransition>
    )
  }

  if (!question) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo={`/chapter/${subjectId}/${chapterId}`} />
          <EmptyState
            icon={reviewMode ? RotateCcw : CheckCircle2}
            title={reviewMode ? 'No mistakes to review' : 'No questions yet'}
            description={reviewMode ? 'This chapter has no saved mistakes right now.' : 'Questions have not been added for this chapter.'}
            action={<Button to={`/chapter/${subjectId}/${chapterId}`}>Back to chapter</Button>}
          />
        </PageShell>
      </PageTransition>
    )
  }

  const optionState = (index) => {
    if (!hasAnswered) return 'idle'
    if (index === question.correct) return 'correct'
    if (index === selectedAnswer) return 'wrong'
    return 'muted'
  }

  return (
    <PageTransition>
      <PageShell size="focus">
        <AppNav backTo={`/chapter/${subjectId}/${chapterId}`} />
        <PageHeader
          eyebrow={reviewMode ? 'Mistake review' : subject.name}
          title={chapter.name}
          description={reviewMode ? 'Review only the questions that need another pass.' : 'Answer, read the explanation, then continue when ready.'}
        />

        <Card className="quiz-card">
          <div className="quiz-topline">
            <span>Question {currentQuestion + 1} of {total}</span>
            <span>{answers.filter((answer) => answer.isCorrect).length} correct</span>
          </div>
          <ProgressBar value={progressPercent} />

          <div key={currentQuestion}>
            <h1 className="quiz-question">{question.question}</h1>
            <div className="answer-list">
              {question.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className="answer-option"
                  data-state={optionState(index)}
                  disabled={hasAnswered}
                  onClick={() => handleAnswer(index)}
                >
                  <span className="answer-key">{String.fromCharCode(65 + index)}</span>
                  <span className="answer-copy">{option}</span>
                  {hasAnswered && index === question.correct && <CheckCircle2 size={19} style={{ color: '#16a34a' }} />}
                  {hasAnswered && index === selectedAnswer && index !== question.correct && <XCircle size={19} style={{ color: '#dc2626' }} />}
                </button>
              ))}
            </div>

            {hasAnswered && question.explanation && (
              <div className="explanation">
                <strong>Why: </strong>{question.explanation}
              </div>
            )}

            <div className="quiz-footer">
              {hasAnswered ? (
                <Button variant="accent" onClick={handleNext}>
                  {currentQuestion < total - 1 ? 'Continue' : 'Finish quiz'}
                </Button>
              ) : (
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Tip: use keys 1-4 to answer.
                </p>
              )}
            </div>
          </div>
        </Card>

        <div className="mt-5 text-center">
          <Link to={`/chapter/${subjectId}/${chapterId}`} style={{ color: 'var(--color-text-secondary)', fontWeight: 700 }}>
            Leave quiz
          </Link>
        </div>
      </PageShell>
    </PageTransition>
  )
}
