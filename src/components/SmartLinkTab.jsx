import { useState, useEffect, useRef } from 'react'
import { Link, AlertTriangle, CheckCircle, XCircle, Copy, ExternalLink, Bold, Italic, Strikethrough, ChevronDown } from 'lucide-react'
import { translations } from '../translations'

// Spam keywords to detect
const SPAM_KEYWORDS = ['GRATIS', 'PROMO', 'DISKON', 'KLIK', 'WIN', 'FREE', 'BONUS', 'HADIAH', 'MENANG']
const SPAM_PUNCTUATION = ['!!!', '???', '!?!', '?!?']

// Country codes list
const COUNTRY_CODES = [
    { code: '+62', country: 'Indonesia', iso: 'ID' },
    { code: '+60', country: 'Malaysia', iso: 'MY' },
    { code: '+65', country: 'Singapore', iso: 'SG' },
    { code: '+66', country: 'Thailand', iso: 'TH' },
    { code: '+63', country: 'Philippines', iso: 'PH' },
    { code: '+84', country: 'Vietnam', iso: 'VN' },
    { code: '+91', country: 'India', iso: 'IN' },
    { code: '+86', country: 'China', iso: 'CN' },
    { code: '+81', country: 'Japan', iso: 'JP' },
    { code: '+82', country: 'South Korea', iso: 'KR' },
    { code: '+61', country: 'Australia', iso: 'AU' },
    { code: '+1', country: 'USA/Canada', iso: 'US' },
    { code: '+44', country: 'United Kingdom', iso: 'GB' },
    { code: '+49', country: 'Germany', iso: 'DE' },
    { code: '+33', country: 'France', iso: 'FR' },
    { code: '+31', country: 'Netherlands', iso: 'NL' },
    { code: '+971', country: 'UAE', iso: 'AE' },
    { code: '+966', country: 'Saudi Arabia', iso: 'SA' },
    { code: '+55', country: 'Brazil', iso: 'BR' },
    { code: '+52', country: 'Mexico', iso: 'MX' },
]

