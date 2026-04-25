import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const commands = {
  windows: `git clone https://github.com/txl16095/MiniClaude.git
cd MiniClaude
copy .env.example .env
bun run build
start.bat`,
  macos: `git clone https://github.com/txl16095/MiniClaude.git
cd MiniClaude
cp .env.example .env
bun run build
./cli`,
  linux: `git clone https://github.com/txl16095/MiniClaude.git
cd MiniClaude
cp .env.example .env
bun run build
./cli`
}

export default function Installation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [platform, setPlatform] = useState<keyof typeof commands>('windows')
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()

  const platforms = [
    { id: 'windows', label: t('install.platform.windows') },
    { id: 'macos', label: t('install.platform.macos') },
    { id: 'linux', label: t('install.platform.linux') }
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[platform])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="installation" ref={ref} className="relative py-32 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 border border-white/20 mb-6">
            <span className="font-mono text-sm tracking-wider">{t('install.title')}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            {t('install.heading1')}
            <br />
            <span className="text-accent">{t('install.heading2')}</span>
          </h2>
        </motion.div>

        {/* 平台选择 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 mb-8"
        >
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setPlatform(p.id as keyof typeof commands)}
              className={`px-6 py-3 font-mono text-sm tracking-wider transition-all ${
                platform === p.id
                  ? 'bg-accent text-black'
                  : 'border border-white/20 text-white hover:border-white/50'
              }`}
            >
              {p.label}
            </button>
          ))}
        </motion.div>

        {/* 代码块 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative border border-white/20 bg-black"
        >
          {/* 顶部栏 */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 border border-white/30" />
              <div className="w-3 h-3 border border-white/30" />
              <div className="w-3 h-3 border border-white/30" />
            </div>
            <button
              onClick={handleCopy}
              className="px-4 py-1 border border-white/20 font-mono text-xs tracking-wider hover:bg-white/5 transition-colors"
            >
              {copied ? t('install.copied') : t('install.copy')}
            </button>
          </div>

          {/* 代码内容 */}
          <div className="p-6 md:p-8">
            <pre className="font-mono text-sm md:text-base text-accent leading-relaxed overflow-x-auto">
              {commands[platform]}
            </pre>
          </div>

          {/* 角落装饰 */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />
        </motion.div>

        {/* 系统要求 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10"
        >
          {[
            { label: t('install.req.runtime'), value: 'BUN >= 1.3.11' },
            { label: t('install.req.system'), value: 'WIN / MAC / LINUX' },
            { label: t('install.req.apikey'), value: 'ANTHROPIC' }
          ].map((req, i) => (
            <div key={i} className="bg-black p-6 text-center">
              <div className="font-mono text-xs text-white/50 mb-2 tracking-wider">
                {req.label}
              </div>
              <div className="font-display text-lg">
                {req.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
