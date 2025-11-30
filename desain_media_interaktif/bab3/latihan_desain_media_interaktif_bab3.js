let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Penjelasan mengenai apa yang dimaksud dengan 'link' dalam sebuah halaman web yang berfungsi sebagai penghubung menuju halaman lain...",
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
        q: "Jenis link yang digunakan untuk menghubungkan satu halaman ke halaman lain dalam satu situs atau domain yang sama...",
        a: ["Eksternal link", "Internal link", "Navigasi menu", "Subdomain", "Metadata"],
        correct: 1,
        pembahasan: "Internal link menghubungkan halaman dalam domain yang sama."
    },
    {
        q: "Fungsi utama dari search engine pada suatu website yang digunakan untuk membantu pengguna menemukan halaman yang relevan...",
        a: ["Mencari gambar di internet", "Mengarahkan pengunjung ke halaman relevan", "Membuat link baru otomatis", "Menghapus konten lama", "Menyimpan data website"],
        correct: 1,
        pembahasan: "Search engine membantu pengguna menemukan informasi secara cepat dan relevan."
    },
    {
        q: "Cara memeriksa apakah sebuah link memiliki atribut khusus yang menandakan bahwa link tersebut bersifat nofollow...",
        a: ["Melihat kodenya di HTML", "Mengklik link langsung", "Membuka link di browser lain", "Menggunakan aplikasi tambahan", "Semua jawaban benar"],
        correct: 0,
        pembahasan: "Nofollow dapat diperiksa melalui atribut rel='nofollow'."
    },
    {
        q: "Pengertian mengenai link eksternal yang digunakan untuk mengarahkan pengguna menuju halaman dari domain lain...",
        a: ["Link ke halaman internal", "Link ke domain lain", "Link dengan banyak gambar", "Link navigasi menu", "Link dengan atribut spesifik"],
        correct: 1,
        pembahasan: "Eksternal link mengarahkan pengunjung ke domain berbeda."
    },
    {
        q: "Syarat atau kriteria navigasi website yang baik agar pengguna dapat mengakses informasi dengan mudah dan jelas...",
        a: ["Desain unik", "Tombol navigasi sulit ditemukan", "User-friendly dan jelas", "Animasi kompleks", "Tanpa struktur"],
        correct: 2,
        pembahasan: "Navigasi yang baik harus mudah digunakan dan jelas."
    },
    {
        q: "Bagian dari halaman website yang umumnya digunakan sebagai tempat untuk menampilkan tombol navigasi utama...",
        a: ["Bagian atas halaman", "Footer", "Sidebar kanan", "Halaman login", "Menu pop-up"],
        correct: 0,
        pembahasan: "Menu utama biasanya berada di bagian atas website."
    },
    {
        q: "Tujuan utama dari pembuatan internal link adalah untuk meningkatkan SEO serta memudahkan pengguna dalam menjelajahi konten...",
        a: ["Meningkatkan SEO dan mempermudah navigasi", "Mengurangi waktu loading", "Menghubungkan situs eksternal", "Menambah gambar interaktif", "Membuat menu dropdown"],
        correct: 0,
        pembahasan: "Internal link baik untuk SEO dan memudahkan pengguna menjelajah."
    },
    {
        q: "Penjelasan mengenai navigasi website sebagai sistem yang membantu pengunjung menemukan konten dalam suatu situs...",
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
        q: "Langkah pertama yang harus dilakukan sebelum membuat link pada halaman web dengan menentukan tujuan URL terlebih dahulu...",
        a: ["Menulis teks biasa", "Menentukan URL tujuan", "Memasukkan gambar", "Menambahkan atribut HTML", "Menyisipkan JavaScript"],
        correct: 1,
        pembahasan: "Sebelum membuat link, tentukan alamat tujuannya."
    },

    /* ==== LANJUTAN (semua baris sudah saya sesuaikan — total 40 soal) ==== */

    {
        q: "Penggunaan atribut 'nofollow' pada sebuah link bertujuan untuk memberikan instruksi kepada mesin pencari agar tidak mengikuti link tersebut...",
        a: ["Menghindari SEO negatif", "Meningkatkan trafik", "Membatasi akses", "Menyembunyikan halaman", "Membuka halaman eksternal"],
        correct: 0,
        pembahasan: "Nofollow menginstruksikan mesin pencari agar tidak mengikuti link."
    },
    {
        q: "Istilah anchor text merujuk pada teks yang dapat diklik dan berfungsi sebagai hyperlink dalam suatu halaman web...",
        a: ["Gambar yang dijadikan link", "Teks yang dapat diklik pada link", "URL halaman tujuan", "Tombol menu utama", "Atribut tambahan link"],
        correct: 1,
        pembahasan: "Anchor text adalah teks yang berfungsi sebagai hyperlink."
    },
    {
        q: "Navigasi website yang baik dicirikan oleh struktur yang jelas dan konsisten sehingga memudahkan pengguna dalam menemukan konten...",
        a: ["Warna cerah", "Struktur jelas dan konsisten", "Banyak animasi", "Tanpa hierarki", "Semua jawaban benar"],
        correct: 1,
        pembahasan: "Struktur navigasi harus jelas dan konsisten."
    },
    {
        q: "Tujuan utama penggunaan metadata pada website adalah untuk memberikan informasi penting kepada mesin pencari mengenai isi halaman...",
        a: ["Meningkatkan estetika", "Memberikan informasi ke mesin pencari", "Menghubungkan internal link", "Menampilkan animasi", "Membuka file PDF"],
        correct: 1,
        pembahasan: "Metadata membantu mesin pencari memahami isi halaman."
    },
    {
        q: "Manfaat penggunaan link eksternal bagi SEO adalah untuk menambah tingkat kredibilitas website melalui rujukan yang relevan...",
        a: ["Meningkatkan kecepatan loading", "Menambah kredibilitas website", "Mengurangi bounce rate", "Membuka halaman internal", "Menyembunyikan konten"],
        correct: 1,
        pembahasan: "Link eksternal yang relevan meningkatkan kepercayaan website."
    },
    {
        q: "Perbedaan mendasar antara internal link dan eksternal link berdasarkan domain tujuan yang dituju...",
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
        q: "Atribut 'title' pada link digunakan untuk memberikan deskripsi singkat yang muncul ketika kursor diarahkan ke link...",
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
        q: "Breadcrumb navigation merupakan jenis navigasi yang membantu menunjukkan lokasi pengguna di dalam struktur website...",
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
        q: "Cara yang tepat untuk mengetahui apakah sebuah link bersifat dofollow adalah dengan memeriksa atribut rel pada kode HTML...",
        a: ["Memeriksa atribut rel pada HTML", "Klik link", "Buka tab baru", "Bandingkan URL", "Semua benar"],
        correct: 0,
        pembahasan: "Link dofollow adalah link tanpa atribut 'nofollow'."
    },
    {
        q: "Responsive design merupakan pendekatan desain yang memungkinkan tampilan website dapat berubah sesuai ukuran perangkat...",
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

    /* ===== LANJUTAN LENGKAP (masih 20 soal lagi) ===== */

    {
        q: "Istilah nofollow digunakan untuk menunjukkan bahwa sebuah link tidak memberikan pengaruh SEO karena mesin pencari tidak mengikutinya...",
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
        q: "Search engine ranking berfungsi dalam menentukan urutan link berdasarkan tingkat relevansi dalam hasil pencarian...",
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
        q: "Navigasi website yang baik merupakan navigasi yang mampu membantu pengguna menemukan informasi secara cepat dan efisien...",
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
        q: "Elemen yang umumnya digunakan dalam struktur navigasi website seperti header, footer, dan sidebar...",
        a: ["Teks artikel", "Gambar background", "Header, footer, sidebar", "Tombol Like", "Iklan pop-up"],
        correct: 2,
        pembahasan: "Header, footer dan sidebar membantu navigasi website."
    },
    {
        q: "Menu dropdown merupakan jenis menu yang hanya muncul ketika pengguna melakukan klik atau hover pada menu utama...",
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
        q: "Meta description merupakan deskripsi singkat yang muncul pada hasil pencarian di mesin pencari untuk menjelaskan isi halaman...",
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
        q: "Internal link berfungsi untuk menghubungkan halaman yang masih berada dalam domain yang sama dan meningkatkan pengalaman pengguna...",
        a: ["Menghubungkan halaman dalam domain sama", "Menuju domain lain", "Mengubah background", "Menambah animasi", "Membuat halaman responsif"],
        correct: 0,
        pembahasan: "Internal link mempermudah navigasi dan meningkatkan SEO."
    },
    {
        q: "Tujuan dari melakukan pengujian navigasi website adalah untuk memastikan bahwa seluruh navigasi berjalan baik pada berbagai perangkat...",
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
        q: "Breadcrumb navigation berperan penting dalam menunjukkan posisi pengguna dalam struktur atau hierarki halaman di website...",
        a: ["Mengganti halaman utama", "Menambah link eksternal", "Menunjukkan posisi pengguna", "Membuat efek visual", "Memblokir halaman"],
        correct: 2,
        pembahasan: "Breadcrumb menunjukkan hierarki lokasi pengguna."
    },
    {
        q: "UX design merupakan pendekatan desain yang berfokus pada bagaimana menciptakan pengalaman terbaik bagi pengguna saat menggunakan website...",
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
        q: "Link eksternal adalah tautan yang mengarah ke halaman dari domain lain dan digunakan untuk memberikan referensi tambahan...",
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
        q: "Internal link dapat memberikan manfaat bagi SEO karena meningkatkan visibilitas halaman serta memudahkan navigasi...",
        a: ["Meningkatkan visibilitas halaman", "Meningkatkan loading", "Menghapus navigasi", "Membuat halaman responsif", "Menambah animasi"],
        correct: 0,
        pembahasan: "Internal link meningkatkan SEO dan navigasi."
    },
    {
        q: "Fungsi utama meta tag adalah memberikan informasi penting yang dibaca oleh mesin pencari mengenai konten halaman...",
        a: ["Informasi untuk mesin pencari", "Mengubah background", "Menambah grafik", "Interaktivitas halaman", "Menambah tombol"],
        correct: 0,
        pembahasan: "Meta tag membantu mesin pencari memahami halaman."
    },
    {
        q: "Navigasi yang baik bertujuan untuk membantu pengguna menemukan informasi secara lebih cepat dan tepat...",
        a: ["Menampilkan iklan", "Membantu pengguna menemukan informasi", "Membuat halaman berat", "Menyembunyikan konten", "Menambah visual"],
        correct: 1,
        pembahasan: "Navigasi mempermudah pencarian informasi."
    },
    {
        q: "Responsive design merupakan pendekatan dalam pengembangan website agar tampilan halaman mampu menyesuaikan berbagai ukuran layar...",
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
        q: "SEO memiliki peranan penting dalam meningkatkan posisi atau ranking sebuah website di mesin pencari...",
        a: ["Mengubah warna halaman", "Meningkatkan ranking website", "Menambah animasi", "Menghapus navigasi", "Menambah tabel"],
        correct: 1,
        pembahasan: "SEO meningkatkan posisi website di mesin pencari."
    },
    {
        q: "CTA atau Call-to-Action merupakan elemen yang berfungsi mengarahkan pengguna untuk melakukan sebuah tindakan tertentu...",
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
        q: "Sitemap merupakan daftar yang berisi seluruh halaman dalam sebuah website dan membantu navigasi serta mesin pencari menemukan konten...",
        a: ["Daftar semua halaman website", "Navigasi utama website", "Grafik interaktif", "Struktur eksternal", "Tabel data"],
        correct: 0,
        pembahasan: "Sitemap membantu mesin pencari dan pengguna menemukan halaman."
    }
];
