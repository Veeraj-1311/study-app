export const BACKUP_KEYS = [
  'learnflow-progress',
  'learnflow-mistakes',
  'learnflow-last-study',
  'learnflow-chapter-notes',
  'learnflow-todos',
  'learnflow-videos',
  'learnflow-quiz-count',
  'learnflow-question-feedback',
  'learnflow-saved-questions',
  'learnflow-quiz-session',
  'learnflow-theme',
  'learnflow-saved-themes',
]

export function createBackup() {
  const data = {}
  BACKUP_KEYS.forEach((key) => {
    const value = localStorage.getItem(key)
    if (value !== null) data[key] = value
  })

  return {
    app: 'LearnFlow',
    version: 1,
    createdAt: new Date().toISOString(),
    data,
  }
}

export function hasBackupData(backup) {
  return Boolean(backup?.data && Object.keys(backup.data).length > 0)
}

export function backupSignature(backup) {
  return JSON.stringify(backup?.data || {})
}

export function downloadBackup() {
  const payload = createBackup()
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `learnflow-backup-${new Date().toISOString().slice(0, 10)}.json`
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

export async function readBackupFile(file) {
  const text = await file.text()
  const parsed = JSON.parse(text)
  if (parsed?.app !== 'LearnFlow' || !parsed?.data || typeof parsed.data !== 'object') {
    throw new Error('That file is not a LearnFlow backup.')
  }
  return parsed
}

export function restoreBackup(backup, options = {}) {
  if (options.clearMissing) {
    BACKUP_KEYS.forEach((key) => localStorage.removeItem(key))
  }
  Object.entries(backup.data).forEach(([key, value]) => {
    if (!BACKUP_KEYS.includes(key)) return
    if (typeof value === 'string') localStorage.setItem(key, value)
  })
}

export function resetStorage(keys) {
  keys.forEach((key) => localStorage.removeItem(key))
}
