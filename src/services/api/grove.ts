// Stub file — Grove settings removed (Anthropic cloud-only feature)

export type AccountSettings = Record<string, never>

export type GroveConfig = Record<string, never>

export function calculateShouldShowGrove(): boolean {
  return false
}

export function checkGroveForNonInteractive(): void {}

export function getGroveNoticeConfig(): { success: boolean; data: null } {
  return { success: false, data: null }
}

export function getGroveSettings(): null {
  return null
}

export function markGroveNoticeViewed(): void {}

export async function updateGroveSettings(): Promise<void> {}

export function isQualifiedForGrove(): boolean {
  return false
}
