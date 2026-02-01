import { MessageCircle } from 'lucide-react'

const PhonePreview = ({ previewData }) => {
    const formatWhatsAppText = (text) => {
        if (!text) return ''
        return text
            .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
            .replace(/_([^_]+)_/g, '<em>$1</em>')
            .replace(/~([^~]+)~/g, '<del>$1</del>')
            .replace(/\n/g, '<br/>')
    }

    const renderPreviewContent = () => {
        if (previewData.type === 'invoice' || previewData.type === 'message' || previewData.type === 'rotator' || previewData.type === 'widget') {
            return (
                <div className="space-y-8 px-6 pb-4 mt-6">
                    {/* Incoming bubble */}
                    <div className="flex justify-start">
                        <div className="bg-white rounded-lg rounded-tl-none max-w-[75%] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative ml-1 before:content-[''] before:absolute before:top-0 before:-left-2 before:w-0 before:h-0 before:border-[8px] before:border-transparent before:border-t-white before:border-r-white" style={{ padding: '10px 18px' }}>
                            <p className="text-[#111b21] text-[15px] leading-relaxed break-words" style={{ marginBottom: '4px' }}>Hi, saya tertarik dengan produk Anda 👋</p>
                            <span className="text-[11px] text-[#667781] float-right ml-3">10:30</span>
                        </div>
                    </div>

                    {/* Outgoing bubble */}
                    {previewData.content && (
                        <div className="flex flex-col justify-end">
                            <div className="h-8 w-full"></div> {/* Spacer */}
                            <div className="flex justify-end">
                                <div className="bg-[#e2ffc9] rounded-lg rounded-tr-none max-w-[75%] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative mr-1 before:content-[''] before:absolute before:top-0 before:-right-2 before:w-0 before:h-0 before:border-[8px] before:border-transparent before:border-t-[#e2ffc9] before:border-l-[#e2ffc9]" style={{ padding: '10px 18px' }}>
                                    <div
                                        className="text-[#111b21] text-[15px] leading-relaxed break-words"
                                        style={{ marginBottom: '4px' }}
                                        dangerouslySetInnerHTML={{ __html: formatWhatsAppText(previewData.content) }}
                                    />
                                    <div className="flex items-center justify-end gap-1">
                                        <span className="text-[11px] text-[#667781]">10:31</span>
                                        <svg className="w-3.5 h-3.5 text-[#53bdeb]" viewBox="0 0 16 11" fill="currentColor">
                                            <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.349-.133.57.57 0 0 0-.374.151.5.5 0 0 0 .003.713l2.734 2.584c.183.172.418.179.583.017l6.507-7.945a.504.504 0 0 0 .176-.37.508.508 0 0 0-.176-.355l-.024-.102z" />
                                            <path d="M15.271.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.027-.97-.626.749 1.456 1.375c.183.172.418.179.583.017l6.507-7.945a.504.504 0 0 0 .176-.37.508.508 0 0 0-.176-.355l-.018-.213z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )
        }

        if (previewData.type === 'linkPreview' && previewData.linkPreview) {
            const link = previewData.linkPreview
            return (
                <div className="space-y-4 p-3">
                    <div className="flex justify-end">
                        <div className="bg-[#005c4b] rounded-2xl rounded-tr-md overflow-hidden max-w-[85%] shadow-md">
                            <div className="bg-[#1d282f] p-3">
                                {link.image?.url && (
                                    <img
                                        src={link.image.url}
                                        alt=""
                                        className="w-full h-32 object-cover rounded-lg mb-3"
                                    />
                                )}
                                <p className="text-[#00a884] text-xs truncate">{link.url || 'example.com'}</p>
                                <p className="text-white text-sm font-medium line-clamp-2 mt-1">{link.title || 'Website Title'}</p>
                                <p className="text-white/60 text-xs line-clamp-2 mt-1">{link.description || 'Website description...'}</p>
                            </div>
                            <div className="px-4 py-3">
                                <p className="text-white text-sm">Check this out! 🔗</p>
                                <div className="flex items-center justify-end gap-1 mt-2">
                                    <span className="text-[11px] text-white/40">10:31</span>
                                    <svg className="w-4 h-3 text-[#53bdeb]" viewBox="0 0 16 11" fill="currentColor">
                                        <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.349-.133.57.57 0 0 0-.374.151.5.5 0 0 0 .003.713l2.734 2.584c.183.172.418.179.583.017l6.507-7.945a.504.504 0 0 0 .176-.37.508.508 0 0 0-.176-.355l-.024-.102z" />
                                        <path d="M15.271.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.027-.97-.626.749 1.456 1.375c.183.172.418.179.583.017l6.507-7.945a.504.504 0 0 0 .176-.37.508.508 0 0 0-.176-.355l-.018-.213z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        // Empty state
        return (
            <div className="flex flex-col justify-center items-center h-full p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    <MessageCircle className="w-8 h-8 text-white/20" />
                </div>
                <p className="text-white/40 text-sm">
                    Edit form di kiri untuk<br />melihat preview pesan
                </p>
            </div>
        )
    }

    return (
        <div className="hidden xl:block sticky top-28 pr-4 h-[calc(100vh-40px)] flex items-center justify-center">
            {/* Clean Modern Frame (create.wa.link style) */}
            <div
                className="relative bg-white rounded-[40px] overflow-hidden mx-auto select-none shadow-2xl"
                style={{
                    width: '375px',
                    height: '812px',
                    boxShadow: '0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3), 0 -2px 6px 0 rgba(10, 37, 64, 0.35) inset'
                }}
            >
                {/* Status Bar */}
                <div className="bg-[#008069] h-[36px] flex items-center justify-between px-5 pt-1 text-white/90 z-20 relative">
                    <span className="text-xs font-medium tracking-wide">10:30</span>
                    <div className="flex gap-1.5 items-center">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" /></svg>
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                        <div className="w-5 h-[10px] border border-white/60 rounded-[2px] relative ml-0.5">
                            <div className="absolute top-[1px] left-[1px] bottom-[1px] right-[1px] bg-white text-[8px] flex items-center justify-center"></div>
                            <div className="absolute -right-[2px] top-[2px] w-[2px] h-[4px] bg-white/60 rounded-r-[1px]"></div>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="bg-[#008069] px-3 py-2 flex items-center gap-2 z-20 relative shadow-md">
                    <div className="flex items-center text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden mr-1">
                        <svg className="w-10 h-10 text-gray-300 translate-y-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                    </div>
                    <div className="flex-1 text-white">
                        <p className="font-medium text-[16px] leading-tight flex items-center gap-1">
                            N1STACK
                            <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                        </p>
                        <p className="text-[12px] opacity-90 truncate">business account</p>
                    </div>
                    <div className="flex gap-4 text-white p-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 13.81 13.81 18 18 18 18 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                    </div>
                </div>

                {/* Chat Area */}
                <div
                    className="relative overflow-y-auto h-full pb-20 pt-4"
                    style={{
                        backgroundColor: '#e5ddd5',
                        backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`,
                        backgroundSize: '400px'
                    }}
                >
                    {/* Date Divider */}
                    <div className="flex justify-center mb-6 w-full">
                        <span className="bg-[#e1f3fb] text-[#5b6a71] text-[11.5px] font-medium px-4 py-1.5 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] uppercase tracking-wide">
                            Today
                        </span>
                    </div>

                    {/* Encryption Notice */}
                    <div className="flex justify-center mb-8 px-4">
                        <div className="bg-[#fdf3c6] p-2.5 rounded-lg text-center shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-[11.5px] text-[#595245] leading-snug border border-[#f5e9b0] max-w-[300px]">
                            <span className="flex items-start justify-center gap-1.5">
                                <svg className="w-3 h-3 translate-y-[2px] opacity-80 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2-2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
                                <span>Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.</span>
                            </span>
                        </div>
                    </div>

                    {/* Spacer to force distance */}
                    <div className="h-6 w-full"></div>

                    {renderPreviewContent()}
                </div>

                {/* Footer Input */}
                <div className="absolute bottom-0 w-full bg-[#f0f2f5] px-2 py-2 flex items-end gap-2 z-20 min-h-[60px] pb-6">
                    <div className="bg-white rounded-[24px] flex-1 min-h-[42px] flex items-center px-3 gap-3 shadow-sm border border-black/5">
                        <svg className="w-6 h-6 text-[#8696a0] cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
                        <span className="text-[#8696a0] text-[15px] flex-1">Type a message</span>
                        <svg className="w-6 h-6 text-[#8696a0] -rotate-45 cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" /></svg>
                        <svg className="w-6 h-6 text-[#8696a0] cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                    </div>
                    <div className="w-[42px] h-[42px] rounded-full bg-[#00a884] flex items-center justify-center shadow-md cursor-pointer hover:bg-[#008f6f] transition-colors mb-[1px]">
                        {previewData.content ? (
                            <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                        ) : (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.66 9 5v6c0 1.66 1.34 3 3 3z" /><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" /></svg>
                        )}
                    </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 w-full flex justify-center z-30">
                    <div className="w-[120px] h-[4px] bg-black/20 rounded-full"></div>
                </div>
            </div>

            {/* Label */}
            <p className="absolute bottom-4 text-center text-slate-500/40 text-[10px] font-bold tracking-[0.2em] uppercase select-none">Live Preview</p>
        </div>
    )
}

export default PhonePreview
