import type { Command } from '../../commands.js'

const rewind = {
  description: `将代码和/或对话恢复到之前的某个时间点`,
  name: 'rewind',
  aliases: ['checkpoint'],
  argumentHint: '',
  type: 'local',
  supportsNonInteractive: false,
  load: () => import('./rewind.js'),
} satisfies Command

export default rewind
