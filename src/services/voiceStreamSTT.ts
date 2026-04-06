// Placeholder file - Voice Mode has been removed
// This file exists to prevent compilation errors in files that conditionally import it

export type VoiceStreamConnection = never
export const connectVoiceStream = () => { throw new Error('Voice mode not available') }
export const isVoiceStreamAvailable = () => false
