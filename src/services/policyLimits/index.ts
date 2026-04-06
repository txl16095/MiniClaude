/**
 * Policy Limits Service - Stub Implementation
 * 
 * This is a stub implementation that always allows all policies.
 * The original cloud-based policy limits feature has been removed.
 */

// Test-only reset function
export function _resetPolicyLimitsForTesting(): void {
  // No-op
}

// Initialize loading promise (no-op)
export function initializePolicyLimitsLoadingPromise(): void {
  // No-op
}

// Check if user is eligible (always false)
export function isPolicyLimitsEligible(): boolean {
  return false
}

// Wait for loading (resolves immediately)
export async function waitForPolicyLimitsToLoad(): Promise<void> {
  // No-op
}

// Check if policy is allowed (always true - fail open)
export function isPolicyAllowed(_policy: string): boolean {
  return true
}

// Load policy limits (no-op)
export async function loadPolicyLimits(): Promise<void> {
  // No-op
}

// Refresh policy limits (no-op)
export async function refreshPolicyLimits(): Promise<void> {
  // No-op
}

// Clear cache (no-op)
export async function clearPolicyLimitsCache(): Promise<void> {
  // No-op
}

// Start background polling (no-op)
export function startBackgroundPolling(): void {
  // No-op
}

// Stop background polling (no-op)
export function stopBackgroundPolling(): void {
  // No-op
}
