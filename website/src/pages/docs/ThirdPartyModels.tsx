import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

const toc = [
  { id: 'deepseek', text: 'DeepSeek', level: 2 as const },
  { id: 'openai', text: 'OpenAI 兼容 API', level: 2 as const },
  { id: 'custom', text: '其他兼容 API', level: 2 as const },
  { id: 'model-switch', text: '切换模型', level: 2 as const },
]

export default function ThirdPartyModels() {
  return (
    <MarkdownDoc title="第三方模型" description="接入 DeepSeek、OpenAI 等第三方模型" toc={toc} content={<>
      <DocStyles />
      <p>MiniClaude 支持接入<strong>任意 Anthropic 兼容 API</strong>，无需付费 Anthropic 账号即可使用。</p>

      <h2 id="deepseek">DeepSeek</h2>
      <p>在 <code>.env</code> 中配置：</p>
      <pre><code>{`ANTHROPIC_API_KEY=sk-your-deepseek-api-key
ANTHROPIC_BASE_URL=https://api.deepseek.com
ANTHROPIC_MODEL=deepseek-v4-pro`}</code></pre>
      <p>支持的 DeepSeek 模型：</p>
      <ul>
        <li><code>deepseek-v4-pro</code> — 旗舰模型，适合复杂编程任务</li>
        <li><code>deepseek-r1</code> — 推理模型，适合深度思考</li>
        <li><code>deepseek-v3</code> — 日常编程和对话</li>
      </ul>

      <h2 id="openai">OpenAI 兼容 API</h2>
      <p>任何兼容 OpenAI Messages API 的服务商都可以接入：</p>
      <pre><code>{`ANTHROPIC_API_KEY=sk-your-openai-key
ANTHROPIC_BASE_URL=https://api.openai.com
ANTHROPIC_MODEL=gpt-5-1-codex`}</code></pre>

      <h2 id="custom">其他兼容 API</h2>
      <p>支持所有提供 Anthropic-compatible API 的服务商，包括但不限于：</p>
      <ul>
        <li><strong>Novita AI</strong> — 低价 API 中转</li>
        <li><strong>SiliconFlow</strong> (硅基流动) — 国产大模型平台</li>
        <li><strong>OpenRouter</strong> — 多模型路由服务</li>
        <li><strong>自托管服务</strong> — 如 LiteLLM、One API 等中转项目</li>
      </ul>
      <pre><code>{`# OpenRouter 示例
ANTHROPIC_API_KEY=sk-or-v1-xxx
ANTHROPIC_BASE_URL=https://openrouter.ai/api
ANTHROPIC_MODEL=anthropic/claude-sonnet-4-6`}</code></pre>

      <h2 id="model-switch">切换模型</h2>
      <p>启动后可在对话中随时切换模型：</p>
      <pre><code>{`# 使用 /model 命令
/model deepseek-r1

# 或在设置中修改
# settings.json → "model": "deepseek-v4-pro"`}</code></pre>
      <blockquote>不同模型的价格和速度差异很大，建议日常使用 DeepSeek V4 Pro，复杂任务使用 Claude Opus 4.6。</blockquote>
    </>} />
  )
}
