import { useCallback, useEffect, useMemo, useState } from 'react'
import presets from '../data/themePresets.js'
import { applyThemeToDOM, rgbString } from '../utils/themeUtils.js'
import ThemeContext from './theme-context.js'

const STORAGE_KEY = 'learnflow-theme'
const SAVED_THEMES_KEY = 'learnflow-saved-themes'

const makeDefaultTheme = () => ({
  preset: 'default',
  colors: { ...presets.default.colors },
  subjectColors: { ...presets.default.subjectColors },
  transition: 'soft',
})

function sanitizeTheme(input = {}) {
  const defaultTheme = makeDefaultTheme()
  const inputColors = input.colors || {}

  return {
    ...defaultTheme,
    preset: input.preset || defaultTheme.preset,
    colors: {
      ...defaultTheme.colors,
      accent: inputColors.accent || defaultTheme.colors.accent,
      accentCyan: inputColors.accentCyan || defaultTheme.colors.accentCyan,
    },
    subjectColors: {
      ...defaultTheme.subjectColors,
      ...(input.subjectColors || {}),
    },
    transition: input.transition || defaultTheme.transition,
  }
}

function loadTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return makeDefaultTheme()
    const parsed = JSON.parse(stored)
    return sanitizeTheme(parsed)
  } catch {
    return makeDefaultTheme()
  }
}

function loadSavedThemes() {
  try {
    const stored = localStorage.getItem(SAVED_THEMES_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(loadTheme)
  const [savedThemes, setSavedThemes] = useState(loadSavedThemes)

  useEffect(() => {
    applyThemeToDOM(theme)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme))
    } catch {
      // Storage can fail in private browsing; the UI still works with in-memory state.
    }
  }, [theme])

  const setThemeColor = useCallback((key, value) => {
    if (key !== 'accent' && key !== 'accentCyan') return
    setThemeState((prev) => ({
      ...prev,
      preset: 'custom',
      colors: { ...prev.colors, [key]: value },
    }))
  }, [])

  const setSubjectColor = useCallback((subjectId, value) => {
    setThemeState((prev) => ({
      ...prev,
      preset: 'custom',
      subjectColors: { ...prev.subjectColors, [subjectId]: value },
    }))
  }, [])

  const setPreset = useCallback((name) => {
    const preset = presets[name]
    if (!preset) return
    setThemeState((prev) => ({
      ...prev,
      preset: name,
      colors: { ...preset.colors },
      subjectColors: { ...preset.subjectColors },
    }))
  }, [])

  const setTransition = useCallback((name) => {
    setThemeState((prev) => ({ ...prev, transition: name }))
  }, [])

  const resetTheme = useCallback(() => {
    setThemeState(makeDefaultTheme())
  }, [])

  const getSubjectColor = useCallback(
    (subjectId) => theme.subjectColors[subjectId] || presets.default.subjectColors[subjectId] || '#64748b',
    [theme.subjectColors]
  )

  const saveTheme = useCallback((name) => {
    const trimmed = name.trim()
    if (!trimmed) return
    const snapshot = {
      name: trimmed,
      theme: sanitizeTheme(theme),
    }
    setSavedThemes((prev) => {
      const next = prev.some((item) => item.name === trimmed)
        ? prev.map((item) => (item.name === trimmed ? snapshot : item))
        : [...prev, snapshot]
      try {
        localStorage.setItem(SAVED_THEMES_KEY, JSON.stringify(next))
      } catch {
        // Saved themes are optional; ignore storage failures.
      }
      return next
    })
  }, [theme])

  const deleteSavedTheme = useCallback((name) => {
    setSavedThemes((prev) => {
      const next = prev.filter((item) => item.name !== name)
      try {
        localStorage.setItem(SAVED_THEMES_KEY, JSON.stringify(next))
      } catch {
        // Saved themes are optional; ignore storage failures.
      }
      return next
    })
  }, [])

  const applySavedTheme = useCallback((name) => {
    const saved = savedThemes.find((item) => item.name === name)
    if (!saved) return
    setThemeState({ ...sanitizeTheme(saved.theme), preset: name })
  }, [savedThemes])

  const value = useMemo(() => ({
    theme,
    colors: { ...theme.colors },
    accentRgb: rgbString(theme.colors.accent),
    accentCyanRgb: rgbString(theme.colors.accentCyan),
    getSubjectColor,
    setThemeColor,
    setSubjectColor,
    setPreset,
    setTransition,
    resetTheme,
    savedThemes,
    saveTheme,
    deleteSavedTheme,
    applySavedTheme,
  }), [
    theme,
    getSubjectColor,
    setThemeColor,
    setSubjectColor,
    setPreset,
    setTransition,
    resetTheme,
    savedThemes,
    saveTheme,
    deleteSavedTheme,
    applySavedTheme,
  ])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
