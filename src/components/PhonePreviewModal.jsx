import { X, Smartphone } from 'lucide-react'

const PhonePreviewModal = ({ isOpen, onClose, previewData }) => {
    if (!isOpen) return null

    const formatWhatsAppText = (text) => {
        if (!text) return ''
        return text
            .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
            .replace(/_([^_]+)_/g, '<em>$1</em>')
            .replace(/~([^~]+)~/g, '<del>$1</del>')
            .replace(/\n/g, '<br/>')
    }

    const renderPreviewContent = () => {
        if (previewData.type === 'invoice' || previewData.type === 'message') {
            return (
                <div className="space-y-4 p-2">
                    {/* Incoming bubble */}
                    <div className="flex justify-start">
                        <div className="bg-[#202c33] rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%] shadow-md">
                            <p className="text-white text-sm leading-relaxed">Hi, saya tertarik dengan produk Anda 👋</p>
                            <span className="text-[11px] text-white/40 float-right mt-2">10:30</span>
                        </div>
                    </div>

                    {/* Outgoing bubble */}
                    {previewData.content && (
                        <div className="flex justify-end">
                            <div className="bg-[#005c4b] rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%] shadow-md">
                                <div
                                    className="text-white text-sm leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: formatWhatsAppText(previewData.content) }}
                                />
                                <div className="flex items-center justify-end gap-1 mt-2">
                                    <span className="text-[11px] text-white/40">10:31</span>
                                    <svg className="w-4 h-3 text-[#53bdeb]" viewBox="0 0 16 11" fill="currentColor">
                                        <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.349-.133.57.57 0 0 0-.374.151.5.5 0 0 0 .003.713l2.734 2.584c.183.172.418.179.583.017l6.507-7.945a.504.504 0 0 0 .176-.37.508.508 0 0 0-.176-.355l-.024-.102z" />
                                        <path d="M15.271.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.027-.97-.626.749 1.456 1.375c.183.172.418.179.583.017l6.507-7.945a.504.504 0 0 0 .176-.37.508.508 0 0 0-.176-.355l-.018-.213z" />
                                    </svg>
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
                <div className="space-y-4 p-2">
                    <div className="flex justify-end">
                        <div className="bg-[#005c4b] rounded-2xl rounded-tr-md overflow-hidden max-w-[80%] shadow-md">
                            <div className="bg-[#1d282f] p-3">
                                {link.image?.url && (
                                    <img
                                        src={link.image.url}
                                        alt=""
                                        className="w-full h-28 object-cover rounded-lg mb-3"
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

        return (
            <div className="flex justify-center items-center h-full p-4">
                <p className="text-white/40 text-sm text-center">
                    Start editing to see<br />your message preview here
                </p>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-14 right-0 md:right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* iPhone-style Phone Frame */}
                <div className="relative">
                    {/* Phone Outer Frame */}
                    <div
                        className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[50px] p-[10px] shadow-2xl"
                        style={{
                            width: '320px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1)'
                        }}
                    >
                        {/* Screen Container */}
                        <div className="bg-[#0b141a] rounded-[40px] overflow-hidden relative">
                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 w-24 h-7 bg-black rounded-full flex items-center justify-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-gray-700"></div>
                            </div>

                            {/* Status Bar */}
                            <div className="bg-[#1f2c34] px-8 pt-4 pb-2 flex justify-between items-center relative z-10">
                                <span className="text-white text-xs font-medium">9:41</span>
                                <div className="flex gap-1 items-center">
                                    <svg className="w-4 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 3c-4.97 0-9 3.185-9 7.115C3 13.667 6.033 17 9 18.962V21l5-3c2.967-1.962 7-5.295 7-8.885C21 6.185 16.97 3 12 3z" />
                                    </svg>
                                    <svg className="w-4 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                                    </svg>
                                    <div className="w-6 h-3 bg-white rounded-sm ml-1 relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1 h-2 bg-white rounded-r-sm"></div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Header */}
                            <div className="bg-[#1f2c34] px-4 py-4 flex items-center gap-4 border-b border-white/5">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4FF00] to-[#9EFF00] flex items-center justify-center shadow-lg">
                                    <span className="text-black text-sm font-bold">N1</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white font-semibold">N1STACK</p>
                                    <p className="text-[#00a884] text-xs">online</p>
                                </div>
                                <div className="flex gap-5 text-white/60">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z" />
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div
                                className="overflow-y-auto"
                                style={{
                                    height: '380px',
                                    background: `#0b141a url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                                }}
                            >
                                {renderPreviewContent()}
                            </div>

                            {/* Input Area */}
                            <div className="bg-[#1f2c34] px-3 py-3 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#2a3942] flex items-center justify-center text-white/60">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z" />
                                    </svg>
                                </div>
                                <div className="flex-1 bg-[#2a3942] rounded-full px-5 py-3">
                                    <span className="text-white/40 text-sm">Type a message</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center shadow-lg">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="bg-[#1f2c34] pb-3 pt-1 flex justify-center">
                                <div className="w-32 h-1 bg-white/30 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Side Buttons */}
                    <div className="absolute left-0 top-28 w-1 h-8 bg-[#2a2a2a] rounded-l-md -translate-x-full"></div>
                    <div className="absolute left-0 top-44 w-1 h-14 bg-[#2a2a2a] rounded-l-md -translate-x-full"></div>
                    <div className="absolute left-0 top-64 w-1 h-14 bg-[#2a2a2a] rounded-l-md -translate-x-full"></div>
                    <div className="absolute right-0 top-36 w-1 h-16 bg-[#2a2a2a] rounded-r-md translate-x-full"></div>
                </div>
            </div>
        </div>
    )
}

export default PhonePreviewModal
