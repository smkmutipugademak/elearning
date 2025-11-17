let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa prinsip utama dalam mendesain user interface menurut Norman dan Nielsen?",
        a: ["Simplicity", "Consistency", "User Control", "Compatibility", "Affordance"],
        correct: 1,
        pembahasan: "Prinsip desain UI harus menjaga konsistensi agar pengguna merasa familiar dengan elemen antarmuka."
    },
    {
        q: "Tag <html> dalam HTML berfungsi untuk apa?",
        a: ["Menentukan judul halaman", "Menentukan struktur dasar dokumen HTML", "Membuat tautan antarhalaman", "Menentukan paragraf", "Membuat tabel"],
        correct: 1,
        pembahasan: "Tag <html> adalah elemen utama yang membungkus seluruh isi halaman web."
    },
    {
        q: "Apa kepanjangan dari HTML?",
        a: ["Hyper Tool Markup Language", "Hypertext Machine Language", "Hypertext Markup Language", "Hyper Machine Text Language", "Hyper Transfer Markup Language"],
        correct: 2,
        pembahasan: "HTML adalah singkatan dari Hypertext Markup Language."
    },
    {
        q: "Tag <h1> hingga <h6> digunakan untuk apa dalam HTML?",
        a: ["Membuat tabel", "Menentukan heading pada halaman web", "Membuat hyperlink", "Memasukkan gambar", "Membuat paragraf"],
        correct: 1,
        pembahasan: "Tag heading digunakan untuk judul dan subjudul pada halaman web."
    },
    {
        q: "Apa fungsi tag <img> dalam HTML?",
        a: ["Membuat tabel", "Menampilkan gambar", "Membuat form", "Membuat hyperlink", "Menambahkan background"],
        correct: 1,
        pembahasan: "Tag <img> digunakan untuk menyisipkan gambar pada halaman web."
    },
    {
        q: "Apa fungsi atribut alt pada tag <img>?",
        a: ["Menentukan ukuran gambar", "Menambahkan teks alternatif untuk gambar", "Mengatur posisi gambar", "Menentukan tautan gambar", "Mengganti warna gambar"],
        correct: 1,
        pembahasan: "Atribut alt berisi teks alternatif jika gambar tidak bisa dimuat."
    },
    {
        q: "Apa yang dimaksud dengan WYSIWYG?",
        a: ["Aplikasi desain grafis", "Antarmuka pengembangan web", "Konsep 'What You See Is What You Get'", "Sistem manajemen konten", "Standar HTML terbaru"],
        correct: 2,
        pembahasan: "WYSIWYG berarti tampilan editor sama dengan hasil akhirnya."
    },
    {
        q: "Tag <a> dalam HTML digunakan untuk?",
        a: ["Membuat form", "Membuat hyperlink", "Menampilkan gambar", "Membuat heading", "Menambahkan tabel"],
        correct: 1,
        pembahasan: "Tag <a> digunakan untuk membuat link."
    },
    {
        q: "Apa itu CSS?",
        a: ["Cascading Style Sheets", "Coding Style Standards", "Content Style Sheets", "Cascading Sheets Style", "Creative Style Standards"],
        correct: 0,
        pembahasan: "CSS digunakan untuk mengatur tampilan dan gaya halaman web."
    },
    {
        q: "Tag <table> dalam HTML digunakan untuk apa?",
        a: ["Membuat gambar", "Membuat tabel", "Membuat form", "Membuat paragraf", "Membuat hyperlink"],
        correct: 1,
        pembahasan: "Tag <table> digunakan untuk membuat tabel."
    },
    {
        q: "Apa fungsi tag <form> dalam HTML?",
        a: ["Menambahkan gambar", "Membuat form input data", "Membuat heading", "Menambahkan tabel", "Membuat hyperlink"],
        correct: 1,
        pembahasan: "Tag <form> digunakan untuk menerima input dari pengguna."
    },
    {
        q: "Tag <ul> digunakan untuk apa dalam HTML?",
        a: ["Daftar tidak bernomor", "Daftar bernomor", "Paragraf", "Tabel", "Hyperlink"],
        correct: 0,
        pembahasan: "Tag <ul> digunakan untuk bullet list."
    },
    {
        q: "Apa kepanjangan dari CSS?",
        a: ["Cascading Sheets Style", "Coding Style Standards", "Content Style Sheets", "Cascading Style Sheets", "Creative Style Standards"],
        correct: 3,
        pembahasan: "CSS adalah Cascading Style Sheets."
    },
    {
        q: "Tag <ol> digunakan untuk?",
        a: ["Daftar tidak bernomor", "Daftar bernomor", "Menambah gambar", "Paragraf", "Tabel"],
        correct: 1,
        pembahasan: "Tag <ol> membuat daftar bernomor."
    },
    {
        q: "Atribut type pada tag <input> digunakan untuk?",
        a: ["Menentukan tipe data input", "Menentukan ukuran input", "Menambahkan label input", "Menentukan warna input", "Menambahkan teks alternatif"],
        correct: 0,
        pembahasan: "Atribut type menentukan jenis input."
    },
    {
        q: "Tag <head> berisi informasi tentang?",
        a: ["Konten utama halaman", "Metadata halaman", "Paragraf halaman", "Link halaman lain", "Gambar halaman"],
        correct: 1,
        pembahasan: "Metadata seperti title, meta, dan link CSS berada dalam <head>."
    },
    {
        q: "Apa fungsi atribut src pada tag <img>?",
        a: ["Menentukan ukuran gambar", "Menentukan sumber gambar", "Menambahkan teks alternatif", "Mengatur posisi gambar", "Mengubah warna gambar"],
        correct: 1,
        pembahasan: "Atribut src menentukan lokasi file gambar."
    },
    {
        q: "Tag <br> digunakan untuk?",
        a: ["Garis horizontal", "Baris baru", "Paragraf", "Daftar", "Tabel"],
        correct: 1,
        pembahasan: "Tag <br> membuat line break."
    },
    {
        q: "Apa itu tag <title>?",
        a: ["Judul halaman di browser", "Paragraf", "Tabel", "Hyperlink", "Daftar"],
        correct: 0,
        pembahasan: "Tag <title> menentukan nama tab browser."
    },
    {
        q: "Apa fungsi atribut href pada tag <a>?",
        a: ["Sumber gambar", "URL tujuan link", "Warna link", "Ukuran font", "Jenis input"],
        correct: 1,
        pembahasan: "href menentukan URL tujuan link."
    },
    {
        q: "Apa itu atribut action dalam tag <form>?",
        a: ["URL tujuan data form", "Metode input form", "Menambahkan label", "Ukuran input", "Warna form"],
        correct: 0,
        pembahasan: "action berisi alamat tujuan form."
    },
    {
        q: "Tag <th> digunakan untuk?",
        a: ["Header kolom tabel", "Data sel tabel", "Garis tabel", "Ukuran tabel", "Warna tabel"],
        correct: 0,
        pembahasan: "Tag <th> adalah header tabel."
    },
    {
        q: "Apa itu hyperlink absolut?",
        a: ["Link dalam dokumen yang sama", "Link dengan URL lengkap", "Link ke gambar", "Link ke CSS", "Link internal"],
        correct: 1,
        pembahasan: "Hyperlink absolut menggunakan URL lengkap."
    },
    {
        q: "Atribut target=\"_blank\" digunakan untuk?",
        a: ["Membuka link di tab baru", "Menambah teks alternatif", "Mengatur ukuran font", "Mengubah warna link", "Sumber link"],
        correct: 0,
        pembahasan: "target=\"_blank\" membuka link di tab baru."
    },
    {
        q: "Tag <div> digunakan untuk?",
        a: ["Paragraf", "Mengelompokkan elemen", "Tabel", "Daftar", "Gambar"],
        correct: 1,
        pembahasan: "Tag <div> berfungsi sebagai container."
    },
    {
        q: "Apa itu DOCTYPE?",
        a: ["Deklarasi jenis dokumen HTML", "Struktur tabel", "URL gambar", "Atribut CSS", "Deklarasi form"],
        correct: 0,
        pembahasan: "DOCTYPE memberi tahu browser versi HTML."
    },
    {
        q: "Apa fungsi tag <iframe>?",
        a: ["Menambah tabel", "Menyisipkan halaman lain", "Heading", "Form", "Daftar"],
        correct: 1,
        pembahasan: "iframe digunakan untuk menampilkan halaman web lain."
    },
    {
        q: "Tag <strong> digunakan untuk?",
        a: ["Warna teks", "Teks tebal", "Teks miring", "Gambar", "Paragraf"],
        correct: 1,
        pembahasan: "Tag <strong> memberi penekanan (bold)."
    },
    {
        q: "Apa itu tag <meta>?",
        a: ["Metadata halaman", "Gambar", "Judul halaman", "Daftar", "Tabel"],
        correct: 0,
        pembahasan: "Tag <meta> menyimpan metadata seperti charset."
    },
    {
        q: "Apa fungsi atribut colspan?",
        a: ["Menggabungkan kolom", "Menggabungkan baris", "Ukuran kolom", "Warna tabel", "Border tabel"],
        correct: 0,
        pembahasan: "colspan menggabungkan kolom."
    },
    {
        q: "Tag <textarea> digunakan untuk?",
        a: ["Gambar", "Area input teks panjang", "Daftar", "Tabel", "Hyperlink"],
        correct: 1,
        pembahasan: "textarea dipakai untuk input teks panjang."
    },
    {
        q: "Apa fungsi atribut rowspan?",
        a: ["Menggabungkan baris", "Menggabungkan kolom", "Ukuran kolom", "Warna tabel", "Border tabel"],
        correct: 0,
        pembahasan: "rowspan menggabungkan baris."
    },
    {
        q: "Tag <blockquote> digunakan untuk?",
        a: ["Gambar", "Kutipan panjang", "Tabel", "Daftar", "Paragraf"],
        correct: 1,
        pembahasan: "blockquote digunakan untuk kutipan panjang."
    },
    {
        q: "Tag <fieldset> digunakan untuk?",
        a: ["Kelompok form", "Gambar", "Paragraf", "Daftar", "Heading"],
        correct: 0,
        pembahasan: "fieldset mengelompokkan elemen form."
    },
    {
        q: "Atribut method pada tag <form> digunakan untuk?",
        a: ["Metode pengiriman data", "URL tujuan", "Ukuran form", "Warna form", "Jenis input"],
        correct: 0,
        pembahasan: "method menentukan GET atau POST."
    },
    {
        q: "Tag <caption> digunakan untuk?",
        a: ["Judul tabel", "Border tabel", "Gambar", "Daftar", "Heading"],
        correct: 0,
        pembahasan: "caption adalah judul tabel."
    },
    {
        q: "Apa fungsi tag <code>?",
        a: ["Teks tebal", "Menampilkan teks sebagai kode", "Teks miring", "Gambar", "Paragraf"],
        correct: 1,
        pembahasan: "Tag <code> menampilkan teks dalam gaya kode."
    },
    {
        q: "Atribut alt pada tag <img> adalah...",
        a: ["Teks alternatif", "Ukuran gambar", "Warna", "Border", "Posisi gambar"],
        correct: 0,
        pembahasan: "alt menampilkan deskripsi gambar."
    },
    {
        q: "Apa fungsi atribut action dalam form?",
        a: ["URL tujuan data", "Label form", "Ukuran form", "Jenis input", "Warna form"],
        correct: 0,
        pembahasan: "action menentukan URL tujuan data."
    },
    {
        q: "Tag <link> digunakan untuk?",
        a: ["Menghubungkan file eksternal seperti CSS", "Hyperlink", "Tabel", "Daftar", "Gambar"],
        correct: 0,
        pembahasan: "Tag <link> menghubungkan HTML dengan CSS."
    },
    {
        q: "Tag <legend> digunakan untuk?",
        a: ["Tabel", "Keterangan untuk <fieldset>", "Gambar", "Daftar", "Heading"],
        correct: 1,
        pembahasan: "legend memberi judul pada fieldset."
    },
    {
        q: "Atribut target=\"_blank\" digunakan untuk?",
        a: ["Buka link di tab baru", "Arahkan link ke halaman utama", "Border link", "Gambar di bawah link", "Daftar dalam link"],
        correct: 0,
        pembahasan: "target=\"_blank\" membuka tab baru."
    },
    {
        q: "Tag <br> digunakan untuk?",
        a: ["Garis horizontal", "Baris baru", "Teks tebal", "Gambar", "Daftar"],
        correct: 1,
        pembahasan: "Tag <br> membuat baris baru."
    },
    {
        q: "Apa itu atribut cols pada <textarea>?",
        a: ["Lebar kolom input teks", "Jumlah baris", "Warna teks", "Batas karakter", "Jenis teks"],
        correct: 0,
        pembahasan: "cols menentukan lebar textarea."
    },
    {
        q: "Apa fungsi atribut for pada tag <label>?",
        a: ["Menghubungkan label dengan elemen form", "Warna teks", "Gambar", "Daftar", "Jenis input"],
        correct: 0,
        pembahasan: "for menghubungkan label dengan elemen berdasarkan id."
    },
    {
        q: "Atribut name pada tag <input> digunakan untuk?",
        a: ["Nama data yang dikirim", "Ukuran form", "Warna form", "Daftar", "Gambar"],
        correct: 0,
        pembahasan: "name menentukan nama variabel form."
    },
    {
        q: "Tag <hr> digunakan untuk?",
        a: ["Garis horizontal", "Heading", "Baris baru", "Gambar", "Teks tebal"],
        correct: 0,
        pembahasan: "<hr> membuat garis horizontal."
    },
    {
        q: "Apa fungsi atribut value pada <input>?",
        a: ["Nilai awal input", "Warna input", "Border input", "Lebar input", "Jenis input"],
        correct: 0,
        pembahasan: "value untuk nilai default input."
    },
    {
        q: "Tag <thead> digunakan untuk?",
        a: ["Bagian kepala tabel", "Gambar tabel", "Daftar", "Baris baru", "Ukuran tabel"],
        correct: 0,
        pembahasan: "<thead> mencakup baris-baris header tabel."
    },
    {
        q: "Atribut type=\"password\" digunakan untuk?",
        a: ["Menyembunyikan teks input", "Membatasi panjang input", "Mengatur lebar", "Border input", "Input angka"],
        correct: 0,
        pembahasan: "Input password menyembunyikan karakter."
    }
];