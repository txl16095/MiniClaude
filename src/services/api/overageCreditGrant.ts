// Stub file — overage credit grant removed (Anthropic cloud-only feature)

export type OverageCreditGrantInfo = {
  available: boolean
  eligible: boolean
  granted: boolean
  amount_minor_units: number | null
  currency: string | null
}

const emptyGrant: OverageCreditGrantInfo = {
  available: false,
  eligible: false,
  granted: false,
  amount_minor_units: null,
  currency: null,
}

export function getCachedOverageCreditGrant(): OverageCreditGrantInfo {
  return emptyGrant
}

export function invalidateOverageCreditGrantCache(): void {}

export async function refreshOverageCreditGrantCache(): Promise<void> {}

export function formatGrantAmount(): string | null {
  return null
}

export type { CachedGrantEntry as OverageCreditGrantCacheEntry }
