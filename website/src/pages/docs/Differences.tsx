import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

export default function Differences() {
  return (
    <MarkdownDoc title="与原版的差异" description="MiniClaude 相对于原版 Claude Code 的精简和增强" content={<>
      <DocStyles />
      <h2 id="removed">已移除</h2>
      <table>
        <thead><tr><th>模块</th><th>代码量</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>云服务集成</td><td>~7,173 行</td><td>OAuth 认证、遥测分析、设置同步、策略限制</td></tr>
          <tr><td>协作功能</td><td>~24,387 行</td><td>团队协作、桥接模式、远程控制、多 Agent 协调</td></tr>
          <tr><td>实验功能</td><td>~1,950 行</td><td>语音模式、桌面集成、移动端、Buddy 精灵</td></tr>
          <tr><td>复杂集成</td><td>~3,170 行</td><td>Teleport、自动更新、Slack</td></tr>
          <tr><td>速率限制系统</td><td>~48,000 行</td><td>限速模拟/消息/处理链、用量分析</td></tr>
          <tr><td>命令清理</td><td>42 个命令</td><td>授权/实验/内部/空桩命令</td></tr>
        </tbody>
      </table>

      <h2 id="kept">保留</h2>
      <ul>
        <li>AI 对话和代码生成</li>
        <li>文件读写编辑（Read/Write/Edit/Glob/Grep）</li>
        <li>Shell 命令执行（Bash/PowerShell）</li>
        <li>Git 版本控制集成</li>
        <li>MCP 协议支持</li>
        <li>LSP 语言服务</li>
        <li>插件系统和技能系统</li>
        <li>任务管理和权限控制</li>
      </ul>

      <h2 id="added">新增功能</h2>
      <table>
        <thead><tr><th>功能</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td><code>hard_deny</code></td><td>无条件禁止规则，管道级安全拦截</td></tr>
          <tr><td><code>html-output</code></td><td>自包含 HTML 报告生成技能</td></tr>
          <tr><td><code>HUD 状态栏</code></td><td>内建状态显示（模型/上下文/分支/权限/时长）</td></tr>
          <tr><td>第三方模型优化</td><td>自动检测第三方 API 并优化请求格式</td></tr>
        </tbody>
      </table>
    </>} />
  )
}
