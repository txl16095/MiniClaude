// Stub file - Remote control functionality has been removed

import { StructuredIO } from './structuredIO.js'

export class RemoteIO extends StructuredIO {
  constructor(...args: any[]) {
    // Fall back to StructuredIO behavior
    super(args[1], args[2])
  }
}
