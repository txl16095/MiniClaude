export const CCR_TERMS_URL = ''
export async function launchUltraplan() { return '' }
export async function stopUltraplan() {}
export default {
  type: 'local-jsx',
  name: 'ultraplan',
  description: '',
  load: () => Promise.resolve({ default: null }),
} satisfies import("../commands.js").Command
