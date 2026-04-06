import { getIsNonInteractiveSession } from '../../bootstrap/state.js'
import type { Command } from '../../commands.js'

const command: Command = {
  name: 'chrome',
  description: 'Chrome 中的 Claude（测试版）设置',
  isEnabled: () => !getIsNonInteractiveSession(),
  type: 'local-jsx',
  load: () => import('./chrome.js'),
}

export default command
