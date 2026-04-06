import type { Command } from '../../commands.js'

const tag = {
  type: 'local-jsx',
  name: 'tag',
  description: '在当前会话上切换可搜索标签',
  isEnabled: () => process.env.USER_TYPE === 'ant',
  argumentHint: '<tag-name>',
  load: () => import('./tag.js'),
} satisfies Command

export default tag
