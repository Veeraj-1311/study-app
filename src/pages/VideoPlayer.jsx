import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Link as LinkIcon, X, Play, Trash2, Plus } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme, useSubjectBackground } from '../contexts/ThemeContext.jsx'

function extractVideoId(url) {
  if (!url) return null
  const match1 = url.match(/[?&]v=([^&#]+)/)
  if (match1) return match1[1]
  const match2 = url.match(/youtu\.be\/([^?&#]+)/)
  if (match2) return match2[1]
  const match3 = url.match(/embed\/([^?&#]+)/)
  if (match3) return match3[1]
  if (/^[a-zA-Z0-9_-]{11}$/.test(url.trim())) return url.trim()
  return null
}

function getStorageKey(subjectId, chapterId) {
  return `${subjectId}_${chapterId}`
}

function getSavedVideos(subjectId, chapterId) {
  try {
    const data = JSON.parse(localStorage.getItem('learnflow-videos') || '{}')
    return data[getStorageKey(subjectId, chapterId)] || []
  } catch {
    return []
  }
}

function saveVideos(subjectId, chapterId, videos) {
  try {
    const data = JSON.parse(localStorage.getItem('learnflow-videos') || '{}')
    const key = getStorageKey(subjectId, chapterId)
    if (videos.length > 0) {
      data[key] = videos
    } else {
      delete data[key]
    }
    localStorage.setItem('learnflow-videos', JSON.stringify(data))
  } catch {}
}

export default function VideoPlayer() {
  const { subjectId, chapterId } = useParams()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))
  const { colors, accentRgb, accentCyanRgb, getSubjectColor } = useTheme()
  useSubjectBackground(subjectId)

  const [videos, setVideos] = useState(() => getSavedVideos(subjectId, chapterId))
  const [inputValue, setInputValue] = useState('')
  const [showInput, setShowInput] = useState(false)

  const subjectColor = getSubjectColor(subjectId)

  const handleAdd = () => {
    const trimmed = inputValue.trim()
    const vid = extractVideoId(trimmed)
    if (vid) {
      const updated = [...videos, trimmed]
      setVideos(updated)
      saveVideos(subjectId, chapterId, updated)
      setInputValue('')
      setShowInput(false)
      playClick()
    }
  }

  const handleRemove = (index) => {
    const updated = videos.filter((_, i) => i !== index)
    setVideos(updated)
    saveVideos(subjectId, chapterId, updated)
    playClick()
  }

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
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          to={`/chapter/${subjectId}/${chapterId}`}
          className="w-10 h-10 rounded-xl bg-bg-card flex items-center justify-center text-text-secondary transition-all duration-300"
          style={{ border: `1px solid rgba(${accentRgb}, 0.15)` }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.accentCyan
            e.currentTarget.style.boxShadow = `0 0 15px rgba(${accentCyanRgb}, 0.3)`
            e.currentTarget.style.color = colors.accentCyan
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.15)`
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.color = ''
          }}
          onClick={playClick}
        >
          <ArrowLeft size={18} />
        </Link>
        <div className="flex-1">
          <p className="text-text-muted text-sm">{subject.name}</p>
          <h1
            className="text-2xl sm:text-3xl font-heading font-bold"
            style={{
              color: subjectColor,
              textShadow: `0 0 20px ${subjectColor}40`,
            }}
          >
            {chapter.name}
          </h1>
        </div>
      </div>

      {/* Videos List */}
      <div className="space-y-6">
        <AnimatePresence>
          {videos.map((url, index) => {
            const vid = extractVideoId(url)
            if (!vid) return null
            return (
              <motion.div
                key={`${vid}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {/* Video label + remove */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-secondary text-sm font-heading">
                    Video {index + 1}
                  </span>
                  <button
                    onClick={() => handleRemove(index)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 bg-red-500/10 transition-all duration-300 cursor-pointer"
                    style={{ border: `1px solid rgba(${accentRgb}, 0.2)` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 12px rgba(${accentRgb}, 0.3)`
                      e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.5)`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.2)`
                    }}
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>

                {/* Embedded player */}
                <div
                  className="w-full rounded-2xl overflow-hidden"
                  style={{
                    border: `1px solid rgba(${accentRgb}, 0.15)`,
                    boxShadow: `0 0 30px rgba(${accentRgb}, 0.1), 0 0 60px rgba(${accentCyanRgb}, 0.05)`,
                  }}
                >
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${vid}`}
                      title={`${chapter.name} - Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Add Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`${videos.length > 0 ? 'mt-8' : ''}`}
      >
        {showInput ? (
          <div
            className="flex flex-col items-center py-10 rounded-2xl bg-bg-card/80 backdrop-blur-xl"
            style={{ border: `1px solid rgba(${accentRgb}, 0.15)` }}
          >
            <Play size={36} className="text-text-muted mb-3" />
            <p className="text-text-secondary text-base font-heading mb-5">
              Paste a YouTube link
            </p>

            <div className="w-full max-w-md px-6">
              <div
                className="flex items-center gap-2 rounded-xl bg-white/5 p-1"
                style={{ border: `1px solid rgba(${accentRgb}, 0.2)` }}
              >
                <div className="pl-3 text-text-muted">
                  <LinkIcon size={18} />
                </div>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                  placeholder="https://www.youtube.com/watch?v=..."
                  autoFocus
                  className="flex-1 bg-transparent text-text-primary text-sm py-3 outline-none placeholder:text-text-muted/50"
                />
                {inputValue && (
                  <button
                    onClick={() => setInputValue('')}
                    className="p-2 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="flex gap-3 mt-4 justify-center">
                <button
                  onClick={handleAdd}
                  disabled={!extractVideoId(inputValue.trim())}
                  className="px-6 py-2.5 rounded-xl font-heading font-semibold text-sm text-white transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#f59e0b' }}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.disabled) e.currentTarget.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Add Video
                </button>
                <button
                  onClick={() => { setShowInput(false); setInputValue('') }}
                  className="px-6 py-2.5 rounded-xl font-heading font-semibold text-sm text-text-secondary bg-bg-card transition-all duration-300 cursor-pointer"
                  style={{ border: `1px solid rgba(${accentRgb}, 0.15)` }}
                >
                  Cancel
                </button>
              </div>
            </div>

            <p className="text-text-muted text-xs mt-5">
              Supports youtube.com and youtu.be links
            </p>
          </div>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="w-full flex items-center justify-center gap-2 py-5 rounded-2xl bg-bg-card/60 backdrop-blur-xl font-heading font-semibold text-text-secondary transition-all duration-300 cursor-pointer"
            style={{ border: `1px dashed rgba(${accentRgb}, 0.2)` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#f59e0b'
              e.currentTarget.style.color = '#f59e0b'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.2)`
              e.currentTarget.style.color = ''
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <Plus size={20} />
            Add a Video
          </button>
        )}
      </motion.div>
    </PageTransition>
  )
}
