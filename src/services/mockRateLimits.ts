// Stub file — mock rate limits removed (Anthropic cloud-only feature)

export type MockHeaderKey = string
export type MockScenario = string

export function setMockHeader(_key: MockHeaderKey): void {}
export function addExceededLimit(): void {}
export function setMockEarlyWarning(): void {}
export function clearMockEarlyWarning(): void {}
export function setMockRateLimitScenario(_scenario: MockScenario): void {}
export function getMockHeaderless429Message(): string | null { return null }
export function getMockHeaders(): null { return null }
export function getMockStatus(): string { return 'disabled' }
export function clearMockHeaders(): void {}
export function applyMockHeaders<T>(headers: T): T { return headers }
export function shouldProcessMockLimits(): boolean { return false }
export function getCurrentMockScenario(): MockScenario | null { return null }
export function getScenarioDescription(_scenario: MockScenario): string { return '' }
export function setMockSubscriptionType(): void {}
export function getMockSubscriptionType(): null { return null }
export function shouldUseMockSubscription(): boolean { return false }
export function setMockBillingAccess(): void {}
export function isMockFastModeRateLimitScenario(): boolean { return false }
export function checkMockFastModeRateLimit(): boolean { return false }
