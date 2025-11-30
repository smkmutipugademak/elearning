let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Software pengolah gambar berikut yang tidak termasuk perangkat lunak berbasis vektor adalah ………",
        a: [
            "CorelDraw",
            "Adobe Illustrator",
            "Adobe Photoshop",
            "GIMP",
            "Inkscape"
        ],
        correct: 2,
        pembahasan: "Adobe Photoshop adalah perangkat lunak berbasis bitmap, bukan vektor."
    },
    {
        q: "Fungsi utama CorelDraw adalah ………",
        a: [
            "Mengedit foto",
            "Mengolah gambar vektor",
            "Mengelola video",
            "Membuat animasi",
            "Mengedit audio"
        ],
        correct: 1,
        pembahasan: "CorelDraw dirancang untuk membuat dan mengolah gambar berbasis vektor."
    },
    {
        q: "Keunggulan Adobe Illustrator dibandingkan CorelDraw adalah ………",
        a: [
            "Tidak memakan memori besar",
            "Fitur desain grafis yang sangat lengkap",
            "User-friendly",
            "Kompatibilitas dengan format lain",
            "Gratis digunakan"
        ],
        correct: 1,
        pembahasan: "Adobe Illustrator memiliki fitur desain grafis yang sangat lengkap untuk industri profesional."
    },
    {
        q: "GIMP merupakan software yang bersifat ………",
        a: [
            "Berbayar",
            "Open-source",
            "Proprietary",
            "Hanya untuk Windows",
            "Tidak mendukung format vektor"
        ],
        correct: 1,
        pembahasan: "GIMP adalah software gratis dan open-source."
    },
    {
        q: "Software pengolah gambar yang paling sering digunakan untuk desain grafis profesional adalah ………",
        a: [
            "Paint",
            "Adobe Illustrator",
            "CorelDraw",
            "GIMP",
            "Adobe Photoshop"
        ],
        correct: 1,
        pembahasan: "Adobe Illustrator merupakan standar industri untuk desain berbasis vektor."
    },
    {
        q: "Efek Blend pada CorelDraw digunakan untuk ………",
        a: [
            "Membuat gradasi warna",
            "Memberi bayangan pada objek",
            "Menggabungkan dua objek",
            "Membuat efek 3D",
            "Membuat tekstur"
        ],
        correct: 3,
        pembahasan: "Efek Blend menciptakan transisi atau efek 3D antara dua objek."
    },
    {
        q: "Langkah pertama untuk memulai CorelDraw adalah ………",
        a: [
            "Membuat dokumen baru",
            "Memilih template",
            "Menyalakan komputer",
            "Membuka file sebelumnya",
            "Mengatur pengaturan awal"
        ],
        correct: 2,
        pembahasan: "Langkah awal adalah menyalakan komputer dan membuka aplikasi CorelDraw."
    },
    {
        q: "Keunggulan utama CorelDraw dibandingkan Adobe Illustrator adalah ………",
        a: [
            "Fitur lengkap",
            "Kemampuan tracing otomatis",
            "Kompatibilitas tinggi",
            "User-friendly",
            "Gratis digunakan"
        ],
        correct: 3,
        pembahasan: "CorelDraw dikenal memiliki antarmuka yang lebih mudah dipahami pemula."
    },
    {
        q: "Langkah terakhir dalam membuat dokumen di CorelDraw adalah ………",
        a: [
            "Menyimpan file",
            "Menambahkan efek",
            "Mengatur layout",
            "Memilih warna",
            "Menutup program"
        ],
        correct: 0,
        pembahasan: "Langkah terakhir adalah menyimpan dokumen."
    },
    {
        q: "Adobe Photoshop lebih dikenal untuk ………",
        a: [
            "Desain berbasis vektor",
            "Edit foto dan bitmap",
            "Pembuatan animasi",
            "Desain 3D",
            "Edit audio"
        ],
        correct: 1,
        pembahasan: "Photoshop digunakan untuk mengedit foto dan gambar bitmap."
    },
    {
        q: "Perangkat lunak yang didistribusikan secara gratis dan open-source adalah ………",
        a: [
            "CorelDraw",
            "GIMP",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Paint"
        ],
        correct: 1,
        pembahasan: "GIMP adalah software gratis dan open-source."
    },
    {
        q: "Fitur Drop Shadow pada CorelDraw digunakan untuk ………",
        a: [
            "Memberi bayangan pada objek",
            "Membuat gradasi warna",
            "Membuat objek transparan",
            "Menambahkan efek garis",
            "Memotong gambar"
        ],
        correct: 0,
        pembahasan: "Drop Shadow digunakan untuk menambahkan bayangan pada objek."
    },
    {
        q: "Efek Distort pada CorelDraw memungkinkan pengguna untuk ………",
        a: [
            "Membuat bayangan",
            "Memutar objek",
            "Mengubah bentuk objek secara abstrak",
            "Menambahkan warna",
            "Membuat objek transparan"
        ],
        correct: 2,
        pembahasan: "Distort digunakan untuk mengubah bentuk objek menjadi lebih dinamis dan abstrak."
    },
    {
        q: "Untuk membuat dokumen baru di CorelDraw, pengguna perlu memilih ………",
        a: [
            "Open graphic",
            "New document",
            "Template",
            "Layout",
            "Edit file"
        ],
        correct: 1,
        pembahasan: "Membuat dokumen baru dilakukan melalui opsi 'New document'."
    },
    {
        q: "Kelemahan utama GIMP adalah ………",
        a: [
            "Tidak mendukung open-source",
            "Tidak mendukung format vektor",
            "Hanya mendukung 8 bits per-channel",
            "Memakan banyak memori",
            "Tidak dapat digunakan di Mac OS"
        ],
        correct: 2,
        pembahasan: "GIMP hanya mendukung 8 bits per-channel sehingga kedalaman warnanya terbatas."
    },
    {
        q: "CorelDraw mendukung berbagai fitur berikut, kecuali ………",
        a: [
            "Membuat logo",
            "Mengedit foto",
            "Desain vektor",
            "Pembuatan animasi",
            "Layout dokumen"
        ],
        correct: 3,
        pembahasan: "CorelDraw tidak digunakan untuk membuat animasi."
    },
    {
        q: "Untuk menyimpan dokumen di CorelDraw, langkah yang benar adalah ………",
        a: [
            "File > Save",
            "Edit > Save",
            "Tools > Save",
            "Klik Export",
            "Klik Print"
        ],
        correct: 0,
        pembahasan: "Dokumen disimpan melalui menu File > Save."
    },
    {
        q: "Efek Contour pada CorelDraw digunakan untuk ………",
        a: [
            "Memberikan garis tepi pada objek",
            "Membuat objek transparan",
            "Menambahkan warna",
            "Memberikan bayangan",
            "Memotong objek"
        ],
        correct: 0,
        pembahasan: "Contour menambahkan garis tepi pada objek, baik ke dalam maupun ke luar."
    },
    {
        q: "Adobe Photoshop dikenal sebagai software yang digunakan untuk ………",
        a: [
            "Software vektor",
            "Software foto dan bitmap",
            "Software 3D",
            "Software animasi",
            "Software layout"
        ],
        correct: 1,
        pembahasan: "Photoshop digunakan untuk pengeditan foto dan grafik bitmap."
    },
    {
        q: "Shortcut untuk keluar dari CorelDraw adalah ………",
        a: [
            "Ctrl + S",
            "Ctrl + Z",
            "Alt + F4",
            "Shift + Ctrl + Z",
            "Ctrl + Alt + S"
        ],
        correct: 2,
        pembahasan: "Alt + F4 adalah shortcut standar untuk menutup aplikasi."
    }
];
