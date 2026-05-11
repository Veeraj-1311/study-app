import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check, Pipette } from 'lucide-react'

const STORAGE_KEY = 'learnflow-theme-accent'
const CUSTOM_KEY = 'learnflow-theme-custom'

const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || '')
  if (!m) return [79, 147, 230]
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)]
}

const lighten = ([r, g, b], amt = 0.35) => [
  Math.round(r + (255 - r) * amt),
  Math.round(g + (255 - g) * amt),
  Math.round(b + (255 - b) * amt),
]

const rgbToHex = ([r, g, b]) =>
  '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')

const themeFromHex = (hex) => {
  const rgb = hexToRgb(hex)
  const cyanRgb = lighten(rgb, 0.35)
  return {
    id: 'custom',
    label: 'Custom',
    accent: hex.toLowerCase(),
    accentCyan: rgbToHex(cyanRgb),
    rgb,
    cyanRgb,
  }
}

export const THEMES = [
  { id: 'blue',   label: 'Soft blue',     accent: '#4f93e6', accentCyan: '#8ab4f8', rgb: [79, 147, 230],  cyanRgb: [138, 180, 248] },
  { id: 'green',  label: 'Sage green',    accent: '#6fa37d', accentCyan: '#a8c9b3', rgb: [111, 163, 125], cyanRgb: [168, 201, 179] },
  { id: 'purple', label: 'Muted purple',  accent: '#9d7ce8', accentCyan: '#c5aef5', rgb: [157, 124, 232], cyanRgb: [197, 174, 245] },
  { id: 'amber',  label: 'Warm amber',    accent: '#f9ab00', accentCyan: '#fdd663', rgb: [249, 171, 0],   cyanRgb: [253, 214, 99] },
  { id: 'coral',  label: 'Coral',         accent: '#f28b82', accentCyan: '#f6aea9', rgb: [242, 139, 130], cyanRgb: [246, 174, 169] },
  { id: 'teal',   label: 'Teal',          accent: '#4fc3b8', accentCyan: '#80deea', rgb: [79, 195, 184],  cyanRgb: [128, 222, 234] },
  { id: 'rose',   label: 'Dusty rose',    accent: '#e08aaf', accentCyan: '#f4b7d3', rgb: [224, 138, 175], cyanRgb: [244, 183, 211] },
]

export const COMBOS = [
  { id: 'ocean',    label: 'Ocean',     accent: '#4f93e6', accentCyan: '#4fc3b8', rgb: [79, 147, 230],  cyanRgb: [79, 195, 184] },
  { id: 'sunset',   label: 'Sunset',    accent: '#f9ab00', accentCyan: '#f28b82', rgb: [249, 171, 0],   cyanRgb: [242, 139, 130] },
  { id: 'aurora',   label: 'Aurora',    accent: '#9d7ce8', accentCyan: '#4f93e6', rgb: [157, 124, 232], cyanRgb: [79, 147, 230] },
  { id: 'forest',   label: 'Forest',    accent: '#6fa37d', accentCyan: '#4fc3b8', rgb: [111, 163, 125], cyanRgb: [79, 195, 184] },
  { id: 'berry',    label: 'Berry',     accent: '#e08aaf', accentCyan: '#9d7ce8', rgb: [224, 138, 175], cyanRgb: [157, 124, 232] },
  { id: 'citrus',   label: 'Citrus',    accent: '#f9ab00', accentCyan: '#81c995', rgb: [249, 171, 0],   cyanRgb: [129, 201, 149] },
  { id: 'twilight', label: 'Twilight',  accent: '#4f93e6', accentCyan: '#e08aaf', rgb: [79, 147, 230],  cyanRgb: [224, 138, 175] },
]

const applyTheme = (t) => {
  const root = document.documentElement
  root.style.setProperty('--color-accent', t.accent)
  root.style.setProperty('--color-accent-cyan', t.accentCyan)
  root.style.setProperty('--color-accent-r', String(t.rgb[0]))
  root.style.setProperty('--color-accent-g', String(t.rgb[1]))
  root.style.setProperty('--color-accent-b', String(t.rgb[2]))
  root.style.setProperty('--color-accent-cyan-r', String(t.cyanRgb[0]))
  root.style.setProperty('--color-accent-cyan-g', String(t.cyanRgb[1]))
  root.style.setProperty('--color-accent-cyan-b', String(t.cyanRgb[2]))
}

