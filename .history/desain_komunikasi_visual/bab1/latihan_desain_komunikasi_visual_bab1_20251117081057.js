let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan technopreneur?",
        a: [
            "Orang yang bekerja di bidang teknologi tanpa risiko",
            "Wirausahawan yang memanfaatkan teknologi modern untuk bisnis",
            "Pengembang software tanpa tujuan bisnis",
            "Pemilik toko teknologi tradisional",
            "Pekerja lepas di bidang desain grafis"
        ],
        correct: 1,
        pembahasan: "Technopreneur adalah wirausahawan yang menggunakan teknologi sebagai solusi inovatif dalam bisnis mereka."
    },
    {
        q: "Tujuan utama technopreneurship adalah...",
        a: [
            "Meningkatkan konsumsi produk teknologi",
            "Menciptakan solusi inovatif untuk masalah sosial dan bisnis",
            "Menguasai pasar global tanpa inovasi",
            "Membatasi kemajuan teknologi untuk mengurangi risiko",
            "Hanya untuk mendapatkan keuntungan semata"
        ],
        correct: 1,
        pembahasan: "Technopreneurship bertujuan menciptakan dampak positif melalui inovasi teknologi yang memecahkan masalah nyata."
    },
    {
        q: "Contoh technopreneur terkenal adalah...",
        a: [
            "Bill Gates dan Steve Jobs",
            "Walt Disney dan JK Rowling",
            "Elon Musk dan Pablo Picasso",
            "Steve Irwin dan Nikola Tesla",
            "Albert Einstein dan Leonardo Da Vinci"
        ],
        correct: 0,
        pembahasan: "Bill Gates (Microsoft) dan Steve Jobs (Apple) adalah contoh technopreneur yang sukses memanfaatkan teknologi untuk inovasi bisnis."
    },
    {
        q: "Apa manfaat utama dari technopreneurship bagi masyarakat?",
        a: [
            "Mengurangi kemiskinan melalui penciptaan lapangan kerja",
            "Meningkatkan ketergantungan pada teknologi asing",
            "Membatasi inovasi untuk mengurangi risiko",
            "Meningkatkan konsumsi produk impor",
            "Menyediakan teknologi mahal"
        ],
        correct: 0,
        pembahasan: "Technopreneurship menciptakan lapangan kerja baru melalui inovasi, sehingga membantu mengurangi angka pengangguran."
    },
    {
        q: "Apa yang menjadi fokus utama technopreneur?",
        a: [
            "Teknologi informasi dan komunikasi",
            "Produksi makanan",
            "Pekerjaan manual",
            "Pendidikan formal",
            "Kerajinan tradisional"
        ],
        correct: 0,
        pembahasan: "Technopreneur fokus pada pengembangan teknologi, seperti teknologi informasi,komunikasi, dan internet."
    },
    {
        q: "Langkah pertama menjadi technopreneur adalah...",
        a: [
            "Membeli alat teknologi",
            "Menghindari risiko",
            "Menemukan ide inovatif",
            "Memulai bisnis besar langsung",
            "Mengandalkan tim sepenuhnya"
        ],
        correct: 2,
        pembahasan: "Ide kreatif dan inovatif menjadi dasar technopreneurship karena menentukan arah bisnis yang akan dibangun."
    },
    {
        q: "Profesi yang termasuk dalam technopreneur di bidang DKV adalah...",
        a: [
            "Dokter",
            "Ilustrator",
            "Insinyur",
            "Petani",
            "Guru"
        ],
        correct: 1,
        pembahasan: "Ilustrator adalah salah satu profesi yang dapat digeluti oleh lulusan DKV sebagai technopreneur."
    },
    {
        q: "Apa manfaat diversifikasi bisnis dalam technopreneurship?",
        a: [
            "Meningkatkan fokus pada satu produk saja",
            "Mengurangi potensi inovasi",
            "Menyebarkan risiko dan memperluas peluang",
            "Menghambat pertumbuhan bisnis",
            "Membatasi jangkauan teknologi"
        ],
        correct: 2,
        pembahasan: "Diversifikasi membantu technopreneur mengurangi risiko dan meningkatkan peluang keberhasilan di berbagai sektor."
    },
    {
        q: "Salah satu alasan technopreneurship penting bagi ekonomi adalah...",
        a: [
            "Menjaga ketergantungan pada produk impor",
            "Membatasi inovasi",
            "Menciptakan lapangan kerja baru",
            "Meningkatkan kesenjangan teknologi",
            "Membatasi diversifikasi bisnis"
        ],
        correct: 2,
        pembahasan: "Technopreneurship membuka lapangan kerja baru, yang berdampak positif pada pengurangan pengangguran."
    },
    {
        q: "Apa saja alat yang dibutuhkan untuk memulai bisnis desain grafis?",
        a: [
            "Alat pertanian",
            "Software desain dan perangkat keras",
            "Buku manual",
            "Meja dan kursi sederhana",
            "Alat olahraga"
        ],
        correct: 1,
        pembahasan: "Bisnis desain grafis membutuhkan alat seperti komputer, software desain (Photoshop,Illustrator), dan perangkat pendukung lainnya."
    },
    {
        q: "Technopreneurship tidak hanya menciptakan produk, tetapi juga...",
        a: [
            "Inovasi berkelanjutan",
            "Konsumsi tinggi",
            "Pengurangan ekspor",
            "Ketergantungan teknologi",
            "Perdagangan bebas"
        ],
        correct: 0,
        pembahasan: "Technopreneurship berfokus pada inovasi yang dapat berkembang secara berkelanjutan untuk memenuhi kebutuhan pasar."
    },
    {
        q: "Apa tujuan utama pemasaran dalam bisnis desain grafis?",
        a: [
            "Meningkatkan konsumsi produk lokal",
            "Memperluas jangkauan klien dan pelanggan",
            "Mengurangi biaya produksi",
            "Membatasi pasar internasional",
            "Menghilangkan persaingan"
        ],
        correct: 1,
        pembahasan: "Pemasaran bertujuan untuk memperkenalkan jasa atau produk kepada audiens yang lebih luas, meningkatkan peluang bisnis."
    },
    {
        q: "Apa perbedaan utama antara animator dan ilustrator?",
        a: [
            "Animator membuat gambar bergerak, ilustrator membuat gambar statis",
            "Animator lebih fokus pada seni, ilustrator pada teknologi",
            "Animator bekerja sendiri, ilustrator dalam tim",
            "Animator menggunakan alat manual, ilustrator digital",
            "Animator hanya bekerja di studio film"
        ],
        correct: 0,
        pembahasan: "Animator menciptakan gambar bergerak untuk video atau animasi, sementara ilustrator menciptakan gambar statis untuk berbagai kebutuhan."
    },
    {
        q: "Apa fungsi legalitas bisnis dalam technopreneurship?",
        a: [
            "Menghindari pajak",
            "Melindungi bisnis secara hukum",
            "Membatasi peluang inovasi",
            "Membatasi pertumbuhan bisnis",
            "Meningkatkan biaya operasional"
        ],
        correct: 1,
        pembahasan: "Legalitas memastikan bahwa bisnis beroperasi sesuai aturan hukum, sehingga terlindungi dari masalah hukum di kemudian hari."
    },
    {
        q: "Apa kelebihan desainer grafis dengan latar belakang karier mapan?",
        a: [
            "Memiliki banyak alat dan sumber daya",
            "Hanya bisa bekerja sendiri",
            "Tidak perlu inovasi baru",
            "Tidak perlu pemasaran",
            "Membatasi pilihan proyek"
        ],
        correct: 0,
        pembahasan: "Desainer grafis dengan latar belakang mapan biasanya memiliki sumber daya seperti perangkat lunak, pengalaman, dan jaringan yang luas."
    },
    {
        q: "Apa tujuan membuat daftar klien potensial dalam bisnis desain grafis?",
        a: [
            "Membatasi proyek ke klien tertentu",
            "Menyusun strategi pemasaran dan mendapatkan peluang baru",
            "Mengurangi risiko persaingan",
            "Membatasi proyek kecil",
            "Menentukan harga mahal"
        ],
        correct: 1,
        pembahasan: "Daftar klien potensial membantu technopreneur menyusun strategi yang lebih efektif untuk mencapai target pasar."
    },
    {
        q: "Apa langkah penting dalam membangun relasi bisnis yang potensial?",
        a: [
            "Membatasi komunikasi hanya dengan satu klien",
            "Menggunakan waktu untuk memperluas jaringan dan koneksi",
            "Menghindari kerjasama dengan pihak lain",
            "Fokus pada satu jenis layanan tanpa diversifikasi",
            "Menghindari penggunaan teknologi komunikasi"
        ],
        correct: 1,
        pembahasan: "Membangun relasi bisnis memerlukan usaha untuk memperluas jaringan dan koneksi,karena hal ini dapat membuka peluang baru untuk kolaborasi dan proyek."
    },
    {
        q: "Mengapa technopreneurship penting dalam bidang seni dan desain?",
        a: [
            "Mengurangi kreativitas dalam proyek",
            "Memberikan solusi kreatif berbasis teknologi",
            "Membatasi inovasi seni",
            "Menghilangkan proses manual dalam seni",
            "Menyederhanakan semua konsep desain"
        ],
        correct: 1,
        pembahasan: "Technopreneurship di bidang seni membantu menciptakan solusi kreatif melalui teknologi, seperti animasi digital, desain grafis, dan media interaktif."
    },
    {
        q: "Apa yang perlu dipertimbangkan dalam menetapkan harga jasa desain grafis?",
        a: [
            "Harga sembarang tanpa analisis pasar",
            "Kompetisi, kebutuhan klien, dan biaya produksi",
            "Menghindari proyek dengan nilai rendah",
            "Fokus hanya pada keuntungan besar",
            "Menentukan harga tanpa mempertimbangkan persaingan"
        ],
        correct: 1,
        pembahasan: "Menetapkan harga harus mempertimbangkan faktor kompetisi, kebutuhan klien, dan biaya produksi agar tetap kompetitif dan menguntungkan."
    },
    {
        q: "Apa strategi pemasaran yang baik untuk technopreneur di bidang desain grafis?",
        a: [
            "Membuat materi pemasaran yang sesuai dengan target audiens",
            "Hanya mengandalkan klien lama",
            "Menghindari platform digital",
            "Fokus hanya pada pemasaran cetak",
            "Tidak memperhatikan kebutuhan audiens"
        ],
        correct: 0,
        pembahasan: "Strategi pemasaran yang efektif harus relevan dengan kebutuhan target audiens,menggunakan platform digital dan tradisional untuk menjangkau lebih banyak klien."
    }
];

