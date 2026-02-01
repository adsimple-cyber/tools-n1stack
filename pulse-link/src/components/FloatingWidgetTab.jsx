import { useState, useEffect } from 'react'
import { MessageCircle, Copy, Eye } from 'lucide-react'

const FloatingWidgetTab = ({ setPreviewData }) => {
    const [config, setConfig] = useState({
        position: 'bottom-right',
        animation: 'pulse',
        phone: '+62812345678',
        message: 'Halo, saya tertarik dengan produk Anda!',
        size: '60'
    })
    const [copied, setCopied] = useState(false)
    const [showPreview, setShowPreview] = useState(false)

    const getAnimationCSS = () => {
        switch (config.animation) {
            case 'pulse':
                return `
  @keyframes wa-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
    50% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
  }
  .wa-float-btn { animation: wa-pulse 2s infinite; }`
            case 'bounce':
                return `
  @keyframes wa-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }
  .wa-float-btn { animation: wa-bounce 1s infinite; }`
            case 'shake':
                return `
  @keyframes wa-shake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-15deg); }
    75% { transform: rotate(15deg); }
  }
  .wa-float-btn { animation: wa-shake 0.5s infinite; }`
            default:
                return ''
        }
    }

    const getPositionCSS = () => {
        switch (config.position) {
            case 'bottom-right':
                return 'bottom: 24px; right: 24px;'
            case 'bottom-left':
                return 'bottom: 24px; left: 24px;'
            case 'top-right':
                return 'top: 24px; right: 24px;'
            case 'top-left':
                return 'top: 24px; left: 24px;'
            default:
                return 'bottom: 24px; right: 24px;'
        }
    }

    const generateCode = () => {
        const cleanPhone = config.phone.replace(/\D/g, '')
        const encodedMessage = encodeURIComponent(config.message)

        return `<!-- N1STACK WhatsApp Floating Widget -->
<style>
  .wa-float-btn {
    position: fixed;
    ${getPositionCSS()}
    width: ${config.size}px;
    height: ${config.size}px;
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
    z-index: 9999;
    transition: transform 0.3s ease;
    text-decoration: none;
  }
  
  .wa-float-btn:hover {
    transform: scale(1.1);
  }
  
  .wa-float-btn svg {
    width: ${Math.round(parseInt(config.size) * 0.5)}px;
    height: ${Math.round(parseInt(config.size) * 0.5)}px;
    fill: white;
  }
  ${getAnimationCSS()}
</style>

<a href="https://wa.me/${cleanPhone}?text=${encodedMessage}" 
   class="wa-float-btn" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>

<!-- Powered by N1STACK -->`
    }

    // Update preview
    useEffect(() => {
        setPreviewData({
            type: 'widget',
            content: `📱 *FLOATING WIDGET*\n\nPosition: ${config.position}\nAnimation: ${config.animation}\nSize: ${config.size}px\n\n_Widget ready for deployment_`,
            phone: config.phone,
            linkPreview: null,
            widgetConfig: config
        })
    }, [config])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateCode())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-[#D4FF00]" />
                    Floating Widget Baker
                </h2>
                <p className="text-slate-400 text-sm">Create sticky WhatsApp buttons for your website</p>
            </div>

            <div className="divider"></div>

            {/* Phone Number */}
            <div>
                <label className="label">WhatsApp Number</label>
                <input
                    type="text"
                    className="input-field"
                    placeholder="+62812345678"
                    value={config.phone}
                    onChange={(e) => setConfig({ ...config, phone: e.target.value })}
                />
            </div>

            {/* Default Message */}
            <div>
                <label className="label">Pre-filled Message</label>
                <textarea
                    className="textarea-field"
                    placeholder="Halo, saya tertarik dengan..."
                    value={config.message}
                    onChange={(e) => setConfig({ ...config, message: e.target.value })}
                    rows={3}
                />
            </div>

            {/* Position & Animation */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="label">Position</label>
                    <select
                        className="select-field"
                        value={config.position}
                        onChange={(e) => setConfig({ ...config, position: e.target.value })}
                    >
                        <option value="bottom-right">Bottom Right</option>
                        <option value="bottom-left">Bottom Left</option>
                        <option value="top-right">Top Right</option>
                        <option value="top-left">Top Left</option>
                    </select>
                </div>
                <div>
                    <label className="label">Animation</label>
                    <select
                        className="select-field"
                        value={config.animation}
                        onChange={(e) => setConfig({ ...config, animation: e.target.value })}
                    >
                        <option value="pulse">Pulse Glow</option>
                        <option value="bounce">Bounce</option>
                        <option value="shake">Shake</option>
                        <option value="none">No Animation</option>
                    </select>
                </div>
            </div>

            {/* Size */}
            <div>
                <label className="label">Button Size: {config.size}px</label>
                <input
                    type="range"
                    min="40"
                    max="80"
                    value={config.size}
                    onChange={(e) => setConfig({ ...config, size: e.target.value })}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#D4FF00]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>Small (40px)</span>
                    <span>Large (80px)</span>
                </div>
            </div>

            {/* Preview Demo */}
            <div>
                <button
                    className="btn-secondary w-full flex items-center justify-center gap-2"
                    onClick={() => setShowPreview(!showPreview)}
                >
                    <Eye className="w-4 h-4" />
                    {showPreview ? 'Hide Preview' : 'Show Live Preview'}
                </button>

                {showPreview && (
                    <div className="relative h-32 mt-4 bg-slate-800/50 rounded-xl overflow-hidden border border-white/5">
                        <div
                            className={`absolute flex items-center justify-center rounded-full cursor-pointer`}
                            style={{
                                width: `${config.size}px`,
                                height: `${config.size}px`,
                                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                                ...(config.position === 'bottom-right' && { bottom: '16px', right: '16px' }),
                                ...(config.position === 'bottom-left' && { bottom: '16px', left: '16px' }),
                                ...(config.position === 'top-right' && { top: '16px', right: '16px' }),
                                ...(config.position === 'top-left' && { top: '16px', left: '16px' }),
                            }}
                        >
                            <MessageCircle
                                className={`text-white ${config.animation === 'pulse' ? 'animate-pulse-glow' :
                                    config.animation === 'bounce' ? 'animate-bounce-custom' :
                                        config.animation === 'shake' ? 'animate-shake' : ''
                                    }`}
                                style={{ width: `${Math.round(parseInt(config.size) * 0.5)}px`, height: `${Math.round(parseInt(config.size) * 0.5)}px` }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Generated Code */}
            <div>
                <label className="label">Generated Code</label>
                <div className="code-box max-h-48 overflow-y-auto">
                    <pre>{generateCode()}</pre>
                </div>

                <button
                    className="btn-neon w-full mt-4 flex items-center justify-center gap-2"
                    onClick={copyToClipboard}
                >
                    <Copy className="w-4 h-4" />
                    {copied ? 'Copied!' : 'Copy Widget Code'}
                </button>
            </div>
        </div>
    )
}

export default FloatingWidgetTab
