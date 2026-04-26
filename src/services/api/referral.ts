// Stub file — referral program removed (Anthropic cloud-only feature)

export async function fetchReferralRedemptions(): Promise<null> {
  return null
}

export function formatCreditAmount(): string | null {
  return null
}

export function getCachedReferrerReward(): null {
  return null
}

export function getCachedRemainingPasses(): number {
  return 0
}

export async function getCachedOrFetchPassesEligibility(): Promise<{ eligible: boolean; hasCache: boolean }> {
  return { eligible: false, hasCache: false }
}

export function checkCachedPassesEligibility(): { eligible: boolean; hasCache: boolean } {
  return { eligible: false, hasCache: false }
}

export async function prefetchPassesEligibility(): Promise<void> {}
