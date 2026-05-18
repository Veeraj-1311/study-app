const QUIZ_SESSION_KEY = 'learnflow-quiz-session'

function keyFor(params) {
  return `${params.subjectId}:${params.chapterId}:${params.reviewMode}:${params.globalReview}:${params.globalSaved}:${params.questionCount}`
}

export function loadQuizSession(params) {
  try {
    const all = JSON.parse(localStorage.getItem(QUIZ_SESSION_KEY) || '{}')
    return all[keyFor(params)] || null
  } catch {
    return null
  }
}

export function saveQuizSession(params, data) {
  try {
    const all = JSON.parse(localStorage.getItem(QUIZ_SESSION_KEY) || '{}')
    all[keyFor(params)] = {
      ...data,
      updatedAt: Date.now(),
    }
    localStorage.setItem(QUIZ_SESSION_KEY, JSON.stringify(all))
    return true
  } catch {
    return false
  }
}

export function clearQuizSession(params) {
  try {
    const all = JSON.parse(localStorage.getItem(QUIZ_SESSION_KEY) || '{}')
    delete all[keyFor(params)]
    localStorage.setItem(QUIZ_SESSION_KEY, JSON.stringify(all))
    return true
  } catch {
    return false
  }
}

export function clearOldQuizSessions(maxAgeMs = 7 * 24 * 60 * 60 * 1000) {
  try {
    const now = Date.now()
    const all = JSON.parse(localStorage.getItem(QUIZ_SESSION_KEY) || '{}')
    Object.entries(all).forEach(([key, value]) => {
      if (now - (value?.updatedAt || 0) > maxAgeMs) delete all[key]
    })
    localStorage.setItem(QUIZ_SESSION_KEY, JSON.stringify(all))
  } catch {
    // Ignore corrupt session data.
  }
}

export function sessionMatchesQuestions(session, questions) {
  const ids = questions.map((question) => `${question.sourceSubjectId}_${question.sourceChapterId}_${question.sourceQuestionId}`)
  return Array.isArray(session?.questionKeys)
    && session.questionKeys.length === ids.length
    && session.questionKeys.every((id, index) => id === ids[index])
}
