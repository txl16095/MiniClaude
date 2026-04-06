// Stub file - Teleport functionality has been removed

import type { Message } from '../types/message.js'

export type TeleportResult = {
  messages: Message[]
  branchName: string
}

export type TeleportProgressStep = 'validating' | 'fetching_logs' | 'fetching_branch' | 'checking_out' | 'done'
export type TeleportProgressCallback = (step: TeleportProgressStep) => void
export type PollRemoteSessionResponse = any
export type TeleportRemoteResponse = any

export async function teleportToRemote(...args: any[]): Promise<any> {
  throw new Error('Teleport functionality has been removed')
}

export async function teleportToRemoteWithErrorHandling(...args: any[]): Promise<any> {
  throw new Error('Teleport functionality has been removed')
}

export async function teleportResumeCodeSession(...args: any[]): Promise<any> {
  throw new Error('Teleport functionality has been removed')
}

export async function checkOutTeleportedSessionBranch(...args: any[]): Promise<void> {
  throw new Error('Teleport functionality has been removed')
}

export function processMessagesForTeleportResume(messages: Message[]): Message[] {
  return messages
}

export async function validateGitState(): Promise<void> {
  // No-op
}

export async function validateSessionRepository(...args: any[]): Promise<void> {
  // No-op
}

export async function archiveRemoteSession(...args: any[]): Promise<void> {
  // No-op
}

export async function pollRemoteSessionEvents(...args: any[]): Promise<PollRemoteSessionResponse> {
  return {} as PollRemoteSessionResponse
}
