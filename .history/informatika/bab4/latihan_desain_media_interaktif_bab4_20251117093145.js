let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa saja tiga komponen utama dalam sistem komputer?",
        a: [
            "Input, proses, output",
            "Hardware, software, brainware",
            "Data, pengguna, aplikasi",
            "Perangkat input, CPU, penyimpanan",
            "Sistem operasi, GUI, CLI"
        ],
        correct: 1,
        pembahasan: "Sistem komputer terdiri dari hardware, software, dan brainware."
    },
    {
        q: "Perangkat manakah yang termasuk perangkat input?",
        a: ["Monitor", "Printer", "Mouse", "Speaker", "Hard disk"],
        correct: 2,
        pembahasan: "Mouse merupakan perangkat input untuk mengontrol kursor."
    },
    {
        q: "Komponen mana yang dianggap sebagai otak komputer?",
        a: ["Keyboard", "CPU", "Hard disk", "RAM", "Power supply"],
        correct: 1,
        pembahasan: "CPU memproses instruksi sehingga disebut otak komputer."
    },
    {
        q: "Apa fungsi utama perangkat output?",
        a: ["Menyimpan data", "Memproses input", "Menampilkan hasil", "Mentransfer file", "Menjalankan program"],
        correct: 2,
        pembahasan: "Perangkat output menampilkan hasil pengolahan komputer."
    },
    {
        q: "Manakah yang BUKAN perangkat penyimpanan?",
        a: ["Hard disk", "Flash disk", "CD-ROM", "Speaker", "Disket"],
        correct: 3,
        pembahasan: "Speaker adalah perangkat output, bukan penyimpanan."
    },
    {
        q: "Perangkat lunak apa yang berfungsi sebagai penghubung antara perangkat keras dan pengguna?",
        a: ["Aplikasi", "Utilitas", "Sistem operasi", "Firmware", "Basis data"],
        correct: 2,
        pembahasan: "OS menghubungkan hardware dengan user."
    },
    {
        q: "Apa peran utama brainware dalam sistem komputer?",
        a: [
            "Menjalankan instruksi perangkat lunak",
            "Mengelola perangkat keras",
            "Menggunakan sistem untuk tugas tertentu",
            "Memproses dan menyimpan data",
            "Mendesain struktur komputer"
        ],
        correct: 2,
        pembahasan: "Brainware adalah pengguna yang mengoperasikan komputer."
    },
    {
        q: "Generasi komputer mana yang memperkenalkan mikroprosesor?",
        a: ["Pertama", "Kedua", "Ketiga", "Keempat", "Kelima"],
        correct: 3,
        pembahasan: "Mikroprosesor diperkenalkan pada generasi keempat."
    },
    {
        q: "Mikrokomputer biasanya digunakan untuk?",
        a: ["Pusat data", "Penggunaan pribadi", "Keperluan militer", "Bisnis skala besar", "Penelitian luar angkasa"],
        correct: 1,
        pembahasan: "Mikrokomputer (PC, laptop) digunakan secara pribadi."
    },
    {
        q: "Apa keunggulan utama superkomputer?",
        a: ["Portabilitas", "Kecepatan tinggi", "Biaya rendah", "Efisiensi energi", "Antarmuka ramah pengguna"],
        correct: 1,
        pembahasan: "Superkomputer mampu memproses data dengan sangat cepat."
    },
    {
        q: "Apa kepanjangan dari GUI?",
        a: ["General User Interface", "Graphical User Interface", "Global User Interaction", "General Usage Input", "Graphic Usage Index"],
        correct: 1,
        pembahasan: "GUI adalah antarmuka grafis untuk berinteraksi dengan komputer."
    },
    {
        q: "Antarmuka sistem mana yang bergantung pada perintah berbasis teks?",
        a: ["GUI", "CLI", "API", "TUI", "HTML"],
        correct: 1,
        pembahasan: "CLI menggunakan perintah teks."
    },
    {
        q: "Perangkat penyimpanan mana yang memiliki kapasitas terbesar?",
        a: ["Hard disk", "CD-ROM", "Flash disk", "Disket", "Printer"],
        correct: 0,
        pembahasan: "Hard disk memiliki kapasitas terbesar di antara opsi tersebut."
    },
    {
        q: "Apa peran 'administrator basis data'?",
        a: ["Mendesain antarmuka", "Mengelola jaringan", "Menjaga integritas data", "Membuat program", "Memecahkan masalah OS"],
        correct: 2,
        pembahasan: "DBA mengelola dan menjaga keakuratan data."
    },
    {
        q: "Sistem operasi mana yang dikembangkan oleh Linus Torvalds?",
        a: ["DOS", "Windows", "Linux", "Unix", "MacOS"],
        correct: 2,
        pembahasan: "Linux dibuat oleh Linus Torvalds."
    },
    {
        q: "Apa yang membedakan Unix dari sistem operasi lainnya?",
        a: ["Antarmuka perintah", "Kemampuan multitasking", "Fokus pengguna rumahan", "Integrasi hardware", "Skalabilitas terbatas"],
        correct: 1,
        pembahasan: "Unix terkenal dengan multitasking dan multiuser."
    },
    {
        q: "Komponen mana yang menyimpan firmware BIOS?",
        a: ["CPU", "Hard disk", "ROM", "RAM", "Cache"],
        correct: 2,
        pembahasan: "BIOS disimpan dalam ROM agar tidak hilang saat listrik mati."
    },
    {
        q: "Apa fungsi utama komputer mainframe?",
        a: ["Hiburan", "Militer", "Pemrosesan data skala besar", "Eksplorasi luar angkasa", "Komputasi portable"],
        correct: 2,
        pembahasan: "Mainframe dipakai perusahaan besar untuk pemrosesan data."
    },
    {
        q: "Kategori perangkat lunak seperti Microsoft Word dan Excel termasuk?",
        a: ["Sistem software", "Utilitas", "Aplikasi", "Sistem operasi", "Driver"],
        correct: 2,
        pembahasan: "Word & Excel adalah software aplikasi."
    },
    {
        q: "Apa fungsi utama perangkat penyimpanan?",
        a: ["Memproses data", "Mengelola input", "Menyimpan data permanen", "Menampilkan info", "Menjalankan perintah"],
        correct: 2,
        pembahasan: "Storage menyimpan data jangka panjang."
    },
    {
        q: "Apa fungsi utama perangkat keras dalam sistem komputer?",
        a: ["Mengontrol akses", "Menyimpan perangkat lunak", "Melakukan proses fisik", "Membuat antarmuka", "Menyusun program"],
        correct: 2,
        pembahasan: "Hardware menjalankan proses fisik seperti input, proses, output."
    },
    {
        q: "Jenis perangkat lunak apa yang digunakan untuk menjalankan perangkat keras?",
        a: ["Aplikasi web", "Utilitas", "Sistem operasi", "Browser", "Driver"],
        correct: 2,
        pembahasan: "OS adalah pengendali utama perangkat keras."
    },
    {
        q: "Manakah berikut ini yang termasuk media penyimpanan eksternal?",
        a: ["RAM", "CD-ROM", "ROM", "Processor", "Cache"],
        correct: 1,
        pembahasan: "CD-ROM dapat dilepas sehingga termasuk penyimpanan eksternal."
    },
    {
        q: "Apa yang dimaksud dengan CLI?",
        a: ["Antarmuka grafis", "Antarmuka teks", "Pengontrol hardware", "OS cloud", "Teknologi suara"],
        correct: 1,
        pembahasan: "CLI adalah antarmuka berbasis teks."
    },
    {
        q: "Perangkat apa yang menampilkan output visual?",
        a: ["Keyboard", "Monitor", "Printer", "Hard disk", "Mouse"],
        correct: 1,
        pembahasan: "Monitor menampilkan output visual."
    },
    {
        q: "Apa keunggulan utama flashdisk?",
        a: ["Kapasitas besar & murah", "Portabel & praktis", "Transfer lambat", "Ukuran besar", "Kapasitas tak terbatas"],
        correct: 1,
        pembahasan: "Flashdisk kecil, mudah dibawa, dan praktis."
    },
    {
        q: "Apa peran utama software aplikasi?",
        a: ["Menghubungkan hardware-user", "Memberikan fungsi spesifik", "Menyimpan data", "Mengendalikan CPU", "Memperbaiki error"],
        correct: 1,
        pembahasan: "Aplikasi dibuat untuk kebutuhan tertentu."
    },
    {
        q: "Apa tujuan utama BIOS?",
        a: ["Menyimpan data", "Menginisialisasi hardware", "Mengelola jaringan", "Mengatur GUI", "Memberi aplikasi tambahan"],
        correct: 1,
        pembahasan: "BIOS memulai proses boot dan mengecek perangkat."
    },
    {
        q: "Sistem operasi mana yang bersifat open-source?",
        a: ["Windows", "MacOS", "Linux", "DOS", "Unix"],
        correct: 2,
        pembahasan: "Linux dapat digunakan dan dimodifikasi gratis."
    },
    {
        q: "Apa yang membedakan mainframe?",
        a: [
            "Kecil dan ringan",
            "Untuk pengolahan data skala besar",
            "Kecepatan rendah",
            "Untuk pribadi",
            "Tidak butuh OS"
        ],
        correct: 1,
        pembahasan: "Mainframe dibuat untuk pengolahan data besar."
    }
];

