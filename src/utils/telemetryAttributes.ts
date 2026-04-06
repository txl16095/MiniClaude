import type { Attributes } from '@opentelemetry/api'
import { getSessionId } from 'src/bootstrap/state.js'
import { getOrCreateUserID } from './config.js'
import { envDynamic } from './envDynamic.js'
import { isEnvTruthy } from './envUtils.js'
import { toTaggedId } from './taggedId.js'

// Default configuration for metrics cardinality
const METRICS_CARDINALITY_DEFAULTS = {
  OTEL_METRICS_INCLUDE_SESSION_ID: true,
  OTEL_METRICS_INCLUDE_VERSION: false,
  OTEL_METRICS_INCLUDE_ACCOUNT_UUID: true,
}

function shouldIncludeAttribute(
  envVar: keyof typeof METRICS_CARDINALITY_DEFAULTS,
): boolean {
  const defaultValue = METRICS_CARDINALITY_DEFAULTS[envVar]
  const envValue = process.env[envVar]

  if (envValue === undefined) {
    return defaultValue
  }

  return isEnvTruthy(envValue)
}

export function getTelemetryAttributes(): Attributes {
  const userId = getOrCreateUserID()
  const sessionId = getSessionId()

  const attributes: Attributes = {
    'user.id': userId,
  }

  if (shouldIncludeAttribute('OTEL_METRICS_INCLUDE_SESSION_ID')) {
    attributes['session.id'] = sessionId
  }
  if (shouldIncludeAttribute('OTEL_METRICS_INCLUDE_VERSION')) {
    attributes['app.version'] = MACRO.VERSION
  }

  // Add terminal type if available
  if (envDynamic.terminal) {
    attributes['terminal.type'] = envDynamic.terminal
  }

  return attributes
}
