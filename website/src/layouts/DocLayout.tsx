import { useState, useCallback } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import SearchModal from '../components/SearchModal'
import { useLanguage } from '../contexts/LanguageContext'

export default function DocLayout() {
  const [searchOpen, setSearchOpen] = useState(false)
  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="min-h-screen bg-dark text-light font-mono">
      {/* Header */}
      <header className="sticky top-0 z-40 h-14 border-b border-white/10 bg-dark/95 backdrop-blur-sm flex items-center px-4 gap-4">
        <Link to="/" className="text-accent font-display text-lg tracking-wide shrink-0">
          MINICLAUDE
        </Link>
        <span className="text-xs text-white/30 hidden sm:inline">/</span>
        <Link to="/guide/quick-start" className="text-xs text-white/50 hover:text-white hidden sm:inline transition-colors">
          {t('nav.guide')}
        </Link>
        <span className="text-xs text-white/30 hidden sm:inline">/</span>
        <Link to="/features/commands" className="text-xs text-white/50 hover:text-white hidden sm:inline transition-colors">
          {t('nav.features')}
        </Link>

        <div className="flex-1" />

        {/* Search trigger */}
        <button
          onClick={openSearch}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-white/40 border border-white/20 hover:border-white/40 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="hidden sm:inline">{t('search.placeholder')}</span>
          <kbd className="text-xs text-white/20 hidden lg:inline">Ctrl+K</kbd>
        </button>

        <div className="flex gap-1 shrink-0">
          <button
            onClick={() => setLanguage('zh')}
            className={`px-2 py-1 text-[10px] font-mono tracking-wider border transition-colors ${language === 'zh' ? 'bg-accent text-black border-accent' : 'border-white/20 text-white/50 hover:text-white hover:border-white/40'}`}
          >
            中文
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 text-[10px] font-mono tracking-wider border transition-colors ${language === 'en' ? 'bg-accent text-black border-accent' : 'border-white/20 text-white/50 hover:text-white hover:border-white/40'}`}
          >
            EN
          </button>
        </div>
      </header>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>

      <SearchModal open={searchOpen} onClose={closeSearch} />
    </div>
  )
}
