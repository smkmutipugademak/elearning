let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan menggambar bentuk?",
        a: [
            "Membuat gambar sketsa",
            "Kegiatan merekam objek pada bidang dua dimensi",
            "Membuat gambar perspektif",
            "Menggambar gambar tiga dimensi",
            "Membuat komposisi gambar"
        ],
        correct: 1,
        pembahasan: "Menggambar bentuk adalah kegiatan merekam objek pada bidang datar dua dimensi dengan memperhatikan bentuk, warna, perspektif, dan komposisi."
    },
    {
        q: "Istilah menggambar bentuk hanya ditujukan untuk objek-objek dari benda mati yang dikenal dengan...",
        a: ["Menggambar model", "Menggambar benda", "Still life", "Model life", "Perspektif benda"],
        correct: 2,
        pembahasan: "Menggambar bentuk biasanya dilakukan menggunakan objek benda mati atau still life."
    },
    {
        q: "Benda tiga dimensi yang memiliki panjang, lebar, tinggi, atau volume disebut...",
        a: ["Dua dimensi", "Tiga dimensi", "Kubistis", "Silindris", "Perspektif"],
        correct: 1,
        pembahasan: "Benda tiga dimensi memiliki panjang, lebar, tinggi, dan volume."
    },
    {
        q: "Contoh benda berbentuk kubistis adalah...",
        a: ["Botol", "Pensil", "Alat musik", "Almari", "Ember"],
        correct: 3,
        pembahasan: "Bentuk kubistis adalah bentuk geometris seperti balok atau kotak, misalnya almari."
    },
    {
        q: "Apa yang dimaksud dengan proporsi dalam menggambar bentuk?",
        a: ["Perbandingan antarbagian gambar", "Teknik arsir", "Teknik blok warna", "Penempatan bayangan", "Susunan objek dalam gambar"],
        correct: 0,
        pembahasan: "Proporsi adalah perbandingan antarbagian gambar agar terlihat realistis."
    },
    {
        q: "Prinsip penting dalam menggambar bentuk agar terlihat realistis adalah...",
        a: ["Perspektif", "Kontras", "Teknik blok", "Simetri", "Warna"],
        correct: 0,
        pembahasan: "Perspektif adalah prinsip penting untuk menghasilkan kesan tiga dimensi."
    },
    {
        q: "Teknik menggambar blok adalah...",
        a: ["Menggunakan garis arsir untuk efek", "Menggunakan warna atau bayangan penuh pada bagian tertentu", "Menambahkan tekstur gambar", "Membuat garis perspektif", "Menggunakan media campuran"],
        correct: 1,
        pembahasan: "Teknik blok memberikan warna atau bayangan penuh pada suatu bagian untuk mempertegas bentuk."
    },
    {
        q: "Bahan seperti kertas, pensil, dan tinta yang digunakan untuk menggambar bentuk disebut...",
        a: ["Media gambar", "Komposisi", "Perspektif", "Proporsi", "Prinsip menggambar"],
        correct: 0,
        pembahasan: "Media gambar adalah bahan yang digunakan dalam proses menggambar."
    },
    {
        q: "Tujuan utama penggunaan komposisi dalam menggambar bentuk adalah...",
        a: ["Memberikan warna", "Memberikan kesan tiga dimensi", "Mengatur letak objek agar harmonis", "Menggunakan teknik arsiran", "Menggunakan bahan yang tepat"],
        correct: 2,
        pembahasan: "Komposisi mengatur letak objek agar terlihat harmonis dan seimbang."
    },
    {
        q: "Dalam menggambar bentuk, bagian gelap terang pada objek disebut...",
        a: ["Komposisi", "Perspektif", "Proporsi", "Halftone", "Kontras"],
        correct: 3,
        pembahasan: "Halftone digunakan untuk menunjukkan bayangan dan gelap terang."
    },
    {
        q: "Gambar bentuk yang menyerupai tabung atau silinder disebut...",
        a: ["Kubistis", "Silindris", "Perspektif", "Geometris", "Dimensi"],
        correct: 1,
        pembahasan: "Bentuk silindris adalah bentuk seperti tabung, botol, atau pipa."
    },
    {
        q: "Teknik menggambar menggunakan garis-garis disebut...",
        a: ["Teknik blok", "Teknik campuran", "Teknik garis atau arsir", "Teknik perspektif", "Teknik bayangan"],
        correct: 2,
        pembahasan: "Teknik arsir menggunakan garis untuk memberikan efek bayangan atau tekstur."
    },
    {
        q: "Perspektif burung adalah sudut pandang yang menggambarkan objek dari...",
        a: ["Atas seperti mata burung", "Sudut mata normal", "Sudut bawah", "Sudut sejajar objek", "Jarak jauh"],
        correct: 0,
        pembahasan: "Perspektif burung menggambarkan objek dari atas."
    },
    {
        q: "Prinsip gelap terang digunakan untuk menunjukkan...",
        a: ["Warna objek", "Komposisi objek", "Tekstur dan bayangan", "Perspektif objek", "Teknik arsiran"],
        correct: 2,
        pembahasan: "Gelap terang dipakai untuk menghasilkan bayangan dan tekstur."
    },
    {
        q: "Apa langkah pertama dalam menggambar bentuk?",
        a: ["Memberi warna", "Membuat sketsa awal", "Mengatur komposisi", "Menentukan bayangan", "Memberikan proporsi"],
        correct: 1,
        pembahasan: "Menggambar bentuk dimulai dengan membuat sketsa awal."
    },
    {
        q: "Menggambar benda berbentuk balok disebut juga...",
        a: ["Kubistis", "Silindris", "Perspektif", "Komposisi", "Proporsi"],
        correct: 0,
        pembahasan: "Kubistis merujuk pada bentuk geometris seperti balok."
    },
    {
        q: "Tujuan dari proporsi dalam menggambar adalah...",
        a: ["Menonjolkan warna", "Memberikan detail", "Membuat perbandingan realistis antarbagian", "Memberi kesan tiga dimensi", "Mengatur tata letak"],
        correct: 2,
        pembahasan: "Proporsi menciptakan perbandingan realistis antarbagian objek."
    },
    {
        q: "Perspektif dwimatra menggambarkan objek dari...",
        a: ["Dua dimensi", "Tiga dimensi", "Sudut bawah", "Sudut mata manusia", "Jarak dekat"],
        correct: 0,
        pembahasan: "Perspektif dwimatra menggambarkan objek dalam ruang dua dimensi."
    },
    {
        q: "Gambar yang dimodifikasi dengan imajinasi disebut...",
        a: ["Gambar realistis", "Gambar modern", "Gambar pengembangan", "Gambar dwimatra", "Gambar model"],
        correct: 2,
        pembahasan: "Gambar pengembangan adalah gambar yang dimodifikasi dengan kreativitas atau imajinasi."
    },
    {
        q: "Teknik menggambar dengan cat air disebut...",
        a: ["Teknik blok", "Teknik arsir", "Teknik campuran", "Teknik aquarel", "Teknik perspektif"],
        correct: 3,
        pembahasan: "Teknik aquarel menggunakan cat air dengan efek transparan."
    }
];
