import chalk from 'chalk'
import * as React from 'react'
import type { LocalJSXCommandCall } from '../../types/command.js'
import { useSetAppState } from '../../state/AppState.js'
import { updateSettingsForSource } from '../../utils/settings/settings.js'
import { getInitialSettings } from '../../utils/settings/settings.js'
import { getSettingsForSource } from '../../utils/settings/settings.js'
import { applyConfigEnvironmentVariables } from '../../utils/managedEnv.js'
import { logEvent } from '../../services/analytics/index.js'

interface ProviderConfig {
  env: Record<string, string>
  model?: string
  defaultModels?: {
    sonnet?: string
    haiku?: string
    opus?: string
  }
  description?: string
}

function ProviderSwitch({
  onDone,
  providerName,
  provider,
  sessionOnly,
}: {
  onDone: (message: string) => void
  providerName: string
  provider: ProviderConfig
  sessionOnly: boolean
}) {
  const setAppState = useSetAppState()

  React.useEffect(() => {
    if (sessionOnly) {
      // Session-only: inject env vars directly into process.env without writing to disk.
      // Only affects the current window, not other sessions.
      Object.assign(process.env, provider.env)
    } else {
      // Global: persist to settings.json for all windows
      const settingsUpdate: Record<string, unknown> = {
        env: provider.env,
      }

      if (provider.model) {
        settingsUpdate.model = provider.model
      }

      if (provider.defaultModels) {
        const models: Record<string, string> = {}
        if (provider.defaultModels.sonnet) models.sonnet = provider.defaultModels.sonnet
        if (provider.defaultModels.haiku) models.haiku = provider.defaultModels.haiku
        if (provider.defaultModels.opus) models.opus = provider.defaultModels.opus
        if (Object.keys(models).length > 0) {
          settingsUpdate.defaultModels = models
        }
      }

      const result = updateSettingsForSource('userSettings', settingsUpdate as any)
      if (result.error) {
        onDone(`Failed to switch provider: ${result.error.message}`)
        return
      }

      // Hot-reload env vars so next API call uses the new endpoint
      applyConfigEnvironmentVariables()
    }

    // Update HUD model display
    if (provider.model) {
      setAppState(prev => ({
        ...prev,
        mainLoopModel: provider.model!,
        mainLoopModelForSession: null,
      }))
    }

    logEvent('tengu_provider_switched', {
      provider: providerName as any,
      model: provider.model as any,
    })

    const scope = sessionOnly ? ' (this session only)' : ''
    const desc = provider.description ? ` (${provider.description})` : ''
    onDone(
      `Switched to ${chalk.bold(providerName)}${desc}${scope}\n` +
        `  model: ${chalk.bold(provider.model || 'N/A')}\n` +
        `  base_url: ${provider.env.ANTHROPIC_BASE_URL || 'N/A'}`,
    )
  }, [])

  return null
}

function ProviderList({
  onDone,
  providers,
}: {
  onDone: (message: string) => void
  providers: Record<string, ProviderConfig>
}) {
  React.useEffect(() => {
    const currentBaseUrl = process.env.ANTHROPIC_BASE_URL || 'default'
    const lines: string[] = ['Available providers:']
    for (const [name, config] of Object.entries(providers)) {
      const isActive =
        currentBaseUrl === (config.env.ANTHROPIC_BASE_URL || '')
      const marker = isActive ? chalk.green(' (active)') : ''
      const desc = config.description ? ` — ${config.description}` : ''
      lines.push(
        `  ${chalk.bold(name)}${marker}${desc}\n` +
          `    model: ${config.model || 'N/A'}\n` +
          `    base_url: ${config.env.ANTHROPIC_BASE_URL || 'N/A'}`,
      )
    }
    onDone(lines.join('\n'))
  }, [])

  return null
}

export const call: LocalJSXCommandCall = async (onDone, _context, args) => {
  const raw = args?.trim() || ''

  // Parse --session flag for session-only switch
  let sessionOnly = false
  let providerArg = raw
  if (raw.includes('--session')) {
    sessionOnly = true
    providerArg = raw.replace('--session', '').trim()
  } else if (raw.includes('-s')) {
    sessionOnly = true
    providerArg = raw.replace('-s', '').trim()
  }

  const userSettings = getSettingsForSource('userSettings')
  const providers = (userSettings?.providers ||
    getInitialSettings().providers) as Record<string, ProviderConfig> | undefined

  if (!providers || Object.keys(providers).length === 0) {
    onDone(
      'No providers configured. Add a "providers" section to ~/.claude/settings.json:\n' +
        '  "providers": {\n' +
        '    "my-provider": {\n' +
        '      "env": { "ANTHROPIC_BASE_URL": "...", "ANTHROPIC_AUTH_TOKEN": "..." },\n' +
        '      "model": "...",\n' +
        '      "description": "..."\n' +
        '    }\n' +
        '  }',
    )
    return
  }

  if (!providerArg) {
    return <ProviderList onDone={onDone} providers={providers} />
  }

  const provider = providers[providerArg]
  if (!provider) {
    onDone(
      `Unknown provider "${providerArg}". Available: ${Object.keys(providers).join(', ')}`,
    )
    return
  }

  return (
    <ProviderSwitch
      onDone={onDone}
      providerName={providerArg}
      provider={provider}
      sessionOnly={sessionOnly}
    />
  )
}
