let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

var quizData = quizData || [];
const quizData =
quizData.push(
    {
        q: "Adobe Premiere Pro adalah salah satu software editing video profesional yang digunakan untuk membuat, memotong, dan menyusun video. Premiere Pro banyak dipilih karena...",
        a: [
            "Hanya dapat digunakan untuk membuat animasi 3D",
            "Memiliki fitur editing lengkap dan mendukung berbagai format video profesional",
            "Tidak bisa mengekspor video",
            "Tidak mendukung audio",
            "Hanya dapat digunakan di perangkat mobile"
        ],
        correct: 1,
        pembahasan: "Premiere Pro memiliki fitur editing lengkap dan fleksibel untuk berbagai kebutuhan produksi video."
    },
    {
        q: "Timeline dalam Adobe Premiere Pro adalah area kerja utama untuk mengatur urutan video, audio, efek, dan transisi. Fungsi timeline adalah...",
        a: [
            "Menyimpan preset warna",
            "Menempatkan dan menyusun klip sehingga membentuk video final",
            "Mengatur preferensi aplikasi",
            "Membuat project baru",
            "Menghapus semua aset media"
        ],
        correct: 1,
        pembahasan: "Timeline adalah pusat proses editing di mana seluruh klip disusun menjadi satu alur video."
    },
    {
        q: "Panel Project digunakan untuk mengorganisir semua aset seperti video, audio, gambar, dan sequence. Panel ini penting karena...",
        a: [
            "Digunakan untuk menambahkan efek transisi",
            "Berisi semua file yang digunakan dalam proyek sehingga mudah diakses",
            "Mengatur ukuran ekspor video",
            "Mengatur warna tampilan UI Premiere",
            "Digunakan untuk memotong video"
        ],
        correct: 1,
        pembahasan: "Project panel menjadi tempat mengelola seluruh file yang masuk ke proyek editing."
    },
    {
        q: "Tools 'Razor' digunakan untuk...",
        a: [
            "Menggeser seluruh timeline",
            "Memotong klip video atau audio di titik tertentu",
            "Mengatur warna video",
            "Menghapus sequence",
            "Menambahkan keyframe"
        ],
        correct: 1,
        pembahasan: "Razor tool berfungsi memotong klip menjadi beberapa bagian."
    },
    {
        q: "Effect Controls panel berfungsi untuk...",
        a: [
            "Menghapus semua efek",
            "Mengatur parameter efek seperti opacity, scale, position, dan audio levels",
            "Membuat project baru",
            "Mengelola library media",
            "Menentukan preset ekspor"
        ],
        correct: 1,
        pembahasan: "Setiap perubahan efek pada klip dilakukan melalui Effect Controls."
    },
    {
        q: "Sequence adalah...",
        a: [
            "Folder untuk menyimpan aset",
            "Kumpulan klip yang disusun di timeline untuk dijadikan video",
            "Jenis transisi video",
            "Preset warna",
            "Format ekspor"
        ],
        correct: 1,
        pembahasan: "Sequence adalah tempat penyusunan klip video untuk menghasilkan output akhir."
    },
    {
        q: "Proses 'Import' dalam Premiere Pro bertujuan untuk...",
        a: [
            "Menghapus file dari komputer",
            "Memasukkan file media ke dalam Project Panel",
            "Mengedit audio",
            "Membuat transisi baru",
            "Mengatur sequence"
        ],
        correct: 1,
        pembahasan: "Import adalah langkah awal untuk memasukkan media ke proyek editing."
    },
    {
        q: "Lumetri Color digunakan dalam Adobe Premiere Pro untuk...",
        a: [
            "Menambah subtitle otomatis",
            "Melakukan koreksi warna dan color grading",
            "Memotong klip",
            "Mengatur ukuran layar",
            "Membuat animasi 3D"
        ],
        correct: 1,
        pembahasan: "Lumetri Color adalah panel untuk pengaturan warna profesional."
    },
    {
        q: "Transition seperti Cross Dissolve atau Dip to Black digunakan untuk...",
        a: [
            "Meningkatkan volume audio",
            "Membuat perpindahan antar klip lebih halus",
            "Mempercepat rendering",
            "Mengatur ukuran sequence",
            "Menghapus background video"
        ],
        correct: 1,
        pembahasan: "Transisi dipakai untuk membuat perpindahan antar klip tidak terlihat kasar."
    },
    {
        q: "Keyframe digunakan dalam Premiere Pro untuk...",
        a: [
            "Menghapus efek",
            "Mengatur perubahan parameter secara bertahap, seperti posisi, skala, atau volume",
            "Memotong klip otomatis",
            "Mengatur format file",
            "Mengelola project cloud"
        ],
        correct: 1,
        pembahasan: "Keyframe membuat animasi atau perubahan dinamis pada klip."
    },
    {
        q: "Audio Gain digunakan untuk...",
        a: [
            "Menambahkan efek transisi audio",
            "Mengatur kekuatan dasar audio sebelum mixing",
            "Membuat klip menjadi slow motion",
            "Merender audio terpisah",
            "Menghapus background musik"
        ],
        correct: 1,
        pembahasan: "Audio Gain menentukan seberapa keras audio sebelum proses mixing."
    },
    {
        q: "Fungsi Ripple Delete adalah...",
        a: [
            "Menghapus klip tanpa menggeser klip lain",
            "Menghapus klip dan otomatis menutup celah pada timeline",
            "Menghapus semua efek dalam timeline",
            "Menghapus sequence",
            "Menghapus audio saja"
        ],
        correct: 1,
        pembahasan: "Ripple Delete menjaga timeline tetap rapat setelah penghapusan klip."
    },
    {
        q: "Marker digunakan untuk...",
        a: [
            "Menghapus transisi",
            "Menandai bagian penting dalam timeline untuk mempermudah editing",
            "Menambah track baru",
            "Mengatur ukuran ekspor",
            "Mengganti warna background UI"
        ],
        correct: 1,
        pembahasan: "Marker memudahkan editor menandai bagian penting pada timeline."
    },
    {
        q: "Adjustment layer digunakan untuk...",
        a: [
            "Menghapus semua klip",
            "Menerapkan efek ke banyak klip sekaligus tanpa mengubah klip aslinya",
            "Mengatur resolusi project",
            "Membuat sequence otomatis",
            "Memotong video lebih cepat"
        ],
        correct: 1,
        pembahasan: "Adjustment layer efektif untuk color grading seragam."
    },
    {
        q: "Proxy digunakan dalam Premiere Pro ketika...",
        a: [
            "Klip memiliki resolusi rendah",
            "Klip beresolusi tinggi sehingga editor membutuhkan proses editing yang lebih ringan",
            "Tidak ada audio",
            "Klip tidak kompatibel",
            "Editor ingin memperbesar ukuran file"
        ],
        correct: 1,
        pembahasan: "Proxy mempermudah editing file video berat seperti 4K atau 8K."
    },
    {
        q: "Render preview dalam Premiere Pro bertujuan untuk...",
        a: [
            "Menghapus efek",
            "Mempercepat pemutaran preview di timeline",
            "Menghilangkan audio",
            "Menambah resolusi file",
            "Mengatur codec"
        ],
        correct: 1,
        pembahasan: "Render preview membuat editing lebih lancar saat banyak efek digunakan."
    },
    {
        q: "Effect 'Warp Stabilizer' digunakan untuk...",
        a: [
            "Meningkatkan volume audio",
            "Menstabilkan video yang goyah",
            "Menghapus background",
            "Menambah frame rate",
            "Membuat slow motion"
        ],
        correct: 1,
        pembahasan: "Warp Stabilizer meminimalkan guncangan pada video."
    },
    {
        q: "Speed/Duration digunakan untuk...",
        a: [
            "Mengatur warna klip",
            "Mengubah kecepatan video seperti slow motion atau fast motion",
            "Menambahkan teks",
            "Mengganti format file",
            "Menghapus efek"
        ],
        correct: 1,
        pembahasan: "Speed/Duration memungkinkan pengaturan kecepatan playback klip."
    },
    {
        q: "Essential Graphics digunakan untuk...",
        a: [
            "Menghapus klip",
            "Membuat dan mengedit teks, title, dan motion graphics",
            "Mengatur audio",
            "Membuat transisi",
            "Merender file"
        ],
        correct: 1,
        pembahasan: "Essential Graphics mempermudah pembuatan title dan lower third."
    },
    {
        q: "Premiere Pro dapat memisahkan audio dari video menggunakan fitur...",
        a: [
            "Link/Unlink",
            "Lumetri Scopes",
            "Markers",
            "Track Lock",
            "VFX Panel"
        ],
        correct: 0,
        pembahasan: "Unlink memisahkan audio dan video agar bisa diedit terpisah."
    },
    {
        q: "Color grading diperlukan untuk...",
        a: [
            "Menghapus noise",
            "Memberikan gaya warna tertentu sehingga video terlihat lebih sinematik dan konsisten",
            "Membuat animasi karakter",
            "Memotong video otomatis",
            "Membuat transisi audio"
        ],
        correct: 1,
        pembahasan: "Color grading mengatur tone warna agar visual terlihat profesional."
    },
    {
        q: "Noise Reduction pada audio digunakan untuk...",
        a: [
            "Menambah bass",
            "Mengurangi suara bising yang tidak diinginkan",
            "Membuat video slow motion",
            "Menghapus track audio",
            "Mengedit warna"
        ],
        correct: 1,
        pembahasan: "Noise reduction membuat audio lebih bersih."
    },
    {
        q: "H.264 adalah...",
        a: [
            "Efek animasi",
            "Format codec umum untuk ekspor video dengan ukuran kecil dan kualitas baik",
            "Format audio",
            "Preset transisi",
            "Jenis timeline"
        ],
        correct: 1,
        pembahasan: "H.264 paling sering digunakan untuk video YouTube dan media sosial."
    },
    {
        q: "Export Media (Ctrl+M) digunakan untuk...",
        a: [
            "Menghapus project",
            "Merender dan menyimpan video final dari timeline",
            "Mengubah warna UI",
            "Membuka file baru",
            "Menambah sequence"
        ],
        correct: 1,
        pembahasan: "Export Media adalah proses menghasilkan file akhir dalam berbagai format."
    },
    {
        q: "Track Lock digunakan untuk...",
        a: [
            "Menghapus track",
            "Mengunci track agar tidak berubah saat mengedit track lain",
            "Mengatur warna klip",
            "Mengubah format file",
            "Menambah efek visual"
        ],
        correct: 1,
        pembahasan: "Track Lock melindungi track dari perubahan yang tidak sengaja."
    },
    {
        q: "Merging clips digunakan untuk...",
        a: [
            "Menghapus audio",
            "Menggabungkan video dan audio yang direkam secara terpisah",
            "Menambah transisi",
            "Mengatur scale",
            "Menghapus seluruh klip"
        ],
        correct: 1,
        pembahasan: "Merging clips membantu sincronisasi audio eksternal dengan video."
    },
    {
        q: "Multi-Camera Editing digunakan ketika...",
        a: [
            "Mengedit video satu kamera",
            "Mengedit video dari banyak kamera sekaligus dalam satu timeline",
            "Menghapus audio",
            "Mengatur pewarnaan otomatis",
            "Membuat sequence baru"
        ],
        correct: 1,
        pembahasan: "Multi-cam mempermudah pemilihan sudut kamera saat editing."
    },
    {
        q: "Auto Save pada Premiere Pro berfungsi untuk...",
        a: [
            "Menghapus project otomatis",
            "Menyimpan project secara berkala untuk mencegah kehilangan data",
            "Menghapus asset lama",
            "Menambah layer otomatis",
            "Mengubah ukuran timeline"
        ],
        correct: 1,
        pembahasan: "Auto Save sangat penting untuk menjaga keamanan project editing."
    },
    {
        q: "Track Matte Key digunakan untuk...",
        a: [
            "Menghapus klip",
            "Membuat efek masking menggunakan layer lain sebagai referensi",
            "Mengatur warna otomatis",
            "Mengurangi suara latar",
            "Menambah framerate"
        ],
        correct: 1,
        pembahasan: "Track Matte Key memungkinkan pembuatan efek kreatif dengan masking."
    },
    {
        q: "Green Screen atau Chroma Key diproses dengan efek...",
        a: [
            "Gaussian Blur",
            "Ultra Key",
            "Echo",
            "Strobe Light",
            "Warp Stabilizer"
        ],
        correct: 1,
        pembahasan: "Ultra Key digunakan untuk menghapus background hijau."
    }, {
    q: "Tool apakah yang digunakan untuk memotong klip secara presisi tanpa memindahkan posisi klip lainnya di timeline?",
    a: ["Selection Tool", "Razor Tool", "Slip Tool", "Ripple Edit Tool"],
    correct: 1,
    pembahasan: "Razor Tool digunakan untuk memotong klip tepat di titik yang dipilih tanpa memengaruhi klip lain."
},
    {
        q: "Tool yang digunakan untuk menggeser isi klip tanpa mengubah durasi atau posisi klip di timeline adalah...",
        a: ["Slide Tool", "Slip Tool", "Track Select Tool", "Rate Stretch Tool"],
        correct: 1,
        pembahasan: "Slip Tool menggeser isi klip (in-out) tanpa memindahkan posisi dan panjang klip di timeline."
    },
    {
        q: "Tool yang digunakan untuk mempercepat atau memperlambat durasi klip adalah...",
        a: ["Ripple Edit Tool", "Rate Stretch Tool", "Track Select Tool", "Rolling Edit Tool"],
        correct: 1,
        pembahasan: "Rate Stretch Tool mengubah durasi klip sekaligus mengatur speed-nya."
    },
    {
        q: "Jika ingin menggeser seluruh klip pada satu track maju atau mundur sekaligus, tool yang digunakan adalah...",
        a: ["Ripple Edit Tool", "Slide Tool", "Track Select Forward Tool", "Rolling Edit Tool"],
        correct: 2,
        pembahasan: "Track Select Forward Tool memilih semua klip di sebelah kanan playhead dalam satu klik."
    },
    {
        q: "Tool apakah yang memungkinkan mengedit titik masuk dan keluar dua klip sekaligus tanpa mengubah panjang total timeline?",
        a: ["Ripple Edit Tool", "Rolling Edit Tool", "Slip Tool", "Selection Tool"],
        correct: 1,
        pembahasan: "Rolling Edit Tool memodifikasi edit point antara dua klip tanpa memengaruhi durasi keseluruhan."
    },
    {
        q: "Efek apa yang digunakan untuk menstabilkan video yang goyang di Premiere Pro?",
        a: ["Transform", "Warp Stabilizer", "Lens Distortion", "Directional Blur"],
        correct: 1,
        pembahasan: "Warp Stabilizer digunakan untuk menstabilkan footage yang bergetar atau shaky."
    },
    {
        q: "Panel apa yang digunakan untuk mengatur warna, kontras, highlight, shadow, dan tone video?",
        a: ["Audio Track Mixer", "Effect Controls", "Lumetri Color", "Metadata"],
        correct: 2,
        pembahasan: "Lumetri Color menyediakan kontrol koreksi warna secara lengkap."
    },
    {
        q: "Jika ingin membuat transisi manual dengan mengatur opacity secara keyframe, panel mana yang harus digunakan?",
        a: ["Lumetri Color", "Effect Controls", "Source Monitor", "Program Monitor"],
        correct: 1,
        pembahasan: "Effect Controls digunakan untuk mengatur keyframe opacity, posisi, skala, dan efek lainnya."
    },
    {
        q: "Efek audio untuk menghilangkan noise latar belakang seperti dengungan atau angin adalah...",
        a: ["DeNoise", "Reverb", "Hard Limiter", "Parametric EQ"],
        correct: 0,
        pembahasan: "DeNoise menghapus noise latar belakang secara otomatis."
    },
    {
        q: "Tool yang digunakan untuk memperbesar area tampilan timeline tanpa mengubah ukuran klip adalah...",
        a: ["Zoom Tool", "Hand Tool", "Rate Stretch Tool", "Slide Tool"],
        correct: 0,
        pembahasan: "Zoom Tool memperbesar tampilan timeline agar proses editing lebih detail."
    }
);