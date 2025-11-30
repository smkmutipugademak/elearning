let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
  {
    q: "Pernyataan yang menjelaskan keselamatan kerja dalam konteks individu pekerja adalah ....",
    a: [
      "Proses bekerja dengan alat-alat canggih tanpa risiko",
      "Upaya menghindari kerugian pribadi saat bekerja",
      "Kondisi bekerja dengan memperhatikan kesehatan dan keamanan",
      "Cara bekerja tanpa menggunakan alat berat",
      "Prosedur kerja tanpa memikirkan standar keamanan"
    ],
    correct: 2,
    pembahasan: "Keselamatan kerja memastikan pekerja dalam kondisi aman dan sehat saat bekerja."
  },
  {
    q: "Dampak dari posisi duduk yang salah saat bekerja di depan komputer adalah ....",
    a: [
      "Produktivitas meningkat",
      "Risiko kesehatan seperti nyeri punggung dan leher",
      "Mempercepat penyelesaian pekerjaan",
      "Tidak ada efek apapun",
      "Lebih banyak waktu istirahat"
    ],
    correct: 1,
    pembahasan: "Posisi duduk buruk menyebabkan nyeri leher, punggung, dan gangguan postur."
  },
  {
    q: "Tujuan utama penerapan standar K3 di lingkungan kerja adalah ....",
    a: [
      "Memaksimalkan keuntungan perusahaan",
      "Menjamin keselamatan dan kesehatan pekerja",
      "Mengurangi jumlah pekerja",
      "Meningkatkan efisiensi tanpa memperhatikan risiko",
      "Membatasi ruang gerak pekerja"
    ],
    correct: 1,
    pembahasan: "K3 bertujuan melindungi pekerja dari berbagai risiko bahaya."
  },
  {
    q: "Langkah yang harus dilakukan untuk mengurangi risiko cedera mata saat bekerja dengan komputer adalah ....",
    a: [
      "Menggunakan kacamata hitam",
      "Memastikan posisi layar sejajar dengan pandangan mata",
      "Menggunakan layar komputer kecil",
      "Tidak mengatur pencahayaan",
      "Mematikan layar secara berkala"
    ],
    correct: 1,
    pembahasan: "Layar sejajar mata mengurangi ketegangan mata dan leher."
  },
  {
    q: "Ergonomi dalam lingkungan kerja merupakan ....",
    a: [
      "Proses meningkatkan produktivitas tanpa mempertimbangkan kesehatan",
      "Ilmu yang mempelajari hubungan antara pekerja, alat, dan lingkungan kerja",
      "Penggunaan alat berat di industri",
      "Desain produk yang mahal untuk pekerja",
      "Peningkatan jam kerja karyawan"
    ],
    correct: 1,
    pembahasan: "Ergonomi menciptakan lingkungan kerja yang aman dan nyaman."
  },
  {
    q: "Kebijakan jam kerja fleksibel adalah ....",
    a: [
      "Waktu kerja tanpa batas",
      "Jam kerja yang dapat diatur sesuai kebutuhan pekerja dan perusahaan",
      "Waktu kerja lebih panjang dari standar",
      "Jam kerja hanya mengikuti kemauan pekerja",
      "Penerapan jam kerja tanpa pengawasan"
    ],
    correct: 1,
    pembahasan: "Jam kerja fleksibel memberi keseimbangan antara produktivitas dan kesehatan."
  },
  {
    q: "Penyebab utama gangguan postur tubuh pekerja di depan komputer adalah ....",
    a: [
      "Posisi duduk terlalu tegak",
      "Duduk dalam posisi yang tidak ergonomis",
      "Tidak menggerakkan tubuh selama bekerja",
      "Tidak menggunakan kursi beroda",
      "Waktu kerja yang singkat"
    ],
    correct: 1,
    pembahasan: "Posisi duduk tidak ergonomis menyebabkan gangguan postur tubuh."
  },
  {
    q: "Penerapan K3 penting di perusahaan karena ....",
    a: [
      "Untuk menghindari denda hukum",
      "Untuk melindungi keselamatan pekerja dan memastikan operasional yang aman",
      "Untuk mengurangi jumlah pekerja",
      "Untuk meningkatkan beban kerja",
      "Untuk membatasi inovasi teknologi"
    ],
    correct: 1,
    pembahasan: "K3 menjaga keselamatan pekerja dan kelancaran operasional."
  },
  {
    q: "Langkah terbaik untuk mengurangi cedera akibat duduk terlalu lama saat bekerja adalah ....",
    a: [
      "Tidak menggunakan kursi",
      "Berdiri setiap 30 menit untuk peregangan",
      "Memperpanjang waktu kerja",
      "Menggunakan meja tanpa kursi",
      "Membatasi waktu istirahat"
    ],
    correct: 1,
    pembahasan: "Peregangan rutin meningkatkan sirkulasi darah dan mengurangi cedera."
  },
  {
    q: "Tujuan penerapan ergonomi di tempat kerja adalah ....",
    a: [
      "Mengurangi kebutuhan pekerja",
      "Meningkatkan efisiensi dan kenyamanan pekerja",
      "Membatasi waktu kerja",
      "Mengurangi penggunaan teknologi",
      "Menurunkan biaya produksi"
    ],
    correct: 1,
    pembahasan: "Ergonomi meningkatkan kenyamanan dan produktivitas."
  },
  {
    q: "Ancaman keselamatan kerja akibat fisik adalah ....",
    a: [
      "Cedera akibat bahan kimia",
      "Luka bakar akibat alat kerja",
      "Masalah kesehatan akibat stres",
      "Gangguan keamanan data",
      "Gangguan pernapasan akibat polusi"
    ],
    correct: 1,
    pembahasan: "Ancaman fisik meliputi cedera langsung dari mesin atau alat."
  },
  {
    q: "Tindakan untuk mengurangi risiko keselamatan kerja di laboratorium adalah ....",
    a: [
      "Memakai pakaian kasual",
      "Menggunakan peralatan pelindung diri (APD)",
      "Menjauh dari alat keselamatan",
      "Tidak memperhatikan panduan kerja",
      "Menggunakan bahan kimia tanpa panduan"
    ],
    correct: 1,
    pembahasan: "APD melindungi pekerja dari paparan dan cedera."
  },
  {
    q: "Tujuan utama pelatihan keselamatan kerja adalah ....",
    a: [
      "Mengurangi jumlah karyawan",
      "Meningkatkan kesadaran risiko dan tindakan pencegahan",
      "Mengurangi pengeluaran perusahaan",
      "Memastikan penggunaan alat berat",
      "Memperlambat operasional kerja"
    ],
    correct: 1,
    pembahasan: "Pelatihan meningkatkan pemahaman tentang risiko dan pencegahannya."
  },
  {
    q: "Cara mengurangi ancaman ergonomi saat bekerja di depan komputer adalah ....",
    a: [
      "Duduk di lantai tanpa meja",
      "Menggunakan kursi ergonomis",
      "Bekerja tanpa istirahat",
      "Memposisikan layar terlalu rendah",
      "Menggunakan meja tanpa kursi"
    ],
    correct: 1,
    pembahasan: "Kursi ergonomis menjaga postur tubuh tetap baik."
  },
  {
    q: "Fungsi utama K3 di lingkungan kerja adalah ....",
    a: [
      "Mengurangi biaya operasional",
      "Menjamin keselamatan pekerja dan efisiensi operasional",
      "Meningkatkan jam kerja karyawan",
      "Membatasi penggunaan alat berat",
      "Menurunkan produktivitas"
    ],
    correct: 1,
    pembahasan: "K3 meningkatkan keselamatan dan produktivitas."
  },
  {
    q: "Langkah pertama dalam menilai risiko keselamatan kerja adalah ....",
    a: [
      "Menyusun laporan kerja",
      "Mengidentifikasi potensi bahaya",
      "Membatasi akses pekerja",
      "Menghentikan semua kegiatan",
      "Mengurangi jumlah karyawan"
    ],
    correct: 1,
    pembahasan: "Identifikasi bahaya adalah tahap awal analisis risiko."
  },
  {
    q: "Pengendalian administratif dalam keselamatan kerja meliputi ....",
    a: [
      "Pelatihan pekerja dan aturan keselamatan",
      "Membatasi akses ke area kerja",
      "Menggunakan alat pelindung",
      "Mengurangi waktu istirahat",
      "Meningkatkan jumlah pekerja"
    ],
    correct: 0,
    pembahasan: "Pengendalian administratif mencakup pelatihan dan prosedur keselamatan."
  },
  {
    q: "Tindakan terbaik untuk mencegah ancaman kimia di tempat kerja adalah ....",
    a: [
      "Menggunakan bahan kimia tanpa panduan",
      "Menyimpan bahan kimia di tempat yang sesuai",
      "Tidak menggunakan sarung tangan",
      "Mengabaikan aturan penyimpanan",
      "Menggunakan bahan kimia tanpa pelatihan"
    ],
    correct: 1,
    pembahasan: "Penyimpanan bahan kimia harus mengikuti standar keamanan."
  },
  {
    q: "Bahaya biologis dalam keselamatan kerja adalah ....",
    a: [
      "Bahaya yang berasal dari virus, bakteri, atau jamur",
      "Cedera akibat alat berat",
      "Kerusakan perangkat elektronik",
      "Polusi udara di tempat kerja",
      "Stres akibat beban kerja"
    ],
    correct: 0,
    pembahasan: "Bahaya biologis adalah risiko dari mikroorganisme."
  },
  {
    q: "Tindakan yang harus dilakukan jika terjadi kecelakaan kerja adalah ....",
    a: [
      "Mengabaikan kecelakaan dan melanjutkan pekerjaan",
      "Memberi pertolongan pertama sesuai prosedur",
      "Menunggu supervisor tanpa bertindak",
      "Menyalahkan karyawan lain",
      "Menutup area kerja tanpa laporan"
    ],
    correct: 1,
    pembahasan: "Pertolongan pertama yang tepat mengurangi dampak cedera."
  }
];
