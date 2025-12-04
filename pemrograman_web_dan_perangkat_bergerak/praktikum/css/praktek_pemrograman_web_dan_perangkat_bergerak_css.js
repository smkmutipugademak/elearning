let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
  {
    "q": "Kepanjangan dari CSS adalah....",
    "a": ["Cascading Style Sheets", "Creative Style System", "Computer Style Selector", "Coded Style Syntax", "Common Style Sheet"],
    "correct": 0,
    "pembahasan": "CSS adalah singkatan dari Cascading Style Sheets."
  },
  {
    "q": "Properti CSS yang digunakan untuk mengubah warna teks adalah....",
    "a": ["font-color", "color", "text-color", "text-style", "font-style"],
    "correct": 1,
    "pembahasan": "color digunakan untuk mengubah warna teks."
  },
  {
    "q": "Properti CSS untuk mengubah ukuran font adalah....",
    "a": ["font-style", "text-size", "font-size", "size", "text-style"],
    "correct": 2,
    "pembahasan": "font-size mengatur ukuran teks."
  },
  {
    "q": "Cara menambahkan CSS eksternal adalah....",
    "a": ["<style src='style.css'>", "<css link='style.css'>", "<link rel='stylesheet' href='style.css'>", "<import css='style.css'>", "<script src='style.css'>"],
    "correct": 2,
    "pembahasan": "CSS eksternal dihubungkan memakai <link rel='stylesheet' … >."
  },
  {
    "q": "Selector yang digunakan untuk memilih elemen berdasarkan id adalah....",
    "a": [".idname", "#idname", "id:idname", "id(name)", "@idname"],
    "correct": 1,
    "pembahasan": "Id menggunakan tanda #."
  },
  {
    "q": "Selector untuk memilih elemen berdasarkan class adalah....",
    "a": ["#", ".", "*", "&", "$"],
    "correct": 1,
    "pembahasan": "Class menggunakan simbol titik (.)."
  },
  {
    "q": "Properti untuk memberi warna latar belakang adalah....",
    "a": ["background", "bg-color", "background-color", "color-background", "canvas-color"],
    "correct": 2,
    "pembahasan": "background-color digunakan untuk warna latar."
  },
  {
    "q": "Perintah CSS untuk membuat teks menjadi tebal adalah....",
    "a": ["font-weight: bold;", "font-style: bold;", "text-bold: true;", "font-bold: yes;", "text-weight: bold;"],
    "correct": 0,
    "pembahasan": "font-weight mengatur ketebalan teks."
  },
  {
    "q": "Properti untuk membuat sudut elemen menjadi membulat adalah....",
    "a": ["border", "border-style", "border-color", "border-radius", "border-circle"],
    "correct": 3,
    "pembahasan": "border-radius digunakan untuk membuat sudut melengkung."
  },
  {
    "q": "Kegunaan utama dari CSS adalah....",
    "a": ["Struktur halaman", "Interaksi program", "Tampilan dan gaya halaman", "Database", "Logika server"],
    "correct": 2,
    "pembahasan": "CSS berfungsi untuk memperindah tampilan."
  },
  {
    "q": "Properti untuk memberi jarak di luar elemen adalah....",
    "a": ["padding", "margin", "border", "gap", "spacing"],
    "correct": 1,
    "pembahasan": "Margin adalah jarak luar elemen."
  },
  {
    "q": "Properti untuk memberi jarak di dalam elemen adalah....",
    "a": ["padding", "margin", "space", "distance", "inner-spacing"],
    "correct": 0,
    "pembahasan": "Padding adalah jarak dalam elemen."
  },
  {
    "q": "Fungsi dari perintah display: flex; adalah....",
    "a": ["Menghapus elemen", "Membuat layout menjadi responsif dengan flexbox", "Membuat teks tebal", "Mengatur warna background", "Mengatur jenis font"],
    "correct": 1,
    "pembahasan": "Flexbox digunakan untuk membuat tata letak fleksibel."
  },
  {
    "q": "Perintah untuk mengatur posisi teks di tengah adalah....",
    "a": ["text-align: center;", "align: center;", "center-text: true;", "position: center;", "content: center;"],
    "correct": 0,
    "pembahasan": "text-align digunakan untuk rata kiri/kanan/tengah."
  },
  {
    "q": "Properti untuk menghilangkan garis bawah pada link adalah....",
    "a": ["text-decoration: none;", "underline: false;", "border: none;", "line: remove;", "text-style: no-line;"],
    "correct": 0,
    "pembahasan": "text-decoration mengatur garis teks, termasuk underline."
  },
  {
    "q": "Sintaks penulisan komentar pada CSS adalah....",
    "a": ["", "// komentar", "/* komentar */", "# komentar", "-- komentar"],
    "correct": 2,
    "pembahasan": "Komentar CSS memakai /* … */."
  },
  {
    "q": "Properti CSS untuk mengatur jarak antar huruf adalah....",
    "a": ["letter-spacing", "word-spacing", "text-gap", "space-letter", "character-gap"],
    "correct": 0,
    "pembahasan": "letter-spacing mengatur jarak antar huruf."
  },
  {
    "q": "Properti CSS yang mengatur tinggi baris adalah....",
    "a": ["line-height", "height-line", "text-height", "row-size", "line-spacing"],
    "correct": 0,
    "pembahasan": "line-height mengatur tinggi baris teks."
  },
  {
    "q": "Perintah untuk mengatur gambar sebagai background adalah....",
    "a": ["background-img", "background-image", "image-bg", "img-background", "wallpaper"],
    "correct": 1,
    "pembahasan": "background-image digunakan untuk gambar latar."
  },
  {
    "q": "Nilai display yang membuat elemen berada dalam satu baris dan ukurannya bisa diatur adalah....",
    "a": ["block", "inline", "inline-block", "flex", "grid"],
    "correct": 2,
    "pembahasan": "inline-block adalah gabungan inline dan block."
  },
  {
    "q": "Properti untuk mengatur bayangan elemen adalah....",
    "a": ["shadow", "element-shadow", "box-shadow", "border-shadow", "drop-shadow"],
    "correct": 2,
    "pembahasan": "box-shadow untuk membuat efek bayangan kotak."
  },
  {
    "q": "Perintah untuk membuat teks miring adalah....",
    "a": ["font-mirror", "text-italic", "font-style: italic;", "italic: true;", "text-decoration: italic;"],
    "correct": 2,
    "pembahasan": "font-style mengatur gaya tulisan seperti italic."
  },
  {
    "q": "Selector * pada CSS digunakan untuk adalah....",
    "a": ["Memilih elemen tertentu", "Memilih id", "Memilih semua elemen", "Memilih class", "Memilih elemen root"],
    "correct": 2,
    "pembahasan": "* disebut universal selector."
  },
  {
    "q": "Properti untuk mengatur border menjadi putus-putus adalah....",
    "a": ["border: dashed;", "border-line: dot;", "border-type: cut;", "border-style: broken;", "border-decoration: dash;"],
    "correct": 0,
    "pembahasan": "border-style dapat menggunakan dashed, dotted, solid."
  },
  {
    "q": "Fungsi dari properti z-index adalah....",
    "a": ["Mengubah ukuran elemen", "Mengatur urutan tumpukan elemen (layering)", "Mengubah warna elemen", "Mengatur teks", "Mengatur transparansi"],
    "correct": 1,
    "pembahasan": "z-index mengatur layer elemen (mana yang di depan/belakang)."
  },
  {
    "q": "Perintah untuk membuat elemen diposisikan secara absolut adalah....",
    "a": ["position: fixed;", "position: relative;", "position: absolute;", "position: center;", "position: static;"],
    "correct": 2,
    "pembahasan": "absolute membuat elemen bisa diposisikan bebas."
  },
  {
    "q": "Fungsi dari perintah flex-direction: column; adalah....",
    "a": ["Menjadikan isi flex satu baris", "Menghilangkan elemen", "Mengatur item flex menjadi kolom (vertikal)", "Mengatur warna elemen", "Mengatur jarak antar kolom"],
    "correct": 2,
    "pembahasan": "flex-direction mengatur arah susunan item."
  },
  {
    "q": "Unit CSS yang bersifat relatif terhadap ukuran font adalah....",
    "a": ["px", "cm", "em", "mm", "pt"],
    "correct": 2,
    "pembahasan": "em relatif terhadap ukuran font induk."
  },
  {
    "q": "Properti untuk memberi efek transisi adalah....",
    "a": ["animation", "transition", "transform", "fade", "movement"],
    "correct": 1,
    "pembahasan": "transition digunakan untuk animasi perubahan halus."
  },
  {
    "q": "Fungsi dari perintah transform: scale(1.2); adalah....",
    "a": ["Memiringkan elemen", "Mengubah warna elemen", "Membesarkan elemen 20%", "Mengatur opacity elemen", "Menggeser elemen"],
    "correct": 2,
    "pembahasan": "scale memperbesar atau memperkecil ukuran elemen."
  },
  {
    "q": "Properti CSS yang digunakan untuk mengatur transparansi adalah....",
    "a": ["opacity", "transparent", "alpha", "visibility", "clarity"],
    "correct": 0,
    "pembahasan": "opacity mengatur tingkat transparansi elemen."
  },
  {
    "q": "Apa kepanjangan dari HTML?",
    "a": ["Hyper Text Markup Language", "High Transfer Marking Language", "Hyperlink Text Making List", "Hyper Tool Markup Logic", "Home Tool Markup Language"],
    "correct": 0,
    "pembahasan": "HTML adalah singkatan dari Hyper Text Markup Language."
  },
  {
    "q": "Tag apa yang digunakan untuk membuat paragraf?",
    "a": ["<div>", "<p>", "<span>", "<para>", "<text>"],
    "correct": 1,
    "pembahasan": "<p> adalah tag untuk paragraf."
  },
  {
    "q": "Elemen apa yang digunakan untuk membuat judul terbesar?",
    "a": ["<h1>", "<h6>", "<header>", "<title>", "<head>"],
    "correct": 0,
    "pembahasan": "<h1> adalah heading terbesar."
  },
  {
    "q": "Tag apa yang digunakan untuk membuat tautan/link?",
    "a": ["<link>", "<a>", "<url>", "<href>", "<hyperlink>"],
    "correct": 1,
    "pembahasan": "<a> digunakan untuk membuat hyperlink."
  },
  {
    "q": "Atribut apa pada tag <img> untuk menampilkan teks alternatif saat gambar gagal dimuat?",
    "a": ["text", "alt", "title", "caption", "src"],
    "correct": 1,
    "pembahasan": "Atribut alt menampilkan deskripsi gambar."
  },
  {
    "q": "Tag manakah yang digunakan untuk menampilkan daftar tidak berurutan?",
    "a": ["<ul>", "<ol>", "<li>", "<list>", "<dl>"],
    "correct": 0,
    "pembahasan": "<ul> digunakan untuk unordered list."
  },
  {
    "q": "Tag apa yang digunakan untuk menampilkan tabel?",
    "a": ["<tab>", "<tr>", "<td>", "<table>", "<grid>"],
    "correct": 3,
    "pembahasan": "<table> adalah tag utama struktur tabel."
  },
  {
    "q": "Apa fungsi dari tag <br> ?",
    "a": ["Membuat garis horizontal", "Memisahkan halaman", "Membuat baris baru", "Menebalkan teks", "Membuat huruf miring"],
    "correct": 2,
    "pembahasan": "<br> digunakan untuk line break."
  },
  {
    "q": "Tag apa yang digunakan untuk menampilkan teks tebal?",
    "a": ["<bold>", "<b>", "<strong>", "<fat>", "<black>"],
    "correct": 1,
    "pembahasan": "<b> menampilkan teks bold sebagai visual style."
  },
  {
    "q": "Apa fungsi tag <strong> ?",
    "a": ["Menambah warna", "Menandai teks penting", "Membuat miring", "Menambah ukuran font", "Membuat garis bawah"],
    "correct": 1,
    "pembahasan": "<strong> memberi makna semantik bahwa teks penting."
  },
  {
    "q": "Tag yang digunakan untuk membuat input text pada formulir adalah...",
    "a": ["<input type='text'>", "<form text>", "<textbox>", "<input> tanpa atribut", "<field type='text'>"],
    "correct": 0,
    "pembahasan": "Input text ditentukan dengan type='text'."
  },
  {
    "q": "Tag apa yang digunakan untuk membuat dropdown?",
    "a": ["<list>", "<input>", "<select>", "<dropdown>", "<option>"],
    "correct": 2,
    "pembahasan": "<select> adalah tag dropdown."
  },
  {
    "q": "Tag apa yang digunakan untuk memasukkan file CSS?",
    "a": ["<style>", "<script>", "<css>", "<link>", "<import>"],
    "correct": 3,
    "pembahasan": "<link> digunakan untuk menghubungkan file CSS eksternal."
  },
  {
    "q": "Atribut apa yang wajib ada di tag <img> selain src?",
    "a": ["href", "alt", "id", "width", "link"],
    "correct": 1,
    "pembahasan": "alt penting untuk aksesibilitas."
  },
  {
    "q": "Tag <title> berada di bagian...",
    "a": ["<body>", "<header>", "<head>", "<footer>", "<section>"],
    "correct": 2,
    "pembahasan": "<title> berada dalam <head>."
  },
  {
    "q": "Tag apa yang digunakan untuk membuat kotak/section blok?",
    "a": ["<div>", "<span>", "<p>", "<box>", "<block>"],
    "correct": 0,
    "pembahasan": "<div> adalah container elemen blok."
  },
  {
    "q": "Tag <span> digunakan untuk...",
    "a": ["Elemen inline", "Elemen blok", "Judul", "Gambar", "Tabel"],
    "correct": 0,
    "pembahasan": "<span> adalah elemen inline."
  },
  {
    "q": "Untuk menampilkan garis horizontal digunakan tag...",
    "a": ["<line>", "<hr>", "<br>", "<border>", "<divider>"],
    "correct": 1,
    "pembahasan": "<hr> menampilkan garis pemisah."
  },
  {
    "q": "Atribut 'target=\"_blank\"' digunakan untuk...",
    "a": ["Membuka link di tab baru", "Membuat link tidak aktif", "Membuat link menjadi besar", "Menyembunyikan link", "Menghapus cache halaman"],
    "correct": 0,
    "pembahasan": "_blank membuka link pada tab baru."
  },
  {
    "q": "Tag apa yang digunakan untuk menyisipkan video?",
    "a": ["<movie>", "<media>", "<video>", "<vid>", "<film>"],
    "correct": 2,
    "pembahasan": "<video> digunakan untuk menampilkan video."
  },
  {
    "q": "Tag <meta> biasanya digunakan untuk...",
    "a": ["Menampilkan gambar", "Memberi informasi metadata halaman", "Membuat link", "Membuat tabel", "Memutar audio"],
    "correct": 1,
    "pembahasan": "<meta> digunakan untuk metadata seperti charset dan SEO."
  },
  {
    "q": "Elemen untuk menampilkan kode program adalah...",
    "a": ["<pre>", "<code>", "<script>", "<mono>", "<program>"],
    "correct": 1,
    "pembahasan": "<code> menampilkan teks dengan gaya code."
  },
  {
    "q": "Tag <pre> berfungsi untuk...",
    "a": ["Menampilkan gambar", "Menjaga format teks asli", "Membuat garis", "Menampilkan icon", "Menghapus spasi"],
    "correct": 1,
    "pembahasan": "<pre> mempertahankan spasi dan line break."
  },
  {
    "q": "HTML termasuk jenis bahasa...",
    "a": ["Pemrograman", "Markup", "Compiler", "Database", "Scripting"],
    "correct": 1,
    "pembahasan": "HTML adalah Markup Language, bukan bahasa pemrograman."
  },
  {
    "q": "Tag yang digunakan untuk memasukkan JavaScript adalah...",
    "a": ["<js>", "<javascript>", "<script>", "<code>", "<java>"],
    "correct": 2,
    "pembahasan": "<script> digunakan untuk menyisipkan JavaScript."
  },
  {
    "q": "Atribut 'id' harus...",
    "a": ["Boleh duplikat", "Harus unik", "Tidak boleh digunakan", "Sama dengan class", "Boleh kosong"],
    "correct": 1,
    "pembahasan": "Id bersifat unik di setiap halaman."
  },
  {
    "q": "Tag yang digunakan untuk membuat komentar di HTML adalah...",
    "a": ["// komentar", "", "/** komentar */", "# komentar", "` komentar `"],
    "correct": 1,
    "pembahasan": "Komentar HTML ditulis dengan ."
  },
  {
    "q": "Tag <footer> biasanya berisi...",
    "a": ["Navigasi utama", "Judul halaman", "Informasi akhir halaman", "Gambar utama", "Sidebar"],
    "correct": 2,
    "pembahasan": "Footer berisi informasi bagian bawah seperti copyright."
  },
  {
    "q": "Tag yang digunakan untuk membuat list bernomor adalah...",
    "a": ["<ol>", "<ul>", "<li>", "<list>", "<el>"],
    "correct": 0,
    "pembahasan": "<ol> digunakan untuk ordered list."
  },
  {
    "q": "Tag <iframe> digunakan untuk...",
    "a": ["Menampilkan gambar", "Menyisipkan halaman lain", "Membuat form", "Menampilkan audio", "Membuat popup"],
    "correct": 1,
    "pembahasan": "<iframe> dapat menampilkan website lain di dalam halaman."
  }
]
