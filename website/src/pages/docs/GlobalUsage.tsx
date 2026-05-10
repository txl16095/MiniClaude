import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

export default function GlobalUsage() {
  return (
    <MarkdownDoc title="全局使用" description="在任意目录中调用 MiniClaude" content={<>
      <DocStyles />
      <h2 id="unix">macOS / Linux</h2>
      <p>将 MiniClaude 的 <code>bin/</code> 目录添加到 PATH：</p>
      <pre><code>{`# 添加到 shell 配置文件 (~/.bashrc, ~/.zshrc 等)
export PATH="$HOME/MiniClaude/bin:$PATH"

# 使配置生效
source ~/.zshrc

# 现在可以在任意目录启动
cd ~/my-project
claude`}</code></pre>

      <h2 id="windows">Windows</h2>
      <p>方法一：在 Git Bash 中配置：</p>
      <pre><code>{`echo 'export PATH="/e/Product/MiniClaude/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc`}</code></pre>
      <p>方法二：PowerShell 临时添加：</p>
      <pre><code>{`$env:Path += ";E:\\Product\\MiniClaude\\bin"
claude`}</code></pre>
      <p>方法三：系统环境变量（永久生效）：</p>
      <p>打开"系统属性 → 高级 → 环境变量"，在 Path 中添加 <code>E:\Product\MiniClaude\bin</code>。</p>

      <h2 id="verify">验证安装</h2>
      <pre><code>{`# 查看版本
claude --version

# 查看帮助
claude --help

# 启动对话
claude`}</code></pre>

      <blockquote>确保 <code>.env</code> 文件在 MiniClaude 项目根目录下，或者已将环境变量配置为系统级变量。</blockquote>
    </>} />
  )
}
