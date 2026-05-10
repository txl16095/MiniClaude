import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

const toc = [
  { id: 'install-bun', text: '安装 Bun', level: 2 as const },
  { id: 'deps', text: '安装依赖并配置', level: 2 as const },
  { id: 'start', text: '启动', level: 2 as const },
  { id: 'global', text: '全局使用', level: 2 as const },
  { id: 'recovery', text: '降级模式', level: 2 as const },
]

export default function QuickStart() {
  return (
    <MarkdownDoc
      title="安装与启动"
      description="从零开始运行 MiniClaude，只需 3 步"
      toc={toc}
      content={
        <>
          <DocStyles />
          <h2 id="install-bun">安装 Bun</h2>
          <p>MiniClaude 基于 Bun 运行时构建，首先需要安装 Bun 1.3.11+。</p>
          <h3>macOS / Linux</h3>
          <pre><code>{`curl -fsSL https://bun.sh/install | bash`}</code></pre>
          <h3>Homebrew</h3>
          <pre><code>{`brew install bun`}</code></pre>
          <h3>Windows</h3>
          <p>访问 <a href="https://bun.sh" target="_blank">bun.sh</a> 下载安装程序，或使用 PowerShell：</p>
          <pre><code>{`powershell -c "irm bun.sh/install.ps1 | iex"`}</code></pre>

          <h2 id="deps">安装依赖并配置</h2>
          <pre><code>{`git clone https://github.com/txl16095/MiniClaude.git
cd MiniClaude
bun install`}</code></pre>
          <p>复制环境变量模板并填入你的 API Key：</p>
          <pre><code>{`cp .env.example .env
# 编辑 .env 文件
ANTHROPIC_API_KEY=sk-ant-xxxxx`}</code></pre>
          <p>如果你使用第三方 API（如 DeepSeek），还需要设置 <code>ANTHROPIC_BASE_URL</code>：</p>
          <pre><code>{`ANTHROPIC_API_KEY=sk-your-deepseek-key
ANTHROPIC_BASE_URL=https://api.deepseek.com`}</code></pre>

          <h2 id="start">启动</h2>
          <h3>macOS / Linux</h3>
          <pre><code>{`# 构建并启动
bun run build
./cli

# 无头模式（非交互）
./cli -p "你的问题"

# 查看所有选项
./cli --help`}</code></pre>
          <h3>Windows</h3>
          <p>使用 Git Bash 或 WSL：</p>
          <pre><code>{`bun run build
./cli`}</code></pre>
          <p>也可直接用 bun 启动（适合 PowerShell）：</p>
          <pre><code>{`bun --env-file=.env run build
bun --env-file=.env cli`}</code></pre>

          <h2 id="global">全局使用</h2>
          <p>将 <code>bin/</code> 目录加入 PATH，即可在任意目录启动：</p>
          <pre><code>{`# macOS / Linux
export PATH="$PWD/bin:$PATH"
# 或在 ~/.bashrc / ~/.zshrc 中添加

# Windows PowerShell
$env:Path += ";E:\\Product\\MiniClaude\\bin"`}</code></pre>

          <h2 id="recovery">降级模式</h2>
          <p>如果遇到 Ink TUI 渲染问题，可以强制使用纯文本模式：</p>
          <pre><code>{`export CLAUDE_CODE_FORCE_RECOVERY_CLI=1
./cli`}</code></pre>
        </>
      }
    />
  )
}
