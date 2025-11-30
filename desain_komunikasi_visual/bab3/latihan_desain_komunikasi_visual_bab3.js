let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
  {
    q: "Tujuan utama dari konsep industri hijau adalah ....",
    a: [
      "Meningkatkan produktivitas perusahaan",
      "Meningkatkan efisiensi dan daya saing industri",
      "Meminimalkan limbah tanpa memengaruhi produksi",
      "Memaksimalkan keuntungan dengan teknologi lama",
      "Meningkatkan angka ekspor produk lokal"
    ],
    correct: 1,
    pembahasan: "Industri hijau bertujuan memanfaatkan proses produksi secara efisien dan berkelanjutan."
  },
  {
    q: "Langkah awal dalam perancangan desain komunikasi visual adalah ....",
    a: [
      "Sintesis data",
      "Penetapan strategi media",
      "Identifikasi fakta",
      "Pengelolaan anggaran",
      "Penyusunan laporan"
    ],
    correct: 2,
    pembahasan: "Identifikasi fakta merupakan langkah awal untuk memahami permasalahan."
  },
  {
    q: "Pendekatan AIDA dalam komunikasi visual terdiri atas ....",
    a: [
      "Attention, Interest, Decision, Action",
      "Attention, Interest, Desire, Action",
      "Attention, Innovation, Design, Action",
      "Attention, Initiative, Demand, Action",
      "Attention, Information, Design, Achievement"
    ],
    correct: 1,
    pembahasan: "AIDA terdiri dari Attention, Interest, Desire, Action."
  },
  {
    q: "Peran utama desain komunikasi visual dalam Revolusi Industri 4.0 adalah ....",
    a: [
      "Membuat desain dengan teknologi lama",
      "Mengurangi biaya produksi melalui inovasi",
      "Membantu perusahaan bersaing di dunia digital",
      "Meningkatkan jumlah produk fisik",
      "Mengganti seluruh proses manual"
    ],
    correct: 2,
    pembahasan: "DKV membantu perusahaan bersaing melalui digitalisasi."
  },
  {
    q: "Keunggulan teknologi 3D printing dalam desain komunikasi visual adalah ....",
    a: [
      "Mengurangi biaya produksi manual",
      "Menghasilkan desain dua dimensi",
      "Mempermudah produksi dengan bahan terbatas",
      "Membuat prototipe cepat dengan detail tinggi",
      "Menghilangkan kebutuhan alat lain"
    ],
    correct: 3,
    pembahasan: "3D printing mempermudah pembuatan prototipe secara cepat."
  },
  {
    q: "Strategi media dalam perancangan komunikasi visual mencakup ....",
    a: [
      "Penggunaan software canggih",
      "Penjadwalan dan pemilihan media",
      "Evaluasi desain berkala",
      "Penyusunan laporan keuangan",
      "Pengembangan aplikasi"
    ],
    correct: 1,
    pembahasan: "Strategi media menentukan media dan jadwal tayang."
  },
  {
    q: "Motion grafis merupakan ....",
    a: [
      "Desain animasi bergerak untuk menyampaikan pesan",
      "Desain statis dengan efek visual",
      "Desain audio",
      "Desain teks tanpa animasi",
      "Desain grafis berbasis AI"
    ],
    correct: 0,
    pembahasan: "Motion grafis adalah desain animasi bergerak."
  },
  {
    q: "Konsep 'What to say' dalam desain komunikasi visual mencakup ....",
    a: [
      "Usia dan lokasi",
      "Pesan dan media",
      "Pesan dan tujuan",
      "Media dan platform",
      "Lokasi dan sasaran"
    ],
    correct: 2,
    pembahasan: "'What to say' berfokus pada pesan dan tujuan."
  },
  {
    q: "Tujuan analisis SWOT dalam perancangan desain adalah ....",
    a: [
      "Mengidentifikasi target audiens",
      "Menentukan kekuatan, kelemahan, peluang, ancaman",
      "Menentukan anggaran media",
      "Mengembangkan desain teknologi",
      "Mengelola waktu proyek"
    ],
    correct: 1,
    pembahasan: "SWOT mengevaluasi faktor internal & eksternal."
  },
  {
    q: "Konsep industri hijau merupakan ....",
    a: [
      "Penggunaan teknologi modern",
      "Efisiensi tanpa peduli lingkungan",
      "Industri berkelanjutan dengan efisiensi sumber daya",
      "Pengurangan biaya produksi",
      "Inovasi material baru"
    ],
    correct: 2,
    pembahasan: "Industri hijau fokus pada keberlanjutan."
  },
  {
    q: "A-A Procedure dalam komunikasi visual merupakan ....",
    a: [
      "Attention, Action",
      "Attention, Analysis",
      "Action, Activation",
      "Attention, Action, Application",
      "Attention, Interest, Desire, Action"
    ],
    correct: 0,
    pembahasan: "A-A Procedure terdiri dari Attention dan Action."
  },
  {
    q: "Tujuan utama desain komunikasi visual adalah ....",
    a: [
      "Menghasilkan produk murah",
      "Membuat karya seni",
      "Menyampaikan informasi secara visual",
      "Menargetkan audiens spesifik",
      "Meningkatkan estetika lingkungan"
    ],
    correct: 2,
    pembahasan: "DKV menyampaikan pesan melalui visual."
  },
  {
    q: "Prinsip utama proses produksi industri hijau adalah ....",
    a: [
      "Penggunaan bahan sintetis",
      "Teknologi 3D tanpa batas",
      "Reduce, Reuse, Recycle",
      "Biaya rendah efisiensi tinggi",
      "Optimisasi pencetakan"
    ],
    correct: 2,
    pembahasan: "RRR adalah prinsip dasar industri hijau."
  },
  {
    q: "Yang dimaksud dengan program media adalah ....",
    a: [
      "Penjadwalan dan durasi media",
      "Membuat konten video pendek",
      "Membuat anggaran media",
      "Analisis data media",
      "Membangun platform media"
    ],
    correct: 0,
    pembahasan: "Program media mengatur waktu tayang dan durasi."
  },
  {
    q: "Revolusi Industri 4.0 menekankan penggunaan teknologi untuk ....",
    a: [
      "Menghapus desain manual",
      "Mengembangkan seni tradisional",
      "Menciptakan produk berbasis IoT",
      "Menyederhanakan produksi grafis",
      "Mengurangi tenaga kerja"
    ],
    correct: 2,
    pembahasan: "IoT adalah ciri utama Industri 4.0."
  },
  {
    q: "Konsep industri hijau merupakan ....",
    a: [
      "Industri berbasis teknologi komputer",
      "Industri yang mengutamakan efisiensi dan keberlanjutan",
      "Produksi material non-biodegradable",
      "Industri berbasis energi fosil",
      "Industri yang membatasi ekspor"
    ],
    correct: 1,
    pembahasan: "Konsep industri hijau menekankan keberlanjutan."
  },
  {
    q: "Peran penting media digital dalam komunikasi visual adalah ....",
    a: [
      "Meningkatkan estetika media cetak",
      "Alternatif media konvensional",
      "Membantu audiens memahami konten lebih cepat",
      "Menggantikan seluruh media",
      "Mengurangi kebutuhan tim kreatif"
    ],
    correct: 2,
    pembahasan: "Media digital mempercepat pemahaman pesan."
  },
  {
    q: "Perbedaan utama DKV era digital dibandingkan sebelumnya adalah ....",
    a: [
      "Fokus pada seni lukis",
      "Biaya produksi murah",
      "Pemanfaatan teknologi digital",
      "Ketergantungan pada cetak",
      "Digunakan hanya untuk iklan"
    ],
    correct: 2,
    pembahasan: "Era digital menggunakan teknologi interaktif."
  },
  {
    q: "Tujuan anggaran belanja media adalah ....",
    a: [
      "Menentukan jumlah audiens",
      "Mengatur waktu produksi",
      "Menghitung biaya penempatan dan sewa ruang",
      "Menjadwalkan peluncuran produk",
      "Membuat software media"
    ],
    correct: 2,
    pembahasan: "Anggaran media mencakup sewa ruang media."
  },
  {
    q: "Desain publikasi mencakup ....",
    a: [
      "Desain web dan aplikasi",
      "Produksi katalog, brosur, poster",
      "Desain khusus aplikasi mobile",
      "Pengembangan logo",
      "Desain animasi"
    ],
    correct: 1,
    pembahasan: "Desain publikasi fokus pada media cetak promosi."
  },
  {
    q: "User Interface Design (UI) merupakan ....",
    a: [
      "Desain logo digital",
      "Desain motion grafis",
      "Tampilan dan interaksi aplikasi digital",
      "Desain publikasi cetak",
      "Teknik edit gambar"
    ],
    correct: 2,
    pembahasan: "UI fokus pada tampilan dan interaksi."
  },
  {
    q: "Siklus industri hijau dimulai dari tahap ....",
    a: [
      "Pengolahan limbah",
      "Produksi bahan mentah",
      "Distribusi produk",
      "Pengembangan sistem IoT",
      "Daur ulang material"
    ],
    correct: 1,
    pembahasan: "Tahap awal industri hijau adalah produksi bahan mentah."
  },
  {
    q: "Keunggulan DKV di era Industri 4.0 adalah ....",
    a: [
      "Proses produksi rumit",
      "Penggunaan bahan cetak meningkat",
      "Kolaborasi dengan teknologi interaktif",
      "Tidak memerlukan media planning",
      "Fokus animasi saja"
    ],
    correct: 2,
    pembahasan: "DKV era 4.0 memanfaatkan teknologi untuk interaktivitas."
  },
  {
    q: "Tujuan sertifikasi industri hijau adalah ....",
    a: [
      "Menurunkan biaya produksi",
      "Memastikan kepatuhan standar lingkungan",
      "Meningkatkan ekspor",
      "Mengurangi waktu produksi",
      "Membatasi teknologi"
    ],
    correct: 1,
    pembahasan: "Sertifikasi memastikan kepatuhan standar lingkungan."
  },
  {
    q: "Peran utama motion graphics dalam desain grafis adalah ....",
    a: [
      "Membuat efek suara",
      "Menambahkan gerakan pada desain grafis",
      "Mengurangi kebutuhan ilustrasi",
      "Membuat gambar hitam putih",
      "Memperbanyak durasi video"
    ],
    correct: 1,
    pembahasan: "Motion graphics memberikan animasi pada visual."
  },
  {
    q: "Desain grafis berbasis digital memanfaatkan teknologi untuk ....",
    a: [
      "Mengurangi pengeluaran",
      "Meningkatkan interaktivitas desain",
      "Menggantikan desainer",
      "Fokus pada seni tradisional",
      "Membuat desain lebih kompleks"
    ],
    correct: 1,
    pembahasan: "Desain digital membuat visual lebih interaktif."
  },
  {
    q: "Konsep Reduce, Reuse, Recycle merupakan bagian dari ....",
    a: [
      "Strategi digitalisasi",
      "Desain 3D",
      "Prinsip industri hijau",
      "Fokus estetika produk",
      "Sertifikasi media"
    ],
    correct: 2,
    pembahasan: "RRR adalah prinsip keberlanjutan."
  },
  {
    q: "Environmental Graphic Design merupakan ....",
    a: [
      "Desain untuk aplikasi smartphone",
      "Desain animasi untuk video",
      "Desain grafis untuk lingkungan sekitar",
      "Desain ilustrasi cetak",
      "Desain logo"
    ],
    correct: 2,
    pembahasan: "EGD fokus pada desain untuk ruang dan lingkungan."
  },
  {
    q: "Faktor kunci keberhasilan perencanaan media adalah ....",
    a: [
      "Kreativitas tanpa batas",
      "Efisiensi biaya dan jangkauan target",
      "Penggunaan bahan cetak",
      "Fokus konten animasi",
      "Penghapusan durasi tertentu"
    ],
    correct: 1,
    pembahasan: "Perencanaan media bergantung pada efisiensi biaya dan jangkauan."
  },
  {
    q: "Manfaat utama teknologi IoT dalam desain grafis adalah ....",
    a: [
      "Menghapus desain manual",
      "Membantu kolaborasi lintas platform",
      "Mengurangi waktu produksi",
      "Fokus aplikasi tradisional",
      "Menambah efek suara"
    ],
    correct: 1,
    pembahasan: "IoT memungkinkan kolaborasi real-time."
  }
];
