import { useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import quizData from '../data/quizData.js'
import summaries from '../data/summaries.js'
import PageTransition from '../components/PageTransition'
import { AppNav, Button, Card, EmptyState, PageHeader, PageShell } from '../components/ui.jsx'
import { useTheme } from '../hooks/useTheme.js'

export default function Summary() {
  const { subjectId, chapterId } = useParams()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((item) => item.id === Number(chapterId))
  const summary = summaries[subjectId]?.[chapterId] || []
  const { getSubjectColor } = useTheme()
  const color = subject ? getSubjectColor(subjectId) : 'var(--color-accent)'

  if (!subject || !chapter) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo="/" />
          <EmptyState
            icon={BookOpen}
            title="Summary not found"
            description="This chapter summary is not available."
            action={<Button to="/" icon={ArrowLeft}>Back home</Button>}
          />
        </PageShell>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <PageShell size="focus">
        <AppNav backTo={`/chapter/${subjectId}/${chapterId}`} />
        <PageHeader
          icon={BookOpen}
          eyebrow={`${subject.name} / Summary`}
          title={chapter.name}
          description="Use this as a quick scan before attempting the quiz."
        />

        {summary.length > 0 ? (
          <Card className="summary-list">
            {summary.map((point, index) => (
              <div key={`${point}-${index}`} className="summary-item">
                <span className="summary-dot" style={{ background: color }} />
                <p className="m-0">{point}</p>
              </div>
            ))}
          </Card>
        ) : (
          <EmptyState
            icon={BookOpen}
            title="Summary coming soon"
            description="This chapter does not have summary notes yet."
            action={<Button to={`/chapter/${subjectId}/${chapterId}`}>Back to chapter</Button>}
          />
        )}
      </PageShell>
    </PageTransition>
  )
}
