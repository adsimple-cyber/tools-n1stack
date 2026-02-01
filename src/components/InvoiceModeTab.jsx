import { useState, useEffect } from 'react'
import { FileText, Copy, Plus, Trash2 } from 'lucide-react'

const InvoiceModeTab = ({ setPreviewData }) => {
    const [items, setItems] = useState([
        { name: 'Pembuatan Website', qty: 1, price: 5000000 }
    ])
    const [bankInfo, setBankInfo] = useState({
        bankName: 'BCA',
        accountNumber: '1234567890',
        accountHolder: 'N1STACK DIGITAL'
    })
    const [copied, setCopied] = useState(false)

    const addItem = () => {
        setItems([...items, { name: '', qty: 1, price: 0 }])
    }

    const removeItem = (index) => {
        if (items.length > 1) {
            setItems(items.filter((_, i) => i !== index))
        }
    }

    const updateItem = (index, field, value) => {
        const newItems = [...items]
        newItems[index][field] = field === 'qty' || field === 'price' ? Number(value) || 0 : value
        setItems(newItems)
    }

    const calculateTotal = () => {
        return items.reduce((sum, item) => sum + (item.qty * item.price), 0)
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount).replace('IDR', 'Rp')
    }

    const generateInvoiceMessage = () => {
        let message = `📋 *INVOICE*\n`
        message += `━━━━━━━━━━━━━━━━\n\n`

        items.forEach((item, index) => {
            if (item.name) {
                message += `${index + 1}. ${item.name}\n`
                message += `   ${item.qty} x ${formatCurrency(item.price)}\n`
                message += `   = ${formatCurrency(item.qty * item.price)}\n\n`
            }
        })

        message += `━━━━━━━━━━━━━━━━\n`
        message += `*TOTAL: ${formatCurrency(calculateTotal())}*\n`
        message += `━━━━━━━━━━━━━━━━\n\n`

        message += `💳 *Info Pembayaran:*\n`
        message += `Bank: ${bankInfo.bankName}\n`
        message += `No. Rek: ${bankInfo.accountNumber}\n`
        message += `A/N: ${bankInfo.accountHolder}\n\n`

        message += `_Terima kasih atas pesanan Anda!_\n`
        message += `_Powered by N1STACK_`

        return message
    }

    // Update preview
    useEffect(() => {
        setPreviewData({
            type: 'invoice',
            content: generateInvoiceMessage(),
            phone: '',
            linkPreview: null
        })
    }, [items, bankInfo])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateInvoiceMessage())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4FF00]" />
                    Invoice Mode
                </h2>
                <p className="text-slate-400 text-sm">Buat pesan invoice profesional untuk WhatsApp</p>
            </div>

            <div className="divider"></div>

            {/* Items */}
            <div>
                <label className="label">Daftar Item</label>
                <div className="space-y-3">
                    {items.map((item, index) => (
                        <div key={index} className="glass-card p-3 sm:p-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-500 font-medium">ITEM #{index + 1}</span>
                                {items.length > 1 && (
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeItem(index)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            <input
                                type="text"
                                className="input-field"
                                placeholder="Nama Produk/Jasa"
                                value={item.name}
                                onChange={(e) => updateItem(index, 'name', e.target.value)}
                            />

                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1">
                                    <label className="text-xs text-slate-500 mb-1 block">Jumlah</label>
                                    <input
                                        type="number"
                                        className="input-field"
                                        placeholder="1"
                                        min="1"
                                        value={item.qty}
                                        onChange={(e) => updateItem(index, 'qty', e.target.value)}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="text-xs text-slate-500 mb-1 block">Harga (Rp)</label>
                                    <input
                                        type="number"
                                        className="input-field"
                                        placeholder="0"
                                        min="0"
                                        value={item.price}
                                        onChange={(e) => updateItem(index, 'price', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                                <span className="text-xs text-slate-500">Subtotal</span>
                                <span className="text-[#D4FF00] font-bold text-sm sm:text-base">{formatCurrency(item.qty * item.price)}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="add-btn mt-3" onClick={addItem}>
                    <Plus className="w-4 h-4" />
                    Tambah Item
                </button>
            </div>

            {/* Total */}
            <div className="glass-card p-3 sm:p-4 bg-gradient-to-r from-[#D4FF00]/10 to-transparent border-l-4 border-[#D4FF00]">
                <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-bold text-white">Total</span>
                    <span className="text-lg sm:text-2xl font-bold text-[#D4FF00]">{formatCurrency(calculateTotal())}</span>
                </div>
            </div>

            {/* Bank Info */}
            <div>
                <label className="label">Informasi Pembayaran</label>
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Nama Bank"
                        value={bankInfo.bankName}
                        onChange={(e) => setBankInfo({ ...bankInfo, bankName: e.target.value })}
                    />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Nomor Rekening"
                        value={bankInfo.accountNumber}
                        onChange={(e) => setBankInfo({ ...bankInfo, accountNumber: e.target.value })}
                    />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Nama Pemilik Rekening"
                        value={bankInfo.accountHolder}
                        onChange={(e) => setBankInfo({ ...bankInfo, accountHolder: e.target.value })}
                    />
                </div>
            </div>

            {/* Generate Button */}
            <button className="btn-neon w-full flex items-center justify-center gap-2" onClick={copyToClipboard}>
                <Copy className="w-4 h-4" />
                {copied ? 'Tersalin!' : 'Salin Pesan Invoice'}
            </button>
        </div>
    )
}

export default InvoiceModeTab
