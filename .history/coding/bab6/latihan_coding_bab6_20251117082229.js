let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0; // in seconds

const quizData = [
    {
        q: "JOIN dalam SQL digunakan untuk?",
        a: [
            "Menggabungkan dua atau lebih tabel berdasarkan kolom yang berhubungan",
            "Menghapus data dari dua tabel sekaligus",
            "Menyalin isi tabel ke tabel lain",
            "Membuat tabel baru dari query"
        ],
        correct: 0,
        pembahasan: "JOIN digunakan untuk mengambil data dari beberapa tabel yang memiliki kolom relasi yang sama."
    },
    {
        q: "JOIN tanpa JOIN statement disebut juga sebagai?",
        a: ["Implicit Join", "Explicit Join", "Outer Join", "Self Join"],
        correct: 0,
        pembahasan: "JOIN tanpa JOIN statement disebut Implicit Join karena menggunakan WHERE, bukan ON."
    },
    {
        q: "Klausa yang digunakan untuk menyatakan kondisi penggabungan tabel pada JOIN tanpa JOIN statement adalah?",
        a: ["WHERE", "ON", "GROUP BY", "HAVING"],
        correct: 0,
        pembahasan: "JOIN tanpa JOIN statement menggunakan klausa WHERE untuk menghubungkan dua tabel."
    },
    {
        q: "Tanda pemisah antara tabel pada JOIN tanpa JOIN statement adalah?",
        a: [",", ";", "AND", "OR"],
        correct: 0,
        pembahasan: "Antara nama tabel dipisahkan dengan koma (,) sebelum klausa WHERE."
    },
    {
        q: "Sintaks dasar JOIN tanpa JOIN statement adalah?",
        a: [
            "SELECT ... FROM tabel1, tabel2 WHERE tabel1.key = tabel2.key",
            "SELECT ... INNER JOIN tabel2 ON tabel1.key = tabel2.key",
            "SELECT ... LEFT JOIN tabel2 ON tabel1.key = tabel2.key",
            "SELECT ... RIGHT JOIN tabel2"
        ],
        correct: 0,
        pembahasan: "JOIN tanpa JOIN statement menulis daftar tabel dipisahkan koma dan kondisi di WHERE."
    },
    {
        q: "Kegunaan klausa WHERE dalam JOIN tanpa JOIN statement adalah?",
        a: [
            "Menentukan kondisi penggabungan antar tabel",
            "Menghapus duplikat data",
            "Menentukan urutan hasil query",
            "Mengelompokkan data"
        ],
        correct: 0,
        pembahasan: "WHERE berfungsi menyatakan hubungan antar kolom pada tabel yang di-join."
    },
    {
        q: "Apa yang terjadi jika klausa WHERE dihilangkan dalam JOIN tanpa JOIN statement?",
        a: [
            "Akan menghasilkan cross join (setiap kombinasi baris dari kedua tabel)",
            "Query error",
            "Tidak menampilkan data",
            "Hanya menampilkan satu baris"
        ],
        correct: 0,
        pembahasan: "Tanpa kondisi WHERE, semua kombinasi baris kedua tabel akan ditampilkan (cross join)."
    },
    {
        q: "JOIN tanpa JOIN statement termasuk jenis?",
        a: ["Implicit Join", "Cross Join", "Natural Join", "Outer Join"],
        correct: 0,
        pembahasan: "Disebut Implicit Join karena penggabungannya dilakukan di WHERE, bukan dengan JOIN eksplisit."
    },
    {
        q: "JOIN eksplisit menggunakan klausa?",
        a: ["JOIN ... ON ...", "WHERE ...", "GROUP BY ...", "ORDER BY ..."],
        correct: 0,
        pembahasan: "JOIN eksplisit menggunakan kata kunci JOIN dan ON untuk menyatakan relasi antar tabel."
    },
    {
        q: "Perbedaan utama antara Implicit Join dan Explicit Join adalah?",
        a: [
            "Implicit Join menggunakan WHERE, Explicit Join menggunakan ON",
            "Implicit Join menggunakan HAVING, Explicit Join menggunakan GROUP BY",
            "Implicit Join lebih cepat dari Explicit Join",
            "Explicit Join tidak bisa memakai kondisi tambahan"
        ],
        correct: 0,
        pembahasan: "Implicit Join memakai WHERE, sedangkan Explicit Join memakai ON untuk kondisi relasi."
    },
    {
        q: "Perintah berikut adalah contoh JOIN tanpa JOIN statement:",
        a: [
            "SELECT * FROM dosen a, mahasiswa b WHERE a.id_dosen = b.id_dosen;",
            "SELECT * FROM dosen INNER JOIN mahasiswa ON a.id_dosen = b.id_dosen;",
            "SELECT * FROM dosen LEFT JOIN mahasiswa;",
            "SELECT * FROM mahasiswa CROSS JOIN dosen;"
        ],
        correct: 0,
        pembahasan: "Contoh JOIN tanpa JOIN statement menggunakan koma dan kondisi WHERE."
    },
    {
        q: "JOIN tanpa JOIN statement menggunakan alias tabel seperti a dan b untuk?",
        a: [
            "Mempersingkat penulisan nama tabel",
            "Membuat tabel baru",
            "Menghapus data dari tabel",
            "Mengurutkan data secara alfabet"
        ],
        correct: 0,
        pembahasan: "Alias digunakan agar penulisan field antar tabel menjadi lebih singkat dan jelas."
    },
    {
        q: "Kondisi utama agar JOIN menghasilkan data yang benar adalah?",
        a: [
            "Kedua tabel memiliki kolom yang berhubungan (key)",
            "Kedua tabel memiliki jumlah kolom yang sama",
            "Kedua tabel memiliki nama kolom yang sama",
            "Tabel pertama lebih besar dari tabel kedua"
        ],
        correct: 0,
        pembahasan: "JOIN membutuhkan kolom penghubung (key) agar relasi antar tabel dapat dilakukan."
    },
    {
        q: "Kelebihan JOIN tanpa JOIN statement adalah?",
        a: [
            "Penulisan query lebih sederhana",
            "Lebih cepat dari JOIN eksplisit",
            "Menampilkan data otomatis tanpa kondisi",
            "Tidak membutuhkan alias"
        ],
        correct: 0,
        pembahasan: "JOIN tanpa JOIN statement mudah ditulis karena tidak membutuhkan kata kunci JOIN."
    },
    {
        q: "Kelemahan JOIN tanpa JOIN statement adalah?",
        a: [
            "Sulit dibaca jika tabel yang digabung banyak",
            "Tidak dapat menggunakan kondisi tambahan",
            "Hanya dapat digunakan di MySQL",
            "Tidak mendukung WHERE"
        ],
        correct: 0,
        pembahasan: "JOIN tanpa JOIN statement menjadi sulit dipahami untuk query yang kompleks."
    },
    {
        q: "Hasil dari query JOIN ditentukan oleh?",
        a: [
            "Kondisi relasi antara kolom pada klausa WHERE atau ON",
            "Jumlah tabel yang diakses",
            "Jumlah field yang dipilih",
            "Urutan tabel di FROM"
        ],
        correct: 0,
        pembahasan: "JOIN akan menghasilkan data yang cocok berdasarkan kondisi relasi antar tabel."
    },
    {
        q: "Jika dua tabel tidak memiliki relasi dan tetap di-join, maka hasilnya adalah?",
        a: [
            "Cross Join",
            "Inner Join",
            "Left Join",
            "Full Join"
        ],
        correct: 0,
        pembahasan: "Tanpa kondisi relasi, hasilnya adalah cross join (kombinasi semua baris)."
    },
    {
        q: "Fungsi FROM pada JOIN adalah?",
        a: [
            "Menentukan tabel-tabel yang akan digabungkan",
            "Menentukan kolom hasil output",
            "Menyaring data hasil query",
            "Mengurutkan hasil query"
        ],
        correct: 0,
        pembahasan: "FROM menentukan tabel yang menjadi sumber data JOIN."
    },
    {
        q: "Fungsi SELECT dalam query JOIN adalah?",
        a: [
            "Menentukan kolom apa yang ingin ditampilkan dari hasil gabungan tabel",
            "Menentukan relasi antara dua tabel",
            "Menyaring data berdasarkan kondisi tertentu",
            "Menambah baris baru ke tabel"
        ],
        correct: 0,
        pembahasan: "SELECT digunakan untuk menentukan field yang ingin ditampilkan dari hasil JOIN."
    },
    {
        q: "Klausa tambahan seperti AND dalam JOIN digunakan untuk?",
        a: [
            "Menambah kondisi filter tambahan",
            "Menghapus kondisi utama",
            "Membuat tabel baru",
            "Mengubah urutan data"
        ],
        correct: 0,
        pembahasan: "AND menambahkan syarat tambahan pada kondisi JOIN."
    },
    {
        q: "Jika dua tabel memiliki field yang sama namanya, cara menghindari ambigu adalah?",
        a: [
            "Menggunakan alias tabel sebelum nama kolom",
            "Menghapus field yang sama",
            "Mengganti nama tabel",
            "Tidak bisa dihindari"
        ],
        correct: 0,
        pembahasan: "Gunakan alias, misalnya a.id_dosen dan b.id_dosen untuk membedakan kolom dengan nama sama."
    },
    {
        q: "JOIN antara tabel DOSEN dan MAHASISWA berdasarkan ID_DOSEN menghasilkan relasi?",
        a: [
            "One to Many",
            "Many to One",
            "One to One",
            "Many to Many"
        ],
        correct: 0,
        pembahasan: "Satu dosen membimbing banyak mahasiswa, sehingga relasinya One to Many."
    },
    {
        q: "Kondisi a.id_dosen = b.id_dosen menunjukkan bahwa?",
        a: [
            "Kolom ID_DOSEN di kedua tabel memiliki nilai yang sama",
            "Tabel dosen dan mahasiswa memiliki jumlah baris sama",
            "Semua data dosen akan ditampilkan",
            "Semua data mahasiswa akan dihapus"
        ],
        correct: 0,
        pembahasan: "Kondisi tersebut menunjukkan hubungan relasional antar kolom ID_DOSEN pada dua tabel."
    },
    {
        q: "Untuk menampilkan hanya data dengan ID_DOSEN tertentu, digunakan klausa?",
        a: ["AND", "OR", "GROUP BY", "ORDER BY"],
        correct: 0,
        pembahasan: "Klausa AND ditambahkan di akhir kondisi WHERE untuk memfilter hasil."
    },
    {
        q: "JOIN tanpa JOIN statement menghasilkan hasil yang sama dengan?",
        a: ["INNER JOIN", "LEFT JOIN", "FULL JOIN", "RIGHT JOIN"],
        correct: 0,
        pembahasan: "JOIN tanpa JOIN statement menghasilkan hasil setara dengan INNER JOIN."
    },
    {
        q: "Perintah SELECT * FROM dosen, mahasiswa; tanpa WHERE akan menghasilkan?",
        a: [
            "Cross join semua baris kedua tabel",
            "Error syntax",
            "Tidak ada hasil",
            "Hanya baris pertama"
        ],
        correct: 0,
        pembahasan: "Tanpa WHERE, query akan menghasilkan kombinasi semua baris dari kedua tabel (cross join)."
    },
    {
        q: "Manakah pernyataan berikut yang benar tentang JOIN tanpa JOIN statement?",
        a: [
            "Menggunakan koma untuk memisahkan tabel dan WHERE untuk relasi",
            "Menggunakan JOIN ... ON",
            "Menggunakan HAVING untuk relasi tabel",
            "Tidak memerlukan kondisi relasi"
        ],
        correct: 0,
        pembahasan: "JOIN tanpa JOIN statement menulis tabel dengan koma dan relasi di WHERE."
    },
    {
        q: "Dalam query SELECT b.nim, b.nama, a.id_dosen FROM dosen a, mahasiswa b WHERE a.id_dosen=b.id_dosen; huruf a dan b menunjukkan?",
        a: ["Alias tabel", "Nama kolom", "Nama database", "Primary key"],
        correct: 0,
        pembahasan: "a dan b digunakan sebagai alias tabel untuk mempersingkat penulisan nama tabel."
    },
    {
        q: "Manakah contoh kondisi JOIN yang benar?",
        a: [
            "a.id_dosen = b.id_dosen",
            "a.nama = b.ipk",
            "a.alamat > b.ipk",
            "a.id_dosen != b.id_dosen"
        ],
        correct: 0,
        pembahasan: "Kondisi JOIN menggunakan kolom relasi yang sama, yaitu ID_DOSEN."
    },
    {
        q: "Jika tabel pertama memiliki 5 baris dan tabel kedua memiliki 4 baris tanpa kondisi WHERE, hasilnya adalah?",
        a: ["20 baris", "9 baris", "5 baris", "4 baris"],
        correct: 0,
        pembahasan: "Tanpa WHERE, terjadi cross join, menghasilkan 5 x 4 = 20 baris."
    },
    {
        q: "Fungsi utama JOIN adalah?",
        a: [
            "Menggabungkan data dari beberapa tabel yang berhubungan",
            "Menghapus data ganda dari tabel",
            "Membuat salinan tabel",
            "Mengubah struktur tabel"
        ],
        correct: 0,
        pembahasan: "JOIN digunakan untuk mengambil data yang berhubungan antar tabel."
    },
    {
        q: "JOIN tanpa JOIN statement dapat digunakan pada?",
        a: ["MySQL, Oracle, dan SQL Server", "Hanya di MongoDB", "Hanya di Excel", "Hanya di PostgreSQL"],
        correct: 0,
        pembahasan: "JOIN tanpa JOIN statement didukung di semua DBMS SQL utama."
    },
    {
        q: "Kapan sebaiknya JOIN eksplisit lebih dipilih daripada JOIN tanpa JOIN statement?",
        a: [
            "Saat query melibatkan banyak tabel",
            "Saat hanya ada satu tabel",
            "Saat tidak ada foreign key",
            "Saat tidak menggunakan klausa WHERE"
        ],
        correct: 0,
        pembahasan: "JOIN eksplisit lebih jelas dan mudah dibaca untuk query dengan banyak tabel."
    },
    {
        q: "JOIN tanpa JOIN statement termasuk jenis query?",
        a: ["Query relasional", "Query agregasi", "Query manipulasi data", "Query subquery"],
        correct: 0,
        pembahasan: "JOIN adalah bentuk query relasional untuk menggabungkan tabel."
    },
    {
        q: "Apa yang dimaksud dengan cross join?",
        a: [
            "Kombinasi semua baris dari dua tabel tanpa kondisi WHERE",
            "Gabungan berdasarkan key yang sama",
            "Gabungan tabel dengan kondisi ON",
            "Penggabungan dengan kondisi LEFT JOIN"
        ],
        correct: 0,
        pembahasan: "Cross join terjadi jika tidak ada kondisi relasi pada klausa WHERE."
    },
    {
        q: "Manakah pernyataan yang benar tentang hasil JOIN?",
        a: [
            "Jumlah baris hasil tergantung pada kondisi relasi antar tabel",
            "Jumlah baris hasil selalu sama dengan jumlah tabel",
            "JOIN selalu menghasilkan data unik",
            "JOIN hanya menampilkan kolom yang sama"
        ],
        correct: 0,
        pembahasan: "Jumlah baris hasil tergantung dari kecocokan nilai relasi antar tabel."
    },
    {
        q: "Kapan JOIN tanpa JOIN statement menghasilkan hasil kosong?",
        a: [
            "Jika tidak ada nilai yang cocok pada kolom relasi",
            "Jika tabel tidak memiliki primary key",
            "Jika jumlah kolom berbeda",
            "Jika tabel tidak memiliki data sama sekali"
        ],
        correct: 0,
        pembahasan: "Jika tidak ada nilai yang cocok pada kolom relasi, hasil JOIN menjadi kosong."
    },
    {
        q: "Tujuan utama penggunaan JOIN adalah?",
        a: [
            "Mengambil data yang relevan dari beberapa tabel secara bersamaan",
            "Menghapus duplikat data",
            "Mengubah tipe data kolom",
            "Menambahkan indeks baru"
        ],
        correct: 0,
        pembahasan: "JOIN memungkinkan pengambilan data dari beberapa tabel sekaligus berdasarkan hubungan antar kolom."
    }
];