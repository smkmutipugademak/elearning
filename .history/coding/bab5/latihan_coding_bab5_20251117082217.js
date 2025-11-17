let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0; // in seconds

const quizData = [
    {
        q: "Fungsi ASCII(x) dalam MySQL digunakan untuk?",
        a: [
            "Mengubah angka menjadi karakter",
            "Menghasilkan kode ASCII dari karakter pertama string x",
            "Menghitung panjang string",
            "Menghapus spasi dari string"
        ],
        correct: 1,
        pembahasan: "ASCII(x) mengembalikan nilai kode ASCII dari karakter pertama dalam string."
    },
    {
        q: "Fungsi yang mengubah kode ASCII menjadi karakter adalah?",
        a: ["ASCII()", "CHAR()", "LENGTH()", "CONCAT()"],
        correct: 1,
        pembahasan: "CHAR(x,y,z,…) menghasilkan string berdasarkan kode ASCII yang ditentukan."
    },
    {
        q: "Untuk mengetahui panjang sebuah string digunakan fungsi?",
        a: ["CHAR()", "LENGTH()", "CONCAT()", "REVERSE()"],
        correct: 1,
        pembahasan: "LENGTH(X) mengembalikan panjang string X."
    },
    {
        q: "Fungsi CONCAT() berfungsi untuk?",
        a: [
            "Menggabungkan beberapa string menjadi satu",
            "Menghapus karakter dari string",
            "Menghitung jumlah karakter",
            "Mencari posisi karakter"
        ],
        correct: 0,
        pembahasan: "CONCAT() digunakan untuk menggabungkan beberapa string."
    },
    {
        q: "Jika salah satu parameter CONCAT() bernilai NULL maka hasilnya?",
        a: ["NULL", "0", "Kosong", "Error"],
        correct: 0,
        pembahasan: "CONCAT() menghasilkan NULL jika ada argumen NULL."
    },
    {
        q: "Fungsi INSERT(X,Y,Z,J) digunakan untuk?",
        a: [
            "Menambah string J ke X mulai posisi Y sepanjang Z karakter",
            "Menghapus string dari X",
            "Mengubah nilai angka",
            "Membalik urutan string"
        ],
        correct: 0,
        pembahasan: "INSERT() mengganti isi string X dengan string J mulai dari posisi Y sebanyak Z karakter."
    },
    {
        q: "Fungsi untuk mencari posisi substring Y dalam string X adalah?",
        a: ["LOCATE()", "INSTR()", "LEFT()", "MID()"],
        correct: 1,
        pembahasan: "INSTR(X,Y) menghasilkan posisi Y di dalam string X."
    },
    {
        q: "LOCATE(X,Y,Z) digunakan untuk?",
        a: [
            "Menemukan X dalam Y mulai dari posisi ke-Z",
            "Menemukan Y dalam X",
            "Menghapus spasi",
            "Menggabungkan string"
        ],
        correct: 0,
        pembahasan: "LOCATE(X,Y,Z) mencari posisi string X di dalam Y mulai posisi ke-Z."
    },
    {
        q: "LEFT(X,Y) berfungsi untuk?",
        a: [
            "Mengambil Y karakter dari kiri string X",
            "Mengambil Y karakter dari kanan string X",
            "Membalik string",
            "Menghapus spasi"
        ],
        correct: 0,
        pembahasan: "LEFT(X,Y) mengambil sejumlah Y karakter dari sisi kiri string."
    },
    {
        q: "RIGHT(X,Y) berfungsi untuk?",
        a: [
            "Mengambil Y karakter dari kanan string X",
            "Mengambil Y karakter dari kiri string X",
            "Membalik urutan string",
            "Menghapus spasi"
        ],
        correct: 0,
        pembahasan: "RIGHT(X,Y) mengambil karakter dari sisi kanan string."
    },
    {
        q: "MID(X,Y,Z) digunakan untuk?",
        a: [
            "Mengambil Z karakter dari string X mulai posisi ke Y",
            "Menghapus string X",
            "Membalik urutan huruf",
            "Menambahkan string baru"
        ],
        correct: 0,
        pembahasan: "MID() digunakan untuk mengambil bagian tertentu dari string."
    },
    {
        q: "Fungsi LTRIM(X) digunakan untuk?",
        a: [
            "Menghapus spasi di kiri string X",
            "Menghapus spasi di kanan string X",
            "Menghapus semua spasi",
            "Membalik urutan string"
        ],
        correct: 0,
        pembahasan: "LTRIM() menghapus spasi di sebelah kiri string."
    },
    {
        q: "REVERSE(X) menghasilkan?",
        a: [
            "Pembalikan urutan karakter string X",
            "Nilai ASCII karakter pertama",
            "Gabungan string",
            "Nilai panjang string"
        ],
        correct: 0,
        pembahasan: "REVERSE() membalik urutan karakter string."
    },
    {
        q: "Format tanggal standar MySQL adalah?",
        a: [
            "dd-mm-yyyy HH:ii:ss",
            "yyyy-mm-dd HH:ii:ss",
            "mm-dd-yyyy hh:mm:ss",
            "yyyy-dd-mm ii:HH:ss"
        ],
        correct: 1,
        pembahasan: "MySQL menggunakan format yyyy-mm-dd HH:ii:ss."
    },
    {
        q: "CURDATE() menampilkan?",
        a: ["Tanggal sistem saat ini", "Waktu sistem", "Hari", "Tahun"],
        correct: 0,
        pembahasan: "CURDATE() menampilkan tanggal saat ini dari sistem."
    },
    {
        q: "CURTIME() digunakan untuk menampilkan?",
        a: ["Tanggal", "Jam sistem saat ini", "Nama bulan", "Hari"],
        correct: 1,
        pembahasan: "CURTIME() mengembalikan waktu sistem (jam:menit:detik)."
    },
    {
        q: "NOW() atau CURRENT_TIMESTAMP() menampilkan?",
        a: [
            "Tanggal saja",
            "Jam saja",
            "Tanggal dan waktu saat ini",
            "Nama hari"
        ],
        correct: 2,
        pembahasan: "NOW() mengembalikan tanggal dan waktu sistem saat ini."
    },
    {
        q: "DATE_FORMAT(x, format) digunakan untuk?",
        a: [
            "Mengonversi tanggal ke format tertentu",
            "Mengambil nama hari",
            "Menghitung selisih tanggal",
            "Menampilkan jam"
        ],
        correct: 0,
        pembahasan: "DATE_FORMAT() menampilkan tanggal sesuai format yang diinginkan."
    },
    {
        q: "DAY_NAME(X) berfungsi untuk?",
        a: [
            "Menampilkan nama hari dari tanggal",
            "Menampilkan nomor hari",
            "Menampilkan bulan",
            "Menampilkan tahun"
        ],
        correct: 0,
        pembahasan: "DAY_NAME(X) mengembalikan nama hari (misal: Monday, Tuesday)."
    },
    {
        q: "DAYOFMONTH(DATE) digunakan untuk?",
        a: [
            "Menampilkan nomor hari dalam bulan",
            "Menampilkan bulan",
            "Menampilkan tahun",
            "Menampilkan hari dalam minggu"
        ],
        correct: 0,
        pembahasan: "DAYOFMONTH() mengembalikan nilai hari dalam bulan."
    },
    {
        q: "MONTH(DATE) menampilkan?",
        a: ["Nomor bulan dari tanggal", "Nama hari", "Tahun", "Jam"],
        correct: 0,
        pembahasan: "MONTH() mengembalikan angka bulan dari tanggal."
    },
    {
        q: "YEAR(DATE) menampilkan?",
        a: ["Tanggal", "Bulan", "Tahun", "Detik"],
        correct: 2,
        pembahasan: "YEAR() digunakan untuk mendapatkan tahun dari tanggal."
    },
    {
        q: "Fungsi HOUR(TIME) menghasilkan?",
        a: ["Jam", "Menit", "Detik", "Tanggal"],
        correct: 0,
        pembahasan: "HOUR() mengambil bagian jam dari waktu."
    },
    {
        q: "MINUTE(TIME) menghasilkan?",
        a: ["Jam", "Menit", "Detik", "Hari"],
        correct: 1,
        pembahasan: "MINUTE() mengambil bagian menit dari waktu."
    },
    {
        q: "SECOND(TIME) menghasilkan?",
        a: ["Detik", "Menit", "Jam", "Tanggal"],
        correct: 0,
        pembahasan: "SECOND() mengambil bagian detik dari waktu."
    },
    {
        q: "Fungsi SUM(field) digunakan untuk?",
        a: [
            "Menghitung jumlah record",
            "Menjumlahkan semua nilai dalam kolom",
            "Menampilkan rata-rata",
            "Menentukan nilai maksimum"
        ],
        correct: 1,
        pembahasan: "SUM() digunakan untuk menjumlahkan semua nilai dalam kolom."
    },
    {
        q: "AVG(field) digunakan untuk?",
        a: ["Nilai rata-rata kolom", "Nilai maksimum", "Jumlah data", "Nilai minimum"],
        correct: 0,
        pembahasan: "AVG() menghitung nilai rata-rata dari kolom."
    },
    {
        q: "Fungsi MAX(field) digunakan untuk?",
        a: [
            "Menentukan nilai maksimum",
            "Menentukan nilai minimum",
            "Menghitung jumlah data",
            "Menghitung rata-rata"
        ],
        correct: 0,
        pembahasan: "MAX() mengembalikan nilai maksimum dari kolom."
    },
    {
        q: "Fungsi MIN(field) digunakan untuk?",
        a: [
            "Menentukan nilai minimum dari kolom",
            "Menentukan nilai maksimum",
            "Menghitung rata-rata",
            "Menghitung total"
        ],
        correct: 0,
        pembahasan: "MIN() digunakan untuk mencari nilai terkecil dari kolom."
    },
    {
        q: "COUNT(X) digunakan untuk?",
        a: [
            "Menghitung jumlah record",
            "Menjumlahkan nilai kolom",
            "Menampilkan maksimum",
            "Menentukan tanggal"
        ],
        correct: 0,
        pembahasan: "COUNT() menghitung jumlah record atau baris data."
    },
    {
        q: "Operator penjumlahan dalam MySQL adalah?",
        a: ["+", "-", "*", "/"],
        correct: 0,
        pembahasan: "Operator + digunakan untuk operasi penjumlahan."
    },
    {
        q: "Operator pengurangan dalam MySQL adalah?",
        a: ["-", "+", "*", "%"],
        correct: 0,
        pembahasan: "Operator - digunakan untuk pengurangan nilai."
    },
    {
        q: "Operator untuk perkalian adalah?",
        a: ["*", "/", "%", "+"],
        correct: 0,
        pembahasan: "Tanda * digunakan untuk operasi perkalian."
    },
    {
        q: "Operator pembagian dalam MySQL adalah?",
        a: ["/", "*", "+", "%"],
        correct: 0,
        pembahasan: "Tanda / digunakan untuk pembagian."
    },
    {
        q: "Simbol untuk sisa hasil bagi (modulus) adalah?",
        a: ["%", "/", "*", "-"],
        correct: 0,
        pembahasan: "Simbol % digunakan untuk menghitung sisa pembagian."
    },
    {
        q: "DATABASE() digunakan untuk?",
        a: [
            "Mengetahui database yang sedang digunakan",
            "Membuat database baru",
            "Menghapus database",
            "Menampilkan semua tabel"
        ],
        correct: 0,
        pembahasan: "DATABASE() mengembalikan nama database aktif saat ini."
    },
    {
        q: "LAST_INSERT_ID() digunakan untuk?",
        a: [
            "Menampilkan ID terakhir yang dimasukkan",
            "Menampilkan jumlah record",
            "Menampilkan nama database",
            "Menampilkan user aktif"
        ],
        correct: 0,
        pembahasan: "LAST_INSERT_ID() menampilkan ID terakhir pada kolom AUTO_INCREMENT."
    },
    {
        q: "SESSION_USER digunakan untuk?",
        a: [
            "Menampilkan nama pengguna yang sedang login",
            "Menampilkan nama database",
            "Menampilkan waktu sistem",
            "Menampilkan jumlah tabel"
        ],
        correct: 0,
        pembahasan: "SESSION_USER menampilkan user yang sedang aktif di MySQL."
    },
    {
        q: "Untuk mengetahui waktu lengkap (tanggal dan jam) digunakan fungsi?",
        a: ["CURDATE()", "CURTIME()", "NOW()", "DAY_NAME()"],
        correct: 2,
        pembahasan: "NOW() atau CURRENT_TIMESTAMP() menampilkan waktu lengkap sistem."
    },
    {
        q: "SELECT fungsi(ekspresi) FROM namatabel; digunakan untuk?",
        a: [
            "Menjalankan fungsi MySQL terhadap data tabel",
            "Membuat tabel baru",
            "Menghapus tabel",
            "Menampilkan struktur tabel"
        ],
        correct: 0,
        pembahasan: "Perintah ini menjalankan fungsi MySQL terhadap data dari tabel."
    }
];