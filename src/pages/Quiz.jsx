import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AlertCircle, ArrowLeft, Bookmark, BookmarkCheck, CheckCircle2, Eye, EyeOff, ListChecks, LoaderCircle, RotateCcw, SkipForward, XCircle } from 'lucide-react'
import quizMeta from '../data/quizMeta.js'
import { loadChapterQuestions, loadQuestionsForChapters } from '../data/questionLoaders.js'
import AskAI from '../components/AskAI.jsx'
import PageTransition from '../components/PageTransition'
import QuestionFeedback from '../components/QuestionFeedback.jsx'
import { AppNav, Button, Card, EmptyState, PageHeader, PageShell, ProgressBar } from '../components/ui.jsx'
import { loadMistakes, markLastStudy, questionId, saveMistakes, saveProgress } from '../utils/progress.js'
import { clearOldQuizSessions, clearQuizSession, loadQuizSession, saveQuizSession } from '../utils/quizSession.js'
import { loadSavedQuestions, savedQuestionKey, toggleSavedQuestion } from '../utils/savedQuestions.js'
import { playCorrect, playWrong } from '../utils/sounds.js'
import { useSubjectBackground } from '../hooks/useTheme.js'

const EMPTY_QUESTIONS = []

function shuffle(items) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function withSource(question, subjectId, chapterId) {
  const subject = quizMeta[subjectId]
  const chapter = subject?.chapters.find((item) => item.id === Number(chapterId))
  return {
    ...question,
    sourceSubjectId: subjectId,
    sourceChapterId: Number(chapterId),
    sourceSubjectName: subject?.name || subjectId,
    sourceChapterName: chapter?.name || `Chapter ${chapterId}`,
    sourceQuestionId: questionId(question),
  }
}

function restoreQuestionOrder(pool, session) {
  if (!Array.isArray(session?.questionKeys) || session.questionKeys.length === 0) return null
  const map = new Map(pool.map((question) => [savedQuestionKey(question), question]))
  const restored = session.questionKeys.map((key) => map.get(key)).filter(Boolean)
  return restored.length === session.questionKeys.length ? restored : null
}

async function createQuestionSet({ subjectId, chapterId, reviewMode, globalReview, globalSaved, questionCount, session }) {
  if (globalReview) {
    const mistakes = loadMistakes()
    const chapters = Object.entries(mistakes).flatMap(([mistakeSubjectId, subjectMistakes]) =>
      Object.keys(subjectMistakes).map((mistakeChapterId) => ({
        subjectId: mistakeSubjectId,
        chapterId: Number(mistakeChapterId),
        ids: new Set(subjectMistakes[mistakeChapterId] || []),
      }))
    )
    const entries = await loadQuestionsForChapters(chapters)
    const pool = entries.flatMap((entry) => {
      const source = chapters.find((item) => item.subjectId === entry.subjectId && item.chapterId === entry.chapterId)
      return entry.questions
        .filter((question) => source?.ids.has(questionId(question)))
        .map((question) => withSource(question, entry.subjectId, entry.chapterId))
    })
    return restoreQuestionOrder(pool, session) || shuffle(pool)
  }

  if (globalSaved) {
    const savedItems = Object.values(loadSavedQuestions())
    const chapters = savedItems.reduce((acc, item) => {
      const key = `${item.subjectId}_${item.chapterId}`
      const entry = acc.get(key) || { subjectId: item.subjectId, chapterId: item.chapterId, ids: new Set() }
      entry.ids.add(item.questionId)
      acc.set(key, entry)
      return acc
    }, new Map())
    const entries = await loadQuestionsForChapters([...chapters.values()])
    const pool = entries.flatMap((entry) => {
      const source = chapters.get(`${entry.subjectId}_${entry.chapterId}`)
      return entry.questions
        .filter((question) => source?.ids.has(questionId(question)))
        .map((question) => withSource(question, entry.subjectId, entry.chapterId))
    })
    return restoreQuestionOrder(pool, session) || shuffle(pool)
  }

  const questions = await loadChapterQuestions(subjectId, chapterId)
  const sourced = questions.map((question) => withSource(question, subjectId, chapterId))
  const restored = restoreQuestionOrder(sourced, session)
  if (restored) return restored
  if (reviewMode) {
    const wrongIds = new Set(loadMistakes()[subjectId]?.[chapterId] || [])
    return shuffle(sourced.filter((question) => wrongIds.has(question.sourceQuestionId)))
  }
  return shuffle(sourced).slice(0, questionCount)
}

function answerStateFor(answer, correct) {
  if (!answer) return 'unanswered'
  return answer.selected === correct ? 'correct' : 'wrong'
}

