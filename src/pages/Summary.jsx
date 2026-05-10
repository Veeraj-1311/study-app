import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import quizData from '../data/quizData.js'
import summaries from '../data/summaries.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme } from '../contexts/ThemeContext.jsx'

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const bulletVariants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Summary() {
  const { subjectId, chapterId } = useParams()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))
  const summary = summaries[subjectId]?.[chapterId]
  const { colors } = useTheme()

  if (!subject || !chapter) {
    return (
      <PageTransition
        className="min-h-screen flex flex-col items-center justify-center px-4"
      >
        <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
          Chapter not found
        </h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 transition-all duration-300"
          style={{ color: colors.accentCyan }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </PageTransition>
    )
  }

  return (
    <PageTransition
      className="min-h-screen"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to={`/chapter/${subjectId}/${chapterId}`}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl transition-all duration-300"
            style={{
              color: '#333',
              border: '1px solid #ccc',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#333'
              e.currentTarget.style.backgroundColor = '#f0f0f0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#ccc'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
            onClick={playClick}
          >
            <ArrowLeft size={18} />
            <span style={{ fontFamily: "'Patrick Hand', cursive" }}>Back</span>
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10"
        >
          <p
            className="text-sm mb-2"
            style={{ color: '#888', fontFamily: "'Patrick Hand', cursive" }}
          >
            {subject.name}
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{
              color: '#1a1a1a',
              fontFamily: "'Patrick Hand', cursive",
            }}
          >
            {chapter.name}
          </h1>
        </motion.div>

        {/* Summary Bullets */}
        {summary && summary.length > 0 ? (
          <motion.ul
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="space-y-5"
            style={{ listStyle: 'none', padding: 0 }}
          >
            {summary.map((point, index) => (
              <motion.li
                key={index}
                variants={bulletVariants}
                className="flex gap-3"
              >
                <span
                  className="shrink-0 mt-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#1a1a1a' }}
                />
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: '#2a2a2a',
                    fontFamily: "'Patrick Hand', cursive",
                  }}
                >
                  {point}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg"
            style={{
              color: '#666',
              fontFamily: "'Patrick Hand', cursive",
            }}
          >
            Summary coming soon for this chapter.
          </motion.p>
        )}
      </div>
    </PageTransition>
  )
}
