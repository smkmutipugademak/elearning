let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan berpikir komputasional adalah ………",
        a: [
            "Berpikir abstrak untuk menyelesaikan masalah",
            "Berpikir logis dengan menggunakan komputer",
            "Proses menyelesaikan masalah dengan metode sistematis",
            "Metode menyalin informasi secara cepat",
            "Teknik analisis data menggunakan software"
        ],
        correct: 2,
        pembahasan: "Berpikir komputasional adalah proses sistematis untuk menyelesaikan masalah dengan pendekatan logis dan analitis."
    },
    {
        q: "Langkah pertama dalam berpikir komputasional adalah ………",
        a: [
            "Validasi data",
            "Abstraksi",
            "Evaluasi hasil",
            "Menentukan masalah",
            "Pengorganisasian data"
        ],
        correct: 3,
        pembahasan: "Langkah pertama adalah mengenali dan mendefinisikan masalah."
    },
    {
        q: "Fungsi utama dari algoritma dalam berpikir komputasional adalah ………",
        a: [
            "Membuat sistem kerja lebih rumit",
            "Menyederhanakan proses penyelesaian masalah",
            "Mengurangi waktu yang dibutuhkan",
            "Meningkatkan efisiensi perangkat keras",
            "Meningkatkan kualitas software"
        ],
        correct: 1,
        pembahasan: "Algoritma menyederhanakan dan mengefisienkan langkah penyelesaian masalah."
    },
    {
        q: "Istilah 'Abstraksi' dalam berpikir komputasional merujuk pada ………",
        a: [
            "Menyelesaikan masalah kecil terlebih dahulu",
            "Memfokuskan pada hal-hal penting",
            "Menyusun data dalam bentuk struktur",
            "Mengevaluasi hasil akhir",
            "Mencari solusi dari berbagai sudut pandang"
        ],
        correct: 1,
        pembahasan: "Abstraksi adalah memfokuskan perhatian pada elemen penting dari masalah."
    },
    {
        q: "Salah satu algoritma sorting yang efisien untuk data tidak terlalu besar adalah ………",
        a: [
            "Merge Sort",
            "Bubble Sort",
            "Quick Sort",
            "Selection Sort",
            "Binary Sort"
        ],
        correct: 1,
        pembahasan: "Bubble sort cocok untuk dataset kecil meskipun kurang efisien untuk data besar."
    },
    {
        q: "Prinsip utama dari algoritma 'Quick Sort' adalah ………",
        a: [
            "Membagi data menjadi dua bagian berdasarkan pivot",
            "Menyusun data dari yang terkecil hingga terbesar",
            "Mengelompokkan data secara hierarkis",
            "Menukar elemen data pada posisi tertentu",
            "Menggabungkan dua dataset"
        ],
        correct: 0,
        pembahasan: "Quick Sort menggunakan pivot untuk membagi data menjadi dua bagian."
    },
    {
        q: "Struktur data 'Stack' bekerja berdasarkan prinsip ………",
        a: [
            "FIFO",
            "LIFO",
            "Sorting prioritas",
            "Mencari elemen terkecil",
            "Menyimpan data terurut"
        ],
        correct: 1,
        pembahasan: "Stack bekerja dengan prinsip LIFO."
    },
    {
        q: "Struktur data 'Queue' bekerja berdasarkan prinsip ………",
        a: [
            "LIFO",
            "FIFO",
            "Sorting ukuran",
            "Menyimpan paralel",
            "Membagi kelompok"
        ],
        correct: 1,
        pembahasan: "Queue bekerja dengan prinsip FIFO."
    },
    {
        q: "Fungsi utama dari mesin pencari (search engine) adalah ………",
        a: [
            "Membuka website otomatis",
            "Menyimpan data pengguna",
            "Membantu mencari informasi dengan kata kunci",
            "Mengamankan data",
            "Mengelola iklan"
        ],
        correct: 2,
        pembahasan: "Mesin pencari membantu pengguna menemukan informasi dengan kata kunci."
    },
    {
        q: "Proses 'Indexing' dalam mesin pencari bertujuan untuk ………",
        a: [
            "Membuat daftar prioritas",
            "Mengorganisasi data terstruktur",
            "Menyimpan konten website ke database",
            "Mengurutkan berdasarkan relevansi",
            "Mencatat aktivitas pengguna"
        ],
        correct: 2,
        pembahasan: "Indexing menyimpan konten website agar mudah ditemukan."
    },
    {
        q: "Tahap 'Crawling' pada mesin pencari melibatkan ………",
        a: [
            "Pengumpulan data dari website",
            "Pemberian peringkat",
            "Penentuan relevansi",
            "Penyimpanan data",
            "Penyaringan informasi"
        ],
        correct: 0,
        pembahasan: "Crawling mengumpulkan data dari berbagai website."
    },
    {
        q: "Evaluasi informasi digital melibatkan ………",
        a: [
            "Memeriksa akurasi informasi",
            "Menentukan relevansi berdasarkan popularitas",
            "Memfilter informasi kuno",
            "Menyusun informasi berurutan",
            "Menganalisis pola pencarian"
        ],
        correct: 0,
        pembahasan: "Evaluasi informasi digital berfokus pada akurasi dan kredibilitas sumber."
    },
    {
        q: "Langkah pertama mencegah penyebaran hoaks adalah ………",
        a: [
            "Melaporkan berita",
            "Membaca berita terpercaya",
            "Memeriksa judul secara kritis",
            "Membagikan ke teman",
            "Menghapus pesan"
        ],
        correct: 2,
        pembahasan: "Memeriksa judul membantu mengenali berita palsu."
    },
    {
        q: "Dalam berpikir komputasional, 'Decomposition' berarti ………",
        a: [
            "Membagi masalah menjadi bagian kecil",
            "Menggunakan data untuk prediksi",
            "Membuat algoritma",
            "Mengidentifikasi pola",
            "Menentukan hasil akhir"
        ],
        correct: 0,
        pembahasan: "Decomposition memecah masalah besar menjadi bagian kecil."
    },
    {
        q: "Binary Searching adalah metode untuk ………",
        a: [
            "Mencari data tak terstruktur",
            "Membagi dataset menjadi dua",
            "Mengurutkan data",
            "Menyusun data kategori",
            "Menghapus data"
        ],
        correct: 1,
        pembahasan: "Binary Search mencari dengan membagi dataset menjadi dua."
    },
    {
        q: "Fungsi utama 'Ranking' dalam mesin pencari adalah ………",
        a: [
            "Prioritas berdasarkan popularitas",
            "Mengelompokkan data",
            "Mengurutkan hasil berdasarkan relevansi",
            "Mempercepat pencarian",
            "Menghapus data"
        ],
        correct: 2,
        pembahasan: "Ranking mengurutkan hasil pencarian berdasarkan relevansi."
    },
    {
        q: "Konsep 'Greedy Algorithm' digunakan untuk ………",
        a: [
            "Memilih solusi optimal di setiap langkah",
            "Membagi masalah menjadi bagian kecil",
            "Mengidentifikasi pola",
            "Mengurutkan data",
            "Menyimpan hierarki data"
        ],
        correct: 0,
        pembahasan: "Greedy Algorithm memilih solusi terbaik di setiap langkah."
    },
    {
        q: "Metode sorting yang menggabungkan dua list terurut adalah ………",
        a: [
            "Merge Sort",
            "Quick Sort",
            "Bubble Sort",
            "Selection Sort",
            "Binary Sort"
        ],
        correct: 0,
        pembahasan: "Merge Sort menggabungkan dua list terurut menjadi satu."
    },
    {
        q: "Operasi untuk menambahkan elemen pada Stack adalah ………",
        a: [
            "Push",
            "Pop",
            "Enqueue",
            "Dequeue",
            "Insert"
        ],
        correct: 0,
        pembahasan: "Push menambahkan elemen ke atas stack."
    },
    {
        q: "Operasi 'Dequeue' pada Queue berarti ………",
        a: [
            "Menambahkan elemen",
            "Menghapus elemen depan",
            "Menghapus elemen belakang",
            "Menyusun ulang",
            "Mengosongkan antrian"
        ],
        correct: 1,
        pembahasan: "Dequeue menghapus elemen bagian depan."
    },
    {
        q: "Tujuan utama berpikir komputasional adalah ………",
        a: [
            "Menghafal data",
            "Menciptakan solusi inovatif secara logis",
            "Memastikan algoritma sempurna",
            "Menghapus data",
            "Mengatur file"
        ],
        correct: 1,
        pembahasan: "Berpikir komputasional menciptakan solusi logis dan inovatif."
    },
    {
        q: "Proses abstraksi bertujuan untuk ………",
        a: [
            "Memvalidasi data",
            "Menyelesaikan semua data sekaligus",
            "Memfokuskan hanya hal penting",
            "Menambah data",
            "Membuat data kompleks"
        ],
        correct: 2,
        pembahasan: "Abstraksi menyaring informasi dan fokus pada hal penting."
    },
    {
        q: "Mengapa algoritma penting ………",
        a: [
            "Mempermudah implementasi solusi",
            "Memakan lebih banyak waktu",
            "Meningkatkan kapasitas hardware",
            "Hanya berlaku di cloud",
            "Menggantikan manusia"
        ],
        correct: 0,
        pembahasan: "Algoritma membantu mempermudah penyelesaian masalah."
    },
    {
        q: "Prinsip struktur data Queue adalah ………",
        a: [
            "Pertama masuk terakhir keluar",
            "Terakhir masuk terakhir keluar",
            "Pertama masuk pertama keluar",
            "Keluar sesuai prioritas",
            "Elemen terpanjang lebih dulu"
        ],
        correct: 2,
        pembahasan: "Queue menggunakan prinsip FIFO."
    },
    {
        q: "Binary Search hanya dapat diterapkan pada ………",
        a: [
            "Data string",
            "Data tidak terurut",
            "Data numerik berpola",
            "Data yang sudah diurutkan",
            "Data acak"
        ],
        correct: 3,
        pembahasan: "Binary Search hanya efektif pada data yang telah diurutkan."
    },
    {
        q: "Tahap 'Crawling' dalam mesin pencari dilakukan untuk ………",
        a: [
            "Mengurutkan data",
            "Mengindeks konten",
            "Menyusun hasil pencarian",
            "Mengumpulkan informasi dari website",
            "Membuat daftar pencarian"
        ],
        correct: 3,
        pembahasan: "Crawling mengumpulkan data dari internet."
    },
    {
        q: "Validasi data dilakukan untuk ………",
        a: [
            "Membuat data mudah diakses",
            "Memastikan data sesuai format",
            "Menambah data cepat",
            "Mengurangi ukuran file",
            "Menghapus duplikat"
        ],
        correct: 1,
        pembahasan: "Validasi memastikan input sesuai format."
    },
    {
        q: "Proses Ranking dalam mesin pencari digunakan untuk ………",
        a: [
            "Mengurutkan hasil berdasarkan relevansi",
            "Menyaring informasi wilayah",
            "Menyimpan data",
            "Memvalidasi informasi",
            "Menghapus data"
        ],
        correct: 0,
        pembahasan: "Ranking mengurutkan hasil pencarian menurut relevansi."
    },
    {
        q: "Operasi 'Push' dalam stack digunakan untuk ………",
        a: [
            "Menghapus elemen",
            "Menambah elemen",
            "Mengambil elemen bawah",
            "Mengurutkan",
            "Menyalin"
        ],
        correct: 1,
        pembahasan: "Push menambahkan elemen ke stack."
    },
    {
        q: "Manfaat utama validasi data adalah ………",
        a: [
            "Mengurangi risiko kesalahan input",
            "Mempercepat pengolahan data",
            "Menambah jumlah data",
            "Mengubah format data",
            "Untuk analisis statistik"
        ],
        correct: 0,
        pembahasan: "Validasi mengurangi risiko kesalahan."
    },
    {
        q: "Decomposition bertujuan untuk ………",
        a: [
            "Membuat masalah rumit",
            "Membagi masalah besar",
            "Menyimpan informasi",
            "Meningkatkan akurasi",
            "Menambah data"
        ],
        correct: 1,
        pembahasan: "Decomposition memecah masalah besar menjadi bagian kecil."
    },
    {
        q: "Tahap terakhir dalam berpikir komputasional adalah ………",
        a: [
            "Abstraksi",
            "Validasi",
            "Pengumpulan data",
            "Evaluasi solusi",
            "Perancangan algoritma"
        ],
        correct: 3,
        pembahasan: "Tahap terakhir adalah evaluasi solusi."
    },
    {
        q: "Quick Sort menggunakan metode ………",
        a: [
            "Penyusunan elemen",
            "Pembagian data memakai pivot",
            "Pemilihan elemen terkecil",
            "Penggabungan dua list",
            "Pengacakan data"
        ],
        correct: 1,
        pembahasan: "Quick Sort membagi data menggunakan pivot."
    },
    {
        q: "Proses Lookup membantu untuk ………",
        a: [
            "Menemukan data khusus di database",
            "Mengurutkan data",
            "Menghapus data",
            "Mengelompokkan data",
            "Mempercepat pengolahan data"
        ],
        correct: 0,
        pembahasan: "Lookup mencari data spesifik dalam database."
    },
    {
        q: "Manfaat utama abstraksi adalah ………",
        a: [
            "Mengurangi informasi yang tidak relevan",
            "Menambah data",
            "Menyusun data kompleks",
            "Membuat data fleksibel",
            "Memproses cepat"
        ],
        correct: 0,
        pembahasan: "Abstraksi memfokuskan informasi penting."
    }
];
