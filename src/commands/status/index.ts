import type { Command } from '../../commands.js'

const status = {
  type: 'local-jsx',
  name: 'status',
  description:
    '显示 Claude Code 状态，包括版本、模型、账户、API 连接和工具状态',
  immediate: true,
  load: () => import('./status.js'),
} satisfies Command

export default status
