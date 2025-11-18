let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa kepanjangan dari CSS?",
        a: ["Cascading Style Sheets", "Creative Style System", "Computer Style Selector", "Coded Style Syntax"],
        correct: 0,
        pembahasan: "CSS adalah singkatan dari Cascading Style Sheets."
    },
    {
        q: "Properti CSS apa yang digunakan untuk mengubah warna teks?",
        a: ["font-color", "color", "text-color", "text-style"],
        correct: 1,
        pembahasan: "color digunakan untuk mengubah warna teks."
    },
    {
        q: "Properti CSS untuk mengubah ukuran font adalah...",
        a: ["font-style", "text-size", "font-size", "size"],
        correct: 2,
        pembahasan: "font-size mengatur ukuran teks."
    },
    {
        q: "Bagaimana cara menambahkan CSS eksternal?",
        a: ["<style src='style.css'>", "<css link='style.css'>", "<link rel='stylesheet' href='style.css'>", "<import css='style.css'>"],
        correct: 2,
        pembahasan: "CSS eksternal dihubungkan memakai <link rel='stylesheet' … >."
    },
    {
        q: "Selector apa yang digunakan untuk memilih elemen berdasarkan id?",
        a: [".idname", "#idname", "id:idname", "id(name)"],
        correct: 1,
        pembahasan: "Id menggunakan tanda #."
    },
    {
        q: "Selector untuk memilih elemen berdasarkan class adalah...",
        a: ["#", ".", "*", "&"],
        correct: 1,
        pembahasan: "Class menggunakan simbol titik (.)."
    },
    {
        q: "Properti untuk memberi warna latar belakang adalah...",
        a: ["background", "bg-color", "background-color", "color-background"],
        correct: 2,
        pembahasan: "background-color digunakan untuk warna latar."
    },
    {
        q: "Perintah CSS untuk membuat teks menjadi tebal adalah...",
        a: ["font-weight: bold;", "font-style: bold;", "text-bold: true;", "font-bold: yes;"],
        correct: 0,
        pembahasan: "font-weight mengatur ketebalan teks."
    },
    {
        q: "Properti untuk membuat sudut elemen menjadi membulat adalah...",
        a: ["border", "border-style", "border-color", "border-radius"],
        correct: 3,
        pembahasan: "border-radius digunakan untuk membuat sudut melengkung."
    },
    {
        q: "CSS digunakan untuk mengatur...",
        a: ["Struktur halaman", "Interaksi program", "Tampilan dan gaya halaman", "Database"],
        correct: 2,
        pembahasan: "CSS berfungsi untuk memperindah tampilan."
    },
    {
        q: "Properti untuk memberi jarak di luar elemen adalah...",
        a: ["padding", "margin", "border", "gap"],
        correct: 1,
        pembahasan: "Margin adalah jarak luar elemen."
    },
    {
        q: "Properti untuk memberi jarak di dalam elemen adalah...",
        a: ["padding", "margin", "space", "distance"],
        correct: 0,
        pembahasan: "Padding adalah jarak dalam elemen."
    },
    {
        q: "Apa fungsi display: flex; ?",
        a: ["Menghapus elemen", "Membuat layout menjadi responsif dengan flexbox", "Membuat teks tebal", "Mengatur warna background"],
        correct: 1,
        pembahasan: "Flexbox digunakan untuk membuat tata letak fleksibel."
    },
    {
        q: "Untuk mengatur posisi teks di tengah digunakan...",
        a: ["text-align: center;", "align: center;", "center-text: true;", "position: center;"],
        correct: 0,
        pembahasan: "text-align digunakan untuk rata kiri/kanan/tengah."
    },
    {
        q: "Properti untuk menghilangkan garis bawah pada link adalah...",
        a: ["text-decoration: none;", "underline: false;", "border: none;", "line: remove;"],
        correct: 0,
        pembahasan: "text-decoration mengatur garis teks, termasuk underline."
    },
    {
        q: "Sintaks komentar pada CSS adalah...",
        a: ["<!-- komentar -->", "// komentar", "/* komentar */", "# komentar"],
        correct: 2,
        pembahasan: "Komentar CSS memakai /* … */."
    },
    {
        q: "Properti CSS untuk mengatur jarak antar huruf adalah...",
        a: ["letter-spacing", "word-spacing", "text-gap", "space-letter"],
        correct: 0,
        pembahasan: "letter-spacing mengatur jarak antar huruf."
    },
    {
        q: "Properti CSS yang mengatur tinggi baris adalah...",
        a: ["line-height", "height-line", "text-height", "row-size"],
        correct: 0,
        pembahasan: "line-height mengatur tinggi baris teks."
    },
    {
        q: "Untuk mengatur gambar sebagai background digunakan...",
        a: ["background-img", "background-image", "image-bg", "img-background"],
        correct: 1,
        pembahasan: "background-image digunakan untuk gambar latar."
    },
    {
        q: "Nilai display yang membuat elemen berada dalam satu baris dan ukuran bisa diatur adalah...",
        a: ["block", "inline", "inline-block", "flex"],
        correct: 2,
        pembahasan: "inline-block adalah gabungan inline dan block."
    },
    {
        q: "Properti untuk mengatur bayangan elemen adalah...",
        a: ["shadow", "element-shadow", "box-shadow", "border-shadow"],
        correct: 2,
        pembahasan: "box-shadow untuk membuat efek bayangan kotak."
    },
    {
        q: "Untuk membuat teks miring digunakan...",
        a: ["font-mirror", "text-italic", "font-style: italic;", "italic: true;"],
        correct: 2,
        pembahasan: "font-style mengatur gaya tulisan seperti italic."
    },
    {
        q: "Selector * digunakan untuk...",
        a: ["Memilih elemen tertentu", "Memilih id", "Memilih semua elemen", "Memilih class"],
        correct: 2,
        pembahasan: "* disebut universal selector."
    },
    {
        q: "Properti untuk mengatur border menjadi putus-putus adalah...",
        a: ["border: dashed;", "border-line: dot;", "border-type: cut;", "border-style: broken;"],
        correct: 0,
        pembahasan: "border-style dapat menggunakan dashed, dotted, solid."
    },
    {
        q: "Apa fungsi z-index?",
        a: ["Mengubah ukuran elemen", "Mengatur urutan tumpukan elemen", "Mengubah warna elemen", "Mengatur teks"],
        correct: 1,
        pembahasan: "z-index mengatur layer elemen (mana yang di depan/belakang)."
    },
    {
        q: "Untuk membuat elemen diposisikan absolut digunakan...",
        a: ["position: fixed;", "position: relative;", "position: absolute;", "position: center;"],
        correct: 2,
        pembahasan: "absolute membuat elemen bisa diposisikan bebas."
    },
    {
        q: "Apa fungsi flex-direction: column; ?",
        a: ["Menjadikan isi flex satu baris", "Menghilangkan elemen", "Mengatur item flex menjadi kolom", "Mengatur warna elemen"],
        correct: 2,
        pembahasan: "flex-direction mengatur arah susunan item."
    },
    {
        q: "Unit CSS yang bersifat relatif terhadap ukuran font adalah...",
        a: ["px", "cm", "em", "mm"],
        correct: 2,
        pembahasan: "em relatif terhadap ukuran font induk."
    },
    {
        q: "Properti untuk memberi efek transisi adalah...",
        a: ["animation", "transition", "transform", "fade"],
        correct: 1,
        pembahasan: "transition digunakan untuk animasi perubahan halus."
    },
    {
        q: "Apa fungsi transform: scale(1.2); ?",
        a: ["Memiringkan elemen", "Mengubah warna elemen", "Membesarkan elemen 20%", "Mengatur opacity elemen"],
        correct: 2,
        pembahasan: "scale memperbesar atau memperkecil ukuran elemen."
    },
    {
        q: "Properti CSS yang digunakan untuk mengatur transparansi adalah...",
        a: ["opacity", "transparent", "alpha", "visibility"],
        correct: 0,
        pembahasan: "opacity mengatur tingkat transparansi elemen."
    }
];

