import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

const toc = [
  { id: 'start-fail', text: '启动失败', level: 2 as const },
  { id: 'permission', text: '权限问题', level: 2 as const },
  { id: 'slow', text: '模型响应慢', level: 2 as const },
  { id: 'build', text: '构建错误', level: 2 as const },
  { id: 'config', text: '配置不生效', level: 2 as const },
  { id: 'other', text: '其他问题', level: 2 as const },
]

export default function Faq() {
  return (
    <MarkdownDoc title="常见问题" description="使用 MiniClaude 时可能遇到的问题及解决方案" toc={toc} content={<>
      <DocStyles />
      <h2 id="start-fail">启动失败</h2>
      <p><strong>症状：</strong>运行 <code>./cli</code> 时报错或直接退出。</p>
      <p><strong>解决方案：</strong></p>
      <ul>
        <li>确保已运行 <code>bun run build</code> 完成构建</li>
        <li>确认 <code>.env</code> 文件存在且 <code>ANTHROPIC_API_KEY</code> 已配置</li>
        <li>检查 Bun 版本：<code>bun --version</code> 需要 1.3.11+</li>
        <li>尝试降级模式：<code>CLAUDE_CODE_FORCE_RECOVERY_CLI=1 ./cli</code></li>
      </ul>

      <h2 id="permission">权限问题</h2>
      <p><strong>症状：</strong>工具执行被拒绝，权限弹窗频繁。</p>
      <p><strong>解决方案：</strong></p>
      <ul>
        <li>在 <code>settings.json</code> 中配置权限规则：<br/>
          <code>"permissions": &#123; "allow": ["Bash(git *)"], "defaultMode": "acceptEdits" &#125;</code></li>
        <li>高危操作可用 <code>hard_deny</code> 规则无条件拦截</li>
        <li>开发环境下可设置 <code>"defaultMode": "bypassPermissions"</code> 跳过所有确认</li>
      </ul>

      <h2 id="slow">模型响应慢</h2>
      <p><strong>症状：</strong>模型回复缓慢或频繁超时。</p>
      <p><strong>解决方案：</strong></p>
      <ul>
        <li>尝试切换更快的模型：<code>/model deepseek-v4-pro</code></li>
        <li>减小上下文窗口：<code>/compact</code> 压缩对话历史</li>
        <li>使用 /fast 模式减少 thinking tokens</li>
        <li>检查网络连接和代理配置</li>
      </ul>

      <h2 id="build">构建错误</h2>
      <p><strong>症状：</strong><code>bun run build</code> 失败。</p>
      <p><strong>解决方案：</strong></p>
      <ul>
        <li>运行 <code>bun install</code> 确保依赖完整</li>
        <li>清除缓存：<code>rm -rf node_modules && bun install</code></li>
        <li>检查磁盘空间是否充足</li>
        <li>Windows 用户确认在 Git Bash 或 WSL 中运行</li>
      </ul>

      <h2 id="config">配置不生效</h2>
      <p><strong>症状：</strong>修改 <code>settings.json</code> 后无变化。</p>
      <p><strong>解决方案：</strong></p>
      <ul>
        <li>配置文件在 <code>~/.claude/settings.json</code>（不是项目根目录）</li>
        <li>确保 JSON 格式正确（可用 <code>cat settings.json | python -m json.tool</code> 验证）</li>
        <li>修改后需重启 MiniClaude</li>
      </ul>

      <h2 id="other">其他问题</h2>
      <ul>
        <li><strong>Windows Git Bash 中文乱码：</strong>设置 <code>LANG=zh_CN.UTF-8</code></li>
        <li><strong>MCP 服务器连接失败：</strong>检查服务器进程是否运行，路径是否正确</li>
        <li><strong>插件安装失败：</strong>确认网络可访问 GitHub，检查 marketplace 配置</li>
      </ul>
    </>} />
  )
}
