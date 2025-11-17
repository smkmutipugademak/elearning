let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan 'link' dalam halaman web?",
        a: [
            "Teks atau objek yang berisi animasi",
            "Teks atau objek yang dapat diklik untuk menuju ke halaman lain",
            "Halaman web yang berisi gambar interaktif",
            "Tombol navigasi utama dalam sebuah website",
            "Semua jawaban benar"
        ],
        correct: 1,
        pembahasan: "Link adalah teks atau objek yang berfungsi sebagai pranala ke halaman lain."
    },
    {
        q: "Apa jenis link yang menghubungkan halaman dalam satu situs web?",
        a: ["Eksternal link", "Internal link", "Navigasi menu", "Subdomain", "Metadata"],
        correct: 1,
        pembahasan: "Internal link menghubungkan halaman dalam domain yang sama."
    },
    {
        q: "Apa fungsi utama search engine dalam website?",
        a: ["Mencari gambar di internet", "Mengarahkan pengunjung ke halaman relevan", "Membuat link baru otomatis", "Menghapus konten lama", "Menyimpan data website"],
        correct: 1,
        pembahasan: "Search engine membantu pengguna menemukan informasi secara cepat dan relevan."
    },
    {
        q: "Bagaimana cara memeriksa apakah link bersifat nofollow?",
        a: ["Melihat kodenya di HTML", "Mengklik link langsung", "Membuka link di browser lain", "Menggunakan aplikasi tambahan", "Semua jawaban benar"],
        correct: 0,
        pembahasan: "Nofollow dapat diperiksa melalui atribut rel='nofollow'."
    },
    {
        q: "Apa yang dimaksud dengan link eksternal?",
        a: ["Link ke halaman internal", "Link ke domain lain", "Link dengan banyak gambar", "Link navigasi menu", "Link dengan atribut spesifik"],
        correct: 1,
        pembahasan: "Eksternal link mengarahkan pengunjung ke domain berbeda."
    },
    {
        q: "Apa syarat navigasi website yang baik?",
        a: ["Desain unik", "Tombol navigasi sulit ditemukan", "User-friendly dan jelas", "Animasi kompleks", "Tanpa struktur"],
        correct: 2,
        pembahasan: "Navigasi yang baik harus mudah digunakan dan jelas."
    },
    {
        q: "Tombol navigasi utama biasanya berada di:",
        a: ["Bagian atas halaman", "Footer", "Sidebar kanan", "Halaman login", "Menu pop-up"],
        correct: 0,
        pembahasan: "Menu utama biasanya berada di bagian atas website."
    },
    {
        q: "Apa tujuan membuat internal link?",
        a: ["Meningkatkan SEO dan mempermudah navigasi", "Mengurangi waktu loading", "Menghubungkan situs eksternal", "Menambah gambar interaktif", "Membuat menu dropdown"],
        correct: 0,
        pembahasan: "Internal link baik untuk SEO dan memudahkan pengguna menjelajah."
    },
    {
        q: "Apa yang dimaksud dengan navigasi website?",
        a: [
            "Proses membuka file di browser",
            "Sistem yang membantu pengguna menemukan konten",
            "Struktur desain website",
            "Aplikasi membuka link",
            "Semua jawaban benar"
        ],
        correct: 1,
        pembahasan: "Navigasi memandu pengguna menemukan informasi."
    },
    {
        q: "Langkah pertama dalam membuat link di halaman web adalah...",
        a: ["Menulis teks biasa", "Menentukan URL tujuan", "Memasukkan gambar", "Menambahkan atribut HTML", "Menyisipkan JavaScript"],
        correct: 1,
        pembahasan: "Sebelum membuat link, tentukan alamat tujuannya."
    },
    {
        q: "Link dengan atribut 'nofollow' digunakan untuk:",
        a: ["Menghindari SEO negatif", "Meningkatkan trafik", "Membatasi akses", "Menyembunyikan halaman", "Membuka halaman eksternal"],
        correct: 0,
        pembahasan: "Nofollow menginstruksikan mesin pencari agar tidak mengikuti link."
    },
    {
        q: "Apa yang dimaksud dengan anchor text?",
        a: ["Gambar yang dijadikan link", "Teks yang dapat diklik pada link", "URL halaman tujuan", "Tombol menu utama", "Atribut tambahan link"],
        correct: 1,
        pembahasan: "Anchor text adalah teks yang berfungsi sebagai hyperlink."
    },
    {
        q: "Kriteria navigasi website yang baik adalah:",
        a: ["Warna cerah", "Struktur jelas dan konsisten", "Banyak animasi", "Tanpa hierarki", "Semua jawaban benar"],
        correct: 1,
        pembahasan: "Struktur navigasi harus jelas dan konsisten."
    },
    {
        q: "Tujuan utama metadata di website adalah...",
        a: ["Meningkatkan estetika", "Memberikan informasi ke mesin pencari", "Menghubungkan internal link", "Menampilkan animasi", "Membuka file PDF"],
        correct: 1,
        pembahasan: "Metadata membantu mesin pencari memahami isi halaman."
    },
    {
        q: "Manfaat link eksternal untuk SEO adalah...",
        a: ["Meningkatkan kecepatan loading", "Menambah kredibilitas website", "Mengurangi bounce rate", "Membuka halaman internal", "Menyembunyikan konten"],
        correct: 1,
        pembahasan: "Link eksternal yang relevan meningkatkan kepercayaan website."
    },
    {
        q: "Perbedaan utama internal dan eksternal link adalah...",
        a: [
            "Internal link mengarah ke domain sama, eksternal ke domain lain",
            "Internal link hanya teks, eksternal gambar",
            "Internal untuk menu utama, eksternal footer",
            "Internal lebih cepat, eksternal lebih lambat",
            "Tidak ada perbedaan"
        ],
        correct: 0,
        pembahasan: "Internal = domain sama; eksternal = domain berbeda."
    },
    {
        q: "Fungsi atribut 'title' pada link adalah...",
        a: [
            "Menambahkan animasi",
            "Memberikan deskripsi singkat saat kursor diarahkan",
            "Menyembunyikan link",
            "Mengatur warna link",
            "Membatasi akses"
        ],
        correct: 1,
        pembahasan: "Title memberi informasi tambahan ketika diarahkan kursor."
    },
    {
        q: "Apa itu breadcrumb navigation?",
        a: [
            "Navigasi tombol besar",
            "Navigasi yang menunjukkan lokasi pengguna",
            "Menu pop-up",
            "Tombol kembali",
            "Navigasi berbasis gambar"
        ],
        correct: 1,
        pembahasan: "Breadcrumb menunjukkan posisi pengguna dalam struktur website."
    },
    {
        q: "Cara menentukan link dofollow adalah...",
        a: ["Memeriksa atribut rel pada HTML", "Klik link", "Buka tab baru", "Bandingkan URL", "Semua benar"],
        correct: 0,
        pembahasan: "Link dofollow adalah link tanpa atribut 'nofollow'."
    },
    {
        q: "Apa yang dimaksud responsive design?",
        a: [
            "Navigasi berubah sesuai perangkat",
            "Navigasi penuh warna",
            "Navigasi dengan animasi",
            "Navigasi hanya desktop",
            "Navigasi pop-up"
        ],
        correct: 0,
        pembahasan: "Responsive design menyesuaikan tampilan sesuai perangkat."
    },
    {
        q: "Apa yang dimaksud nofollow pada sebuah link?",
        a: [
            "Link tidak memberi pengaruh SEO",
            "Link tidak dapat diklik",
            "Link hanya untuk admin",
            "Link sebagai placeholder",
            "Link hanya tampil di halaman utama"
        ],
        correct: 0,
        pembahasan: "Nofollow menginstruksikan mesin pencari tidak mengikuti link."
    },
    {
        q: "Fungsi search engine ranking adalah...",
        a: [
            "Menentukan warna hasil pencarian",
            "Mengatur urutan link berdasarkan relevansi",
            "Menampilkan gambar",
            "Memblokir situs tertentu",
            "Membatasi akses"
        ],
        correct: 1,
        pembahasan: "Ranking menentukan posisi website dalam hasil pencarian."
    },
    {
        q: "Navigasi yang baik adalah...",
        a: [
            "Menggunakan banyak animasi",
            "Membantu pengguna menemukan informasi dengan cepat",
            "Selalu di bawah halaman",
            "Hanya menggunakan gambar",
            "Memiliki banyak tab"
        ],
        correct: 1,
        pembahasan: "Navigasi harus efisien dan mudah digunakan."
    },
    {
        q: "Contoh elemen navigasi website adalah...",
        a: ["Teks artikel", "Gambar background", "Header, footer, sidebar", "Tombol Like", "Iklan pop-up"],
        correct: 2,
        pembahasan: "Header, footer dan sidebar membantu navigasi website."
    },
    {
        q: "Apa yang dimaksud menu dropdown?",
        a: [
            "Menu yang selalu terlihat",
            "Menu muncul saat pengguna mengklik atau hover",
            "Menu dengan satu pilihan",
            "Menu menuju domain eksternal",
            "Menu tanpa navigasi"
        ],
        correct: 1,
        pembahasan: "Menu dropdown memperlihatkan submenu saat dipilih."
    },
    {
        q: "Meta description adalah...",
        a: [
            "Deskripsi singkat yang muncul di hasil pencarian",
            "Judul halaman",
            "Nama domain",
            "Navigasi internal",
            "Struktur URL"
        ],
        correct: 0,
        pembahasan: "Meta description memberi ringkasan halaman untuk mesin pencari."
    },
    {
        q: "Fungsi internal link adalah...",
        a: ["Menghubungkan halaman dalam domain sama", "Menuju domain lain", "Mengubah background", "Menambah animasi", "Membuat halaman responsif"],
        correct: 0,
        pembahasan: "Internal link mempermudah navigasi dan meningkatkan SEO."
    },
    {
        q: "Tujuan testing navigasi website adalah...",
        a: [
            "Menambah grafis",
            "Memastikan navigasi berfungsi di semua perangkat",
            "Mengurangi loading",
            "Menghapus link",
            "Menambah animasi"
        ],
        correct: 1,
        pembahasan: "Testing memastikan navigasi nyaman di semua perangkat."
    },
    {
        q: "Peran breadcrumb navigation adalah...",
        a: ["Mengganti halaman utama", "Menambah link eksternal", "Menunjukkan posisi pengguna", "Membuat efek visual", "Memblokir halaman"],
        correct: 2,
        pembahasan: "Breadcrumb menunjukkan hierarki lokasi pengguna."
    },
    {
        q: "UX design adalah...",
        a: [
            "Desain berbasis efek animasi",
            "Desain fokus pengalaman pengguna",
            "Desain penuh warna",
            "Desain untuk SEO",
            "Desain dengan navigasi otomatis"
        ],
        correct: 1,
        pembahasan: "UX design bertujuan meningkatkan pengalaman pengguna."
    },
    {
        q: "Eksternal link adalah...",
        a: [
            "Link ke halaman dalam domain yang sama",
            "Link menuju domain lain",
            "Link tidak dapat digunakan",
            "Link hanya di halaman utama",
            "Link untuk mencetak halaman"
        ],
        correct: 1,
        pembahasan: "Eksternal link mengarah ke domain lain."
    },
    {
        q: "Manfaat internal link adalah...",
        a: ["Meningkatkan visibilitas halaman", "Meningkatkan loading", "Menghapus navigasi", "Membuat halaman responsif", "Menambah animasi"],
        correct: 0,
        pembahasan: "Internal link meningkatkan SEO dan navigasi."
    },
    {
        q: "Fungsi meta tag adalah...",
        a: ["Informasi untuk mesin pencari", "Mengubah background", "Menambah grafik", "Interaktivitas halaman", "Menambah tombol"],
        correct: 0,
        pembahasan: "Meta tag membantu mesin pencari memahami halaman."
    },
    {
        q: "Tujuan navigasi yang baik adalah...",
        a: ["Menampilkan iklan", "Membantu pengguna menemukan informasi", "Membuat halaman berat", "Menyembunyikan konten", "Menambah visual"],
        correct: 1,
        pembahasan: "Navigasi mempermudah pencarian informasi."
    },
    {
        q: "Responsive design adalah...",
        a: [
            "Tampilan menyesuaikan perangkat",
            "Desain dengan banyak animasi",
            "Hanya untuk desktop",
            "Minimalis warna",
            "Desain dengan banyak tab"
        ],
        correct: 0,
        pembahasan: "Responsive design menyesuaikan halaman dengan ukuran layar."
    },
    {
        q: "Peran SEO adalah...",
        a: ["Mengubah warna halaman", "Meningkatkan ranking website", "Menambah animasi", "Menghapus navigasi", "Menambah tabel"],
        correct: 1,
        pembahasan: "SEO meningkatkan posisi website di mesin pencari."
    },
    {
        q: "CTA (Call-to-Action) adalah...",
        a: [
            "Elemen yang mendorong pengguna bertindak",
            "Teks deskripsi halaman",
            "Gambar latar",
            "Navigasi dalam halaman",
            "Judul utama"
        ],
        correct: 0,
        pembahasan: "CTA mengajak pengguna melakukan tindakan seperti daftar, beli, dll."
    },
    {
        q: "Apa yang dimaksud sitemap?",
        a: ["Daftar semua halaman website", "Navigasi utama website", "Grafik interaktif", "Struktur eksternal", "Tabel data"],
        correct: 0,
        pembahasan: "Sitemap membantu mesin pencari dan pengguna menemukan halaman."
    }
];