export default function Quiz() {
  const { subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const globalReview = subjectId === 'review' && chapterId === 'all'
  const globalSaved = subjectId === 'saved' && chapterId === 'all'
  useSubjectBackground(globalReview || globalSaved ? null : subjectId)

  const subject = globalReview || globalSaved ? null : quizMeta[subjectId]
  const chapter = subject?.chapters?.find((item) => item.id === Number(chapterId))
  const questionCount = parseInt(searchParams.get('count') || '10', 10)
  const reviewMode = globalReview || globalSaved || searchParams.get('review') === 'mistakes'
  const loadKey = `${subjectId}:${chapterId}:${reviewMode}:${globalReview}:${globalSaved}:${questionCount}`
  const sessionParams = useMemo(() => ({
    subjectId,
    chapterId,
    reviewMode,
    globalReview,
    globalSaved,
    questionCount,
  }), [chapterId, globalReview, globalSaved, questionCount, reviewMode, subjectId])
  const [questionState, setQuestionState] = useState({ key: '', questions: [], error: '' })
  const [retryNonce, setRetryNonce] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [flagged, setFlagged] = useState(() => new Set())
  const [showReview, setShowReview] = useState(false)
  const [explainAtEnd, setExplainAtEnd] = useState(false)

  useEffect(() => {
    clearOldQuizSessions()
  }, [])

  useEffect(() => {
    let cancelled = false
    const session = loadQuizSession(sessionParams)

    createQuestionSet({ subjectId, chapterId, reviewMode, globalReview, globalSaved, questionCount, session })
      .then((next) => {
        if (cancelled) return
        const questionMap = new Map(next.map((item) => [savedQuestionKey(item), item]))
        const restoredQuestions = session?.questionKeys?.map((key) => questionMap.get(key)).filter(Boolean)
        const canRestore = Array.isArray(restoredQuestions)
          && restoredQuestions.length === session?.questionKeys?.length
          && restoredQuestions.length > 0
        const resolvedQuestions = canRestore ? restoredQuestions : next
        const saved = loadSavedQuestions()

        setQuestionState({ key: loadKey, questions: resolvedQuestions, error: '' })
        setAnswers(canRestore ? (session.answers || {}) : {})
        setFlagged(canRestore
          ? new Set(session.flagged || [])
          : new Set(resolvedQuestions.flatMap((item, index) => (saved[savedQuestionKey(item)] ? [index] : [])))
        )
        setShowReview(canRestore ? Boolean(session.showReview) : false)
        setExplainAtEnd(canRestore ? Boolean(session.explainAtEnd) : false)
        setCurrentQuestion(canRestore ? Math.min(session.currentQuestion || 0, resolvedQuestions.length - 1) : 0)
        if (!globalReview && subject && chapter) markLastStudy(subjectId, chapterId)
      })
      .catch((error) => {
        if (cancelled) return
        setQuestionState({
          key: loadKey,
          questions: [],
          error: error?.message || 'Could not load questions.',
        })
      })

    return () => {
      cancelled = true
    }
  }, [chapter, chapterId, globalReview, globalSaved, loadKey, questionCount, retryNonce, reviewMode, sessionParams, subject, subjectId])

  const loading = questionState.key !== loadKey
  const loadError = !loading ? questionState.error : ''
  const questions = useMemo(() => (loading ? EMPTY_QUESTIONS : questionState.questions), [loading, questionState.questions])
  const total = questions.length
  const question = questions[currentQuestion]
  const currentAnswer = answers[currentQuestion]
  const hasAnswered = Boolean(currentAnswer)
  const answeredCount = Object.keys(answers).length
  const correctCount = Object.values(answers).filter((answer) => answer.isCorrect).length
  const progressPercent = total ? (answeredCount / total) * 100 : 0
  const backTo = globalReview ? '/review' : (globalSaved ? '/stats' : `/chapter/${subjectId}/${chapterId}`)
  const pageTitle = globalReview ? 'All saved mistakes' : (globalSaved ? 'Saved questions' : chapter?.name)
  const pageEyebrow = globalReview ? 'Mistake review' : (globalSaved ? 'Saved review' : (reviewMode ? 'Mistake review' : subject?.name))
  const aiContext = globalReview
    ? 'Saved mistake review'
    : (globalSaved ? 'Saved question review' : `${subject?.name || 'Subject'} / ${chapter?.name || 'Chapter'}`)

  useEffect(() => {
    if (loading || !questions.length) return
    saveQuizSession(sessionParams, {
      questionKeys: questions.map(savedQuestionKey),
      currentQuestion,
      answers,
      flagged: [...flagged],
      showReview,
      explainAtEnd,
    })
  }, [answers, currentQuestion, explainAtEnd, flagged, loading, questions, sessionParams, showReview])

  const aiDraft = useMemo(() => {
    if (!question) return ''
    const options = question.options.map((option, index) => `${String.fromCharCode(65 + index)}. ${option}`).join('\n')
    let answerLine = ''
    if (hasAnswered) {
      const selectedKey = String.fromCharCode(65 + currentAnswer.selected)
      const correctKey = String.fromCharCode(65 + question.correct)
      answerLine = currentAnswer.isCorrect
        ? `\nI selected ${selectedKey}: ${question.options[currentAnswer.selected]}. It was correct. Explain the idea so I remember it.`
        : `\nI selected ${selectedKey}: ${question.options[currentAnswer.selected]}, but the correct answer is ${correctKey}: ${question.options[question.correct]}. Explain why my selected option is wrong and why the correct option is right.`
    }
    return `Explain this question clearly:\n\n${question.question}\n\nOptions:\n${options}${answerLine}\n\nExplanation from the app: ${question.explanation || 'Not available'}`
  }, [currentAnswer, hasAnswered, question])

  const optionState = (index) => {
    if (!hasAnswered) return 'idle'
    if (index === question.correct) return 'correct'
    if (index === currentAnswer.selected) return 'wrong'
    return 'muted'
  }

  const handleAnswer = useCallback((optionIndex) => {
    if (!question || answers[currentQuestion]) return
    const isCorrect = optionIndex === question.correct
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: {
        selected: optionIndex,
        correct: question.correct,
        isCorrect,
      },
    }))
    if (isCorrect) playCorrect()
    else playWrong()
  }, [answers, currentQuestion, question])

  const goNext = useCallback(() => {
    if (currentQuestion < total - 1) {
      setCurrentQuestion((prev) => prev + 1)
      return
    }
    setShowReview(true)
  }, [currentQuestion, total])

  const toggleFlag = () => {
    if (!question) return
    const saved = toggleSavedQuestion(question)
    setFlagged((prev) => {
      const next = new Set(prev)
      if (saved) next.add(currentQuestion)
      else next.delete(currentQuestion)
      return next
    })
  }

  const finishQuiz = useCallback(() => {
    const byChapter = new Map()
    questions.forEach((item, index) => {
      const answer = answers[index]
      const key = `${item.sourceSubjectId}_${item.sourceChapterId}`
      const entry = byChapter.get(key) || {
        subjectId: item.sourceSubjectId,
        chapterId: item.sourceChapterId,
        wrongIds: [],
        fixedIds: [],
      }
      if (answer?.isCorrect) entry.fixedIds.push(item.sourceQuestionId)
      else entry.wrongIds.push(item.sourceQuestionId)
      byChapter.set(key, entry)
    })

    byChapter.forEach((entry) => {
      saveMistakes(entry.subjectId, entry.chapterId, entry.wrongIds, entry.fixedIds)
    })

    clearQuizSession(sessionParams)

    if (globalReview || globalSaved) {
      navigate(globalSaved ? '/stats' : '/review')
      return
    }

    if (!reviewMode) saveProgress(subjectId, chapterId, correctCount, total)
    navigate(`/results/${subjectId}/${chapterId}`, {
      state: { score: correctCount, total, review: reviewMode },
    })
  }, [answers, chapterId, correctCount, globalReview, globalSaved, navigate, questions, reviewMode, sessionParams, subjectId, total])

  useEffect(() => {
    const onKey = (event) => {
      const tag = (event.target?.tagName || '').toLowerCase()
      if (tag === 'input' || tag === 'textarea') return
      const keyMap = { 1: 0, 2: 1, 3: 2, 4: 3 }
      if (!showReview && !hasAnswered && event.key in keyMap && question?.options[keyMap[event.key]]) {
        event.preventDefault()
        handleAnswer(keyMap[event.key])
      }
      if (!showReview && event.key === 'Enter') {
        event.preventDefault()
        goNext()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, handleAnswer, hasAnswered, question, showReview])

  if (!globalReview && !globalSaved && (!subject || !chapter)) {
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

  if (loading) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo={backTo} />
          <EmptyState
            icon={LoaderCircle}
            title="Loading questions"
            description="Preparing a focused quiz session."
          />
        </PageShell>
      </PageTransition>
    )
  }

  if (loadError) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo={backTo} />
          <EmptyState
            icon={AlertCircle}
            title="Questions could not load"
            description={loadError}
            action={<Button onClick={() => setRetryNonce((value) => value + 1)}>Try again</Button>}
          />
        </PageShell>
      </PageTransition>
    )
  }

  if (!question) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo={backTo} />
          <EmptyState
            icon={reviewMode ? RotateCcw : CheckCircle2}
            title={globalSaved ? 'No saved questions' : (reviewMode ? 'No mistakes to review' : 'No questions yet')}
            description={globalSaved ? 'Flag questions during a quiz to collect them here.' : (reviewMode ? 'There are no saved mistakes in this set right now.' : 'Questions have not been added for this chapter.')}
            action={<Button to={backTo}>Back</Button>}
          />
        </PageShell>
      </PageTransition>
    )
  }

  if (showReview) {
    return (
      <PageTransition>
        <PageShell size="focus">
          <AppNav backTo={backTo} />
          <PageHeader
            icon={ListChecks}
            eyebrow={pageEyebrow}
            title="Review before finishing"
            description={`${correctCount} correct / ${total - answeredCount} unanswered / ${flagged.size} saved`}
          />

          <Card className="quiz-card">
            <div className="review-grid">
              {questions.map((item, index) => {
                const answer = answers[index]
                const state = answerStateFor(answer, item.correct)
                return (
                  <button
                    type="button"
                    key={`${item.sourceSubjectId}-${item.sourceChapterId}-${item.sourceQuestionId}-${index}`}
                    className="review-tile"
                    data-state={state}
                    onClick={() => {
                      setCurrentQuestion(index)
                      setShowReview(false)
                    }}
                  >
                    <strong>{index + 1}</strong>
                    <span>{state}{flagged.has(index) ? ' / saved' : ''}</span>
                  </button>
                )
              })}
            </div>
            <div className="quiz-footer quiz-footer-split">
              <Button variant="secondary" onClick={() => setShowReview(false)} icon={ArrowLeft}>Back to quiz</Button>
              <Button variant="accent" onClick={finishQuiz} icon={CheckCircle2}>Finish</Button>
            </div>
          </Card>
        </PageShell>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <PageShell size="focus">
        <AppNav
          backTo={backTo}
          actions={<AskAI inline label="Ask about this question" defaultContext={aiContext} draft={aiDraft} />}
        />
        <PageHeader
          eyebrow={pageEyebrow}
          title={pageTitle}
          description={reviewMode ? 'Review only the questions that need another pass.' : 'Answer, skip, flag, then review everything before finishing.'}
        />

        <Card className="quiz-card">
          <div className="quiz-topline">
            <span>Question {currentQuestion + 1} of {total}</span>
            <span>{correctCount} correct</span>
          </div>
          <ProgressBar value={progressPercent} />

          <div className="quiz-tools">
            <button type="button" className="tool-chip" onClick={() => setExplainAtEnd((value) => !value)}>
              {explainAtEnd ? <EyeOff size={15} /> : <Eye size={15} />}
              <span>{explainAtEnd ? 'Explain at end' : 'Explain now'}</span>
            </button>
            <button type="button" className="tool-chip" data-active={flagged.has(currentQuestion)} onClick={toggleFlag}>
              {flagged.has(currentQuestion) ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
              <span>{flagged.has(currentQuestion) ? 'Saved' : 'Save'}</span>
            </button>
          </div>

          <div key={currentQuestion}>
            {globalReview && (
              <p className="quiz-source">
                {question.sourceSubjectName} / {question.sourceChapterName}
              </p>
            )}
            <h1 className="quiz-question">{question.question}</h1>
            <div className="answer-list">
              {question.options.map((option, index) => (
                <button
                  key={`${option}-${index}`}
                  type="button"
                  className="answer-option"
                  data-state={optionState(index)}
                  disabled={hasAnswered}
                  onClick={() => handleAnswer(index)}
                >
                  <span className="answer-key">{String.fromCharCode(65 + index)}</span>
                  <span className="answer-copy">{option}</span>
                  {hasAnswered && index === question.correct && <CheckCircle2 size={19} style={{ color: '#16a34a' }} />}
                  {hasAnswered && index === currentAnswer.selected && index !== question.correct && <XCircle size={19} style={{ color: '#dc2626' }} />}
                </button>
              ))}
            </div>

            {hasAnswered && !explainAtEnd && question.explanation && (
              <div className="explanation">
                <strong>Why: </strong>{question.explanation}
              </div>
            )}

            {hasAnswered && <QuestionFeedback question={question} />}

            <div className="quiz-footer quiz-footer-split">
              <Button variant="secondary" onClick={goNext} icon={SkipForward}>
                {currentQuestion < total - 1 ? 'Skip' : 'Review'}
              </Button>
              <div className="quiz-footer-actions">
                <Button variant="ghost" onClick={() => setShowReview(true)} icon={ListChecks}>Review</Button>
                <Button variant="accent" onClick={goNext}>
                  {currentQuestion < total - 1 ? 'Continue' : 'Review answers'}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-5 text-center">
          <Link to={backTo} style={{ color: 'var(--color-text-secondary)', fontWeight: 700 }}>
            Leave quiz
          </Link>
        </div>
      </PageShell>
    </PageTransition>
  )
}
