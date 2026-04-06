import type { Command } from '../../commands.js'

const agents = {
  type: 'local-jsx',
  name: 'agents',
  description: '管理代理配置',
  load: () => import('./agents.js'),
} satisfies Command

export default agents
