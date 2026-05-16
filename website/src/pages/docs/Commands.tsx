import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

const toc = [
  { id: 'base', text: '基础命令', level: 2 as const },
  { id: 'config', text: '配置命令', level: 2 as const },
  { id: 'file', text: '文件命令', level: 2 as const },
  { id: 'dev', text: '开发命令', level: 2 as const },
  { id: 'adv', text: '高级命令', level: 2 as const },
  { id: 'cli-flags', text: 'CLI 启动参数', level: 2 as const },
]

export default function Commands() {
  return (
    <MarkdownDoc title="命令大全" description="MiniClaude 所有可用命令及用法" toc={toc} content={<>
      <DocStyles />
      <h2 id="base">基础命令</h2>
      <table>
        <thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead>
        <tbody>
          <tr><td><code>/help</code></td><td>显示帮助信息</td><td><code>/help</code></td></tr>
          <tr><td><code>/clear</code></td><td>清空当前对话</td><td><code>/clear</code></td></tr>
          <tr><td><code>/exit</code></td><td>退出程序</td><td><code>/exit</code></td></tr>
          <tr><td><code>/status</code></td><td>显示当前状态（模型/分支/权限等）</td><td><code>/status</code></td></tr>
          <tr><td><code>/stats</code></td><td>查看使用统计</td><td><code>/stats</code></td></tr>
          <tr><td><code>/doctor</code></td><td>系统诊断检查</td><td><code>/doctor</code></td></tr>
        </tbody>
      </table>

      <h2 id="config">配置命令</h2>
      <table>
        <thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead>
        <tbody>
          <tr><td><code>/config</code></td><td>打开配置文件</td><td><code>/config</code></td></tr>
          <tr><td><code>/model</code></td><td>切换 AI 模型</td><td><code>/model deepseek-v4-pro</code></td></tr>
          <tr><td><code>/theme</code></td><td>切换终端主题</td><td><code>/theme dark</code></td></tr>
          <tr><td><code>/provider</code></td><td>切换模型提供商（支持热切换）</td><td><code>/provider kiro</code></td></tr>
          <tr><td><code>/permissions</code></td><td>管理权限规则</td><td><code>/permissions</code></td></tr>
          <tr><td><code>/hooks</code></td><td>管理生命周期钩子</td><td><code>/hooks</code></td></tr>
          <tr><td><code>/output-style</code></td><td>设置输出风格</td><td><code>/output-style concise</code></td></tr>
        </tbody>
      </table>

      <h2 id="file">文件命令</h2>
      <table>
        <thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead>
        <tbody>
          <tr><td><code>/files</code></td><td>查看上下文中的文件列表</td><td><code>/files</code></td></tr>
          <tr><td><code>/add-dir</code></td><td>添加目录到工作上下文</td><td><code>/add-dir src/</code></td></tr>
          <tr><td><code>/diff</code></td><td>查看当前代码变更</td><td><code>/diff</code></td></tr>
          <tr><td><code>/copy</code></td><td>复制最后一条对话到剪贴板</td><td><code>/copy</code></td></tr>
          <tr><td><code>/export</code></td><td>导出对话记录</td><td><code>/export</code></td></tr>
        </tbody>
      </table>

      <h2 id="dev">开发命令</h2>
      <table>
        <thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead>
        <tbody>
          <tr><td><code>/init</code></td><td>初始化项目 CLAUDE.md</td><td><code>/init</code></td></tr>
          <tr><td><code>/compact</code></td><td>压缩对话上下文</td><td><code>/compact</code></td></tr>
          <tr><td><code>/review</code></td><td>代码审查当前变更</td><td><code>/review</code></td></tr>
          <tr><td><code>/pr_comments</code></td><td>查看 PR 评论</td><td><code>/pr_comments</code></td></tr>
          <tr><td><code>/plan</code></td><td>进入计划模式</td><td><code>/plan</code></td></tr>
          <tr><td><code>/rename</code></td><td>重命名当前对话</td><td><code>/rename "New Name"</code></td></tr>
        </tbody>
      </table>

      <h2 id="adv">高级命令</h2>
      <table>
        <thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead>
        <tbody>
          <tr><td><code>/mcp</code></td><td>管理 MCP 服务器</td><td><code>/mcp</code></td></tr>
          <tr><td><code>/skills</code></td><td>管理技能</td><td><code>/skills</code></td></tr>
          <tr><td><code>/tasks</code></td><td>查看后台任务</td><td><code>/tasks</code></td></tr>
          <tr><td><code>/vim</code></td><td>切换 Vim 模式</td><td><code>/vim</code></td></tr>
          <tr><td><code>/fast</code></td><td>切换快速模式</td><td><code>/fast</code></td></tr>
          <tr><td><code>/effort</code></td><td>设置推理深度</td><td><code>/effort high</code></td></tr>
          <tr><td><code>/html-output</code></td><td>生成 HTML 报告</td><td><code>/html-output 分析报告</code></td></tr>
        </tbody>
      </table>

      <h2 id="cli-flags">CLI 启动参数</h2>
      <table>
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td><code>-p, --print</code></td><td>非交互模式，直接回答问题后退出</td></tr>
          <tr><td><code>--model</code></td><td>指定启动时使用的模型</td></tr>
          <tr><td><code>--permission-mode</code></td><td>设置权限模式：default / acceptEdits / bypassPermissions / plan</td></tr>
          <tr><td><code>--output-format</code></td><td>输出格式：text / json / stream-json</td></tr>
          <tr><td><code>--continue</code></td><td>继续最近的对话</td></tr>
          <tr><td><code>--resume</code></td><td>恢复指定 ID 的会话</td></tr>
          <tr><td><code>--version</code></td><td>显示版本号</td></tr>
          <tr><td><code>--dir</code></td><td>设置启动工作目录</td></tr>
        </tbody>
      </table>
    </>} />
  )
}
