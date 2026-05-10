import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

const toc = [
  { id: 'required', text: '必需变量', level: 2 as const },
  { id: 'model', text: '模型配置', level: 2 as const },
  { id: 'proxy', text: '代理配置', level: 2 as const },
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

      <h2 id="proxy">代理配置</h2>
      <table><thead><tr><th>变量名</th><th>必需</th><th>说明</th></tr></thead>
      <tbody>{rows([
        ['HTTP_PROXY', '可选', 'HTTP 代理地址，如 http://proxy:8080'],
        ['HTTPS_PROXY', '可选', 'HTTPS 代理地址'],
        ['NO_PROXY', '可选', '跳过代理的地址列表，逗号分隔'],
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
      ])}</tbody></table>
    </>} />
  )
}
