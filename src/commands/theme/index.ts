import type { Command } from '../../commands.js'

const theme = {
  type: 'local-jsx',
  name: 'theme',
  description: '更改主题',
  load: () => import('./theme.js'),
} satisfies Command

export default theme
