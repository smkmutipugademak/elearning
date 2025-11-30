let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
  {
    q: "Tahap 'persiapan' dalam proses kreatif adalah ....",
    a: [
      "Menganalisis ide yang sudah ada",
      "Menghimpun data relevan dan mengidentifikasi masalah",
      "Mencoba berbagai solusi baru",
      "Menyusun laporan hasil akhir",
      "Melatih kemampuan berpikir kritis"
    ],
    correct: 1,
    pembahasan: "Tahap persiapan adalah langkah awal untuk menghimpun data relevan dan mengenali masalah."
  },
  {
    q: "Ciri utama orang yang berpikir kreatif menurut aspek kognitif adalah ....",
    a: [
      "Berani mengambil risiko",
      "Memiliki keinginan tahu yang besar",
      "Berpikir cepat dan fleksibel",
      "Terbuka terhadap kritik",
      "Memiliki kepemimpinan yang baik"
    ],
    correct: 2,
    pembahasan: "Aspek kognitif mencakup kemampuan berpikir cepat, fleksibel, dan orisinal."
  },
  {
    q: "Faktor yang termasuk pendukung kreativitas adalah ....",
    a: [
      "Lingkungan yang mendukung",
      "Kurangnya waktu",
      "Kritik berlebihan",
      "Konflik internal",
      "Kesulitan finansial"
    ],
    correct: 0,
    pembahasan: "Lingkungan mendukung memberi ruang untuk eksplorasi ide."
  },
  {
    q: "Indikator berpikir kreatif yang menunjukkan kemampuan menghasilkan banyak ide adalah ....",
    a: [
      "Keluwesan berpikir",
      "Kelancaran berpikir",
      "Elaborasi",
      "Orisinalitas",
      "Motivasi intrinsik"
    ],
    correct: 1,
    pembahasan: "Kelancaran berpikir adalah kemampuan menghasilkan banyak ide."
  },
  {
    q: "Hambatan kreativitas dari segi sosiologis adalah ....",
    a: [
      "Gangguan biologis",
      "Pengaruh lingkungan sosial yang negatif",
      "Kurangnya waktu eksplorasi",
      "Keterbatasan pengetahuan",
      "Kurangnya sarana teknologi"
    ],
    correct: 1,
    pembahasan: "Faktor sosiologis berasal dari lingkungan yang tidak mendukung kreativitas."
  },
  {
    q: "Konsep kreativitas diperlukan dalam industri kreatif karena ....",
    a: [
      "Untuk menghasilkan inovasi baru",
      "Untuk menciptakan konflik ide",
      "Untuk mengurangi persaingan",
      "Untuk menghindari risiko",
      "Untuk membatasi ide"
    ],
    correct: 0,
    pembahasan: "Kreativitas dibutuhkan untuk melahirkan inovasi."
  },
  {
    q: "Manfaat brainstorming dalam industri kreatif adalah ....",
    a: [
      "Menyusun laporan akhir",
      "Mengidentifikasi target audiens",
      "Mengembangkan ide secara kelompok",
      "Melakukan penelitian mendalam",
      "Membatasi ide"
    ],
    correct: 2,
    pembahasan: "Brainstorming menghasilkan banyak ide melalui diskusi kelompok."
  },
  {
    q: "Keluwesan berpikir adalah kemampuan ....",
    a: [
      "Menghasilkan banyak ide",
      "Memodifikasi ide untuk berbagai solusi",
      "Menjelaskan ide secara detail",
      "Mengingat data dengan cepat",
      "Beradaptasi dalam tekanan"
    ],
    correct: 1,
    pembahasan: "Keluwesan berpikir berarti kemampuan memodifikasi gagasan."
  },
  {
    q: "Langkah pertama dalam membuat sketsa desain adalah ....",
    a: [
      "Menentukan referensi visual",
      "Melakukan brainstorming",
      "Membuat laporan desain",
      "Menganalisis target pasar",
      "Menyelesaikan produk akhir"
    ],
    correct: 0,
    pembahasan: "Referensi visual menjadi dasar gaya dan arah desain."
  },
  {
    q: "Tujuan utama dari desainer grafis adalah ....",
    a: [
      "Menghasilkan keuntungan besar",
      "Menyelesaikan proyek cepat",
      "Mengkomunikasikan pesan melalui visual",
      "Menggunakan teknologi terbaru",
      "Mengembangkan pasar global"
    ],
    correct: 2,
    pembahasan: "Tugas utama desainer grafis adalah menyampaikan pesan visual."
  },
  {
    q: "Tahap terakhir dalam proses berpikir kreatif adalah ....",
    a: [
      "Persiapan",
      "Pembuktian",
      "Inkubasi",
      "Elaborasi",
      "Pelaporan"
    ],
    correct: 1,
    pembahasan: "Pembuktian memastikan ide dapat diterapkan."
  },
  {
    q: "Kendala fisiologis dalam kreativitas berkaitan dengan ....",
    a: [
      "Konflik internal",
      "Pengaruh lingkungan sosial",
      "Kerusakan fungsi tubuh",
      "Kurangnya sarana teknologi",
      "Kelelahan emosional"
    ],
    correct: 2,
    pembahasan: "Gangguan fisik dapat menghambat kemampuan berpikir kreatif."
  },
  {
    q: "Elaborasi dalam kreativitas berarti ....",
    a: [
      "Membuat ide menjadi lebih rinci",
      "Menghasilkan banyak ide",
      "Membandingkan ide dengan referensi",
      "Mengadaptasi ide dari orang lain",
      "Menemukan solusi sederhana"
    ],
    correct: 0,
    pembahasan: "Elaborasi menambah detail pada ide."
  },
  {
    q: "Salah satu peran teknologi dalam DKV adalah ....",
    a: [
      "Menggantikan kreativitas manual",
      "Membantu produksi massal",
      "Menyediakan alat eksplorasi desain",
      "Membatasi akses pasar",
      "Mempercepat perancangan ide"
    ],
    correct: 2,
    pembahasan: "Teknologi membantu eksplorasi ide secara efisien."
  },
  {
    q: "Cara desainer memastikan pesan visual efektif adalah ....",
    a: [
      "Menyalin ide kompetitor",
      "Memahami audiens target",
      "Menggunakan teknologi terbaru",
      "Menyelesaikan proyek cepat",
      "Menggunakan warna mencolok"
    ],
    correct: 1,
    pembahasan: "Pemahaman audiens membantu mencocokkan pesan."
  },
  {
    q: "Brainstorming merupakan ....",
    a: [
      "Proses memproduksi ide mandiri",
      "Diskusi kelompok untuk menghasilkan ide",
      "Membuat laporan proyek",
      "Mengidentifikasi data audiens",
      "Membatasi ide"
    ],
    correct: 1,
    pembahasan: "Brainstorming adalah proses kolaboratif."
  },
  {
    q: "Hambatan psikologis dalam kreativitas adalah ....",
    a: [
      "Kritik konstruktif",
      "Kurangnya kepercayaan diri",
      "Kesempatan belajar luas",
      "Lingkungan mendukung",
      "Sarana eksplorasi terbatas"
    ],
    correct: 1,
    pembahasan: "Kurangnya kepercayaan diri menghambat kreativitas."
  },
  {
    q: "Inti dari berpikir kreatif adalah ....",
    a: [
      "Meniru ide dari orang lain",
      "Mengembangkan solusi unik",
      "Menghindari risiko",
      "Menggunakan metode tradisional",
      "Menyelesaikan pekerjaan cepat"
    ],
    correct: 1,
    pembahasan: "Berpikir kreatif menghasilkan solusi unik dan inovatif."
  },
  {
    q: "Fungsi utama desainer komunikasi visual adalah ....",
    a: [
      "Menghasilkan desain untuk kebutuhan komersial",
      "Menyampaikan pesan melalui media visual",
      "Mengikuti tren desain",
      "Meningkatkan nilai pasar",
      "Mengurangi biaya produksi"
    ],
    correct: 1,
    pembahasan: "Desainer visual bertugas menyampaikan pesan dengan media visual."
  },
  {
    q: "Indikator keluwesan berpikir adalah ....",
    a: [
      "Cepat menghasilkan ide",
      "Mampu memodifikasi solusi",
      "Memberikan detail pada ide",
      "Berani mengambil risiko",
      "Konsisten dengan satu gagasan"
    ],
    correct: 1,
    pembahasan: "Keluwesan adalah kemampuan memodifikasi ide."
  }
];
