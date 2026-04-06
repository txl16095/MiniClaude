import type { Command } from '../../commands.js'

const releaseNotes: Command = {
  description: '查看发布说明',
  name: 'release-notes',
  type: 'local',
  supportsNonInteractive: true,
  load: () => import('./release-notes.js'),
}

export default releaseNotes
