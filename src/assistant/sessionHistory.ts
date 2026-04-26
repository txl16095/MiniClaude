// Stub file — session history removed (Anthropic cloud-only feature)

import type { SDKMessage } from '../entrypoints/agentSdkTypes.js'

export const HISTORY_PAGE_SIZE = 100

export type HistoryPage = {
  events: SDKMessage[]
  firstId: string | null
  hasMore: boolean
}

export type HistoryAuthCtx = {
  accessToken: string
  orgUUID: string
  sessionId: string | null
  baseUrl: string
}

export async function createHistoryAuthCtx(): Promise<HistoryAuthCtx> {
  return { accessToken: '', orgUUID: '', sessionId: null, baseUrl: '' }
}

export async function fetchLatestEvents(): Promise<HistoryPage> {
  return { events: [], firstId: null, hasMore: false }
}

export async function fetchOlderEvents(): Promise<HistoryPage> {
  return { events: [], firstId: null, hasMore: false }
}
