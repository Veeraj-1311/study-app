import { Link } from 'react-router-dom'
import { CheckCircle2, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { closeQuestionFeedback, deleteQuestionFeedback, issueLabel, loadFeedback } from '../utils/questionFeedback.js'
import { Card, EmptyState, IconButton } from './ui.jsx'

export default function QuestionReports() {
  const [reports, setReports] = useState(() => Object.values(loadFeedback()))
  const sorted = [...reports].sort((a, b) => {
    if (a.status !== b.status) return a.status === 'open' ? -1 : 1
    return (b.updatedAt || 0) - (a.updatedAt || 0)
  })

  const refresh = () => setReports(Object.values(loadFeedback()))

  if (sorted.length === 0) {
    return (
      <Card className="reports-panel">
        <EmptyState
          icon={CheckCircle2}
          title="No question reports"
          description="Reports you save during quizzes will appear here."
        />
      </Card>
    )
  }

  return (
    <Card className="reports-panel">
      <div className="panel-title-row">
        <div>
          <h2>Question reports</h2>
          <p>Track bad answers, typos, duplicates, and confusing questions.</p>
        </div>
        <strong>{sorted.filter((item) => item.status !== 'fixed').length} open</strong>
      </div>

      <div className="report-list">
        {sorted.map((report) => (
          <article className="report-item" data-status={report.status} key={report.key}>
            <div className="report-main">
              <span>{report.subjectName} / {report.chapterName}</span>
              <h3>{issueLabel(report.issueType)}</h3>
              <p>{report.question}</p>
              {report.note && <small>{report.note}</small>}
            </div>
            <div className="report-actions">
              <Link className="button button-secondary button-sm" to={`/chapter/${report.subjectId}/${report.chapterId}`}>
                <span>Open</span>
              </Link>
              <IconButton
                label="Mark fixed"
                icon={CheckCircle2}
                onClick={() => {
                  closeQuestionFeedback(report.key)
                  refresh()
                }}
              />
              <IconButton
                label="Delete report"
                icon={Trash2}
                onClick={() => {
                  deleteQuestionFeedback(report.key)
                  refresh()
                }}
              />
            </div>
          </article>
        ))}
      </div>
    </Card>
  )
}
