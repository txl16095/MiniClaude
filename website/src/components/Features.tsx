import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t, language } = useLanguage()

  const features = [
    {
      title: t('features.stripped.title'),
      metric: t('features.stripped.metric'),
      unit: t('features.stripped.unit'),
      description: t('features.stripped.desc')
    },
    {
      title: t('features.local.title'),
      metric: t('features.local.metric'),
      unit: t('features.local.unit'),
      description: t('features.local.desc')
    },
    {
      title: t('features.fast.title'),
      metric: t('features.fast.metric'),
      unit: t('features.fast.unit'),
      description: t('features.fast.desc')
    },
    {
      title: t('features.pure.title'),
      metric: t('features.pure.metric'),
      unit: t('features.pure.unit'),
      description: t('features.pure.desc')
    }
  ]

  return (
    <section id="features" ref={ref} className="relative py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-2 border border-white/20 mb-6">
            <span className="font-mono text-sm tracking-wider">{t('features.title')}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            {t('features.heading1')}
            <br />
            <span className="text-accent">{t('features.heading2')}</span>
          </h2>
        </motion.div>

        {/* 特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-black p-8 md:p-12 hover:bg-white/5 transition-colors"
            >
              {/* 角落标记 */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-6">
                <div className="font-mono text-xs text-white/50 mb-2 tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">
                  {feature.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl md:text-6xl text-accent">
                    {feature.metric}
                  </span>
                  <span className="font-mono text-sm text-white/50">
                    {feature.unit}
                  </span>
                </div>
              </div>
              
              <p className="font-mono text-sm text-white/70 leading-relaxed">
                {feature.description}
              </p>

              {/* 底部线条 */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* 技术栈 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 border border-white/20 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-mono text-xs text-white/50 mb-2 tracking-wider">{t('features.tech.runtime')}</div>
              <div className="font-display text-2xl">BUN</div>
            </div>
            <div>
              <div className="font-mono text-xs text-white/50 mb-2 tracking-wider">{t('features.tech.language')}</div>
              <div className="font-display text-2xl">TYPESCRIPT</div>
            </div>
            <div>
              <div className="font-mono text-xs text-white/50 mb-2 tracking-wider">{t('features.tech.protocol')}</div>
              <div className="font-display text-2xl">MCP · LSP</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
