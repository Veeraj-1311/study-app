import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const EASE = [0.22, 1, 0.36, 1]

const SLOTS = [
  { dir: 'up', clip: 'inset(0 66.6667% 0 0)', tint: 'rgba(120, 80, 255, 0.28)', dipPct: 0.9 },
  { dir: 'down', clip: 'inset(0 33.3333% 0 33.3333%)', tint: 'rgba(255, 255, 255, 0.06)', dipPct: -0.9 },
  { dir: 'up', clip: 'inset(0 0 0 66.6667%)', tint: 'rgba(80, 200, 255, 0.28)', dipPct: 0.9 },
]

export default function RouteTransition({ children, intensity = 1, duration = 3.5 }) {
  const location = useLocation()
  const reduced = useReducedMotion()

  const pageContainerRef = useRef(null)
  const lastPath = useRef(location.pathname)
  const isFirst = useRef(true)

  const [overlay, setOverlay] = useState(null)

  useLayoutEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      lastPath.current = location.pathname
      return
    }
    if (location.pathname === lastPath.current) return
    lastPath.current = location.pathname
    if (reduced) return

    const el = pageContainerRef.current
    if (!el) return

    const scrollSource = el.querySelector('[data-page-scroll]') || el
    const scrollTop = scrollSource.scrollTop || 0
    const snapshot = el.cloneNode(true)

    setOverlay({ snapshot, scrollTop, key: Date.now() })
  }, [location.pathname, reduced])

  useEffect(() => {
    if (!overlay) return
    const t = setTimeout(() => setOverlay(null), duration * 1000 + 80)
    return () => clearTimeout(t)
  }, [overlay, duration])

  return (
    <>
      <div ref={pageContainerRef} style={{ position: 'relative', minHeight: '100vh' }}>
        {children}
      </div>
      <AnimatePresence>
        {overlay && (
          <SplitOverlay
            key={overlay.key}
            snapshot={overlay.snapshot}
            scrollTop={overlay.scrollTop}
            intensity={intensity}
            duration={duration}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function SplitOverlay({ snapshot, scrollTop, intensity, duration }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden',
        contain: 'paint',
      }}
    >
      {SLOTS.map((slot, i) => (
        <Panel
          key={i}
          slot={slot}
          snapshot={snapshot}
          scrollTop={scrollTop}
          intensity={intensity}
          duration={duration}
        />
      ))}
    </div>
  )
}

function Panel({ slot, snapshot, scrollTop, intensity, duration }) {
  const hostRef = useRef(null)
  const blurMax = 14 * intensity
  const stretch = 1 + 0.25 * intensity
  const yOut = slot.dir === 'up' ? '-130%' : '130%'
  const yMid = slot.dir === 'up' ? '-55%' : '55%'

  useEffect(() => {
    const host = hostRef.current
    if (!host || !snapshot) return

    const style = document.createElement('style')
    style.textContent = '* { animation: none !important; transition: none !important; }'
    host.appendChild(style)

    const clone = snapshot.cloneNode(true)
    host.appendChild(clone)

    const scrollables = clone.querySelectorAll('[data-page-scroll]')
    if (scrollables.length) {
      scrollables.forEach((s) => { s.scrollTop = scrollTop })
    } else if (typeof clone.scrollTop !== 'undefined') {
      clone.scrollTop = scrollTop
    }

    return () => {
      while (host.firstChild) host.removeChild(host.firstChild)
    }
  }, [snapshot, scrollTop])

  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        clipPath: slot.clip,
        WebkitClipPath: slot.clip,
        willChange: 'transform, filter, opacity',
        transformOrigin: slot.dir === 'up' ? 'top center' : 'bottom center',
        backfaceVisibility: 'hidden',
      }}
      initial={{ y: 0, scaleY: 1, filter: 'blur(0px) brightness(1)', opacity: 1 }}
      animate={{
        y: [0, `${slot.dipPct}%`, yMid, yOut],
        scaleY: [1, 0.985, stretch, stretch * 0.95],
        filter: [
          'blur(0px) brightness(1)',
          'blur(0px) brightness(1)',
          `blur(${blurMax}px) brightness(0.55)`,
          `blur(${blurMax * 0.4}px) brightness(0.4)`,
        ],
        opacity: [1, 1, 1, 0],
      }}
      transition={{
        duration,
        ease: EASE,
        times: [0, 0.025, 0.4, 1],
      }}
    >
      <div
        ref={hostRef}
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          [slot.dir === 'up' ? 'top' : 'bottom']: 0,
          height: '33%',
          background: `linear-gradient(${slot.dir === 'up' ? 'to bottom' : 'to top'}, ${slot.tint}, transparent)`,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '0 auto 0 0',
          width: 1,
          boxShadow: '8px 0 28px rgba(0,0,0,0.65)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '0 0 0 auto',
          width: 1,
          boxShadow: '-8px 0 28px rgba(0,0,0,0.65)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  )
}
