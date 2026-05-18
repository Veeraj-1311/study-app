import { useState } from 'react'
import { Flag, Save } from 'lucide-react'
import { ISSUE_TYPES, saveQuestionFeedback } from '../utils/questionFeedback.js'

export default function QuestionFeedback({ question }) {
  const [issueType, setIssueType] = useState('wrong-answer')
  const [note, setNote] = useState('')
  const [saved, setSaved] = useState(false)

  if (!question) return null

  const save = () => {
    saveQuestionFeedback(question, issueType, note.trim())
    setSaved(true)
    window.setTimeout(() => setSaved(false), 1400)
  }

  return (
    <section className="question-feedback">
      <div className="question-feedback-head">
        <Flag size={16} />
        <strong>Report this question</strong>
      </div>
      <div className="issue-chip-row">
        {ISSUE_TYPES.map((issue) => (
          <button
            key={issue.id}
            type="button"
            data-active={issueType === issue.id}
            onClick={() => setIssueType(issue.id)}
          >
            {issue.label}
          </button>
        ))}
      </div>
      <div className="field-shell question-feedback-note">
        <input
          className="text-input"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Optional note for fixing it later..."
        />
        <button type="button" className="mini-action" onClick={save}>
          <Save size={15} />
          <span>{saved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </section>
  )
}
