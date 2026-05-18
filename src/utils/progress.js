const PROGRESS_KEY = 'learnflow-progress'
const MISTAKES_KEY = 'learnflow-mistakes'
const LAST_STUDY_KEY = 'learnflow-last-study'

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
    updatedAt: Date.now(),
  }
  saveJson(PROGRESS_KEY, progress)
  markLastStudy(subjectId, chapterId)
}

export function markLastStudy(subjectId, chapterId) {
  saveJson(LAST_STUDY_KEY, {
    subjectId,
    chapterId: Number(chapterId),
    updatedAt: Date.now(),
  })
}

export function loadLastStudy() {
  return loadJson(LAST_STUDY_KEY, null)
}

export function getSmartStudyTarget(meta, progress = loadProgress()) {
  const last = loadLastStudy()
  if (last && meta[last.subjectId]?.chapters?.some((chapter) => chapter.id === Number(last.chapterId))) {
    const lastProgress = progress[last.subjectId]?.[last.chapterId]
    if (lastProgress?.status !== 'completed') return last
  }

  const entries = Object.entries(meta)
  for (const [subjectId, subject] of entries) {
    const inProgress = subject.chapters.find((chapter) => progress[subjectId]?.[chapter.id]?.status === 'in_progress')
    if (inProgress) return { subjectId, chapterId: inProgress.id }
  }

  for (const [subjectId, subject] of entries) {
    const next = subject.chapters.find((chapter) => progress[subjectId]?.[chapter.id]?.status !== 'completed')
    if (next) return { subjectId, chapterId: next.id }
  }

  const firstSubject = entries[0]
  const firstChapter = firstSubject?.[1]?.chapters?.[0]
  return firstSubject && firstChapter ? { subjectId: firstSubject[0], chapterId: firstChapter.id } : null
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
