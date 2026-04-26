// Stub file — Claude AI limits removed (Anthropic cloud-only feature)

type QuotaStatus = 'allowed' | 'allowed_warning' | 'rejected'

export function getRateLimitErrorMessage(): string | null {
  return null
}

export function getRateLimitWarning(): string | null {
  return null
}

export function getUsingOverageText(): string {
  return ''
}

export type { RateLimitType } from './rateLimitMessages.js'

export type OverageDisabledReason =
  | 'user_type'
  | 'account_type'
  | 'tier'
  | 'org_billing_disabled'
  | 'unknown'

export type ClaudeAILimits = {
  status: QuotaStatus
  unifiedRateLimitFallbackAvailable: boolean
  resetsAt?: number
  rateLimitType?: string
  utilization?: number
  overageStatus?: QuotaStatus
  overageResetsAt?: number
  overageDisabledReason?: OverageDisabledReason
  isUsingOverage?: boolean
  surpassedThreshold?: number
}

export let currentLimits: ClaudeAILimits = {
  status: 'allowed',
  unifiedRateLimitFallbackAvailable: false,
}

export function getRawUtilization(): null {
  return null
}

type StatusChangeListener = (limits: ClaudeAILimits) => void

export const statusListeners: Set<StatusChangeListener> = new Set()

export function emitStatusChange(): void {}

export async function checkQuotaStatus(): Promise<void> {}

export function extractQuotaStatusFromHeaders(): void {}

export function extractQuotaStatusFromError(): void {}

export function isRateLimitErrorMessage(_text: string): boolean {
  return false
}

export const RATE_LIMIT_ERROR_PREFIXES: readonly string[] = []
