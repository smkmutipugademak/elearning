let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
  {
    q: "Pernyataan yang tepat mengenai teknik menggambar blok adalah ....",
    a: [
      "Menggambar menggunakan garis tebal",
      "Menggambar objek dengan mengisi bagian tertentu menggunakan warna atau bayangan",
      "Menggambar objek dengan pola titik-titik",
      "Menggambar menggunakan pensil berwarna",
      "Menggambar dengan teknik linier"
    ],
    correct: 1,
    pembahasan: "Teknik blok adalah teknik menggambar dengan mengisi bagian tertentu menggunakan warna, bayangan, atau area gelap."
  },
  {
    q: "Tujuan utama dari menggambar ilustrasi adalah ....",
    a: [
      "Menghias dokumen tanpa makna",
      "Menyampaikan pesan melalui gambar yang relevan",
      "Membuat gambar abstrak",
      "Menggunakan warna cerah",
      "Membuat gambar dekoratif"
    ],
    correct: 1,
    pembahasan: "Ilustrasi digunakan untuk menyampaikan pesan visual yang mendukung isi."
  },
  {
    q: "Teknik menggambar linier menggunakan ....",
    a: [
      "Garis lurus dan melengkung",
      "Titik-titik kecil",
      "Garis tebal yang menutupi objek",
      "Campuran warna untuk dimensi",
      "Bentuk geometris"
    ],
    correct: 0,
    pembahasan: "Teknik linier menggunakan garis lurus dan lengkung tanpa bayangan."
  },
  {
    q: "Peran warna dalam ilustrasi adalah ....",
    a: [
      "Membuat gambar lebih rumit",
      "Menambah kedalaman dan emosi",
      "Mengurangi kompleksitas",
      "Mengaburkan detail",
      "Menjadikannya abstrak"
    ],
    correct: 1,
    pembahasan: "Warna memberikan kedalaman, emosi, dan daya tarik visual."
  },
  {
    q: "Alat utama dalam teknik pointilisme adalah ....",
    a: [
      "Pensil",
      "Kuas",
      "Titik-titik kecil",
      "Garis lurus",
      "Gumpalan cat"
    ],
    correct: 2,
    pembahasan: "Pointilisme menggunakan titik-titik kecil untuk menghasilkan nilai dan tekstur."
  },
  {
    q: "Jenis pensil yang paling sering digunakan untuk menghasilkan garis tebal dalam ilustrasi adalah ....",
    a: [
      "2B",
      "H",
      "HB",
      "6B",
      "3H"
    ],
    correct: 3,
    pembahasan: "Pensil 6B paling lembut sehingga menghasilkan garis gelap dan tebal."
  },
  {
    q: "Prinsip keseimbangan dalam desain grafis adalah ....",
    a: [
      "Semua elemen sama besar",
      "Penempatan elemen merata untuk harmoni visual",
      "Dominasi satu elemen",
      "Warna gelap di semua sisi",
      "Menggunakan pola kompleks"
    ],
    correct: 1,
    pembahasan: "Keseimbangan menciptakan harmoni visual."
  },
  {
    q: "Jenis kertas yang cocok untuk ilustrasi pensil adalah ....",
    a: [
      "Kertas glossy",
      "Kertas bertekstur kasar",
      "Kertas linen",
      "Kertas transparan",
      "Kertas bermotif"
    ],
    correct: 1,
    pembahasan: "Kertas tekstur kasar menangkap detail goresan pensil."
  },
  {
    q: "Kelebihan teknik menggambar dengan kuas adalah ....",
    a: [
      "Memberikan detail tinggi",
      "Menghasilkan efek warna lembut",
      "Tidak memerlukan cat",
      "Garis lebih rapi dibanding pensil",
      "Menghasilkan pola geometris"
    ],
    correct: 1,
    pembahasan: "Teknik kuas menghasilkan warna lembut dan menyebar."
  },
  {
    q: "Unity (kesatuan) dalam desain grafis adalah ....",
    a: [
      "Konsistensi dan keterpaduan elemen",
      "Dominasi elemen",
      "Penekanan pada satu bagian",
      "Kontras warna",
      "Perbedaan ukuran"
    ],
    correct: 0,
    pembahasan: "Unity menciptakan desain yang menyatu dan harmonis."
  },
  {
    q: "Fungsi utama poster adalah ....",
    a: [
      "Hiasan ruangan",
      "Menyampaikan informasi secara visual kepada masyarakat",
      "Media edukasi tertentu",
      "Penghias dinding publik",
      "Media komunikasi formal"
    ],
    correct: 1,
    pembahasan: "Poster menyampaikan informasi dan pesan secara visual."
  },
  {
    q: "Ciri utama poster yang efektif adalah ....",
    a: [
      "Menggunakan banyak teks",
      "Ilustrasi penuh warna tanpa teks",
      "Kombinasi warna dan teks yang menarik",
      "Pesan tersembunyi yang membingungkan",
      "Fokus pada gambar saja"
    ],
    correct: 2,
    pembahasan: "Poster efektif menggabungkan teks jelas dan warna menarik."
  },
  {
    q: "Tujuan utama poster iklan adalah ....",
    a: [
      "Meningkatkan citra perusahaan",
      "Menghibur audiens",
      "Mempromosikan produk atau jasa",
      "Memberikan informasi sejarah",
      "Media diskusi kelompok"
    ],
    correct: 2,
    pembahasan: "Poster iklan bertujuan mempromosikan produk atau jasa."
  },
  {
    q: "Perbedaan utama poster dan komik dari segi fungsi adalah ....",
    a: [
      "Poster untuk dekorasi, komik untuk edukasi",
      "Poster menyampaikan pesan langsung, komik menggunakan cerita",
      "Poster penuh teks, komik tanpa teks",
      "Poster untuk seni, komik untuk hiburan",
      "Tidak ada perbedaan"
    ],
    correct: 1,
    pembahasan: "Poster memberi pesan langsung, komik menggunakan alur cerita."
  },
  {
    q: "Desain warna pada poster penting karena ....",
    a: [
      "Agar terlihat seperti karya seni",
      "Menciptakan suasana sesuai pesan",
      "Agar biaya cetak mahal",
      "Menyamarkan teks",
      "Opsional dan tidak berpengaruh"
    ],
    correct: 1,
    pembahasan: "Warna menciptakan suasana dan menarik perhatian."
  },
  {
    q: "Komik strip adalah ....",
    a: [
      "Komik cerita panjang",
      "Komik pendek dengan beberapa panel",
      "Komik tanpa teks",
      "Komik digital interaktif",
      "Komik untuk kampanye sosial"
    ],
    correct: 1,
    pembahasan: "Komik strip adalah komik pendek berisi beberapa panel."
  },
  {
    q: "Tujuan utama logo dalam desain komunikasi visual adalah ....",
    a: [
      "Mengganti semua teks",
      "Identitas visual produk atau perusahaan",
      "Dekorasi tambahan",
      "Membuat desain lebih formal",
      "Pengganti gambar utama"
    ],
    correct: 1,
    pembahasan: "Logo berfungsi sebagai identitas visual."
  },
  {
    q: "Hal yang harus diperhatikan dalam memilih jenis huruf untuk poster adalah ....",
    a: [
      "Gunakan huruf rumit agar elegan",
      "Huruf harus sesuai tema dan mudah dibaca",
      "Gunakan semua jenis huruf",
      "Hindari warna pada huruf",
      "Gunakan huruf kecil agar hemat ruang"
    ],
    correct: 1,
    pembahasan: "Huruf harus jelas, mudah dibaca, dan sesuai tema poster."
  },
  {
    q: "Fungsi utama media cetak seperti poster dalam promosi produk adalah ....",
    a: [
      "Menghibur dengan cerita visual",
      "Memberikan detail lengkap",
      "Menarik perhatian dengan visual untuk menyampaikan promosi",
      "Mengembangkan inovasi produk",
      "Membatasi komunikasi"
    ],
    correct: 2,
    pembahasan: "Poster menarik perhatian audiens untuk menyampaikan pesan promosi."
  },
  {
    q: "Kelebihan utama iklan media cetak seperti booklet dibanding media digital adalah ....",
    a: [
      "Lebih murah distribusi",
      "Mencakup audiens luas dalam waktu singkat",
      "Meningkatkan kepercayaan dengan bentuk fisik",
      "Pesan lebih ringkas",
      "Isi dapat berubah cepat"
    ],
    correct: 2,
    pembahasan: "Booklet bersifat fisik sehingga menambah rasa percaya dan eksklusif."
  }
];
