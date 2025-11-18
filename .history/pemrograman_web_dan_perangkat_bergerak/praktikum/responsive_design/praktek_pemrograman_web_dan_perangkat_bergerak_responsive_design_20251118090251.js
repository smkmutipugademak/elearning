let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa fungsi utama JavaScript dalam pemrograman web?",
        a: ["Mengatur struktur halaman", "Memberi gaya tampilan", "Menambah interaktivitas", "Menyimpan data di server"],
        correct: 2,
        pembahasan: "JavaScript digunakan untuk membuat halaman web menjadi interaktif."
    },
    {
        q: "Perintah untuk menampilkan teks di console adalah...",
        a: ["print()", "echo()", "console.log()", "show()"],
        correct: 2,
        pembahasan: "console.log() digunakan untuk debugging."
    },
    {
        q: "Bagaimana cara membuat variabel di JavaScript?",
        a: ["var x = 10;", "let x = 10;", "const x = 10;", "Semua benar"],
        correct: 3,
        pembahasan: "Ketiga cara tersebut valid untuk membuat variabel."
    },
    {
        q: "Fungsi JavaScript yang berjalan ketika tombol diklik biasanya ditulis di...",
        a: ["onclick", "onpress", "onhover", "onstart"],
        correct: 0,
        pembahasan: "onclick digunakan untuk event klik."
    },
    {
        q: "Perintah untuk mengambil elemen berdasarkan id adalah...",
        a: ["getElement('id')", "query('#id')", "document.getElementById()", "document.id()"],
        correct: 2,
        pembahasan: "document.getElementById() mengambil elemen berdasarkan id."
    },
    {
        q: "Tipe data array ditandai dengan...",
        a: ["{}", "[]", "<>", "()"],
        correct: 1,
        pembahasan: "Array menggunakan tanda kurung siku []."
    },
    {
        q: "Apa keluaran dari: typeof 'Hello' ?",
        a: ["string", "text", "word", "character"],
        correct: 0,
        pembahasan: "typeof mengembalikan tipe data, yaitu string."
    },
    {
        q: "Operator perbandingan yang memeriksa nilai dan tipe adalah...",
        a: ["==", "!=", "===", "~="],
        correct: 2,
        pembahasan: "=== membandingkan tipe dan nilai."
    },
    {
        q: "Fungsi JSON.parse() digunakan untuk...",
        a: ["Mengubah JSON menjadi object", "Mengubah object menjadi JSON", "Memvalidasi JSON", "Menjalankan JSON"],
        correct: 0,
        pembahasan: "JSON.parse() mengubah string JSON ke object."
    },
    {
        q: "Event yang terjadi saat halaman selesai dimuat adalah...",
        a: ["onload", "onready", "onopen", "onstart"],
        correct: 0,
        pembahasan: "onload dijalankan ketika halaman sudah selesai dimuat."
    },
    {
        q: "Cara membuat fungsi dalam JavaScript adalah...",
        a: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "create function myFunc()"],
        correct: 0,
        pembahasan: "JavaScript memakai keyword function."
    },
    {
        q: "Metode array untuk menambah data di akhir adalah...",
        a: ["push()", "pop()", "shift()", "add()"],
        correct: 0,
        pembahasan: "push() menambah elemen di belakang array."
    },
    {
        q: "Metode yang digunakan untuk menghapus elemen terakhir array adalah...",
        a: ["remove()", "pop()", "shift()", "delete()"],
        correct: 1,
        pembahasan: "pop() menghapus elemen terakhir."
    },
    {
        q: "Perintah untuk mengubah isi elemen HTML adalah...",
        a: ["element.value", "element.innerHTML", "element.changeText", "element.update"],
        correct: 1,
        pembahasan: "innerHTML digunakan untuk mengubah isi elemen."
    },
    {
        q: "querySelector('#judul') berarti memilih elemen berdasarkan...",
        a: ["tag", "class", "id", "nama file"],
        correct: 2,
        pembahasan: "# menunjukkan selector id."
    },
    {
        q: "Fungsi preventDefault() digunakan untuk...",
        a: ["Mencegah error", "Mencegah aksi default event", "Menghapus event", "Mencegah submit form"],
        correct: 1,
        pembahasan: "preventDefault() menghentikan perilaku bawaan."
    },
    {
        q: "Apa hasil dari 5 + '5' ?",
        a: ["10", "55", "Error", "NaN"],
        correct: 1,
        pembahasan: "String + number menghasilkan penggabungan string."
    },
    {
        q: "Apa hasil dari 5 == '5' ?",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "== membandingkan nilai tanpa tipe."
    },
    {
        q: "Untuk membuat pop-up alert digunakan...",
        a: ["show()", "alert()", "popup()", "display()"],
        correct: 1,
        pembahasan: "alert() menampilkan kotak pesan sederhana."
    },
    {
        q: "Fungsi setInterval() digunakan untuk...",
        a: ["Menjalankan kode sekali", "Menjalankan kode berulang dalam interval waktu", "Menunda eksekusi kode", "Menghentikan proses"],
        correct: 1,
        pembahasan: "setInterval menjalankan fungsi secara berkala."
    },
    {
        q: "Fungsi yang menunda eksekusi kode adalah...",
        a: ["wait()", "delay()", "timeout()", "setTimeout()"],
        correct: 3,
        pembahasan: "setTimeout menunda eksekusi dalam milidetik."
    },
    {
        q: "DOM adalah singkatan dari...",
        a: ["Document Object Model", "Digital Object Module", "Data Object Manager", "Document Operation Mode"],
        correct: 0,
        pembahasan: "DOM merepresentasikan struktur halaman web."
    },
    {
        q: "Apa fungsi addEventListener() ?",
        a: ["Menghapus event", "Menambahkan event handler", "Membuat halaman baru", "Menutup browser"],
        correct: 1,
        pembahasan: "addEventListener() menambahkan event pada elemen."
    },
    {
        q: "Perintah untuk mengecek panjang array adalah...",
        a: ["array.size()", "array.length", "array.count()", "array.total()"],
        correct: 1,
        pembahasan: "length berisi jumlah elemen array."
    },
    {
        q: "Fungsi yang digunakan untuk mengecek apakah suatu nilai bukan angka adalah...",
        a: ["isNotNumber()", "isNaN()", "checkNaN()", "NaN()"],
        correct: 1,
        pembahasan: "isNaN() mengecek apakah nilai bukan angka."
    },
    {
        q: "Kata kunci untuk kondisi percabangan adalah...",
        a: ["while", "if", "for", "switch"],
        correct: 1,
        pembahasan: "if digunakan untuk percabangan."
    },
    {
        q: "Apa keluaran dari Boolean(0) ?",
        a: ["true", "false", "undefined", "NaN"],
        correct: 1,
        pembahasan: "0 dianggap sebagai nilai false."
    },
    {
        q: "Method array untuk menggabungkan elemen menjadi string adalah...",
        a: ["join()", "link()", "merge()", "implode()"],
        correct: 0,
        pembahasan: "join() menggabungkan array menjadi string."
    },
    {
        q: "Symbol {} dalam JavaScript digunakan untuk membuat...",
        a: ["Array", "Object", "Function", "Loop"],
        correct: 1,
        pembahasan: "Curly braces {} membuat object literal."
    },
    {
        q: "Apa fungsi return dalam sebuah fungsi?",
        a: ["Menghentikan program", "Mengembalikan nilai", "Menghapus variabel", "Memanggil fungsi lain"],
        correct: 1,
        pembahasan: "return mengembalikan nilai dari fungsi."
    }
];
