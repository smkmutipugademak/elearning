let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Definisi multimedia menurut Hofstetter adalah penggunaan komputer untuk menyajikan dan menggabungkan teks, suara, gambar, animasi, dan video ………",
        a: [
            "Penggunaan perangkat keras untuk mengolah data",
            "Penggunaan komputer untuk menyajikan dan menggabungkan teks, suara, gambar, animasi, dan video",
            "Pengolahan data digital untuk tujuan tertentu",
            "Penyajian data melalui media cetak",
            "Pemrosesan teks untuk hiburan"
        ],
        correct: 1,
        pembahasan: "Menurut Hofstetter, multimedia adalah penggunaan komputer untuk menyajikan berbagai elemen seperti teks, suara, gambar, animasi, dan video."
    },
    {
        q: "Teks dalam elemen multimedia merupakan elemen dasar yang paling mudah dimengerti oleh pengguna ………",
        a: [
            "Media yang paling kompleks",
            "Elemen dasar yang paling mudah dimengerti",
            "Gabungan antara gambar dan suara",
            "Media digital dengan ukuran besar",
            "Proses pencitraan melalui scanner"
        ],
        correct: 1,
        pembahasan: "Teks adalah elemen dasar multimedia yang paling mudah dipahami masyarakat."
    },
    {
        q: "Jenis grafik yang paling umum digunakan dalam multimedia adalah ………",
        a: ["Raster dan vektor", "Bitmap dan audio", "Animasi dan teks", "MIDI dan video", "Raster dan analog"],
        correct: 0,
        pembahasan: "Grafik dalam multimedia biasanya berupa grafik raster (bitmap) dan grafik vektor."
    },
    {
        q: "Fungsi utama audio dalam multimedia adalah menambah dimensi suara untuk mendukung informasi visual ………",
        a: [
            "Menyediakan efek visual",
            "Meningkatkan estetika tampilan",
            "Menambah dimensi suara untuk mendukung informasi visual",
            "Mengganti elemen teks sepenuhnya",
            "Mengurangi kebutuhan memori"
        ],
        correct: 2,
        pembahasan: "Audio memberikan dimensi suara untuk mendukung informasi visual."
    },
    {
        q: "Elemen multimedia yang digunakan untuk menggambarkan gerakan adalah ………",
        a: ["Teks", "Grafik", "Audio", "Animasi", "Video"],
        correct: 3,
        pembahasan: "Animasi menggambarkan gerakan melalui rangkaian frame."
    },
    {
        q: "Tujuan utama multimedia interaktif adalah meningkatkan interaksi antara pengguna dan konten ………",
        a: [
            "Membuat presentasi menarik",
            "Memberikan hiburan",
            "Meningkatkan interaksi antara pengguna dan konten",
            "Mempermudah pengolahan data",
            "Mengganti metode komunikasi tradisional"
        ],
        correct: 2,
        pembahasan: "Multimedia interaktif fokus meningkatkan interaksi pengguna dengan konten."
    },
    {
        q: "Teknologi yang memungkinkan suara disimpan secara digital disebut ………",
        a: ["MIDI", "CD-ROM", "File Compression", "Digital Audio", "Bitmap"],
        correct: 3,
        pembahasan: "Digital Audio memungkinkan perekaman dan penyimpanan suara dalam format digital."
    },
    {
        q: "Hypertext merupakan teks yang memiliki tautan ke lokasi informasi lain ………",
        a: ["Teks untuk animasi", "Teks dengan tautan ke lokasi lain", "Teks menjadi gambar", "Teks 3D", "Teks bergerak"],
        correct: 1,
        pembahasan: "Hypertext menghubungkan teks dengan lokasi informasi lain melalui link."
    },
    {
        q: "Manfaat utama animasi dalam multimedia adalah menyampaikan informasi secara dinamis dan visual ………",
        a: [
            "Memberikan hiburan saja",
            "Menyampaikan informasi secara dinamis dan visual",
            "Menggantikan teks sepenuhnya",
            "Mengurangi ukuran file",
            "Meningkatkan kecepatan data"
        ],
        correct: 1,
        pembahasan: "Animasi menyampaikan informasi dengan cara dinamis dan menarik."
    },
    {
        q: "Peran utama video dalam multimedia adalah menyampaikan informasi melalui gambar bergerak ………",
        a: [
            "Menyediakan elemen suara",
            "Memberikan efek estetis",
            "Menyampaikan informasi melalui gambar bergerak",
            "Mengganti teks",
            "Mengurangi durasi presentasi"
        ],
        correct: 2,
        pembahasan: "Video menyampaikan informasi melalui gambar bergerak."
    },
    {
        q: "Kategori multimedia content production meliputi film, tutorial, dan animasi ………",
        a: ["Televisi, radio, game", "Film, tutorial, animasi", "Internet, cetak, CD-ROM", "Gambar, suara, teks", "Audio, grafik, video"],
        correct: 1,
        pembahasan: "Film, tutorial, dan animasi adalah bagian dari multimedia content production."
    },
    {
        q: "Multimedia non-linear memungkinkan pengguna bebas menavigasi konten ………",
        a: [
            "Memiliki struktur tertentu",
            "Pengguna bebas menavigasi konten",
            "Menggunakan audio dan teks",
            "Alur cerita tetap",
            "Hanya menggunakan animasi"
        ],
        correct: 1,
        pembahasan: "Multimedia non-linear memungkinkan navigasi bebas."
    },
    {
        q: "Kelebihan multimedia interaktif dalam pendidikan adalah membuat siswa aktif dalam belajar ………",
        a: ["Menggantikan guru", "Membuat siswa aktif dalam belajar", "Mengurangi waktu belajar", "Mengganti buku cetak", "Meningkatkan biaya"],
        correct: 1,
        pembahasan: "Multimedia interaktif membuat siswa lebih aktif."
    },
    {
        q: "Manfaat multimedia dalam industri hiburan adalah mengembangkan efek visual untuk film dan animasi ………",
        a: ["Membuat video saja", "Mengembangkan efek visual untuk film dan animasi", "Mempercepat produksi film", "Menghilangkan perangkat keras", "Mengurangi audio"],
        correct: 1,
        pembahasan: "Multimedia digunakan untuk efek visual dalam film dan animasi."
    },
    {
        q: "Elemen utama dalam pembuatan multimedia terdiri dari teks, audio, grafik, video, dan animasi ………",
        a: ["Kamera dan mikrofon", "Teks, audio, grafik, video, animasi", "Internet dan televisi", "Software dan hardware", "CD-ROM dan USB"],
        correct: 1,
        pembahasan: "Ada lima elemen utama: teks, audio, grafik, video, dan animasi."
    },
    {
        q: "Tujuan multimedia dalam bisnis adalah meningkatkan interaksi konsumen ………",
        a: [
            "Mengurangi biaya produksi",
            "Presentasi menarik",
            "Mengganti media cetak",
            "Membuat perusahaan modern",
            "Meningkatkan interaksi konsumen"
        ],
        correct: 4,
        pembahasan: "Multimedia meningkatkan interaksi dengan konsumen."
    },
    {
        q: "Manfaat multimedia dalam bidang kesehatan adalah meningkatkan interaksi pasien-dokter ………",
        a: [
            "Mengurangi alat medis",
            "Menggantikan perangkat tradisional",
            "Mengurangi biaya perawatan",
            "Meningkatkan interaksi pasien-dokter",
            "Membatasi informasi"
        ],
        correct: 3,
        pembahasan: "Multimedia meningkatkan komunikasi antara pasien dan dokter."
    },
    {
        q: "MIDI merupakan format suara berkapasitas kecil ………",
        a: [
            "Suara digital berkualitas tinggi",
            "Format file video",
            "File suara berkapasitas kecil",
            "Gambar bitmap",
            "Grafik animasi"
        ],
        correct: 2,
        pembahasan: "MIDI adalah format suara berukuran kecil."
    },
    {
        q: "Perbedaan multimedia linier dan non-linier adalah linier mengikuti alur tetap sedangkan non-linier bebas dinavigasi ………",
        a: [
            "Linier hanya teks",
            "Linier mengikuti alur tetap, non-linier bebas dinavigasi",
            "Linier pakai animasi, non-linier tidak",
            "Linier lebih sederhana",
            "Linier hanya untuk pendidikan"
        ],
        correct: 1,
        pembahasan: "Linier = alur tetap; non-linier = bebas navigasi."
    },
    {
        q: "Multimedia communication menggunakan media massa seperti TV dan radio untuk menyampaikan informasi ………",
        a: [
            "Media massa seperti TV dan radio untuk informasi",
            "Kombinasi teks dan gambar",
            "Animasi interaktif",
            "Komputer untuk menyimpan data",
            "Integrasi audio-video pada perangkat keras"
        ],
        correct: 0,
        pembahasan: "Multimedia communication menggunakan media massa seperti TV, radio, dan internet."
    },
    {
        q: "Manfaat multimedia di bidang teknik adalah membuat simulasi untuk pelatihan dan desain ………",
        a: [
            "Mengurangi pelatihan",
            "Membuat simulasi untuk pelatihan dan desain",
            "Menggantikan alat fisik",
            "Mengurangi biaya perangkat",
            "Membatasi software"
        ],
        correct: 1,
        pembahasan: "Multimedia digunakan untuk simulasi teknik."
    },
    {
        q: "Kelebihan elemen grafik dalam multimedia adalah menyampaikan informasi sulit secara visual ………",
        a: [
            "Mengganti semua teks",
            "Menyampaikan informasi sulit secara visual",
            "Membuat konten kompleks",
            "Meningingkatkan kapasitas penyimpanan",
            "Mempercepat pembuatan konten"
        ],
        correct: 1,
        pembahasan: "Grafik menyampaikan informasi yang sulit dijelaskan dengan kata-kata."
    },
    {
        q: "Peran animasi dalam multimedia interaktif adalah memberikan visualisasi gerakan ………",
        a: [
            "Menambah ukuran file",
            "Mengganti teks dan grafik",
            "Memberikan visualisasi gerakan",
            "Mengurangi perangkat keras",
            "Memperpendek durasi presentasi"
        ],
        correct: 2,
        pembahasan: "Animasi memberikan visualisasi gerakan."
    },
    {
        q: "Multimedia content production merupakan penggunaan berbagai media untuk menghasilkan informasi atau hiburan ………",
        a: [
            "Produksi teks dan grafik",
            "Penggunaan berbagai media untuk informasi atau hiburan",
            "Gabungan video dan audio",
            "Pembuatan gambar digital",
            "Media cetak dengan teknologi komputer"
        ],
        correct: 1,
        pembahasan: "Content production = menghasilkan konten multimedia."
    },
    {
        q: "Fungsi utama teks dalam multimedia adalah sebagai media utama penyampaian informasi ………",
        a: [
            "Elemen pendukung",
            "Media utama menyampaikan informasi",
            "Mengurangi kompleksitas",
            "Menambah efek visual",
            "Menggantikan animasi"
        ],
        correct: 1,
        pembahasan: "Teks menyampaikan informasi inti."
    },
    {
        q: "Elemen multimedia yang berfungsi menyampaikan informasi dengan suara adalah ………",
        a: ["Teks", "Grafik", "Audio", "Video", "Animasi"],
        correct: 2,
        pembahasan: "Audio digunakan untuk narasi, musik, dan efek."
    },
    {
        q: "Perbedaan antara multimedia content production dan communication adalah production menghasilkan konten, communication menyebarkan konten ………",
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
        q: "Animasi dalam multimedia berfungsi menjelaskan konsep kompleks melalui gerakan ………",
        a: [
            "Mempercepat presentasi",
            "Menjelaskan konsep kompleks dengan gerakan",
            "Mengganti teks",
            "Mengurangi interaktivitas",
            "Menyederhanakan konten"
        ],
        correct: 1,
        pembahasan: "Animasi menjelaskan konsep melalui visualisasi gerakan."
    },
    {
        q: "Karakteristik multimedia linier adalah informasi disajikan berurutan tanpa kontrol pengguna ………",
        a: [
            "User mengontrol urutan",
            "Informasi disajikan berurutan tanpa kontrol pengguna",
            "Menggunakan animasi sebagai utama",
            "Audio sebagai unsur utama",
            "Tidak butuh hardware"
        ],
        correct: 1,
        pembahasan: "Multimedia linier berjalan otomatis tanpa kontrol pengguna."
    },
    {
        q: "Multimedia penting dalam pendidikan karena mempermudah penyampaian informasi dengan berbagai media ………",
        a: [
            "Menggantikan guru",
            "Menyederhanakan belajar",
            "Mempermudah penyampaian informasi dengan berbagai media",
            "Mengurangi waktu belajar",
            "Mengurangi biaya sekolah"
        ],
        correct: 2,
        pembahasan: "Multimedia mempermudah penyampaian informasi dengan kombinasi media."
    }
];

