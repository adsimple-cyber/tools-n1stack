// Translations for Pulse Link - EN/ID
export const translations = {
    en: {
        header: {
            tagline: 'PREMIUM WHATSAPP UTILITY',
            darkMode: 'Dark Mode',
            lightMode: 'Light Mode'
        },
        tabs: {
            smartLink: 'Smart Link',
            invoice: 'Invoice Mode',
            rotator: 'CS Rotator',
            widget: 'Widget Baker',
            checker: 'Link Checker'
        },
        howToUse: 'How to Use',
        mobileTip: 'Mobile tip:',
        mobileTipText: 'Enable "Desktop Site" mode for the best experience.',
        footer: {
            poweredBy: 'Powered by',
            privacy: 'Privacy',
            terms: 'Terms',
            support: 'Found a bug? Chat Dev',
            copyright: '© 2024 All Rights Reserved',
            privacyModal: {
                title: 'Privacy Policy',
                subtitle: 'Client-Side Privacy',
                content: 'We value your privacy. Unlike other tools, N1STACK Pulse Link processes all data locally in your browser. No phone numbers or messages are stored in our servers.'
            },
            termsModal: {
                title: 'Terms & Disclaimer',
                subtitle: 'Important Notice',
                content: 'PULSE LINK is provided "as is". The Safe-Send Analyzer feature is only an estimation indicator. N1STACK is not responsible for any WhatsApp account blocking caused by WhatsApp Inc. policies.'
            },
            supportModal: {
                title: 'Support & Custom Tools',
                subtitle: 'Get in Touch',
                content: 'Found a bug? Or want a custom tool like this for your business? Chat with the developer directly.',
                chatButton: 'Chat Developer'
            }
        },
        descriptions: [
            {
                title: "🔗 Smart Link Generator",
                subtitle: "Generate WhatsApp Click-to-Chat Links Instantly",
                description: "Create professional wa.me links with pre-filled messages. Perfect for marketing campaigns, landing pages, and social media bio. Our built-in Safe-Send Analyzer helps you avoid WhatsApp bans by detecting spammy words and excessive caps.",
                howTo: [
                    "Select your country code from the dropdown",
                    "Enter the phone number (without leading 0)",
                    "Write your message template using *bold*, _italic_, or ~strikethrough~",
                    "Monitor the Safe-Send score to keep messages authentic",
                    "Copy the generated link and use it anywhere!"
                ]
            },
            {
                title: "📋 Invoice Mode",
                subtitle: "Professional Invoice Messages for WhatsApp",
                description: "Create beautiful, formatted invoice messages instantly. Add multiple items with quantity and pricing, include your bank details, and generate a professional invoice message ready to send to clients via WhatsApp.",
                howTo: [
                    "Add your products/services with quantity and price",
                    "The total will be calculated automatically",
                    "Enter your bank account details for payment",
                    "Click 'Copy Invoice Message' to copy the formatted invoice",
                    "Paste directly into any WhatsApp chat!"
                ]
            },
            {
                title: "👥 CS Rotator",
                subtitle: "Distribute Leads Automatically to Your Team",
                description: "Never miss a lead again! Create a single WhatsApp link that automatically rotates between multiple customer service agents. Perfect for businesses with multiple CS staff, ensuring fair lead distribution and faster response times.",
                howTo: [
                    "Add multiple CS agent phone numbers",
                    "Customize the greeting message template",
                    "Set rotation mode (round-robin or random)",
                    "Share the single generated link everywhere",
                    "Each click goes to a different agent automatically!"
                ]
            },
            {
                title: "💬 Widget Baker",
                subtitle: "Add WhatsApp Chat Button to Any Website",
                description: "Generate a beautiful floating WhatsApp button for your website. No coding required! Just customize the appearance, copy the code, and paste it into your website. Works with WordPress, Shopify, Wix, and any HTML website.",
                howTo: [
                    "Enter your WhatsApp number and welcome message",
                    "Customize button color, position, and animation",
                    "Preview how it will look on your site",
                    "Copy the generated embed code",
                    "Paste before </body> tag on your website!"
                ]
            },
            {
                title: "🔍 Link Checker",
                subtitle: "Preview Your Link's WhatsApp Appearance",
                description: "See exactly how your links will appear when shared on WhatsApp before posting. Check Open Graph tags, preview the link card image, and get optimization tips to maximize engagement when your links are shared.",
                howTo: [
                    "Paste any URL you want to check",
                    "Click 'Check' to fetch the metadata",
                    "Review the title, description, and image preview",
                    "Check optimization tips for improvements",
                    "Fix any issues on your website for better previews!"
                ]
            }
        ],
        smartLink: {
            phoneNumber: 'Phone Number',
            phoneHint: 'Enter number without 0 or country code',
            messageTemplate: 'Message Template',
            messagePlaceholder: 'Type your message... Use *bold*, _italic_, ~strikethrough~',
            bold: 'Bold',
            italic: 'Italic',
            strikethrough: 'Strikethrough',
            safeSendAnalyzer: 'Safe-Send Analyzer',
            safeNatural: '✅ Safe & Natural',
            safeSubtext: 'Your message looks authentic',
            warningText: '⚠️ Caution',
            warningSubtext: 'Reduce promotional words',
            dangerText: '⛔ HIGH BLOCK RISK!',
            dangerSubtext: 'Reduce capital letters & spam words',
            generatedLink: 'Generated Link',
            copyLink: 'Copy Link',
            copied: 'Copied!',
            tryIt: 'Try'
        },
        invoice: {
            itemList: 'Item List',
            productName: 'Product/Service Name',
            quantity: 'Qty',
            price: 'Price',
            subtotal: 'Subtotal',
            total: 'Total',
            addItem: 'Add Item',
            paymentInfo: 'Payment Information',
            bankName: 'Bank Name',
            accountNumber: 'Account Number',
            accountHolder: 'Account Holder Name',
            copyInvoice: 'Copy Invoice Message',
            copied: 'Copied!'
        },
        csRotator: {
            agentList: 'Team Phone Numbers',
            agentName: 'Name (e.g: CS Andy)',
            addAgent: 'Add Team Member',
            buttonText: 'Button Text',
            howItWorks: 'How It Works',
            generatedCode: 'Generated Code',
            copyCode: 'Copy Code',
            copied: 'Copied!',
            codeDescription: 'This script distributes visitors evenly using Round Robin rotation. Each click is directed to the next number in sequence, stored in localStorage for consistent distribution.'
        },
        widget: {
            phoneNumber: 'WhatsApp Number',
            welcomeMessage: 'Welcome Message',
            welcomePlaceholder: 'Hello! How can we help you?',
            buttonPosition: 'Button Position',
            left: 'Left',
            right: 'Right',
            animation: 'Animation',
            none: 'None',
            bounce: 'Bounce',
            pulse: 'Pulse',
            shake: 'Shake',
            buttonSize: 'Button Size',
            small: 'Small',
            medium: 'Medium',
            large: 'Large',
            buttonColor: 'Button Color',
            preview: 'Preview',
            embedCode: 'Embed Code',
            copyCode: 'Copy Code',
            copied: 'Copied!'
        },
        checker: {
            enterUrl: 'Enter URL to Check',
            urlPlaceholder: 'https://example.com',
            checkButton: 'Check',
            checking: 'Checking...',
            preview: 'Link Card Preview',
            title: 'Title',
            description: 'Description',
            image: 'Image',
            noImage: 'No image found',
            tips: 'Optimization Tips',
            error: 'Error fetching metadata'
        }
    },
    id: {
        header: {
            tagline: 'UTILITAS WHATSAPP PREMIUM',
            darkMode: 'Mode Gelap',
            lightMode: 'Mode Terang'
        },
        tabs: {
            smartLink: 'Smart Link',
            invoice: 'Invoice Mode',
            rotator: 'CS Rotator',
            widget: 'Widget Baker',
            checker: 'Link Checker'
        },
        howToUse: 'Cara Menggunakan',
        mobileTip: 'Tips mobile:',
        mobileTipText: 'Aktifkan mode "Situs Desktop" untuk pengalaman terbaik.',
        footer: {
            poweredBy: 'Powered by',
            privacy: 'Privasi',
            terms: 'Ketentuan',
            support: 'Ada bug? Chat Dev',
            copyright: '© 2024 Hak Cipta Dilindungi',
            privacyModal: {
                title: 'Kebijakan Privasi',
                subtitle: 'Privasi Sisi Klien',
                content: 'Kami menghargai privasi Anda. Berbeda dengan tools lain, N1STACK Pulse Link memproses semua data secara lokal di browser Anda. Tidak ada nomor telepon atau pesan yang disimpan di server kami.'
            },
            termsModal: {
                title: 'Syarat & Ketentuan',
                subtitle: 'Pemberitahuan Penting',
                content: 'PULSE LINK disediakan "sebagaimana adanya". Fitur Safe-Send Analyzer hanyalah indikator estimasi. N1STACK tidak bertanggung jawab atas pemblokiran akun WhatsApp yang disebabkan oleh kebijakan WhatsApp Inc.'
            },
            supportModal: {
                title: 'Bantuan & Custom Tools',
                subtitle: 'Hubungi Kami',
                content: 'Menemukan bug? Atau ingin custom tool seperti ini untuk bisnis Anda? Chat langsung dengan developer.',
                chatButton: 'Chat Developer'
            }
        },
        descriptions: [
            {
                title: "🔗 Smart Link Generator",
                subtitle: "Buat Link Click-to-Chat WhatsApp Secara Instan",
                description: "Buat link wa.me profesional dengan pesan yang sudah terisi. Cocok untuk kampanye marketing, landing page, dan bio media sosial. Safe-Send Analyzer bawaan membantu Anda menghindari blokir WhatsApp dengan mendeteksi kata-kata spam dan penggunaan huruf kapital berlebihan.",
                howTo: [
                    "Pilih kode negara dari dropdown",
                    "Masukkan nomor telepon (tanpa 0 di depan)",
                    "Tulis template pesan menggunakan *tebal*, _miring_, atau ~coret~",
                    "Pantau skor Safe-Send untuk menjaga pesan tetap natural",
                    "Salin link yang dihasilkan dan gunakan di mana saja!"
                ]
            },
            {
                title: "📋 Invoice Mode",
                subtitle: "Pesan Invoice Profesional untuk WhatsApp",
                description: "Buat pesan invoice terformat dengan indah secara instan. Tambahkan beberapa item dengan jumlah dan harga, sertakan detail rekening bank Anda, dan hasilkan pesan invoice profesional siap kirim ke klien via WhatsApp.",
                howTo: [
                    "Tambahkan produk/jasa dengan jumlah dan harga",
                    "Total akan dihitung secara otomatis",
                    "Masukkan detail rekening bank untuk pembayaran",
                    "Klik 'Salin Pesan Invoice' untuk menyalin invoice terformat",
                    "Tempel langsung ke chat WhatsApp manapun!"
                ]
            },
            {
                title: "👥 CS Rotator",
                subtitle: "Distribusikan Lead Otomatis ke Tim Anda",
                description: "Jangan pernah kehilangan lead lagi! Buat satu link WhatsApp yang otomatis berputar ke beberapa agen customer service. Cocok untuk bisnis dengan banyak staf CS, memastikan distribusi lead yang adil dan waktu respons lebih cepat.",
                howTo: [
                    "Tambahkan beberapa nomor telepon agen CS",
                    "Sesuaikan template pesan sambutan",
                    "Atur mode rotasi (round-robin atau acak)",
                    "Bagikan satu link yang dihasilkan ke mana saja",
                    "Setiap klik akan dialihkan ke agen berbeda secara otomatis!"
                ]
            },
            {
                title: "💬 Widget Baker",
                subtitle: "Tambahkan Tombol Chat WhatsApp ke Website Apapun",
                description: "Hasilkan tombol WhatsApp mengambang yang cantik untuk website Anda. Tanpa coding! Cukup sesuaikan tampilan, salin kode, dan tempel ke website Anda. Bekerja dengan WordPress, Shopify, Wix, dan website HTML apapun.",
                howTo: [
                    "Masukkan nomor WhatsApp dan pesan sambutan",
                    "Sesuaikan warna, posisi, dan animasi tombol",
                    "Preview tampilannya di situs Anda",
                    "Salin kode embed yang dihasilkan",
                    "Tempel sebelum tag </body> di website Anda!"
                ]
            },
            {
                title: "🔍 Link Checker",
                subtitle: "Preview Tampilan Link Anda di WhatsApp",
                description: "Lihat persis bagaimana link Anda akan muncul saat dibagikan di WhatsApp sebelum memposting. Periksa Open Graph tags, preview gambar link card, dan dapatkan tips optimasi untuk memaksimalkan engagement saat link Anda dibagikan.",
                howTo: [
                    "Tempel URL apapun yang ingin diperiksa",
                    "Klik 'Periksa' untuk mengambil metadata",
                    "Tinjau judul, deskripsi, dan preview gambar",
                    "Cek tips optimasi untuk perbaikan",
                    "Perbaiki masalah di website Anda untuk preview lebih baik!"
                ]
            }
        ],
        smartLink: {
            phoneNumber: 'Nomor Telepon',
            phoneHint: 'Masukkan nomor tanpa 0 atau kode negara',
            messageTemplate: 'Template Pesan',
            messagePlaceholder: 'Ketik pesan Anda... Gunakan *tebal*, _miring_, ~coret~',
            bold: 'Tebal',
            italic: 'Miring',
            strikethrough: 'Coret',
            safeSendAnalyzer: 'Safe-Send Analyzer',
            safeNatural: '✅ Aman & Natural',
            safeSubtext: 'Pesan Anda terlihat otentik',
            warningText: '⚠️ Hati-hati',
            warningSubtext: 'Kurangi kata-kata promosi',
            dangerText: '⛔ RISIKO BLOKIR TINGGI!',
            dangerSubtext: 'Kurangi huruf kapital & kata spam',
            generatedLink: 'Link yang Dihasilkan',
            copyLink: 'Salin Link',
            copied: 'Tersalin!',
            tryIt: 'Coba'
        },
        invoice: {
            itemList: 'Daftar Item',
            productName: 'Nama Produk/Jasa',
            quantity: 'Jml',
            price: 'Harga',
            subtotal: 'Subtotal',
            total: 'Total',
            addItem: 'Tambah Item',
            paymentInfo: 'Informasi Pembayaran',
            bankName: 'Nama Bank',
            accountNumber: 'Nomor Rekening',
            accountHolder: 'Nama Pemilik Rekening',
            copyInvoice: 'Salin Pesan Invoice',
            copied: 'Tersalin!'
        },
        csRotator: {
            agentList: 'Nomor Telepon Tim',
            agentName: 'Nama (cth: CS Andi)',
            addAgent: 'Tambah Anggota Tim',
            buttonText: 'Teks Tombol',
            howItWorks: 'Cara Kerja',
            generatedCode: 'Kode yang Dihasilkan',
            copyCode: 'Salin Kode',
            copied: 'Tersalin!',
            codeDescription: 'Script ini mendistribusikan pengunjung secara merata menggunakan rotasi Round Robin. Setiap klik diarahkan ke nomor berikutnya secara berurutan, disimpan di localStorage untuk distribusi yang konsisten.'
        },
        widget: {
            phoneNumber: 'Nomor WhatsApp',
            welcomeMessage: 'Pesan Sambutan',
            welcomePlaceholder: 'Halo! Ada yang bisa kami bantu?',
            buttonPosition: 'Posisi Tombol',
            left: 'Kiri',
            right: 'Kanan',
            animation: 'Animasi',
            none: 'Tidak ada',
            bounce: 'Bounce',
            pulse: 'Pulse',
            shake: 'Shake',
            buttonSize: 'Ukuran Tombol',
            small: 'Kecil',
            medium: 'Sedang',
            large: 'Besar',
            buttonColor: 'Warna Tombol',
            preview: 'Preview',
            embedCode: 'Kode Embed',
            copyCode: 'Salin Kode',
            copied: 'Tersalin!'
        },
        checker: {
            enterUrl: 'Masukkan URL untuk Diperiksa',
            urlPlaceholder: 'https://contoh.com',
            checkButton: 'Periksa',
            checking: 'Memeriksa...',
            preview: 'Preview Link Card',
            title: 'Judul',
            description: 'Deskripsi',
            image: 'Gambar',
            noImage: 'Tidak ada gambar',
            tips: 'Tips Optimasi',
            error: 'Gagal mengambil metadata'
        }
    }
}
