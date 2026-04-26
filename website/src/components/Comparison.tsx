import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  return (
    <section ref={ref} className="relative py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-2 border border-white/20 mb-6">
            <span className="font-mono text-sm tracking-wider">{t('comparison.title')}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            {t('comparison.heading1')}
            <br />
            <span className="text-accent">{t('comparison.heading2')}</span>
          </h2>
        </motion.div>

        {/* 对比表格 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-white/20"
        >
          <div className="grid grid-cols-3 border-b border-white/20 bg-white/5">
            <div className="p-6 font-mono text-xs text-white/50 tracking-wider">
              {t('comparison.table.feature')}
            </div>
            <div className="p-6 font-mono text-xs text-white/50 tracking-wider border-l border-white/20">
              CLAUDE CODE
            </div>
            <div className="p-6 font-mono text-xs text-accent tracking-wider border-l border-white/20">
              MINICLAUDE
            </div>
          </div>

          {[
            { feature: t('comparison.features.core'), claude: '✓', mini: '✓' },
            { feature: t('comparison.features.cloud'), claude: '✓', mini: '✗' },
            { feature: t('comparison.features.telemetry'), claude: '✓', mini: '✗' },
            { feature: t('comparison.features.sync'), claude: '✓', mini: '✗' },
            { feature: t('comparison.features.collab'), claude: '✓', mini: '✗' },
            { feature: t('comparison.features.local'), claude: '✗', mini: '✓' },
            { feature: t('comparison.features.lightweight'), claude: '✗', mini: '✓' },
            { feature: t('comparison.features.simple'), claude: '✗', mini: '✓' }
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 border-b border-white/20 last:border-b-0 hover:bg-white/5 transition-colors"
            >
              <div className="p-6 font-mono text-sm">
                {row.feature}
              </div>
              <div className="p-6 font-mono text-sm border-l border-white/20 text-center">
                {row.claude}
              </div>
              <div className="p-6 font-mono text-sm border-l border-white/20 text-center text-accent">
                {row.mini}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 精简统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="border border-white/20 p-8 text-center">
            <div className="font-display text-5xl text-accent mb-4">44,700</div>
            <div className="font-mono text-xs text-white/50 tracking-wider">
              {t('comparison.stats.lines')}
            </div>
          </div>
          <div className="border border-white/20 p-8 text-center">
            <div className="font-display text-5xl text-accent mb-4">200+</div>
            <div className="font-mono text-xs text-white/50 tracking-wider">
              {t('comparison.stats.files')}
            </div>
          </div>
          <div className="border border-white/20 p-8 text-center">
            <div className="font-display text-5xl text-accent mb-4">39</div>
            <div className="font-mono text-xs text-white/50 tracking-wider">
              {t('comparison.stats.commands')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
