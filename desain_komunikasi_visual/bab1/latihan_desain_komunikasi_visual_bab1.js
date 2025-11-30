let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Pernyataan yang tepat tentang technopreneur adalah ....",
        a: [
            "Orang yang bekerja di bidang teknologi tanpa risiko",
            "Wirausahawan yang memanfaatkan teknologi modern untuk bisnis",
            "Pengembang software tanpa tujuan bisnis",
            "Pemilik toko teknologi tradisional",
            "Pekerja lepas di bidang desain grafis"
        ],
        correct: 1,
        pembahasan: "Technopreneur adalah wirausahawan yang menggunakan teknologi sebagai solusi inovatif dalam bisnis."
    },
    {
        q: "Tujuan utama technopreneurship adalah ....",
        a: [
            "Meningkatkan konsumsi produk teknologi",
            "Menciptakan solusi inovatif untuk masalah sosial dan bisnis",
            "Menguasai pasar global tanpa inovasi",
            "Membatasi kemajuan teknologi untuk mengurangi risiko",
            "Hanya untuk mendapatkan keuntungan semata"
        ],
        correct: 1,
        pembahasan: "Technopreneurship fokus menciptakan dampak positif melalui inovasi teknologi."
    },
    {
        q: "Contoh technopreneur terkenal adalah ....",
        a: [
            "Bill Gates dan Steve Jobs",
            "Walt Disney dan JK Rowling",
            "Elon Musk dan Pablo Picasso",
            "Steve Irwin dan Nikola Tesla",
            "Albert Einstein dan Leonardo Da Vinci"
        ],
        correct: 0,
        pembahasan: "Bill Gates dan Steve Jobs merupakan technopreneur sukses di bidang teknologi informasi."
    },
    {
        q: "Manfaat utama technopreneurship bagi masyarakat adalah ....",
        a: [
            "Mengurangi kemiskinan melalui penciptaan lapangan kerja",
            "Meningkatkan ketergantungan pada teknologi asing",
            "Membatasi inovasi untuk mengurangi risiko",
            "Meningkatkan konsumsi produk impor",
            "Menyediakan teknologi mahal"
        ],
        correct: 0,
        pembahasan: "Technopreneurship menciptakan lapangan kerja baru melalui inovasi."
    },
    {
        q: "Fokus utama technopreneur adalah ....",
        a: [
            "Teknologi informasi dan komunikasi",
            "Produksi makanan",
            "Pekerjaan manual",
            "Pendidikan formal",
            "Kerajinan tradisional"
        ],
        correct: 0,
        pembahasan: "Technopreneur berfokus pada teknologi seperti IT, komunikasi, dan internet."
    },
    {
        q: "Langkah pertama menjadi technopreneur adalah ....",
        a: [
            "Membeli alat teknologi",
            "Menghindari risiko",
            "Menemukan ide inovatif",
            "Memulai bisnis besar langsung",
            "Mengandalkan tim sepenuhnya"
        ],
        correct: 2,
        pembahasan: "Ide kreatif menentukan arah bisnis technopreneurship."
    },
    {
        q: "Profesi yang termasuk technopreneur di bidang DKV adalah ....",
        a: [
            "Dokter",
            "Ilustrator",
            "Insinyur",
            "Petani",
            "Guru"
        ],
        correct: 1,
        pembahasan: "Ilustrator DKV dapat menjadi technopreneur melalui karya digital."
    },
    {
        q: "Manfaat diversifikasi bisnis dalam technopreneurship adalah ....",
        a: [
            "Meningkatkan fokus pada satu produk saja",
            "Mengurangi potensi inovasi",
            "Menyebarkan risiko dan memperluas peluang",
            "Menghambat pertumbuhan bisnis",
            "Membatasi jangkauan teknologi"
        ],
        correct: 2,
        pembahasan: "Diversifikasi mengurangi risiko dan memperluas peluang bisnis."
    },
    {
        q: "Salah satu alasan technopreneurship penting bagi ekonomi adalah ....",
        a: [
            "Menjaga ketergantungan pada produk impor",
            "Membatasi inovasi",
            "Menciptakan lapangan kerja baru",
            "Meningkatkan kesenjangan teknologi",
            "Membatasi diversifikasi bisnis"
        ],
        correct: 2,
        pembahasan: "Technopreneurship membuka pekerjaan baru sehingga menurunkan pengangguran."
    },
    {
        q: "Alat yang dibutuhkan untuk memulai bisnis desain grafis adalah ....",
        a: [
            "Alat pertanian",
            "Software desain dan perangkat keras",
            "Buku manual",
            "Meja dan kursi sederhana",
            "Alat olahraga"
        ],
        correct: 1,
        pembahasan: "Desain grafis membutuhkan komputer, software desain, dan perangkat pendukung."
    },
    {
        q: "Technopreneurship tidak hanya menciptakan produk, tetapi juga ....",
        a: [
            "Inovasi berkelanjutan",
            "Konsumsi tinggi",
            "Pengurangan ekspor",
            "Ketergantungan teknologi",
            "Perdagangan bebas"
        ],
        correct: 0,
        pembahasan: "Technopreneurship berfokus pada inovasi berkelanjutan untuk pasar."
    },
    {
        q: "Tujuan utama pemasaran dalam bisnis desain grafis adalah ....",
        a: [
            "Meningkatkan konsumsi produk lokal",
            "Memperluas jangkauan klien dan pelanggan",
            "Mengurangi biaya produksi",
            "Membatasi pasar internasional",
            "Menghilangkan persaingan"
        ],
        correct: 1,
        pembahasan: "Pemasaran memperluas jangkauan audiens dan meningkatkan peluang bisnis."
    },
    {
        q: "Perbedaan utama antara animator dan ilustrator adalah ....",
        a: [
            "Animator membuat gambar bergerak, ilustrator membuat gambar statis",
            "Animator lebih fokus pada seni, ilustrator pada teknologi",
            "Animator bekerja sendiri, ilustrator dalam tim",
            "Animator menggunakan alat manual, ilustrator digital",
            "Animator hanya bekerja di studio film"
        ],
        correct: 0,
        pembahasan: "Animator membuat animasi; ilustrator membuat gambar statis."
    },
    {
        q: "Fungsi legalitas bisnis dalam technopreneurship adalah ....",
        a: [
            "Menghindari pajak",
            "Melindungi bisnis secara hukum",
            "Membatasi peluang inovasi",
            "Membatasi pertumbuhan bisnis",
            "Meningkatkan biaya operasional"
        ],
        correct: 1,
        pembahasan: "Legalitas melindungi bisnis dari risiko hukum."
    },
    {
        q: "Kelebihan desainer grafis dengan karier mapan adalah ....",
        a: [
            "Memiliki banyak alat dan sumber daya",
            "Hanya bisa bekerja sendiri",
            "Tidak perlu inovasi baru",
            "Tidak perlu pemasaran",
            "Membatasi pilihan proyek"
        ],
        correct: 0,
        pembahasan: "Desainer mapan punya pengalaman, jaringan, dan alat lengkap."
    },
    {
        q: "Tujuan membuat daftar klien potensial dalam bisnis desain grafis adalah ....",
        a: [
            "Membatasi proyek ke klien tertentu",
            "Menyusun strategi pemasaran dan mendapatkan peluang baru",
            "Mengurangi risiko persaingan",
            "Membatasi proyek kecil",
            "Menentukan harga mahal"
        ],
        correct: 1,
        pembahasan: "Daftar klien potensial membantu penyusunan strategi pemasaran."
    },
    {
        q: "Langkah penting dalam membangun relasi bisnis yang potensial adalah ....",
        a: [
            "Membatasi komunikasi hanya dengan satu klien",
            "Menggunakan waktu untuk memperluas jaringan dan koneksi",
            "Menghindari kerjasama dengan pihak lain",
            "Fokus pada satu jenis layanan",
            "Menghindari teknologi komunikasi"
        ],
        correct: 1,
        pembahasan: "Relasi bisnis dibangun melalui jaringan yang luas."
    },
    {
        q: "Pentingnya technopreneurship dalam bidang seni dan desain adalah ....",
        a: [
            "Mengurangi kreativitas dalam proyek",
            "Memberikan solusi kreatif berbasis teknologi",
            "Membatasi inovasi seni",
            "Menghilangkan proses manual dalam seni",
            "Menyederhanakan semua konsep desain"
        ],
        correct: 1,
        pembahasan: "Technopreneurship menciptakan solusi kreatif seperti desain digital dan animasi."
    },
    {
        q: "Hal yang perlu dipertimbangkan dalam menetapkan harga jasa desain grafis adalah ....",
        a: [
            "Harga sembarang tanpa analisis pasar",
            "Kompetisi, kebutuhan klien, dan biaya produksi",
            "Menghindari proyek bernilai rendah",
            "Fokus hanya pada keuntungan besar",
            "Menentukan harga tanpa mempertimbangkan pasar"
        ],
        correct: 1,
        pembahasan: "Harga harus disesuaikan dengan biaya, kompetisi, dan kebutuhan klien."
    },
    {
        q: "Strategi pemasaran yang baik untuk technopreneur di bidang desain grafis adalah ....",
        a: [
            "Membuat materi pemasaran sesuai target audiens",
            "Hanya mengandalkan klien lama",
            "Menghindari platform digital",
            "Fokus pada pemasaran cetak saja",
            "Tidak memperhatikan kebutuhan audiens"
        ],
        correct: 0,
        pembahasan: "Materi pemasaran harus sesuai target dan memanfaatkan platform digital."
    }
];
