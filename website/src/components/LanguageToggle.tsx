import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-4 py-2 font-mono text-sm tracking-wider transition-all ${
          language === 'zh'
            ? 'bg-accent text-black'
            : 'border border-white/20 text-white hover:border-white/50'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 font-mono text-sm tracking-wider transition-all ${
          language === 'en'
            ? 'bg-accent text-black'
            : 'border border-white/20 text-white hover:border-white/50'
        }`}
      >
        EN
      </button>
    </div>
  )
}
