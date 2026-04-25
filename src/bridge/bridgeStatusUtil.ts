export const FAILED_FOOTER_TEXT = ''
export function buildActiveFooterText() { return '' }
export function buildIdleFooterText() { return '' }
export function getBridgeStatus() { return { status: 'disconnected' as const } }
export function buildBridgeConnectUrl() { return null }
export function computeGlimmerIndex(_f: number, _w: number) { return -100 }
export function computeShimmerSegments(_t: string, _g: number) { return [] }
export const SHIMMER_INTERVAL_MS = 200
