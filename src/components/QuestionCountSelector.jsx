import { playClick } from '../utils/sounds.js'

const counts = [10, 15, 20, 25]

export default function QuestionCountSelector({ value, onChange, maxAvailable = 25 }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs mr-1" style={{ color: '#9aa0a6' }}>Questions:</span>
      {counts.map((count) => {
        const isActive = value === count
        const isDisabled = count > maxAvailable
        return (
          <button
            key={count}
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if (!isDisabled) {
                onChange(count)
                playClick()
              }
            }}
            disabled={isDisabled}
            className="px-3 py-1 rounded-full text-xs font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              backgroundColor: isActive ? 'var(--color-accent)' : 'transparent',
              color: isActive ? '#1f1f1f' : '#9aa0a6',
              border: isActive ? '1px solid #4f93e6' : '1px solid #3c3c3c',
            }}
            onMouseEnter={(e) => {
              if (!isActive && !isDisabled) e.currentTarget.style.backgroundColor = '#353535'
            }}
            onMouseLeave={(e) => {
              if (!isActive && !isDisabled) e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {count}
          </button>
        )
      })}
    </div>
  )
}
