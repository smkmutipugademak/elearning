let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan multimedia?",
        a: [
            "Pengolahan data numerik",
            "Gabungan berbagai media untuk menyampaikan informasi",
            "Teknologi komunikasi digital",
            "Pembuatan video secara manual",
            "Penyimpanan data pada komputer"
        ],
        correct: 1,
        pembahasan: "Multimedia adalah penggabungan beberapa media (teks, audio, grafis, video, dll.) untuk menyampaikan informasi secara interaktif."
    },
    {
        q: "Komponen utama dari produksi konten multimedia meliputi, kecuali:",
        a: [
            "Audio",
            "Video",
            "Animasi",
            "Data spreadsheet",
            "Grafis"
        ],
        correct: 3,
        pembahasan: "Data spreadsheet bukan komponen utama dalam produksi multimedia."
    },
    {
        q: "Apa fungsi utama grafis dalam multimedia?",
        a: [
            "Menyampaikan informasi secara visual",
            "Sebagai dekorasi tambahan",
            "Menggantikan teks dalam aplikasi",
            "Mengurangi ukuran file",
            "Mempermudah penggunaan audio"
        ],
        correct: 0,
        pembahasan: "Grafis digunakan untuk menyampaikan informasi secara visual agar mudah dipahami."
    },
    {
        q: "Apa yang dimaksud dengan resolusi layar?",
        a: [
            "Jumlah bit per pixel",
            "Jumlah titik (dots) per inci pada layar monitor",
            "Kapasitas penyimpanan layar",
            "Ukuran layar dalam inci",
            "Kompresi ukuran file"
        ],
        correct: 1,
        pembahasan: "Resolusi layar adalah jumlah titik per inci (dpi) untuk menampilkan gambar pada monitor."
    },
    {
        q: "Manfaat penggunaan teks dalam multimedia adalah:",
        a: [
            "Menambah estetika aplikasi",
            "Menyampaikan informasi dengan efisien",
            "Menggantikan audio",
            "Mengurangi ukuran aplikasi",
            "Sebagai latar belakang"
        ],
        correct: 1,
        pembahasan: "Teks menyampaikan informasi secara langsung dan efisien."
    },
    {
        q: "Salah satu parameter pemilihan gambar digital adalah:",
        a: [
            "Format file audio",
            "Resolusi bit warna",
            "Ukuran font",
            "Kecepatan animasi",
            "Kapasitas RAM"
        ],
        correct: 1,
        pembahasan: "Resolusi bit warna menentukan jumlah warna dalam gambar."
    },
    {
        q: "Apa yang dimaksud dengan vector image?",
        a: [
            "Gambar berbasis pixel",
            "Gambar yang disimpan sebagai persamaan matematika",
            "Gambar beresolusi rendah",
            "Gambar yang dikompresi",
            "Gambar berbasis animasi"
        ],
        correct: 1,
        pembahasan: "Vector image disimpan dalam bentuk persamaan matematika."
    },
    {
        q: "Manfaat utama animasi dalam multimedia adalah:",
        a: [
            "Menambah elemen visual yang menarik",
            "Mengurangi ukuran aplikasi",
            "Menggantikan teks",
            "Mempercepat komputasi",
            "Mengurangi kebutuhan grafis"
        ],
        correct: 0,
        pembahasan: "Animasi meningkatkan daya tarik visual aplikasi."
    },
    {
        q: "Apa yang dimaksud amplitude pada gelombang suara?",
        a: [
            "Frekuensi gelombang",
            "Tingkat kekerasan suara",
            "Panjang gelombang",
            "Waktu gelombang bergetar",
            "Kecepatan suara"
        ],
        correct: 1,
        pembahasan: "Amplitude menunjukkan kekerasan suara."
    },
    {
        q: "Jenis animasi yang melibatkan pembuatan gambar frame-by-frame disebut:",
        a: ["Animasi 2D", "Animasi vektor", "Animasi frame", "Animasi digital", "Animasi 3D"],
        correct: 2,
        pembahasan: "Animasi frame dibuat dengan menggambar setiap frame secara manual."
    },
    {
        q: "Tujuan utama audio dalam multimedia adalah:",
        a: ["Sebagai latar belakang", "Menyampaikan informasi melalui suara", "Mengganti teks", "Memperkecil ukuran aplikasi", "Meningkatkan resolusi video"],
        correct: 1,
        pembahasan: "Audio membantu menyampaikan informasi melalui suara."
    },
    {
        q: "Resolusi gambar 300 dpi digunakan untuk:",
        a: ["Cetakan berkualitas tinggi", "Tampilan monitor", "Animasi", "Video", "Editing audio"],
        correct: 0
    },
    {
        q: "Perbedaan utama animasi 2D dan 3D adalah:",
        a: [
            "3D melibatkan modeling",
            "2D lebih realistis",
            "3D menggunakan warna terbatas",
            "2D hanya untuk kartun",
            "3D tidak memerlukan rendering"
        ],
        correct: 0
    },
    {
        q: "Format file audio yang umum digunakan adalah:",
        a: ["JPEG", "MP3", "PNG", "TXT", "AVI"],
        correct: 1
    },
    {
        q: "Fungsi processor audio adalah:",
        a: [
            "Meningkatkan memori",
            "Memproses sinyal untuk manipulasi nada",
            "Menggantikan speaker",
            "Mengurangi noise",
            "Menambah ukuran file"
        ],
        correct: 1
    },
    {
        q: "Tujuan penggunaan background dalam multimedia adalah:",
        a: [
            "Menambah warna",
            "Memberikan tema dan informasi tambahan",
            "Mengurangi beban memori",
            "Menyembunyikan kesalahan",
            "Menampilkan animasi"
        ],
        correct: 1
    },
    {
        q: "Format bitmap adalah:",
        a: [
            "Gambar berbasis algoritma",
            "Gambar berbasis pixel dengan resolusi tetap",
            "Gambar beresolusi dinamis",
            "Gambar berbasis teks",
            "Gambar yang tidak dapat diperbesar"
        ],
        correct: 1
    },
    {
        q: "Keuntungan vector image dibanding bitmap adalah:",
        a: [
            "Tidak butuh software",
            "Dapat diperbesar tanpa kehilangan kualitas",
            "Ukuran file lebih besar",
            "Tidak dapat digunakan di multimedia",
            "Menggunakan lebih banyak warna"
        ],
        correct: 1
    },
    {
        q: "Teks untuk menampilkan informasi ringkas adalah:",
        a: ["Bullet text", "Paragraf panjang", "Grafik teks", "Bitmap text", "Vektor text"],
        correct: 0
    },
    {
        q: "Frame rate dalam animasi adalah:",
        a: [
            "Jumlah pixel",
            "Jumlah frame per detik",
            "Kecepatan rendering",
            "Waktu pemrosesan",
            "Jumlah gambar dalam file"
        ],
        correct: 1
    },
    {
        q: "Elemen multimedia interaktif adalah:",
        a: ["Video, teks, grafis, mouse", "Audio, video, grafis, teks", "Animasi, keyboard", "Audio, mouse", "Teks, perangkat keras"],
        correct: 1
    },
    {
        q: "Animasi dengan pergerakan objek sepanjang jalur disebut:",
        a: ["Frame animation", "Path animation", "Morphing", "Vector animation", "Keyframe animation"],
        correct: 1
    },
    {
        q: "Frekuensi pada gelombang suara adalah:",
        a: [
            "Tingkat volume suara",
            "Waktu satu siklus",
            "Jumlah siklus per detik",
            "Periode antara gelombang",
            "Amplitude suara"
        ],
        correct: 2
    },
    {
        q: "Mengubah sinyal analog menjadi digital disebut:",
        a: ["Rendering", "Capturing", "Compressing", "Mixing", "Editing"],
        correct: 1
    },
    {
        q: "Defragmentasi file sebelum burning CD-ROM bertujuan untuk:",
        a: [
            "Mempercepat proses pembakaran",
            "Mengurangi ukuran file",
            "Mengatur ulang data CD",
            "Menambahkan file",
            "Menghapus file"
        ],
        correct: 0
    },
    {
        q: "Perangkat yang mengubah energi akustik menjadi sinyal listrik adalah:",
        a: ["Processor", "Transducer", "Amplifier", "Equalizer", "Speaker"],
        correct: 1
    },
    {
        q: "Cara memvisualisasikan data suara adalah:",
        a: ["Histogram", "Diagram gelombang", "Grafik pie", "Tabel", "Skala warna"],
        correct: 1
    },
    {
        q: "Keyframe adalah:",
        a: [
            "Gambar awal dan akhir animasi",
            "Semua gambar animasi",
            "Gambar utama video",
            "Efek tambahan",
            "Teknik editing"
        ],
        correct: 0
    },
    {
        q: "Tujuan kompresi video adalah:",
        a: [
            "Meningkatkan kualitas",
            "Mengurangi ukuran file",
            "Menambah efek",
            "Mempercepat frame rate",
            "Mengurangi durasi"
        ],
        correct: 1
    },
    {
        q: "Software untuk mengedit video adalah:",
        a: ["CorelDraw", "Adobe Premiere", "Word", "Audition", "AutoCAD"],
        correct: 1
    },
    {
        q: "Fungsi amplifikasi dalam audio adalah:",
        a: [
            "Mengurangi sinyal",
            "Memperbesar sinyal listrik",
            "Mengubah suara jadi sinyal",
            "Menyaring audio",
            "Menambah efek"
        ],
        correct: 1
    },
    {
        q: "Amplitude adalah:",
        a: [
            "Frekuensi",
            "Tinggi rendahnya gelombang suara",
            "Waktu gelombang",
            "Panjang gelombang",
            "Kecepatan suara"
        ],
        correct: 1
    },
    {
        q: "Animasi yang melibatkan modeling, animating, rendering adalah:",
        a: ["Frame", "Path", "2D", "3D", "Vector"],
        correct: 3
    },
    {
        q: "Saat menggunakan teks dalam multimedia, yang diperhatikan adalah:",
        a: [
            "Jenis font, ukuran, warna",
            "Perangkat keras",
            "Resolusi layar",
            "Format file",
            "Efek animasi"
        ],
        correct: 0
    },
    {
        q: "Morphing adalah:",
        a: [
            "Perubahan objek secara bertahap ke bentuk lain",
            "Pergerakan sepanjang jalur",
            "Transisi frame",
            "Animasi 3D dan 2D",
            "Rendering real-time"
        ],
        correct: 0
    },
    {
        q: "Teks artistik dalam multimedia disebut:",
        a: ["Paragraph text", "Artistic text", "Bitmap text", "Vector text", "Plain text"],
        correct: 1
    },
    {
        q: "Kelebihan video digital adalah:",
        a: [
            "Transfer cepat",
            "Tidak butuh perangkat keras",
            "Kualitas suara rendah",
            "Mudah diedit dan disimpan",
            "Memakai memori sedikit"
        ],
        correct: 3
    },
    {
        q: "Sinyal audio yang direkam digital disebut:",
        a: ["Sinyal analog", "Frekuensi rendah", "Sinyal listrik", "Digital audio", "Amplifikasi"],
        correct: 3
    },
    {
        q: "Pemilihan background harus memperhatikan:",
        a: [
            "Ukuran file",
            "Resolusi perangkat",
            "Jenis font",
            "Jenis animasi",
            "Format file"
        ],
        correct: 1
    },
    {
        q: "Screen resolution adalah:",
        a: [
            "Ukuran file gambar",
            "Resolusi layar untuk menampilkan gambar",
            "Kecepatan refresh",
            "Kontras warna",
            "Kompresi gambar"
        ],
        correct: 1
    }
];
