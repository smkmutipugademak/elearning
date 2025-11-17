let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Perintah JOIN dalam SQL digunakan untuk?",
        a: [
            "Menggabungkan data dari beberapa tabel yang saling berhubungan",
            "Menghapus tabel",
            "Menyalin tabel",
            "Menampilkan struktur tabel",
            "Mengurutkan data dalam tabel"
        ],
        correct: 0,
        pembahasan: "JOIN digunakan untuk mengambil data dari beberapa tabel yang memiliki kolom relasi yang sama."
    },
    {
        q: "INNER JOIN digunakan untuk?",
        a: [
            "Mengambil data yang memiliki nilai kunci sama di kedua tabel",
            "Mengambil semua data dari tabel kiri",
            "Mengambil semua data dari tabel kanan",
            "Menghapus baris duplikat",
            "Menampilkan data tanpa relasi"
        ],
        correct: 0,
        pembahasan: "INNER JOIN hanya menampilkan baris yang memiliki pasangan di kedua tabel berdasarkan kolom relasi."
    },
    {
        q: "Hasil dari INNER JOIN adalah?",
        a: [
            "Gabungan kedua tabel yang memiliki data join yang sama",
            "Semua data dari tabel kiri",
            "Semua data dari tabel kanan",
            "Data dari kedua tabel meskipun tidak cocok",
            "Data kosong"
        ],
        correct: 0,
        pembahasan: "INNER JOIN menghasilkan data yang hanya memiliki nilai yang sama di kolom kunci kedua tabel."
    },
    {
        q: "Klausa yang digunakan untuk menentukan kondisi penggabungan pada JOIN adalah?",
        a: ["ON", "WHERE", "GROUP BY", "ORDER BY", "HAVING"],
        correct: 0,
        pembahasan: "Kondisi relasi antara dua tabel pada JOIN ditentukan dengan klausa ON."
    },
    {
        q: "Jenis JOIN yang paling umum dan didukung semua database adalah?",
        a: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "SELF JOIN"],
        correct: 0,
        pembahasan: "INNER JOIN adalah jenis join paling umum digunakan di semua sistem database."
    },
    {
        q: "Jika data di satu tabel tidak memiliki pasangan di tabel lain, INNER JOIN akan?",
        a: [
            "Mengabaikannya (tidak ditampilkan)",
            "Menampilkannya dengan nilai NULL",
            "Menyalinnya ke tabel lain",
            "Menampilkan semua datanya",
            "Menghapus tabel"
        ],
        correct: 0,
        pembahasan: "INNER JOIN hanya menampilkan baris yang cocok di kedua tabel."
    },
    {
        q: "Sintaks dasar INNER JOIN adalah?",
        a: [
            "SELECT ... FROM tabelA INNER JOIN tabelB ON tabelA.key = tabelB.key;",
            "SELECT ... FROM tabelA JOIN tabelB;",
            "SELECT ... JOIN tabelA, tabelB;",
            "SELECT INNER FROM tabelA;",
            "SELECT * FROM tabelA OUTER JOIN tabelB;"
        ],
        correct: 0,
        pembahasan: "INNER JOIN memerlukan klausa ON untuk menentukan hubungan antar tabel."
    },
    {
        q: "INNER JOIN dapat dianggap sebagai?",
        a: ["Irisan (intersection) antara dua tabel", "Gabungan penuh", "Pengurangan", "Perkalian", "Union"],
        correct: 0,
        pembahasan: "INNER JOIN hanya menampilkan data yang memiliki kecocokan di kedua tabel, seperti irisan himpunan."
    },
    {
        q: "OUTER JOIN digunakan untuk?",
        a: [
            "Mengambil data yang ada di salah satu atau kedua tabel, meski tidak ada pasangan",
            "Menampilkan hanya data yang cocok",
            "Menghapus data duplikat",
            "Menampilkan struktur tabel",
            "Membuat tabel baru"
        ],
        correct: 0,
        pembahasan: "OUTER JOIN menampilkan semua baris dari salah satu tabel meskipun tidak ada pasangan di tabel lain."
    },
    {
        q: "Jenis dari OUTER JOIN adalah?",
        a: ["LEFT JOIN dan RIGHT JOIN", "INNER JOIN dan CROSS JOIN", "FULL JOIN dan SELF JOIN", "UNION dan INTERSECT", "GROUP JOIN dan ORDER JOIN"],
        correct: 0,
        pembahasan: "OUTER JOIN terdiri dari LEFT OUTER JOIN dan RIGHT OUTER JOIN."
    },
    {
        q: "LEFT JOIN digunakan untuk?",
        a: [
            "Menampilkan semua data dari tabel kiri meskipun tidak memiliki pasangan di tabel kanan",
            "Menampilkan hanya data yang cocok",
            "Menampilkan semua data dari tabel kanan",
            "Menghapus data duplikat",
            "Menyalin data"
        ],
        correct: 0,
        pembahasan: "LEFT JOIN menampilkan seluruh baris tabel kiri dan mencocokkannya dengan tabel kanan."
    },
    {
        q: "RIGHT JOIN digunakan untuk?",
        a: [
            "Menampilkan semua data dari tabel kanan meskipun tidak memiliki pasangan di tabel kiri",
            "Menampilkan semua data dari tabel kiri",
            "Menampilkan hanya data yang cocok",
            "Menghapus kolom NULL",
            "Menampilkan hanya data tanpa relasi"
        ],
        correct: 0,
        pembahasan: "RIGHT JOIN menampilkan seluruh baris tabel kanan, termasuk yang tidak memiliki pasangan di tabel kiri."
    },
    {
        q: "LEFT JOIN disebut juga sebagai?",
        a: [
            "Left Outer Join",
            "Left Inner Join",
            "Right Outer Join",
            "Full Join",
            "Cross Join"
        ],
        correct: 0,
        pembahasan: "LEFT JOIN adalah bentuk dari LEFT OUTER JOIN."
    },
    {
        q: "RIGHT JOIN disebut juga sebagai?",
        a: [
            "Right Outer Join",
            "Right Inner Join",
            "Left Outer Join",
            "Full Join",
            "Self Join"
        ],
        correct: 0,
        pembahasan: "RIGHT JOIN merupakan bentuk dari RIGHT OUTER JOIN."
    },
    {
        q: "Jika tabel A memiliki data yang tidak ada di tabel B, LEFT JOIN akan?",
        a: [
            "Menampilkan data dari tabel A dan menempatkan NULL di sisi tabel B",
            "Menghapus data tersebut",
            "Mengabaikannya",
            "Menampilkan data dari tabel B saja",
            "Menggandakan baris"
        ],
        correct: 0,
        pembahasan: "LEFT JOIN menampilkan semua baris dari tabel kiri meskipun tidak memiliki pasangan di tabel kanan."
    },
    {
        q: "Pada RIGHT JOIN, jika data tabel kanan tidak punya pasangan di tabel kiri maka?",
        a: [
            "Akan tetap ditampilkan dengan nilai NULL di sisi kiri",
            "Tidak ditampilkan",
            "Akan dihapus dari hasil",
            "Hanya muncul jika cocok",
            "Menimbulkan error"
        ],
        correct: 0,
        pembahasan: "RIGHT JOIN akan tetap menampilkan data dari tabel kanan meski tanpa pasangan di tabel kiri."
    },
    {
        q: "Klausa ON dalam JOIN digunakan untuk?",
        a: [
            "Menentukan kolom yang menjadi kunci penghubung antar tabel",
            "Mengurutkan hasil query",
            "Menghapus data NULL",
            "Mengelompokkan hasil query",
            "Menampilkan seluruh data"
        ],
        correct: 0,
        pembahasan: "Klausa ON digunakan untuk mendefinisikan kondisi relasi antara dua tabel."
    },
    {
        q: "Perintah INNER JOIN biasanya digunakan untuk relasi jenis?",
        a: ["One to Many", "Many to Many", "One to One", "Many to One", "Tidak ada relasi"],
        correct: 0,
        pembahasan: "INNER JOIN sering digunakan untuk relasi One to Many seperti dosen membimbing banyak mahasiswa."
    },
    {
        q: "Kata kunci yang digunakan untuk menamai tabel sementara dalam query adalah?",
        a: ["Alias", "Constraint", "Index", "Primary", "Reference"],
        correct: 0,
        pembahasan: "Alias digunakan untuk mempersingkat nama tabel, misalnya mahasiswa a."
    },
    {
        q: "Query berikut: SELECT a.nama, b.nama FROM mahasiswa a INNER JOIN dosen b ON a.id_dosen = b.id_dosen; akan menampilkan?",
        a: [
            "Mahasiswa yang memiliki dosen pembimbing",
            "Semua mahasiswa",
            "Semua dosen",
            "Mahasiswa tanpa dosen",
            "Data NULL"
        ],
        correct: 0,
        pembahasan: "INNER JOIN hanya menampilkan mahasiswa yang memiliki dosen pembimbing yang cocok."
    },
    {
        q: "LEFT JOIN pada mahasiswa dan dosen akan menampilkan?",
        a: [
            "Semua mahasiswa termasuk yang belum memiliki dosen",
            "Hanya mahasiswa yang punya dosen",
            "Hanya dosen tanpa mahasiswa",
            "Semua dosen dan mahasiswa",
            "Data kosong"
        ],
        correct: 0,
        pembahasan: "LEFT JOIN akan menampilkan semua mahasiswa walau belum memiliki dosen pembimbing."
    },
    {
        q: "RIGHT JOIN pada mahasiswa dan dosen akan menampilkan?",
        a: [
            "Semua dosen termasuk yang belum membimbing mahasiswa",
            "Hanya dosen yang punya mahasiswa",
            "Hanya mahasiswa tanpa dosen",
            "Hanya data NULL",
            "Tidak ada hasil"
        ],
        correct: 0,
        pembahasan: "RIGHT JOIN akan menampilkan semua dosen termasuk yang belum punya mahasiswa."
    },
    {
        q: "Perbedaan utama INNER JOIN dan OUTER JOIN adalah?",
        a: [
            "INNER JOIN hanya menampilkan data yang cocok, OUTER JOIN menampilkan data meski tidak cocok",
            "INNER JOIN lebih lambat dari OUTER JOIN",
            "OUTER JOIN hanya menampilkan satu tabel",
            "INNER JOIN tidak membutuhkan klausa ON",
            "Keduanya sama saja"
        ],
        correct: 0,
        pembahasan: "INNER JOIN hanya menampilkan baris yang cocok, sedangkan OUTER JOIN menampilkan juga yang tidak cocok."
    },
    {
        q: "FULL OUTER JOIN akan menampilkan?",
        a: [
            "Semua data dari kedua tabel baik yang cocok maupun tidak",
            "Hanya data yang cocok",
            "Hanya tabel kiri",
            "Hanya tabel kanan",
            "Data kosong"
        ],
        correct: 0,
        pembahasan: "FULL OUTER JOIN mengembalikan semua data dari kedua tabel meskipun tidak cocok."
    },
    {
        q: "Jika tidak ada kondisi ON dalam JOIN, maka akan menghasilkan?",
        a: [
            "Cross Join",
            "Inner Join",
            "Left Join",
            "Full Join",
            "Error"
        ],
        correct: 0,
        pembahasan: "Tanpa kondisi ON, SQL menghasilkan Cross Join, yaitu semua kombinasi baris kedua tabel."
    },
    {
        q: "Cross Join menghasilkan?",
        a: [
            "Kombinasi semua baris dari dua tabel",
            "Data yang cocok",
            "Data yang unik saja",
            "Data yang kosong",
            "Error"
        ],
        correct: 0,
        pembahasan: "Cross Join menghasilkan kombinasi Cartesian dari dua tabel."
    },
    {
        q: "Alias tabel digunakan untuk?",
        a: [
            "Mempersingkat penulisan nama tabel dalam query",
            "Membuat tabel baru",
            "Menghapus kolom",
            "Menambahkan data",
            "Menyalin tabel"
        ],
        correct: 0,
        pembahasan: "Alias digunakan untuk mempersingkat dan memperjelas penulisan kolom antar tabel."
    },
    {
        q: "Pada query SELECT a.nama, b.nama FROM mahasiswa a LEFT JOIN dosen b ON a.id_dosen=b.id_dosen; huruf 'a' dan 'b' menunjukkan?",
        a: ["Alias tabel", "Nama kolom", "Primary key", "Nama database", "Foreign key"],
        correct: 0,
        pembahasan: "Huruf 'a' dan 'b' digunakan sebagai alias tabel mahasiswa dan dosen."
    },
    {
        q: "RIGHT JOIN adalah kebalikan dari?",
        a: ["LEFT JOIN", "INNER JOIN", "FULL JOIN", "SELF JOIN", "CROSS JOIN"],
        correct: 0,
        pembahasan: "RIGHT JOIN menampilkan semua data dari tabel kanan, kebalikan dari LEFT JOIN."
    },
    {
        q: "Jika dua tabel tidak memiliki relasi dan di-join, hasilnya?",
        a: ["Cross Join", "Inner Join", "Left Join", "Full Join", "Error"],
        correct: 0,
        pembahasan: "Tanpa kondisi relasi, hasil JOIN adalah Cross Join."
    },
    {
        q: "INNER JOIN mengharuskan kedua tabel memiliki?",
        a: ["Kolom kunci yang berhubungan", "Jumlah kolom sama", "Nama tabel sama", "Jumlah baris sama", "Index sama"],
        correct: 0,
        pembahasan: "INNER JOIN memerlukan kolom penghubung sebagai syarat relasi antar tabel."
    },
    {
        q: "Kelebihan OUTER JOIN dibanding INNER JOIN adalah?",
        a: [
            "Menampilkan data meskipun tidak memiliki pasangan di tabel lain",
            "Lebih cepat",
            "Tidak perlu ON",
            "Tidak menghasilkan NULL",
            "Lebih sedikit hasil"
        ],
        correct: 0,
        pembahasan: "OUTER JOIN tetap menampilkan data meski tidak ada pasangan di tabel lain."
    },
    {
        q: "Kapan RIGHT JOIN digunakan?",
        a: [
            "Jika ingin menampilkan semua data dari tabel kanan",
            "Jika ingin menampilkan semua data dari tabel kiri",
            "Jika hanya ingin menampilkan yang cocok",
            "Jika tidak ada relasi",
            "Untuk menghapus data"
        ],
        correct: 0,
        pembahasan: "RIGHT JOIN digunakan ketika semua data dari tabel kanan ingin tetap ditampilkan."
    },
    {
        q: "LEFT JOIN cocok digunakan ketika?",
        a: [
            "Semua data dari tabel kiri harus ditampilkan",
            "Semua data dari tabel kanan ditampilkan",
            "Hanya data yang cocok ditampilkan",
            "Data tidak memiliki relasi",
            "Data tidak ingin ditampilkan"
        ],
        correct: 0,
        pembahasan: "LEFT JOIN memastikan semua data dari tabel kiri ditampilkan, walau tidak punya pasangan."
    },
    {
        q: "Perintah SELECT * FROM mahasiswa a INNER JOIN dosen b ON a.id_dosen=b.id_dosen; menunjukkan relasi?",
        a: ["Mahasiswa dengan dosen pembimbingnya", "Semua mahasiswa", "Semua dosen", "Data NULL", "Data tidak cocok"],
        correct: 0,
        pembahasan: "INNER JOIN menampilkan mahasiswa yang memiliki dosen pembimbing sesuai relasi id_dosen."
    },
    {
        q: "Kondisi a.id_dosen = b.id_dosen menunjukkan bahwa?",
        a: [
            "Kolom ID_DOSEN di kedua tabel memiliki nilai yang sama",
            "Tabel dosen dan mahasiswa berisi data sama",
            "Semua data dosen akan ditampilkan",
            "Semua data mahasiswa akan dihapus",
            "Tabel berelasi banyak ke banyak"
        ],
        correct: 0,
        pembahasan: "Kondisi ini mendefinisikan relasi antar kolom ID_DOSEN di kedua tabel."
    }
];