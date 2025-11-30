let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Sketsa merupakan rancangan awal berupa gambar garis besar yang digunakan untuk ………",
        a: [
            "Gambar yang detail dan selesai",
            "Rancangan awal berupa gambar garis besar",
            "Gambar digital dengan warna lengkap",
            "Ilustrasi tiga dimensi",
            "Gambar yang dicetak langsung"
        ],
        correct: 1,
        pembahasan: "Sketsa adalah gambar kasar berupa garis besar atau rancangan awal dari suatu gambar yang belum selesai."
    },
    {
        q: "Unsur utama yang digunakan dalam pembuatan sketsa terdiri dari ………",
        a: [
            "Warna dan bentuk",
            "Garis dan bidang",
            "Perspektif dan pencahayaan",
            "Dimensi dan komposisi",
            "Proporsi dan tekstur"
        ],
        correct: 1,
        pembahasan: "Garis dan bidang adalah unsur utama yang membentuk rancangan awal dalam sketsa."
    },
    {
        q: "Tujuan utama membuat sketsa sebelum menggambar atau melukis adalah untuk ………",
        a: [
            "Mempercepat proses menggambar",
            "Memberikan struktur awal dan meminimalkan kesalahan",
            "Menentukan kombinasi warna",
            "Menambahkan elemen estetis",
            "Membuat gambar langsung jadi"
        ],
        correct: 1,
        pembahasan: "Sketsa memberikan struktur awal dan meminimalkan kesalahan saat menggambar."
    },
    {
        q: "Jenis sketsa yang menggunakan garis besar secara cepat untuk menangkap ide disebut ………",
        a: [
            "Sketsa detail",
            "Sketsa studi",
            "Sketsa cepat",
            "Sketsa perspektif",
            "Sketsa penuh"
        ],
        correct: 2,
        pembahasan: "Sketsa cepat dibuat dengan garis besar sederhana untuk menangkap ide dengan cepat."
    },
    {
        q: "Fungsi sketsa antara lain adalah untuk ………",
        a: [
            "Menambah warna pada gambar",
            "Membantu pelukis memahami tema gambar",
            "Membuat gambar lebih estetis",
            "Menambahkan elemen tekstur",
            "Menghapus elemen tidak perlu"
        ],
        correct: 1,
        pembahasan: "Sketsa membantu memberikan gambaran awal mengenai tema gambar kepada pelukis."
    },
    {
        q: "Ilustrasi merupakan gambar yang digunakan untuk ………",
        a: [
            "Gambar detail untuk mencetak",
            "Gambar yang menjelaskan atau menerangkan suatu konsep",
            "Sketsa awal yang belum selesai",
            "Gambar tiga dimensi",
            "Gambar berbasis warna"
        ],
        correct: 1,
        pembahasan: "Ilustrasi adalah gambar yang bertujuan menjelaskan atau menerangkan suatu konsep atau cerita."
    },
    {
        q: "Istilah ilustrasi berasal dari bahasa ………",
        a: ["Yunani", "Latin", "Inggris", "Jerman", "Perancis"],
        correct: 1,
        pembahasan: "Istilah ilustrasi berasal dari bahasa Latin 'illustrare' yang berarti menjelaskan."
    },
    {
        q: "Fungsi utama ilustrasi dalam media visual adalah sebagai ………",
        a: [
            "Elemen dekoratif saja",
            "Penjelas teks atau cerita",
            "Gambar utama dalam desain",
            "Penambah warna dalam desain",
            "Elemen tiga dimensi"
        ],
        correct: 1,
        pembahasan: "Fungsi utama ilustrasi adalah menjelaskan atau memberikan gambaran visual terhadap teks."
    },
    {
        q: "Menggambar ilustrasi manusia membutuhkan pemahaman tentang ………",
        a: [
            "Proporsi dan anatomi tubuh",
            "Komposisi warna",
            "Perspektif tiga dimensi",
            "Gaya dekoratif",
            "Pola geometris"
        ],
        correct: 0,
        pembahasan: "Menggambar ilustrasi manusia memerlukan pemahaman proporsi dan anatomi agar realistis."
    },
    {
        q: "Tujuan utama menggambar ilustrasi binatang adalah untuk ………",
        a: [
            "Menonjolkan keindahan bentuk",
            "Memberikan gambaran tentang proporsi dan anatomi binatang",
            "Menghias teks",
            "Menambah estetika desain",
            "Menyampaikan pesan abstrak"
        ],
        correct: 1,
        pembahasan: "Ilustrasi binatang bertujuan menjelaskan proporsi dan anatomi binatang secara visual."
    },
    {
        q: "Unsur utama dalam gambar ilustrasi terdiri dari ………",
        a: [
            "Dimensi dan bentuk",
            "Garis, warna, dan bidang",
            "Tekstur dan proporsi",
            "Perspektif dan anatomi",
            "Komposisi dan cahaya"
        ],
        correct: 1,
        pembahasan: "Garis, warna, dan bidang adalah unsur dasar untuk membentuk ilustrasi."
    },
    {
        q: "Langkah pertama dalam menggambar ilustrasi adalah menentukan ………",
        a: [
            "Pewarnaan",
            "Sketsa awal",
            "Penentuan gagasan atau ide",
            "Mengatur perspektif",
            "Menambahkan detail"
        ],
        correct: 2,
        pembahasan: "Langkah pertama adalah menentukan gagasan atau ide dari ilustrasi."
    },
    {
        q: "Tahap pewarnaan dalam ilustrasi merupakan proses untuk ………",
        a: [
            "Membuat garis besar gambar",
            "Menambahkan warna sesuai tema dan gaya",
            "Mengatur komposisi bidang",
            "Memberikan efek tiga dimensi",
            "Memperjelas sketsa awal"
        ],
        correct: 1,
        pembahasan: "Pewarnaan adalah proses menambahkan warna sesuai tema dan gaya gambar."
    },
    {
        q: "Media yang umum digunakan untuk membuat sketsa adalah ………",
        a: [
            "Tablet grafis",
            "Kertas dan pensil",
            "Komputer dan printer",
            "Kain dan cat minyak",
            "Kamera digital"
        ],
        correct: 1,
        pembahasan: "Media paling umum untuk sketsa adalah kertas dan pensil."
    },
    {
        q: "Tujuan utama membuat kerangka gambar dalam sketsa adalah untuk ………",
        a: [
            "Menambahkan elemen estetis",
            "Membuat gambar langsung selesai",
            "Memberikan struktur dasar untuk memudahkan proses berikutnya",
            "Menentukan kombinasi warna",
            "Menghilangkan bagian tidak perlu"
        ],
        correct: 2,
        pembahasan: "Kerangka gambar memberikan struktur awal agar proses menggambar lebih mudah."
    },
    {
        q: "Ilustrasi sering digunakan sebagai ………",
        a: [
            "Elemen utama dalam desain",
            "Penjelas visual dalam buku atau majalah",
            "Penghias tambahan dalam poster",
            "Elemen dekoratif murni",
            "Gambar tanpa tujuan tertentu"
        ],
        correct: 1,
        pembahasan: "Ilustrasi sering digunakan sebagai pelengkap dan penjelas visual dalam buku atau majalah."
    },
    {
        q: "Proporsi dalam gambar manusia berarti ………",
        a: [
            "Penyesuaian ukuran bagian tubuh sesuai keseluruhan",
            "Penambahan detail pada tubuh",
            "Pengaturan warna gambar",
            "Penentuan gaya gambar",
            "Penyesuaian perspektif"
        ],
        correct: 0,
        pembahasan: "Proporsi adalah perbandingan ukuran bagian tubuh terhadap keseluruhan."
    },
    {
        q: "Menggambar ilustrasi tumbuhan dilakukan dengan cara ………",
        a: [
            "Menggambar detail setiap daun",
            "Membuat kesan bentuk secara sederhana atau detail",
            "Menambahkan efek warna kompleks",
            "Membuat pola geometris",
            "Menambah elemen 3D"
        ],
        correct: 1,
        pembahasan: "Ilustrasi tumbuhan dapat digambar sederhana atau sangat detail sesuai kebutuhan."
    },
    {
        q: "Menggambar benda dalam ilustrasi bertujuan untuk ………",
        a: [
            "Menambah dekorasi",
            "Melengkapi cerita atau pesan visual",
            "Membuat gambar lebih realistis",
            "Menambah dimensi",
            "Menonjolkan tekstur"
        ],
        correct: 1,
        pembahasan: "Menggambar benda bertujuan melengkapi cerita atau pesan visual."
    },
    {
        q: "Langkah terakhir dalam menggambar ilustrasi adalah tahap ………",
        a: [
            "Sketsa awal",
            "Pewarnaan",
            "Penentuan tema",
            "Penyesuaian anatomi",
            "Penambahan efek digital"
        ],
        correct: 1,
        pembahasan: "Langkah terakhir adalah pewarnaan untuk menyelesaikan gambar."
    }
];
