let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa kepanjangan dari CSS?",
        a: [
            "Cascading Style Selector",
            "Cascading Style Sheet",
            "Custom Style Sheet",
            "Custom Style Selector",
            "Common Style System"
        ],
        correct: 1,
        pembahasan: "CSS adalah singkatan dari Cascading Style Sheet, digunakan untuk mengatur tampilan halaman web."
    },
    {
        q: "Fungsi utama CSS adalah untuk...?",
        a: [
            "Membuat konten baru di HTML",
            "Menambahkan animasi di JavaScript",
            "Mengatur gaya tampilan halaman web",
            "Membuat basis data website",
            "Menambahkan audio ke halaman web"
        ],
        correct: 2,
        pembahasan: "CSS digunakan untuk mengatur layout, warna, font, dan elemen visual lainnya."
    },
    {
        q: "Apa saja tiga tipe utama CSS?",
        a: [
            "Internal, Inline, Embedded",
            "Inline, External, Embedded",
            "External, Embedded, Local",
            "Internal, Inline, External",
            "Inline, Local, Embedded"
        ],
        correct: 3,
        pembahasan: "CSS dapat ditulis dalam tiga cara: Inline, Internal, dan External."
    },
    {
        q: "Pada versi CSS3, fitur apa yang diperkenalkan?",
        a: [
            "Hanya untuk layout dasar",
            "Tidak mendukung animasi",
            "Media queries dan animasi",
            "Tidak ada perubahan dari CSS2",
            "Dukungan untuk JavaScript"
        ],
        correct: 2,
        pembahasan: "CSS3 memperkenalkan media queries dan animasi."
    },
    {
        q: "Properti yang digunakan untuk mengatur warna latar belakang adalah?",
        a: ["color", "font-color", "background-color", "text-color", "layout-color"],
        correct: 2,
        pembahasan: "background-color mengatur warna latar belakang elemen."
    },
    {
        q: "Apa fungsi dari media queries pada CSS3?",
        a: ["Membatasi ukuran gambar", "Menambahkan efek hover", "Membuat halaman responsif", "Menghubungkan file CSS lain", "Memuat skrip JavaScript"],
        correct: 2,
        pembahasan: "Media Queries membuat tampilan responsif berdasarkan perangkat."
    },
    {
        q: "Properti apa yang digunakan untuk mengatur jarak antar elemen di CSS?",
        a: ["padding", "margin", "spacing", "border", "align"],
        correct: 1,
        pembahasan: "Margin digunakan untuk mengatur jarak luar antar elemen."
    },
    {
        q: "Apa yang dimaksud dengan Inline CSS?",
        a: [
            "CSS yang ditulis di file terpisah",
            "CSS yang ditulis langsung di tag HTML",
            "CSS untuk JavaScript",
            "CSS dari library",
            "CSS tanpa properti"
        ],
        correct: 1,
        pembahasan: "Inline CSS diterapkan dalam atribut style di tag HTML."
    },
    {
        q: "Apa kegunaan dari ID selector dalam CSS?",
        a: [
            "Mengatur elemen dengan nama yang sama",
            "Mengatur elemen unik dengan identitas khusus",
            "Mengatur grup elemen serupa",
            "Mengubah semua elemen dalam dokumen",
            "Menghapus elemen HTML"
        ],
        correct: 1,
        pembahasan: "ID selector menggunakan simbol # untuk elemen unik."
    },
    {
        q: "File eksternal CSS dihubungkan dengan tag...?",
        a: ["<link>", "<style>", "<script>", "<meta>", "<body>"],
        correct: 0,
        pembahasan: "Tag <link> di <head> digunakan untuk menghubungkan file CSS."
    },
    {
        q: "Sintaks yang benar untuk CSS class adalah?",
        a: [
            ".classname {property: value;}",
            "#classname {property: value;}",
            "classname {property: value;}",
            "-classname {property: value;}",
            "$classname {property: value;}"
        ],
        correct: 0,
        pembahasan: "Class selector diawali dengan titik (.)."
    },
    {
        q: "Apa kegunaan properti z-index?",
        a: [
            "Mengatur posisi horizontal",
            "Mengatur posisi vertikal",
            "Mengatur tumpang tindih elemen",
            "Mengatur warna elemen",
            "Menghapus elemen"
        ],
        correct: 2,
        pembahasan: "z-index mengatur lapisan tumpang tindih elemen."
    },
    {
        q: "Perbedaan utama ID dan class adalah?",
        a: [
            "ID untuk grup, class untuk satu elemen",
            "ID diawali #, class diawali .",
            "ID untuk file eksternal, class untuk inline",
            "ID hanya untuk <div>",
            "Class hanya untuk link"
        ],
        correct: 1,
        pembahasan: "ID menggunakan # untuk elemen unik, class menggunakan ."
    },
    {
        q: "Fitur utama CSS2 adalah?",
        a: ["Dukungan layout tabel", "Media queries", "Animasi", "Dukungan 3D", "Variabel CSS"],
        correct: 0,
        pembahasan: "CSS2 memperkenalkan dukungan penggunaan layout tabel."
    },
    {
        q: "Editor yang sering digunakan untuk menulis CSS adalah?",
        a: ["Photoshop", "VS Code", "Word", "Blender", "After Effects"],
        correct: 1,
        pembahasan: "VS Code adalah editor paling populer untuk CSS."
    },
    {
        q: "Format file CSS adalah?",
        a: [".html", ".js", ".css", ".txt", ".exe"],
        correct: 2,
        pembahasan: "File CSS berekstensi .css."
    },
    {
        q: "Cara menghubungkan file CSS eksternal ke HTML adalah?",
        a: [
            "Menggunakan <style> di <body>",
            "Menggunakan <link> di <head>",
            "Menggunakan <script> di <head>",
            "Menulis CSS di server",
            "Menambahkan CSS di JavaScript"
        ],
        correct: 1,
        pembahasan: "<link> digunakan untuk menghubungkan CSS eksternal."
    },
    {
        q: "Properti untuk mengatur ukuran teks adalah?",
        a: ["text-align", "text-size", "font-size", "size-text", "font-align"],
        correct: 2,
        pembahasan: "font-size digunakan untuk mengatur ukuran teks."
    },
    {
        q: "Apa fungsi properti float?",
        a: [
            "Menghapus elemen",
            "Mengapungkan elemen ke kiri/kanan",
            "Mengubah warna elemen",
            "Menambahkan animasi",
            "Menghapus margin"
        ],
        correct: 1,
        pembahasan: "float digunakan untuk mengapungkan elemen."
    },
    {
        q: "Apa yang dimaksud dengan embedded CSS?",
        a: ["CSS di file lain", "CSS di dalam tag <style>", "CSS dari framework", "CSS untuk JavaScript", "CSS tanpa properti"],
        correct: 1
    },
    {
        q: "Tujuan fitur archive dalam CMS adalah?",
        a: [
            "Menghapus artikel permanen",
            "Menyimpan artikel agar tidak tampil tapi tetap dapat dicari",
            "Memindahkan artikel ke halaman utama",
            "Mengedit artikel massal",
            "Menerjemahkan artikel"
        ],
        correct: 1
    },
    {
        q: "Cara mengembalikan artikel yang di-archive adalah?",
        a: [
            "Menghapus artikel",
            "Memindahkan kategori",
            "Menekan tombol unarchive",
            "Menyalin artikel",
            "Mengedit ulang"
        ],
        correct: 2
    },
    {
        q: "Langkah pertama memindahkan artikel ke kategori lain adalah?",
        a: [
            "Menekan tombol edit",
            "Memilih artikel yang akan dipindahkan",
            "Menekan tombol copy",
            "Menghapus artikel",
            "Mengubah ke draft"
        ],
        correct: 1
    },
    {
        q: "Fungsi 'publish' dalam CMS adalah?",
        a: ["Menampilkan artikel di web", "Menghapus artikel", "Membuat artikel baru", "Memindahkan artikel", "Menerjemahkan artikel"],
        correct: 0
    },
    {
        q: "Cara menghapus artikel permanen adalah?",
        a: [
            "Mengedit artikel",
            "Memindahkan artikel ke archive",
            "Memindahkan ke trash lalu delete",
            "Nonaktifkan publish",
            "Memindahkan article"
        ],
        correct: 2
    },
    {
        q: "Fitur translate digunakan untuk?",
        a: [
            "Memindahkan artikel",
            "Mengubah bahasa artikel",
            "Membuat draft",
            "Menambah animasi",
            "Menghapus terjemahan"
        ],
        correct: 1
    },
    {
        q: "Langkah terakhir membuat artikel baru adalah?",
        a: ["Tekan edit", "Tekan save", "Tekan archive", "Tekan delete", "Tekan move"],
        correct: 1
    },
    {
        q: "Tujuan section dan category adalah?",
        a: [
            "Menyimpan artikel sementara",
            "Menghapus artikel",
            "Mengorganisasi dan mengelompokkan artikel",
            "Menambahkan gambar",
            "Memindahkan artikel"
        ],
        correct: 2
    },
    {
        q: "Perbedaan fitur copy dan move adalah?",
        a: [
            "Copy menduplikasi, move memindahkan",
            "Copy menghapus artikel",
            "Copy hanya untuk draft",
            "Move hanya untuk publish",
            "Tidak ada perbedaan"
        ],
        correct: 0
    },
    {
        q: "Apa itu meta tag?",
        a: [
            "Tag untuk layout",
            "Tag untuk animasi",
            "Tag untuk memberi informasi halaman",
            "Tag untuk menambah gambar",
            "Tag untuk memindahkan artikel"
        ],
        correct: 2
    },
    {
        q: "Fungsi utama layout adalah?",
        a: [
            "Mengatur navigasi",
            "Mengatur posisi elemen dan estetika",
            "Menyimpan file media",
            "Menambah animasi",
            "Membuat artikel baru"
        ],
        correct: 1
    },
    {
        q: "Keuntungan menggunakan CSS untuk layout adalah?",
        a: ["Lebih sederhana dan fleksibel", "Hanya bekerja di perangkat tertentu", "Tabel sulit dipakai", "CSS hanya untuk browser baru", "CSS lebih mahal"],
        correct: 0
    },
    {
        q: "Apa itu CMS?",
        a: [
            "Sistem untuk mengatur konten web",
            "Sistem animasi",
            "Sistem menghapus file",
            "Sistem desain responsif",
            "Sistem memindahkan artikel"
        ],
        correct: 0
    },
    {
        q: "Langkah pertama menghapus section adalah?",
        a: [
            "Memindahkan section ke trash",
            "Memastikan tidak ada kategori di dalamnya",
            "Mengedit section",
            "Menambah artikel baru",
            "Memindahkan ke category lain"
        ],
        correct: 1
    },
    {
        q: "Fungsi artikel yang dipublish adalah?",
        a: [
            "Menampilkan artikel ke pengguna",
            "Menyembunyikan artikel",
            "Menjadi draft",
            "Menghapus artikel",
            "Menambah metadata"
        ],
        correct: 0
    },
    {
        q: "Apa yang dimaksud dengan table layout?",
        a: [
            "Layout menggunakan tabel",
            "Layout hanya untuk teks",
            "Layout tanpa CSS",
            "Layout otomatis",
            "Layout untuk media"
        ],
        correct: 0
    },
    {
        q: "Kelebihan layout div dibanding tabel adalah?",
        a: [
            "Lebih kompleks",
            "Lebih mudah dimodifikasi",
            "Tidak mendukung CSS",
            "Hanya untuk HTML lama",
            "Sulit diakses"
        ],
        correct: 1
    },
    {
        q: "Langkah terakhir membuat section baru adalah?",
        a: ["Pilih kategori", "Tekan save", "Tekan delete", "Tambahkan artikel", "Pindahkan section"],
        correct: 1
    },
    {
        q: "Fungsi Edit Article adalah?",
        a: [
            "Menghapus artikel",
            "Mengubah isi artikel",
            "Memindahkan artikel ke trash",
            "Menerjemahkan artikel",
            "Menyalin artikel"
        ],
        correct: 1
    },
    {
        q: "Sebelum memindahkan artikel ke section lain, harus dilakukan?",
        a: [
            "Pastikan artikel publish",
            "Pilih artikel terlebih dahulu",
            "Hapus kategori lama",
            "Edit artikel dulu",
            "Hapus dari trash"
        ],
        correct: 1
    }
];