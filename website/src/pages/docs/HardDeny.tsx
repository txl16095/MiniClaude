import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

const toc = [
  { id: 'overview', text: '概述', level: 2 as const },
  { id: 'config', text: '配置方式', level: 2 as const },
  { id: 'pipeline', text: '执行管道', level: 2 as const },
  { id: 'rules', text: '规则格式', level: 2 as const },
  { id: 'examples', text: '实践示例', level: 2 as const },
]

export default function HardDeny() {
  return (
    <MarkdownDoc title="hard_deny 安全规则" description="无条件禁止规则 — 管道级安全拦截" toc={toc} content={<>
      <DocStyles />
      <h2 id="overview">概述</h2>
      <p><code>hard_deny</code> 是 MiniClaude 内置的安全防护机制。它在<strong>工具执行管道的最前端</strong>检查每条工具调用，命中规则后立即拒绝——不弹窗、不进入权限系统、不被任何模式绕过。</p>
      <blockquote>
        与 <code>soft_deny</code>（AI 分类器提示）不同，<code>hard_deny</code> 是纯代码级检查，不依赖 AI 判断，不受任何 feature flag 影响。
      </blockquote>

      <h2 id="config">配置方式</h2>
      <p>在 <code>~/.claude/settings.json</code> 中配置：</p>
      <pre><code>{`{
  "autoMode": {
    "hard_deny": [
      "Bash(rm -rf)",
      "Bash(git push --force main)",
      "FileWrite(*.env)",
      "WebFetch"
    ]
  }
}`}</code></pre>

      <h2 id="pipeline">执行管道</h2>
      <pre><code>{`工具调用流程:
  checkHardDenyRules()    ← 第一道防线
      ↓ 命中 → 立即拒绝 (不弹窗/不可绕过)
  Zod 输入验证
      ↓
  PreToolUse Hooks
      ↓
  权限检查 (canUseTool / autoMode / bypassPermissions)
      ↓
  工具执行`}</code></pre>
      <p><code>hard_deny</code> 是<strong>最早执行</strong>的检查，即使处于 <code>bypassPermissions</code> 模式也无法绕过。</p>

      <h2 id="rules">规则格式</h2>
      <table>
        <thead><tr><th>格式</th><th>说明</th><th>示例</th></tr></thead>
        <tbody>
          <tr><td><code>ToolName</code></td><td>禁用整个工具</td><td><code>WebFetch</code> — 禁止所有网络请求</td></tr>
          <tr><td><code>ToolName(pattern)</code></td><td>匹配输入中的子串</td><td><code>Bash(rm -rf)</code> — 禁止包含 rm -rf 的命令</td></tr>
        </tbody>
      </table>

      <h2 id="examples">实践示例</h2>
      <h3>防误删</h3>
      <pre><code>{`"Bash(rm -rf)"        // 拦截任何 rm -rf 命令
"Bash(rm -r)"         // 拦截任何 rm -r 命令`}</code></pre>
      <h3>保护敏感文件</h3>
      <pre><code>{`"FileWrite(*.env)"    // 禁止覆盖 .env 文件
"FileRead(*.pem)"     // 禁止读取私钥文件
"FileRead(*.key)"     // 禁止读取密钥文件`}</code></pre>
      <h3>阻断网络风险</h3>
      <pre><code>{`"Bash(curl 10.)"      // 禁止访问内网 10.x 网段
"Bash(curl 192.168.)" // 禁止访问内网 192.168.x 网段`}</code></pre>
      <h3>团队合规</h3>
      <pre><code>{`"Bash(git push --force)"   // 禁止所有 force push
"Bash(npm publish)"         // 禁止直接发布 npm 包
"Bash(git commit --no-verify)" // 禁止跳过 git hooks`}</code></pre>

      <blockquote>
        <strong>提示：</strong>精确匹配和宽泛匹配可以组合使用。例如同时配置 <code>"Bash(rm -rf /)"</code>（精准防删根）和 <code>"Bash(rm -rf)"</code>（泛防所有 rm -rf），实现分层防御。
      </blockquote>
    </>} />
  )
}
