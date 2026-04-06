// Stub file - Swarm functionality has been removed

export function getTeammateLayoutManager(...args: any[]): any {
  return null
}

export function createTeammateLayoutManager(...args: any[]): any {
  return null
}

export function assignTeammateColor(...args: any[]): string {
  return '#ffffff'
}

export async function createTeammatePaneInSwarmView(...args: any[]): Promise<{ paneId: string; isFirstTeammate: boolean }> {
  return { paneId: '', isFirstTeammate: false }
}

export async function enablePaneBorderStatus(...args: any[]): Promise<void> {
  // no-op
}

export async function isInsideTmux(...args: any[]): Promise<boolean> {
  return false
}

export async function sendCommandToPane(...args: any[]): Promise<void> {
  // no-op
}
