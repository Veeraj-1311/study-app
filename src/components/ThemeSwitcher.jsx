import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Palette } from 'lucide-react'
import presets from '../data/themePresets.js'
import { useTheme } from '../hooks/useTheme.js'

export default function ThemeSwitcher({ inline = false }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const { theme, setPreset, setThemeColor } = useTheme()

  useEffect(() => {
    if (!open) return undefined
    const onClick = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) setOpen(false)
    }
    window.addEventListener('mousedown', onClick)
    return () => window.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <div ref={wrapRef} className={inline ? 'inline-tool' : 'theme-switcher'}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="popover theme-panel"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16 }}
          >
            {Object.entries(presets).map(([id, preset]) => (
              <button
                key={id}
                type="button"
                className="theme-option"
                onClick={() => {
                  setPreset(id)
                  setOpen(false)
                }}
              >
                <span
                  className="theme-swatch"
                  style={{ background: `linear-gradient(135deg, ${preset.colors.accent}, ${preset.colors.accentCyan})` }}
                />
                <span style={{ flex: 1 }}>{preset.name}</span>
                {theme.preset === id && <Check size={15} />}
              </button>
            ))}
            <label className="theme-option">
              <span className="theme-swatch" style={{ background: theme.colors.accent }} />
              <span style={{ flex: 1 }}>Custom accent</span>
              <input
                type="color"
                value={theme.colors.accent}
                onChange={(event) => setThemeColor('accent', event.target.value)}
                aria-label="Pick a custom accent"
                style={{ width: 28, height: 24, border: 0, background: 'transparent' }}
              />
            </label>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className={inline ? 'button button-secondary button-sm' : 'floating-button'}
        onClick={() => setOpen((value) => !value)}
        whileTap={{ scale: 0.96 }}
        aria-label="Change theme"
      >
        <Palette size={17} style={{ color: 'var(--color-accent)' }} />
        <span>Theme</span>
      </motion.button>
    </div>
  )
}
