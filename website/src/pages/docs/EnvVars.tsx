import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

const toc = [
  { id: 'required', text: '必需变量', level: 2 as const },
  { id: 'model', text: '模型配置', level: 2 as const },
  { id: 'cache', text: '缓存配置', level: 2 as const },
  { id: 'debug', text: '调试选项', level: 2 as const },
  { id: 'advanced', text: '高级配置', level: 2 as const },
]

const rows = (vars: [string, string, string][]) =>
  vars.map(([name, required, desc]) => (
    <tr key={name}>
      <td><code>{name}</code></td>
      <td><span className={`badge ${required === '必需' ? 'badge-red' : 'badge-green'}`}>{required}</span></td>
      <td>{desc}</td>
    </tr>
  ))

export default function EnvVars() {
  return (
    <MarkdownDoc title="环境变量" description="MiniClaude 支持的所有环境变量及用法说明" toc={toc} content={<>
      <DocStyles />
      <h2 id="required">必需变量</h2>
      <table><thead><tr><th>变量名</th><th>必需</th><th>说明</th></tr></thead>
      <tbody>{rows([
        ['ANTHROPIC_API_KEY', '必需', 'API 密钥。使用 Anthropic 官方填 sk-ant-xxx，使用 DeepSeek 等第三方填对应的 key'],
        ['ANTHROPIC_BASE_URL', '可选', '自定义 API 端点。不设则使用 Anthropic 官方 API'],
      ])}</tbody></table>

      <h2 id="model">模型配置</h2>
      <table><thead><tr><th>变量名</th><th>必需</th><th>说明</th></tr></thead>
      <tbody>{rows([
        ['ANTHROPIC_MODEL', '可选', '默认模型。可选：claude-sonnet-4-6, claude-opus-4-6, deepseek-v4-pro 等'],
        ['ANTHROPIC_SMALL_FAST_MODEL', '可选', '快速任务模型，默认 claude-haiku-4-5'],
      ])}</tbody></table>

      <h2 id="cache">缓存配置</h2>
      <p>Prompt Caching 可大幅降低 API 费用（30-50%）。MiniClaude 默认启用 5 分钟 TTL 缓存，通过环境变量可升级为 1 小时。</p>
      <table><thead><tr><th>变量名</th><th>必需</th><th>说明</th></tr></thead>
      <tbody>{rows([
        ['ENABLE_PROMPT_CACHING_1H', '推荐', '启用 1 小时缓存 TTL（默认 5 分钟）。<strong>强烈推荐</strong>，可显著降低 API 费用'],
        ['DISABLE_PROMPT_CACHING', '可选', '完全禁用 Prompt Caching。不推荐'],
        ['DISABLE_PROMPT_CACHING_HAIKU', '可选', '仅对 Haiku 模型禁用缓存'],
        ['DISABLE_PROMPT_CACHING_SONNET', '可选', '仅对 Sonnet 模型禁用缓存'],
        ['DISABLE_PROMPT_CACHING_OPUS', '可选', '仅对 Opus 模型禁用缓存'],
      ])}</tbody></table>

      <h2 id="debug">调试选项</h2>
      <table><thead><tr><th>变量名</th><th>必需</th><th>说明</th></tr></thead>
      <tbody>{rows([
        ['DEBUG', '可选', '启用调试日志。设为 * 显示全部，或指定模块如 DEBUG=api,cli'],
        ['CLAUDE_CODE_FORCE_RECOVERY_CLI', '可选', '强制使用纯文本降级模式，解决 Ink TUI 问题'],
      ])}</tbody></table>

      <h2 id="advanced">高级配置</h2>
      <table><thead><tr><th>变量名</th><th>必需</th><th>说明</th></tr></thead>
      <tbody>{rows([
        ['ANTHROPIC_API_KEY_HELPER', '可选', '外部脚本路径，动态获取 API Key'],
        ['ANTHROPIC_AUTH_TOKEN', '可选', 'OAuth Bearer Token（不使用 API Key 时）'],
        ['CLAUDE_CODE_ENABLE_XAA', '可选', '启用 XAA (SEP-990) IdP 集成'],
        ['DISABLE_AUTOUPDATER', '可选', '设为 1 禁用自动更新检查'],
        ['CLAUDE_CODE_SHELL', '可选', '自定义 Shell 路径（默认系统 Shell）'],
        ['CLAUDE_DISABLE_STREAM_WATCHDOG', '可选', '禁用流空闲看门狗（默认启用）。Mac 休眠唤醒后自动恢复连接'],
        ['CLAUDE_STREAM_IDLE_TIMEOUT_MS', '可选', '流空闲超时毫秒数（默认 180000，即 3 分钟）'],
        ['CLAUDE_CODE_USE_POWERSHELL_TOOL', '可选', 'Windows 上优先使用 PowerShell（默认启用）'],
      ])}</tbody></table>
    </>} />
  )
}
