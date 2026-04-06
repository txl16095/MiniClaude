import type { Command } from '../../commands.js'

const btw = {
  type: 'local-jsx',
  name: 'btw',
  description:
    '快速提问而不中断主对话',
  immediate: true,
  argumentHint: '<question>',
  load: () => import('./btw.js'),
} satisfies Command

export default btw
