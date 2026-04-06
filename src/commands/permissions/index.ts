import type { Command } from '../../commands.js'

const permissions = {
  type: 'local-jsx',
  name: 'permissions',
  aliases: ['allowed-tools'],
  description: '管理工具权限的允许和拒绝规则',
  load: () => import('./permissions.js'),
} satisfies Command

export default permissions
