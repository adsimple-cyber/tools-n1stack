import { useState, useEffect } from 'react'
import { FileText, Copy, Plus, Trash2 } from 'lucide-react'

const InvoiceModeTab = ({ setPreviewData }) => {
    const [items, setItems] = useState([
        { name: 'Website Development', qty: 1, price: 5000000 }
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

        message += `💳 *Payment Info:*\n`
        message += `Bank: ${bankInfo.bankName}\n`
        message += `No. Rek: ${bankInfo.accountNumber}\n`
        message += `A/N: ${bankInfo.accountHolder}\n\n`

        message += `_Thank you for your order!_\n`
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
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-[#D4FF00]" />
                    Invoice Mode
                </h2>
                <p className="text-slate-400 text-sm">Generate professional invoice messages for WhatsApp</p>
            </div>

            <div className="divider"></div>

            {/* Items */}
            <div>
                <label className="label">Invoice Items</label>
                <div className="space-y-3">
                    {items.map((item, index) => (
                        <div key={index} className="glass-card p-4 space-y-3">
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
                                placeholder="Product/Service Name"
                                value={item.name}
                                onChange={(e) => updateItem(index, 'name', e.target.value)}
                            />

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs text-slate-500 mb-1 block">Quantity</label>
                                    <input
                                        type="number"
                                        className="input-field"
                                        placeholder="1"
                                        min="1"
                                        value={item.qty}
                                        onChange={(e) => updateItem(index, 'qty', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 mb-1 block">Price (Rp)</label>
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
                                <span className="text-[#D4FF00] font-bold">{formatCurrency(item.qty * item.price)}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="add-btn mt-3" onClick={addItem}>
                    <Plus className="w-4 h-4" />
                    Add Item
                </button>
            </div>

            {/* Total */}
            <div className="glass-card p-4 bg-gradient-to-r from-[#D4FF00]/10 to-transparent border-l-4 border-[#D4FF00]">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">Grand Total</span>
                    <span className="text-2xl font-bold text-[#D4FF00]">{formatCurrency(calculateTotal())}</span>
                </div>
            </div>

            {/* Bank Info */}
            <div>
                <label className="label">Payment Information</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Bank Name"
                        value={bankInfo.bankName}
                        onChange={(e) => setBankInfo({ ...bankInfo, bankName: e.target.value })}
                    />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Account Number"
                        value={bankInfo.accountNumber}
                        onChange={(e) => setBankInfo({ ...bankInfo, accountNumber: e.target.value })}
                    />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Account Holder"
                        value={bankInfo.accountHolder}
                        onChange={(e) => setBankInfo({ ...bankInfo, accountHolder: e.target.value })}
                    />
                </div>
            </div>

            {/* Generate Button */}
            <button className="btn-neon w-full flex items-center justify-center gap-2" onClick={copyToClipboard}>
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy Invoice Message'}
            </button>
        </div>
    )
}

export default InvoiceModeTab