const ALL_PRESETS = [...THEMES, ...COMBOS]

const loadTheme = () => {
  try {
    const id = localStorage.getItem(STORAGE_KEY)
    if (id === 'custom') {
      const customHex = localStorage.getItem(CUSTOM_KEY)
      if (customHex) return themeFromHex(customHex)
    }
    return ALL_PRESETS.find((t) => t.id === id) || THEMES[0]
  } catch { return THEMES[0] }
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(loadTheme)
  const wrapRef = useRef(null)

  useEffect(() => {
    applyTheme(current)
    try {
      localStorage.setItem(STORAGE_KEY, current.id)
      if (current.id === 'custom') localStorage.setItem(CUSTOM_KEY, current.accent)
    } catch {}
  }, [current])

  const onCustomChange = (e) => {
    setCurrent(themeFromHex(e.target.value))
  }

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    window.addEventListener('mousedown', onClick)
    return () => window.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <div ref={wrapRef} className="fixed bottom-6 left-6 z-30">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute bottom-14 left-0 p-2 rounded-xl overflow-y-auto"
            style={{
              backgroundColor: '#242424',
              border: '1px solid #3c3c3c',
              minWidth: 220,
              maxHeight: 'min(70vh, 540px)',
              boxShadow: '0 16px 40px -14px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <p className="text-xs px-2 py-1 mb-1" style={{ color: '#9aa0a6' }}>Single color</p>
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => { setCurrent(t); setOpen(false) }}
                className="flex items-center gap-3 w-full px-2 py-1.5 rounded-md text-left text-sm transition-colors"
                style={{ color: '#e8eaed', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2f2f2f' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                <span
                  className="w-4 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: t.accent, boxShadow: `0 0 0 1px ${t.accent}33, 0 0 8px ${t.accent}55` }}
                />
                <span className="flex-1">{t.label}</span>
                {current.id === t.id && <Check size={14} style={{ color: t.accent }} />}
              </button>
            ))}

            <p className="text-xs px-2 py-1 mt-2 mb-1" style={{ color: '#9aa0a6', borderTop: '1px solid #3c3c3c', paddingTop: '0.5rem' }}>Combinations</p>
            {COMBOS.map((t) => (
              <button
                key={t.id}
                onClick={() => { setCurrent(t); setOpen(false) }}
                className="flex items-center gap-3 w-full px-2 py-1.5 rounded-md text-left text-sm transition-colors"
                style={{ color: '#e8eaed', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2f2f2f' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                <span
                  className="w-4 h-4 rounded-full shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.accent} 0%, ${t.accent} 50%, ${t.accentCyan} 50%, ${t.accentCyan} 100%)`,
                    boxShadow: `0 0 0 1px ${t.accent}33, 0 0 10px ${t.accent}55`,
                  }}
                />
                <span className="flex-1">{t.label}</span>
                {current.id === t.id && <Check size={14} style={{ color: t.accent }} />}
              </button>
            ))}

            <label
              className="flex items-center gap-3 w-full px-2 py-1.5 rounded-md text-left text-sm transition-colors cursor-pointer mt-1"
              style={{ color: '#e8eaed', backgroundColor: 'transparent', borderTop: '1px solid #3c3c3c', borderRadius: 0, paddingTop: '0.5rem' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2f2f2f' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              <span
                className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
                style={{
                  background: current.id === 'custom'
                    ? current.accent
                    : 'conic-gradient(from 0deg, #f28b82, #fdd663, #81c995, #8ab4f8, #c58af9, #f28b82)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.15)',
                }}
              >
                {current.id !== 'custom' && <Pipette size={9} style={{ color: 'white' }} />}
              </span>
              <span className="flex-1">Custom…</span>
              <input
                type="color"
                value={current.id === 'custom' ? current.accent : '#4f93e6'}
                onChange={onCustomChange}
                className="sr-only"
                aria-label="Pick a custom accent color"
              />
              {current.id === 'custom' && <Check size={14} style={{ color: current.accent }} />}
            </label>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
        style={{
          backgroundColor: '#2a2a2a',
          border: '1px solid #3c3c3c',
          color: current.accent,
          boxShadow: `0 6px 22px -10px ${current.accent}99`,
        }}
        aria-label="Change accent color"
      >
        <Palette size={18} />
      </motion.button>
    </div>
  )
}
