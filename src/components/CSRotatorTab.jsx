import { useState, useEffect } from 'react'
import { Users, Plus, Trash2, Copy, Code } from 'lucide-react'

const CSRotatorTab = ({ setPreviewData }) => {
    const [phones, setPhones] = useState([
        { number: '+62812345678', name: 'CS 1 - Andi' },
        { number: '+62823456789', name: 'CS 2 - Budi' },
    ])
    const [buttonText, setButtonText] = useState('Chat dengan CS')
    const [copied, setCopied] = useState(false)

    const addPhone = () => {
        setPhones([...phones, { number: '', name: `CS ${phones.length + 1}` }])
    }

    const removePhone = (index) => {
        if (phones.length > 1) {
            setPhones(phones.filter((_, i) => i !== index))
        }
    }

    const updatePhone = (index, field, value) => {
        const newPhones = [...phones]
        newPhones[index][field] = value
        setPhones(newPhones)
    }

    const generateScript = () => {
        const phoneNumbers = phones
            .filter(p => p.number)
            .map(p => p.number.replace(/\D/g, ''))

        return `<!-- N1STACK CS Rotator Widget -->
<script>
(function() {
  // Phone numbers array (Round Robin)
  const phones = ${JSON.stringify(phoneNumbers)};
  
  // Get or initialize rotation index
  let currentIndex = parseInt(localStorage.getItem('n1stack_cs_index') || '0');
  
  // Rotate to next number
  function getNextPhone() {
    const phone = phones[currentIndex];
    currentIndex = (currentIndex + 1) % phones.length;
    localStorage.setItem('n1stack_cs_index', currentIndex.toString());
    return phone;
  }
  
  // Handle button click
  window.openWhatsApp = function() {
    const phone = getNextPhone();
    window.open('https://wa.me/' + phone, '_blank');
  };
})();
</script>

<!-- WhatsApp Button -->
<button 
  onclick="openWhatsApp()" 
  style="
    background: #25D366;
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
    transition: all 0.3s ease;
  "
  onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 30px rgba(37, 211, 102, 0.5)'"
  onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 20px rgba(37, 211, 102, 0.4)'"
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  ${buttonText}
</button>

<!-- Powered by N1STACK -->`
    }

    // Update preview
    useEffect(() => {
        const phoneList = phones.filter(p => p.number).map((p, i) => `${i + 1}. ${p.name}: ${p.number}`).join('\n')
        setPreviewData({
            type: 'rotator',
            content: `📞 *CS ROTATOR ACTIVE*\n\nTeam Members:\n${phoneList}\n\n_Round Robin rotation enabled_`,
            phone: '',
            linkPreview: null
        })
    }, [phones])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateScript())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <Users className="w-6 h-6 text-[#D4FF00]" />
                    CS Rotator
                </h2>
                <p className="text-slate-400 text-sm">Distribute customers evenly across your support team</p>
            </div>

            <div className="divider"></div>

            {/* Team Members */}
            <div>
                <label className="label">Team Phone Numbers</label>
                <div className="space-y-3">
                    {phones.map((phone, index) => (
                        <div key={index} className="phone-row">
                            <div className="w-8 h-8 rounded-lg bg-[#D4FF00]/20 flex items-center justify-center text-[#D4FF00] font-bold text-sm flex-shrink-0">
                                {index + 1}
                            </div>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Name (e.g., CS Andi)"
                                value={phone.name}
                                onChange={(e) => updatePhone(index, 'name', e.target.value)}
                                style={{ flex: '0 0 40%' }}
                            />
                            <input
                                type="text"
                                className="input-field flex-1"
                                placeholder="+62812345678"
                                value={phone.number}
                                onChange={(e) => updatePhone(index, 'number', e.target.value)}
                            />
                            {phones.length > 1 && (
                                <button
                                    className="remove-btn"
                                    onClick={() => removePhone(index)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <button className="add-btn mt-3" onClick={addPhone}>
                    <Plus className="w-4 h-4" />
                    Add Team Member
                </button>
            </div>

            {/* Button Text */}
            <div>
                <label className="label">Button Text</label>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Chat dengan CS"
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                />
            </div>

            {/* How it works */}
            <div className="glass-card p-4 bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    How it works
                </h4>
                <p className="text-slate-400 text-sm">
                    The script distributes visitors evenly using Round Robin rotation.
                    Each click routes to the next phone number in sequence, stored in localStorage
                    for consistent distribution.
                </p>
            </div>

            {/* Generated Code */}
            <div>
                <label className="label">Generated Code Snippet</label>
                <div className="code-box max-h-64 overflow-y-auto">
                    <pre>{generateScript()}</pre>
                </div>

                <button
                    className="btn-neon w-full mt-4 flex items-center justify-center gap-2"
                    onClick={copyToClipboard}
                >
                    <Copy className="w-4 h-4" />
                    {copied ? 'Copied!' : 'Copy Code'}
                </button>
            </div>
        </div>
    )
}

export default CSRotatorTab
