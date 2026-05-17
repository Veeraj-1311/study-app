import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Brain, FileText, Play, RotateCcw } from 'lucide-react'
import quizData from '../data/quizData.js'
import ChapterNotes from '../components/ChapterNotes.jsx'
import PageTransition from '../components/PageTransition'
import QuestionCountSelector from '../components/QuestionCountSelector.jsx'
import { AppNav, Button, Card, EmptyState, PageHeader, PageShell } from '../components/ui.jsx'
import { getMistakeCount } from '../utils/progress.js'
import { playClick } from '../utils/sounds.js'
import { useSubjectBackground, useTheme } from '../hooks/useTheme.js'

const loadQuestionCount = () => {
  try {
    return parseInt(localStorage.getItem('learnflow-quiz-count') || '10', 10)
  } catch {
    return 10
  }
}

function ActionCard({ icon: Icon, title, description, color, onClick, children, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 * index, duration: 0.2 }}
    >
      <Card as="button" type="button" interactive className="action-card" onClick={onClick}>
        <span className="action-icon" style={{ color, background: `${color}14` }}>
          <Icon size={21} />
        </span>
        <span className="action-copy">
          <h3>{title}</h3>
          <p>{description}</p>
          {children && <span className="block mt-3">{children}</span>}
        </span>
      </Card>
    </motion.div>
  )
}

export default function ChapterLanding() {
  const { subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((item) => item.id === Number(chapterId))
  const { getSubjectColor } = useTheme()
  useSubjectBackground(subjectId)
  const [questionCount, setQuestionCount] = useState(loadQuestionCount)

  if (!subject || !chapter) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo="/" />
          <EmptyState
            icon={BookOpen}
            title="Chapter not found"
            description="This chapter is not available in LearnFlow."
            action={<Button to="/" icon={ArrowLeft}>Back home</Button>}
          />
        </PageShell>
      </PageTransition>
    )
  }

  const subjectColor = getSubjectColor(subjectId)
  const mistakeCount = getMistakeCount(subjectId, chapterId)

  const handleCountChange = (count) => {
    setQuestionCount(count)
    try {
      localStorage.setItem('learnflow-quiz-count', String(count))
    } catch {
      // The selector still works for the current session.
    }
  }

  return (
    <PageTransition>
      <PageShell size="focus">
        <AppNav backTo={`/subject/${subjectId}`} />
        <PageHeader
          icon={BookOpen}
          eyebrow={subject.name}
          title={chapter.name}
          description="Choose how you want to work through this chapter. Notes stay saved on this device."
        />

        <div className="split-layout">
          <section className="action-list">
            <ActionCard
              icon={Brain}
              title="Quiz"
              description="A focused multiple-choice session with explanations after each answer."
              color={subjectColor}
              index={0}
              onClick={() => {
                playClick()
                navigate(`/quiz/${subjectId}/${chapterId}?count=${questionCount}`)
              }}
            >
              <QuestionCountSelector
                value={questionCount}
                onChange={handleCountChange}
                maxAvailable={chapter.questions?.length || 10}
              />
            </ActionCard>

            <ActionCard
              icon={FileText}
              title="Summary"
              description="Scan the core points before a quiz or revision session."
              color="#2563eb"
              index={1}
              onClick={() => {
                playClick()
                navigate(`/summary/${subjectId}/${chapterId}`)
              }}
            />

            <ActionCard
              icon={Play}
              title="Video"
              description="Attach or watch YouTube explanations for this chapter."
              color="#dc2626"
              index={2}
              onClick={() => {
                playClick()
                navigate(`/video/${subjectId}/${chapterId}`)
              }}
            />

            {mistakeCount > 0 && (
              <ActionCard
                icon={RotateCcw}
                title={`Review mistakes (${mistakeCount})`}
                description="Only revisit questions you missed in previous attempts."
                color="#d97706"
                index={3}
                onClick={() => {
                  playClick()
                  navigate(`/quiz/${subjectId}/${chapterId}?review=mistakes`)
                }}
              />
            )}
          </section>

          <aside>
            <ChapterNotes key={`${subjectId}-${chapterId}`} subjectId={subjectId} chapterId={chapterId} />
          </aside>
        </div>
      </PageShell>
    </PageTransition>
  )
}
