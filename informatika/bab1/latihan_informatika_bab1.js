let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Ilmu yang mempelajari pengolahan informasi secara sistematis disebut ....",
        a: [
            "Ilmu tentang mesin dan teknologi",
            "Ilmu tentang komputer dan perangkat keras",
            "Informatika",
            "Teknologi untuk hiburan",
            "Ilmu yang mempelajari perilaku manusia"
        ],
        correct: 2,
        pembahasan: "Informatika adalah ilmu yang mempelajari bagaimana informasi diolah, dikelola, dan disampaikan secara sistematis."
    },
    {
        q: "Penggunaan informatika dalam kehidupan bertujuan untuk ....",
        a: [
            "Membuat hiburan",
            "Menyimpan data saja",
            "Mendukung pengambilan keputusan berdasarkan data",
            "Menciptakan mesin otomatis",
            "Memproduksi perangkat keras"
        ],
        correct: 2,
        pembahasan: "Informatika digunakan untuk mengolah data sehingga menjadi informasi yang membantu pengambilan keputusan."
    },
    {
        q: "Sistem yang mengelola, memproses, dan menyajikan data untuk mendukung kegiatan organisasi disebut ....",
        a: [
            "Sistem penyimpanan informasi",
            "Sistem informasi",
            "Sistem distribusi perangkat keras",
            "Sistem hiburan digital",
            "Sistem keamanan data"
        ],
        correct: 1,
        pembahasan: "Sistem informasi adalah kumpulan komponen yang bekerja sama untuk memproses dan menyajikan data."
    },
    {
        q: "Penyajian informasi atau data dalam bentuk visual yang menarik dan mudah dipahami disebut ....",
        a: [
            "Informasi berbasis teks",
            "Data cetak",
            "Infografik",
            "Informasi digital terbatas",
            "Informasi berbasis audio"
        ],
        correct: 2,
        pembahasan: "Infografik menyajikan informasi secara visual sehingga mudah dipahami."
    },
    {
        q: "Penggunaan infografik terutama bermanfaat untuk ....",
        a: [
            "Mempermudah membaca teks panjang",
            "Meningkatkan pemahaman melalui visualisasi",
            "Meningkatkan kemampuan membaca data",
            "Menyulitkan akses data",
            "Membatasi akses informasi"
        ],
        correct: 1,
        pembahasan: "Infografik menyampaikan informasi secara visual sehingga lebih mudah dipahami."
    },
    {
        q: "Teknologi yang memungkinkan penyimpanan dan akses data melalui internet adalah ....",
        a: [
            "Penyimpanan fisik",
            "Cloud computing",
            "Pemrosesan perangkat keras",
            "Teknologi pemrograman",
            "Enkripsi perangkat"
        ],
        correct: 1,
        pembahasan: "Cloud computing memungkinkan pengguna menyimpan dan mengakses data secara daring tanpa perangkat penyimpanan fisik."
    },
    {
        q: "Serangkaian langkah logis yang digunakan untuk memecahkan masalah secara sistematis disebut ....",
        a: [
            "Pemrosesan data",
            "Algoritma",
            "Perangkat keras komputer",
            "Informasi terolah",
            "Kode desain"
        ],
        correct: 1,
        pembahasan: "Algoritma adalah langkah-langkah logis untuk menyelesaikan masalah."
    },
    {
        q: "Teknologi yang memproses dan menyimpan kumpulan data berukuran besar secara efisien disebut ....",
        a: [
            "Visualisasi data",
            "Big data",
            "Penghancuran data",
            "Reduksi data",
            "Grafik otomatis"
        ],
        correct: 1,
        pembahasan: "Big data memungkinkan pengelolaan data dalam jumlah besar."
    },
    {
        q: "Bagian dari sistem yang menjadi penghubung antara pengguna dan perangkat lunak disebut ....",
        a: [
            "Perangkat keras",
            "Antarmuka pengguna (User Interface)",
            "Sistem penyimpanan",
            "Aplikasi data",
            "Visual tampilan komputer"
        ],
        correct: 1,
        pembahasan: "User interface adalah jembatan interaksi antara pengguna dan sistem."
    },
    {
        q: "Bekerja bersama dalam sebuah tim untuk mencapai tujuan bersama dalam informatika disebut ....",
        a: [
            "Kolaborasi",
            "Pemecahan masalah individu",
            "Kerja mandiri",
            "Optimasi perangkat keras",
            "Pengurangan perangkat lunak"
        ],
        correct: 0,
        pembahasan: "Kolaborasi memungkinkan kerja tim lebih efisien dalam pengembangan teknologi."
    },
    {
        q: "Proses menganalisis kumpulan data besar untuk menemukan pola dan informasi penting disebut ....",
        a: [
            "Pengumpulan data kecil",
            "Data mining",
            "Penyimpanan data cloud",
            "Penghapusan data",
            "Pembuatan data otomatis"
        ],
        correct: 1,
        pembahasan: "Data mining adalah proses menemukan pola dari kumpulan data dalam jumlah besar."
    },
    {
        q: "Teknologi digital membantu kehidupan modern terutama dalam hal ....",
        a: [
            "Mengurangi informasi",
            "Mempercepat komunikasi dan akses informasi",
            "Menambah ketergantungan teknologi",
            "Menghapus pekerjaan manual",
            "Menciptakan data tidak akurat"
        ],
        correct: 1,
        pembahasan: "Teknologi digital meningkatkan efisiensi komunikasi dan akses informasi."
    },
    {
        q: "Pendidikan informatika bertujuan untuk ....",
        a: [
            "Membuat perangkat keras",
            "Mengelola dan memahami informasi secara efektif",
            "Meningkatkan konsumsi teknologi",
            "Mengurangi penggunaan data",
            "Menghasilkan lebih banyak game"
        ],
        correct: 1,
        pembahasan: "Pendidikan informatika fokus pada pemahaman pengolahan dan pengelolaan informasi."
    },
    {
        q: "Teknologi yang meniru cara manusia berpikir dalam menyelesaikan tugas secara cerdas adalah ....",
        a: [
            "Pengganti manusia sepenuhnya",
            "Kecerdasan buatan (AI)",
            "Sistem penyimpanan data",
            "Alat pencatat informasi manual",
            "Teknologi tanpa perangkat keras"
        ],
        correct: 1,
        pembahasan: "AI menirukan cara manusia menyelesaikan tugas secara cerdas."
    },
    {
        q: "Teknologi yang menghubungkan berbagai perangkat untuk saling berbagi data melalui internet disebut ....",
        a: [
            "Internet of Things (IoT)",
            "Penghapusan data",
            "Distribusi perangkat keras",
            "Pengurangan biaya jaringan",
            "Pemblokiran akses internet"
        ],
        correct: 0,
        pembahasan: "IoT menghubungkan perangkat agar dapat berkomunikasi dan berbagi data."
    },
    {
        q: "Perangkat lunak pada komputer berfungsi untuk ....",
        a: [
            "Mendesain perangkat keras",
            "Menjalankan fungsi spesifik pada komputer",
            "Menyimpan informasi manual",
            "Menciptakan jaringan internet",
            "Mengontrol arus listrik"
        ],
        correct: 1,
        pembahasan: "Software dirancang menjalankan tugas tertentu pada perangkat."
    },
    {
        q: "Presentasi digital digunakan untuk ....",
        a: [
            "Menyampaikan informasi secara visual kepada audiens",
            "Mengurangi penggunaan teknologi",
            "Menghapus data lama",
            "Membatasi kreativitas",
            "Menyimpan informasi manual"
        ],
        correct: 0,
        pembahasan: "Presentasi digital membantu menyampaikan informasi dengan visualisasi yang menarik."
    },
    {
        q: "Format dasar desain yang dapat digunakan kembali dan dimodifikasi sesuai kebutuhan disebut ....",
        a: [
            "Template",
            "Penyimpanan data",
            "Pencetakan otomatis",
            "Perangkat lunak dasar",
            "Sistem manual"
        ],
        correct: 0,
        pembahasan: "Template mempercepat proses pembuatan desain."
    },
    {
        q: "Teknologi pengolahan data membantu ....",
        a: [
            "Mengorganisasi informasi agar lebih terstruktur",
            "Mengurangi data tidak perlu",
            "Menyimpan data manual",
            "Membatasi penggunaan informasi",
            "Membuat perangkat keras"
        ],
        correct: 0,
        pembahasan: "Pengolahan data membantu menyajikan informasi secara terorganisir."
    },
    {
        q: "Analisis data dilakukan untuk ....",
        a: [
            "Meningkatkan penjualan produk",
            "Memberikan wawasan bagi pengambilan keputusan",
            "Mengurangi kebutuhan teknologi",
            "Menghapus data lama",
            "Membatasi akses informasi"
        ],
        correct: 1,
        pembahasan: "Analisis data memberikan informasi penting untuk keputusan yang tepat."
    },
    {
        q: "Perangkat lunak yang mengatur fungsi dasar komputer dan mengelola perangkat keras disebut ....",
        a: [
            "Perangkat keras komputer",
            "Sistem operasi",
            "Penyimpanan data",
            "Perangkat desain",
            "Aplikasi hiburan"
        ],
        correct: 1,
        pembahasan: "Sistem operasi mengelola fungsi dasar komputer."
    },
    {
        q: "Teknologi keamanan data digunakan untuk ....",
        a: [
            "Melindungi informasi dari akses tidak sah",
            "Membatasi penggunaan data",
            "Menghapus data lama",
            "Menyimpan data di perangkat keras",
            "Menggandakan informasi"
        ],
        correct: 0,
        pembahasan: "Keamanan data menjaga informasi dari ancaman dan penyalahgunaan."
    },
    {
        q: "Antarmuka visual yang menjadi media interaksi pengguna dengan perangkat lunak disebut ....",
        a: [
            "Sistem operasi tersembunyi",
            "User interface",
            "Program visual",
            "Perangkat keras",
            "Data cloud"
        ],
        correct: 1,
        pembahasan: "UI adalah antarmuka interaksi antara pengguna dan sistem."
    },
    {
        q: "Teknologi penyimpanan dan akses data melalui internet tanpa ruang penyimpanan fisik disebut ....",
        a: [
            "Penyimpanan perangkat",
            "Cloud computing",
            "Sistem manual",
            "Aplikasi desain grafis",
            "Keamanan perangkat"
        ],
        correct: 1,
        pembahasan: "Cloud memungkinkan akses data secara online."
    },
    {
        q: "Pembuatan visual yang menarik untuk menyampaikan informasi secara efektif disebut ....",
        a: [
            "Pencetakan dokumen",
            "Desain grafis",
            "Penyimpanan informasi",
            "Pengolahan data manual",
            "Pembuatan perangkat keras"
        ],
        correct: 1,
        pembahasan: "Desain grafis membuat visual yang efektif untuk komunikasi."
    },
    {
        q: "Infografik terutama digunakan untuk ....",
        a: [
            "Meningkatkan konsumsi data",
            "Menyampaikan informasi secara visual dan mudah dipahami",
            "Menghapus data lama",
            "Membuat data tidak terbaca",
            "Menyimpan data manual"
        ],
        correct: 1,
        pembahasan: "Infografik menyampaikan data agar lebih cepat dipahami."
    },
    {
        q: "Proses menemukan dan memperbaiki kesalahan dalam kode program disebut ....",
        a: [
            "Coding ulang",
            "Debugging",
            "Penyimpanan data",
            "Optimasi perangkat keras",
            "Desain antarmuka"
        ],
        correct: 1,
        pembahasan: "Debugging adalah proses mencari dan memperbaiki error (bug) dalam kode program."
    },
    {
        q: "Teknologi yang memungkinkan perangkat saling berkomunikasi dan bertukar data melalui internet disebut ....",
        a: [
            "Internet of Things",
            "Komputasi manual",
            "Visualisasi data",
            "Jaringan internal tertutup",
            "Pemrosesan teks"
        ],
        correct: 0,
        pembahasan: "IoT menghubungkan perangkat agar dapat berkomunikasi melalui jaringan internet."
    },
    {
        q: "Bahasa pemrograman yang berjalan pada browser dan digunakan untuk membuat halaman web interaktif adalah ....",
        a: [
            "JavaScript",
            "Python",
            "SQL",
            "C++",
            "Java"
        ],
        correct: 0,
        pembahasan: "JavaScript bekerja langsung di browser dan membuat website dinamis serta interaktif."
    },
    {
        q: "Penyimpanan data jangka panjang pada komputer umumnya menggunakan media seperti ....",
        a: [
            "RAM",
            "Cache",
            "Hard Disk",
            "Register",
            "CPU"
        ],
        correct: 2,
        pembahasan: "Hard Disk berfungsi sebagai penyimpanan permanen untuk data dan aplikasi."
    }
];

