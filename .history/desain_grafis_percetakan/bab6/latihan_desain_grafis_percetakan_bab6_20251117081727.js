let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan grafik bitmap?",
        a: [
            "Grafik berbasis garis",
            "Grafik berbasis pixel",
            "Grafik berbasis vektor",
            "Grafik berbasis 3D",
            "Grafik berbasis warna"
        ],
        correct: 1,
        pembahasan: "Bitmap adalah grafik berbasis pixel, di mana setiap pixel memiliki warna dan posisi tertentu."
    },
    {
        q: "Program apa yang digunakan untuk mengolah grafik bitmap?",
        a: [
            "CorelDraw",
            "Adobe Illustrator",
            "Paint",
            "Microsoft Word",
            "Notepad"
        ],
        correct: 2,
        pembahasan: "Paint adalah program sederhana yang digunakan untuk mengolah grafik bitmap."
    },
    {
        q: "Ciri khas utama grafik bitmap adalah...",
        a: [
            "Resolusi tinggi",
            "Terbentuk dari kumpulan titik warna",
            "Bentuk vektor yang fleksibel",
            "Ukuran file kecil",
            "Tidak membutuhkan resolusi"
        ],
        correct: 1,
        pembahasan: "Gambar bitmap terbentuk dari kumpulan titik warna atau pixel."
    },
    {
        q: "Apa fungsi utama Adobe Photoshop?",
        a: [
            "Membuat animasi",
            "Mengedit foto",
            "Membuat desain 3D",
            "Membuat tabel",
            "Menulis teks"
        ],
        correct: 1,
        pembahasan: "Photoshop adalah software pengedit foto dan manipulasi gambar bitmap."
    },
    {
        q: "Apa kelemahan utama dari grafik bitmap?",
        a: [
            "Tidak bisa diubah ukurannya",
            "Menggunakan titik warna terbatas",
            "Mengalami penurunan kualitas jika diperbesar",
            "Tidak bisa digunakan untuk foto",
            "Tidak mendukung warna"
        ],
        correct: 2,
        pembahasan: "Bitmap akan pecah atau blur jika diperbesar karena pixel menjadi terlihat."
    },
    {
        q: "Software Corel PhotoPaint digunakan untuk...",
        a: [
            "Desain berbasis vektor",
            "Membuat model 3D",
            "Mengolah grafik bitmap",
            "Mengedit dokumen teks",
            "Membuat grafik statistik"
        ],
        correct: 2,
        pembahasan: "Corel PhotoPaint adalah software pengolah gambar berbasis bitmap."
    },
    {
        q: "Istilah untuk menyebut ukuran resolusi dalam grafik bitmap adalah...",
        a: [
            "Intensity",
            "Resolution",
            "Density",
            "Clarity",
            "Pixels"
        ],
        correct: 1,
        pembahasan: "Resolusi menunjukkan jumlah pixel dalam area tertentu."
    },
    {
        q: "Fungsi toolbox dalam Adobe Photoshop adalah...",
        a: [
            "Mengatur layer",
            "Menyimpan file",
            "Menggunakan alat-alat edit gambar",
            "Menampilkan preview gambar",
            "Menambahkan teks"
        ],
        correct: 2,
        pembahasan: "Toolbox berisi alat seperti Move Tool, Brush Tool, Eraser, dan lainnya."
    },
    {
        q: "Apa langkah pertama dalam menjalankan Photoshop?",
        a: [
            "Membuka dokumen baru",
            "Menyalakan komputer",
            "Memilih template",
            "Mengimpor gambar",
            "Mengatur resolusi"
        ],
        correct: 1,
        pembahasan: "Langkah awal adalah menyalakan komputer dan membuka aplikasi Photoshop."
    },
    {
        q: "Proses mengubah gambar vektor menjadi bitmap disebut...",
        a: [
            "Rasterisasi",
            "Vectorisasi",
            "Konversi",
            "Resolusi",
            "Filterisasi"
        ],
        correct: 0,
        pembahasan: "Rasterisasi adalah proses mengubah gambar vektor menjadi bitmap."
    },
    {
        q: "Software Paint biasanya digunakan untuk...",
        a: [
            "Mengedit foto tingkat lanjut",
            "Mengolah grafik vektor",
            "Menggambar dan melukis sederhana",
            "Membuat animasi 3D",
            "Mengatur resolusi foto"
        ],
        correct: 2,
        pembahasan: "Paint digunakan untuk kegiatan menggambar sederhana."
    },
    {
        q: "Gambar bitmap ideal digunakan untuk...",
        a: [
            "Logo besar",
            "Foto dengan detail halus",
            "Sketsa hitam putih",
            "Desain grafis berbasis teks",
            "Diagram teknis"
        ],
        correct: 1,
        pembahasan: "Bitmap cocok untuk gambar detail tinggi seperti foto."
    },
    {
        q: "Kelebihan utama Adobe Photoshop adalah...",
        a: [
            "Gratis diunduh",
            "Mendukung semua format",
            "Dapat mengedit foto dengan sangat detail",
            "Tidak membutuhkan spesifikasi tinggi",
            "Ukuran file kecil"
        ],
        correct: 2,
        pembahasan: "Photoshop unggul dalam editing foto tingkat profesional."
    },
    {
        q: "Untuk keluar dari Photoshop, shortcut yang digunakan adalah...",
        a: [
            "Ctrl + Z",
            "Ctrl + W",
            "Alt + F4",
            "Shift + S",
            "Ctrl + P"
        ],
        correct: 2,
        pembahasan: "Alt + F4 menutup aplikasi."
    },
    {
        q: "Perangkat lunak berikut yang mendukung pengolahan gambar bitmap, kecuali...",
        a: [
            "Paint",
            "Adobe Photoshop",
            "Corel PhotoPaint",
            "Notepad",
            "GIMP"
        ],
        correct: 3,
        pembahasan: "Notepad bukan software pengolah gambar."
    },
    {
        q: "Titik-titik warna yang membentuk gambar disebut...",
        a: [
            "Resolusi",
            "Raster",
            "Pixels",
            "Layers",
            "Density"
        ],
        correct: 2,
        pembahasan: "Pixel adalah elemen terkecil penyusun gambar bitmap."
    },
    {
        q: "Apa kekurangan utama Paint dibandingkan Photoshop?",
        a: [
            "Tidak mendukung teks",
            "Terbatas untuk pengeditan sederhana",
            "Tidak mendukung warna",
            "Tidak dapat menyimpan file",
            "Terlalu rumit"
        ],
        correct: 1,
        pembahasan: "Paint hanya mampu mengedit gambar dalam tingkat dasar."
    },
    {
        q: "Salah satu contoh file gambar berbasis bitmap adalah...",
        a: [
            ".svg",
            ".psd",
            ".png",
            ".ai",
            ".docx"
        ],
        correct: 2,
        pembahasan: "PNG adalah format gambar bitmap."
    },
    {
        q: "Corel PhotoPaint biasanya digunakan bersama dengan...",
        a: [
            "CorelDRAW",
            "Photoshop",
            "Illustrator",
            "Paint",
            "Notepad"
        ],
        correct: 0,
        pembahasan: "Corel PhotoPaint adalah pendamping CorelDRAW untuk mengolah bitmap."
    },
    {
        q: "Bagaimana cara mengatur resolusi gambar di Photoshop?",
        a: [
            "Menu Filter",
            "Menu Image > Image Size",
            "Toolbox",
            "Shortcut Ctrl + R",
            "Menggunakan layer baru"
        ],
        correct: 1,
        pembahasan: "Resolusi diatur melalui Image > Image Size."
    }
];