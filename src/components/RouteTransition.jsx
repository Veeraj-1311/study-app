import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const EASE = [0.22, 1, 0.36, 1]
const DURATION = 0.55
const HOLD_MS = 80

export default function RouteTransition({ children, intensity = 1 }) {
  const location = useLocation()
  const reduced = useReducedMotion()
  const [animKey, setAnimKey] = useState(0)
  const [active, setActive] = useState(false)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    if (reduced) return
    setAnimKey((k) => k + 1)
    setActive(true)
    const t = setTimeout(() => setActive(false), DURATION * 1000 + HOLD_MS)
    return () => clearTimeout(t)
  }, [location.pathname, reduced])

  return (
    <>
      {children}
      <AnimatePresence>
        {active && <SplitOverlay key={animKey} intensity={intensity} />}
      </AnimatePresence>
    </>
  )
}

function SplitOverlay({ intensity }) {
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[9999] pointer-events-none flex overflow-hidden"
      style={{ contain: 'paint' }}
    >
      <Bar dir="up" tint="rgba(120, 80, 255, 0.28)" intensity={intensity} />
      <Bar dir="down" tint="rgba(255, 255, 255, 0.06)" intensity={intensity} />
      <Bar dir="up" tint="rgba(80, 200, 255, 0.28)" intensity={intensity} />
    </div>
  )
}

function Bar({ dir, tint, intensity }) {
  const yOut = dir === 'up' ? '-115%' : '115%'
  const dip = dir === 'up' ? '0.9%' : '-0.9%'
  const blurMax = 14 * intensity
  const stretch = 1 + 0.25 * intensity

  return (
    <motion.div
      className="relative flex-1"
      style={{
        willChange: 'transform, filter, opacity',
        transformOrigin: dir === 'up' ? 'top center' : 'bottom center',
        backfaceVisibility: 'hidden',
      }}
      initial={{ y: 0, scaleY: 1, filter: 'blur(0px) brightness(1)', opacity: 1 }}
      animate={{
        y: [0, dip, yOut],
        scaleY: [1, 0.985, stretch],
        filter: [
          'blur(0px) brightness(1)',
          'blur(0px) brightness(1)',
          `blur(${blurMax}px) brightness(0.55)`,
        ],
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: DURATION,
        ease: EASE,
        times: [0, 0.075, 1],
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-950" />

      <div
        className={`absolute inset-x-0 ${dir === 'up' ? 'top-0 h-1/3' : 'bottom-0 h-1/3'}`}
        style={{
          background: `linear-gradient(${dir === 'up' ? 'to bottom' : 'to top'}, ${tint}, transparent)`,
          mixBlendMode: 'screen',
        }}
      />

      <div
        className="absolute inset-y-0 left-0 w-px"
        style={{ boxShadow: '8px 0 28px rgba(0,0,0,0.65)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-px"
        style={{ boxShadow: '-8px 0 28px rgba(0,0,0,0.65)' }}
      />
    </motion.div>
  )
}
