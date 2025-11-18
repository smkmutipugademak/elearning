let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa kepanjangan dari HTML?",
        a: ["Hyper Text Markup Language", "High Transfer Marking Language", "Hyperlink Text Making List", "Hyper Tool Markup Logic"],
        correct: 0,
        pembahasan: "HTML adalah singkatan dari Hyper Text Markup Language."
    },
    {
        q: "Tag apa yang digunakan untuk membuat paragraf?",
        a: ["<div>", "<p>", "<span>", "<para>"],
        correct: 1,
        pembahasan: "<p> adalah tag untuk paragraf."
    },
    {
        q: "Elemen apa yang digunakan untuk membuat judul terbesar?",
        a: ["<h1>", "<h6>", "<header>", "<title>"],
        correct: 0,
        pembahasan: "<h1> adalah heading terbesar."
    },
    {
        q: "Tag apa yang digunakan untuk membuat tautan/link?",
        a: ["<link>", "<a>", "<url>", "<href>"],
        correct: 1,
        pembahasan: "<a> digunakan untuk membuat hyperlink."
    },
    {
        q: "Atribut apa pada tag <img> untuk menampilkan teks alternatif saat gambar gagal dimuat?",
        a: ["text", "alt", "title", "caption"],
        correct: 1,
        pembahasan: "Atribut alt menampilkan deskripsi gambar."
    },
    {
        q: "Tag manakah yang digunakan untuk menampilkan daftar tidak berurutan?",
        a: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: 0,
        pembahasan: "<ul> digunakan untuk unordered list."
    },
    {
        q: "Tag apa yang digunakan untuk menampilkan tabel?",
        a: ["<tab>", "<tr>", "<td>", "<table>"],
        correct: 3,
        pembahasan: "<table> adalah tag utama struktur tabel."
    },
    {
        q: "Apa fungsi dari tag <br> ?",
        a: ["Membuat garis horizontal", "Memisahkan halaman", "Membuat baris baru", "Menebalkan teks"],
        correct: 2,
        pembahasan: "<br> digunakan untuk line break."
    },
    {
        q: "Tag apa yang digunakan untuk menampilkan teks tebal?",
        a: ["<bold>", "<b>", "<strong>", "<fat>"],
        correct: 1,
        pembahasan: "<b> menampilkan teks bold sebagai visual style."
    },
    {
        q: "Apa fungsi tag <strong> ?",
        a: ["Menambah warna", "Menandai teks penting", "Membuat miring", "Menambah ukuran font"],
        correct: 1,
        pembahasan: "<strong> memberi makna semantik bahwa teks penting."
    },
    {
        q: "Tag yang digunakan untuk membuat input text pada formulir adalah...",
        a: ["<input type='text'>", "<form text>", "<textbox>", "<input> tanpa atribut"],
        correct: 0,
        pembahasan: "Input text ditentukan dengan type='text'."
    },
    {
        q: "Tag apa yang digunakan untuk membuat dropdown?",
        a: ["<list>", "<input>", "<select>", "<dropdown>"],
        correct: 2,
        pembahasan: "<select> adalah tag dropdown."
    },
    {
        q: "Tag apa yang digunakan untuk memasukkan file CSS?",
        a: ["<style>", "<script>", "<css>", "<link>"],
        correct: 3,
        pembahasan: "<link> digunakan untuk menghubungkan file CSS eksternal."
    },
    {
        q: "Atribut apa yang wajib ada di tag <img> selain src?",
        a: ["href", "alt", "id", "width"],
        correct: 1,
        pembahasan: "alt penting untuk aksesibilitas."
    },
    {
        q: "Tag <title> berada di bagian...",
        a: ["<body>", "<header>", "<head>", "<footer>"],
        correct: 2,
        pembahasan: "<title> berada dalam <head>."
    },
    {
        q: "Tag apa yang digunakan untuk membuat kotak/section blok?",
        a: ["<div>", "<span>", "<p>", "<box>"],
        correct: 0,
        pembahasan: "<div> adalah container elemen blok."
    },
    {
        q: "Tag <span> digunakan untuk...",
        a: ["Elemen inline", "Elemen blok", "Judul", "Gambar"],
        correct: 0,
        pembahasan: "<span> adalah elemen inline."
    },
    {
        q: "Untuk menampilkan garis horizontal digunakan tag...",
        a: ["<line>", "<hr>", "<br>", "<border>"],
        correct: 1,
        pembahasan: "<hr> menampilkan garis pemisah."
    },
    {
        q: "Atribut 'target=\"_blank\"' digunakan untuk...",
        a: ["Membuka link di tab baru", "Membuat link tidak aktif", "Membuat link menjadi besar", "Menyembunyikan link"],
        correct: 0,
        pembahasan: "_blank membuka link pada tab baru."
    },
    {
        q: "Tag apa yang digunakan untuk menyisipkan video?",
        a: ["<movie>", "<media>", "<video>", "<vid>"],
        correct: 2,
        pembahasan: "<video> digunakan untuk menampilkan video."
    },
    {
        q: "Tag <meta> biasanya digunakan untuk...",
        a: ["Menampilkan gambar", "Memberi informasi metadata halaman", "Membuat link", "Membuat tabel"],
        correct: 1,
        pembahasan: "<meta> digunakan untuk metadata seperti charset dan SEO."
    },
    {
        q: "Elemen untuk menampilkan kode program adalah...",
        a: ["<pre>", "<code>", "<script>", "<mono>"],
        correct: 1,
        pembahasan: "<code> menampilkan teks dengan gaya code."
    },
    {
        q: "Tag <pre> berfungsi untuk...",
        a: ["Menampilkan gambar", "Menjaga format teks asli", "Membuat garis", "Menampilkan icon"],
        correct: 1,
        pembahasan: "<pre> mempertahankan spasi dan line break."
    },
    {
        q: "HTML termasuk jenis bahasa...",
        a: ["Pemrograman", "Markup", "Compiler", "Database"],
        correct: 1,
        pembahasan: "HTML adalah Markup Language, bukan bahasa pemrograman."
    },
    {
        q: "Tag yang digunakan untuk memasukkan JavaScript adalah...",
        a: ["<js>", "<javascript>", "<script>", "<code>"],
        correct: 2,
        pembahasan: "<script> digunakan untuk menyisipkan JavaScript."
    },
    {
        q: "Atribut 'id' harus...",
        a: ["Boleh duplikat", "Harus unik", "Tidak boleh digunakan", "Sama dengan class"],
        correct: 1,
        pembahasan: "Id bersifat unik di setiap halaman."
    },
    {
        q: "Tag yang digunakan untuk membuat komentar di HTML adalah...",
        a: ["// komentar", "<!-- komentar -->", "/** komentar */", "# komentar"],
        correct: 1,
        pembahasan: "Komentar HTML ditulis dengan <!-- -->."
    },
    {
        q: "Tag <footer> biasanya berisi...",
        a: ["Navigasi utama", "Judul halaman", "Informasi akhir halaman", "Gambar utama"],
        correct: 2,
        pembahasan: "Footer berisi informasi bagian bawah seperti copyright."
    },
    {
        q: "Tag yang digunakan untuk membuat list bernomor adalah...",
        a: ["<ol>", "<ul>", "<li>", "<list>"],
        correct: 0,
        pembahasan: "<ol> digunakan untuk ordered list."
    },
    {
        q: "Tag <iframe> digunakan untuk...",
        a: ["Menampilkan gambar", "Menyisipkan halaman lain", "Membuat form", "Menampilkan audio"],
        correct: 1,
        pembahasan: "<iframe> dapat menampilkan website lain di dalam halaman."
    }
];
