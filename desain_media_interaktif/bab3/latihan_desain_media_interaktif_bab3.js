let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Dalam sebuah halaman web, 'link' berfungsi sebagai ......",
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
        q: "Jenis link yang menghubungkan satu halaman ke halaman lain dalam domain yang sama disebut ......",
        a: ["Eksternal link", "Internal link", "Navigasi menu", "Subdomain", "Metadata"],
        correct: 1,
        pembahasan: "Internal link menghubungkan halaman dalam domain yang sama."
    },
    {
        q: "Fungsi utama fitur search engine pada sebuah website adalah untuk ......",
        a: ["Mencari gambar di internet", "Mengarahkan pengunjung ke halaman yang relevan", "Membuat link baru otomatis", "Menghapus konten lama", "Menyimpan data website"],
        correct: 1,
        pembahasan: "Search engine membantu pengguna menemukan informasi secara cepat dan relevan."
    },
    {
        q: "Cara teknis untuk memeriksa apakah sebuah link memiliki atribut nofollow adalah dengan ......",
        a: ["Melihat atribut rel pada kode HTML", "Mengklik link langsung", "Membuka link di browser lain", "Menggunakan aplikasi tambahan", "Semua jawaban benar"],
        correct: 0,
        pembahasan: "Nofollow dapat diperiksa melalui atribut rel='nofollow'."
    },
    {
        q: "Link eksternal didefinisikan sebagai tautan yang mengarahkan pengguna menuju ......",
        a: ["Halaman internal", "Halaman pada domain lain", "Koleksi gambar", "Navigasi menu footer", "Bagian atas halaman"],
        correct: 1,
        pembahasan: "Eksternal link mengarahkan pengunjung ke domain berbeda."
    },
    {
        q: "Kriteria utama dari sistem navigasi website yang baik adalah ......",
        a: ["Desain yang unik dan rumit", "Tombol navigasi tersembunyi", "User-friendly, jelas, dan mudah digunakan", "Menggunakan animasi kompleks", "Tidak memiliki struktur hierarki"],
        correct: 2,
        pembahasan: "Navigasi yang baik harus mudah digunakan dan jelas."
    },
    {
        q: "Tombol navigasi utama dalam sebuah website umumnya diletakkan pada ......",
        a: ["Bagian atas halaman (Header)", "Footer", "Sidebar kanan", "Halaman login", "Menu pop-up"],
        correct: 0,
        pembahasan: "Menu utama biasanya berada di bagian atas website."
    },
    {
        q: "Selain meningkatkan SEO, tujuan utama pembuatan internal link adalah ......",
        a: ["Memudahkan pengguna menjelajahi konten terkait", "Mengurangi waktu loading", "Menghubungkan situs eksternal", "Menambah gambar interaktif", "Membuat menu dropdown"],
        correct: 0,
        pembahasan: "Internal link baik untuk SEO dan memudahkan pengguna menjelajah."
    },
    {
        q: "Navigasi website dapat didefinisikan sebagai sistem yang ......",
        a: [
            "Membuka file di browser",
            "Membantu pengunjung menemukan konten dalam situs",
            "Mengatur desain warna website",
            "Membuka link eksternal saja",
            "Semua jawaban benar"
        ],
        correct: 1,
        pembahasan: "Navigasi memandu pengguna menemukan informasi."
    },
    {
        q: "Langkah pertama yang harus dilakukan sebelum membuat link pada halaman web adalah ......",
        a: ["Menulis teks biasa", "Menentukan URL tujuan", "Memasukkan gambar", "Menambahkan atribut HTML", "Menyisipkan JavaScript"],
        correct: 1,
        pembahasan: "Sebelum membuat link, tentukan alamat tujuannya."
    },
    {
        q: "Atribut 'nofollow' pada sebuah link memberikan instruksi kepada mesin pencari untuk ......",
        a: ["Tidak mengikuti atau mengindeks link tersebut", "Meningkatkan trafik ke link tersebut", "Membatasi akses pengguna", "Menyembunyikan halaman dari browser", "Membuka halaman eksternal"],
        correct: 0,
        pembahasan: "Nofollow menginstruksikan mesin pencari agar tidak mengikuti link."
    },
    {
        q: "Istilah 'anchor text' dalam web development merujuk pada ......",
        a: ["Gambar yang dijadikan link", "Teks yang dapat diklik pada sebuah hyperlink", "URL halaman tujuan", "Tombol menu utama", "Atribut tambahan link"],
        correct: 1,
        pembahasan: "Anchor text adalah teks yang berfungsi sebagai hyperlink."
    },
    {
        q: "Ciri khas dari struktur navigasi website yang baik adalah ......",
        a: ["Menggunakan warna cerah", "Memiliki struktur yang jelas dan konsisten", "Dipenuhi banyak animasi", "Tidak memiliki hierarki", "Semua jawaban benar"],
        correct: 1,
        pembahasan: "Struktur navigasi harus jelas dan konsisten."
    },
    {
        q: "Tujuan utama penggunaan metadata pada kode website adalah ......",
        a: ["Meningkatkan estetika visual", "Memberikan informasi penting kepada mesin pencari", "Menghubungkan internal link", "Menampilkan animasi", "Membuka file PDF"],
        correct: 1,
        pembahasan: "Metadata membantu mesin pencari memahami isi halaman."
    },
    {
        q: "Dalam konteks SEO, penggunaan link eksternal yang relevan bermanfaat untuk ......",
        a: ["Meningkatkan kecepatan loading", "Menambah kredibilitas dan otoritas website", "Mengurangi bounce rate", "Membuka halaman internal", "Menyembunyikan konten"],
        correct: 1,
        pembahasan: "Link eksternal yang relevan meningkatkan kepercayaan website."
    },
    {
        q: "Perbedaan mendasar antara internal link dan eksternal link terletak pada ......",
        a: [
            "Domain tujuan yang dituju (sama vs beda)",
            "Jenis konten (teks vs gambar)",
            "Lokasi penempatan (menu vs footer)",
            "Kecepatan akses (cepat vs lambat)",
            "Tidak ada perbedaan"
        ],
        correct: 0,
        pembahasan: "Internal = domain sama; eksternal = domain berbeda."
    },
    {
        q: "Fungsi atribut 'title' pada sebuah tag link adalah untuk ......",
        a: [
            "Menambahkan animasi",
            "Memberikan deskripsi singkat saat kursor diarahkan (tooltip)",
            "Menyembunyikan link",
            "Mengatur warna link",
            "Membatasi akses"
        ],
        correct: 1,
        pembahasan: "Title memberi informasi tambahan ketika diarahkan kursor."
    },
    {
        q: "Breadcrumb navigation berfungsi untuk menunjukkan ......",
        a: [
            "Navigasi tombol besar",
            "Lokasi pengguna di dalam hierarki website",
            "Menu pop-up",
            "Tombol kembali ke browser",
            "Navigasi berbasis gambar"
        ],
        correct: 1,
        pembahasan: "Breadcrumb menunjukkan posisi pengguna dalam struktur website."
    },
    {
        q: "Cara memastikan sebuah link bersifat 'dofollow' adalah dengan memeriksa ......",
        a: ["Tidak adanya atribut rel='nofollow' pada HTML", "Warna link saat diklik", "Membuka tab baru", "Membandingkan URL", "Semua benar"],
        correct: 0,
        pembahasan: "Link dofollow adalah link tanpa atribut 'nofollow'."
    },
    {
        q: "Responsive design memungkinkan tampilan navigasi website untuk ......",
        a: [
            "Berubah menyesuaikan ukuran perangkat/layar",
            "Selalu berwarna warni",
            "Menggunakan animasi berat",
            "Hanya tampil di desktop",
            "Muncul sebagai pop-up"
        ],
        correct: 0,
        pembahasan: "Responsive design menyesuaikan tampilan sesuai perangkat."
    },
    {
        q: "Secara teknis, link dengan status 'nofollow' berarti ......",
        a: [
            "Link tidak memberikan pengaruh nilai SEO",
            "Link tidak dapat diklik oleh pengguna",
            "Link hanya untuk admin",
            "Link sebagai placeholder",
            "Link hanya tampil di halaman utama"
        ],
        correct: 0,
        pembahasan: "Nofollow menginstruksikan mesin pencari tidak mengikuti link."
    },
    {
        q: "Search engine ranking menentukan posisi website berdasarkan ......",
        a: [
            "Warna hasil pencarian",
            "Tingkat relevansi dan kualitas konten",
            "Jumlah gambar dalam web",
            "Situs yang diblokir",
            "Akses pengguna"
        ],
        correct: 1,
        pembahasan: "Ranking menentukan posisi website dalam hasil pencarian."
    },
    {
        q: "Fungsi paling mendasar dari navigasi website yang efisien adalah ......",
        a: [
            "Menampilkan iklan sebanyak mungkin",
            "Membantu pengguna menemukan informasi dengan cepat",
            "Selalu berada di bawah halaman",
            "Hanya menggunakan gambar",
            "Memiliki banyak tab"
        ],
        correct: 1,
        pembahasan: "Navigasi harus efisien dan mudah digunakan."
    },
    {
        q: "Elemen struktur halaman yang umum digunakan sebagai tempat navigasi adalah ......",
        a: ["Teks artikel", "Gambar background", "Header, Footer, dan Sidebar", "Tombol Like", "Iklan pop-up"],
        correct: 2,
        pembahasan: "Header, footer dan sidebar membantu navigasi website."
    },
    {
        q: "Karakteristik utama dari menu dropdown adalah ......",
        a: [
            "Menu yang selalu terlihat penuh",
            "Menu yang memunculkan submenu saat diklik atau di-hover",
            "Menu dengan satu pilihan saja",
            "Menu yang langsung menuju domain eksternal",
            "Menu tanpa fungsi navigasi"
        ],
        correct: 1,
        pembahasan: "Menu dropdown memperlihatkan submenu saat dipilih."
    },
    {
        q: "Meta description yang muncul di hasil pencarian berfungsi untuk ......",
        a: [
            "Memberikan ringkasan isi halaman kepada pengguna",
            "Mengganti judul halaman",
            "Menampilkan nama domain saja",
            "Mengatur navigasi internal",
            "Mengubah struktur URL"
        ],
        correct: 0,
        pembahasan: "Meta description memberi ringkasan halaman untuk mesin pencari."
    },
    {
        q: "Fungsi spesifik dari internal link dalam sebuah website adalah ......",
        a: ["Menghubungkan halaman dalam domain yang sama", "Menuju domain lain", "Mengubah background halaman", "Menambah animasi transisi", "Membuat halaman menjadi responsif"],
        correct: 0,
        pembahasan: "Internal link mempermudah navigasi dan meningkatkan SEO."
    },
    {
        q: "Pengujian (testing) navigasi website dilakukan untuk memastikan ......",
        a: [
            "Halaman memiliki banyak grafis",
            "Navigasi berfungsi dengan baik di berbagai perangkat",
            "Waktu loading berkurang",
            "Link yang tidak perlu dihapus",
            "Animasi berjalan lambat"
        ],
        correct: 1,
        pembahasan: "Testing memastikan navigasi nyaman di semua perangkat."
    },
    {
        q: "Peran breadcrumb navigation dalam hierarki website adalah ......",
        a: ["Mengganti halaman utama", "Menambah link eksternal", "Menunjukkan jejak posisi pengguna", "Membuat efek visual", "Memblokir halaman tertentu"],
        correct: 2,
        pembahasan: "Breadcrumb menunjukkan hierarki lokasi pengguna."
    },
    {
        q: "Fokus utama dari pendekatan UX Design dalam pengembangan web adalah ......",
        a: [
            "Desain berbasis efek animasi",
            "Menciptakan pengalaman pengguna yang optimal",
            "Desain penuh warna",
            "Desain khusus untuk mesin pencari",
            "Desain dengan navigasi otomatis"
        ],
        correct: 1,
        pembahasan: "UX design bertujuan meningkatkan pengalaman pengguna."
    },
    {
        q: "Link eksternal adalah jenis tautan yang mengarah ke ......",
        a: [
            "Halaman lain dalam domain yang sama",
            "Halaman pada domain atau situs lain",
            "Halaman error",
            "Halaman utama saja",
            "Halaman pencetakan"
        ],
        correct: 1,
        pembahasan: "Eksternal link mengarah ke domain lain."
    },
    {
        q: "Salah satu manfaat utama internal link bagi SEO adalah ......",
        a: ["Meningkatkan visibilitas dan indeksasi halaman", "Meningkatkan kecepatan loading", "Menghapus navigasi", "Membuat halaman responsif", "Menambah animasi"],
        correct: 0,
        pembahasan: "Internal link meningkatkan SEO dan navigasi."
    },
    {
        q: "Informasi yang disimpan dalam meta tag terutama ditujukan untuk ......",
        a: ["Dibaca oleh mesin pencari/browser", "Mengubah background", "Menambah grafik", "Interaktivitas halaman", "Menambah tombol"],
        correct: 0,
        pembahasan: "Meta tag membantu mesin pencari memahami halaman."
    },
    {
        q: "Tujuan akhir dari perancangan navigasi yang baik adalah ......",
        a: ["Menampilkan iklan", "Mempermudah pengguna menemukan informasi dengan tepat", "Membuat halaman menjadi berat", "Menyembunyikan konten", "Menambah elemen visual"],
        correct: 1,
        pembahasan: "Navigasi mempermudah pencarian informasi."
    },
    {
        q: "Tujuan utama penerapan responsive design pada website adalah ......",
        a: [
            "Agar tampilan menyesuaikan berbagai ukuran layar",
            "Desain dengan banyak animasi",
            "Hanya optimal untuk desktop",
            "Menggunakan warna minimalis",
            "Desain dengan banyak tab"
        ],
        correct: 0,
        pembahasan: "Responsive design menyesuaikan halaman dengan ukuran layar."
    },
    {
        q: "Peranan SEO (Search Engine Optimization) dalam website adalah ......",
        a: ["Mengubah warna halaman", "Meningkatkan peringkat website di mesin pencari", "Menambah animasi", "Menghapus navigasi", "Menambah tabel data"],
        correct: 1,
        pembahasan: "SEO meningkatkan posisi website di mesin pencari."
    },
    {
        q: "Elemen CTA (Call-to-Action) dalam sebuah halaman web berfungsi untuk ......",
        a: [
            "Mengarahkan pengguna melakukan tindakan tertentu (beli, daftar, dll)",
            "Hanya menampilkan teks deskripsi",
            "Menampilkan gambar latar",
            "Menjadi navigasi utama",
            "Menampilkan judul halaman"
        ],
        correct: 0,
        pembahasan: "CTA mengajak pengguna melakukan tindakan seperti daftar, beli, dll."
    },
    {
        q: "Sitemap adalah file atau halaman yang berisi daftar ......",
        a: ["Seluruh halaman yang ada dalam website", "Menu navigasi utama", "Grafik interaktif", "Struktur link eksternal", "Data pengguna"],
        correct: 0,
        pembahasan: "Sitemap membantu mesin pencari dan pengguna menemukan halaman."
    }
];
