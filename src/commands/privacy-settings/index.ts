import type { Command } from '../../commands.js'
import { isConsumerSubscriber } from '../../utils/auth.js'

const privacySettings = {
  type: 'local-jsx',
  name: 'privacy-settings',
  description: '查看和更新你的隐私设置',
  isEnabled: () => {
    return isConsumerSubscriber()
  },
  load: () => import('./privacy-settings.js'),
} satisfies Command

export default privacySettings
