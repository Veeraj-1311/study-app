import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import quizData from '../data/quizData.js'
import summaries from '../data/summaries.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'

export default function Summary() {
  const { subjectId, chapterId } = useParams()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))
  const summary = summaries[subjectId]?.[chapterId]

  if (!subject || !chapter) {
    return (
      <PageTransition>
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
          <h2 className="text-2xl font-medium mb-3" style={{ letterSpacing: '-0.02em' }}>Chapter not found</h2>
          <Link to="/" className="inline-flex items-center gap-2 text-sm" style={{ color: '#f9ab00' }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="min-h-screen w-full" style={{ backgroundColor: '#1f1f1f', color: '#e8eaed' }}>
        <div className="max-w-3xl mx-auto px-6 py-10 sm:py-14">
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

          <header className="mb-10">
            <p className="text-sm mb-2" style={{ color: '#9aa0a6' }}>{subject.name} · Summary</p>
            <h1 className="text-2xl sm:text-3xl font-medium" style={{ color: '#e8eaed', letterSpacing: '-0.02em' }}>
              {chapter.name}
            </h1>
          </header>

          {summary && summary.length > 0 ? (
            <motion.ul
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.04 } } }}
              className="space-y-4"
              style={{ listStyle: 'none', padding: 0 }}
            >
              {summary.map((point, index) => (
                <motion.li
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                  }}
                  className="flex gap-3"
                >
                  <span
                    className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: '#f9ab00' }}
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
