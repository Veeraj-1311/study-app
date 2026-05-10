export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return { r: 0, g: 0, b: 0 }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

export function rgbString(hex) {
  const { r, g, b } = hexToRgb(hex)
  return `${r}, ${g}, ${b}`
}

export function applyThemeToDOM(theme) {
  const root = document.documentElement
  const { colors, subjectColors } = theme

  root.style.setProperty('--color-accent', colors.accent)
  root.style.setProperty('--color-accent-cyan', colors.accentCyan)
  root.style.setProperty('--color-bg-body', colors.bgBody)
  root.style.setProperty('--color-bg-primary', colors.bgBody)
  root.style.setProperty('--color-bg-card', colors.bgCard)
  root.style.setProperty('--color-bg-card-hover', colors.bgCardHover)
  root.style.setProperty('--color-text-primary', colors.textPrimary)
  root.style.setProperty('--color-text-secondary', colors.textSecondary)
  root.style.setProperty('--color-text-muted', colors.textMuted)

  const accentRgb = hexToRgb(colors.accent)
  root.style.setProperty('--color-accent-r', accentRgb.r)
  root.style.setProperty('--color-accent-g', accentRgb.g)
  root.style.setProperty('--color-accent-b', accentRgb.b)

  const cyanRgb = hexToRgb(colors.accentCyan)
  root.style.setProperty('--color-accent-cyan-r', cyanRgb.r)
  root.style.setProperty('--color-accent-cyan-g', cyanRgb.g)
  root.style.setProperty('--color-accent-cyan-b', cyanRgb.b)

  root.style.setProperty('--color-border-subtle', '#3c3c3c')

  if (subjectColors) {
    root.style.setProperty('--color-math', subjectColors.math)
    root.style.setProperty('--color-science', subjectColors.science)
    root.style.setProperty('--color-social', subjectColors.social)
    root.style.setProperty('--color-hindi', subjectColors.hindi)
    root.style.setProperty('--color-telugu', subjectColors.telugu)
    root.style.setProperty('--color-ai', subjectColors.ai)
  }

  document.body.style.backgroundColor = colors.bgBody
  document.body.style.backgroundImage = 'none'
}

export function compressImage(file, maxKB = 500) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let { width, height } = img
        const maxDim = 1920
        if (width > maxDim || height > maxDim) {
          const ratio = Math.min(maxDim / width, maxDim / height)
          width = Math.round(width * ratio)
          height = Math.round(height * ratio)
        }
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
        let quality = 0.8
        let result = canvas.toDataURL('image/jpeg', quality)
        const targetBytes = maxKB * 1024
        while (result.length > targetBytes && quality > 0.1) {
          quality -= 0.1
          result = canvas.toDataURL('image/jpeg', quality)
        }
        resolve(result)
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}
