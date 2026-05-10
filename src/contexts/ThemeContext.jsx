import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import presets from '../data/themePresets.js'
import { applyThemeToDOM, hexToRgb, rgbString } from '../utils/themeUtils.js'

const STORAGE_KEY = 'learnflow-theme'
const SAVED_THEMES_KEY = 'learnflow-saved-themes'

const defaultTheme = {
  preset: 'default',
  colors: { ...presets.default.colors },
  subjectColors: { ...presets.default.subjectColors },
  backgroundImage: null,
  subjectBackgrounds: {},
  transition: 'frame-split',
}

function loadTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return {
        ...defaultTheme,
        ...parsed,
        colors: { ...defaultTheme.colors, ...parsed.colors },
        subjectColors: { ...defaultTheme.subjectColors, ...parsed.subjectColors },
        subjectBackgrounds: { ...parsed.subjectBackgrounds },
      }
    }
  } catch {}
  return { ...defaultTheme }
}

function persistTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme))
  } catch {}
}

function loadSavedThemes() {
  try {
    const stored = localStorage.getItem(SAVED_THEMES_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return []
}

function persistSavedThemes(themes) {
  try {
    localStorage.setItem(SAVED_THEMES_KEY, JSON.stringify(themes))
  } catch {}
}

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(loadTheme)
  const [savedThemes, setSavedThemes] = useState(loadSavedThemes)

  // Apply theme to DOM on mount and whenever theme changes
  useEffect(() => {
    applyThemeToDOM(theme)
    persistTheme(theme)
  }, [theme])

  const setThemeColor = useCallback((key, value) => {
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

  const setCustomBackground = useCallback((base64, subjectId) => {
    setThemeState((prev) => {
      if (subjectId) {
        return {
          ...prev,
          preset: 'custom',
          subjectBackgrounds: { ...prev.subjectBackgrounds, [subjectId]: base64 },
        }
      }
      return { ...prev, preset: 'custom', backgroundImage: base64 }
    })
  }, [])

  const removeBackground = useCallback((subjectId) => {
    setThemeState((prev) => {
      if (subjectId) {
        const updated = { ...prev.subjectBackgrounds }
        delete updated[subjectId]
        return { ...prev, subjectBackgrounds: updated }
      }
      return { ...prev, backgroundImage: null }
    })
  }, [])

  const setTransition = useCallback((name) => {
    setThemeState((prev) => ({ ...prev, transition: name }))
  }, [])

  const saveTheme = useCallback((name) => {
    const trimmed = name.trim()
    if (!trimmed) return
    const snapshot = {
      name: trimmed,
      theme: {
        colors: { ...theme.colors },
        subjectColors: { ...theme.subjectColors },
        backgroundImage: theme.backgroundImage,
        subjectBackgrounds: { ...theme.subjectBackgrounds },
        transition: theme.transition,
      },
    }
    setSavedThemes((prev) => {
      const idx = prev.findIndex((t) => t.name === trimmed)
      const next = idx >= 0
        ? prev.map((t, i) => (i === idx ? snapshot : t))
        : [...prev, snapshot]
      persistSavedThemes(next)
      return next
    })
  }, [theme])

  const deleteSavedTheme = useCallback((name) => {
    setSavedThemes((prev) => {
      const next = prev.filter((t) => t.name !== name)
      persistSavedThemes(next)
      return next
    })
  }, [])

  const applySavedTheme = useCallback((name) => {
    const saved = savedThemes.find((t) => t.name === name)
    if (!saved) return
    setThemeState({
      preset: name,
      colors: { ...saved.theme.colors },
      subjectColors: { ...saved.theme.subjectColors },
      backgroundImage: saved.theme.backgroundImage,
      subjectBackgrounds: { ...saved.theme.subjectBackgrounds },
      transition: saved.theme.transition,
    })
  }, [savedThemes])

  const resetTheme = useCallback(() => {
    setThemeState({ ...defaultTheme })
  }, [])

  const getSubjectColor = useCallback(
    (subjectId) => {
      return theme.subjectColors[subjectId] || presets.default.subjectColors[subjectId] || '#6a6a70'
    },
    [theme.subjectColors]
  )

  const value = useMemo(() => {
    const { colors } = theme
    return {
      theme,
      colors: { ...colors },
      accentRgb: rgbString(colors.accent),
      accentCyanRgb: rgbString(colors.accentCyan),
      getSubjectColor,
      setThemeColor,
      setSubjectColor,
      setPreset,
      setCustomBackground,
      removeBackground,
      setTransition,
      resetTheme,
      savedThemes,
      saveTheme,
      deleteSavedTheme,
      applySavedTheme,
    }
  }, [theme, getSubjectColor, setThemeColor, setSubjectColor, setPreset, setCustomBackground, removeBackground, setTransition, resetTheme, savedThemes, saveTheme, deleteSavedTheme, applySavedTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

// Hook for applying subject-specific backgrounds
export function useSubjectBackground(subjectId) {
  const { theme } = useTheme()

  useEffect(() => {
    const subjectBg = theme.subjectBackgrounds?.[subjectId]
    const bg = subjectBg ? `url(${subjectBg})` : "url('/dragon.jpg')"
    const prev = document.body.style.backgroundImage
    document.body.style.backgroundImage = bg
    return () => {
      document.body.style.backgroundImage = prev
    }
  }, [subjectId, theme.subjectBackgrounds])
}
