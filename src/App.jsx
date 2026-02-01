import { useState, useEffect } from 'react'
import './index.css'
import {
  Link,
  FileText,
  Users,
  MessageCircle,
  Search,
  Zap,
  Sparkles,
  Sun,
  Moon,
  Globe
} from 'lucide-react'
import SmartLinkTab from './components/SmartLinkTab'
import InvoiceModeTab from './components/InvoiceModeTab'
import CSRotatorTab from './components/CSRotatorTab'
import FloatingWidgetTab from './components/FloatingWidgetTab'
import LinkCardCheckerTab from './components/LinkCardCheckerTab'
import PhonePreview from './components/PhonePreview'
import N1StackLogo from './assets/Group40.svg'
import { translations } from './translations'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('en')
  const [previewData, setPreviewData] = useState({
    type: 'message',
    content: '',
    phone: '',
    linkPreview: null
  })

  // Get current translation
  const t = translations[lang]

  // Theme effect
  useEffect(() => {
    const savedTheme = localStorage.getItem('pulse-link-theme') || 'light'
    const savedLang = localStorage.getItem('pulse-link-lang') || 'en'
    setTheme(savedTheme)
    setLang(savedLang)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('pulse-link-theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'id' : 'en'
    setLang(newLang)
    localStorage.setItem('pulse-link-lang', newLang)
  }

  const tabs = [
    { icon: Link, label: t.tabs.smartLink, shortLabel: 'Smart' },
    { icon: FileText, label: t.tabs.invoice, shortLabel: 'Invoice' },
    { icon: Users, label: t.tabs.rotator, shortLabel: 'Rotator' },
    { icon: MessageCircle, label: t.tabs.widget, shortLabel: 'Widget' },
    { icon: Search, label: t.tabs.checker, shortLabel: 'Checker' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <SmartLinkTab setPreviewData={setPreviewData} lang={lang} />
      case 1:
        return <InvoiceModeTab setPreviewData={setPreviewData} lang={lang} />
      case 2:
        return <CSRotatorTab setPreviewData={setPreviewData} lang={lang} />
      case 3:
        return <FloatingWidgetTab setPreviewData={setPreviewData} lang={lang} />
      case 4:
        return <LinkCardCheckerTab setPreviewData={setPreviewData} lang={lang} />
      default:
        return <SmartLinkTab setPreviewData={setPreviewData} lang={lang} />
    }
  }

  const currentDescription = t.descriptions[activeTab]

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Ambient Glow Effects */}
      <div className="ambient-glow ambient-glow-top-left"></div>
      <div className="ambient-glow ambient-glow-bottom-right"></div>
      <div className="ambient-glow ambient-glow-top-right"></div>

      {/* Header */}
      <header
        className="relative z-20 border-b backdrop-blur-md sticky top-0 transition-all duration-300"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-header-bg)'
        }}
      >
        <div className="container-padded header-container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4FF00] to-[#9EFF00] flex items-center justify-center shadow-lg">
              <MessageCircle className="w-5 h-5 text-black" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight flex items-center gap-2" style={{ color: 'var(--color-text-primary)' }}>
                PULSE LINK
                <Sparkles className="w-4 h-4" style={{ color: 'var(--color-neon-lime)' }} />
              </h1>
              <p className="text-xs flex items-center gap-1" style={{ color: 'var(--color-text-muted)' }}>
                by <img src={N1StackLogo} alt="N1STACK" className={`h-4 ${theme === 'dark' ? 'brightness-0 invert opacity-60' : 'opacity-70'}`} />
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--color-surface-alt)',
                border: '1px solid var(--color-border)'
              }}
              title={theme === 'light' ? t.header.darkMode : t.header.lightMode}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} />
              ) : (
                <Sun className="w-5 h-5" style={{ color: 'var(--color-neon-lime)' }} />
              )}
            </button>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 text-xs font-bold"
              style={{
                backgroundColor: 'var(--color-surface-alt)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)'
              }}
              title={lang === 'en' ? 'Bahasa Indonesia' : 'English'}
            >
              {lang.toUpperCase()}
            </button>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--color-text-muted)' }}>{t.header.tagline}</span>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-neon-lime)', boxShadow: '0 0 10px var(--color-neon-lime)' }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 container-padded pb-12 lg:pb-32" style={{ paddingTop: '40px' }}>
        {/* Top Description Section */}
        <div
          className="flex flex-col items-center text-center w-full py-6 gap-3"
          style={{ marginTop: '10px', marginBottom: '40px', borderBottom: '1px solid var(--color-border)' }}
        >
          <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{currentDescription.title}</h3>
          <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--color-neon-lime)' }}>{currentDescription.subtitle}</p>
          <p className="leading-relaxed text-xs sm:text-sm max-w-3xl" style={{ color: 'var(--color-text-secondary)' }}>{currentDescription.description}</p>

          {/* How to Use Card */}
          <div
            className="rounded-2xl max-w-4xl w-full text-center shadow-lg backdrop-blur-sm"
            style={{
              padding: '20px',
              paddingBottom: '24px',
              marginTop: '12px',
              backgroundColor: 'var(--color-surface-alt)',
              border: '1px solid var(--color-border)'
            }}
          >
            <h4
              className="font-semibold flex items-center justify-center gap-2 text-sm"
              style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                style={{ backgroundColor: 'var(--color-neon-lime-bg)', color: 'var(--color-neon-lime)' }}
              >?</span>
              {t.howToUse}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left" style={{ padding: '0 8px 8px 8px' }}>
              {currentDescription.howTo.map((step, index) => (
                <div key={index} className="flex gap-2 text-xs items-start text-left">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-neon-lime)' }}
                  >
                    {index + 1}
                  </span>
                  <span style={{ color: 'var(--color-text-secondary)' }}>{step}</span>
                </div>
              ))}
            </div>

            {/* Mobile Tip Note */}
            <div
              className="rounded-lg flex items-center gap-3"
              style={{
                margin: '12px 8px 0 8px',
                padding: '12px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)'
              }}
            >
              <span className="text-base flex-shrink-0">📱</span>
              <p className="text-[10px] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                <span style={{ color: 'var(--color-neon-lime)' }} className="font-medium">{t.mobileTip}</span> {t.mobileTipText}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full">
          {/* Left Side - Form Content */}
          <div className="w-full lg:flex-1 flex flex-col gap-8 min-w-0 max-w-full overflow-hidden">

            {/* Tabs Navigation */}
            <nav className="glass-card tab-nav flex gap-1 overflow-x-auto scrollbar-hide w-full">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`tab-item whitespace-nowrap flex-shrink-0 sm:flex-1 min-w-fit justify-center ${activeTab === index ? 'active' : ''}`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </button>
              ))}
            </nav>

            {/* Tab Content */}
            <div className="glass-card content-card overflow-y-auto shadow-2xl w-full">
              {renderTabContent()}
            </div>
          </div>

          {/* Right Side - Phone Preview (hidden on mobile) */}
          <PhonePreview previewData={previewData} />
        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 mt-auto transition-all duration-300"
        style={{
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)'
        }}
      >
        <div className="container-padded footer-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.footer.poweredBy}</span>
            <img src={N1StackLogo} alt="N1STACK" className={`h-4 ${theme === 'dark' ? 'brightness-0 invert opacity-60' : 'opacity-70'}`} />
          </div>
          <div className="flex gap-6 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            <a href="#" className="transition-colors" style={{ color: 'var(--color-text-muted)' }}>{t.footer.privacy}</a>
            <a href="#" className="transition-colors" style={{ color: 'var(--color-text-muted)' }}>{t.footer.terms}</a>
            <a href="#" className="transition-colors" style={{ color: 'var(--color-text-muted)' }}>{t.footer.support}</a>
          </div>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.footer.copyright}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
