// Placeholder file - Voice Mode has been removed
// This file exists to prevent compilation errors in files that conditionally import it

export const useVoiceState = () => ({ voiceState: 'idle' as const, voiceAudioLevels: [], voiceError: null, voiceWarmingUp: false })
export const useSetVoiceState = () => () => {}
export const useGetVoiceState = () => () => ({ voiceState: 'idle' as const, voiceAudioLevels: [], voiceError: null, voiceWarmingUp: false })
