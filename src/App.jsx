import { useState } from 'react'
import './index.css'
import {
  Link,
  FileText,
  Users,
  MessageCircle,
  Search,
  Zap,
  Sparkles
} from 'lucide-react'
import SmartLinkTab from './components/SmartLinkTab'
import InvoiceModeTab from './components/InvoiceModeTab'
import CSRotatorTab from './components/CSRotatorTab'
import FloatingWidgetTab from './components/FloatingWidgetTab'
import LinkCardCheckerTab from './components/LinkCardCheckerTab'
import PhonePreview from './components/PhonePreview'
import N1StackLogo from './assets/Group40.svg'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [previewData, setPreviewData] = useState({
    type: 'message',
    content: '',
    phone: '',
    linkPreview: null
  })

  const tabs = [
    { icon: Link, label: 'Smart Link', shortLabel: 'Smart Link' },
    { icon: FileText, label: 'Invoice Mode', shortLabel: 'Invoice' },
    { icon: Users, label: 'CS Rotator', shortLabel: 'Rotator' },
    { icon: MessageCircle, label: 'Widget Baker', shortLabel: 'Widget' },
    { icon: Search, label: 'Link Checker', shortLabel: 'Checker' },
  ]

  // Tab descriptions - copywriting for each feature
  const tabDescriptions = [
    {
      title: "🔗 Smart Link Generator",
      subtitle: "Generate WhatsApp Click-to-Chat Links Instantly",
      description: "Create professional wa.me links with pre-filled messages. Perfect for marketing campaigns, landing pages, and social media bio. Our built-in Safe-Send Analyzer helps you avoid WhatsApp bans by detecting spammy words and excessive caps.",
      howTo: [
        "Select your country code from the dropdown",
        "Enter the phone number (without leading 0)",
        "Write your message template using *bold*, _italic_, or ~strikethrough~",
        "Monitor the Safe-Send score to keep messages authentic",
        "Copy the generated link and use it anywhere!"
      ]
    },
    {
      title: "📋 Invoice Mode",
      subtitle: "Professional Invoice Messages for WhatsApp",
      description: "Create beautiful, formatted invoice messages instantly. Add multiple items with quantity and pricing, include your bank details, and generate a professional invoice message ready to send to clients via WhatsApp.",
      howTo: [
        "Add your products/services with quantity and price",
        "The total will be calculated automatically",
        "Enter your bank account details for payment",
        "Click 'Copy Invoice Message' to copy the formatted invoice",
        "Paste directly into any WhatsApp chat!"
      ]
    },
    {
      title: "👥 CS Rotator",
      subtitle: "Distribute Leads Automatically to Your Team",
      description: "Never miss a lead again! Create a single WhatsApp link that automatically rotates between multiple customer service agents. Perfect for businesses with multiple CS staff, ensuring fair lead distribution and faster response times.",
      howTo: [
        "Add multiple CS agent phone numbers",
        "Customize the greeting message template",
        "Set rotation mode (round-robin or random)",
        "Share the single generated link everywhere",
        "Each click goes to a different agent automatically!"
      ]
    },
    {
      title: "💬 Floating Widget",
      subtitle: "Add WhatsApp Chat Button to Any Website",
      description: "Generate a beautiful floating WhatsApp button for your website. No coding required! Just customize the appearance, copy the code, and paste it into your website. Works with WordPress, Shopify, Wix, and any HTML website.",
      howTo: [
        "Enter your WhatsApp number and welcome message",
        "Customize button color, position, and animation",
        "Preview how it will look on your site",
        "Copy the generated embed code",
        "Paste before </body> tag on your website!"
      ]
    },
    {
      title: "🔍 Link Card Checker",
      subtitle: "Preview Your Link's WhatsApp Appearance",
      description: "See exactly how your links will appear when shared on WhatsApp before posting. Check Open Graph tags, preview the link card image, and get optimization tips to maximize engagement when your links are shared.",
      howTo: [
        "Paste any URL you want to check",
        "Click 'Check' to fetch the metadata",
        "Review the title, description, and image preview",
        "Check optimization tips for improvements",
        "Fix any issues on your website for better previews!"
      ]
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <SmartLinkTab setPreviewData={setPreviewData} />
      case 1:
        return <InvoiceModeTab setPreviewData={setPreviewData} />
      case 2:
        return <CSRotatorTab setPreviewData={setPreviewData} />
      case 3:
        return <FloatingWidgetTab setPreviewData={setPreviewData} />
      case 4:
        return <LinkCardCheckerTab setPreviewData={setPreviewData} />
      default:
        return <SmartLinkTab setPreviewData={setPreviewData} />
    }
  }

  const currentDescription = tabDescriptions[activeTab]

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Ambient Glow Effects */}
      <div className="ambient-glow ambient-glow-top-left"></div>
      <div className="ambient-glow ambient-glow-bottom-right"></div>
      <div className="ambient-glow ambient-glow-top-right"></div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md sticky top-0 transition-all duration-300">
        <div className="container-padded header-container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4FF00] to-[#9EFF00] flex items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.3)]">
              <Zap className="w-5 h-5 text-black" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                PULSE LINK
                <Sparkles className="w-4 h-4 text-[#D4FF00]" />
              </h1>
              <p className="text-xs text-slate-500 flex items-center gap-1">by <img src={N1StackLogo} alt="N1STACK" className="h-4 brightness-0 invert opacity-60" /></p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium tracking-wide">PREMIUM WHATSAPP UTILITY</span>
            <div className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse shadow-[0_0_10px_#D4FF00]"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {/* Main Content */}
      {/* Main Content */}
      {/* Main Content */}
      {/* Main Content */}
      <main className="relative z-10 flex-1 container-padded pb-12 lg:pb-32" style={{ paddingTop: '60px' }}>
        {/* Top Description Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto py-8 border-b border-white/5 gap-4" style={{ marginTop: '20px', marginBottom: '60px' }}>
          <h3 className="text-4xl font-bold text-white mb-2">{currentDescription.title}</h3>
          <p className="text-[#D4FF00] font-medium mb-4 text-xl tracking-wide">{currentDescription.subtitle}</p>
          <p className="text-slate-400 leading-relaxed text-lg max-w-4xl">{currentDescription.description}</p>

          {/* How to Use Card - balanced padding */}
          <div
            className="bg-white/5 rounded-3xl border border-white/5 max-w-5xl w-full text-left shadow-xl backdrop-blur-sm"
            style={{ padding: '32px', paddingBottom: '40px', marginTop: '16px' }}
          >
            <h4 className="text-white font-semibold flex items-center justify-center gap-3 text-lg" style={{ marginBottom: '40px' }}>
              <span className="w-6 h-6 rounded-full bg-[#D4FF00]/20 flex items-center justify-center text-[#D4FF00] text-sm">?</span>
              How to Use
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ padding: '0 16px 16px 16px' }}>
              {currentDescription.howTo.map((step, index) => (
                <div key={index} className="flex gap-3 text-sm items-start">
                  <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[#D4FF00] text-xs font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-400">{step}</span>
                </div>
              ))}
            </div>

            {/* Mobile Tip Note */}
            <div
              className="bg-slate-800/50 rounded-xl border border-slate-700/50 flex items-center gap-4"
              style={{ margin: '24px 20px 0 20px', padding: '20px' }}
            >
              <span className="text-xl flex-shrink-0">📱</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="text-[#D4FF00] font-medium">Tips untuk pengguna mobile:</span> Untuk pengalaman terbaik, aktifkan mode <strong className="text-white">"Situs Desktop"</strong> di pengaturan browser Anda.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
          {/* Left Side - Form Content */}
          <div className="flex-1 flex flex-col gap-8 min-w-0 order-1">


            {/* Tabs Navigation */}
            <nav className="glass-card tab-nav flex gap-1 overflow-x-auto scrollbar-hide">
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
            <div className="glass-card content-card flex-1 overflow-y-auto shadow-2xl">
              {renderTabContent()}
            </div>
          </div>

          {/* Right Side - Phone Preview (shows below form on mobile) */}
          <div className="order-2 w-full lg:w-auto flex justify-center lg:block">
            <PhonePreview previewData={previewData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#020617] mt-auto">
        <div className="container-padded footer-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Powered by</span>
            <img src={N1StackLogo} alt="N1STACK" className="h-4 brightness-0 invert opacity-60" />
          </div>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <span className="text-xs text-slate-600">© 2024 All Rights Reserved</span>
        </div>
      </footer>
    </div>
  )
}

export default App
