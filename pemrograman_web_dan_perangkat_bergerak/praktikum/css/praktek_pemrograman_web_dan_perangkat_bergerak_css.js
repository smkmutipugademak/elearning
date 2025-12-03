let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Kepanjangan dari CSS adalah....",
        a: ["Cascading Style Sheets", "Creative Style System", "Computer Style Selector", "Coded Style Syntax", "Common Style Sheet"],
        correct: 0,
        pembahasan: "CSS adalah singkatan dari Cascading Style Sheets."
    },
    {
        q: "Properti CSS yang digunakan untuk mengubah warna teks adalah....",
        a: ["font-color", "color", "text-color", "text-style", "font-style"],
        correct: 1,
        pembahasan: "color digunakan untuk mengubah warna teks."
    },
    {
        q: "Properti CSS untuk mengubah ukuran font adalah....",
        a: ["font-style", "text-size", "font-size", "size", "text-style"],
        correct: 2,
        pembahasan: "font-size mengatur ukuran teks."
    },
    {
        q: "Cara menambahkan CSS eksternal adalah....",
        a: ["<style src='style.css'>", "<css link='style.css'>", "<link rel='stylesheet' href='style.css'>", "<import css='style.css'>", "<script src='style.css'>"],
        correct: 2,
        pembahasan: "CSS eksternal dihubungkan memakai <link rel='stylesheet' … >."
    },
    {
        q: "Selector yang digunakan untuk memilih elemen berdasarkan id adalah....",
        a: [".idname", "#idname", "id:idname", "id(name)", "@idname"],
        correct: 1,
        pembahasan: "Id menggunakan tanda #."
    },
    {
        q: "Selector untuk memilih elemen berdasarkan class adalah....",
        a: ["#", ".", "*", "&", "$"],
        correct: 1,
        pembahasan: "Class menggunakan simbol titik (.)."
    },
    {
        q: "Properti untuk memberi warna latar belakang adalah....",
        a: ["background", "bg-color", "background-color", "color-background", "canvas-color"],
        correct: 2,
        pembahasan: "background-color digunakan untuk warna latar."
    },
    {
        q: "Perintah CSS untuk membuat teks menjadi tebal adalah....",
        a: ["font-weight: bold;", "font-style: bold;", "text-bold: true;", "font-bold: yes;", "text-weight: bold;"],
        correct: 0,
        pembahasan: "font-weight mengatur ketebalan teks."
    },
    {
        q: "Properti untuk membuat sudut elemen menjadi membulat adalah....",
        a: ["border", "border-style", "border-color", "border-radius", "border-circle"],
        correct: 3,
        pembahasan: "border-radius digunakan untuk membuat sudut melengkung."
    },
    {
        q: "Kegunaan utama dari CSS adalah....",
        a: ["Struktur halaman", "Interaksi program", "Tampilan dan gaya halaman", "Database", "Logika server"],
        correct: 2,
        pembahasan: "CSS berfungsi untuk memperindah tampilan."
    },
    {
        q: "Properti untuk memberi jarak di luar elemen adalah....",
        a: ["padding", "margin", "border", "gap", "spacing"],
        correct: 1,
        pembahasan: "Margin adalah jarak luar elemen."
    },
    {
        q: "Properti untuk memberi jarak di dalam elemen adalah....",
        a: ["padding", "margin", "space", "distance", "inner-spacing"],
        correct: 0,
        pembahasan: "Padding adalah jarak dalam elemen."
    },
    {
        q: "Fungsi dari perintah display: flex; adalah....",
        a: ["Menghapus elemen", "Membuat layout menjadi responsif dengan flexbox", "Membuat teks tebal", "Mengatur warna background", "Mengatur jenis font"],
        correct: 1,
        pembahasan: "Flexbox digunakan untuk membuat tata letak fleksibel."
    },
    {
        q: "Perintah untuk mengatur posisi teks di tengah adalah....",
        a: ["text-align: center;", "align: center;", "center-text: true;", "position: center;", "content: center;"],
        correct: 0,
        pembahasan: "text-align digunakan untuk rata kiri/kanan/tengah."
    },
    {
        q: "Properti untuk menghilangkan garis bawah pada link adalah....",
        a: ["text-decoration: none;", "underline: false;", "border: none;", "line: remove;", "text-style: no-line;"],
        correct: 0,
        pembahasan: "text-decoration mengatur garis teks, termasuk underline."
    },
    {
        q: "Sintaks penulisan komentar pada CSS adalah....",
        a: ["", "// komentar", "/* komentar */", "# komentar", "-- komentar"],
        correct: 2,
        pembahasan: "Komentar CSS memakai /* … */."
    },
    {
        q: "Properti CSS untuk mengatur jarak antar huruf adalah....",
        a: ["letter-spacing", "word-spacing", "text-gap", "space-letter", "character-gap"],
        correct: 0,
        pembahasan: "letter-spacing mengatur jarak antar huruf."
    },
    {
        q: "Properti CSS yang mengatur tinggi baris adalah....",
        a: ["line-height", "height-line", "text-height", "row-size", "line-spacing"],
        correct: 0,
        pembahasan: "line-height mengatur tinggi baris teks."
    },
    {
        q: "Perintah untuk mengatur gambar sebagai background adalah....",
        a: ["background-img", "background-image", "image-bg", "img-background", "wallpaper"],
        correct: 1,
        pembahasan: "background-image digunakan untuk gambar latar."
    },
    {
        q: "Nilai display yang membuat elemen berada dalam satu baris dan ukurannya bisa diatur adalah....",
        a: ["block", "inline", "inline-block", "flex", "grid"],
        correct: 2,
        pembahasan: "inline-block adalah gabungan inline dan block."
    },
    {
        q: "Properti untuk mengatur bayangan elemen adalah....",
        a: ["shadow", "element-shadow", "box-shadow", "border-shadow", "drop-shadow"],
        correct: 2,
        pembahasan: "box-shadow untuk membuat efek bayangan kotak."
    },
    {
        q: "Perintah untuk membuat teks miring adalah....",
        a: ["font-mirror", "text-italic", "font-style: italic;", "italic: true;", "text-decoration: italic;"],
        correct: 2,
        pembahasan: "font-style mengatur gaya tulisan seperti italic."
    },
    {
        q: "Selector * pada CSS digunakan untuk adalah....",
        a: ["Memilih elemen tertentu", "Memilih id", "Memilih semua elemen", "Memilih class", "Memilih elemen root"],
        correct: 2,
        pembahasan: "* disebut universal selector."
    },
    {
        q: "Properti untuk mengatur border menjadi putus-putus adalah....",
        a: ["border: dashed;", "border-line: dot;", "border-type: cut;", "border-style: broken;", "border-decoration: dash;"],
        correct: 0,
        pembahasan: "border-style dapat menggunakan dashed, dotted, solid."
    },
    {
        q: "Fungsi dari properti z-index adalah....",
        a: ["Mengubah ukuran elemen", "Mengatur urutan tumpukan elemen (layering)", "Mengubah warna elemen", "Mengatur teks", "Mengatur transparansi"],
        correct: 1,
        pembahasan: "z-index mengatur layer elemen (mana yang di depan/belakang)."
    },
    {
        q: "Perintah untuk membuat elemen diposisikan secara absolut adalah....",
        a: ["position: fixed;", "position: relative;", "position: absolute;", "position: center;", "position: static;"],
        correct: 2,
        pembahasan: "absolute membuat elemen bisa diposisikan bebas."
    },
    {
        q: "Fungsi dari perintah flex-direction: column; adalah....",
        a: ["Menjadikan isi flex satu baris", "Menghilangkan elemen", "Mengatur item flex menjadi kolom (vertikal)", "Mengatur warna elemen", "Mengatur jarak antar kolom"],
        correct: 2,
        pembahasan: "flex-direction mengatur arah susunan item."
    },
    {
        q: "Unit CSS yang bersifat relatif terhadap ukuran font adalah....",
        a: ["px", "cm", "em", "mm", "pt"],
        correct: 2,
        pembahasan: "em relatif terhadap ukuran font induk."
    },
    {
        q: "Properti untuk memberi efek transisi adalah....",
        a: ["animation", "transition", "transform", "fade", "movement"],
        correct: 1,
        pembahasan: "transition digunakan untuk animasi perubahan halus."
    },
    {
        q: "Fungsi dari perintah transform: scale(1.2); adalah....",
        a: ["Memiringkan elemen", "Mengubah warna elemen", "Membesarkan elemen 20%", "Mengatur opacity elemen", "Menggeser elemen"],
        correct: 2,
        pembahasan: "scale memperbesar atau memperkecil ukuran elemen."
    },
    {
        q: "Properti CSS yang digunakan untuk mengatur transparansi adalah....",
        a: ["opacity", "transparent", "alpha", "visibility", "clarity"],
        correct: 0,
        pembahasan: "opacity mengatur tingkat transparansi elemen."
    }
];
