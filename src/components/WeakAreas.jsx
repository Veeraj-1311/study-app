import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight } from 'lucide-react'
import quizMeta from '../data/quizMeta.js'
import { loadMistakes } from '../utils/progress.js'
import { Card, EmptyState } from './ui.jsx'

function collectWeakAreas() {
  const mistakes = loadMistakes()
  return Object.entries(mistakes)
    .flatMap(([subjectId, chapters]) => Object.entries(chapters).map(([chapterId, ids]) => {
      const subject = quizMeta[subjectId]
      const chapter = subject?.chapters.find((item) => item.id === Number(chapterId))
      return subject && chapter ? {
        subjectId,
        chapterId: Number(chapterId),
        subjectName: subject.name,
        chapterName: chapter.name,
        count: ids.length,
      } : null
    }))
    .filter(Boolean)
    .sort((a, b) => b.count - a.count)
    .slice(0, 4)
}

export default function WeakAreas() {
  const weakAreas = collectWeakAreas()

  if (weakAreas.length === 0) {
    return (
      <Card className="weak-panel">
        <EmptyState
          icon={AlertTriangle}
          title="No weak areas yet"
          description="Missed questions will turn into focused review targets."
        />
      </Card>
    )
  }

  return (
    <Card className="weak-panel">
      <div className="panel-title-row">
        <div>
          <h2>Weak areas</h2>
          <p>Chapters with the most saved mistakes.</p>
        </div>
        <AlertTriangle size={20} style={{ color: '#d97706' }} />
      </div>
      <div className="weak-list">
        {weakAreas.map((item) => (
          <Link className="weak-item" to={`/quiz/${item.subjectId}/${item.chapterId}?review=mistakes`} key={`${item.subjectId}-${item.chapterId}`}>
            <span>
              <strong>{item.chapterName}</strong>
              <small>{item.subjectName} / {item.count} to review</small>
            </span>
            <ArrowRight size={16} />
          </Link>
        ))}
      </div>
    </Card>
  )
}
