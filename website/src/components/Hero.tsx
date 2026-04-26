import { motion } from 'motion/react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* 背景几何图形 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-white" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-white" />
        <div className="absolute top-0 left-0 w-px h-full bg-white" />
        <div className="absolute top-0 right-0 w-px h-full bg-white" />
        
        {/* 对角线 */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 左侧：主标题 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <div className="inline-block px-4 py-2 border border-white/20 mb-6">
                <span className="font-mono text-sm tracking-wider">{t('hero.tagline')}</span>
              </div>
              
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6">
                MINI
                <br />
                <span className="text-accent">CLAUDE</span>
              </h1>
              
              <div className="w-24 h-1 bg-accent mb-8" />
              
              <p className="font-mono text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                {t('hero.subtitle1')}<br />
                {t('hero.subtitle2')}<br />
                {t('hero.subtitle3')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/txl16095/MiniClaude"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-accent text-black font-mono font-bold text-sm tracking-wider overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">{t('hero.cta.start')}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
              
              <a
                href="#features"
                className="px-8 py-4 border-2 border-white text-white font-mono font-bold text-sm tracking-wider hover:bg-white hover:text-black transition-all"
              >
                {t('hero.cta.learn')}
              </a>
            </div>
          </motion.div>

          {/* 右侧：ASCII 艺术 + 代码 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative border border-white/20 p-8 bg-black/50">
              {/* 角落装饰 */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />
              
              <pre className="font-mono text-xs sm:text-sm text-accent leading-relaxed">
{`┌─────────────────────────┐
│  MINICLAUDE v1.0.0     │
├─────────────────────────┤
│                         │
│  ✓ AI Chat & Dialogue   │
│  ✓ Code Generation      │
│  ✓ File Operations      │
│  ✓ Git Integration      │
│  ✓ MCP Protocol         │
│  ✓ Plugin System        │
│                         │
└─────────────────────────┘`}
              </pre>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs text-white/50 mb-2">$ QUICK START</div>
                <code className="block font-mono text-sm text-white">
                  git clone repo<br />
                  bun run build<br />
                  ./cli
                </code>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 底部统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '✓', label: t('hero.stats.chat') },
            { value: '✓', label: t('hero.stats.code') },
            { value: '✓', label: t('hero.stats.files') },
            { value: '✓', label: t('hero.stats.git') }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-accent mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-white/50 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
