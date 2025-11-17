let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa tujuan utama integrasi antar aplikasi Microsoft Office?",
        a: [
            "Memisahkan data dalam format yang berbeda",
            "Menyederhanakan pengelolaan file terpisah",
            "Menggabungkan data untuk meningkatkan efisiensi kerja",
            "Meningkatkan keamanan dokumen",
            "Menghapus informasi yang tidak relevan"
        ],
        correct: 2,
        pembahasan: "Integrasi antar aplikasi bertujuan menyatukan data untuk mempermudah dan meningkatkan efisiensi kerja."
    },
    {
        q: "Apa langkah pertama dalam transfer data dari Excel ke Word?",
        a: [
            "Menyalin file secara manual",
            "Menggunakan fitur Paste Special",
            "Membuka file di kedua aplikasi",
            "Mengatur format di Excel terlebih dahulu",
            "Menggunakan fungsi Pivot Table"
        ],
        correct: 1,
        pembahasan: "Langkah pertama adalah menggunakan Paste Special untuk transfer data yang benar."
    },
    {
        q: "Fitur 'Paste Special' memungkinkan pengguna untuk:",
        a: [
            "Mengedit tabel langsung dari Excel di Word",
            "Mengonversi tabel menjadi gambar",
            "Menyisipkan data sebagai plaintext",
            "Mengubah data ke hyperlink",
            "Menghapus format asli data"
        ],
        correct: 0,
        pembahasan: "Paste Special memungkinkan objek Excel tetap bisa diedit di Word."
    },
    {
        q: "Transfer object secara linking berarti:",
        a: [
            "Data disalin permanen ke file baru",
            "Data dihubungkan ke file sumber",
            "Data diubah ke format berbeda",
            "Data disimpan otomatis di cloud",
            "Data hanya digunakan satu kali"
        ],
        correct: 1,
        pembahasan: "Linking menghubungkan data sehingga perubahan di file sumber ikut berubah."
    },
    {
        q: "Fungsi 'Create from File' pada Microsoft Office digunakan untuk:",
        a: [
            "Membuat dokumen baru",
            "Menghubungkan file eksternal",
            "Menghapus file yang tidak relevan",
            "Mengonversi file ke PDF",
            "Menyimpan file di folder lain"
        ],
        correct: 1,
        pembahasan: "'Create from File' digunakan untuk menyisipkan atau menghubungkan file eksternal."
    },
    {
        q: "Apa manfaat utama transfer data secara embedding?",
        a: [
            "Data terhubung dengan file sumber",
            "Data dapat dimodifikasi langsung di dokumen tujuan",
            "Data menjadi gambar",
            "Data terhapus dari file asli",
            "Data tidak dapat diedit"
        ],
        correct: 1,
        pembahasan: "Embedding memungkinkan data diedit langsung dari dokumen tujuan."
    },
    {
        q: "Apa yang dimaksud dengan fitur integrasi dalam aplikasi perkantoran?",
        a: [
            "Penggunaan fitur tambahan",
            "Penyatuan komponen aplikasi",
            "Pembuatan dokumen otomatis",
            "Pemisahan data",
            "Penyimpanan cloud"
        ],
        correct: 1,
        pembahasan: "Integrasi berarti penyatuan fitur atau data antar aplikasi."
    },
    {
        q: "Apa yang dimaksud dengan 'sharing database'?",
        a: [
            "Mengirimkan data otomatis",
            "Membaca data langsung dari satu database",
            "Mengirim dokumen via email",
            "Menyimpan data di folder bersama",
            "Menyalin data manual"
        ],
        correct: 1,
        pembahasan: "Sharing database memungkinkan aplikasi membaca data dari tabel yang sama."
    },
    {
        q: "Fungsi utama integrasi file transfer adalah:",
        a: [
            "Menyimpan data otomatis",
            "Menyusun data",
            "Menghubungkan data",
            "Memindahkan data antar aplikasi",
            "Menyisipkan hyperlink"
        ],
        correct: 3,
        pembahasan: "File transfer adalah proses manual memindahkan data antar aplikasi."
    },
    {
        q: "Langkah terakhir saat transfer tabel dari Excel ke Word dengan Paste Special adalah:",
        a: [
            "Klik tombol OK",
            "Memilih tabel di Excel",
            "Menyimpan dokumen Word",
            "Menghapus format tabel",
            "Membuat backup"
        ],
        correct: 0,
        pembahasan: "Langkah terakhir adalah mengonfirmasi dengan tombol OK."
    },
    {
        q: "Apa fungsi opsi 'Microsoft Excel Worksheet Object' di Paste Special?",
        a: [
            "Menampilkan tabel sebagai gambar",
            "Menyisipkan tabel yang dapat diedit",
            "Mengonversi tabel menjadi teks",
            "Menghapus format tabel",
            "Menghubungkan ke database"
        ],
        correct: 1,
        pembahasan: "Opsi ini memungkinkan tabel Excel tetap bisa diedit dalam Word."
    },
    {
        q: "Apa yang dimaksud dengan 'Integrasi Antar Aplikasi'?",
        a: [
            "Penggabungan fitur tambahan",
            "Penyatuan data untuk mendukung produktivitas",
            "Pemisahan dokumen",
            "Konversi data",
            "Pengamanan file"
        ],
        correct: 1,
        pembahasan: "Integrasi aplikasi bertujuan menyatukan data dan fitur untuk efisiensi kerja."
    },
    {
        q: "Apa yang terjadi jika data sumber diubah saat menggunakan linking?",
        a: [
            "Data tujuan tidak berubah",
            "File sumber terhapus",
            "Perubahan tercermin otomatis",
            "Format berubah menjadi teks",
            "Tidak ada perubahan"
        ],
        correct: 2,
        pembahasan: "Linking membuat data saling terhubung sehingga otomatis berubah."
    },
    {
        q: "Fungsi 'Preview Result' pada Mail Merge adalah:",
        a: [
            "Menampilkan hasil sebelum dikirim",
            "Menyimpan data sementara",
            "Menghapus data tidak relevan",
            "Menghubungkan data",
            "Membatalkan proses"
        ],
        correct: 0,
        pembahasan: "Preview Result digunakan untuk melihat hasil Mail Merge."
    },
    {
        q: "Perbedaan utama embedding dan linking adalah:",
        a: [
            "Embedding memperbarui otomatis",
            "Linking menyisipkan permanen",
            "Embedding tidak memerlukan koneksi ke file sumber",
            "Linking hanya untuk gambar",
            "Embedding menghapus file sumber"
        ],
        correct: 2,
        pembahasan: "Embedding bersifat independen dari file sumber."
    },
    {
        q: "Dalam Mail Merge, langkah pertama menghubungkan data adalah:",
        a: [
            "Membuka file tujuan",
            "Memilih file sumber data",
            "Menentukan format",
            "Menyimpan file",
            "Memeriksa validitas data"
        ],
        correct: 1,
        pembahasan: "Langkah pertama adalah memilih file sumber data."
    },
    {
        q: "Apa yang dimaksud dengan 'automatic table of contents' di Word?",
        a: [
            "Daftar isi manual",
            "Daftar isi berdasarkan heading",
            "Daftar isi tanpa hyperlink",
            "Daftar isi tidak dapat diedit",
            "Daftar isi dokumen singkat"
        ],
        correct: 1,
        pembahasan: "Table of contents otomatis dibuat berdasarkan heading."
    },
    {
        q: "Langkah terakhir membuat daftar isi otomatis adalah:",
        a: [
            "Menambah hyperlink",
            "Klik 'Insert Table of Contents'",
            "Simpan dokumen",
            "Menghapus heading",
            "Mengatur margin"
        ],
        correct: 1,
        pembahasan: "Daftar isi ditambahkan melalui Insert Table of Contents."
    },
    {
        q: "Fungsi fitur Hyperlink di Word adalah:",
        a: [
            "Menghubungkan dokumen ke file atau website lain",
            "Menyisipkan gambar",
            "Menyimpan dokumen online",
            "Mempercepat pencetakan",
            "Menghapus tautan"
        ],
        correct: 0,
        pembahasan: "Hyperlink menghubungkan dokumen dengan file atau web."
    },
    {
        q: "Keunggulan utama integrasi antar aplikasi Office adalah:",
        a: [
            "Menghapus kebutuhan penyimpanan",
            "Mengurangi waktu transfer data",
            "Mempercepat konversi format",
            "Meningkatkan akurasi manual",
            "Mengecilkan ukuran file"
        ],
        correct: 1,
        pembahasan: "Integrasi aplikasi mempercepat proses transfer data."
    },
    {
        q: "Apa yang dimaksud dengan 'File Transfer'?",
        a: [
            "Menghapus data sumber",
            "Mengirim data antar aplikasi",
            "Membuat salinan file",
            "Menyimpan otomatis ke cloud",
            "Mengedit file sumber"
        ],
        correct: 1,
        pembahasan: "File transfer adalah proses pengiriman data antar aplikasi."
    },
    {
        q: "Dalam integrasi aplikasi, mekanisme 'messaging' digunakan untuk:",
        a: [
            "Mengirim data sebagai pesan antar aplikasi",
            "Memisah data menjadi kecil",
            "Membuat database baru",
            "Menghapus file lama",
            "Menyimpan data"
        ],
        correct: 0,
        pembahasan: "Messaging membuat aplikasi saling bertukar pesan."
    },
    {
        q: "Cara membuat Table of Contents yang benar adalah:",
        a: [
            "Menambah heading manual",
            "Menggunakan fitur Insert Table of Contents",
            "Konversi ke PDF dulu",
            "Menambah hyperlink",
            "Membuat daftar isi di Excel"
        ],
        correct: 1,
        pembahasan: "Daftar isi otomatis dibuat melalui menu References."
    },
    {
        q: "Perbedaan Paste dan Paste Special adalah:",
        a: [
            "Paste hanya teks",
            "Paste Special memilih format tempel",
            "Paste membuat file baru",
            "Paste Special menghapus format",
            "Paste hanya untuk angka"
        ],
        correct: 1,
        pembahasan: "Paste Special memungkinkan memilih format tertentu."
    },
    {
        q: "Dalam Mail Merge, fungsi 'Use Existing List' adalah:",
        a: [
            "Membuat daftar baru",
            "Menghubungkan ke file data yang sudah ada",
            "Menghapus data lama",
            "Memperbarui database otomatis",
            "Menggabungkan dua sumber"
        ],
        correct: 1,
        pembahasan: "Use Existing List menghubungkan Word dengan daftar data yang sudah ada."
    },
    {
        q: "Apa yang dimaksud dengan Embedding?",
        a: [
            "Menyisipkan data tanpa koneksi ke sumber",
            "Membuat data hanya diakses aplikasi tertentu",
            "Menghapus data sumber",
            "Menyimpan data di lokasi terpisah",
            "Menggunakan data dari cloud"
        ],
        correct: 0,
        pembahasan: "Embedding membuat data berdiri sendiri tanpa bergantung file sumber."
    },
    {
        q: "Fungsi utama fitur Insert Object adalah:",
        a: [
            "Menyisipkan data dari Excel",
            "Membuat tabel baru",
            "Menghapus objek",
            "Mengonversi data",
            "Membuat grafik"
        ],
        correct: 0,
        pembahasan: "Insert Object menyisipkan data dari aplikasi lain seperti Excel."
    },
    {
        q: "Langkah melihat hasil Mail Merge sebelum dicetak adalah:",
        a: [
            "Klik Preview Results",
            "Simpan dokumen",
            "Pilih data di sumber",
            "Konversi ke PDF",
            "Tutup dokumen"
        ],
        correct: 0,
        pembahasan: "Preview Results menampilkan hasil sebelum dicetak."
    },
    {
        q: "Keunggulan hyperlink adalah:",
        a: [
            "Mengakses file atau website dari dokumen",
            "Menyisipkan file tanpa pengaruh ukuran",
            "Menghapus informasi tidak relevan",
            "Membuat dokumen aman",
            "Mengubah teks menjadi gambar"
        ],
        correct: 0,
        pembahasan: "Hyperlink mempermudah akses ke sumber lain."
    },
    {
        q: "Fungsi utama 'Select Recipients' adalah:",
        a: [
            "Memilih data yang akan diintegrasikan",
            "Menambah data baru",
            "Menghapus data lama",
            "Membagi data menjadi kategori",
            "Menyimpan dokumen"
        ],
        correct: 0,
        pembahasan: "Select Recipients digunakan untuk memilih data yang akan dipakai dalam Mail Merge."
    }
];
