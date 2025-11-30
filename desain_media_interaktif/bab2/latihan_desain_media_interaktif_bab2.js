let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Prinsip utama dalam mendesain user interface menurut Norman dan Nielsen adalah menjaga konsistensi...",
        a: ["Simplicity", "Consistency", "User Control", "Compatibility", "Affordance"],
        correct: 1,
        pembahasan: "Prinsip desain UI harus menjaga konsistensi agar pengguna merasa familiar dengan elemen antarmuka."
    },
    {
        q: "Tag <html> dalam HTML digunakan sebagai struktur dasar dokumen HTML...",
        a: ["Menentukan judul halaman", "Menentukan struktur dasar dokumen HTML", "Membuat tautan antarhalaman", "Menentukan paragraf", "Membuat tabel"],
        correct: 1,
        pembahasan: "Tag <html> adalah elemen utama yang membungkus seluruh isi halaman web."
    },
    {
        q: "HTML merupakan singkatan dari Hypertext Markup Language...",
        a: ["Hyper Tool Markup Language", "Hypertext Machine Language", "Hypertext Markup Language", "Hyper Machine Text Language", "Hyper Transfer Markup Language"],
        correct: 2,
        pembahasan: "HTML adalah singkatan dari Hypertext Markup Language."
    },
    {
        q: "Tag <h1> hingga <h6> digunakan sebagai heading atau judul pada halaman web...",
        a: ["Membuat tabel", "Menentukan heading pada halaman web", "Membuat hyperlink", "Memasukkan gambar", "Membuat paragraf"],
        correct: 1,
        pembahasan: "Tag heading digunakan untuk judul dan subjudul pada halaman web."
    },
    {
        q: "Tag <img> berfungsi untuk menampilkan gambar pada halaman web...",
        a: ["Membuat tabel", "Menampilkan gambar", "Membuat form", "Membuat hyperlink", "Menambahkan background"],
        correct: 1,
        pembahasan: "Tag <img> digunakan untuk menyisipkan gambar pada halaman web."
    },
    {
        q: "Atribut alt pada tag <img> digunakan untuk memberikan teks alternatif ketika gambar gagal dimuat...",
        a: ["Menentukan ukuran gambar", "Menambahkan teks alternatif untuk gambar", "Mengatur posisi gambar", "Menentukan tautan gambar", "Mengganti warna gambar"],
        correct: 1,
        pembahasan: "Atribut alt berisi teks alternatif jika gambar tidak bisa dimuat."
    },
    {
        q: "WYSIWYG adalah konsep 'What You See Is What You Get', yaitu tampilan editor sama dengan hasil akhirnya...",
        a: ["Aplikasi desain grafis", "Antarmuka pengembangan web", "Konsep 'What You See Is What You Get'", "Sistem manajemen konten", "Standar HTML terbaru"],
        correct: 2,
        pembahasan: "WYSIWYG berarti tampilan editor sama dengan hasil akhirnya."
    },
    {
        q: "Tag <a> digunakan untuk membuat hyperlink...",
        a: ["Membuat form", "Membuat hyperlink", "Menampilkan gambar", "Membuat heading", "Menambahkan tabel"],
        correct: 1,
        pembahasan: "Tag <a> digunakan untuk membuat link."
    },
    {
        q: "CSS merupakan singkatan dari Cascading Style Sheets...",
        a: ["Cascading Style Sheets", "Coding Style Standards", "Content Style Sheets", "Cascading Sheets Style", "Creative Style Standards"],
        correct: 0,
        pembahasan: "CSS digunakan untuk mengatur tampilan dan gaya halaman web."
    },
    {
        q: "Tag <table> digunakan untuk membuat tabel pada halaman web...",
        a: ["Membuat gambar", "Membuat tabel", "Membuat form", "Membuat paragraf", "Membuat hyperlink"],
        correct: 1,
        pembahasan: "Tag <table> digunakan untuk membuat tabel."
    },
    {
        q: "Tag <form> digunakan sebagai wadah untuk menerima input dari pengguna...",
        a: ["Menambahkan gambar", "Membuat form input data", "Membuat heading", "Menambahkan tabel", "Membuat hyperlink"],
        correct: 1,
        pembahasan: "Tag <form> digunakan untuk menerima input dari pengguna."
    },
    {
        q: "Tag <ul> digunakan untuk membuat daftar tidak bernomor...",
        a: ["Daftar tidak bernomor", "Daftar bernomor", "Paragraf", "Tabel", "Hyperlink"],
        correct: 0,
        pembahasan: "Tag <ul> digunakan untuk bullet list."
    },
    {
        q: "CSS memiliki kepanjangan Cascading Style Sheets...",
        a: ["Cascading Sheets Style", "Coding Style Standards", "Content Style Sheets", "Cascading Style Sheets", "Creative Style Standards"],
        correct: 3,
        pembahasan: "CSS adalah Cascading Style Sheets."
    },
    {
        q: "Tag <ol> digunakan untuk membuat daftar bernomor...",
        a: ["Daftar tidak bernomor", "Daftar bernomor", "Menambah gambar", "Paragraf", "Tabel"],
        correct: 1,
        pembahasan: "Tag <ol> membuat daftar bernomor."
    },
    {
        q: "Atribut type pada tag <input> digunakan untuk menentukan jenis input...",
        a: ["Menentukan tipe data input", "Menentukan ukuran input", "Menambahkan label input", "Menentukan warna input", "Menambahkan teks alternatif"],
        correct: 0,
        pembahasan: "Atribut type menentukan jenis input."
    },
    {
        q: "Tag <head> berisi metadata halaman seperti title, meta, dan link CSS...",
        a: ["Konten utama halaman", "Metadata halaman", "Paragraf halaman", "Link halaman lain", "Gambar halaman"],
        correct: 1,
        pembahasan: "Metadata seperti title, meta, dan link CSS berada dalam <head>."
    },
    {
        q: "Atribut src pada tag <img> berfungsi menentukan sumber gambar...",
        a: ["Menentukan ukuran gambar", "Menentukan sumber gambar", "Menambahkan teks alternatif", "Mengatur posisi gambar", "Mengubah warna gambar"],
        correct: 1,
        pembahasan: "Atribut src menentukan lokasi file gambar."
    },
    {
        q: "Tag <br> digunakan untuk membuat baris baru...",
        a: ["Garis horizontal", "Baris baru", "Paragraf", "Daftar", "Tabel"],
        correct: 1,
        pembahasan: "Tag <br> membuat line break."
    },
    {
        q: "Tag <title> digunakan untuk memberikan judul pada tab browser...",
        a: ["Judul halaman di browser", "Paragraf", "Tabel", "Hyperlink", "Daftar"],
        correct: 0,
        pembahasan: "Tag <title> menentukan nama tab browser."
    },
    {
        q: "Atribut href pada tag <a> digunakan untuk menentukan URL tujuan link...",
        a: ["Sumber gambar", "URL tujuan link", "Warna link", "Ukuran font", "Jenis input"],
        correct: 1,
        pembahasan: "href menentukan URL tujuan link."
    },
    {
        q: "Atribut action dalam tag <form> berfungsi menentukan URL tujuan data form...",
        a: ["URL tujuan data form", "Metode input form", "Menambahkan label", "Ukuran input", "Warna form"],
        correct: 0,
        pembahasan: "action berisi alamat tujuan form."
    },
    {
        q: "Tag <th> digunakan sebagai header kolom dalam tabel...",
        a: ["Header kolom tabel", "Data sel tabel", "Garis tabel", "Ukuran tabel", "Warna tabel"],
        correct: 0,
        pembahasan: "Tag <th> adalah header tabel."
    },
    {
        q: "Hyperlink absolut merupakan link dengan URL lengkap...",
        a: ["Link dalam dokumen yang sama", "Link dengan URL lengkap", "Link ke gambar", "Link ke CSS", "Link internal"],
        correct: 1,
        pembahasan: "Hyperlink absolut menggunakan URL lengkap."
    },
    {
        q: "Atribut target=\"_blank\" digunakan untuk membuka link di tab baru...",
        a: ["Membuka link di tab baru", "Menambah teks alternatif", "Mengatur ukuran font", "Mengubah warna link", "Sumber link"],
        correct: 0,
        pembahasan: "target=\"_blank\" membuka link di tab baru."
    },
    {
        q: "Tag <div> digunakan untuk mengelompokkan elemen HTML sebagai sebuah container...",
        a: ["Paragraf", "Mengelompokkan elemen", "Tabel", "Daftar", "Gambar"],
        correct: 1,
        pembahasan: "Tag <div> berfungsi sebagai container."
    },
    {
        q: "DOCTYPE merupakan deklarasi jenis dokumen HTML...",
        a: ["Deklarasi jenis dokumen HTML", "Struktur tabel", "URL gambar", "Atribut CSS", "Deklarasi form"],
        correct: 0,
        pembahasan: "DOCTYPE memberi tahu browser versi HTML."
    },
    {
        q: "Tag <iframe> digunakan untuk menyisipkan halaman web lain...",
        a: ["Menambah tabel", "Menyisipkan halaman lain", "Heading", "Form", "Daftar"],
        correct: 1,
        pembahasan: "iframe digunakan untuk menampilkan halaman web lain."
    },
    {
        q: "Tag <strong> digunakan untuk menampilkan teks tebal...",
        a: ["Warna teks", "Teks tebal", "Teks miring", "Gambar", "Paragraf"],
        correct: 1,
        pembahasan: "Tag <strong> memberi penekanan (bold)."
    },
    {
        q: "Tag <meta> digunakan untuk menyimpan metadata halaman...",
        a: ["Metadata halaman", "Gambar", "Judul halaman", "Daftar", "Tabel"],
        correct: 0,
        pembahasan: "Tag <meta> menyimpan metadata seperti charset."
    },
    {
        q: "Atribut colspan berfungsi untuk menggabungkan kolom dalam tabel...",
        a: ["Menggabungkan kolom", "Menggabungkan baris", "Ukuran kolom", "Warna tabel", "Border tabel"],
        correct: 0,
        pembahasan: "colspan menggabungkan kolom."
    },
    {
        q: "Tag <textarea> digunakan untuk membuat area input teks panjang...",
        a: ["Gambar", "Area input teks panjang", "Daftar", "Tabel", "Hyperlink"],
        correct: 1,
        pembahasan: "textarea dipakai untuk input teks panjang."
    },
    {
        q: "Atribut rowspan digunakan untuk menggabungkan baris dalam tabel...",
        a: ["Menggabungkan baris", "Menggabungkan kolom", "Ukuran kolom", "Warna tabel", "Border tabel"],
        correct: 0,
        pembahasan: "rowspan menggabungkan baris."
    },
    {
        q: "Tag <blockquote> digunakan untuk menampilkan kutipan panjang...",
        a: ["Gambar", "Kutipan panjang", "Tabel", "Daftar", "Paragraf"],
        correct: 1,
        pembahasan: "blockquote digunakan untuk kutipan panjang."
    },
    {
        q: "Tag <fieldset> digunakan untuk mengelompokkan elemen pada form...",
        a: ["Kelompok form", "Gambar", "Paragraf", "Daftar", "Heading"],
        correct: 0,
        pembahasan: "fieldset mengelompokkan elemen form."
    },
    {
        q: "Atribut method menentukan metode pengiriman data form seperti GET atau POST...",
        a: ["Metode pengiriman data", "URL tujuan", "Ukuran form", "Warna form", "Jenis input"],
        correct: 0,
        pembahasan: "method menentukan GET atau POST."
    },
    {
        q: "Tag <caption> digunakan sebagai judul tabel...",
        a: ["Judul tabel", "Border tabel", "Gambar", "Daftar", "Heading"],
        correct: 0,
        pembahasan: "caption adalah judul tabel."
    },
    {
        q: "Tag <code> digunakan untuk menampilkan teks sebagai kode...",
        a: ["Teks tebal", "Menampilkan teks sebagai kode", "Teks miring", "Gambar", "Paragraf"],
        correct: 1,
        pembahasan: "Tag <code> menampilkan teks dalam gaya kode."
    },
    {
        q: "Atribut alt pada tag <img> digunakan sebagai teks alternatif...",
        a: ["Teks alternatif", "Ukuran gambar", "Warna", "Border", "Posisi gambar"],
        correct: 0,
        pembahasan: "alt menampilkan deskripsi gambar."
    },
    {
        q: "Atribut action pada form menentukan URL tujuan data...",
        a: ["URL tujuan data", "Label form", "Ukuran form", "Jenis input", "Warna form"],
        correct: 0,
        pembahasan: "action menentukan URL tujuan data."
    },
    {
        q: "Tag <link> digunakan untuk menghubungkan HTML dengan file eksternal seperti CSS...",
        a: ["Menghubungkan file eksternal seperti CSS", "Hyperlink", "Tabel", "Daftar", "Gambar"],
        correct: 0,
        pembahasan: "Tag <link> menghubungkan HTML dengan CSS."
    },
    {
        q: "Tag <legend> berfungsi memberi judul pada fieldset...",
        a: ["Tabel", "Keterangan untuk <fieldset>", "Gambar", "Daftar", "Heading"],
        correct: 1,
        pembahasan: "legend memberi judul pada fieldset."
    },
    {
        q: "Atribut target=\"_blank\" digunakan untuk membuka link pada tab baru...",
        a: ["Buka link di tab baru", "Arahkan link ke halaman utama", "Border link", "Gambar di bawah link", "Daftar dalam link"],
        correct: 0,
        pembahasan: "target=\"_blank\" membuka tab baru."
    },
    {
        q: "Tag <br> digunakan untuk membuat baris baru...",
        a: ["Garis horizontal", "Baris baru", "Teks tebal", "Gambar", "Daftar"],
        correct: 1,
        pembahasan: "Tag <br> membuat baris baru."
    },
    {
        q: "Atribut cols pada <textarea> mengatur lebar kolom input teks...",
        a: ["Lebar kolom input teks", "Jumlah baris", "Warna teks", "Batas karakter", "Jenis teks"],
        correct: 0,
        pembahasan: "cols menentukan lebar textarea."
    },
    {
        q: "Atribut for pada tag <label> digunakan untuk menghubungkan label dengan elemen form berdasarkan id...",
        a: ["Menghubungkan label dengan elemen form", "Warna teks", "Gambar", "Daftar", "Jenis input"],
        correct: 0,
        pembahasan: "for menghubungkan label dengan elemen berdasarkan id."
    },
    {
        q: "Atribut name pada tag <input> digunakan menentukan nama data yang dikirim...",
        a: ["Nama data yang dikirim", "Ukuran form", "Warna form", "Daftar", "Gambar"],
        correct: 0,
        pembahasan: "name menentukan nama variabel form."
    },
    {
        q: "Tag <hr> digunakan untuk membuat garis horizontal...",
        a: ["Garis horizontal", "Heading", "Baris baru", "Gambar", "Teks tebal"],
        correct: 0,
        pembahasan: "<hr> membuat garis horizontal."
    },
    {
        q: "Atribut value pada <input> digunakan untuk menentukan nilai awal input...",
        a: ["Nilai awal input", "Warna input", "Border input", "Lebar input", "Jenis input"],
        correct: 0,
        pembahasan: "value untuk nilai default input."
    },
    {
        q: "Tag <thead> digunakan untuk bagian kepala tabel...",
        a: ["Bagian kepala tabel", "Gambar tabel", "Daftar", "Baris baru", "Ukuran tabel"],
        correct: 0,
        pembahasan: "<thead> mencakup baris-baris header tabel."
    },
    {
        q: "Input type=\"password\" digunakan untuk menyembunyikan teks yang diketik...",
        a: ["Menyembunyikan teks input", "Membatasi panjang input", "Mengatur lebar", "Border input", "Input angka"],
        correct: 0,
        pembahasan: "Input password menyembunyikan karakter."
    }
];
