import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 品牌 */}
          <div>
            <div className="font-display text-3xl mb-4">
              MINI<span className="text-accent">CLAUDE</span>
            </div>
            <p className="font-mono text-sm text-white/50 leading-relaxed whitespace-pre-line">
              {t('footer.desc')}
            </p>
          </div>

          {/* 链接 */}
          <div>
            <div className="font-mono text-xs text-white/50 mb-4 tracking-wider">{t('footer.links')}</div>
            <ul className="space-y-2">
              {[
                { label: 'GITHUB', href: 'https://github.com/txl16095/MiniClaude' },
                { label: 'ISSUES', href: 'https://github.com/txl16095/MiniClaude/issues' },
                { label: 'BUN', href: 'https://bun.sh' }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    {link.label}
                    <span className="text-xs">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 相关 */}
          <div>
            <div className="font-mono text-xs text-white/50 mb-4 tracking-wider">{t('footer.based')}</div>
            <ul className="space-y-2">
              {[
                { label: 'FREE-CODE', href: 'https://github.com/paoloanzn/free-code' },
                { label: 'CLAUDE CODE', href: 'https://docs.anthropic.com/en/docs/claude-code' },
                { label: 'ANTHROPIC', href: 'https://www.anthropic.com' }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    {link.label}
                    <span className="text-xs">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部 */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-xs text-white/50">
              {t('footer.copyright')}
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/txl16095/MiniClaude"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white/50 hover:text-accent transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://github.com/txl16095/MiniClaude/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white/50 hover:text-accent transition-colors"
              >
                LICENSE
              </a>
            </div>
          </div>
        </div>

        {/* 免责声明 */}
        <div className="mt-8 p-6 border border-white/10 bg-white/5">
          <p className="font-mono text-xs text-white/50 text-center leading-relaxed whitespace-pre-line">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  )
}
