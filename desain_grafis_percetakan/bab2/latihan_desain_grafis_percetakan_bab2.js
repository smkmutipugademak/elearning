let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Tipografi merupakan ilmu memilih dan menata huruf untuk ………",
        a: [
            "Ilmu tentang mencetak gambar",
            "Ilmu memilih dan menata huruf untuk menyampaikan pesan",
            "Seni menggambar secara manual",
            "Teknik pencetakan kuno",
            "Metode modern untuk desain grafis"
        ],
        correct: 1,
        pembahasan: "Tipografi adalah ilmu memilih dan menata huruf beserta pengaturannya untuk menyampaikan pesan."
    },
    {
        q: "Tujuan utama tipografi dalam desain grafis adalah ………",
        a: [
            "Meningkatkan estetika gambar",
            "Menonjolkan gambar dalam desain",
            "Mempermudah pembaca memahami informasi",
            "Mengubah tata letak desain",
            "Membuat pola geometris"
        ],
        correct: 2,
        pembahasan: "Tujuan tipografi adalah mempermudah pembaca memahami informasi melalui pengaturan huruf yang nyaman dilihat."
    },
    {
        q: "Huruf-huruf pertama kali ditemukan dalam bentuk ………",
        a: ["Hieroglif", "Kaligrafi", "Cetakan mesin", "Teks digital", "Alfabet Yunani"],
        correct: 0,
        pembahasan: "Huruf pertama ditemukan dalam bentuk hieroglif pada masa Mesir kuno."
    },
    {
        q: "Huruf serif pertama kali muncul dalam sejarah tipografi pada ………",
        a: ["Abad ke-19", "Abad ke-17", "Abad ke-8", "Abad ke-2", "Abad ke-15"],
        correct: 2,
        pembahasan: "Huruf serif pertama kali muncul pada abad ke-8 di Roma."
    },
    {
        q: "Huruf sans-serif mulai digunakan secara luas pada ………",
        a: ["Abad ke-15", "Abad ke-18", "Abad ke-20", "Abad ke-14", "Abad ke-10"],
        correct: 2,
        pembahasan: "Sans-serif populer pada abad ke-20 karena tampilannya yang sederhana dan modern."
    },
    {
        q: "Fungsi utama huruf serif dalam tipografi adalah ………",
        a: [
            "Memberikan tampilan modern",
            "Meningkatkan kejelasan bacaan",
            "Memberikan kesan dekoratif dan formal",
            "Membuat huruf lebih besar",
            "Menyederhanakan desain"
        ],
        correct: 2,
        pembahasan: "Serif memberikan garis dekoratif yang memberi kesan elegan dan formal."
    },
    {
        q: "Gaya huruf Blackletter dikenal juga dengan nama ………",
        a: ["Roman Type", "Gothic Script", "Modern Script", "Transitional Style", "Handwriting Type"],
        correct: 1,
        pembahasan: "Blackletter dikenal sebagai Gothic Script yang populer di Jerman."
    },
    {
        q: "Legibility dalam tipografi merupakan ………",
        a: [
            "Kemampuan huruf dibaca dari jarak jauh",
            "Keindahan bentuk huruf",
            "Kemudahan membaca huruf secara visual",
            "Penempatan huruf pada desain",
            "Kemampuan huruf memengaruhi estetika"
        ],
        correct: 2,
        pembahasan: "Legibility adalah kemampuan huruf dikenali secara visual."
    },
    {
        q: "Huruf Modern dalam tipografi mulai muncul pada ………",
        a: ["Abad ke-15", "Abad ke-17", "Abad ke-18", "Abad ke-20", "Abad ke-10"],
        correct: 1,
        pembahasan: "Huruf Modern muncul pada akhir abad ke-17."
    },
    {
        q: "Jenis huruf yang menyerupai tulisan tangan manusia disebut ………",
        a: ["Serif", "Script", "Sans-Serif", "Display", "Transitional"],
        correct: 1,
        pembahasan: "Script adalah huruf yang menyerupai tulisan tangan."
    },
    {
        q: "Readability dalam tipografi merupakan ………",
        a: [
            "Kesan estetika huruf",
            "Kemampuan huruf menyampaikan pesan",
            "Kemudahan membaca teks dalam kalimat",
            "Kemampuan huruf dipadukan dengan gambar",
            "Ukuran huruf dalam desain"
        ],
        correct: 2,
        pembahasan: "Readability adalah kemudahan membaca teks dalam paragraf atau kalimat."
    },
    {
        q: "Clarity dalam tipografi adalah ………",
        a: [
            "Kerapihan desain huruf",
            "Kemampuan huruf mudah dibaca dari jarak jauh",
            "Kejelasan bentuk huruf dalam desain",
            "Penyesuaian huruf dan gambar",
            "Penggunaan huruf berukuran besar"
        ],
        correct: 2,
        pembahasan: "Clarity adalah kejelasan bentuk huruf sehingga mudah dikenali."
    },
    {
        q: "Huruf Transitional memiliki karakteristik ………",
        a: ["Dekoratif", "Sederhana", "Perpaduan gaya lama dan baru", "Tegas", "Bergaya tulisan tangan"],
        correct: 2,
        pembahasan: "Transitional merupakan perpaduan serif klasik dan serif modern."
    },
    {
        q: "Komponen utama multimedia berbasis teks adalah ………",
        a: ["Animasi", "Video", "Huruf dan kata", "Grafik", "Gambar"],
        correct: 2,
        pembahasan: "Huruf dan kata merupakan komponen utama multimedia berbasis teks."
    },
    {
        q: "Huruf sans-serif lebih cocok digunakan untuk ………",
        a: ["Desain formal", "Desain modern dan minimalis", "Gaya klasik", "Dokumen resmi", "Poster kuno"],
        correct: 1,
        pembahasan: "Sans-serif cocok untuk desain modern karena tampilannya sederhana."
    },
    {
        q: "Script dalam tipografi merupakan ………",
        a: ["Huruf dekoratif", "Huruf menyerupai tulisan tangan", "Huruf geometris", "Huruf digital", "Huruf lurus"],
        correct: 1,
        pembahasan: "Script adalah huruf yang menyerupai tulisan tangan manusia."
    },
    {
        q: "Adobe Illustrator digunakan untuk ………",
        a: ["Mengedit pixel", "Desain vektor", "Animasi 3D", "Dokumen teks", "Mengedit video"],
        correct: 1,
        pembahasan: "Illustrator digunakan untuk membuat desain berbasis vektor."
    },
    {
        q: "Komponen utama dalam desain multimedia adalah ………",
        a: ["Teks, grafik, audio, video, animasi", "Warna dan pola", "Simbol dan tulisan tangan", "Foto dan gambar", "Sketsa manual"],
        correct: 0,
        pembahasan: "Desain multimedia mencakup teks, grafik, audio, video, dan animasi."
    },
    {
        q: "Fungsi utama video dalam desain multimedia adalah ………",
        a: [
            "Menambah warna",
            "Memberikan efek gerakan dan cerita",
            "Menambah estetika teks",
            "Memperbesar objek",
            "Membuat desain ringan"
        ],
        correct: 1,
        pembahasan: "Video memberikan efek gerakan dan menyampaikan cerita kepada audiens."
    },
    {
        q: "Huruf Display biasanya digunakan untuk ………",
        a: ["Teks kecil", "Judul besar atau iklan", "Paragraf panjang", "Dokumen resmi", "Tulisan tangan"],
        correct: 1,
        pembahasan: "Font display digunakan untuk judul besar karena bentuknya menarik perhatian."
    }
];
