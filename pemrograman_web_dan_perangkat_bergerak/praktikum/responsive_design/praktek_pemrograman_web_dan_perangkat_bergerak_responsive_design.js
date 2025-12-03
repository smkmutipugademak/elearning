let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Fungsi utama JavaScript dalam pemrograman web adalah....",
        a: ["Mengatur struktur halaman", "Memberi gaya tampilan", "Menambah interaktivitas", "Menyimpan data di server", "Membuat database"],
        correct: 2,
        pembahasan: "JavaScript digunakan untuk membuat halaman web menjadi interaktif."
    },
    {
        q: "Perintah untuk menampilkan teks di console adalah....",
        a: ["print()", "echo()", "console.log()", "show()", "write()"],
        correct: 2,
        pembahasan: "console.log() digunakan untuk debugging."
    },
    {
        q: "Cara membuat variabel di JavaScript adalah....",
        a: ["var x = 10;", "let x = 10;", "const x = 10;", "Semua benar", "make x = 10;"],
        correct: 3,
        pembahasan: "Ketiga cara tersebut valid untuk membuat variabel."
    },
    {
        q: "Fungsi JavaScript yang berjalan ketika tombol diklik biasanya ditulis di....",
        a: ["onclick", "onpress", "onhover", "onstart", "onchange"],
        correct: 0,
        pembahasan: "onclick digunakan untuk event klik."
    },
    {
        q: "Perintah untuk mengambil elemen berdasarkan id adalah....",
        a: ["getElement('id')", "query('#id')", "document.getElementById()", "document.id()", "get.id()"],
        correct: 2,
        pembahasan: "document.getElementById() mengambil elemen berdasarkan id."
    },
    {
        q: "Tipe data array ditandai dengan....",
        a: ["{}", "[]", "<>", "()", "//"],
        correct: 1,
        pembahasan: "Array menggunakan tanda kurung siku []."
    },
    {
        q: "Keluaran dari perintah typeof 'Hello' adalah....",
        a: ["string", "text", "word", "character", "undefined"],
        correct: 0,
        pembahasan: "typeof mengembalikan tipe data, yaitu string."
    },
    {
        q: "Operator perbandingan yang memeriksa nilai dan tipe adalah....",
        a: ["==", "!=", "===", "~=", "<=>"],
        correct: 2,
        pembahasan: "=== membandingkan tipe dan nilai."
    },
    {
        q: "Fungsi JSON.parse() digunakan untuk....",
        a: ["Mengubah JSON menjadi object", "Mengubah object menjadi JSON", "Memvalidasi JSON", "Menjalankan JSON", "Menghapus JSON"],
        correct: 0,
        pembahasan: "JSON.parse() mengubah string JSON ke object."
    },
    {
        q: "Event yang terjadi saat halaman selesai dimuat adalah....",
        a: ["onload", "onready", "onopen", "onstart", "onclose"],
        correct: 0,
        pembahasan: "onload dijalankan ketika halaman sudah selesai dimuat."
    },
    {
        q: "Cara membuat fungsi dalam JavaScript adalah....",
        a: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "create function myFunc()", "method myFunc() {}"],
        correct: 0,
        pembahasan: "JavaScript memakai keyword function."
    },
    {
        q: "Metode array untuk menambah data di akhir adalah....",
        a: ["push()", "pop()", "shift()", "add()", "insert()"],
        correct: 0,
        pembahasan: "push() menambah elemen di belakang array."
    },
    {
        q: "Metode yang digunakan untuk menghapus elemen terakhir array adalah....",
        a: ["remove()", "pop()", "shift()", "delete()", "drop()"],
        correct: 1,
        pembahasan: "pop() menghapus elemen terakhir."
    },
    {
        q: "Perintah untuk mengubah isi elemen HTML adalah....",
        a: ["element.value", "element.innerHTML", "element.changeText", "element.update", "element.content"],
        correct: 1,
        pembahasan: "innerHTML digunakan untuk mengubah isi elemen."
    },
    {
        q: "querySelector('#judul') berarti memilih elemen berdasarkan....",
        a: ["tag", "class", "id", "nama file", "atribut"],
        correct: 2,
        pembahasan: "# menunjukkan selector id."
    },
    {
        q: "Fungsi preventDefault() digunakan untuk....",
        a: ["Mencegah error", "Mencegah aksi default event", "Menghapus event", "Mencegah submit form", "Mempercepat loading"],
        correct: 1,
        pembahasan: "preventDefault() menghentikan perilaku bawaan."
    },
    {
        q: "Hasil dari operasi 5 + '5' adalah....",
        a: ["10", "55", "Error", "NaN", "25"],
        correct: 1,
        pembahasan: "String + number menghasilkan penggabungan string."
    },
    {
        q: "Hasil dari operasi 5 == '5' adalah....",
        a: ["true", "false", "Error", "undefined", "null"],
        correct: 0,
        pembahasan: "== membandingkan nilai tanpa tipe."
    },
    {
        q: "Untuk membuat pop-up alert digunakan....",
        a: ["show()", "alert()", "popup()", "display()", "notify()"],
        correct: 1,
        pembahasan: "alert() menampilkan kotak pesan sederhana."
    },
    {
        q: "Fungsi setInterval() digunakan untuk....",
        a: ["Menjalankan kode sekali", "Menjalankan kode berulang dalam interval waktu", "Menunda eksekusi kode", "Menghentikan proses", "Menghapus interval"],
        correct: 1,
        pembahasan: "setInterval menjalankan fungsi secara berkala."
    },
    {
        q: "Fungsi yang menunda eksekusi kode adalah....",
        a: ["wait()", "delay()", "timeout()", "setTimeout()", "pause()"],
        correct: 3,
        pembahasan: "setTimeout menunda eksekusi dalam milidetik."
    },
    {
        q: "DOM adalah singkatan dari....",
        a: ["Document Object Model", "Digital Object Module", "Data Object Manager", "Document Operation Mode", "Disk Operating Mechanism"],
        correct: 0,
        pembahasan: "DOM merepresentasikan struktur halaman web."
    },
    {
        q: "Fungsi addEventListener() digunakan untuk....",
        a: ["Menghapus event", "Menambahkan event handler", "Membuat halaman baru", "Menutup browser", "Mengubah style elemen"],
        correct: 1,
        pembahasan: "addEventListener() menambahkan event pada elemen."
    },
    {
        q: "Perintah untuk mengecek panjang array adalah....",
        a: ["array.size()", "array.length", "array.count()", "array.total()", "array.height"],
        correct: 1,
        pembahasan: "length berisi jumlah elemen array."
    },
    {
        q: "Fungsi yang digunakan untuk mengecek apakah suatu nilai bukan angka adalah....",
        a: ["isNotNumber()", "isNaN()", "checkNaN()", "NaN()", "isInteger()"],
        correct: 1,
        pembahasan: "isNaN() mengecek apakah nilai bukan angka."
    },
    {
        q: "Kata kunci untuk kondisi percabangan adalah....",
        a: ["while", "if", "for", "switch", "loop"],
        correct: 1,
        pembahasan: "if digunakan untuk percabangan."
    },
    {
        q: "Keluaran dari Boolean(0) adalah....",
        a: ["true", "false", "undefined", "NaN", "null"],
        correct: 1,
        pembahasan: "0 dianggap sebagai nilai false."
    },
    {
        q: "Method array untuk menggabungkan elemen menjadi string adalah....",
        a: ["join()", "link()", "merge()", "implode()", "concat()"],
        correct: 0,
        pembahasan: "join() menggabungkan array menjadi string."
    },
    {
        q: "Symbol {} dalam JavaScript digunakan untuk membuat....",
        a: ["Array", "Object", "Function", "Loop", "String"],
        correct: 1,
        pembahasan: "Curly braces {} membuat object literal."
    },
    {
        q: "Fungsi return dalam sebuah fungsi adalah....",
        a: ["Menghentikan program", "Mengembalikan nilai", "Menghapus variabel", "Memanggil fungsi lain", "Menambah parameter"],
        correct: 1,
        pembahasan: "return mengembalikan nilai dari fungsi."
    }
];
