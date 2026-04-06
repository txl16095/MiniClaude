import type { Command } from '../../commands.js'

export default {
  type: 'local-jsx',
  name: 'diff',
  description: '查看未提交的更改和每轮差异',
  load: () => import('./diff.js'),
} satisfies Command
