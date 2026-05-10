import { Routes, Route } from 'react-router-dom'
import RouteTransition from './components/RouteTransition'
import Home from './pages/Home'
import ChapterSelect from './pages/ChapterSelect'
import ChapterLanding from './pages/ChapterLanding'
import Quiz from './pages/Quiz'
import Results from './pages/Results'
import Summary from './pages/Summary'
import VideoPlayer from './pages/VideoPlayer'

function App() {
  return (
    <RouteTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:subjectId" element={<ChapterSelect />} />
        <Route path="/chapter/:subjectId/:chapterId" element={<ChapterLanding />} />
        <Route path="/quiz/:subjectId/:chapterId" element={<Quiz />} />
        <Route path="/results/:subjectId/:chapterId" element={<Results />} />
        <Route path="/summary/:subjectId/:chapterId" element={<Summary />} />
        <Route path="/video/:subjectId/:chapterId" element={<VideoPlayer />} />
      </Routes>
    </RouteTransition>
  )
}

export default App
