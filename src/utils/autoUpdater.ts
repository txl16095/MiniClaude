// Stub file - Auto-update functionality has been removed

export type AutoUpdaterResult = {
  hasUpdate: boolean
  latestVersion: string | null
  currentVersion: string
  isInstalling: boolean
  installError: string | null
}

export type InstallStatus = 'idle' | 'installing' | 'success' | 'error'

export type NpmDistTags = {
  latest: string
  stable?: string
  [key: string]: string | undefined
}

export async function getLatestVersion(): Promise<string | null> {
  return null
}

export async function getLatestVersionFromGcs(): Promise<string | null> {
  return null
}

export function getMaxVersion(current: string, latest: string | null): string {
  return current
}

export function getMaxVersionMessage(current: string, latest: string | null): string | null {
  return null
}

export function shouldSkipVersion(version: string): boolean {
  return false
}

export async function installGlobalPackage(packageName: string): Promise<InstallStatus> {
  return 'error'
}

export async function getNpmDistTags(): Promise<NpmDistTags> {
  return { latest: '', stable: '' }
}

export async function getGcsDistTags(): Promise<NpmDistTags> {
  return { latest: '', stable: '' }
}

export function assertMinVersion(minVersion: string): void {
  // No-op
}

export function checkGlobalInstallPermissions(): { hasPermissions: boolean; reason?: string } {
  return { hasPermissions: false, reason: 'Auto-update has been removed' }
}
