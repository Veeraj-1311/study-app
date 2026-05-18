import { useRef, useState } from 'react'
import { Download, RefreshCcw, RotateCcw, Upload } from 'lucide-react'
import { BACKUP_KEYS, downloadBackup, readBackupFile, resetStorage, restoreBackup } from '../utils/backup.js'
import { Button, Card } from './ui.jsx'

const RESET_GROUPS = [
  { label: 'Progress', keys: ['learnflow-progress', 'learnflow-last-study'] },
  { label: 'Mistakes', keys: ['learnflow-mistakes'] },
  { label: 'Notes', keys: ['learnflow-chapter-notes'] },
  { label: 'Tasks', keys: ['learnflow-todos'] },
  { label: 'Videos', keys: ['learnflow-videos'] },
  { label: 'Reports', keys: ['learnflow-question-feedback'] },
  { label: 'Saved Qs', keys: ['learnflow-saved-questions', 'learnflow-quiz-session'] },
  { label: 'Theme', keys: ['learnflow-theme', 'learnflow-saved-themes'] },
]

export default function StorageTools() {
  const [message, setMessage] = useState('')
  const fileInputRef = useRef(null)

  const handleRestore = async (event) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    try {
      const backup = await readBackupFile(file)
      restoreBackup(backup)
      setMessage('Backup restored. Reloading...')
      window.setTimeout(() => window.location.reload(), 450)
    } catch (error) {
      setMessage(error?.message || 'Backup restore failed.')
    }
  }

  const handleReset = (label, keys) => {
    const confirmed = window.confirm(`Reset ${label.toLowerCase()} data on this device?`)
    if (!confirmed) return
    resetStorage(keys)
    setMessage(`${label} reset. Reloading...`)
    window.setTimeout(() => window.location.reload(), 450)
  }

  return (
    <Card className="storage-tools">
      <div className="storage-tools-head">
        <div>
          <h2>Backup and reset</h2>
          <p>Progress, notes, tasks, videos, and themes are saved on this device.</p>
        </div>
        <div className="storage-tool-actions">
          <Button variant="secondary" size="sm" icon={Download} onClick={downloadBackup}>Export</Button>
          <input ref={fileInputRef} type="file" accept="application/json" className="hidden-input" onChange={handleRestore} />
          <Button variant="secondary" size="sm" icon={Upload} onClick={() => fileInputRef.current?.click()}>Import</Button>
        </div>
      </div>

      <div className="reset-grid">
        {RESET_GROUPS.map((group) => (
          <button type="button" key={group.label} onClick={() => handleReset(group.label, group.keys)}>
            <RotateCcw size={15} />
            <span>{group.label}</span>
          </button>
        ))}
        <button type="button" className="danger-reset" onClick={() => handleReset('Everything', BACKUP_KEYS)}>
          <RefreshCcw size={15} />
          <span>Everything</span>
        </button>
      </div>

      {message && <p className="storage-message">{message}</p>}
    </Card>
  )
}
