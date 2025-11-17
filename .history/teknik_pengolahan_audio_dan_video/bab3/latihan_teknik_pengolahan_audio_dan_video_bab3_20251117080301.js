let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData =[
    {
        q: "Dalam pengoperasian aplikasi multimedia interaktif berbasis web, keberadaan elemen navigasi merupakan bagian penting agar pengguna dapat berpindah dari satu halaman ke halaman lainnya secara mudah. Tanpa navigasi yang jelas, pengguna akan kesulitan menemukan konten yang mereka butuhkan. Berdasarkan fungsi utamanya, navigasi pada website digunakan untuk...",
        a: [
            "Menampilkan seluruh animasi pada halaman web",
            "Menghubungkan pengguna ke berbagai konten atau halaman dalam website",
            "Mengoptimalkan ukuran file gambar pada website",
            "Meningkatkan kualitas audio pada halaman web",
            "Mengatur warna dan tata letak halaman web"
        ],
        correct: 1,
        pembahasan: "Navigasi berfungsi sebagai pengarah bagi pengguna untuk menjelajah halaman demi halaman. Tanpa navigasi yang baik, pengalaman pengguna menurun dan struktur website menjadi sulit dipahami."
    },
    {
        q: "Sebuah website biasanya memiliki beberapa jenis hyperlink yang berfungsi untuk menghubungkan pengguna ke informasi tertentu. Salah satu jenis link yang sangat umum digunakan adalah internal link, yang menghubungkan halaman dalam domain yang sama. Dengan demikian, tujuan utama dari penggunaan internal link adalah...",
        a: [
            "Menghubungkan ke domain lain",
            "Mempermudah pengguna menavigasi konten dalam website tersebut",
            "Menghapus cache browser secara otomatis",
            "Mengalihkan pengguna ke halaman error",
            "Menghubungkan website ke platform media sosial"
        ],
        correct: 1,
        pembahasan: "Internal link membantu pengguna berpindah antarhalaman dalam website yang sama sehingga mempermudah navigasi dan meningkatkan SEO."
    },
    {
        q: "Dalam dunia SEO, mesin pencari seperti Google memerlukan informasi deskriptif mengenai isi halaman. Salah satu komponen penting yang membantu mesin pencari memahami halaman adalah meta tag. Meta tag biasanya ditempatkan pada bagian <head> dalam HTML. Dengan demikian, fungsi meta tag adalah...",
        a: [
            "Mengubah ukuran gambar secara otomatis",
            "Memberikan informasi deskriptif kepada mesin pencari mengenai isi halaman",
            "Mengatur warna latar halaman web",
            "Menghubungkan halaman ke server cadangan",
            "Meningkatkan kecepatan loading video"
        ],
        correct: 1,
        pembahasan: "Meta tag seperti description dan keywords membantu mesin pencari memahami konteks halaman sehingga berpengaruh pada ranking SEO."
    },
    {
        q: "Pada suatu halaman web, anchor text digunakan dalam hyperlink untuk memberikan gambaran kepada pengguna mengenai halaman yang akan dikunjungi. Anchor text biasanya berupa teks yang dapat diklik dan akan mengarahkan pengguna ke link tertentu. Oleh karena itu, anchor text merupakan...",
        a: [
            "Gambar yang dijadikan sebagai tautan",
            "Teks yang berfungsi sebagai hyperlink dan dapat diklik",
            "Kode JavaScript yang mengatur tampilan halaman",
            "Metadata untuk kebutuhan SEO",
            "Teks deskripsi untuk kebutuhan alt"
        ],
        correct: 1,
        pembahasan: "Anchor text adalah teks yang menjadi hyperlink dan membantu pengguna memahami arah tautan sebelum diklik."
    },
    {
        q: "Dalam pengoperasian website, terdapat sebuah konsep bernama 'breadcrumb navigation'. Breadcrumb adalah jejak navigasi yang menunjukkan posisi pengguna dalam struktur website. Breadcrumb sangat membantu terutama pada website yang memiliki banyak kategori atau struktur hierarki. Oleh karena itu, fungsi breadcrumb adalah...",
        a: [
            "Menampilkan animasi pada halaman utama",
            "Menandai error yang terjadi pada halaman",
            "Menunjukkan lokasi pengguna di dalam struktur hierarki website",
            "Menghapus riwayat pencarian pengguna",
            "Menambah efek hover pada menu"
        ],
        correct: 2,
        pembahasan: "Breadcrumb mempermudah pengguna mengetahui posisi mereka di website, sehingga membuat navigasi lebih jelas."
    },
    {
        q: "Dalam sebuah website modern, responsivitas adalah faktor penting karena pengguna dapat mengakses website melalui berbagai perangkat, seperti komputer, tablet, hingga ponsel. Responsive design memastikan website dapat menyesuaikan tampilan sesuai ukuran layar. Maka, responsive design adalah...",
        a: [
            "Sistem yang memaksa halaman tampil hanya pada desktop",
            "Pendekatan desain yang membuat tampilan website menyesuaikan ukuran perangkat pengguna",
            "Teknik mengubah warna website secara otomatis",
            "Teknik memperbesar tombol agar lebih mudah diklik",
            "Animasi khusus untuk halaman mobile"
        ],
        correct: 1,
        pembahasan: "Responsive design memungkinkan halaman beradaptasi dengan berbagai perangkat sehingga meningkatkan kenyamanan pengguna."
    },
    {
        q: "Dalam pembuatan link pada HTML, langkah pertama dan paling penting adalah menentukan URL tujuan. URL tersebut adalah alamat halaman yang ingin dituju pengguna ketika mereka mengklik link. Maka dapat disimpulkan bahwa langkah awal membuat hyperlink adalah...",
        a: [
            "Memasukkan kode JavaScript",
            "Menentukan URL yang dituju oleh link tersebut",
            "Mengatur warna teks link",
            "Membuat animasi hover",
            "Mendesain tombol navigasi"
        ],
        correct: 1,
        pembahasan: "URL tujuan adalah komponen utama hyperlink. Tanpa URL, link tidak dapat mengarahkan pengguna ke halaman lain."
    },
    {
        q: "Atribut 'nofollow' sering digunakan dalam hyperlink untuk memberi tahu mesin pencari agar tidak memberikan otoritas pada tautan tertentu. Hal ini biasanya digunakan untuk menghindari spam atau link berbayar. Sehingga dapat dikatakan bahwa fungsi utama atribut nofollow adalah...",
        a: [
            "Meningkatkan ranking SEO pada halaman tujuan",
            "Menginstruksikan mesin pencari agar tidak mengikuti link tersebut",
            "Menyembunyikan link dari pengguna",
            "Mengubah warna link secara otomatis",
            "Menambahkan animasi pada tautan"
        ],
        correct: 1,
        pembahasan: "Nofollow memberitahu mesin pencari agar tidak memberikan 'vote' SEO pada link tersebut."
    },
    {
        q: "Sitemap merupakan daftar halaman dalam website yang membantu mesin pencari memahami struktur website dengan lebih jelas. Sitemap dapat berupa file XML yang diakses robot pencari. Berdasarkan hal tersebut, tujuan utama dari sitemap adalah...",
        a: [
            "Meningkatkan efek animasi pada website",
            "Mengoptimalkan warna dan desain halaman web",
            "Memberikan daftar lengkap halaman website kepada mesin pencari",
            "Mengatur navigasi otomatis",
            "Mempercepat pemuatan gambar"
        ],
        correct: 2,
        pembahasan: "Sitemap memudahkan mesin pencari menemukan dan mengindeks seluruh halaman website."
    },
    {
        q: "Call-to-action (CTA) biasanya hadir dalam bentuk tombol, banner, atau teks yang dirancang untuk mendorong pengguna melakukan suatu tindakan seperti mendaftar, membeli produk, atau mengunduh file. Oleh karena itu, CTA berfungsi untuk...",
        a: [
            "Menampilkan teks deskriptif pada halaman",
            "Mendorong pengguna untuk melakukan tindakan tertentu sesuai tujuan halaman",
            "Mengubah warna halaman web",
            "Mengatur navigasi website",
            "Menampilkan animasi pada footer"
        ],
        correct: 1,
        pembahasan: "CTA dirancang untuk mengarahkan pengguna agar melakukan tindakan spesifik, seperti klik tombol beli atau daftar."
    }, 
    {
    q: "Dalam sebuah halaman web, terdapat elemen navigasi yang disebut dropdown menu. Dropdown menu memudahkan pengguna memilih beberapa sub-halaman melalui satu elemen utama tanpa memenuhi tampilan layar. Dalam pengoperasian aplikasi multimedia interaktif, dropdown menu sangat penting terutama pada website dengan struktur kategori yang kompleks. Berdasarkan fungsinya, dropdown menu bertujuan untuk...",
    a: [
        "Menampilkan file audio secara otomatis",
        "Mengelompokkan beberapa link menjadi satu menu yang dapat dibuka-tutup",
        "Memperbesar ukuran teks halaman",
        "Mengganti tema website secara otomatis",
        "Mempercepat proses loading gambar"
    ],
    correct: 1,
    pembahasan: "Dropdown mengurangi kepadatan tampilan navigasi dan memberikan hierarki menu sehingga navigasi lebih efisien."
   },
   {
        q: "Navigasi horizontal biasanya ditempatkan di bagian atas halaman web dan menampilkan kategori utama yang dapat diklik oleh pengguna. Tata letak ini memudahkan pembaca mengakses halaman penting hanya dalam satu klik. Maka dari itu, navigasi horizontal digunakan untuk...",
        a: [
            "Menampilkan video background",
            "Memperlihatkan kategori utama website secara ringkas dan mudah dijangkau",
            "Menampilkan seluruh konten halaman secara penuh",
            "Mengatur margin halaman otomatis",
            "Menyembunyikan elemen halaman"
        ],
        correct: 1,
        pembahasan: "Navigasi horizontal membantu pengguna mengakses halaman utama secara cepat karena ditempatkan di posisi mata pengguna secara alami."
    },
    {
        q: "Footer pada website merupakan bagian bawah halaman yang biasanya berisi informasi tambahan seperti kontak, alamat, link penting, atau hak cipta. Footer juga digunakan untuk menampilkan navigasi alternatif terutama untuk halaman yang jarang diakses. Dengan demikian, fungsi footer dalam pengoperasian website adalah...",
        a: [
            "Menampilkan semua animasi halaman",
            "Memberikan informasi tambahan dan navigasi sekunder",
            "Mengatur ukuran header",
            "Menghapus cache pengguna",
            "Mengatur font utama website"
        ],
        correct: 1,
        pembahasan: "Footer digunakan untuk menampilkan informasi yang tidak perlu ditampilkan di bagian utama serta menyediakan link tambahan."
    },
    {
        q: "Dalam struktur menu pada website, terdapat konsep 'hierarki navigasi' yang mengatur hubungan induk–anak antarhalaman. Hierarki ini membantu pengguna memahami struktur keseluruhan konten. Sehingga hierarki navigasi berfungsi untuk...",
        a: [
            "Mengatur tampilan warna latar",
            "Membantu pengguna memahami hubungan antarhalaman dalam website",
            "Mengubah format gambar",
            "Mengatur kapasitas server website",
            "Membuat animasi bergerak"
        ],
        correct: 1,
        pembahasan: "Hierarki navigasi mengatur susunan menu secara logis sehingga pengguna dapat menavigasi website secara terstruktur."
    },
    {
        q: "Breadcrumb biasanya digunakan pada website dengan struktur informasi yang kompleks, misalnya portal berita, e-commerce, atau sistem pembelajaran online. Breadcrumb membantu pengguna memahami posisi mereka saat ini di dalam struktur halaman. Dengan demikian, keuntungan utama penggunaan breadcrumb adalah...",
        a: [
            "Mempercepat proses rendering video",
            "Mempermudah pengguna kembali ke halaman sebelumnya atau kategori yang lebih tinggi",
            "Menambahkan fitur chat otomatis",
            "Mengubah layout halaman",
            "Menghasilkan animasi CSS"
        ],
        correct: 1,
        pembahasan: "Breadcrumb memudahkan navigasi kembali ke kategori sebelumnya tanpa harus menelusuri menu secara manual."
    },
    {
        q: "Elemen multimedia seperti gambar, video, dan audio dapat diintegrasikan dalam aplikasi web untuk meningkatkan interaktivitas dan daya tarik visual. Namun penggunaan elemen-elemen ini harus seimbang agar tidak mengganggu performa website. Penggunaan elemen multimedia yang ideal bertujuan untuk...",
        a: [
            "Memenuhi tampilan halaman hingga penuh",
            "Meningkatkan daya tarik visual tanpa mengganggu kecepatan dan kenyamanan pengguna",
            "Menurunkan kualitas file gambar",
            "Menghilangkan teks pada halaman",
            "Mengganti warna dasar halaman"
        ],
        correct: 1,
        pembahasan: "Elemen multimedia harus digunakan secara proporsional agar tampilan menarik namun tetap ringan dan cepat diakses."
    },
    {
        q: "Dalam pengoperasian aplikasi multimedia interaktif, salah satu konsep penting adalah user experience (UX). UX berkaitan dengan bagaimana pengguna merasakan kenyamanan saat menggunakan aplikasi atau website. Oleh karena itu, konsep user experience bertujuan untuk...",
        a: [
            "Mengatur hosting website",
            "Meningkatkan pengalaman dan kenyamanan pengguna melalui desain yang mudah digunakan",
            "Menambah ukuran file multimedia",
            "Mengatur domain website",
            "Menampilkan seluruh warna terang di halaman"
        ],
        correct: 1,
        pembahasan: "UX memastikan website mudah dipahami, mudah digunakan, dan memberikan kenyamanan bagi pengguna."
    },
    {
        q: "Pada desain antarmuka website, konsistensi adalah prinsip penting yang memastikan seluruh halaman memiliki tampilan, warna, dan navigasi yang seragam. Tanpa konsistensi, pengguna akan merasa bingung dan sulit beradaptasi dengan layout. Maka dari itu, konsistensi desain diterapkan untuk...",
        a: [
            "Mengatur server agar lebih cepat",
            "Membuat seluruh halaman memiliki tampilan seragam dan mudah dikenali",
            "Menambah ukuran video",
            "Menghapus menu navigasi",
            "Mengubah tema halaman secara acak"
        ],
        correct: 1,
        pembahasan: "Konsistensi memberikan pengalaman yang stabil sehingga pengguna tidak perlu beradaptasi ulang setiap berpindah halaman."
    },
    {
        q: "Pada website yang memiliki interaktivitas tinggi, sering digunakan tombol interaktif seperti hover button, clickable icons, dan tombol navigasi. Tombol interaktif membantu pengguna melakukan tindakan tertentu dengan cepat. Oleh karena itu, tombol interaktif digunakan untuk...",
        a: [
            "Menambah efek visual semata",
            "Memudahkan pengguna melakukan perintah tertentu atau bernavigasi",
            "Mengatur ukuran server",
            "Menghapus konten teks",
            "Mengarahkan halaman ke error"
        ],
        correct: 1,
        pembahasan: "Tombol interaktif didesain agar pengguna dapat melakukan suatu aksi seperti submit, next page, klik menu, dan sebagainya."
    },
    {
        q: "Search bar adalah fitur pencarian yang digunakan pada situs dengan jumlah konten yang besar, seperti toko online atau portal berita. Fitur ini mempermudah pengguna menemukan informasi tanpa harus menelusuri menu satu per satu. Dengan demikian, search bar berfungsi untuk...",
        a: [
            "Menghapus riwayat browsing",
            "Mempermudah pengguna menemukan konten berdasarkan kata kunci",
            "Mengatur ukuran teks",
            "Menambah animasi ke seluruh konten",
            "Menghubungkan website ke server lain"
        ],
        correct: 1,
        pembahasan: "Search bar mempersingkat proses pencarian informasi sehingga pengguna tidak perlu menjelajahi seluruh struktur menu."
    }, 
    {
    q: "Dalam aplikasi multimedia interaktif, menu sidebar sering digunakan untuk menampilkan navigasi tambahan atau kategori konten yang lebih spesifik. Sidebar biasanya ditempatkan di sisi kiri atau kanan halaman dan memungkinkan pengguna mengakses konten pendukung secara cepat tanpa mengganggu tampilan utama. Maka dapat disimpulkan bahwa fungsi utama sidebar adalah...",
    a: [
        'Menampilkan animasi latar belakang',
        'Memberikan akses cepat ke menu tambahan atau kategori tertentu',
        'Memperbesar ukuran gambar dalam halaman',
        'Mengganti warna tema halaman secara otomatis',
        'Menghapus navigasi utama pada website'
    ],
    correct: 1,
    pembahasan: "Sidebar digunakan sebagai navigasi tambahan yang mempermudah pengguna menemukan konten pendukung tanpa mengganggu area utama halaman."
    },
    {
        q: "Dalam pengembangan website interaktif, tombol “Back to Top” menjadi fitur yang sangat berguna terutama pada halaman panjang yang memuat banyak informasi. Tombol ini memungkinkan pengguna kembali ke bagian atas halaman dengan sekali klik, meningkatkan efisiensi navigasi. Oleh karena itu, tujuan tombol Back to Top adalah...",
        a: [
            'Membuka halaman baru secara otomatis',
            'Mengembalikan pengguna ke bagian atas halaman dengan cepat',
            'Mengubah ukuran teks halaman',
            'Menambah jumlah menu pada navbar',
            'Menjalankan animasi audio'
        ],
        correct: 1,
        pembahasan: "Fitur Back to Top membuat navigasi lebih efisien dan meningkatkan kenyamanan pengguna terutama pada halaman panjang."
    },
    {
        q: "Website modern biasanya menggunakan sistem grid layout untuk mengatur posisi elemen agar tampak rapi dan konsisten. Grid membantu desainer menjaga keseimbangan visual serta memastikan elemen-elemen tidak bertumpuk secara acak. Maka tujuan penggunaan grid layout adalah...",
        a: [
            'Mengubah warna halaman',
            'Mengatur posisi elemen secara terstruktur dan konsisten',
            'Menambah file audio ke halaman',
            'Menghapus menu navigasi',
            'Mengatur kapasitas hosting'
        ],
        correct: 1,
        pembahasan: "Grid layout memberikan struktur visual yang konsisten sehingga halaman tampak rapi dan profesional."
    },
    {
        q: "Dalam aplikasi multimedia interaktif, sering digunakan modal window atau pop-up yang muncul di atas konten utama untuk menampilkan pesan penting seperti peringatan, formulir, atau konfirmasi. Pop-up harus dirancang agar tidak mengganggu pengalaman pengguna. Dengan demikian, tujuan utama modal window adalah...",
        a: [
            'Menyembunyikan seluruh konten halaman',
            'Menampilkan informasi atau tindakan penting tanpa memindahkan pengguna ke halaman lain',
            'Menghapus link pada halaman',
            'Menambah efek animasi penuh layar',
            'Meningkatkan ukuran file gambar'
        ],
        correct: 1,
        pembahasan: "Modal window menampilkan informasi penting tanpa meninggalkan halaman utama sehingga interaksi tetap fokus."
    },
    {
        q: "Salah satu prinsip penting dalam desain antarmuka adalah affordance, yaitu bagaimana tampilan sebuah elemen menunjukkan fungsi atau cara penggunaannya. Contohnya tombol yang tampak seperti dapat ditekan atau ikon folder yang terlihat bisa dibuka. Oleh karena itu, affordance dalam desain berfungsi untuk...",
        a: [
            'Menentukan ukuran file website',
            'Memberikan petunjuk visual tentang cara menggunakan elemen interaktif',
            'Mengubah tema halaman',
            'Mengatur cache browser',
            'Menentukan ukuran teks otomatis'
        ],
        correct: 1,
        pembahasan: "Affordance memudahkan pengguna memahami fungsi elemen hanya dari tampilan visualnya."
    },
    {
        q: "Loading indicator atau indikator pemuatan sering digunakan pada aplikasi multimedia interaktif untuk memberi tahu pengguna bahwa sistem sedang memproses suatu perintah. Indikator ini penting agar pengguna tidak mengira aplikasi mengalami error atau freeze. Berdasarkan fungsinya, loading indicator digunakan untuk...",
        a: [
            'Menambah animasi dekoratif semata',
            'Memberi tahu pengguna bahwa proses sedang berjalan',
            'Menghapus konten halaman',
            'Mempercepat kecepatan server',
            'Mengganti warna website secara otomatis'
        ],
        correct: 1,
        pembahasan: "Indicator loading meningkatkan kejelasan alur interaksi dan mencegah kebingungan pengguna."
    },
    {
        q: "Dalam multimedia interaktif, tombol navigasi next dan previous sering digunakan pada galeri gambar, slide presentasi, atau modul pembelajaran digital. Tombol ini memudahkan pengguna berpindah antarhalaman atau antaritem secara berurutan. Oleh karena itu, fungsi tombol next/previous adalah...",
        a: [
            'Menghapus elemen pada halaman',
            'Mengarahkan pengguna ke item berikutnya atau sebelumnya secara berurutan',
            'Menampilkan video otomatis',
            'Mengatur ukuran layar',
            'Menghubungkan website dengan jaringan lokal'
        ],
        correct: 1,
        pembahasan: "Tombol next/previous memudahkan navigasi berurutan sehingga pengguna dapat mengikuti alur konten."
    },
    {
        q: "Slider images adalah komponen yang sering digunakan pada halaman utama website untuk menampilkan beberapa gambar secara bergantian. Slider memberikan tampilan dinamis serta dapat menampilkan konten promosi, informasi penting, atau visual estetis. Dengan demikian, fungsi slider pada website adalah...",
        a: [
            'Menambah berat halaman hingga lebih lambat',
            'Menampilkan beberapa konten gambar secara bergantian dalam satu area tampilan',
            'Mengganti warna latar halaman',
            'Mengecilkan ukuran font secara otomatis',
            'Menghapus navigasi utama'
        ],
        correct: 1,
        pembahasan: "Slider memberikan variasi visual sekaligus memaksimalkan penggunaan ruang tampilan."
    },
    {
        q: "Fitur pagination digunakan pada website untuk membagi konten panjang menjadi beberapa halaman terpisah, seperti artikel, daftar produk, atau forum. Pagination membantu mencegah halaman menjadi terlalu panjang dan berat saat dimuat. Maka tujuan pagination adalah...",
        a: [
            'Menampilkan semua konten dalam satu halaman',
            'Membagi konten menjadi beberapa halaman agar lebih mudah dibaca',
            'Menghapus elemen gambar secara otomatis',
            'Mengatur ukuran video',
            'Mengaktifkan autoplay audio'
        ],
        correct: 1,
        pembahasan: "Pagination membuat konten lebih ringan dan memudahkan pengguna menemukan bagian yang mereka butuhkan."
    },
    {
        q: "Tooltip adalah elemen kecil yang muncul ketika pengguna mengarahkan kursor ke suatu objek, biasanya memberikan penjelasan tambahan atau deskripsi singkat. Tooltip sangat berguna untuk menjelaskan tombol atau ikon yang tidak memiliki teks. Dengan demikian, fungsi tooltip adalah...",
        a: [
            'Menampilkan animasi warna',
            'Memberikan informasi tambahan ketika pengguna mengarahkan kursor pada elemen tertentu',
            'Mengubah ukuran halaman',
            'Memperbesar video',
            'Menghapus navigasi'
        ],
        correct: 1,
        pembahasan: "Tooltip membantu pengguna memahami fungsi elemen tanpa membuat tampilan halaman menjadi penuh."
    }, 
    {
    q: "Dalam aplikasi multimedia interaktif, fitur auto-play sering digunakan terutama pada elemen video atau audio yang ingin diputar secara otomatis ketika halaman dimuat. Namun, fitur ini harus digunakan dengan hati-hati karena dapat mengganggu pengalaman pengguna jika tidak dikendalikan dengan baik. Oleh karena itu, tujuan utama penggunaan fitur auto-play adalah...",
    a: [
        'Meningkatkan ukuran file halaman secara signifikan',
        'Memutar media secara otomatis tanpa interaksi pengguna',
        'Menghapus kontrol media pada video',
        'Mengubah resolusi video secara otomatis',
        'Mengatur kecepatan server'
    ],
    correct: 1,
    pembahasan: "Auto-play memulai media tanpa perlu diklik, tetapi pengguna harus tetap diberi kontrol untuk mematikan atau menjeda."
   },
    {
        q: "Scroll animation adalah teknik yang membuat elemen bergerak atau muncul ketika pengguna menggulir halaman. Teknik ini sering digunakan untuk memperkuat storytelling visual dalam website. Namun penggunaannya harus tetap fungsional dan tidak berlebihan. Maka fungsi utama scroll animation adalah...",
        a: [
            'Menghalangi pengguna melihat konten',
            'Memberikan efek visual yang mengikuti pergerakan scroll pengguna',
            'Menghapus teks pada halaman',
            'Mengganti warna tema halaman',
            'Mengatur ukuran server'
        ],
        correct: 1,
        pembahasan: "Scroll animation memberi pengalaman visual yang lebih interaktif dan menarik saat pengguna menavigasi halaman."
    },
    {
        q: "Hamburger menu adalah ikon navigasi berbentuk tiga garis horizontal yang sering digunakan pada tampilan mobile. Menu ini menyembunyikan navigasi agar tampilan lebih sederhana dan tidak memakan ruang layar. Oleh karena itu, hamburger menu digunakan untuk...",
        a: [
            'Menampilkan semua teks halaman secara otomatis',
            'Menyembunyikan dan menampilkan menu navigasi dengan cara yang ringkas pada perangkat kecil',
            'Membuat halaman menjadi fullscreen',
            'Menghapus elemen gambar',
            'Mengubah warna background'
        ],
        correct: 1,
        pembahasan: "Hamburger menu sangat efektif pada layar kecil karena menghemat ruang sambil tetap menyediakan akses ke navigasi."
    },
    {
        q: "Lazy loading adalah teknik optimasi yang membuat gambar atau elemen multimedia hanya dimuat ketika elemen tersebut muncul pada area tampilan pengguna. Teknik ini sangat berguna untuk halaman panjang dengan banyak gambar. Maka tujuan lazy loading adalah...",
        a: [
            'Memuat semua gambar sekaligus',
            'Mengurangi waktu loading halaman dengan memuat elemen hanya saat dibutuhkan',
            'Menghapus gambar yang tidak digunakan',
            'Menambah ukuran file konten',
            'Menjalankan video secara otomatis'
        ],
        correct: 1,
        pembahasan: "Lazy loading mempercepat loading awal karena elemen yang belum terlihat tidak ikut dimuat."
    },
    {
        q: "Dalam website interaktif, form input digunakan untuk mengumpulkan data dari pengguna, seperti nama, email, komentar, atau jawaban kuis. Agar data dapat dikirim, biasanya digunakan tombol submit. Berdasarkan fungsinya, tombol submit digunakan untuk...",
        a: [
            'Menghapus semua elemen form',
            'Mengirim data yang dimasukkan pengguna ke server atau sistem pemrosesan',
            'Mengubah warna teks otomatis',
            'Menampilkan video baru',
            'Mengalihkan pengguna ke halaman acak'
        ],
        correct: 1,
        pembahasan: "Tombol submit berfungsi mengirim input pengguna untuk diproses, disimpan, atau divalidasi."
    },
    {
        q: "Validasi form adalah proses memastikan bahwa data yang diisi pengguna memenuhi aturan tertentu, seperti format email, panjang password, atau apakah field wajib sudah terisi. Validasi dapat dilakukan di sisi client maupun server. Oleh karena itu, tujuan validasi form adalah...",
        a: [
            'Menghapus semua data input',
            'Memastikan data yang diisi pengguna benar dan sesuai aturan sebelum dikirim',
            'Mengganti warna elemen form',
            'Menambah ukuran halaman',
            'Menambahkan animasi pada tombol'
        ],
        correct: 1,
        pembahasan: "Validasi mencegah kesalahan data dan memastikan input yang dikirim sudah sesuai format yang ditentukan."
    },
    {
        q: "Pada aplikasi multimedia interaktif, audio control digunakan agar pengguna dapat mengatur volume, menjeda audio, atau memutar ulang. Penggunaan kontrol ini penting untuk memberikan kendali penuh kepada pengguna. Maka fungsi utama audio control adalah...",
        a: [
            'Menghapus suara dalam website',
            'Memberikan pengguna kemampuan untuk mengatur playback audio sesuai kebutuhan',
            'Menambah jumlah audio secara otomatis',
            'Memperbesar ukuran file audio',
            'Menjalankan audio tanpa kontrol apapun'
        ],
        correct: 1,
        pembahasan: "Audio control memberikan fleksibilitas kepada pengguna sehingga audio tidak mengganggu pengalaman interaktif."
    },
    {
        q: "Progress bar sering digunakan untuk menampilkan status sebuah proses seperti loading, pengisian formulir, atau progres pembelajaran. Progress bar memberi indikasi visual sejauh mana proses sedang berjalan. Berdasarkan hal tersebut, progress bar berfungsi untuk...",
        a: [
            'Menampilkan animasi dekoratif semata',
            'Memberi pengguna gambaran visual mengenai kemajuan suatu proses',
            'Mengalihkan halaman secara otomatis',
            'Menghapus informasi lama',
            'Menambah efek blur pada halaman'
        ],
        correct: 1,
        pembahasan: "Progress bar membantu pengguna memahami bahwa proses sedang berlangsung dan seberapa jauh penyelesaiannya."
    },
    {
        q: "Dalam aplikasi multimedia interaktif, gesture navigation sering digunakan pada perangkat touchscreen seperti smartphone atau tablet. Gesture seperti swipe, pinch, dan tap mempermudah pengguna dalam berinteraksi tanpa tombol yang banyak. Maka gesture navigation digunakan untuk...",
        a: [
            'Mengatur server website',
            'Memungkinkan pengguna bernavigasi menggunakan gerakan sentuhan',
            'Mengubah warna layar otomatis',
            'Menghapus seluruh elemen halaman',
            'Menjalankan video secara paksa'
        ],
        correct: 1,
        pembahasan: "Gesture navigation memberikan interaksi yang intuitif dan alami pada perangkat touchscreen."
    },
    {
        q: "Chatbot merupakan fitur interaktif yang memungkinkan pengguna berinteraksi dengan sistem secara otomatis untuk mendapatkan informasi, bantuan, atau layanan tertentu. Dalam website modern, chatbot menjadi solusi cepat untuk meningkatkan layanan pelanggan. Maka fungsi utama chatbot adalah...",
        a: [
            'Menambahkan animasi ke halaman',
            'Memberikan bantuan otomatis kepada pengguna melalui percakapan digital',
            'Mengganti struktur navigasi website',
            'Menghapus konten statis',
            'Mengalihkan pengguna ke halaman kosong'
        ],
        correct: 1,
        pembahasan: "Chatbot membantu pengguna mendapatkan jawaban cepat tanpa harus berinteraksi dengan manusia secara langsung."
    }
];