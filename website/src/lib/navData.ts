export interface NavItem {
  title: string
  path: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const sidebarNav: NavSection[] = [
  {
    title: '快速开始',
    items: [
      { title: '安装与启动', path: '/guide/quick-start' },
      { title: '环境变量', path: '/guide/env-vars' },
      { title: '第三方模型', path: '/guide/third-party-models' },
      { title: '全局使用', path: '/guide/global-usage' },
      { title: '常见问题', path: '/guide/faq' },
    ],
  },
  {
    title: '功能指南',
    items: [
      { title: '命令大全', path: '/features/commands' },
      { title: '工具详解', path: '/features/tools' },
      { title: 'hard_deny 安全规则', path: '/features/hard-deny' },
      { title: 'HTML 输出', path: '/features/html-output' },
      { title: '技能系统', path: '/features/skills' },
      { title: 'MCP 协议', path: '/features/mcp' },
    ],
  },
  {
    title: '参考',
    items: [
      { title: '项目结构', path: '/reference/project-structure' },
      { title: '与原版的差异', path: '/reference/differences' },
    ],
  },
]

// Build-time: flatten all pages into searchable entries
export interface SearchEntry {
  title: string
  path: string
  section: string
  content: string
}

export const searchIndex: SearchEntry[] = [
  {
    title: '安装与启动',
    path: '/guide/quick-start',
    section: '快速开始',
    content:
      '安装Bun macOS Linux Windows Homebrew 安装依赖 bun install 配置 .env.example API Key 启动 ./cli bun 全局使用 PATH 降级模式 CLAUDE_CODE_FORCE_RECOVERY_CLI',
  },
  {
    title: '环境变量',
    path: '/guide/env-vars',
    section: '快速开始',
    content:
      'ANTHROPIC_API_KEY 必需 ANTHROPIC_BASE_URL 自定义端点 ANTHROPIC_MODEL 默认模型 HTTP_PROXY HTTPS_PROXY DEBUG 代理配置 模型选择',
  },
  {
    title: '第三方模型',
    path: '/guide/third-party-models',
    section: '快速开始',
    content:
      'DeepSeek OpenAI 兼容 API 自定义 BASE_URL 模型切换 deepseek-v4-pro deepseek-r1 claude-opus gpt 多模型支持 环境变量配置',
  },
  {
    title: '全局使用',
    path: '/guide/global-usage',
    section: '快速开始',
    content:
      'PATH 环境变量 全局命令 任意目录启动 bin 目录 符号链接 终端集成 快速访问',
  },
  {
    title: '常见问题',
    path: '/guide/faq',
    section: '快速开始',
    content:
      'FAQ 常见问题 故障排除 启动失败 权限问题 模型响应慢 构建错误 roadblock 配置不生效',
  },
  {
    title: '命令大全',
    path: '/features/commands',
    section: '功能指南',
    content:
      '/help 帮助 /clear 清空 /exit 退出 /config 配置 /model 切换模型 /theme 主题 /files 文件 /add-dir 添加目录 /mcp MCP /skills 技能 /tasks 任务 /hooks 钩子 /permissions 权限 /vim Vim模式 /compact 压缩 /review 审查 /stats 统计 /status 状态 /fast 快速模式 /effort 努力级别 /copy 复制 /doctor 诊断 /diff 差异 /init 初始化 /pr_comments PR评论 /plan 计划 /export 导出 /rename 重命名',
  },
  {
    title: '工具详解',
    path: '/features/tools',
    section: '功能指南',
    content:
      'FileRead FileWrite FileEdit Glob Grep Bash PowerShell WebFetch WebSearch AgentTool SkillTool MCPTool TaskCreate TaskStop NotebookEdit AskUserQuestion 读文件 写文件 编辑文件 搜索文件 内容搜索 命令执行 网络请求 子代理',
  },
  {
    title: 'hard_deny 安全规则',
    path: '/features/hard-deny',
    section: '功能指南',
    content:
      '无条件禁止 安全拦截 管道级阻断 settings.json autoMode 配置 防误删 敏感文件保护 网络风险阻断 合规策略 自动模式安全网 权限系统对比',
  },
  {
    title: 'HTML 输出',
    path: '/features/html-output',
    section: '功能指南',
    content:
      'HTML 报告 自包含 暗色模式 响应式布局 /html-output 技能 复杂分析 代码审查报告 架构方案 CSS变量 prefers-color-scheme 浏览器打开 无外部依赖',
  },
  {
    title: '技能系统',
    path: '/features/skills',
    section: '功能指南',
    content:
      'Skills 技能 自定义技能 SKILL.md registerBundledSkill simplify html-output debug batch stuck verify 可复用工作流 提示模板',
  },
  {
    title: 'MCP 协议',
    path: '/features/mcp',
    section: '功能指南',
    content:
      'MCP Model Context Protocol mcpServers stdio SSE HTTP WebSocket chrome-devtools jadx-mcp kali-docker 工具扩展 服务器配置',
  },
  {
    title: '项目结构',
    path: '/reference/project-structure',
    section: '参考',
    content:
      'src 目录 entrypoints commands tools components services utils skills plugins 源代码结构 架构 模块组织 CLI入口',
  },
  {
    title: '与原版的差异',
    path: '/reference/differences',
    section: '参考',
    content:
      '精简 删除92000行 云服务移除 OAuth 遥测 设置同步 协作功能 实验功能 速率限制 保留核心功能 硬盘占用 依赖数量 对比表格',
  },
]
