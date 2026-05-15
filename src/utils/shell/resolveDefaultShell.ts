import { getInitialSettings } from '../settings/settings.js'
import { getPlatform } from '../platform.js'
import { isPowerShellToolEnabled } from './shellToolUtils.js'

/**
 * Resolve the default shell for input-box `!` commands.
 *
 * Resolution order (docs/design/ps-shell-selection.md §4.2):
 *   settings.defaultShell → (Windows + PowerShell tool enabled) → 'bash'
 *
 * On Windows, when the PowerShell tool is enabled (default for ant users),
 * prefers PowerShell to provide a native Windows shell experience. The
 * setting always takes precedence so users can still opt into bash.
 */
export function resolveDefaultShell(): 'bash' | 'powershell' {
  const setting = getInitialSettings().defaultShell
  if (setting) return setting
  // On Windows, prefer PowerShell when the tool is enabled by default
  if (getPlatform() === 'windows' && isPowerShellToolEnabled()) return 'powershell'
  return 'bash'
}
