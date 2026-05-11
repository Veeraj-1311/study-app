import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen } from 'lucide-react'
import quizData from '../data/quizData.js'
import summaries from '../data/summaries.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme } from '../contexts/ThemeContext.jsx'

export default function Summary() {
  const { subjectId, chapterId } = useParams()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))
  const summary = summaries[subjectId]?.[chapterId]
  const { getSubjectColor } = useTheme()
  const subjectColor = subject ? getSubjectColor(subjectId) : 'var(--color-accent)'

  if (!subject || !chapter) {
    return (
      <PageTransition>
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-6" style={{ color: '#e8eaed' }}>
          <h2 className="text-2xl font-medium mb-3" style={{ letterSpacing: '-0.02em' }}>Chapter not found</h2>
          <Link to="/" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--color-accent)' }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden" style={{ color: '#e8eaed' }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(800px 400px at 30% -10%, ${subjectColor}1a, transparent 60%), radial-gradient(500px 300px at 100% 100%, rgba(138,180,248,0.06), transparent 60%)`,
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 py-10 sm:py-14">
          <Link
            to={`/chapter/${subjectId}/${chapterId}`}
            onClick={playClick}
            className="inline-flex items-center gap-2 text-sm mb-10"
            style={{ color: '#9aa0a6' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#e8eaed' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#9aa0a6' }}
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <motion.header
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 flex items-start gap-4"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${subjectColor}1f`, boxShadow: `inset 0 0 0 1px ${subjectColor}40` }}
            >
              <BookOpen size={22} style={{ color: subjectColor }} strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: '#9aa0a6' }}>{subject.name} · Summary</p>
              <h1
                className="text-2xl sm:text-3xl font-medium leading-tight"
                style={{
                  letterSpacing: '-0.02em',
                  backgroundImage: `linear-gradient(135deg, #e8eaed 0%, ${subjectColor} 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {chapter.name}
              </h1>
            </div>
          </motion.header>

          {summary && summary.length > 0 ? (
            <motion.ul
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
              className="space-y-4"
              style={{ listStyle: 'none', padding: 0 }}
            >
              {summary.map((point, index) => (
                <motion.li
                  key={index}
                  variants={{
                    initial: { opacity: 0, x: -6 },
                    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                  }}
                  className="flex gap-3 px-4 py-3 rounded-lg transition-colors"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2a2a2a' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  <span
                    className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: subjectColor, boxShadow: `0 0 8px ${subjectColor}` }}
                  />
                  <p className="text-base leading-relaxed" style={{ color: '#e8eaed' }}>
                    {point}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <p className="text-base" style={{ color: '#9aa0a6' }}>
              Summary coming soon for this chapter.
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
