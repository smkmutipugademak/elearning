let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData =[
    {
        q: "Apa fungsi utama dari Selection Tool di Audacity?",
        a: ["Memotong audio", "Memilih area audio untuk diedit", "Menghapus noise", "Menambah efek reverb"],
        correct: 1,
        pembahasan: "Selection Tool digunakan untuk memilih bagian audio sebelum diedit atau diberi efek."
    },
    {
        q: "Tool apakah yang digunakan untuk menggeser posisi track tanpa mengubah durasi audio?",
        a: ["Envelope Tool", "Time Shift Tool", "Draw Tool", "Zoom Tool"],
        correct: 1,
        pembahasan: "Time Shift Tool memindahkan track kiri/kanan pada timeline."
    },
    {
        q: "Efek apa yang digunakan untuk mengurangi noise latar belakang seperti hiss atau hum?",
        a: ["Normalize", "Noise Reduction", "Equalization", "Limiter"],
        correct: 1,
        pembahasan: "Noise Reduction adalah fitur utama untuk membersihkan noise latar."
    },
    {
        q: "Untuk memperbesar tampilan waveform secara horizontal digunakan...",
        a: ["Draw Tool", "Zoom Tool", "Envelope Tool", "Sync-Lock Tracks"],
        correct: 1,
        pembahasan: "Zoom Tool memperbesar tampilan waveform agar editing lebih detail."
    },
    {
        q: "Efek apa yang digunakan untuk menghaluskan perbedaan volume pada audio?",
        a: ["Compressor", "Amplify", "Fade In", "Echo"],
        correct: 0,
        pembahasan: "Compressor menyeimbangkan dinamika suara."
    },
    {
        q: "Fitur Normalize digunakan untuk...",
        a: ["Menghapus noise", "Mengatur level puncak audio ke nilai tertentu", "Mempercepat audio", "Membalikkan audio"],
        correct: 1,
        pembahasan: "Normalize menyamakan level audio berdasarkan peak amplitude."
    },
    {
        q: "Perintah untuk memotong bagian audio yang dipilih adalah...",
        a: ["Delete", "Trim Audio", "Split Audio", "Cut"],
        correct: 1,
        pembahasan: "Trim Audio membuang bagian di luar seleksi."
    },
    {
        q: "Fungsi dari Envelope Tool adalah...",
        a: ["Menggambar ulang bentuk waveform", "Mengatur volume secara bertahap", "Memotong track", "Menghapus clip"],
        correct: 1,
        pembahasan: "Envelope Tool membuat kurva volume naik/turun di track."
    },
    {
        q: "Tool mana yang digunakan untuk menggambar dan memperbaiki bentuk waveform secara manual?",
        a: ["Draw Tool", "Pen Tool", "Shape Tool", "Node Tool"],
        correct: 0,
        pembahasan: "Draw Tool dapat memperbaiki waveform secara detail."
    },
    {
        q: "Untuk memisahkan stereo menjadi dua track mono digunakan menu...",
        a: ["Track > Split Stereo to Mono", "Effect > Split", "Audio > Convert", "Tools > Unmerge"],
        correct: 0,
        pembahasan: "Audacity menyediakan opsi langsung untuk split stereo."
    },
    {
        q: "Efek apakah yang digunakan untuk membuat suara bergema?",
        a: ["Echo", "Limiter", "Compressor", "Noise Gate"],
        correct: 0,
        pembahasan: "Echo memberikan efek pantulan suara."
    },
    {
        q: "Menu apa yang digunakan untuk meningkatkan atau menurunkan volume secara keseluruhan?",
        a: ["Amplify", "Fade In", "Limiter", "Gate"],
        correct: 0,
        pembahasan: "Amplify meningkatkan atau menurunkan gain audio."
    },
    {
        q: "Shortcut untuk memutar audio hanya pada area seleksi adalah...",
        a: ["Space", "Shift + Space", "Ctrl + R", "Ctrl + Space"],
        correct: 1,
        pembahasan: "Shift + Space memutar hanya bagian yang diseleksi."
    },
    {
        q: "Untuk menghapus breath (“helaan napas”) yang terlalu keras, teknik yang digunakan adalah...",
        a: ["Noise Reduction", "Amplify negatif", "Envelope Tool", "High-pass Filter"],
        correct: 1,
        pembahasan: "Menggunakan Amplify negatif menurunkan volume breath secara halus."
    },
    {
        q: "Efek apa yang digunakan untuk meratakan puncak audio yang terlalu tinggi?",
        a: ["Limiter", "Reverb", "Bass Boost", "Normalize"],
        correct: 0,
        pembahasan: "Limiter mencegah audio melewati batas peak tertentu."
    },
    {
        q: "Jika ingin mempercepat audio tanpa mengubah pitch, gunakan...",
        a: ["Change Speed", "Change Pitch", "Change Tempo", "Sliding Stretch"],
        correct: 2,
        pembahasan: "Change Tempo mengubah durasi tanpa mengubah nada."
    },
    {
        q: "Efek High-pass Filter digunakan untuk...",
        a: ["Menghapus frekuensi rendah", "Menghapus frekuensi tinggi", "Menambah bass", "Menghapus vokal"],
        correct: 0,
        pembahasan: "High-pass menghilangkan frekuensi rendah."
    },
    {
        q: "Untuk menghapus suara klik atau pop, fitur yang digunakan adalah...",
        a: ["Repair", "DeClicker", "DeNoise", "Limiter"],
        correct: 0,
        pembahasan: "Repair memperbaiki lonjakan waveform kecil."
    },
    {
        q: "Fade In digunakan untuk...",
        a: ["Memperlambat audio", "Menaikkan volume secara bertahap", "Menghapus suara", "Menstabilkan pitch"],
        correct: 1,
        pembahasan: "Fade In menaikkan volume dari 0 ke normal."
    },
    {
        q: "Untuk membuat dua track sinkron bergerak bersama digunakan fitur...",
        a: ["Sync-Lock Tracks", "Grouping", "Track Link", "Align Tool"],
        correct: 0,
        pembahasan: "Sync-Lock Tracks mengikat track agar tidak bergeser sendiri."
    },
    {
        q: "Fitur Quantization di Audacity digunakan untuk...",
        a: ["Tidak ada, Audacity tidak memiliki fitur quantization", "Mengatur timing", "Menghapus beat", "Mengubah pitch"],
        correct: 0,
        pembahasan: "Audacity tidak memiliki fitur midi quantization."
    },
    {
        q: "Jika audio stereo tidak seimbang (kanan lebih keras), solusi paling cepat adalah...",
        a: ["Amplify", "Pan Adjustment", "Split Stereo to Mono", "Normalize Left Channel"],
        correct: 1,
        pembahasan: "Pan mengatur posisi suara L-R."
    },
    {
        q: "Untuk mengekspor audio ke format MP3, Audacity memerlukan...",
        a: ["Codec tambahan LAME", "Plugin WAV", "No additional plugin", "ASIO Driver"],
        correct: 0,
        pembahasan: "Audacity membutuhkan LAME MP3 encoder pada versi lama."
    },
    {
        q: "Efek 'Change Pitch' mengubah...",
        a: ["Kecepatan audio", "Nada audio", "Volume", "Frekensiu low-end saja"],
        correct: 1,
        pembahasan: "Change Pitch menaikkan atau menurunkan pitch tanpa mengubah durasi."
    },
    {
        q: "Untuk menyeleksi seluruh track digunakan shortcut...",
        a: ["Ctrl + A", "Ctrl + Shift + A", "A", "Alt + A"],
        correct: 0,
        pembahasan: "Ctrl + A adalah shortcut umum untuk Select All."
    },
    {
        q: "Efek NOTCH Filter digunakan untuk...",
        a: ["Menghilangkan frekuensi tertentu", "Menambah bass", "Menghapus noise", "Menambah echo"],
        correct: 0,
        pembahasan: "Notch Filter menghapus frekuensi sempit yang mengganggu."
    },
    {
        q: "Time Stretch digunakan untuk...",
        a: ["Mengubah volume", "Mengubah durasi klip", "Menghapus bass", "Menggabungkan track"],
        correct: 1,
        pembahasan: "Time Stretch mengubah panjang audio."
    },
    {
        q: "Fitur Noise Gate berfungsi untuk...",
        a: ["Menambah noise", "Mengurangi suara yang berada di bawah threshold tertentu", "Meningkatkan gain", "Menambah echo"],
        correct: 1,
        pembahasan: "Noise Gate mematikan suara pelan seperti nafas kecil atau ambience."
    },
    {
        q: "Untuk menyalin area seleksi ke clipboard, perintah yang digunakan adalah...",
        a: ["Copy", "Store", "Export", "Repeat"],
        correct: 0,
        pembahasan: "Copy menyalin area terpilih."
    },
    {
        q: "Equalization (EQ) digunakan untuk...",
        a: ["Mengubah pitch", "Mengatur frekuensi audio", "Menghapus clip", "Menggabungkan track"],
        correct: 1,
        pembahasan: "EQ mengatur frekuensi tinggi, rendah, maupun mid."
    },
    {
        q: "Fungsi utama 'Spectrogram View' adalah...",
        a: ["Melihat waveform", "Melihat intensitas frekuensi audio", "Menghapus noise", "Melakukan mixing"],
        correct: 1,
        pembahasan: "Spectrogram menampilkan frekuensi dalam bentuk warna dan intensitas."
    },
    {
        q: "Menu 'Align Tracks' digunakan untuk...",
        a: ["Mensinkronkan awal track", "Menghapus track", "Mengubah waveform", "Mengatur pan"],
        correct: 0,
        pembahasan: "Align menyelaraskan posisi beberapa track."
    },
    {
        q: "Efek Reverb digunakan untuk...",
        a: ["Menghapus noise", "Menambah ruang atau ambience", "Menstabilkan volume", "Menghapus breath"],
        correct: 1,
        pembahasan: "Reverb menambah efek ruangan agar suara lebih natural."
    },
    {
        q: "Untuk memisahkan area seleksi menjadi klip baru digunakan...",
        a: ["Split", "Cut", "Trim", "Delete"],
        correct: 0,
        pembahasan: "Split memotong area tanpa menghapus bagian lainnya."
    },
    {
        q: "Fitur 'Crossfade' digunakan untuk...",
        a: ["Menghapus dua track", "Membuat transisi halus antara dua audio", "Mempercepat track", "Mengubah pitch"],
        correct: 1,
        pembahasan: "Crossfade membuat transisi lembut antar dua track."
    },
    {
        q: "Efek 'Bass and Treble' digunakan untuk...",
        a: ["Memotong track", "Menambah atau mengurangi bass/treble", "Mengubah tempo", "Menghapus vokal"],
        correct: 1,
        pembahasan: "Bass and Treble mengatur frekuensi rendah dan tinggi."
    },
    {
        q: "Untuk membuat suara robot, efek yang digunakan adalah...",
        a: ["Phaser atau Vocoder", "Limiter", "Noise Gate", "EQ High-pass"],
        correct: 0,
        pembahasan: "Phaser atau Vocoder memberikan efek distorsi khas suara robot."
    },
    {
        q: "Efek Reverse digunakan untuk...",
        a: ["Memotong track", "Membalikkan audio dari belakang ke depan", "Mempercepat audio", "Menambah bising"],
        correct: 1,
        pembahasan: "Reverse membuat audio berjalan mundur."
    },
    {
        q: "Untuk menghilangkan vokal dari lagu, teknik yang digunakan adalah...",
        a: ["Vocal Cut / Vocal Reduction", "Delay", "Limiter", "Filter Curve"],
        correct: 0,
        pembahasan: "Vocal Reduction menghapus mid-frequency tempat vokal biasanya berada."
    },
    {
        q: "Untuk menyatukan beberapa file audio menjadi satu track, fitur yang digunakan adalah...",
        a: ["Join", "Mix and Render", "Combine", "Merge"],
        correct: 1,
        pembahasan: "Mix and Render menggabungkan semua track menjadi satu audio mixdown."
    }

]