import MarkdownDoc, { DocStyles } from '../../components/MarkdownDoc'

export default function ProjectStructure() {
  return (
    <MarkdownDoc title="项目结构" description="MiniClaude 源码目录结构和架构说明" content={<>
      <DocStyles />
      <pre><code>{`MiniClaude/
├── src/
│   ├── cli/              # CLI 入口和参数解析
│   ├── commands/          # 斜杠命令实现
│   ├── components/        # Ink 终端 UI 组件
│   ├── hooks/             # React Hooks
│   ├── services/          # 核心服务层
│   │   ├── api/           # AI API 客户端
│   │   ├── mcp/           # MCP 协议实现
│   │   └── lsp/           # LSP 语言服务
│   ├── tools/             # Agent 工具实现
│   ├── utils/             # 工具函数库
│   │   ├── settings/      # 配置系统
│   │   └── permissions/   # 权限系统
│   ├── skills/            # 技能系统
│   │   └── bundled/       # 内置技能
│   └── plugins/           # 插件系统
├── scripts/
│   └── build.ts           # 构建脚本
├── website/               # 官网源码
├── .env.example           # 环境变量模板
└── README.md`}</code></pre>
    </>} />
  )
}
