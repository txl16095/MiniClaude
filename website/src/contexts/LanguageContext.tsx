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
    'hero.tagline': 'LOCAL · LIGHTWEIGHT · PRIVATE',
    'hero.subtitle1': '一个二进制文件',
    'hero.subtitle2': '零云端回调',
    'hero.subtitle3': '44,700 行代码精简',
    'hero.cta.start': '立即开始 →',
    'hero.cta.learn': '了解更多',
    'hero.stats.lines': '行代码移除',
    'hero.stats.files': '文件删除',
    'hero.stats.commands': '命令精简',
    'hero.stats.local': '本地化',
    
    // Features
    'features.title': '核心特性',
    'features.heading1': '为开发者',
    'features.heading2': '打造',
    'features.stripped.title': '精简',
    'features.stripped.metric': '44,700',
    'features.stripped.unit': '行代码',
    'features.stripped.desc': '移除所有云服务代码，只保留核心功能',
    'features.local.title': '本地',
    'features.local.metric': '100%',
    'features.local.unit': '隐私',
    'features.local.desc': '零云端回调，所有数据完全本地处理',
    'features.fast.title': '快速',
    'features.fast.metric': '<1',
    'features.fast.unit': '分钟',
    'features.fast.desc': '一个二进制文件，无需复杂配置',
    'features.pure.title': '纯粹',
    'features.pure.metric': '39',
    'features.pure.unit': '命令',
    'features.pure.desc': '精简命令集，专注开发者需求',
    'features.tech.runtime': '运行时',
    'features.tech.language': '语言',
    'features.tech.protocol': '协议',
    
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
    'hero.tagline': 'LOCAL · LIGHTWEIGHT · PRIVATE',
    'hero.subtitle1': 'One Binary File',
    'hero.subtitle2': 'Zero Cloud Callbacks',
    'hero.subtitle3': '44,700 Lines Stripped',
    'hero.cta.start': 'GET STARTED →',
    'hero.cta.learn': 'LEARN MORE',
    'hero.stats.lines': 'LINES REMOVED',
    'hero.stats.files': 'FILES DELETED',
    'hero.stats.commands': 'COMMANDS CUT',
    'hero.stats.local': 'LOCAL',
    
    // Features
    'features.title': 'CORE FEATURES',
    'features.heading1': 'BUILT FOR',
    'features.heading2': 'DEVELOPERS',
    'features.stripped.title': 'STRIPPED',
    'features.stripped.metric': '44,700',
    'features.stripped.unit': 'LINES',
    'features.stripped.desc': 'Removed all cloud service code, keeping only core features',
    'features.local.title': 'LOCAL',
    'features.local.metric': '100%',
    'features.local.unit': 'PRIVACY',
    'features.local.desc': 'Zero cloud callbacks, all data processed locally',
    'features.fast.title': 'FAST',
    'features.fast.metric': '<1',
    'features.fast.unit': 'MINUTE',
    'features.fast.desc': 'One binary file, no complex configuration',
    'features.pure.title': 'PURE',
    'features.pure.metric': '39',
    'features.pure.unit': 'COMMANDS',
    'features.pure.desc': 'Streamlined command set, focused on developer needs',
    'features.tech.runtime': 'RUNTIME',
    'features.tech.language': 'LANGUAGE',
    'features.tech.protocol': 'PROTOCOL',
    
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