const SmartLinkTab = ({ setPreviewData, lang = 'en' }) => {
    const t = translations[lang].smartLink
    const [countryCode, setCountryCode] = useState('+62')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [spamScore, setSpamScore] = useState(0)
    const [copied, setCopied] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const textareaRef = useRef(null)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Calculate spam score in real-time
    useEffect(() => {
        let score = 0
        const upperMessage = message.toUpperCase()

        // Check for caps lock usage
        if (message.length > 10) {
            const upperCount = (message.match(/[A-Z]/g) || []).length
            const letterCount = (message.match(/[a-zA-Z]/g) || []).length
            if (letterCount > 0) {
                const capsPercentage = (upperCount / letterCount) * 100
                if (capsPercentage > 40) {
                    score += 40
                }
            }
        }

        // Check for spam keywords
        SPAM_KEYWORDS.forEach(keyword => {
            if (upperMessage.includes(keyword)) {
                score += 15
            }
        })

        // Check for spam punctuation
        SPAM_PUNCTUATION.forEach(punct => {
            if (message.includes(punct)) {
                score += 10
            }
        })

        // Cap at 100
        setSpamScore(Math.min(score, 100))
    }, [message])

    // Update preview data
    useEffect(() => {
        const fullPhone = countryCode + phone.replace(/^0+/, '')
        setPreviewData({
            type: 'message',
            content: message,
            phone: fullPhone,
            linkPreview: null
        })
    }, [message, phone, countryCode, setPreviewData])

    const getSpamIndicator = () => {
        if (spamScore <= 30) {
            return {
                className: 'spam-safe',
                icon: <CheckCircle className="w-5 h-5" />,
                text: t.safeNatural,
                subtext: t.safeSubtext
            }
        } else if (spamScore <= 70) {
            return {
                className: 'spam-warning',
                icon: <AlertTriangle className="w-5 h-5" />,
                text: t.warningText,
                subtext: t.warningSubtext
            }
        } else {
            return {
                className: 'spam-danger',
                icon: <XCircle className="w-5 h-5" />,
                text: t.dangerText,
                subtext: t.dangerSubtext
            }
        }
    }

    const insertFormatting = (prefix, suffix) => {
        const textarea = textareaRef.current
        if (!textarea) return

        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const selectedText = message.substring(start, end)

        if (selectedText) {
            const newMessage = message.substring(0, start) + prefix + selectedText + suffix + message.substring(end)
            setMessage(newMessage)
        } else {
            const newMessage = message.substring(0, start) + prefix + suffix + message.substring(end)
            setMessage(newMessage)
            // Move cursor between prefix and suffix
            setTimeout(() => {
                textarea.selectionStart = textarea.selectionEnd = start + prefix.length
                textarea.focus()
            }, 0)
        }
    }

    const generateLink = () => {
        const cleanPhone = phone.replace(/^0+/, '').replace(/\D/g, '')
        const fullPhone = countryCode.replace('+', '') + cleanPhone
        const encodedMessage = encodeURIComponent(message)
        return `https://wa.me/${fullPhone}?text=${encodedMessage}`
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateLink())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const openLink = () => {
        window.open(generateLink(), '_blank')
    }

    const selectedCountry = COUNTRY_CODES.find(c => c.code === countryCode) || COUNTRY_CODES[0]
    const indicator = getSpamIndicator()

    return (
        <div className="space-y-6">
            {/* Header - Removed as it's now global */}

            {/* Phone Input with Country Code Selector */}

            {/* Phone Input with Country Code Selector */}
            <div>
                <label className="label">{t.phoneNumber}</label>
                <div className="flex flex-col sm:flex-row gap-2">
                    {/* Country Code Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            className="input-field flex items-center gap-2 w-full sm:w-auto sm:min-w-[140px] justify-between cursor-pointer"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <span className="flex items-center gap-2">
                                <img
                                    src={`https://flagcdn.com/24x18/${selectedCountry.iso.toLowerCase()}.png`}
                                    alt={selectedCountry.country}
                                    className="w-6 h-4 object-cover rounded-sm"
                                />
                                <span>{selectedCountry.code}</span>
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                        </button>

                        {showDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-full sm:w-64 max-h-64 overflow-y-auto glass-card border border-white/10 rounded-lg z-50">
                                {COUNTRY_CODES.map((country) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors text-left"
                                        onClick={() => {
                                            setCountryCode(country.code)
                                            setShowDropdown(false)
                                        }}
                                    >
                                        <img
                                            src={`https://flagcdn.com/24x18/${country.iso.toLowerCase()}.png`}
                                            alt={country.country}
                                            className="w-6 h-4 object-cover rounded-sm"
                                        />
                                        <span className="text-white font-medium">{country.code}</span>
                                        <span className="text-slate-400 text-sm">{country.country}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Phone Number Input */}
                    <input
                        type="text"
                        className="input-field flex-1"
                        placeholder="812 3456 7890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <p className="text-xs text-slate-500 mt-2">{t.phoneHint}</p>
            </div>

            {/* Message Input with Toolbar */}
            <div>
                <label className="label">{t.messageTemplate}</label>

                {/* Rich Text Toolbar */}
                <div className="flex gap-2 mb-3">
                    <button
                        className="toolbar-btn"
                        onClick={() => insertFormatting('*', '*')}
                        title={t.bold}
                    >
                        <Bold className="w-4 h-4" />
                    </button>
                    <button
                        className="toolbar-btn"
                        onClick={() => insertFormatting('_', '_')}
                        title={t.italic}
                    >
                        <Italic className="w-4 h-4" />
                    </button>
                    <button
                        className="toolbar-btn"
                        onClick={() => insertFormatting('~', '~')}
                        title={t.strikethrough}
                    >
                        <Strikethrough className="w-4 h-4" />
                    </button>
                </div>

                <textarea
                    ref={textareaRef}
                    className="textarea-field"
                    placeholder={t.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                />
            </div>

            {/* Spam Score Indicator */}
            <div>
                <label className="label">{t.safeSendAnalyzer}</label>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Score Circle */}
                    <div className="relative w-20 h-20 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="currentColor"
                                strokeWidth="6"
                                fill="none"
                                className="text-slate-800"
                            />
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="currentColor"
                                strokeWidth="6"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray={`${(spamScore / 100) * 226.2} 226.2`}
                                className={`${spamScore <= 30 ? 'text-green-500' : spamScore <= 70 ? 'text-yellow-500' : 'text-red-500'} transition-all duration-300`}
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-xl font-bold ${spamScore <= 30 ? 'text-green-400' : spamScore <= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {spamScore}
                            </span>
                        </div>
                    </div>

                    {/* Status */}
                    <div className={`spam-indicator flex-1 w-full sm:w-auto ${indicator.className}`}>
                        <div>
                            <div className="flex items-center gap-2">
                                {indicator.icon}
                                <span className="font-bold">{indicator.text}</span>
                            </div>
                            <p className="text-xs mt-1 opacity-80">{indicator.subtext}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Generated Link */}
            {phone && message && (
                <div>
                    <label className="label">{t.generatedLink}</label>
                    <div className="code-box overflow-x-auto">
                        <pre className="text-xs break-all whitespace-pre-wrap">{generateLink()}</pre>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <button className="btn-neon flex-1 flex items-center justify-center gap-2" onClick={copyToClipboard}>
                            <Copy className="w-4 h-4" />
                            {copied ? t.copied : t.copyLink}
                        </button>
                        <button className="btn-secondary flex items-center justify-center gap-2 px-6" onClick={openLink}>
                            <ExternalLink className="w-4 h-4" />
                            {t.tryIt}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SmartLinkTab
