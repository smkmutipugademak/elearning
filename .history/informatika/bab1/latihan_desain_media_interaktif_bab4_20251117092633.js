let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa pengertian informatika?",
        a: [
            "Ilmu tentang mesin dan teknologi",
            "Ilmu tentang komputer dan perangkat keras",
            "Ilmu yang mempelajari pengolahan informasi secara sistematis",
            "Teknologi untuk hiburan",
            "Ilmu yang mempelajari perilaku manusia"
        ],
        correct: 2,
        pembahasan: "Informatika adalah ilmu yang mempelajari bagaimana informasi diolah, dikelola, dan disampaikan secara sistematis."
    },
    {
        q: "Apa tujuan utama informatika dalam kehidupan?",
        a: [
            "Untuk membuat hiburan",
            "Untuk menyimpan data saja",
            "Untuk membantu pengambilan keputusan berdasarkan data",
            "Untuk menciptakan mesin otomatis",
            "Untuk memproduksi perangkat keras"
        ],
        correct: 2,
        pembahasan: "Informatika digunakan untuk mengolah data sehingga menjadi informasi yang membantu pengambilan keputusan."
    },
    {
        q: "Apa yang dimaksud dengan sistem informasi?",
        a: [
            "Sistem untuk menyimpan informasi",
            "Sistem untuk mengelola, memproses, dan menyajikan data",
            "Sistem untuk mendistribusikan perangkat keras",
            "Sistem untuk hiburan digital",
            "Sistem keamanan komputer"
        ],
        correct: 1,
        pembahasan: "Sistem informasi adalah kumpulan komponen yang bekerja sama untuk memproses dan menyajikan data."
    },
    {
        q: "Apa yang dimaksud dengan infografik?",
        a: [
            "Informasi dalam bentuk teks",
            "Data yang dicetak di media",
            "Informasi yang disajikan dalam bentuk visual",
            "Informasi digital yang sulit diakses",
            "Informasi berbasis audio"
        ],
        correct: 2,
        pembahasan: "Infografik adalah cara menyajikan informasi atau data dalam bentuk visual yang menarik dan mudah dipahami."
    },
    {
        q: "Apa manfaat utama dari infografik?",
        a: [
            "Mempermudah membaca teks panjang",
            "Meningkatkan pemahaman melalui visualisasi",
            "Meningkatkan kemampuan membaca data",
            "Menyulitkan akses data",
            "Membatasi akses ke data"
        ],
        correct: 1,
        pembahasan: "Infografik digunakan untuk menyampaikan informasi secara visual sehingga lebih mudah dipahami."
    },
    {
        q: "Apa fungsi utama dari teknologi cloud computing?",
        a: [
            "Menyimpan data secara fisik",
            "Mengakses dan menyimpan data melalui internet",
            "Mempercepat pemrosesan perangkat keras",
            "Membantu dalam penulisan program",
            "Mengamankan perangkat keras"
        ],
        correct: 1,
        pembahasan: "Cloud computing memungkinkan pengguna menyimpan dan mengakses data secara daring tanpa perangkat penyimpanan fisik."
    },
    {
        q: "Apa yang dimaksud dengan algoritma?",
        a: [
            "Proses pengolahan data",
            "Serangkaian langkah logis untuk memecahkan masalah",
            "Perangkat keras untuk komputer",
            "Informasi yang sudah diproses",
            "Kode program untuk desain"
        ],
        correct: 1,
        pembahasan: "Algoritma adalah langkah-langkah logis yang digunakan untuk menyelesaikan masalah secara sistematis."
    },
    {
        q: "Apa yang menjadi tujuan utama dari big data?",
        a: [
            "Untuk memvisualisasikan data kecil",
            "Untuk menyimpan data besar dan memprosesnya",
            "Untuk menghancurkan data",
            "Untuk mengurangi jumlah data",
            "Untuk menghasilkan grafik otomatis"
        ],
        correct: 1,
        pembahasan: "Big data adalah teknologi yang memungkinkan pengolahan data berukuran besar secara efisien."
    },
    {
        q: "Apa yang dimaksud dengan user interface?",
        a: [
            "Desain perangkat keras",
            "Antarmuka antara pengguna dan sistem",
            "Sistem penyimpanan data",
            "Aplikasi pengolahan data",
            "Tampilan visual komputer"
        ],
        correct: 1,
        pembahasan: "User interface adalah bagian dari sistem yang menjadi jembatan antara pengguna dengan perangkat lunak."
    },
    {
        q: "Apa manfaat dari kolaborasi dalam informatika?",
        a: [
            "Mempermudah pekerjaan dalam tim",
            "Memecahkan masalah individu",
            "Membantu kerja individu",
            "Meningkatkan efisiensi perangkat keras",
            "Mengurangi penggunaan perangkat lunak"
        ],
        correct: 0,
        pembahasan: "Kolaborasi memungkinkan anggota tim bekerja bersama secara efisien untuk mencapai tujuan bersama."
    },
    {
        q: "Apa yang dimaksud dengan data mining?",
        a: [
            "Pengumpulan data dalam format kecil",
            "Proses menganalisis data besar untuk menemukan pola dan informasi",
            "Penyimpanan data dalam cloud",
            "Pemusnahan data yang tidak berguna",
            "Penulisan data baru secara otomatis"
        ],
        correct: 1,
        pembahasan: "Data mining adalah proses mencari pola dan informasi penting dari kumpulan data besar."
    },
    {
        q: "Apa yang menjadi keunggulan teknologi digital?",
        a: [
            "Mengurangi informasi",
            "Mempercepat komunikasi dan akses informasi",
            "Meningkatkan ketergantungan pada teknologi",
            "Menghapus kebutuhan manual",
            "Menciptakan data yang tidak akurat"
        ],
        correct: 1,
        pembahasan: "Teknologi digital membantu meningkatkan efisiensi dan akses informasi secara cepat."
    },
    {
        q: "Apa tujuan utama dari pendidikan informatika?",
        a: [
            "Membuat perangkat keras baru",
            "Memahami dan mengelola informasi secara efektif",
            "Meningkatkan konsumsi teknologi",
            "Mengurangi penggunaan data",
            "Mengembangkan permainan digital"
        ],
        correct: 1,
        pembahasan: "Pendidikan informatika bertujuan untuk memberikan pemahaman tentang pengolahan, pengelolaan, dan penyampaian informasi secara efisien."
    },
    {
        q: "Apa yang dimaksud dengan teknologi kecerdasan buatan (AI)?",
        a: [
            "Teknologi yang menggantikan manusia",
            "Teknologi yang dirancang untuk melakukan tugas manusia secara cerdas",
            "Sistem yang hanya menyimpan data",
            "Alat untuk menyimpan informasi manual",
            "Teknologi yang tidak membutuhkan perangkat keras"
        ],
        correct: 1,
        pembahasan: "AI adalah teknologi yang dirancang untuk meniru kemampuan manusia dalam menyelesaikan masalah secara cerdas."
    },
    {
        q: "Apa peran utama dari teknologi IoT (Internet of Things)?",
        a: [
            "Menghubungkan perangkat melalui internet untuk berbagi data",
            "Menghapus data yang tidak diperlukan",
            "Menyediakan perangkat keras baru",
            "Mengurangi biaya perangkat lunak",
            "Membatasi akses internet"
        ],
        correct: 0,
        pembahasan: "IoT memungkinkan perangkat saling terhubung dan berbagi data melalui internet untuk meningkatkan efisiensi."
    },
    {
        q: "Apa fungsi utama dari program perangkat lunak?",
        a: [
            "Untuk mendesain perangkat keras",
            "Untuk menjalankan fungsi spesifik di komputer",
            "Untuk menyimpan informasi",
            "Untuk menciptakan jaringan internet",
            "Untuk mengontrol perangkat fisik"
        ],
        correct: 1,
        pembahasan: "Perangkat lunak dirancang untuk menjalankan tugas tertentu pada perangkat komputer."
    },
    {
        q: "Apa manfaat dari presentasi digital?",
        a: [
            "Mempercepat komunikasi dengan visualisasi",
            "Mengurangi penggunaan teknologi",
            "Meningkatkan ketergantungan pada komputer",
            "Membatasi kreativitas",
            "Menghapus kebutuhan akan data"
        ],
        correct: 0,
        pembahasan: "Presentasi digital membantu menyampaikan informasi dengan visualisasi yang menarik sehingga lebih mudah dipahami."
    },
    {
        q: "Apa yang dimaksud dengan istilah 'template' dalam desain grafis?",
        a: [
            "Struktur dasar desain yang dapat disesuaikan",
            "Alat untuk menyimpan data",
            "Proses mencetak data secara otomatis",
            "Perangkat keras untuk komputer",
            "Sistem pengelolaan data manual"
        ],
        correct: 0,
        pembahasan: "Template adalah format dasar yang dapat digunakan untuk mempercepat proses desain."
    },
    {
        q: "Apa peran utama dari teknologi pengolahan data?",
        a: [
            "Membuat informasi menjadi lebih terorganisir",
            "Mengurangi data yang tidak perlu",
            "Membatasi penggunaan informasi",
            "Menyimpan data secara manual",
            "Membuat desain perangkat keras"
        ],
        correct: 0,
        pembahasan: "Teknologi pengolahan data membantu menyusun dan menyajikan data dengan cara yang lebih terstruktur."
    },
    {
        q: "Apa tujuan dari analisis data?",
        a: [
            "Meningkatkan penjualan produk",
            "Menyediakan wawasan untuk pengambilan keputusan",
            "Mengurangi kebutuhan teknologi",
            "Menghilangkan data lama",
            "Membatasi akses informasi"
        ],
        correct: 1,
        pembahasan: "Analisis data bertujuan untuk memberikan informasi yang bermanfaat dalam pengambilan keputusan."
    },
    {
        q: "Apa yang dimaksud dengan sistem operasi?",
        a: [
            "Perangkat keras komputer",
            "Perangkat lunak yang mengelola fungsi dasar komputer",
            "Alat untuk menyimpan data",
            "Teknologi untuk mendesain perangkat",
            "Aplikasi untuk hiburan digital"
        ],
        correct: 1,
        pembahasan: "Sistem operasi adalah perangkat lunak yang mengatur dan mengelola fungsi dasar perangkat komputer."
    },
    {
        q: "Apa manfaat utama dari teknologi keamanan data?",
        a: [
            "Melindungi informasi dari akses tidak sah",
            "Membatasi penggunaan data",
            "Menghapus informasi yang lama",
            "Menyimpan data di perangkat keras",
            "Membuat salinan data"
        ],
        correct: 0,
        pembahasan: "Teknologi keamanan data digunakan untuk melindungi informasi dari potensi ancaman dan akses yang tidak sah."
    },
    {
        q: "Apa itu 'user interface' dalam konteks komputer?",
        a: [
            "Sistem operasi yang tidak terlihat",
            "Antarmuka pengguna untuk berinteraksi dengan perangkat lunak",
            "Program untuk desain visual",
            "Perangkat keras untuk komputer",
            "Data yang disimpan di cloud"
        ],
        correct: 1,
        pembahasan: "User interface adalah antarmuka visual yang memungkinkan pengguna berinteraksi dengan perangkat lunak."
    },
    {
        q: "Apa yang dimaksud dengan istilah 'cloud computing'?",
        a: [
            "Teknologi penyimpanan data di perangkat keras",
            "Teknologi penyimpanan data melalui internet",
            "Sistem penyimpanan data manual",
            "Aplikasi untuk membuat infografik",
            "Sistem keamanan perangkat"
        ],
        correct: 1,
        pembahasan: "Cloud computing adalah teknologi penyimpanan dan akses data melalui internet tanpa perangkat keras fisik."
    },
    {
        q: "Apa yang dimaksud dengan desain grafis?",
        a: [
            "Proses mencetak dokumen",
            "Proses menciptakan visual yang menarik",
            "Teknologi untuk menyimpan informasi",
            "Alat untuk menciptakan data manual",
            "Perangkat keras untuk komputer"
        ],
        correct: 1,
        pembahasan: "Desain grafis adalah proses menciptakan visual yang menarik untuk menyampaikan informasi secara efektif."
    },
    {
        q: "Apa manfaat utama dari teknologi infografik?",
        a: [
            "Meningkatkan konsumsi data",
            "Menyampaikan informasi secara visual dan mudah dipahami",
            "Menghapus data lama",
            "Membuat data menjadi tidak terbaca",
            "Menyimpan data manual"
        ],
        correct: 1,
        pembahasan: "Infografik digunakan untuk menyampaikan informasi dengan visualisasi menarik sehingga lebih mudah dipahami."
    },
    {
        q: "Apa yang dimaksud dengan proses 'komputasi'?",
        a: [
            "Penyimpanan data di perangkat keras",
            "Proses pengolahan data secara otomatis dengan komputer",
            "Menghapus data yang tidak diperlukan",
            "Desain perangkat lunak baru",
            "Membatasi akses internet"
        ],
        correct: 1,
        pembahasan: "Komputasi adalah proses otomatisasi pengolahan data dengan bantuan komputer untuk meningkatkan efisiensi."
    },
    {
        q: "Apa tujuan dari teknologi jaringan komputer?",
        a: [
            "Meningkatkan keamanan data",
            "Menghubungkan beberapa perangkat untuk berbagi data",
            "Membuat perangkat keras baru",
            "Menyimpan data secara manual",
            "Menghapus informasi lama"
        ],
        correct: 1,
        pembahasan: "Teknologi jaringan komputer bertujuan untuk menghubungkan perangkat yang berbeda sehingga memungkinkan berbagi data dan informasi."
    },
    {
        q: "Apa itu 'programming' dalam informatika?",
        a: [
            "Proses mendesain perangkat keras",
            "Proses menulis dan mengembangkan kode untuk aplikasi atau perangkat lunak",
            "Proses penyimpanan data manual",
            "Proses mencetak dokumen secara otomatis",
            "Teknologi untuk membuat infografik"
        ],
        correct: 1,
        pembahasan: "Programming adalah proses menulis, menguji, dan mengembangkan kode yang digunakan dalam perangkat lunak dan aplikasi komputer."
    },
    {
        q: "Apa fungsi utama dari perangkat lunak 'presentasi digital'?",
        a: [
            "Menyimpan informasi manual",
            "Membuat visualisasi informasi untuk disajikan kepada audiens",
            "Mengurangi penggunaan perangkat keras",
            "Membatasi akses data",
            "Menghapus informasi lama"
        ],
        correct: 1,
        pembahasan: "Perangkat lunak presentasi digital dirancang untuk membantu pengguna membuat dan menyajikan informasi secara visual dengan cara yang lebih menarik dan efektif."
    }
];
