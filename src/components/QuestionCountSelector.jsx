import { useTheme } from '../contexts/ThemeContext.jsx'
import { playClick } from '../utils/sounds.js'

const counts = [10, 15, 20, 25]

export default function QuestionCountSelector({ value, onChange, maxAvailable = 25 }) {
  const { colors, accentRgb } = useTheme()

  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {counts.map((count) => {
        const isActive = value === count
        const isDisabled = count > maxAvailable

        return (
          <button
            key={count}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if (!isDisabled) {
                onChange(count)
                playClick()
              }
            }}
            disabled={isDisabled}
            className="px-4 py-1.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              backgroundColor: isActive ? colors.accent : 'rgba(255,255,255,0.05)',
              color: isActive ? '#fff' : 'var(--color-text-secondary)',
              border: isActive ? `1px solid ${colors.accent}` : '1px solid rgba(255,255,255,0.1)',
              boxShadow: isActive ? `0 0 12px rgba(${accentRgb}, 0.3)` : 'none',
            }}
          >
            {count}
          </button>
        )
      })}
    </div>
  )
}
