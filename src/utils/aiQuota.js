const AI_USAGE_KEY = 'learnflow-ai-usage'
const DAILY_REQUEST_LIMIT = 30
const DAILY_IMAGE_LIMIT = 10

const todayKey = () => new Date().toISOString().slice(0, 10)

function loadUsage() {
  try {
    const parsed = JSON.parse(localStorage.getItem(AI_USAGE_KEY) || '{}')
    if (parsed.day === todayKey()) return parsed
  } catch {
    // Reset corrupt usage data below.
  }
  return { day: todayKey(), requests: 0, imageRequests: 0 }
}

function saveUsage(usage) {
  try {
    localStorage.setItem(AI_USAGE_KEY, JSON.stringify(usage))
  } catch {
    return false
  }
  return true
}

export function getAiQuotaStatus() {
  const usage = loadUsage()
  return {
    ...usage,
    requestLimit: DAILY_REQUEST_LIMIT,
    imageLimit: DAILY_IMAGE_LIMIT,
    requestsLeft: Math.max(0, DAILY_REQUEST_LIMIT - usage.requests),
    imageRequestsLeft: Math.max(0, DAILY_IMAGE_LIMIT - usage.imageRequests),
  }
}

export function canUseAi(hasImages = false) {
  const status = getAiQuotaStatus()
  if (status.requestsLeft <= 0) {
    return { ok: false, reason: `Daily AI limit reached (${status.requestLimit}). Try again tomorrow.` }
  }
  if (hasImages && status.imageRequestsLeft <= 0) {
    return { ok: false, reason: `Daily image question limit reached (${status.imageLimit}). Try again tomorrow.` }
  }
  return { ok: true }
}

export function recordAiUse(hasImages = false) {
  const usage = loadUsage()
  const next = {
    ...usage,
    requests: usage.requests + 1,
    imageRequests: usage.imageRequests + (hasImages ? 1 : 0),
  }
  saveUsage(next)
  return getAiQuotaStatus()
}
