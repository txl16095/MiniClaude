// Stub file - Remote control functionality has been removed

export type RepoAccessMethod = 'github-app' | 'github-token' | 'none'

export async function checkHasRemoteEnvironment(): Promise<boolean> {
  return false
}

export async function checkRepoForRemoteAccess(
  owner: string,
  repo: string,
): Promise<{ hasAccess: boolean; method: RepoAccessMethod }> {
  return { hasAccess: false, method: 'none' }
}

export async function checkGithubAppInstalled(
  owner: string,
  repo: string,
): Promise<boolean> {
  return false
}

export async function checkIsInGitRepo(): Promise<boolean> {
  return false
}

export async function checkNeedsClaudeAiLogin(): Promise<boolean> {
  return false
}

export async function checkIsGitClean(): Promise<boolean> {
  return true
}
