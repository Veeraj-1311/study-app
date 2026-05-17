import { useEffect, useState } from 'react'

const STORAGE_KEY = 'learnflow-streak'
const TICK_INTERVAL = 30_000
const GOAL_SECONDS = 30 * 60

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    return false
  }
  return true
}

function calcStreak(data) {
  const today = new Date()
  let streak = 0
  const cursor = new Date(today)

  if ((data[todayKey()] || 0) >= GOAL_SECONDS) {
    streak = 1
    cursor.setDate(cursor.getDate() - 1)
  }

  while (true) {
    const key = cursor.toISOString().slice(0, 10)
    if ((data[key] || 0) < GOAL_SECONDS) break
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }

  return streak
}

export default function useStreak() {
  const [data, setData] = useState(loadData)
  const key = todayKey()
  const todaySeconds = data[key] || 0
  const progress = Math.min(todaySeconds / GOAL_SECONDS, 1)

  useEffect(() => {
    const tick = () => {
      if (document.hidden) return
      setData((prev) => {
        const today = todayKey()
        const next = { ...prev, [today]: (prev[today] || 0) + TICK_INTERVAL / 1000 }
        saveData(next)
        return next
      })
    }

    const id = setInterval(tick, TICK_INTERVAL)
    return () => clearInterval(id)
  }, [])

  return {
    streak: calcStreak(data),
    todaySeconds,
    goalReached: todaySeconds >= GOAL_SECONDS,
    progress,
    todayMinutes: Math.floor(todaySeconds / 60),
  }
}
