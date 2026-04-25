import type { UUID } from 'crypto'
export class BoundedUUIDSet extends Set<string> { constructor(_capacity?: number) { super() } }
