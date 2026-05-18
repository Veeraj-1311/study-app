import { loadJson, saveJson } from './progress.js'

export const SAVED_QUESTIONS_KEY = 'learnflow-saved-questions'

export function savedQuestionKey(question) {
  return `${question.sourceSubjectId}_${question.sourceChapterId}_${question.sourceQuestionId}`
}

export function loadSavedQuestions() {
  return loadJson(SAVED_QUESTIONS_KEY, {})
}

export function isQuestionSaved(question) {
  if (!question) return false
  return Boolean(loadSavedQuestions()[savedQuestionKey(question)])
}

export function saveQuestion(question) {
  const all = loadSavedQuestions()
  const key = savedQuestionKey(question)
  all[key] = {
    key,
    question: question.question,
    answer: question.options?.[question.correct] || '',
    subjectId: question.sourceSubjectId,
    chapterId: question.sourceChapterId,
    questionId: question.sourceQuestionId,
    subjectName: question.sourceSubjectName,
    chapterName: question.sourceChapterName,
    savedAt: all[key]?.savedAt || Date.now(),
    updatedAt: Date.now(),
  }
  saveJson(SAVED_QUESTIONS_KEY, all)
  return all[key]
}

export function removeSavedQuestion(key) {
  const all = loadSavedQuestions()
  delete all[key]
  saveJson(SAVED_QUESTIONS_KEY, all)
}

export function toggleSavedQuestion(question) {
  const key = savedQuestionKey(question)
  const all = loadSavedQuestions()
  if (all[key]) {
    delete all[key]
    saveJson(SAVED_QUESTIONS_KEY, all)
    return false
  }
  saveQuestion(question)
  return true
}
