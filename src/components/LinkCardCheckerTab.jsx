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
                setError('Gagal mengambil metadata')
            }
        } catch (err) {
            setError('Tidak dapat mengambil metadata URL. Silakan periksa URL Anda.')
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4FF00]" />
                    Link Checker
                </h2>
                <p className="text-slate-400 text-sm">Preview tampilan link Anda di chat WhatsApp (OG tags)</p>
            </div>

            <div className="divider"></div>

            {/* URL Input */}
            <div>
                <label className="label">URL Target</label>
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="url"
                        className="input-field flex-1"
                        placeholder="https://contoh.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="btn-neon px-6 flex items-center justify-center gap-2"
                        onClick={fetchMetadata}
                        disabled={loading || !url}
                    >
                        {loading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Search className="w-4 h-4" />
                        )}
                        {loading ? 'Memeriksa...' : 'Periksa'}
                    </button>
                </div>
            </div>

            {/* Error State */}
            {error && (
                <div className="glass-card p-4 border-l-4 border-red-500 bg-red-500/5">
                    <div className="flex items-center gap-3 text-red-400">
                        <XCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{error}</span>
                    </div>
                </div>
            )}

            {/* Metadata Results */}
            {metadata && (
                <div className="space-y-4">
                    {/* Status Indicators */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className={`status-badge flex-1 ${metadata.image?.url ? 'status-success' : 'status-error'}`}>
                            {metadata.image?.url ? (
                                <>
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Gambar Tersedia</span>
                                </>
                            ) : (
                                <>
                                    <XCircle className="w-4 h-4" />
                                    <span>Gambar Tidak Ada</span>
                                </>
                            )}
                        </div>
                        <div className={`status-badge flex-1 ${metadata.title ? 'status-success' : 'status-error'}`}>
                            {metadata.title ? (
                                <>
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Judul Tersedia</span>
                                </>
                            ) : (
                                <>
                                    <XCircle className="w-4 h-4" />
                                    <span>Judul Tidak Ada</span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Metadata Details */}
                    <div className="glass-card p-4 sm:p-5 space-y-4">
                        <h4 className="text-white font-semibold flex items-center gap-2">
                            <Image className="w-4 h-4 text-[#D4FF00]" />
                            Detail Metadata
                        </h4>

                        <div className="space-y-3">
                            <div>
                                <label className="text-xs text-slate-500 uppercase">Judul</label>
                                <p className="text-white text-sm mt-1">{metadata.title || 'Tidak tersedia'}</p>
                            </div>

                            <div>
                                <label className="text-xs text-slate-500 uppercase">Deskripsi</label>
                                <p className="text-slate-400 text-sm mt-1">{metadata.description || 'Tidak tersedia'}</p>
                            </div>

                            <div>
                                <label className="text-xs text-slate-500 uppercase">URL Gambar</label>
                                <p className="text-slate-400 text-xs mt-1 break-all">{metadata.image?.url || 'Tidak tersedia'}</p>
                            </div>

                            {metadata.image?.url && (
                                <div>
                                    <label className="text-xs text-slate-500 uppercase mb-2 block">Preview Gambar</label>
                                    <img
                                        src={metadata.image.url}
                                        alt="OG Preview"
                                        className="w-full h-40 object-cover rounded-lg border border-white/10"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            )}

                            {metadata.image && (
                                <div className="flex flex-col sm:flex-row gap-3 text-xs">
                                    <div className="flex-1 bg-slate-800/50 p-3 rounded-lg">
                                        <span className="text-slate-500">Ukuran Gambar</span>
                                        <p className="text-white mt-1">
                                            {metadata.image.width || '?'} × {metadata.image.height || '?'}
                                        </p>
                                    </div>
                                    <div className="flex-1 bg-slate-800/50 p-3 rounded-lg">
                                        <span className="text-slate-500">Tipe Gambar</span>
                                        <p className="text-white mt-1">{metadata.image.type || 'Tidak diketahui'}</p>
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
                        Buka URL di Tab Baru
                    </a>

                    {/* Recommendations */}
                    <div className="glass-card p-4 border-l-4 border-[#D4FF00] bg-[#D4FF00]/5">
                        <h4 className="text-white font-semibold mb-2">💡 Tips Optimasi</h4>
                        <ul className="text-slate-400 text-sm space-y-1">
                            {!metadata.image?.url && (
                                <li>• Tambahkan meta tag og:image untuk preview yang lebih baik</li>
                            )}
                            {metadata.image?.width && metadata.image.width < 1200 && (
                                <li>• Gunakan gambar 1200×630px untuk tampilan optimal</li>
                            )}
                            {!metadata.description && (
                                <li>• Tambahkan og:description untuk konteks yang lebih baik</li>
                            )}
                            {metadata.title && metadata.title.length > 60 && (
                                <li>• Buat judul kurang dari 60 karakter</li>
                            )}
                            {metadata.image?.url && metadata.description && metadata.title && (
                                <li>✓ Link Anda sudah teroptimasi dengan baik!</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!metadata && !loading && !error && (
                <div className="glass-card p-12 sm:p-16 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800/50 flex items-center justify-center">
                        <Search className="w-8 h-8 text-slate-600" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Masukkan URL untuk dianalisa</h4>
                    <p className="text-slate-500 text-sm">
                        Kami akan mengambil metadata Open Graph dan menampilkan bagaimana link akan terlihat ketika dibagikan di WhatsApp.
                    </p>
                </div>
            )}
        </div>
    )
}

export default LinkCardCheckerTab
