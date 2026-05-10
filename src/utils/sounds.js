let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioCtx
}

export function playClick() {
  try {
    const ctx = getAudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.type = 'sine'
    osc.frequency.setValueAtTime(800, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05)

    gain.gain.setValueAtTime(0.15, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)

    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.08)
  } catch {}
}

export function playCorrect() {
  try {
    const ctx = getAudioContext()
    const now = ctx.currentTime

    // First tone - ascending
    const osc1 = ctx.createOscillator()
    const gain1 = ctx.createGain()
    osc1.connect(gain1)
    gain1.connect(ctx.destination)
    osc1.type = 'sine'
    osc1.frequency.setValueAtTime(523, now) // C5
    gain1.gain.setValueAtTime(0.15, now)
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15)
    osc1.start(now)
    osc1.stop(now + 0.15)

    // Second tone - higher
    const osc2 = ctx.createOscillator()
    const gain2 = ctx.createGain()
    osc2.connect(gain2)
    gain2.connect(ctx.destination)
    osc2.type = 'sine'
    osc2.frequency.setValueAtTime(659, now + 0.1) // E5
    gain2.gain.setValueAtTime(0.001, now)
    gain2.gain.setValueAtTime(0.15, now + 0.1)
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3)
    osc2.start(now + 0.1)
    osc2.stop(now + 0.3)
  } catch {}
}

export function playWrong() {
  try {
    const ctx = getAudioContext()
    const now = ctx.currentTime

    // First tone - descending
    const osc1 = ctx.createOscillator()
    const gain1 = ctx.createGain()
    osc1.connect(gain1)
    gain1.connect(ctx.destination)
    osc1.type = 'sawtooth'
    osc1.frequency.setValueAtTime(350, now)
    osc1.frequency.exponentialRampToValueAtTime(200, now + 0.15)
    gain1.gain.setValueAtTime(0.1, now)
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15)
    osc1.start(now)
    osc1.stop(now + 0.15)

    // Second tone - lower
    const osc2 = ctx.createOscillator()
    const gain2 = ctx.createGain()
    osc2.connect(gain2)
    gain2.connect(ctx.destination)
    osc2.type = 'sawtooth'
    osc2.frequency.setValueAtTime(250, now + 0.12)
    osc2.frequency.exponentialRampToValueAtTime(150, now + 0.3)
    gain2.gain.setValueAtTime(0.001, now)
    gain2.gain.setValueAtTime(0.1, now + 0.12)
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3)
    osc2.start(now + 0.12)
    osc2.stop(now + 0.3)
  } catch {}
}
