import Hero from '../components/Hero'
import Features from '../components/Features'
import Comparison from '../components/Comparison'
import Installation from '../components/Installation'
import Footer from '../components/Footer'
import LanguageToggle from '../components/LanguageToggle'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()
  return (
    <div className="relative min-h-screen">
      {/* Header with doc link */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-4">
        <Link
          to="/guide/quick-start"
          className="hidden sm:inline px-3 py-1.5 text-xs text-white/50 border border-white/20 hover:text-white hover:border-white/40 transition-colors font-mono"
        >
          {t('nav.guide')}
        </Link>
        <LanguageToggle />
      </div>
      <Hero />
      <Features />
      <Comparison />
      <Installation />
      <Footer />
    </div>
  )
}
