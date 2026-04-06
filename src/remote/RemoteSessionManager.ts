// Stub file - Remote control functionality has been removed

export interface RemoteSessionConfig {
  sessionId: string
  [key: string]: any
}

export interface RemotePermissionResponse {
  approved: boolean
  [key: string]: any
}

export class RemoteSessionManager {
  constructor() {
    throw new Error('Remote control functionality has been removed')
  }
}

export function createRemoteSessionConfig(...args: any[]): RemoteSessionConfig | null {
  return null
}
