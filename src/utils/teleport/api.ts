// Stub file - Teleport functionality has been removed

export type RemoteMessageContent = any
export type CodeSession = any
export type SessionResource = any
export type GitRepositoryOutcome = any
export type GitSource = any
export type EnvironmentKind = 'local' | 'remote'

export function getOAuthHeaders(): Record<string, string> {
  return {}
}

export function prepareApiRequest(url: string, options?: any): any {
  return { url, options }
}

export async function fetchSession(sessionId: string): Promise<CodeSession | null> {
  return null
}

export async function updateSessionTitle(sessionId: string, title: string): Promise<void> {
  // No-op
}

export function getBranchFromSession(session: CodeSession): string | null {
  return null
}

export function isTransientNetworkError(error: any): boolean {
  return false
}

export async function fetchCodeSessionsFromSessionsAPI(): Promise<CodeSession[]> {
  return []
}
