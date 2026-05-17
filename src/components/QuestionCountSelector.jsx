import { playClick } from '../utils/sounds.js'

const counts = [10, 15, 20, 25]

export default function QuestionCountSelector({ value, onChange, maxAvailable = 25 }) {
  return (
    <div className="question-count" aria-label="Question count">
      <span>Questions</span>
      {counts.map((count) => {
        const isActive = value === count
        const isDisabled = count > maxAvailable
        return (
          <button
            key={count}
            type="button"
            className="segmented-button"
            data-active={isActive}
            disabled={isDisabled}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              if (isDisabled) return
              onChange(count)
              playClick()
            }}
          >
            {count}
          </button>
        )
      })}
    </div>
  )
}
