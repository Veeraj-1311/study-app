import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'learnflow-streak'
const TICK_INTERVAL = 30_000 // add 30s every 30s
const GOAL_SECONDS = 30 * 60 // 30 minutes

function todayKey() {
  return new Date().toISOString().slice(0, 10) // YYYY-MM-DD
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
  } catch {}
}

function calcStreak(data) {
  const today = new Date()
  let streak = 0
  const d = new Date(today)

  // Check today first — if today has 30 min, count it
  const todaySeconds = data[todayKey()] || 0
  if (todaySeconds >= GOAL_SECONDS) {
    streak = 1
    d.setDate(d.getDate() - 1)
  }

  // Walk backwards through previous days
  while (true) {
    const key = d.toISOString().slice(0, 10)
    if ((data[key] || 0) >= GOAL_SECONDS) {
      streak++
      d.setDate(d.getDate() - 1)
    } else {
      break
    }
  }

  return streak
}

export default function useStreak() {
  const [data, setData] = useState(loadData)
  const key = todayKey()
  const todaySeconds = data[key] || 0
  const streak = calcStreak(data)
  const goalReached = todaySeconds >= GOAL_SECONDS
  const progress = Math.min(todaySeconds / GOAL_SECONDS, 1)

  // Tick every 30s to accumulate time
  useEffect(() => {
    const tick = () => {
      setData((prev) => {
        const k = todayKey()
        const next = { ...prev, [k]: (prev[k] || 0) + TICK_INTERVAL / 1000 }
        saveData(next)
        return next
      })
    }

    const id = setInterval(tick, TICK_INTERVAL)
    return () => clearInterval(id)
  }, [])

  // Also count visibility — pause when tab hidden
  useEffect(() => {
    let hidden = false
    let interval = null

    const onVisibility = () => {
      if (document.hidden) {
        hidden = true
        if (interval) { clearInterval(interval); interval = null }
      } else {
        hidden = false
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  return {
    streak,
    todaySeconds,
    goalReached,
    progress,
    todayMinutes: Math.floor(todaySeconds / 60),
  }
}
