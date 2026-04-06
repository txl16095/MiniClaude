import type { Command } from '../../commands.js'
import { env } from '../../utils/env.js'

// Terminals that natively support CSI u / Kitty keyboard protocol
const NATIVE_CSIU_TERMINALS: Record<string, string> = {
  ghostty: 'Ghostty',
  kitty: 'Kitty',
  'iTerm.app': 'iTerm2',
  WezTerm: 'WezTerm',
}

const terminalSetup = {
  type: 'local-jsx',
  name: 'terminal-setup',
  description:
    env.terminal === 'Apple_Terminal'
      ? '启用 Option+Enter 换行快捷键和视觉提示音'
      : '安装 Shift+Enter 换行快捷键',
  isHidden: env.terminal !== null && env.terminal in NATIVE_CSIU_TERMINALS,
  load: () => import('./terminalSetup.js'),
} satisfies Command

export default terminalSetup
