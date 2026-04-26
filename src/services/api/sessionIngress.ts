// Stub file — session ingress removed (Anthropic cloud-only feature)

export async function appendSessionLog(): Promise<boolean> {
  return true
}

export async function getSessionLogs(): Promise<unknown[]> {
  return []
}

export async function getSessionLogsViaOAuth(): Promise<unknown[]> {
  return []
}

export async function getTeleportEvents(): Promise<unknown[]> {
  return []
}

export function clearSession(_sessionId: string): void {}

export function clearAllSessions(): void {}
