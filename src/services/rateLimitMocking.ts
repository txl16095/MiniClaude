// Stub file — rate limit mocking removed (Anthropic cloud-only feature)

export function processRateLimitHeaders<T>(headers: T): T {
  return headers
}

export function shouldProcessRateLimits(): boolean {
  return false
}

export function checkMockRateLimitError(): null {
  return null
}

export function isMockRateLimitError(): boolean {
  return false
}

export function shouldProcessMockLimits(): boolean {
  return false
}
