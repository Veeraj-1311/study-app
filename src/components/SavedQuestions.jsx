import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookmarkCheck, Play, Trash2 } from 'lucide-react'
import { loadSavedQuestions, removeSavedQuestion } from '../utils/savedQuestions.js'
import { Card, EmptyState, IconButton } from './ui.jsx'

export default function SavedQuestions() {
  const [items, setItems] = useState(() => Object.values(loadSavedQuestions()))
  const sorted = [...items].sort((a, b) => (b.updatedAt || b.savedAt || 0) - (a.updatedAt || a.savedAt || 0))

  const refresh = () => setItems(Object.values(loadSavedQuestions()))

  if (sorted.length === 0) {
    return (
      <Card className="saved-panel">
        <EmptyState
          icon={BookmarkCheck}
          title="No saved questions"
          description="Flag questions during a quiz to collect them here."
        />
      </Card>
    )
  }

  return (
    <Card className="saved-panel">
      <div className="panel-title-row">
        <div>
          <h2>Saved questions</h2>
          <p>Flag hard questions during quizzes and review them later.</p>
        </div>
        <Link className="button button-accent button-sm" to="/quiz/saved/all">
          <Play size={14} />
          <span>Review</span>
        </Link>
      </div>

      <div className="saved-question-list">
        {sorted.map((item) => (
          <article className="saved-question-item" key={item.key}>
            <Link to={`/chapter/${item.subjectId}/${item.chapterId}`}>
              <span>{item.subjectName} / {item.chapterName}</span>
              <strong>{item.question}</strong>
              <small>Answer: {item.answer}</small>
            </Link>
            <IconButton
              label="Remove saved question"
              icon={Trash2}
              onClick={() => {
                removeSavedQuestion(item.key)
                refresh()
              }}
            />
          </article>
        ))}
      </div>
    </Card>
  )
}
