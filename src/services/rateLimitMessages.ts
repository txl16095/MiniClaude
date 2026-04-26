// Stub file — rate limit messages removed (Anthropic cloud-only feature)

import type { ClaudeAILimits } from './claudeAiLimits.js'

export const RATE_LIMIT_ERROR_PREFIXES: readonly string[] = []

export function isRateLimitErrorMessage(_text: string): boolean {
  return false
}

export type RateLimitMessage = {
  level: 'error' | 'warning'
  message: string
}

export function getRateLimitMessage(): RateLimitMessage | null {
  return null
}

export function getRateLimitErrorMessage(): string | null {
  return null
}

export function getRateLimitWarning(): string | null {
  return null
}

export function getUsingOverageText(_limits: ClaudeAILimits): string {
  return ''
}
