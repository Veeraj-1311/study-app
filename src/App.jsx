import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import ChapterSelect from './pages/ChapterSelect'
import ChapterLanding from './pages/ChapterLanding'
import Quiz from './pages/Quiz'
import Results from './pages/Results'
import Summary from './pages/Summary'
import VideoPlayer from './pages/VideoPlayer'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:subjectId" element={<ChapterSelect />} />
        <Route path="/chapter/:subjectId/:chapterId" element={<ChapterLanding />} />
        <Route path="/quiz/:subjectId/:chapterId" element={<Quiz />} />
        <Route path="/results/:subjectId/:chapterId" element={<Results />} />
        <Route path="/summary/:subjectId/:chapterId" element={<Summary />} />
        <Route path="/video/:subjectId/:chapterId" element={<VideoPlayer />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
