import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import BackgroundArt from './components/BackgroundArt'
import MobileNav from './components/MobileNav.jsx'

const Home = lazy(() => import('./pages/Home'))
const ChapterSelect = lazy(() => import('./pages/ChapterSelect'))
const ChapterLanding = lazy(() => import('./pages/ChapterLanding'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Results = lazy(() => import('./pages/Results'))
const Summary = lazy(() => import('./pages/Summary'))
const VideoPlayer = lazy(() => import('./pages/VideoPlayer'))
const Stats = lazy(() => import('./pages/Stats'))
const Review = lazy(() => import('./pages/Review'))

function RouteFallback() {
  return <div className="route-loader">Loading LearnFlow...</div>
}

function App() {
  const location = useLocation()
  const routeKey = `${location.pathname}${location.search}`

  return (
    <>
      <BackgroundArt />
      <Suspense fallback={<RouteFallback />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={routeKey}>
            <Route path="/" element={<Home />} />
            <Route path="/subject/:subjectId" element={<ChapterSelect />} />
            <Route path="/chapter/:subjectId/:chapterId" element={<ChapterLanding />} />
            <Route path="/quiz/:subjectId/:chapterId" element={<Quiz />} />
            <Route path="/results/:subjectId/:chapterId" element={<Results />} />
            <Route path="/summary/:subjectId/:chapterId" element={<Summary />} />
            <Route path="/video/:subjectId/:chapterId" element={<VideoPlayer />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/review" element={<Review />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <MobileNav />
    </>
  )
}

export default App
