let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Definisi multimedia menurut Hofstetter adalah penggunaan komputer untuk ......",
        a: [
            "Penggunaan perangkat keras untuk mengolah data",
            "Menyajikan dan menggabungkan teks, suara, gambar, animasi, dan video",
            "Pengolahan data digital untuk tujuan tertentu",
            "Penyajian data melalui media cetak",
            "Pemrosesan teks untuk hiburan"
        ],
        correct: 1,
        pembahasan: "Menurut Hofstetter, multimedia adalah penggunaan komputer untuk menyajikan berbagai elemen seperti teks, suara, gambar, animasi, dan video."
    },
    {
        q: "Teks dalam elemen multimedia merupakan elemen dasar yang ......",
        a: [
            "Paling kompleks penggunaannya",
            "Paling mudah dimengerti oleh pengguna",
            "Merupakan gabungan antara gambar dan suara",
            "Memiliki ukuran file digital sangat besar",
            "Hanya bisa didapat melalui proses scanner"
        ],
        correct: 1,
        pembahasan: "Teks adalah elemen dasar multimedia yang paling mudah dipahami masyarakat."
    },
    {
        q: "Jenis grafik yang paling umum digunakan dalam penyajian multimedia adalah ......",
        a: ["Raster dan vektor", "Bitmap dan audio", "Animasi dan teks", "MIDI dan video", "Raster dan analog"],
        correct: 0,
        pembahasan: "Grafik dalam multimedia biasanya berupa grafik raster (bitmap) dan grafik vektor."
    },
    {
        q: "Fungsi utama audio dalam multimedia adalah ......",
        a: [
            "Menyediakan efek visual",
            "Meningkatkan estetika tampilan",
            "Menambah dimensi suara untuk mendukung informasi visual",
            "Mengganti elemen teks sepenuhnya",
            "Mengurangi kebutuhan memori komputer"
        ],
        correct: 2,
        pembahasan: "Audio memberikan dimensi suara untuk mendukung informasi visual."
    },
    {
        q: "Elemen multimedia yang digunakan untuk menggambarkan gerakan adalah ......",
        a: ["Teks", "Grafik", "Audio", "Animasi", "Video"],
        correct: 3,
        pembahasan: "Animasi menggambarkan gerakan melalui rangkaian frame."
    },
    {
        q: "Tujuan utama dari penerapan multimedia interaktif adalah ......",
        a: [
            "Membuat presentasi menjadi pasif",
            "Memberikan sekadar hiburan visual",
            "Meningkatkan interaksi antara pengguna dan konten",
            "Mempermudah pengolahan data manual",
            "Mengganti metode komunikasi lisan"
        ],
        correct: 2,
        pembahasan: "Multimedia interaktif fokus meningkatkan interaksi pengguna dengan konten."
    },
    {
        q: "Teknologi yang memungkinkan suara direkam dan disimpan dalam format digital disebut ......",
        a: ["MIDI", "CD-ROM", "File Compression", "Digital Audio", "Bitmap"],
        correct: 3,
        pembahasan: "Digital Audio memungkinkan perekaman dan penyimpanan suara dalam format digital."
    },
    {
        q: "Hypertext dapat didefinisikan sebagai teks yang ......",
        a: ["Digunakan khusus untuk animasi", "Memiliki tautan ke lokasi informasi lain", "Diubah menjadi format gambar", "Berbentuk 3 dimensi", "Bergerak secara otomatis"],
        correct: 1,
        pembahasan: "Hypertext menghubungkan teks dengan lokasi informasi lain melalui link."
    },
    {
        q: "Manfaat utama penggunaan animasi dalam penyampaian informasi multimedia adalah ......",
        a: [
            "Memberikan hiburan semata",
            "Menyampaikan informasi secara dinamis dan visual",
            "Menggantikan keberadaan teks sepenuhnya",
            "Mengurangi ukuran file presentasi",
            "Meningkatkan kecepatan transfer data"
        ],
        correct: 1,
        pembahasan: "Animasi menyampaikan informasi dengan cara dinamis dan menarik."
    },
    {
        q: "Peran utama elemen video dalam sebuah sistem multimedia adalah ......",
        a: [
            "Menyediakan elemen suara latar",
            "Memberikan efek estetis statis",
            "Menyampaikan informasi melalui gambar bergerak",
            "Mengganti fungsi teks",
            "Mengurangi durasi waktu presentasi"
        ],
        correct: 2,
        pembahasan: "Video menyampaikan informasi melalui gambar bergerak."
    },
    {
        q: "Kategori multimedia content production meliputi produk seperti ......",
        a: ["Televisi, radio, game", "Film, tutorial, animasi", "Internet, cetak, CD-ROM", "Gambar, suara, teks", "Audio, grafik, video"],
        correct: 1,
        pembahasan: "Film, tutorial, dan animasi adalah bagian dari multimedia content production."
    },
    {
        q: "Multimedia non-linear memungkinkan pengguna untuk ......",
        a: [
            "Mengikuti struktur yang kaku",
            "Bebas menavigasi konten sesuai keinginan",
            "Hanya mendengarkan audio",
            "Mengikuti alur cerita yang tetap",
            "Hanya melihat animasi tanpa interaksi"
        ],
        correct: 1,
        pembahasan: "Multimedia non-linear memungkinkan navigasi bebas."
    },
    {
        q: "Kelebihan multimedia interaktif dalam pendidikan adalah ......",
        a: ["Dapat menggantikan peran guru sepenuhnya", "Membuat siswa lebih aktif dalam belajar", "Mengurangi waktu belajar siswa", "Menghilangkan kebutuhan buku cetak", "Meningkatkan biaya operasional sekolah"],
        correct: 1,
        pembahasan: "Multimedia interaktif membuat siswa lebih aktif."
    },
    {
        q: "Manfaat multimedia dalam industri hiburan khususnya digunakan untuk ......",
        a: ["Membuat rekaman video standar", "Mengembangkan efek visual (VFX) untuk film dan animasi", "Mempercepat proses produksi film", "Menghilangkan kebutuhan perangkat keras", "Mengurangi penggunaan audio"],
        correct: 1,
        pembahasan: "Multimedia digunakan untuk efek visual dalam film dan animasi."
    },
    {
        q: "Elemen utama dalam pembuatan multimedia terdiri dari ......",
        a: ["Kamera dan mikrofon", "Teks, audio, grafik, video, animasi", "Internet dan televisi", "Software dan hardware", "CD-ROM dan USB"],
        correct: 1,
        pembahasan: "Ada lima elemen utama: teks, audio, grafik, video, dan animasi."
    },
    {
        q: "Tujuan penggunaan multimedia dalam dunia bisnis adalah untuk ......",
        a: [
            "Mengurangi biaya produksi barang",
            "Sekadar membuat presentasi menarik",
            "Mengganti media cetak koran",
            "Terlihat sebagai perusahaan modern",
            "Meningkatkan interaksi dan ketertarikan konsumen"
        ],
        correct: 4,
        pembahasan: "Multimedia meningkatkan interaksi dengan konsumen."
    },
    {
        q: "Manfaat multimedia dalam bidang kesehatan adalah ......",
        a: [
            "Mengurangi penggunaan alat medis",
            "Menggantikan perangkat pemeriksaan tradisional",
            "Mengurangi biaya perawatan rumah sakit",
            "Meningkatkan interaksi dan edukasi pasien-dokter",
            "Membatasi penyebaran informasi kesehatan"
        ],
        correct: 3,
        pembahasan: "Multimedia meningkatkan komunikasi antara pasien dan dokter."
    },
    {
        q: "MIDI merupakan format suara yang memiliki karakteristik ......",
        a: [
            "Suara digital berkualitas sangat tinggi",
            "Format file khusus untuk video",
            "File suara berkapasitas kecil",
            "Berbasis gambar bitmap",
            "Merupakan grafik animasi"
        ],
        correct: 2,
        pembahasan: "MIDI adalah format suara berukuran kecil."
    },
    {
        q: "Perbedaan multimedia linier dan non-linier adalah ......",
        a: [
            "Linier hanya berisi teks, non-linier berisi video",
            "Linier mengikuti alur tetap, non-linier bebas dinavigasi",
            "Linier memakai animasi, non-linier tidak",
            "Linier lebih sederhana pembuatannya",
            "Linier hanya digunakan untuk pendidikan"
        ],
        correct: 1,
        pembahasan: "Linier = alur tetap; non-linier = bebas navigasi."
    },
    {
        q: "Multimedia communication menggunakan saluran media seperti ......",
        a: [
            "Media massa (TV, radio, internet)",
            "Kombinasi teks dan gambar manual",
            "Animasi interaktif offline",
            "Komputer lokal untuk menyimpan data",
            "Perangkat keras audio-video"
        ],
        correct: 0,
        pembahasan: "Multimedia communication menggunakan media massa seperti TV, radio, dan internet."
    },
    {
        q: "Manfaat multimedia di bidang teknik adalah ......",
        a: [
            "Mengurangi jam pelatihan karyawan",
            "Membuat simulasi untuk pelatihan dan desain",
            "Menggantikan alat fisik sepenuhnya",
            "Mengurangi biaya pembelian perangkat",
            "Membatasi penggunaan software"
        ],
        correct: 1,
        pembahasan: "Multimedia digunakan untuk simulasi teknik."
    },
    {
        q: "Kelebihan elemen grafik dalam multimedia adalah kemampuannya untuk ......",
        a: [
            "Mengganti semua elemen teks",
            "Menyampaikan informasi sulit secara visual",
            "Membuat konten menjadi lebih rumit",
            "Meningkatkan kapasitas penyimpanan",
            "Mempercepat waktu pembuatan konten"
        ],
        correct: 1,
        pembahasan: "Grafik menyampaikan informasi yang sulit dijelaskan dengan kata-kata."
    },
    {
        q: "Peran animasi dalam multimedia interaktif adalah ......",
        a: [
            "Menambah ukuran file secara signifikan",
            "Mengganti fungsi teks dan grafik",
            "Memberikan visualisasi gerakan",
            "Mengurangi kebutuhan perangkat keras",
            "Memperpendek durasi presentasi"
        ],
        correct: 2,
        pembahasan: "Animasi memberikan visualisasi gerakan."
    },
    {
        q: "Multimedia content production merupakan proses ......",
        a: [
            "Produksi teks dan grafik manual",
            "Penggunaan berbagai media untuk menghasilkan informasi atau hiburan",
            "Gabungan video dan audio saja",
            "Pembuatan gambar digital sederhana",
            "Media cetak dengan teknologi komputer"
        ],
        correct: 1,
        pembahasan: "Content production = menghasilkan konten multimedia."
    },
    {
        q: "Fungsi utama teks dalam multimedia adalah sebagai ......",
        a: [
            "Elemen pendukung visual",
            "Media utama penyampaian informasi",
            "Cara mengurangi kompleksitas sistem",
            "Penambah efek visual semata",
            "Pengganti elemen animasi"
        ],
        correct: 1,
        pembahasan: "Teks menyampaikan informasi inti."
    },
    {
        q: "Elemen multimedia yang berfungsi menyampaikan informasi dengan suara adalah ......",
        a: ["Teks", "Grafik", "Audio", "Video", "Animasi"],
        correct: 2,
        pembahasan: "Audio digunakan untuk narasi, musik, dan efek."
    },
    {
        q: "Perbedaan antara multimedia content production dan communication adalah ......",
        a: [
            "Production fokus publikasi, communication pada distribusi",
            "Production menghasilkan konten, communication menyebarkan konten",
            "Production hanya teks, communication video",
            "Production media cetak, communication digital",
            "Production untuk promosi, communication untuk edukasi"
        ],
        correct: 1,
        pembahasan: "Content production membuat konten; communication menyebarkannya."
    },
    {
        q: "Animasi dalam multimedia berfungsi menjelaskan konsep kompleks melalui ......",
        a: [
            "Percepatan slide presentasi",
            "Gerakan visual",
            "Penggantian teks",
            "Pengurangan interaktivitas",
            "Penyederhanaan konten"
        ],
        correct: 1,
        pembahasan: "Animasi menjelaskan konsep melalui visualisasi gerakan."
    },
    {
        q: "Karakteristik multimedia linier adalah ......",
        a: [
            "User mengontrol urutan konten",
            "Informasi disajikan berurutan tanpa kontrol pengguna",
            "Menggunakan animasi sebagai unsur utama",
            "Audio sebagai unsur utama",
            "Tidak membutuhkan hardware khusus"
        ],
        correct: 1,
        pembahasan: "Multimedia linier berjalan otomatis tanpa kontrol pengguna."
    },
    {
        q: "Multimedia penting dalam pendidikan karena ......",
        a: [
            "Dapat menggantikan guru",
            "Menyederhanakan kurikulum belajar",
            "Mempermudah penyampaian informasi dengan berbagai media",
            "Mengurangi waktu belajar di kelas",
            "Mengurangi biaya sekolah siswa"
        ],
        correct: 2,
        pembahasan: "Multimedia mempermudah penyampaian informasi dengan kombinasi media."
    }
];
