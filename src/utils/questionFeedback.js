import { loadJson, saveJson } from './progress.js'

export const QUESTION_FEEDBACK_KEY = 'learnflow-question-feedback'

export const ISSUE_TYPES = [
  { id: 'wrong-answer', label: 'Wrong answer' },
  { id: 'unclear', label: 'Unclear wording' },
  { id: 'typo', label: 'Typo' },
  { id: 'duplicate', label: 'Duplicate' },
  { id: 'too-hard', label: 'Too hard' },
]

export function feedbackKey(question) {
  return `${question.sourceSubjectId}_${question.sourceChapterId}_${question.sourceQuestionId}`
}

export function loadFeedback() {
  return loadJson(QUESTION_FEEDBACK_KEY, {})
}

export function saveQuestionFeedback(question, issueType, note = '') {
  const all = loadFeedback()
  const key = feedbackKey(question)
  all[key] = {
    key,
    issueType,
    note,
    question: question.question,
    answer: question.options?.[question.correct] || '',
    subjectId: question.sourceSubjectId,
    chapterId: question.sourceChapterId,
    subjectName: question.sourceSubjectName,
    chapterName: question.sourceChapterName,
    createdAt: all[key]?.createdAt || Date.now(),
    updatedAt: Date.now(),
    status: 'open',
  }
  saveJson(QUESTION_FEEDBACK_KEY, all)
  return all[key]
}

export function closeQuestionFeedback(key) {
  const all = loadFeedback()
  if (all[key]) {
    all[key] = { ...all[key], status: 'fixed', updatedAt: Date.now() }
    saveJson(QUESTION_FEEDBACK_KEY, all)
  }
}

export function deleteQuestionFeedback(key) {
  const all = loadFeedback()
  delete all[key]
  saveJson(QUESTION_FEEDBACK_KEY, all)
}

export function issueLabel(issueType) {
  return ISSUE_TYPES.find((item) => item.id === issueType)?.label || issueType
}
