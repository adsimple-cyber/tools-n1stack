import { useState, useEffect } from 'react'
import { Search, CheckCircle, XCircle, Loader2, ExternalLink, Image } from 'lucide-react'
import axios from 'axios'

const LinkCardCheckerTab = ({ setPreviewData }) => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [metadata, setMetadata] = useState(null)
    const [error, setError] = useState(null)

    const fetchMetadata = async () => {
        if (!url) return

        setLoading(true)
        setError(null)
        setMetadata(null)

        try {
            const response = await axios.get(`https://api.microlink.io/?url=${encodeURIComponent(url)}`)

            if (response.data.status === 'success') {
                setMetadata(response.data.data)
                setPreviewData({
                    type: 'linkPreview',
                    content: '',
                    phone: '',
                    linkPreview: response.data.data
                })
            } else {
                setError('Failed to fetch metadata')
            }
        } catch (err) {
            setError('Unable to fetch URL metadata. Please check the URL.')
        } finally {
            setLoading(false)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchMetadata()
        }
    }

    // Clear preview when URL changes
    useEffect(() => {
        if (!url) {
            setMetadata(null)
            setPreviewData({
                type: 'linkPreview',
                content: '',
                phone: '',
                linkPreview: null
            })
        }
    }, [url])

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <Search className="w-6 h-6 text-[#D4FF00]" />
                    Link Card Checker
                </h2>
                <p className="text-slate-400 text-sm">Preview how your link will appear in WhatsApp chats (OG tags)</p>
            </div>

            <div className="divider"></div>

            {/* URL Input */}
            <div>
                <label className="label">Target URL</label>
                <div className="flex gap-3">
                    <input
                        type="url"
                        className="input-field flex-1"
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="btn-neon px-6 flex items-center gap-2"
                        onClick={fetchMetadata}
                        disabled={loading || !url}
                    >
                        {loading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Search className="w-4 h-4" />
                        )}
                        {loading ? 'Checking...' : 'Check'}
                    </button>
                </div>
            </div>

            {/* Error State */}
            {error && (
                <div className="glass-card p-4 border-l-4 border-red-500 bg-red-500/5">
                    <div className="flex items-center gap-3 text-red-400">
                        <XCircle className="w-5 h-5" />
                        <span>{error}</span>
                    </div>
                </div>
            )}

            {/* Metadata Results */}
            {metadata && (
                <div className="space-y-4">
                    {/* Status Indicators */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className={`status-badge ${metadata.image?.url ? 'status-success' : 'status-error'}`}>
                            {metadata.image?.url ? (
                                <>
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Image Optimized</span>
                                </>
                            ) : (
                                <>
                                    <XCircle className="w-4 h-4" />
                                    <span>Image Missing</span>
                                </>
                            )}
                        </div>
                        <div className={`status-badge ${metadata.title ? 'status-success' : 'status-error'}`}>
                            {metadata.title ? (
                                <>
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Title Present</span>
                                </>
                            ) : (
                                <>
                                    <XCircle className="w-4 h-4" />
                                    <span>Title Missing</span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Metadata Details */}
                    <div className="glass-card p-5 space-y-4">
                        <h4 className="text-white font-semibold flex items-center gap-2">
                            <Image className="w-4 h-4 text-[#D4FF00]" />
                            Metadata Details
                        </h4>

                        <div className="space-y-3">
                            <div>
                                <label className="text-xs text-slate-500 uppercase">Title</label>
                                <p className="text-white text-sm mt-1">{metadata.title || 'Not set'}</p>
                            </div>

                            <div>
                                <label className="text-xs text-slate-500 uppercase">Description</label>
                                <p className="text-slate-400 text-sm mt-1">{metadata.description || 'Not set'}</p>
                            </div>

                            <div>
                                <label className="text-xs text-slate-500 uppercase">Image URL</label>
                                <p className="text-slate-400 text-xs mt-1 break-all">{metadata.image?.url || 'Not set'}</p>
                            </div>

                            {metadata.image?.url && (
                                <div>
                                    <label className="text-xs text-slate-500 uppercase mb-2 block">Image Preview</label>
                                    <img
                                        src={metadata.image.url}
                                        alt="OG Preview"
                                        className="w-full h-40 object-cover rounded-lg border border-white/10"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            )}

                            {metadata.image && (
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="bg-slate-800/50 p-3 rounded-lg">
                                        <span className="text-slate-500">Image Size</span>
                                        <p className="text-white mt-1">
                                            {metadata.image.width || '?'} × {metadata.image.height || '?'}
                                        </p>
                                    </div>
                                    <div className="bg-slate-800/50 p-3 rounded-lg">
                                        <span className="text-slate-500">Image Type</span>
                                        <p className="text-white mt-1">{metadata.image.type || 'Unknown'}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full flex items-center justify-center gap-2"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Open URL in New Tab
                    </a>

                    {/* Recommendations */}
                    <div className="glass-card p-4 border-l-4 border-[#D4FF00] bg-[#D4FF00]/5">
                        <h4 className="text-white font-semibold mb-2">💡 Optimization Tips</h4>
                        <ul className="text-slate-400 text-sm space-y-1">
                            {!metadata.image?.url && (
                                <li>• Add an og:image meta tag for better previews</li>
                            )}
                            {metadata.image?.width && metadata.image.width < 1200 && (
                                <li>• Use 1200×630px images for optimal display</li>
                            )}
                            {!metadata.description && (
                                <li>• Add og:description for better context</li>
                            )}
                            {metadata.title && metadata.title.length > 60 && (
                                <li>• Keep title under 60 characters</li>
                            )}
                            {metadata.image?.url && metadata.description && metadata.title && (
                                <li>✓ Your link is well optimized for sharing!</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!metadata && !loading && !error && (
                <div className="glass-card p-16 md:p-20 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800/50 flex items-center justify-center">
                        <Search className="w-8 h-8 text-slate-600" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Enter a URL to analyze</h4>
                    <p className="text-slate-500 text-sm">
                        We'll fetch the Open Graph metadata and show you how it will look when shared on WhatsApp.
                    </p>
                </div>
            )}
        </div>
    )
}

export default LinkCardCheckerTab
