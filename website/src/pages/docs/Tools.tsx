import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

export default function Tools() {
  return (
    <MarkdownDoc title="工具详解" description="MiniClaude Agent 可调用的所有内置工具" content={<>
      <DocStyles />
      <p>MiniClaude 提供了 30+ 个内置工具，Agent 可以根据任务需要自动选择和调用它们。</p>

      <h2 id="file-tools">文件操作</h2>
      <table>
        <thead><tr><th>工具名</th><th>说明</th><th>典型用法</th></tr></thead>
        <tbody>
          <tr><td><code>FileRead</code></td><td>读取文件内容，支持语法高亮</td><td>查看源码、配置文件</td></tr>
          <tr><td><code>FileWrite</code></td><td>创建或覆盖文件</td><td>新建文件、生成代码</td></tr>
          <tr><td><code>FileEdit</code></td><td>精确编辑文件（字符串替换）</td><td>修改代码片段、重构</td></tr>
          <tr><td><code>Glob</code></td><td>文件名匹配搜索</td><td>查找所有 .ts 文件</td></tr>
          <tr><td><code>Grep</code></td><td>文件内容正则搜索（基于 ripgrep）</td><td>搜索函数定义、引用</td></tr>
          <tr><td><code>NotebookEdit</code></td><td>编辑 Jupyter Notebook (.ipynb)</td><td>修改 Notebook 单元格</td></tr>
        </tbody>
      </table>

      <h2 id="exec-tools">命令执行</h2>
      <table>
        <thead><tr><th>工具名</th><th>说明</th><th>典型用法</th></tr></thead>
        <tbody>
          <tr><td><code>Bash</code></td><td>执行 Shell 命令</td><td>git、npm、构建等</td></tr>
          <tr><td><code>PowerShell</code></td><td>执行 PowerShell 命令（Windows）</td><td>Windows 系统管理</td></tr>
        </tbody>
      </table>

      <h2 id="web-tools">网络工具</h2>
      <table>
        <thead><tr><th>工具名</th><th>说明</th><th>典型用法</th></tr></thead>
        <tbody>
          <tr><td><code>WebFetch</code></td><td>抓取网页内容并分析</td><td>阅读文档、API 响应</td></tr>
          <tr><td><code>WebSearch</code></td><td>网络搜索</td><td>搜索最新信息</td></tr>
        </tbody>
      </table>

      <h2 id="task-tools">任务管理</h2>
      <table>
        <thead><tr><th>工具名</th><th>说明</th><th>典型用法</th></tr></thead>
        <tbody>
          <tr><td><code>Task</code></td><td>启动子 Agent 执行复杂任务</td><td>并行处理多步骤任务</td></tr>
          <tr><td><code>TaskCreate</code></td><td>创建待办任务</td><td>任务拆分与追踪</td></tr>
          <tr><td><code>TaskUpdate</code></td><td>更新任务状态</td><td>标记任务进度</td></tr>
          <tr><td><code>TaskStop</code></td><td>停止运行中的任务</td><td>取消长时间执行</td></tr>
        </tbody>
      </table>

      <h2 id="interaction-tools">交互工具</h2>
      <table>
        <thead><tr><th>工具名</th><th>说明</th><th>典型用法</th></tr></thead>
        <tbody>
          <tr><td><code>AskUserQuestion</code></td><td>向用户提问</td><td>澄清需求、确认方案</td></tr>
          <tr><td><code>Skill</code></td><td>调用已安装技能</td><td>执行技能化工作流</td></tr>
        </tbody>
      </table>

      <h2 id="plan-tools">计划与工作树</h2>
      <table>
        <thead><tr><th>工具名</th><th>说明</th><th>典型用法</th></tr></thead>
        <tbody>
          <tr><td><code>EnterPlanMode</code></td><td>进入计划模式</td><td>复杂功能设计前</td></tr>
          <tr><td><code>ExitPlanMode</code></td><td>退出计划模式</td><td>方案确认后执行</td></tr>
          <tr><td><code>EnterWorktree</code></td><td>创建 Git Worktree</td><td>隔离开发环境</td></tr>
          <tr><td><code>ExitWorktree</code></td><td>退出 Worktree</td><td>清理或保留分支</td></tr>
        </tbody>
      </table>

      <h2 id="mcp-tools">MCP 工具</h2>
      <table>
        <thead><tr><th>工具名</th><th>说明</th><th>典型用法</th></tr></thead>
        <tbody>
          <tr><td><code>mcp__*</code></td><td>MCP 协议工具（动态注册）</td><td>浏览器控制、APK 逆向等</td></tr>
          <tr><td><code>ListMcpResourcesTool</code></td><td>列出 MCP 资源</td><td>查看可用数据源</td></tr>
          <tr><td><code>ReadMcpResourceTool</code></td><td>读取 MCP 资源</td><td>获取 MCP 数据</td></tr>
        </tbody>
      </table>

      <blockquote>工具权限由 <code>settings.json</code> 中的 <code>permissions</code> 和 <code>autoMode.hard_deny</code> 共同控制。后者无条件拦截匹配的工具调用，是最高优先级的保护措施。</blockquote>
    </>} />
  )
}
