// OAuth stub - functionality removed
// This file provides empty implementations to maintain compatibility

export function getOrganizationUUID(): Promise<string | null> {
  return Promise.resolve(null)
}

export function isOAuthTokenExpired(): boolean {
  return true
}

export function refreshOAuthToken(): Promise<boolean> {
  return Promise.resolve(false)
}

export function shouldUseClaudeAIAuth(): boolean {
  return false
}

export function populateOAuthAccountInfoIfNeeded(): Promise<void> {
  return Promise.resolve()
}


export function createAndStoreApiKey(): Promise<void> {
  return Promise.resolve()
}

export function fetchAndStoreUserRoles(): Promise<void> {
  return Promise.resolve()
}

export function storeOAuthAccountInfo(): void {
  // No-op
}
