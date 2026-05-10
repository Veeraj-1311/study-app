import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, RotateCcw, Upload, Trash2, Palette, Image, Sparkles, Save } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext.jsx'
import { compressImage } from '../utils/themeUtils.js'
import presets from '../data/themePresets.js'
import { playClick } from '../utils/sounds.js'

const subjectLabels = {
  math: 'Mathematics',
  science: 'Science',
  social: 'Social Science',
  hindi: 'Hindi',
  telugu: 'Telugu',
  ai: 'AI',
}

const bgTargets = {
  __main__: 'Main Page',
  ...subjectLabels,
}

const colorFields = [
  { key: 'accent', label: 'Primary Accent' },
  { key: 'accentCyan', label: 'Secondary Accent' },
  { key: 'bgBody', label: 'Background' },
  { key: 'bgCard', label: 'Card Background' },
  { key: 'textPrimary', label: 'Text Primary' },
]

function ColorPicker({ label, value, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
        />
        <div
          className="w-8 h-8 rounded-lg border border-white/20 transition-all duration-200 group-hover:scale-110 group-hover:border-white/40"
          style={{ backgroundColor: value }}
        />
      </div>
      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
        {label}
      </span>
    </label>
  )
}

export default function CustomizePanel({ onClose }) {
  const {
    theme,
    colors,
    accentRgb,
    setThemeColor,
    setSubjectColor,
    setPreset,
    setCustomBackground,
    removeBackground,
    setTransition,
    resetTheme,
    getSubjectColor,
    savedThemes,
    saveTheme,
    deleteSavedTheme,
    applySavedTheme,
  } = useTheme()

  const [selectedSubjectBg, setSelectedSubjectBg] = useState('')
  const [showSaveInput, setShowSaveInput] = useState(false)
  const [saveNameValue, setSaveNameValue] = useState('')
  const subjectFileInputRef = useRef(null)

  const handleSaveTheme = () => {
    const name = saveNameValue.trim()
    if (!name) return
    saveTheme(name)
    setSaveNameValue('')
    setShowSaveInput(false)
    playClick()
  }

  const handleSubjectUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file || !selectedSubjectBg) return
    const compressed = await compressImage(file)
    if (selectedSubjectBg === '__main__') {
      setCustomBackground(compressed)
    } else {
      setCustomBackground(compressed, selectedSubjectBg)
    }
    playClick()
  }

  const handleReset = () => {
    resetTheme()
    playClick()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-t-3xl"
        style={{
          backgroundColor: colors.bgCard,
          border: `1px solid rgba(${accentRgb}, 0.2)`,
          borderBottom: 'none',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4" style={{ backgroundColor: colors.bgCard }}>
          <div className="flex items-center gap-2">
            <Palette size={22} style={{ color: colors.accent }} />
            <h2 className="text-xl font-heading font-bold text-text-primary">Customize</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-8 space-y-8">
          {/* Presets */}
          <section>
            <h3 className="text-sm font-heading font-semibold text-text-secondary mb-3 flex items-center gap-2">
              <Sparkles size={14} />
              Presets
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(presets).map(([key, preset]) => (
                <button
                  key={key}
                  onClick={() => { setPreset(key); playClick() }}
                  className="p-3 rounded-xl text-sm font-heading font-medium text-text-primary transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: theme.preset === key ? `rgba(${accentRgb}, 0.15)` : 'rgba(255,255,255,0.05)',
                    border: theme.preset === key ? `1px solid rgba(${accentRgb}, 0.4)` : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex gap-1.5 mb-2 justify-center">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.colors.accent }} />
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.colors.accentCyan }} />
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.colors.bgBody }} />
                  </div>
                  {preset.name}
                </button>
              ))}
            </div>

            {/* Saved Themes */}
            {savedThemes.length > 0 && (
              <>
                <h4 className="text-xs font-heading font-semibold text-text-muted mt-5 mb-3">Saved</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {savedThemes.map((saved) => (
                    <div
                      key={saved.name}
                      className="relative p-3 rounded-xl text-sm font-heading font-medium text-text-primary transition-all duration-200 cursor-pointer"
                      style={{
                        backgroundColor: theme.preset === saved.name ? `rgba(${accentRgb}, 0.15)` : 'rgba(255,255,255,0.05)',
                        border: theme.preset === saved.name ? `1px solid rgba(${accentRgb}, 0.4)` : '1px solid rgba(255,255,255,0.08)',
                      }}
                      onClick={() => { applySavedTheme(saved.name); playClick() }}
                    >
                      <button
                        onClick={(e) => { e.stopPropagation(); deleteSavedTheme(saved.name); playClick() }}
                        className="absolute top-1.5 right-1.5 w-5 h-5 flex items-center justify-center rounded-md text-text-muted hover:text-red-400 transition-colors cursor-pointer"
                        style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                      >
                        <X size={12} />
                      </button>
                      <div className="flex gap-1.5 mb-2 justify-center">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: saved.theme.colors.accent }} />
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: saved.theme.colors.accentCyan }} />
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: saved.theme.colors.bgBody }} />
                      </div>
                      {saved.name}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Save Theme */}
            {showSaveInput ? (
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  value={saveNameValue}
                  onChange={(e) => setSaveNameValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveTheme()}
                  placeholder="Theme name..."
                  autoFocus
                  className="flex-1 px-3 py-2 rounded-lg text-sm bg-white/5 text-text-primary outline-none placeholder-text-muted"
                  style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                />
                <button
                  onClick={handleSaveTheme}
                  disabled={!saveNameValue.trim()}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-text-primary cursor-pointer transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: `rgba(${accentRgb}, 0.15)`,
                    border: `1px solid rgba(${accentRgb}, 0.3)`,
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => { setShowSaveInput(false); setSaveNameValue('') }}
                  className="p-2 rounded-lg text-text-muted hover:text-text-primary cursor-pointer transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSaveInput(true)}
                className="flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-medium text-text-primary cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Save size={14} />
                Save Theme
              </button>
            )}
          </section>

          {/* Colors */}
          <section>
            <h3 className="text-sm font-heading font-semibold text-text-secondary mb-3 flex items-center gap-2">
              <Palette size={14} />
              Colors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {colorFields.map(({ key, label }) => (
                <ColorPicker
                  key={key}
                  label={label}
                  value={colors[key]}
                  onChange={(v) => setThemeColor(key, v)}
                />
              ))}
            </div>

            {/* Subject Colors */}
            <h4 className="text-xs font-heading font-semibold text-text-muted mt-5 mb-3">Subject Colors</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(subjectLabels).map(([id, label]) => (
                <ColorPicker
                  key={id}
                  label={label}
                  value={getSubjectColor(id)}
                  onChange={(v) => setSubjectColor(id, v)}
                />
              ))}
            </div>
          </section>

          {/* Background Images */}
          <section>
            <h3 className="text-sm font-heading font-semibold text-text-secondary mb-3 flex items-center gap-2">
              <Image size={14} />
              Background Images
            </h3>

            <div className="flex items-center gap-3 flex-wrap">
              <select
                value={selectedSubjectBg}
                onChange={(e) => setSelectedSubjectBg(e.target.value)}
                className="px-3 py-2 rounded-lg text-sm bg-white/5 text-text-primary outline-none cursor-pointer"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <option value="">Select page...</option>
                {Object.entries(bgTargets).map(([id, label]) => (
                  <option key={id} value={id}>{label}</option>
                ))}
              </select>
              <input
                ref={subjectFileInputRef}
                type="file"
                accept="image/*"
                onChange={handleSubjectUpload}
                className="hidden"
              />
              <button
                onClick={() => selectedSubjectBg && subjectFileInputRef.current?.click()}
                disabled={!selectedSubjectBg}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-text-primary cursor-pointer transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Upload size={14} />
                Upload Background
              </button>
              {selectedSubjectBg && (
                (selectedSubjectBg === '__main__' ? theme.backgroundImage : theme.subjectBackgrounds?.[selectedSubjectBg])
              ) && (
                <>
                  <div
                    className="w-10 h-10 rounded-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${selectedSubjectBg === '__main__' ? theme.backgroundImage : theme.subjectBackgrounds[selectedSubjectBg]})`,
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  />
                  <button
                    onClick={() => {
                      if (selectedSubjectBg === '__main__') removeBackground()
                      else removeBackground(selectedSubjectBg)
                      playClick()
                    }}
                    className="p-2 rounded-lg text-red-400 hover:text-red-300 cursor-pointer transition-colors"
                    style={{ backgroundColor: 'rgba(255,45,45,0.1)' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </>
              )}
            </div>
          </section>

          {/* Transitions */}
          <section>
            <h3 className="text-sm font-heading font-semibold text-text-secondary mb-3">Transitions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { setTransition('frame-split'); playClick() }}
                className="p-4 rounded-xl text-sm font-heading font-medium text-text-primary cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: theme.transition === 'frame-split' ? `rgba(${accentRgb}, 0.15)` : 'rgba(255,255,255,0.05)',
                  border: theme.transition === 'frame-split' ? `1px solid rgba(${accentRgb}, 0.4)` : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="flex gap-1 mb-2 justify-center">
                  <div className="w-6 h-8 rounded-sm" style={{ backgroundColor: colors.bgBody, border: '1px solid rgba(255,255,255,0.15)' }} />
                  <div className="w-px h-8" style={{ backgroundColor: colors.accent }} />
                  <div className="w-6 h-8 rounded-sm" style={{ backgroundColor: colors.bgBody, border: '1px solid rgba(255,255,255,0.15)' }} />
                </div>
                Frame Split
              </button>
            </div>
          </section>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-heading font-semibold text-red-400 cursor-pointer transition-all duration-200"
            style={{
              backgroundColor: 'rgba(255,45,45,0.08)',
              border: '1px solid rgba(255,45,45,0.2)',
            }}
          >
            <RotateCcw size={16} />
            Reset to Default
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
