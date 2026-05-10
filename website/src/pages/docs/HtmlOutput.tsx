import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

export default function HtmlOutput() {
  return (
    <MarkdownDoc title="HTML 输出" description="生成自包含的 HTML 报告，替代大段 Markdown" content={<>
      <DocStyles />
      <h2 id="overview">概述</h2>
      <p>当需要输出复杂报告、代码审查结果、架构方案等丰富内容时，MiniClaude 支持生成<strong>自包含的 HTML 文件</strong>，提供比 Markdown 更优秀的阅读体验。</p>

      <h2 id="when">何时使用</h2>
      <ul>
        <li><strong>报告与分析</strong>：数据表格、多维度对比、结构化摘要</li>
        <li><strong>代码审查</strong>：多文件审查结果、严重级别徽标、逐文件分解</li>
        <li><strong>架构与方案</strong>：ASCII 图渲染、决策树、依赖关系图</li>
        <li><strong>搜索结果</strong>：分组展示、可点击链接、元数据标注</li>
        <li><strong>任何超过 50 行的内容</strong>：Markdown 可读性在此节点后急剧下降</li>
      </ul>

      <h2 id="invoke">调用方式</h2>
      <p>直接在对话中使用 <code>/html-output</code> 命令：</p>
      <pre><code>{`/html-output 帮我生成最近一周的代码提交总结报告`}</code></pre>

      <h2 id="features">HTML 特性</h2>
      <table>
        <thead><tr><th>特性</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>自包含</td><td>无外部 CSS/JS/字体依赖，单文件即可正常显示</td></tr>
          <tr><td>暗色模式</td><td>使用 CSS 变量 + <code>prefers-color-scheme: dark</code> 自动适配</td></tr>
          <tr><td>响应式布局</td><td>适配桌面和移动端浏览器</td></tr>
          <tr><td>系统字体栈</td><td>无外部字体加载，零延迟渲染</td></tr>
          <tr><td>表格与徽标</td><td>清晰的表格样式和状态徽标</td></tr>
          <tr><td>便携性强</td><td>双击即可在浏览器中打开，无需服务器</td></tr>
        </tbody>
      </table>

      <h2 id="anti-patterns">避免的设计模式</h2>
      <ul>
        <li>不使用渐变背景和非品牌 emoji</li>
        <li>不加载外部资源（Google Fonts、CDN CSS、分析脚本）</li>
        <li>不生成过度冗长的 HTML（目标 &lt; 100KB）</li>
        <li>不使用圆角容器 + 左侧强调色条（AI slop 风格）</li>
      </ul>
    </>} />
  )
}
