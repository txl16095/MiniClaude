import Hero from '../components/Hero'
import Features from '../components/Features'
import Comparison from '../components/Comparison'
import Installation from '../components/Installation'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function HomePage() {
  const { t, language, setLanguage } = useLanguage()
  return (
    <div className="relative min-h-screen">
      {/* Header with doc link */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
        <Link
          to="/guide/quick-start"
          className="px-3 py-1.5 text-xs text-white/50 border border-white/20 hover:text-white hover:border-white/40 transition-colors font-mono"
        >
          {t('nav.guide')}
        </Link>
        <div className="flex gap-1">
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
      </div>
      <Hero />
      <Features />
      <Comparison />
      <Installation />
      <Footer />
    </div>
  )
}
