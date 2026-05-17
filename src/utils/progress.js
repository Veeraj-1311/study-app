const PROGRESS_KEY = 'learnflow-progress'
const MISTAKES_KEY = 'learnflow-mistakes'

export function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function loadProgress() {
  return loadJson(PROGRESS_KEY, {})
}

export function saveProgress(subjectId, chapterId, score, total) {
  const progress = loadProgress()
  if (!progress[subjectId]) progress[subjectId] = {}
  const existing = progress[subjectId][chapterId]
  progress[subjectId][chapterId] = {
    bestScore: Math.max(score, existing?.bestScore || 0),
    bestTotal: total,
    status: score === total ? 'completed' : 'in_progress',
  }
  saveJson(PROGRESS_KEY, progress)
}

export function loadMistakes() {
  return loadJson(MISTAKES_KEY, {})
}

export function saveMistakes(subjectId, chapterId, wrongIds, fixedIds) {
  const all = loadMistakes()
  const current = new Set(all[subjectId]?.[chapterId] || [])
  fixedIds.forEach((id) => current.delete(id))
  wrongIds.forEach((id) => current.add(id))

  const next = Array.from(current)
  if (!all[subjectId]) all[subjectId] = {}
  if (next.length === 0) {
    delete all[subjectId][chapterId]
    if (Object.keys(all[subjectId]).length === 0) delete all[subjectId]
  } else {
    all[subjectId][chapterId] = next
  }
  saveJson(MISTAKES_KEY, all)
}

export function getMistakeCount(subjectId, chapterId) {
  return (loadMistakes()[subjectId]?.[chapterId] || []).length
}

export function questionId(question) {
  const text = (question?.question || '').slice(0, 100)
  let hash = 0
  for (let i = 0; i < text.length; i += 1) {
    hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0
  }
  return String(hash)
}
