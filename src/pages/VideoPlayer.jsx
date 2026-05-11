import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Link as LinkIcon, X, Play, Trash2, Plus } from 'lucide-react'
import quizData from '../data/quizData.js'
import { playClick } from '../utils/sounds.js'
import PageTransition from '../components/PageTransition'
import { useTheme } from '../contexts/ThemeContext.jsx'

function extractVideoId(url) {
  if (!url) return null
  const m1 = url.match(/[?&]v=([^&#]+)/); if (m1) return m1[1]
  const m2 = url.match(/youtu\.be\/([^?&#]+)/); if (m2) return m2[1]
  const m3 = url.match(/embed\/([^?&#]+)/); if (m3) return m3[1]
  if (/^[a-zA-Z0-9_-]{11}$/.test(url.trim())) return url.trim()
  return null
}

const storageKey = (s, c) => `${s}_${c}`

function getSavedVideos(subjectId, chapterId) {
  try {
    const data = JSON.parse(localStorage.getItem('learnflow-videos') || '{}')
    return data[storageKey(subjectId, chapterId)] || []
  } catch { return [] }
}

function saveVideos(subjectId, chapterId, videos) {
  try {
    const data = JSON.parse(localStorage.getItem('learnflow-videos') || '{}')
    const k = storageKey(subjectId, chapterId)
    if (videos.length > 0) data[k] = videos
    else delete data[k]
    localStorage.setItem('learnflow-videos', JSON.stringify(data))
  } catch {}
}

export default function VideoPlayer() {
  const { subjectId, chapterId } = useParams()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((c) => c.id === Number(chapterId))
  const { getSubjectColor } = useTheme()
  const accent = '#f28b82'
  const subjectColor = subject ? getSubjectColor(subjectId) : accent

  const [videos, setVideos] = useState(() => getSavedVideos(subjectId, chapterId))
  const [inputValue, setInputValue] = useState('')
  const [showInput, setShowInput] = useState(false)

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
            background: `radial-gradient(800px 400px at 70% -10%, ${accent}1a, transparent 60%), radial-gradient(500px 300px at 0% 100%, ${subjectColor}0d, transparent 60%)`,
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
              style={{ backgroundColor: `${accent}1f`, boxShadow: `inset 0 0 0 1px ${accent}40` }}
            >
              <Play size={22} style={{ color: accent }} strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: '#9aa0a6' }}>{subject.name} · Video</p>
              <h1
                className="text-2xl sm:text-3xl font-medium leading-tight"
                style={{
                  letterSpacing: '-0.02em',
                  backgroundImage: `linear-gradient(135deg, #e8eaed 0%, ${accent} 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {chapter.name}
              </h1>
            </div>
          </motion.header>

          <div className="space-y-6">
            <AnimatePresence>
              {videos.map((url, index) => {
                const vid = extractVideoId(url)
                if (!vid) return null
                return (
                  <motion.div
                    key={`${vid}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm" style={{ color: '#9aa0a6' }}>
                        Video {index + 1}
                      </span>
                      <button
                        onClick={() => handleRemove(index)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-colors"
                        style={{ color: '#9aa0a6', border: '1px solid #3c3c3c', backgroundColor: 'transparent' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#f28b82'; e.currentTarget.style.borderColor = '#f28b82' }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#9aa0a6'; e.currentTarget.style.borderColor = '#3c3c3c' }}
                      >
                        <Trash2 size={12} />
                        Remove
                      </button>
                    </div>

                    <div
                      className="w-full rounded-xl overflow-hidden"
                      style={{ border: '1px solid #3c3c3c', backgroundColor: '#000', boxShadow: `0 12px 32px -16px ${accent}55` }}
                    >
                      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                          src={`https://www.youtube.com/embed/${vid}`}
                          title={`${chapter.name} - Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className={videos.length > 0 ? 'mt-8' : ''}
          >
            {showInput ? (
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#2a2a2a', border: '1px solid #3c3c3c' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Play size={18} style={{ color: accent }} />
                  <p className="text-sm font-medium" style={{ color: '#e8eaed' }}>Paste a YouTube link</p>
                </div>

                <div
                  className="flex items-center gap-2 rounded-lg px-3 py-1"
                  style={{ backgroundColor: '#1f1f1f', border: '1px solid #3c3c3c' }}
                >
                  <LinkIcon size={16} style={{ color: '#5f6368' }} />
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                    placeholder="https://www.youtube.com/watch?v=..."
                    autoFocus
                    className="flex-1 bg-transparent text-sm py-2.5 outline-none"
                    style={{ color: '#e8eaed' }}
                  />
                  {inputValue && (
                    <button onClick={() => setInputValue('')} className="p-1" style={{ color: '#5f6368' }}>
                      <X size={14} />
                    </button>
                  )}
                </div>

                <div className="flex gap-2 mt-4">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleAdd}
                    disabled={!extractVideoId(inputValue.trim())}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ backgroundColor: accent, color: '#1f1f1f' }}
                  >
                    Add
                  </motion.button>
                  <button
                    onClick={() => { setShowInput(false); setInputValue('') }}
                    className="px-4 py-2 rounded-full text-sm transition-colors"
                    style={{ backgroundColor: 'transparent', color: '#9aa0a6', border: '1px solid #3c3c3c' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#353535' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <motion.button
                whileHover={{ y: -1 }}
                onClick={() => setShowInput(true)}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-sm transition-colors"
                style={{ backgroundColor: 'transparent', color: '#9aa0a6', border: '1px dashed #3c3c3c' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = accent; e.currentTarget.style.borderColor = accent }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#9aa0a6'; e.currentTarget.style.borderColor = '#3c3c3c' }}
              >
                <Plus size={16} />
                Add a video
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
