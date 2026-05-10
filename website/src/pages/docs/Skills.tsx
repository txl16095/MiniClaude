import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

export default function Skills() {
  return (
    <MarkdownDoc title="技能系统" description="Skills — 可复用、可组合的 Agent 工作流" content={<>
      <DocStyles />
      <h2 id="overview">概述</h2>
      <p>技能（Skills）是 MiniClaude 的可复用工作流模块。每个技能定义了一个<strong>标准操作流程（SOP）</strong>，Agent 在匹配到触发条件时自动加载对应技能的提示词。</p>

      <h2 id="builtin">内置技能</h2>
      <table>
        <thead><tr><th>技能名</th><th>说明</th><th>触发方式</th></tr></thead>
        <tbody>
          <tr><td><code>html-output</code></td><td>生成 HTML 报告</td><td><code>/html-output</code></td></tr>
          <tr><td><code>simplify</code></td><td>代码审查与清理</td><td><code>/simplify</code></td></tr>
          <tr><td><code>debug</code></td><td>系统调试</td><td><code>/debug</code></td></tr>
          <tr><td><code>batch</code></td><td>批量操作</td><td><code>/batch</code></td></tr>
          <tr><td><code>stuck</code></td><td>卡住时诊断</td><td><code>/stuck</code></td></tr>
          <tr><td><code>verify</code></td><td>验证代码</td><td><code>/verify</code></td></tr>
          <tr><td><code>update-config</code></td><td>更新配置</td><td><code>/update-config</code></td></tr>
          <tr><td><code>remember</code></td><td>记忆管理</td><td><code>/remember</code></td></tr>
        </tbody>
      </table>

      <h2 id="custom">自定义技能</h2>
      <p>在 <code>~/.claude/skills/</code> 目录下创建 <code>SKILL.md</code> 文件：</p>
      <pre><code>{`~/.claude/skills/
└── my-skill/
    └── SKILL.md`}</code></pre>
      <p>SKILL.md 的格式：</p>
      <pre><code>{`---
name: my-skill
description: 技能描述（Agent 自动匹配用）
---
# 技能标题

技能的具体提示词和指令...`}</code></pre>
      <p>Agent 会根据对话内容<strong>自动匹配</strong>对应的技能，无需手动调用。</p>

      <h2 id="code">代码注册</h2>
      <p>对于内置技能，通过 <code>registerBundledSkill</code> 注册：</p>
      <pre><code>{`import { registerBundledSkill } from '../bundledSkills.js'

registerBundledSkill({
  name: 'html-output',
  description: '生成 HTML 报告...',
  userInvocable: true,
  async getPromptForCommand(args) {
    return [{ type: 'text', text: skillPrompt }]
  },
})`}</code></pre>
    </>} />
  )
}
