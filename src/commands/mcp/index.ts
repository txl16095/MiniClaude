import type { Command } from '../../commands.js'

const mcp = {
  type: 'local-jsx',
  name: 'mcp',
  description: '管理 MCP 服务器',
  immediate: true,
  argumentHint: '[enable|disable [server-name]]',
  load: () => import('./mcp.js'),
} satisfies Command

export default mcp
