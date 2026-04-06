import type { Command } from '../../commands.js'
import { isKeybindingCustomizationEnabled } from '../../keybindings/loadUserBindings.js'

const keybindings = {
  name: 'keybindings',
  description: '打开或创建你的快捷键配置文件',
  isEnabled: () => isKeybindingCustomizationEnabled(),
  supportsNonInteractive: false,
  type: 'local',
  load: () => import('./keybindings.js'),
} satisfies Command

export default keybindings
