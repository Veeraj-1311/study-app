import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowLeft, Link as LinkIcon, Play, Plus, Trash2, Video, X } from 'lucide-react'
import quizData from '../data/quizData.js'
import videoData from '../data/videos.js'
import PageTransition from '../components/PageTransition'
import { AppNav, Button, Card, EmptyState, IconButton, PageHeader, PageShell } from '../components/ui.jsx'
import { playClick } from '../utils/sounds.js'
import { useTheme } from '../hooks/useTheme.js'

function extractVideoId(url) {
  if (!url) return null
  const trimmed = url.trim()
  const standard = trimmed.match(/[?&]v=([^&#]+)/)
  if (standard) return standard[1]
  const short = trimmed.match(/youtu\.be\/([^?&#]+)/)
  if (short) return short[1]
  const embed = trimmed.match(/embed\/([^?&#]+)/)
  if (embed) return embed[1]
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed
  return null
}

const storageKey = (subjectId, chapterId) => `${subjectId}_${chapterId}`

function getSavedVideos(subjectId, chapterId) {
  try {
    const data = JSON.parse(localStorage.getItem('learnflow-videos') || '{}')
    return data[storageKey(subjectId, chapterId)] || []
  } catch {
    return []
  }
}

function saveVideos(subjectId, chapterId, videos) {
  try {
    const data = JSON.parse(localStorage.getItem('learnflow-videos') || '{}')
    const key = storageKey(subjectId, chapterId)
    if (videos.length > 0) data[key] = videos
    else delete data[key]
    localStorage.setItem('learnflow-videos', JSON.stringify(data))
  } catch {
    return false
  }
  return true
}

export default function VideoPlayer() {
  const { subjectId, chapterId } = useParams()
  const subject = quizData[subjectId]
  const chapter = subject?.chapters?.find((item) => item.id === Number(chapterId))
  const { getSubjectColor } = useTheme()
  const [customVideos, setCustomVideos] = useState(() => getSavedVideos(subjectId, chapterId))
  const [inputValue, setInputValue] = useState('')
  const [showInput, setShowInput] = useState(false)

  if (!subject || !chapter) {
    return (
      <PageTransition>
        <PageShell size="narrow">
          <AppNav backTo="/" />
          <EmptyState
            icon={Video}
            title="Video page not found"
            description="This chapter is not available."
            action={<Button to="/" icon={ArrowLeft}>Back home</Button>}
          />
        </PageShell>
      </PageTransition>
    )
  }

  const builtIn = videoData[subjectId]?.[chapterId]
  const videos = [
    ...(builtIn ? [{ url: builtIn, custom: false }] : []),
    ...customVideos.map((url) => ({ url, custom: true })),
  ].filter((item) => extractVideoId(item.url))
  const color = getSubjectColor(subjectId)

  const handleAdd = () => {
    const videoId = extractVideoId(inputValue)
    if (!videoId) return
    const updated = [...customVideos, inputValue.trim()]
    setCustomVideos(updated)
    saveVideos(subjectId, chapterId, updated)
    setInputValue('')
    setShowInput(false)
    playClick()
  }

  const handleRemove = (customIndex) => {
    const updated = customVideos.filter((_, index) => index !== customIndex)
    setCustomVideos(updated)
    saveVideos(subjectId, chapterId, updated)
    playClick()
  }

  return (
    <PageTransition>
      <PageShell size="focus">
        <AppNav backTo={`/chapter/${subjectId}/${chapterId}`} />
        <PageHeader
          icon={Play}
          eyebrow={`${subject.name} / Video`}
          title={chapter.name}
          description="Attach useful YouTube lessons for quick revision."
          actions={<Button variant="accent" icon={Plus} onClick={() => setShowInput(true)}>Add video</Button>}
        />

        {showInput && (
          <Card className="p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <LinkIcon size={18} style={{ color }} />
              <strong>Paste a YouTube link or video ID</strong>
            </div>
            <div className="field-shell">
              <input
                className="text-input"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') handleAdd()
                }}
                placeholder="https://www.youtube.com/watch?v=..."
                autoFocus
              />
              {inputValue && <IconButton label="Clear" icon={X} onClick={() => setInputValue('')} />}
              <Button variant="accent" size="sm" disabled={!extractVideoId(inputValue)} onClick={handleAdd}>Add</Button>
            </div>
          </Card>
        )}

        {videos.length === 0 ? (
          <EmptyState
            icon={Video}
            title="No videos yet"
            description="Add a YouTube link for this chapter and it will stay saved on this device."
            action={<Button icon={Plus} onClick={() => setShowInput(true)}>Add a video</Button>}
          />
        ) : (
          <section className="video-list">
            {videos.map((item, index) => {
              const id = extractVideoId(item.url)
              const customIndex = videos.slice(0, index).filter((video) => video.custom).length
              return (
                <Card key={`${id}-${index}`} className="p-4">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <strong>{item.custom ? `Saved video ${customIndex + 1}` : 'Chapter video'}</strong>
                    {item.custom && (
                      <Button variant="ghost" size="sm" icon={Trash2} onClick={() => handleRemove(customIndex)}>
                        Remove
                      </Button>
                    )}
                  </div>
                  <div className="video-frame">
                    <div className="video-ratio">
                      <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title={`${chapter.name} video ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </Card>
              )
            })}
          </section>
        )}
      </PageShell>
    </PageTransition>
  )
}
