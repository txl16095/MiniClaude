import type { Command } from '../../commands.js'

const files = {
  type: 'local',
  name: 'files',
  description: '列出当前上下文中的所有文件',
  isEnabled: () => process.env.USER_TYPE === 'ant',
  supportsNonInteractive: true,
  load: () => import('./files.js'),
} satisfies Command

export default files
