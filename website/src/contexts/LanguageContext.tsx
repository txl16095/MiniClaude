import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  zh: {
    // Hero
    'hero.tagline': 'AI CODING ASSISTANT · PURE LOCAL',
    'hero.subtitle1': '本地 AI 编程助手',
    'hero.subtitle2': '智能对话 · 代码生成 · 项目理解',
    'hero.subtitle3': '基于 Claude Code 精简改造',
    'hero.cta.start': '立即开始 →',
    'hero.cta.learn': '了解更多',
    'hero.stats.chat': 'AI 对话',
    'hero.stats.code': '代码生成',
    'hero.stats.files': '文件操作',
    'hero.stats.git': 'Git 集成',
    
    // Features
    'features.title': '核心功能',
    'features.heading1': 'MiniClaude',
    'features.heading2': '能做什么',
    'features.ai.title': 'AI 对话',
    'features.ai.metric': '智能',
    'features.ai.unit': '交互',
    'features.ai.desc': '自然语言交互，理解上下文，支持多模型切换（Sonnet/Opus/Haiku）',
    'features.code.title': '代码生成',
    'features.code.metric': '自动',
    'features.code.unit': '编写',
    'features.code.desc': '创建、修改、重构代码，自动分析项目结构，智能补全',
    'features.files.title': '文件操作',
    'features.files.metric': '完整',
    'features.files.unit': '工具集',
    'features.files.desc': '读写编辑文件，支持语法高亮，文件搜索，内容检索（基于 ripgrep）',
    'features.dev.title': '开发集成',
    'features.dev.metric': '全面',
    'features.dev.unit': '支持',
    'features.dev.desc': 'Shell 命令执行，Git 版本控制，LSP 语言服务，MCP 协议支持',
    'features.tech.runtime': '运行时',
    'features.tech.language': '语言',
    'features.tech.protocol': '协议',
    
    // Comparison
    'comparison.title': '差异对比',
    'comparison.heading1': '与 Claude Code',
    'comparison.heading2': '的区别',
    'comparison.table.feature': '功能特性',
    'comparison.features.core': '核心开发功能',
    'comparison.features.cloud': '云服务集成',
    'comparison.features.telemetry': '遥测数据上报',
    'comparison.features.sync': '设置同步',
    'comparison.features.collab': '团队协作',
    'comparison.features.local': '100% 本地化',
    'comparison.features.lightweight': '轻量级部署',
    'comparison.features.simple': '简化命令集',
    'comparison.stats.lines': '行代码移除',
    'comparison.stats.files': '文件删除',
    'comparison.stats.commands': '命令精简',
    
    // Installation
    'install.title': '安装指南',
    'install.heading1': '快速',
    'install.heading2': '开始',
    'install.platform.windows': 'WINDOWS',
    'install.platform.macos': 'MACOS',
    'install.platform.linux': 'LINUX',
    'install.copy': '复制',
    'install.copied': '已复制',
    'install.req.runtime': '运行时',
    'install.req.system': '系统',
    'install.req.apikey': 'API 密钥',
    
    // Footer
    'footer.desc': '轻量级本地 AI 编程助手\n基于 Claude Code 精简改造',
    'footer.links': '链接',
    'footer.based': '基于',
    'footer.copyright': '© 2026 MINICLAUDE · 非 ANTHROPIC 官方项目',
    'footer.disclaimer': '⚠ 本项目不是 Anthropic 的官方项目，未经 Anthropic 授权或认可。\n使用本项目需自行承担风险，仅供学习和研究使用。'
  },
  en: {
    // Hero
    'hero.tagline': 'AI CODING ASSISTANT · PURE LOCAL',
    'hero.subtitle1': 'Local AI Coding Assistant',
    'hero.subtitle2': 'Smart Chat · Code Generation · Project Understanding',
    'hero.subtitle3': 'Based on Claude Code Streamlined',
    'hero.cta.start': 'GET STARTED →',
    'hero.cta.learn': 'LEARN MORE',
    'hero.stats.chat': 'AI CHAT',
    'hero.stats.code': 'CODE GEN',
    'hero.stats.files': 'FILE OPS',
    'hero.stats.git': 'GIT INTEGRATION',
    
    // Features
    'features.title': 'CORE FEATURES',
    'features.heading1': 'WHAT MINICLAUDE',
    'features.heading2': 'CAN DO',
    'features.ai.title': 'AI CHAT',
    'features.ai.metric': 'SMART',
    'features.ai.unit': 'INTERACTION',
    'features.ai.desc': 'Natural language interaction, context understanding, multi-model support (Sonnet/Opus/Haiku)',
    'features.code.title': 'CODE GEN',
    'features.code.metric': 'AUTO',
    'features.code.unit': 'CODING',
    'features.code.desc': 'Create, modify, refactor code, auto project analysis, intelligent completion',
    'features.files.title': 'FILE OPS',
    'features.files.metric': 'COMPLETE',
    'features.files.unit': 'TOOLSET',
    'features.files.desc': 'Read/write/edit files, syntax highlighting, file search, content retrieval (ripgrep-based)',
    'features.dev.title': 'DEV INTEGRATION',
    'features.dev.metric': 'FULL',
    'features.dev.unit': 'SUPPORT',
    'features.dev.desc': 'Shell command execution, Git version control, LSP language service, MCP protocol support',
    'features.tech.runtime': 'RUNTIME',
    'features.tech.language': 'LANGUAGE',
    'features.tech.protocol': 'PROTOCOL',
    
    // Comparison
    'comparison.title': 'COMPARISON',
    'comparison.heading1': 'VS CLAUDE',
    'comparison.heading2': 'CODE',
    'comparison.table.feature': 'FEATURE',
    'comparison.features.core': 'Core Development Features',
    'comparison.features.cloud': 'Cloud Service Integration',
    'comparison.features.telemetry': 'Telemetry Data Reporting',
    'comparison.features.sync': 'Settings Sync',
    'comparison.features.collab': 'Team Collaboration',
    'comparison.features.local': '100% Local',
    'comparison.features.lightweight': 'Lightweight Deployment',
    'comparison.features.simple': 'Simplified Commands',
    'comparison.stats.lines': 'LINES REMOVED',
    'comparison.stats.files': 'FILES DELETED',
    'comparison.stats.commands': 'COMMANDS CUT',
    
    // Installation
    'install.title': 'INSTALLATION',
    'install.heading1': 'GET',
    'install.heading2': 'STARTED',
    'install.platform.windows': 'WINDOWS',
    'install.platform.macos': 'MACOS',
    'install.platform.linux': 'LINUX',
    'install.copy': 'COPY',
    'install.copied': 'COPIED',
    'install.req.runtime': 'RUNTIME',
    'install.req.system': 'SYSTEM',
    'install.req.apikey': 'API KEY',
    
    // Footer
    'footer.desc': 'Lightweight Local AI Coding Assistant\nBased on Claude Code Streamlined',
    'footer.links': 'LINKS',
    'footer.based': 'BASED ON',
    'footer.copyright': '© 2026 MINICLAUDE · NOT AFFILIATED WITH ANTHROPIC',
    'footer.disclaimer': '⚠ This project is not an official Anthropic project and is not authorized or endorsed by Anthropic.\nUse at your own risk, for learning and research purposes only.'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
