let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Prinsip utama dalam mendesain user interface menurut Norman dan Nielsen adalah menjaga ......",
        a: ["Simplicity", "Consistency", "User Control", "Compatibility", "Affordance"],
        correct: 1,
        pembahasan: "Prinsip desain UI harus menjaga konsistensi agar pengguna merasa familiar dengan elemen antarmuka."
    },
    {
        q: "Tag <html> dalam struktur dokumen web berfungsi sebagai ......",
        a: ["Menentukan judul halaman", "Elemen dasar pembungkus dokumen HTML", "Membuat tautan antarhalaman", "Menentukan paragraf", "Membuat tabel"],
        correct: 1,
        pembahasan: "Tag <html> adalah elemen utama yang membungkus seluruh isi halaman web."
    },
    {
        q: "HTML merupakan singkatan dari ......",
        a: ["Hyper Tool Markup Language", "Hypertext Machine Language", "Hypertext Markup Language", "Hyper Machine Text Language", "Hyper Transfer Markup Language"],
        correct: 2,
        pembahasan: "HTML adalah singkatan dari Hypertext Markup Language."
    },
    {
        q: "Tag <h1> hingga <h6> dalam HTML digunakan untuk ......",
        a: ["Membuat tabel", "Menentukan heading atau judul", "Membuat hyperlink", "Memasukkan gambar", "Membuat paragraf"],
        correct: 1,
        pembahasan: "Tag heading digunakan untuk judul dan subjudul pada halaman web."
    },
    {
        q: "Fungsi utama tag <img> dalam halaman web adalah ......",
        a: ["Membuat tabel", "Menampilkan gambar", "Membuat form", "Membuat hyperlink", "Menambahkan background"],
        correct: 1,
        pembahasan: "Tag <img> digunakan untuk menyisipkan gambar pada halaman web."
    },
    {
        q: "Atribut alt pada tag <img> berfungsi untuk ......",
        a: ["Menentukan ukuran gambar", "Memberikan teks alternatif jika gambar gagal dimuat", "Mengatur posisi gambar", "Menentukan tautan gambar", "Mengganti warna gambar"],
        correct: 1,
        pembahasan: "Atribut alt berisi teks alternatif jika gambar tidak bisa dimuat."
    },
    {
        q: "Konsep WYSIWYG (What You See Is What You Get) berarti ......",
        a: ["Aplikasi desain grafis", "Antarmuka pengembangan web", "Tampilan editor sama dengan hasil akhirnya", "Sistem manajemen konten", "Standar HTML terbaru"],
        correct: 2,
        pembahasan: "WYSIWYG berarti tampilan editor sama dengan hasil akhirnya."
    },
    {
        q: "Tag <a> dalam HTML digunakan untuk ......",
        a: ["Membuat form", "Membuat hyperlink", "Menampilkan gambar", "Membuat heading", "Menambahkan tabel"],
        correct: 1,
        pembahasan: "Tag <a> digunakan untuk membuat link."
    },
    {
        q: "CSS merupakan singkatan dari ......",
        a: ["Cascading Style Sheets", "Coding Style Standards", "Content Style Sheets", "Cascading Sheets Style", "Creative Style Standards"],
        correct: 0,
        pembahasan: "CSS digunakan untuk mengatur tampilan dan gaya halaman web."
    },
    {
        q: "Tag <table> dalam HTML berfungsi untuk ......",
        a: ["Membuat gambar", "Membuat tabel", "Membuat form", "Membuat paragraf", "Membuat hyperlink"],
        correct: 1,
        pembahasan: "Tag <table> digunakan untuk membuat tabel."
    },
    {
        q: "Tag <form> dalam HTML berfungsi sebagai ......",
        a: ["Menambahkan gambar", "Wadah untuk menerima input dari pengguna", "Membuat heading", "Menambahkan tabel", "Membuat hyperlink"],
        correct: 1,
        pembahasan: "Tag <form> digunakan untuk menerima input dari pengguna."
    },
    {
        q: "Tag <ul> digunakan untuk membuat ......",
        a: ["Daftar tidak bernomor (bullet points)", "Daftar bernomor", "Paragraf", "Tabel", "Hyperlink"],
        correct: 0,
        pembahasan: "Tag <ul> digunakan untuk bullet list."
    },
    {
        q: "Kepanjangan dari CSS adalah ......",
        a: ["Cascading Sheets Style", "Coding Style Standards", "Content Style Sheets", "Cascading Style Sheets", "Creative Style Standards"],
        correct: 3,
        pembahasan: "CSS adalah Cascading Style Sheets."
    },
    {
        q: "Tag <ol> digunakan untuk membuat ......",
        a: ["Daftar tidak bernomor", "Daftar bernomor", "Menambah gambar", "Paragraf", "Tabel"],
        correct: 1,
        pembahasan: "Tag <ol> membuat daftar bernomor."
    },
    {
        q: "Atribut type pada tag <input> berfungsi untuk ......",
        a: ["Menentukan jenis input", "Menentukan ukuran input", "Menambahkan label input", "Menentukan warna input", "Menambahkan teks alternatif"],
        correct: 0,
        pembahasan: "Atribut type menentukan jenis input."
    },
    {
        q: "Tag <head> dalam struktur HTML berisi informasi seperti ......",
        a: ["Konten utama halaman", "Metadata halaman (title, link CSS)", "Paragraf halaman", "Link halaman lain", "Gambar halaman"],
        correct: 1,
        pembahasan: "Metadata seperti title, meta, dan link CSS berada dalam <head>."
    },
    {
        q: "Atribut src pada tag <img> digunakan untuk ......",
        a: ["Menentukan ukuran gambar", "Menentukan sumber/lokasi file gambar", "Menambahkan teks alternatif", "Mengatur posisi gambar", "Mengubah warna gambar"],
        correct: 1,
        pembahasan: "Atribut src menentukan lokasi file gambar."
    },
    {
        q: "Tag <br> dalam HTML berfungsi untuk ......",
        a: ["Garis horizontal", "Membuat baris baru", "Paragraf", "Daftar", "Tabel"],
        correct: 1,
        pembahasan: "Tag <br> membuat line break."
    },
    {
        q: "Tag <title> dalam dokumen HTML digunakan untuk ......",
        a: ["Judul halaman di browser tab", "Paragraf", "Tabel", "Hyperlink", "Daftar"],
        correct: 0,
        pembahasan: "Tag <title> menentukan nama tab browser."
    },
    {
        q: "Fungsi atribut href pada tag <a> adalah ......",
        a: ["Sumber gambar", "Menentukan URL tujuan link", "Warna link", "Ukuran font", "Jenis input"],
        correct: 1,
        pembahasan: "href menentukan URL tujuan link."
    },
    {
        q: "Atribut action dalam tag <form> digunakan untuk ......",
        a: ["Menentukan URL tujuan pengiriman data", "Metode input form", "Menambahkan label", "Ukuran input", "Warna form"],
        correct: 0,
        pembahasan: "action berisi alamat tujuan form."
    },
    {
        q: "Tag <th> dalam struktur tabel HTML digunakan sebagai ......",
        a: ["Header kolom tabel", "Data sel tabel", "Garis tabel", "Ukuran tabel", "Warna tabel"],
        correct: 0,
        pembahasan: "Tag <th> adalah header tabel."
    },
    {
        q: "Hyperlink absolut adalah jenis link yang menggunakan ......",
        a: ["Link dalam dokumen yang sama", "URL lengkap (full address)", "Link ke gambar", "Link ke CSS", "Link internal"],
        correct: 1,
        pembahasan: "Hyperlink absolut menggunakan URL lengkap."
    },
    {
        q: "Atribut target=\"_blank\" pada hyperlink berfungsi untuk ......",
        a: ["Membuka link di tab/jendela baru", "Menambah teks alternatif", "Mengatur ukuran font", "Mengubah warna link", "Sumber link"],
        correct: 0,
        pembahasan: "target=\"_blank\" membuka link di tab baru."
    },
    {
        q: "Tag <div> dalam HTML sering digunakan untuk ......",
        a: ["Paragraf", "Mengelompokkan elemen sebagai container", "Tabel", "Daftar", "Gambar"],
        correct: 1,
        pembahasan: "Tag <div> berfungsi sebagai container."
    },
    {
        q: "DOCTYPE pada awal dokumen HTML berfungsi sebagai ......",
        a: ["Deklarasi jenis dokumen HTML", "Struktur tabel", "URL gambar", "Atribut CSS", "Deklarasi form"],
        correct: 0,
        pembahasan: "DOCTYPE memberi tahu browser versi HTML."
    },
    {
        q: "Tag <iframe> dalam HTML digunakan untuk ......",
        a: ["Menambah tabel", "Menyisipkan halaman web lain", "Heading", "Form", "Daftar"],
        correct: 1,
        pembahasan: "iframe digunakan untuk menampilkan halaman web lain."
    },
    {
        q: "Tag <strong> dalam HTML digunakan untuk format ......",
        a: ["Warna teks", "Teks tebal (bold)", "Teks miring", "Gambar", "Paragraf"],
        correct: 1,
        pembahasan: "Tag <strong> memberi penekanan (bold)."
    },
    {
        q: "Tag <meta> dalam bagian head HTML berfungsi untuk ......",
        a: ["Menyimpan metadata halaman", "Gambar", "Judul halaman", "Daftar", "Tabel"],
        correct: 0,
        pembahasan: "Tag <meta> menyimpan metadata seperti charset."
    },
    {
        q: "Atribut colspan pada tabel digunakan untuk ......",
        a: ["Menggabungkan kolom", "Menggabungkan baris", "Ukuran kolom", "Warna tabel", "Border tabel"],
        correct: 0,
        pembahasan: "colspan menggabungkan kolom."
    },
    {
        q: "Tag <textarea> digunakan untuk membuat ......",
        a: ["Gambar", "Area input teks panjang", "Daftar", "Tabel", "Hyperlink"],
        correct: 1,
        pembahasan: "textarea dipakai untuk input teks panjang."
    },
    {
        q: "Atribut rowspan pada tabel digunakan untuk ......",
        a: ["Menggabungkan baris", "Menggabungkan kolom", "Ukuran kolom", "Warna tabel", "Border tabel"],
        correct: 0,
        pembahasan: "rowspan menggabungkan baris."
    },
    {
        q: "Tag <blockquote> dalam HTML digunakan untuk ......",
        a: ["Gambar", "Menampilkan kutipan panjang", "Tabel", "Daftar", "Paragraf"],
        correct: 1,
        pembahasan: "blockquote digunakan untuk kutipan panjang."
    },
    {
        q: "Fungsi tag <fieldset> dalam sebuah form adalah ......",
        a: ["Mengelompokkan elemen terkait", "Gambar", "Paragraf", "Daftar", "Heading"],
        correct: 0,
        pembahasan: "fieldset mengelompokkan elemen form."
    },
    {
        q: "Atribut method pada tag <form> digunakan untuk menentukan ......",
        a: ["Metode pengiriman data (GET/POST)", "URL tujuan", "Ukuran form", "Warna form", "Jenis input"],
        correct: 0,
        pembahasan: "method menentukan GET atau POST."
    },
    {
        q: "Tag <caption> dalam elemen tabel berfungsi sebagai ......",
        a: ["Judul tabel", "Border tabel", "Gambar", "Daftar", "Heading"],
        correct: 0,
        pembahasan: "caption adalah judul tabel."
    },
    {
        q: "Tag <code> dalam HTML digunakan untuk ......",
        a: ["Teks tebal", "Menampilkan teks format kode komputer", "Teks miring", "Gambar", "Paragraf"],
        correct: 1,
        pembahasan: "Tag <code> menampilkan teks dalam gaya kode."
    },
    {
        q: "Fungsi atribut alt pada tag <img> adalah menyediakan ......",
        a: ["Teks alternatif", "Ukuran gambar", "Warna", "Border", "Posisi gambar"],
        correct: 0,
        pembahasan: "alt menampilkan deskripsi gambar."
    },
    {
        q: "Pada elemen form, atribut action berfungsi untuk menentukan ......",
        a: ["URL tujuan pengiriman data", "Label form", "Ukuran form", "Jenis input", "Warna form"],
        correct: 0,
        pembahasan: "action menentukan URL tujuan data."
    },
    {
        q: "Tag <link> biasanya digunakan untuk menghubungkan dokumen HTML dengan ......",
        a: ["File eksternal seperti CSS", "Hyperlink", "Tabel", "Daftar", "Gambar"],
        correct: 0,
        pembahasan: "Tag <link> menghubungkan HTML dengan CSS."
    },
    {
        q: "Tag <legend> dalam elemen fieldset digunakan untuk ......",
        a: ["Tabel", "Memberi judul/keterangan pada fieldset", "Gambar", "Daftar", "Heading"],
        correct: 1,
        pembahasan: "legend memberi judul pada fieldset."
    },
    {
        q: "Penggunaan target=\"_blank\" pada link akan mengakibatkan ......",
        a: ["Link terbuka di tab baru", "Arahkan link ke halaman utama", "Border link", "Gambar di bawah link", "Daftar dalam link"],
        correct: 0,
        pembahasan: "target=\"_blank\" membuka tab baru."
    },
    {
        q: "Untuk membuat baris baru dalam HTML, tag yang digunakan adalah ......",
        a: ["Garis horizontal", "<br>", "Teks tebal", "Gambar", "Daftar"],
        correct: 1,
        pembahasan: "Tag <br> membuat baris baru."
    },
    {
        q: "Atribut cols pada elemen <textarea> digunakan untuk mengatur ......",
        a: ["Lebar kolom input teks", "Jumlah baris", "Warna teks", "Batas karakter", "Jenis teks"],
        correct: 0,
        pembahasan: "cols menentukan lebar textarea."
    },
    {
        q: "Atribut for pada tag <label> berfungsi untuk ......",
        a: ["Menghubungkan label dengan elemen form (ID)", "Warna teks", "Gambar", "Daftar", "Jenis input"],
        correct: 0,
        pembahasan: "for menghubungkan label dengan elemen berdasarkan id."
    },
    {
        q: "Atribut name pada elemen input digunakan untuk ......",
        a: ["Identifikasi data yang dikirim ke server", "Ukuran form", "Warna form", "Daftar", "Gambar"],
        correct: 0,
        pembahasan: "name menentukan nama variabel form."
    },
    {
        q: "Tag <hr> dalam HTML digunakan untuk membuat ......",
        a: ["Garis horizontal", "Heading", "Baris baru", "Gambar", "Teks tebal"],
        correct: 0,
        pembahasan: "<hr> membuat garis horizontal."
    },
    {
        q: "Atribut value pada elemen <input> berfungsi untuk ......",
        a: ["Menentukan nilai awal/default input", "Warna input", "Border input", "Lebar input", "Jenis input"],
        correct: 0,
        pembahasan: "value untuk nilai default input."
    },
    {
        q: "Tag <thead> dalam struktur tabel digunakan untuk mengelompokkan ......",
        a: ["Bagian kepala (header) tabel", "Gambar tabel", "Daftar", "Baris baru", "Ukuran tabel"],
        correct: 0,
        pembahasan: "<thead> mencakup baris-baris header tabel."
    },
    {
        q: "Tipe input password pada form digunakan untuk ......",
        a: ["Menyembunyikan karakter teks yang diketik", "Membatasi panjang input", "Mengatur lebar", "Border input", "Input angka"],
        correct: 0,
        pembahasan: "Input password menyembunyikan karakter."
    }
];
