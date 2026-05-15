import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

export default function Mcp() {
  return (
    <MarkdownDoc title="MCP 协议" description="Model Context Protocol — 扩展 Agent 工具能力" content={<>
      <DocStyles />
      <h2 id="overview">概述</h2>
      <p>MCP（Model Context Protocol）是一种开放协议，允许 MiniClaude 连接到外部工具服务器，动态扩展 Agent 的能力边界。</p>

      <h2 id="config">服务器配置</h2>
      <p>在 <code>~/.claude/settings.json</code> 或 <code>.mcp.json</code> 中配置：</p>
      <pre><code>{`{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"],
      "alwaysLoad": true
    },
    "my-server": {
      "command": "python",
      "args": ["path/to/server.py"]
    },
    "remote-server": {
      "type": "sse",
      "url": "https://example.com/mcp/sse"
    }
  }
}`}</code></pre>
      <p>配置 <code>"alwaysLoad": true</code> 后，该服务器的<b>全部工具</b>会始终出现在 Agent 工具列表中，无需 Tool Search 延迟发现。适用于常用 MCP 服务器。</p>

      <h2 id="transports">传输方式</h2>
      <table>
        <thead><tr><th>类型</th><th>说明</th><th>适用场景</th></tr></thead>
        <tbody>
          <tr><td><code>stdio</code></td><td>标准输入输出通信（默认）</td><td>本地进程，最常用</td></tr>
          <tr><td><code>sse</code></td><td>Server-Sent Events</td><td>远程 HTTP 服务器</td></tr>
          <tr><td><code>http</code></td><td>HTTP 流式传输</td><td>Web 服务集成</td></tr>
          <tr><td><code>ws</code></td><td>WebSocket</td><td>双向实时通信</td></tr>
          <tr><td><code>sdk</code></td><td>VS Code SDK</td><td>IDE 扩展集成</td></tr>
        </tbody>
      </table>

      <h2 id="tools">可用工具</h2>
      <p>MCP 服务器注册后，其工具会以 <code>mcp__serverName__toolName</code> 的格式出现在 Agent 的工具列表中。例如：</p>
      <ul>
        <li><code>mcp__chrome-devtools__navigate_page</code> — 浏览器页面导航</li>
        <li><code>mcp__chrome-devtools__take_screenshot</code> — 网页截图</li>
        <li><code>mcp__jadx-mcp__get_class_source</code> — APK 反编译源码</li>
      </ul>

      <h2 id="management">管理命令</h2>
      <pre><code>{`/mcp              # 查看 MCP 服务器状态
/mcp add          # 添加新服务器
/mcp remove       # 移除服务器`}</code></pre>

      <blockquote>
        MCP 工具同样受 <code>hard_deny</code> 规则约束。配置 <code>"mcp__*"</code> 可禁用所有 MCP 工具。
      </blockquote>
    </>} />
  )
}
