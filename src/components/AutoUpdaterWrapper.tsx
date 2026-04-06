// Stub file - Auto-update functionality has been removed

import * as React from 'react'

export type AutoUpdaterResult = {
  hasUpdate: boolean
  latestVersion: string | null
  currentVersion: string
  isInstalling: boolean
  installError: string | null
}

type Props = {
  isUpdating: boolean
  onUpdateResult?: (result: AutoUpdaterResult) => void
}

export function AutoUpdaterWrapper(_props: Props): React.ReactNode {
  // Auto-update functionality has been removed
  return null
}
