let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Menggambar bentuk merupakan kegiatan merekam objek pada bidang dua dimensi untuk ………",
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
        q: "Istilah menggambar bentuk hanya ditujukan pada objek-objek benda mati yang dikenal dengan sebutan ………",
        a: ["Menggambar model", "Menggambar benda", "Still life", "Model life", "Perspektif benda"],
        correct: 2,
        pembahasan: "Menggambar bentuk biasanya dilakukan menggunakan objek benda mati atau still life."
    },
    {
        q: "Benda tiga dimensi memiliki panjang, lebar, tinggi, atau volume dan disebut sebagai ………",
        a: ["Dua dimensi", "Tiga dimensi", "Kubistis", "Silindris", "Perspektif"],
        correct: 1,
        pembahasan: "Benda tiga dimensi memiliki panjang, lebar, tinggi, dan volume."
    },
    {
        q: "Contoh benda berbentuk kubistis antara lain adalah ………",
        a: ["Botol", "Pensil", "Alat musik", "Almari", "Ember"],
        correct: 3,
        pembahasan: "Bentuk kubistis adalah bentuk geometris seperti balok atau kotak, misalnya almari."
    },
    {
        q: "Proporsi dalam menggambar bentuk merupakan perbandingan antarbagian gambar untuk ………",
        a: ["Perbandingan antarbagian gambar", "Teknik arsir", "Teknik blok warna", "Penempatan bayangan", "Susunan objek dalam gambar"],
        correct: 0,
        pembahasan: "Proporsi adalah perbandingan antarbagian gambar agar terlihat realistis."
    },
    {
        q: "Perspektif merupakan prinsip penting dalam menggambar bentuk agar ………",
        a: ["Perspektif", "Kontras", "Teknik blok", "Simetri", "Warna"],
        correct: 0,
        pembahasan: "Perspektif adalah prinsip penting untuk menghasilkan kesan tiga dimensi."
    },
    {
        q: "Teknik blok adalah teknik menggambar yang memberikan warna atau bayangan penuh pada bagian tertentu untuk ………",
        a: [
            "Menggunakan garis arsir untuk efek",
            "Menggunakan warna atau bayangan penuh pada bagian tertentu",
            "Menambahkan tekstur gambar",
            "Membuat garis perspektif",
            "Menggunakan media campuran"
        ],
        correct: 1,
        pembahasan: "Teknik blok memberikan warna atau bayangan penuh pada suatu bagian untuk mempertegas bentuk."
    },
    {
        q: "Bahan seperti kertas, pensil, dan tinta yang digunakan dalam menggambar bentuk disebut ………",
        a: ["Media gambar", "Komposisi", "Perspektif", "Proporsi", "Prinsip menggambar"],
        correct: 0,
        pembahasan: "Media gambar adalah bahan yang digunakan dalam proses menggambar."
    },
    {
        q: "Penggunaan komposisi dalam menggambar bentuk bertujuan untuk ………",
        a: ["Memberikan warna", "Memberikan kesan tiga dimensi", "Mengatur letak objek agar harmonis", "Menggunakan teknik arsiran", "Menggunakan bahan yang tepat"],
        correct: 2,
        pembahasan: "Komposisi mengatur letak objek agar terlihat harmonis dan seimbang."
    },
    {
        q: "Bagian gelap terang pada objek dalam menggambar bentuk disebut sebagai ………",
        a: ["Komposisi", "Perspektif", "Proporsi", "Halftone", "Kontras"],
        correct: 3,
        pembahasan: "Halftone digunakan untuk menunjukkan bayangan dan gelap terang."
    },
    {
        q: "Gambar bentuk yang menyerupai tabung atau pipa termasuk bentuk ………",
        a: ["Kubistis", "Silindris", "Perspektif", "Geometris", "Dimensi"],
        correct: 1,
        pembahasan: "Bentuk silindris adalah bentuk seperti tabung, botol, atau pipa."
    },
    {
        q: "Teknik menggambar dengan menggunakan garis-garis disebut teknik ………",
        a: ["Teknik blok", "Teknik campuran", "Teknik garis atau arsir", "Teknik perspektif", "Teknik bayangan"],
        correct: 2,
        pembahasan: "Teknik arsir menggunakan garis untuk memberikan efek bayangan atau tekstur."
    },
    {
        q: "Perspektif burung adalah sudut pandang yang menggambarkan objek dari ………",
        a: ["Atas seperti mata burung", "Sudut mata normal", "Sudut bawah", "Sudut sejajar objek", "Jarak jauh"],
        correct: 0,
        pembahasan: "Perspektif burung menggambarkan objek dari atas."
    },
    {
        q: "Prinsip gelap terang digunakan untuk menunjukkan ………",
        a: ["Warna objek", "Komposisi objek", "Tekstur dan bayangan", "Perspektif objek", "Teknik arsiran"],
        correct: 2,
        pembahasan: "Gelap terang dipakai untuk menghasilkan bayangan dan tekstur."
    },
    {
        q: "Langkah pertama dalam menggambar bentuk dimulai dengan ………",
        a: ["Memberi warna", "Membuat sketsa awal", "Mengatur komposisi", "Menentukan bayangan", "Memberikan proporsi"],
        correct: 1,
        pembahasan: "Menggambar bentuk dimulai dengan membuat sketsa awal."
    },
    {
        q: "Menggambar benda berbentuk balok dapat disebut juga bentuk ………",
        a: ["Kubistis", "Silindris", "Perspektif", "Komposisi", "Proporsi"],
        correct: 0,
        pembahasan: "Kubistis merujuk pada bentuk geometris seperti balok."
    },
    {
        q: "Tujuan dari proporsi dalam menggambar adalah menciptakan ………",
        a: [
            "Menonjolkan warna",
            "Memberikan detail",
            "Membuat perbandingan realistis antarbagian",
            "Memberi kesan tiga dimensi",
            "Mengatur tata letak"
        ],
        correct: 2,
        pembahasan: "Proporsi menciptakan perbandingan realistis antarbagian objek."
    },
    {
        q: "Perspektif dwimatra merupakan teknik menggambar objek pada ruang ………",
        a: ["Dua dimensi", "Tiga dimensi", "Sudut bawah", "Sudut mata manusia", "Jarak dekat"],
        correct: 0,
        pembahasan: "Perspektif dwimatra menggambarkan objek dalam ruang dua dimensi."
    },
    {
        q: "Gambar yang dimodifikasi dengan kreativitas atau imajinasi disebut gambar ………",
        a: ["Gambar realistis", "Gambar modern", "Gambar pengembangan", "Gambar dwimatra", "Gambar model"],
        correct: 2,
        pembahasan: "Gambar pengembangan adalah gambar yang dimodifikasi dengan kreativitas atau imajinasi."
    },
    {
        q: "Teknik menggambar menggunakan cat air dikenal sebagai teknik ………",
        a: ["Teknik blok", "Teknik arsir", "Teknik campuran", "Teknik aquarel", "Teknik perspektif"],
        correct: 3,
        pembahasan: "Teknik aquarel menggunakan cat air dengan efek transparan."
    }
];

