import { MoreVertical, Phone, Video, ChevronLeft, Smile, Paperclip, Mic, Check, CheckCheck } from 'lucide-react'

const PhoneSimulator = ({ previewData, activeTab }) => {
    const getCurrentTime = () => {
        const now = new Date()
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
    }

    // Format WhatsApp message with bold, italic, strikethrough
    const formatMessage = (text) => {
        if (!text) return ''

        // Replace WhatsApp formatting
        let formatted = text
            .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
            .replace(/_([^_]+)_/g, '<em>$1</em>')
            .replace(/~([^~]+)~/g, '<del>$1</del>')
            .replace(/\n/g, '<br/>')

        return formatted
    }

    const renderChatContent = () => {
        const { type, content, linkPreview } = previewData

        if (type === 'linkPreview' && linkPreview) {
            return (
                <div className="wa-bubble max-w-[95%]">
                    <div className="link-preview-card mb-2">
                        {linkPreview.image?.url ? (
                            <img
                                src={linkPreview.image.url}
                                alt="Preview"
                                className="link-preview-image"
                                onError={(e) => {
                                    e.target.style.display = 'none'
                                }}
                            />
                        ) : (
                            <div className="link-preview-image flex items-center justify-center">
                                <span className="text-slate-500 text-xs">No Image</span>
                            </div>
                        )}
                        <div className="link-preview-content">
                            <div className="link-preview-title">{linkPreview.title || 'No Title'}</div>
                            <div className="link-preview-desc line-clamp-2">{linkPreview.description || 'No description available'}</div>
                            <div className="link-preview-url">{linkPreview.url}</div>
                        </div>
                    </div>
                    <div className="wa-bubble-time flex items-center justify-end gap-1">
                        {getCurrentTime()}
                        <CheckCheck className="w-4 h-4 text-blue-400" />
                    </div>
                </div>
            )
        }

        if (content) {
            return (
                <div className="wa-bubble">
                    <div
                        className="whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: formatMessage(content) }}
                    />
                    <div className="wa-bubble-time flex items-center justify-end gap-1">
                        {getCurrentTime()}
                        <CheckCheck className="w-4 h-4 text-blue-400" />
                    </div>
                </div>
            )
        }

        return (
            <div className="text-center py-8">
                <p className="text-slate-500 text-sm">Start typing to see preview</p>
            </div>
        )
    }

    const getHeaderTitle = () => {
        switch (activeTab) {
            case 0: return 'Smart Link Preview'
            case 1: return 'Invoice Preview'
            case 2: return 'CS Rotator'
            case 3: return 'Widget Preview'
            case 4: return 'Link Card'
            default: return 'N1STACK'
        }
    }

    return (
        <div className="iphone-frame">
            {/* Notch */}
            <div className="iphone-notch"></div>

            {/* Screen */}
            <div className="iphone-screen">
                {/* WhatsApp Header */}
                <div className="wa-header">
                    <ChevronLeft className="w-6 h-6 text-white/80" />
                    <div className="wa-avatar">
                        N1
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm">{getHeaderTitle()}</h3>
                        <p className="text-white/60 text-xs">online</p>
                    </div>
                    <div className="flex items-center gap-4 text-white/80">
                        <Video className="w-5 h-5" />
                        <Phone className="w-5 h-5" />
                        <MoreVertical className="w-5 h-5" />
                    </div>
                </div>

                {/* Chat Area */}
                <div className="wa-chat-area">
                    {/* Received Message (system) */}
                    <div className="flex justify-start mb-3">
                        <div className="bg-[#202C33] px-3 py-2 rounded-lg max-w-[80%]">
                            <p className="text-sm text-slate-300">👋 Hello! How can I help you today?</p>
                            <div className="wa-bubble-time flex items-center justify-end gap-1">
                                {getCurrentTime()}
                            </div>
                        </div>
                    </div>

                    {/* User Message (preview) */}
                    <div className="flex justify-end">
                        {renderChatContent()}
                    </div>
                </div>

                {/* Input Area */}
                <div className="wa-input-area">
                    <Smile className="w-6 h-6 text-slate-400" />
                    <div className="wa-input-box text-slate-500 text-sm">
                        Type a message
                    </div>
                    <Paperclip className="w-6 h-6 text-slate-400" />
                    <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center">
                        <Mic className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* Footer Branding */}
                <div className="bg-[#111B21] py-2 flex items-center justify-center gap-2 border-t border-white/5">
                    <div className="w-4 h-4 rounded bg-[#D4FF00] flex items-center justify-center">
                        <span className="text-[8px] font-black text-black">N1</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">Powered by N1STACK</span>
                </div>
            </div>
        </div>
    )
}

export default PhoneSimulator
