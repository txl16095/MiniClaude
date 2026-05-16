import type { Command } from '../../commands.js'

export default {
  type: 'local-jsx',
  name: 'provider',
  get description() {
    return '切换模型提供商 (DeepSeek / Kiro 等)'
  },
  argumentHint: '[provider-name] [--session]',
  load: () => import('./provider.js'),
} satisfies Command
