let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0; // in seconds

const quizData = [
    {
        q: "Perintah SQL untuk menambahkan data ke dalam tabel disebut dengan?",
        a: ["UPDATE", "INSERT", "SELECT", "DELETE", "CREATE"],
        correct: 1,
        pembahasan: "INSERT digunakan untuk menambahkan (mengisikan) data ke dalam tabel."
    },
    {
        q: "Sintaks dasar perintah INSERT yang benar adalah?",
        a: [
            "INSERT VALUE INTO nama_tabel (field1, field2)",
            "INSERT INTO nama_tabel VALUE (‘nilai1’, ‘nilai2’)",
            "INSERT INTO nama_tabel VALUES (‘nilai1’, ‘nilai2’)",
            "INSERT VALUE (‘nilai1’, ‘nilai2’)",
            "ADD INTO nama_tabel VALUES (‘nilai1’, ‘nilai2’)"
        ],
        correct: 2,
        pembahasan: "Sintaks yang benar adalah INSERT INTO nama_tabel VALUES (‘nilai1’, ‘nilai2’)."
    },
    {
        q: "Perintah SQL yang digunakan untuk menampilkan data adalah?",
        a: ["SHOW", "DISPLAY", "SELECT", "VIEW", "PRINT"],
        correct: 2,
        pembahasan: "SELECT digunakan untuk menampilkan data dari tabel."
    },
    {
        q: "Query untuk menampilkan semua kolom dan semua data dari tabel siswa adalah?",
        a: [
            "SELECT ALL FROM siswa;",
            "SELECT FROM siswa;",
            "SHOW ALL siswa;",
            "SELECT * FROM siswa;",
            "DISPLAY * siswa;"
        ],
        correct: 3,
        pembahasan: "Tanda * berarti menampilkan semua kolom dalam tabel."
    },
    {
        q: "Dalam query SELECT * FROM siswa;, tanda * berarti?",
        a: [
            "Semua tabel",
            "Semua kolom atau field",
            "Semua baris",
            "Semua database",
            "Semua query"
        ],
        correct: 1,
        pembahasan: "Tanda * digunakan untuk menampilkan semua kolom (field) dalam tabel."
    },
    {
        q: "Jika hanya ingin menampilkan kolom tertentu saja dari tabel, maka digunakan?",
        a: ["SELECT ALL", "SELECT FIELD", "SELECT *", "SELECT RECORD", "SELECT LIMIT"],
        correct: 1,
        pembahasan: "SELECT FIELD digunakan untuk menampilkan field tertentu saja."
    },
    {
        q: "Query untuk menampilkan hanya kolom nim dan nama dari tabel siswa adalah?",
        a: [
            "SELECT ALL nim, nama FROM siswa;",
            "SELECT * nim, nama FROM siswa;",
            "SELECT nim, nama FROM siswa;",
            "SELECT FIELD nim, nama siswa;",
            "SELECT siswa nim, nama;"
        ],
        correct: 2,
        pembahasan: "Query SELECT nim, nama FROM siswa; menampilkan hanya kolom yang disebutkan."
    },
    {
        q: "Fungsi klausa WHERE dalam perintah SELECT adalah untuk?",
        a: [
            "Menghapus data dari tabel",
            "Menentukan kondisi pengambilan data",
            "Mengurutkan hasil query",
            "Menambahkan kolom baru",
            "Menyalin data antar tabel"
        ],
        correct: 1,
        pembahasan: "WHERE digunakan untuk menentukan kondisi tertentu dalam pengambilan data."
    },
    {
        q: "Query SELECT * FROM siswa WHERE nim = '123040208'; digunakan untuk?",
        a: [
            "Menghapus record dengan NIM tersebut",
            "Menampilkan semua record dari tabel siswa",
            "Menampilkan record dengan NIM tertentu",
            "Mengubah data dengan NIM tersebut",
            "Menampilkan semua NIM dalam tabel"
        ],
        correct: 2,
        pembahasan: "Query ini hanya menampilkan record dengan NIM 123040208."
    },
    {
        q: "Perintah untuk menampilkan nama dan NIP dari tabel wali adalah?",
        a: [
            "SELECT wali FROM nama, nip;",
            "SELECT nip, nama FROM wali;",
            "SELECT nip nama FROM wali;",
            "SELECT * nama, nip FROM wali;",
            "DISPLAY nama, nip wali;"
        ],
        correct: 1,
        pembahasan: "SELECT nip, nama FROM wali; menampilkan kolom nip dan nama dari tabel wali."
    },
    {
        q: "Dalam perintah INSERT INTO siswa VALUES (‘123040203’, ‘WAWAN ADI’, ‘19721201’); nilai terakhir berfungsi sebagai?",
        a: ["Nama siswa", "Kode wali", "NIP dosen", "Nomor urut", "Kode mata kuliah"],
        correct: 1,
        pembahasan: "Nilai terakhir adalah kode wali yang menjadi relasi antar tabel."
    },
    {
        q: "Pernyataan SELECT ALL FROM siswa; setara dengan?",
        a: [
            "SELECT * FROM siswa;",
            "SELECT siswa ALL;",
            "SELECT siswa *;",
            "SHOW ALL siswa;",
            "DISPLAY * siswa;"
        ],
        correct: 0,
        pembahasan: "SELECT ALL dan SELECT * menghasilkan keluaran yang sama, yaitu semua field."
    },
    {
        q: "Dalam SQL, nilai string diapit dengan?",
        a: ["[ ]", "‘ ’", "{ }", "“ ”", "( )"],
        correct: 1,
        pembahasan: "String dalam SQL diapit oleh tanda kutip satu (‘ ’)."
    },
    {
        q: "Perintah INSERT INTO digunakan pada tahap?",
        a: ["Pembuatan tabel", "Pengisian data", "Penghapusan tabel", "Pemilihan data", "Penutupan database"],
        correct: 1,
        pembahasan: "INSERT digunakan saat proses pengisian data ke tabel."
    },
    {
        q: "Operator logika OR digunakan untuk?",
        a: [
            "Menggabungkan dua kondisi dan harus keduanya benar",
            "Menampilkan data jika salah satu kondisi benar",
            "Menolak semua kondisi",
            "Menampilkan data tanpa filter",
            "Menampilkan hasil yang salah"
        ],
        correct: 1,
        pembahasan: "Operator OR menampilkan hasil jika salah satu kondisi bernilai TRUE."
    },
    {
        q: "Fungsi utama perintah SELECT adalah?",
        a: ["Menambah data", "Menampilkan data", "Menghapus data", "Mengubah data", "Menyimpan data"],
        correct: 1,
        pembahasan: "SELECT digunakan untuk menampilkan data dari tabel."
    },
    {
        q: "Bagian nama_tabel pada query INSERT INTO menunjukkan?",
        a: ["Nama database", "Nama kolom", "Nama tabel yang akan diisi data", "Nama field yang dihapus", "Nama file SQL"],
        correct: 2,
        pembahasan: "Nama tabel menunjukkan tempat data akan dimasukkan."
    },
    {
        q: "Untuk menampilkan isi tabel dosen, query yang benar adalah?",
        a: [
            "SELECT ALL dosen;",
            "SELECT * FROM dosen;",
            "SELECT dosen FROM *;",
            "SELECT dosen *;",
            "SHOW dosen *;"
        ],
        correct: 1,
        pembahasan: "SELECT * FROM dosen; menampilkan semua data dari tabel dosen."
    },
    {
        q: "Query SELECT nim, wali FROM siswa WHERE nim = '123040208'; menampilkan?",
        a: [
            "Semua data dari tabel siswa",
            "Kolom nim dan wali dengan kondisi tertentu",
            "Seluruh kolom dengan semua record",
            "Data wali saja",
            "Hanya kolom nim tanpa filter"
        ],
        correct: 1,
        pembahasan: "Query menampilkan kolom nim dan wali dengan kondisi NIM tertentu."
    },
    {
        q: "Untuk mengisi data ke tabel wali dengan tiga nilai digunakan?",
        a: [
            "INSERT INTO wali VALUES (‘v1’, ‘v2’, ‘v3’);",
            "INSERT INTO wali (‘v1’, ‘v2’, ‘v3’);",
            "ADD INTO wali (‘v1’, ‘v2’, ‘v3’);",
            "APPEND wali (‘v1’, ‘v2’, ‘v3’);",
            "PUT wali (‘v1’, ‘v2’, ‘v3’);"
        ],
        correct: 0,
        pembahasan: "Format yang benar menggunakan kata kunci VALUES."
    },
    {
        q: "Kata kunci FROM pada query SELECT berfungsi untuk?",
        a: [
            "Menentukan kondisi filter",
            "Menentukan tabel sumber data",
            "Menentukan kolom hasil",
            "Mengurutkan hasil",
            "Membatasi jumlah data"
        ],
        correct: 1,
        pembahasan: "FROM menunjukkan asal data (nama tabel) yang akan diambil."
    },
    {
        q: "Perintah SELECT dan WHERE digunakan secara bersamaan untuk?",
        a: [
            "Menampilkan semua data",
            "Menampilkan field tertentu dengan kondisi tertentu",
            "Menghapus data dengan kondisi",
            "Mengubah data dalam tabel",
            "Membuat tabel baru"
        ],
        correct: 1,
        pembahasan: "Kombinasi SELECT dan WHERE digunakan untuk menampilkan data sesuai kondisi."
    },
    {
        q: "Perintah WHERE bisa digunakan pada?",
        a: ["INSERT", "DELETE", "SELECT", "CREATE", "DROP"],
        correct: 2,
        pembahasan: "WHERE digunakan untuk memberikan kondisi pada query SELECT."
    },
    {
        q: "Query SELECT * FROM siswa WHERE wali = '19721201'; digunakan untuk?",
        a: [
            "Menampilkan semua data dari tabel siswa",
            "Menampilkan data dengan wali tertentu",
            "Menghapus record wali tersebut",
            "Mengubah data wali",
            "Menampilkan semua wali"
        ],
        correct: 1,
        pembahasan: "Query ini menampilkan semua record siswa dengan wali bernilai 19721201."
    },
    {
        q: "Setiap perintah SQL diakhiri dengan?",
        a: [",", ".", ";", ":", "#"],
        correct: 2,
        pembahasan: "Setiap perintah SQL harus diakhiri dengan titik koma (;)."
    },
    {
        q: "Operator untuk menampilkan data selain dari nilai tertentu adalah?",
        a: ["=", "<", ">", "<>", "=="],
        correct: 3,
        pembahasan: "Operator <> digunakan untuk menyatakan 'tidak sama dengan'."
    },
    {
        q: "SQL merupakan bahasa yang digunakan untuk?",
        a: [
            "Membuat tampilan grafis",
            "Mengelola data dalam basis data",
            "Menulis program web",
            "Mengatur memori komputer",
            "Membuat file teks"
        ],
        correct: 1,
        pembahasan: "SQL digunakan untuk mengelola dan memanipulasi data dalam database."
    },
    {
        q: "Perintah SELECT nim, nama FROM siswa; akan menampilkan?",
        a: [
            "Semua kolom dari tabel siswa",
            "Hanya kolom nim dan nama dari tabel siswa",
            "Semua data dengan kondisi tertentu",
            "Field yang memiliki nilai null",
            "Tidak menampilkan apapun"
        ],
        correct: 1,
        pembahasan: "Query ini hanya menampilkan kolom nim dan nama dari tabel siswa."
    },
    {
        q: "Kata kunci SELECT ALL digunakan untuk?",
        a: [
            "Menampilkan seluruh record dan field",
            "Menampilkan satu field",
            "Menghapus data tabel",
            "Membatasi jumlah record",
            "Menampilkan struktur tabel"
        ],
        correct: 0,
        pembahasan: "SELECT ALL berfungsi untuk menampilkan semua data dari tabel."
    },
    {
        q: "Kata kunci SELECT RECORD digunakan untuk?",
        a: [
            "Menampilkan satu record berdasarkan kondisi",
            "Menampilkan semua field",
            "Menampilkan struktur tabel",
            "Menghapus satu record",
            "Menambahkan data baru"
        ],
        correct: 0,
        pembahasan: "SELECT RECORD (WHERE) digunakan untuk menampilkan record tertentu saja."
    },
    {
        q: "Perintah SQL digunakan untuk berinteraksi dengan?",
        a: ["Web browser", "Database", "File system", "Network", "Spreadsheet"],
        correct: 1,
        pembahasan: "SQL (Structured Query Language) digunakan untuk berkomunikasi dengan database."
    },
    {
        q: "Kapan perintah SELECT * FROM digunakan?",
        a: [
            "Ketika ingin menampilkan semua kolom dari tabel",
            "Ketika ingin menampilkan satu kolom saja",
            "Saat ingin menambah kolom baru",
            "Ketika ingin menghapus data",
            "Saat membuat tabel baru"
        ],
        correct: 0,
        pembahasan: "SELECT * FROM digunakan untuk menampilkan semua kolom dan data dari tabel."
    },
    {
        q: "Query SELECT nim, nama FROM siswa WHERE wali = '19721201'; akan menampilkan?",
        a: [
            "Semua kolom tabel siswa",
            "Kolom nim dan nama dengan wali tertentu",
            "Kolom wali saja",
            "Data wali dari tabel wali",
            "Semua record dari semua tabel"
        ],
        correct: 1,
        pembahasan: "Query ini memfilter data siswa berdasarkan wali yang bernilai '19721201'."
    },
    {
        q: "Bagian FROM pada perintah SELECT berfungsi untuk?",
        a: [
            "Menentukan kolom yang ditampilkan",
            "Menentukan tabel sumber data",
            "Menentukan kondisi filter",
            "Menentukan jumlah record",
            "Menentukan tipe data kolom"
        ],
        correct: 1,
        pembahasan: "FROM digunakan untuk menentukan tabel yang menjadi sumber data."
    },
    {
        q: "Query yang benar untuk menampilkan data dengan NIM 123040204 atau wali 19721204 adalah?",
        a: [
            "SELECT * FROM siswa WHERE nim = '123040204' OR wali = '19721204';",
            "SELECT * FROM siswa WHERE nim = '123040204' AND wali = '19721204';",
            "SELECT nim, wali FROM siswa;",
            "SELECT siswa WHERE nim OR wali;",
            "SELECT ALL FROM siswa;"
        ],
        correct: 0,
        pembahasan: "OR digunakan untuk menampilkan data jika salah satu kondisi terpenuhi."
    },
    {
        q: "Tanda petik satu (‘ ’) digunakan dalam SQL untuk menandai?",
        a: ["Nilai numerik", "Nilai string atau teks", "Nama tabel", "Nama kolom", "Operator logika"],
        correct: 1,
        pembahasan: "Nilai teks atau string dalam SQL harus diapit tanda kutip satu (‘ ’)."
    },
    {
        q: "Perintah SELECT * FROM siswa WHERE nim = '123040205'; akan menampilkan?",
        a: [
            "Semua data siswa",
            "Hanya data siswa dengan NIM 123040205",
            "Semua field dari tabel wali",
            "Hanya field nim",
            "Semua record tanpa kondisi"
        ],
        correct: 1,
        pembahasan: "WHERE membatasi hasil query hanya pada record dengan NIM tertentu."
    },
    {
        q: "Dalam SQL, tanda titik koma (;) berfungsi untuk?",
        a: [
            "Memisahkan kolom",
            "Menandai akhir perintah",
            "Menandai awal perintah",
            "Menggabungkan tabel",
            "Menandai nilai kosong"
        ],
        correct: 1,
        pembahasan: "Setiap perintah SQL diakhiri dengan tanda titik koma (;)."
    },
    {
        q: "Perintah INSERT INTO dapat menambahkan data ke?",
        a: ["Database", "Tabel", "Field", "File teks", "Server"],
        correct: 1,
        pembahasan: "INSERT INTO digunakan untuk menambahkan data ke dalam tabel tertentu."
    },
    {
        q: "Jika ingin menampilkan semua data dari tabel wali, perintah yang digunakan adalah?",
        a: [
            "SELECT ALL wali;",
            "SELECT * FROM wali;",
            "SELECT wali *;",
            "SHOW ALL wali;",
            "DISPLAY wali;"
        ],
        correct: 1,
        pembahasan: "SELECT * FROM wali; digunakan untuk menampilkan semua kolom dan record dari tabel wali."
    }
];