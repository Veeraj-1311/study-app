import { playClick } from '../utils/sounds.js'

const counts = [10, 15, 20, 25]

export default function QuestionCountSelector({ value, onChange, maxAvailable = 25 }) {
  const visibleCounts = counts.filter((count) => count <= maxAvailable)
  if (visibleCounts.length === 0 && maxAvailable > 0) visibleCounts.push(maxAvailable)

  return (
    <div className="question-count" aria-label="Question count">
      <span>Questions</span>
      {visibleCounts.map((count) => {
        const isActive = value === count
        return (
          <button
            key={count}
            type="button"
            className="segmented-button"
            data-active={isActive}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
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
