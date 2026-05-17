let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioCtx
}

function playTone({ type = 'sine', start = 520, end = 700, gainValue = 0.12, duration = 0.12, delay = 0 }) {
  const ctx = getAudioContext()
  const now = ctx.currentTime + delay
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.type = type
  osc.frequency.setValueAtTime(start, now)
  osc.frequency.exponentialRampToValueAtTime(end, now + duration)
  gain.gain.setValueAtTime(gainValue, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration)
  osc.start(now)
  osc.stop(now + duration)
}

export function playClick() {
  try {
    playTone({ start: 720, end: 980, gainValue: 0.08, duration: 0.07 })
  } catch {
    return false
  }
  return true
}

export function playCorrect() {
  try {
    playTone({ start: 523, end: 659, gainValue: 0.1, duration: 0.14 })
    playTone({ start: 659, end: 784, gainValue: 0.1, duration: 0.16, delay: 0.1 })
  } catch {
    return false
  }
  return true
}

export function playWrong() {
  try {
    playTone({ type: 'sawtooth', start: 330, end: 190, gainValue: 0.08, duration: 0.14 })
    playTone({ type: 'sawtooth', start: 230, end: 140, gainValue: 0.08, duration: 0.17, delay: 0.1 })
  } catch {
    return false
  }
  return true
}
