import { LanguageProvider } from './contexts/LanguageContext'
import LanguageToggle from './components/LanguageToggle'
import Hero from './components/Hero'
import Features from './components/Features'
import Comparison from './components/Comparison'
import Installation from './components/Installation'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <LanguageToggle />
        <Hero />
        <Features />
        <Comparison />
        <Installation />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
