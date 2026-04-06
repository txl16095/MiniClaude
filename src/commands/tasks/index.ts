import type { Command } from '../../commands.js'

const tasks = {
  type: 'local-jsx',
  name: 'tasks',
  aliases: ['bashes'],
  description: '列出和管理后台任务',
  load: () => import('./tasks.js'),
} satisfies Command

export default tasks
