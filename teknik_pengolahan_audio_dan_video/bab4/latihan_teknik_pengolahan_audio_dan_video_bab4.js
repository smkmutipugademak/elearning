let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

var quizData = quizData || [];

quizData.push(
    {
        q: "Dalam pembuatan multimedia interaktif, proses penggabungan berbagai elemen seperti gambar, audio, animasi, dan video menjadi bagian penting untuk menciptakan pengalaman pengguna yang menarik. Integrasi elemen-elemen ini harus dilakukan secara harmonis agar informasi dapat tersampaikan dengan efektif. Maka penggabungan media dalam multimedia interaktif bertujuan untuk...",
        a: [
            "Menyimpan seluruh file dalam satu folder tanpa pengolahan",
            "Menghasilkan konten yang dinamis, menarik, dan mudah dipahami oleh pengguna",
            "Mengurangi kualitas media agar ukuran file lebih kecil",
            "Memastikan gambar menjadi elemen utama dalam seluruh halaman",
            "Menghilangkan kebutuhan interaktivitas pengguna"
        ],
        correct: 1,
        pembahasan: "Penggabungan media yang baik menghasilkan pengalaman visual-audio yang sinkron sehingga lebih menarik dan efektif dalam penyampaian informasi."
    },
    {
        q: "Gambar dalam multimedia interaktif memiliki peranan penting sebagai pendukung informasi. Namun gambar harus diolah sedemikian rupa agar ukuran file tidak terlalu besar dan tetap mempertahankan kualitasnya. Berdasarkan prinsip pengolahan media, penggunaan gambar dalam multimedia bertujuan untuk...",
        a: [
            "Menggantikan seluruh elemen audio",
            "Memberikan ilustrasi visual yang memperjelas informasi",
            "Menghapus kebutuhan teks pada halaman",
            "Mengubah seluruh halaman menjadi format bitmap",
            "Meningkatkan ukuran file aplikasi"
        ],
        correct: 1,
        pembahasan: "Gambar memperjelas informasi sehingga meningkatkan pemahaman pengguna terhadap konten yang disampaikan."
    },
    {
        q: "Animasi merupakan elemen multimedia yang memberikan gerakan pada objek dan menciptakan kesan dinamis. Dalam multimedia interaktif, animasi tidak hanya digunakan sebagai dekorasi, tetapi juga sebagai alat untuk menjelaskan proses atau konsep tertentu. Oleh karena itu, animasi dalam multimedia interaktif berfungsi untuk...",
        a: [
            "Membuat halaman tampak penuh",
            "Memberikan penjelasan visual yang lebih mudah dipahami melalui gerakan",
            "Menghapus kebutuhan gambar statis",
            "Memperlambat proses loading halaman",
            "Mengurangi interaktivitas pengguna"
        ],
        correct: 1,
        pembahasan: "Animasi dapat menjelaskan proses dengan lebih efektif dibanding gambar statis karena mengandung unsur pergerakan visual."
    },
    {
        q: "Audio dalam multimedia interaktif berfungsi sebagai pendukung suasana dan penjelas informasi. Jenis audio yang digunakan dapat berupa narasi, efek suara, maupun musik latar. Penggunaan audio yang tepat dapat meningkatkan kenyamanan dan fokus pengguna. Maka audio digunakan dalam multimedia interaktif untuk...",
        a: [
            "Menghilangkan kebutuhan visual",
            "Memberikan suasana, penjelasan verbal, atau efek tambahan",
            "Mengganti fungsi video sepenuhnya",
            "Menghapus teks secara otomatis",
            "Meningkatkan ukuran aplikasi secara signifikan"
        ],
        correct: 1,
        pembahasan: "Audio memperkaya pengalaman pengguna dan membantu penyampaian informasi secara lebih efektif."
    },
    {
        q: "Video merupakan media paling informatif karena menggabungkan visual dan audio secara bersamaan. Dalam multimedia interaktif, video sering digunakan untuk demonstrasi, penjelasan proses, atau tutorial. Berdasarkan sifatnya, video dalam multimedia interaktif digunakan untuk...",
        a: [
            "Mengurangi interaksi pengguna",
            "Menampilkan informasi kompleks secara lebih komprehensif",
            "Menggantikan semua elemen visual lainnya",
            "Memperlambat kinerja aplikasi",
            "Menghilangkan kebutuhan teks narasi"
        ],
        correct: 1,
        pembahasan: "Video memiliki kemampuan menjelaskan konsep secara lengkap melalui kombinasi visual dan audio secara simultan."
    },
    {
        q: "Sinkronisasi antara media—baik gambar, audio, animasi, maupun video—menjadi aspek penting dalam produksi multimedia interaktif. Tanpa sinkronisasi yang baik, pengguna dapat kehilangan fokus atau salah memahami informasi. Oleh karena itu, sinkronisasi media diperlukan untuk...",
        a: [
            "Membuat seluruh media diputar secara acak",
            "Menyelaraskan penampilan media sehingga mendukung satu pesan yang sama",
            "Memperbesar ukuran file",
            "Menghapus elemen interaktif",
            "Mengganti video menjadi audio"
        ],
        correct: 1,
        pembahasan: "Sinkronisasi memastikan setiap media tampil pada waktu yang tepat sehingga memperkuat pesan yang disampaikan."
    },
    {
        q: "Dalam proyek multimedia interaktif, editor harus memperhatikan kompresi file media. Kompresi bertujuan untuk mengurangi ukuran file tanpa menurunkan kualitas secara signifikan. Hal ini penting agar aplikasi tetap ringan dan cepat digunakan. Maka tujuan utama kompresi media adalah...",
        a: [
            "Menghilangkan sebagian besar isi media",
            "Mengurangi ukuran file sambil tetap mempertahankan kualitas visual dan audio",
            "Meningkatkan ukuran file untuk kualitas maksimal",
            "Menghapus metadata file",
            "Mengubah format file ke teks"
        ],
        correct: 1,
        pembahasan: "Kompresi memungkinkan konten tetap berkualitas tetapi tidak membebani performa aplikasi."
    },
    {
        q: "Elemen interaktif seperti tombol play, pause, next, dan previous sangat penting untuk memberikan kontrol kepada pengguna dalam mengakses media. Kontrol ini membuat pengguna dapat menentukan bagaimana mereka ingin mengonsumsi konten. Berdasarkan prinsip interaktivitas, tombol kontrol media berfungsi untuk...",
        a: [
            "Menjalankan media secara otomatis tanpa jeda",
            "Memberikan pengguna kemampuan mengatur cara mereka mengonsumsi media",
            "Menghapus animasi dari halaman",
            "Menambah durasi video tanpa izin",
            "Mengalihkan halaman ke situs lain"
        ],
        correct: 1,
        pembahasan: "Kontrol media meningkatkan kenyamanan pengguna karena mereka dapat menentukan kapan media akan diputar."
    },
    {
        q: "Dalam proses penggabungan media, storyboard digunakan untuk merencanakan urutan visual sebelum proses produksi dimulai. Storyboard biasanya berisi langkah-langkah berupa gambar, teks, dan keterangan gerakan. Dengan demikian, storyboard dibuat dengan tujuan untuk...",
        a: [
            "Mengatur kompresi file",
            "Merencanakan alur visual agar proses produksi lebih terarah",
            "Membuat file audio otomatis",
            "Mengurangi durasi video",
            "Mengatur ukuran gambar"
        ],
        correct: 1,
        pembahasan: "Storyboard membantu tim memahami urutan visual yang akan diproduksi sehingga proses produksi berjalan lebih efisien."
    },
    {
        q: "File format seperti MP4, MP3, PNG, dan SVG digunakan dalam multimedia interaktif sesuai kebutuhan masing-masing media. Pemilihan format harus disesuaikan dengan kinerja, kualitas, dan kompatibilitas. Maka pemilihan format file dalam multimedia interaktif bertujuan untuk...",
        a: [
            "Menggunakan format terbesar untuk kualitas maksimal",
            "Memastikan media dapat ditampilkan dengan optimal pada berbagai perangkat",
            "Menghapus metadata media",
            "Mengaktifkan autoplay",
            "Mengubah media menjadi file teks"
        ],
        correct: 1,
        pembahasan: "Format file yang tepat memastikan media dapat tampil dengan baik di berbagai perangkat tanpa menimbulkan masalah kompatibilitas."
    }, {
    q: "Ketika mengembangkan aplikasi multimedia interaktif, salah satu tantangan utama adalah menjaga keseimbangan antara kualitas visual dan performa aplikasi. Gambar beresolusi tinggi memang memiliki detail yang baik, namun penggunaan berlebihan dapat membuat aplikasi menjadi berat. Oleh sebab itu, dalam proses penggabungan media, optimalisasi gambar diperlukan untuk...",
    a: [
        "Menghapus seluruh detail visual",
        "Mengurangi ukuran file gambar sambil mempertahankan kualitas yang wajar",
        "Meningkatkan ukuran gambar sebesar mungkin",
        "Mengubah gambar menjadi format video",
        "Menonaktifkan seluruh fungsi interaktif pada halaman"
    ],
    correct: 1,
    pembahasan: "Optimalisasi gambar membantu menjaga performa aplikasi tanpa mengorbankan kualitas visual secara signifikan."
},

    {
        q: "Transisi visual digunakan untuk memberikan efek perpindahan antarhalaman atau antarobjek. Transisi yang baik dapat membantu pengguna memahami pergantian konten tanpa merasa bingung. Namun penggunaannya harus proporsional agar tidak menurunkan performa. Maka transisi visual digunakan untuk...",
        a: [
            "Memperbesar ukuran aplikasi",
            "Memberikan efek perpindahan yang halus antara elemen atau halaman",
            "Menghilangkan seluruh gambar dari halaman",
            "Menghapus audio secara otomatis",
            "Menambah durasi loading halaman"
        ],
        correct: 1,
        pembahasan: "Transisi memberikan pengalaman lebih natural pada perubahan konten sehingga navigasi terasa mulus."
    },

    {
        q: "Salah satu kelebihan multimedia interaktif adalah kemampuan untuk memberikan feedback langsung kepada pengguna, seperti suara klik, perubahan warna tombol, atau animasi singkat setelah pengguna melakukan aksi. Feedback seperti ini penting agar pengguna mengetahui bahwa tindakan mereka diterima oleh sistem. Maka feedback interaktif berfungsi untuk...",
        a: [
            "Menambah ukuran halaman",
            "Memberi tanda bahwa aksi pengguna telah berhasil diproses",
            "Mengurangi jumlah media pada halaman",
            "Menghapus fungsi navigasi",
            "Mengalihkan halaman ke situs lain"
        ],
        correct: 1,
        pembahasan: "Feedback membantu pengguna memahami bahwa interaksi mereka dikenali oleh sistem, meningkatkan kejelasan dan kenyamanan penggunaan."
    },

    {
        q: "Audio latar (background music) sering digunakan untuk memperkuat suasana sebuah aplikasi multimedia interaktif, seperti game edukasi atau presentasi digital. Namun penggunaan audio latar harus disesuaikan agar tidak mengganggu fokus pengguna. Oleh karena itu, audio latar digunakan untuk...",
        a: [
            "Menggantikan seluruh dialog atau narasi",
            "Menciptakan atmosfer tertentu yang mendukung suasana aplikasi",
            "Menurunkan kualitas aplikasi",
            "Memperbesar ukuran file secara drastis",
            "Menghilangkan elemen visual"
        ],
        correct: 1,
        pembahasan: "Audio latar membantu menciptakan mood tertentu, namun harus dikendalikan volumenya agar tidak mengganggu elemen lainnya."
    },

    {
        q: "Dalam pengolahan media, kualitas suara sangat memengaruhi kenyamanan pengguna. Noise atau gangguan suara dapat merusak pengalaman multimedia. Oleh karena itu, proses audio editing seperti noise reduction diperlukan untuk...",
        a: [
            "Memperbesar ukuran file audio",
            "Mengurangi suara gangguan agar audio terdengar lebih jelas",
            "Menghapus seluruh elemen suara",
            "Mengubah audio menjadi format gambar",
            "Menambah efek gema secara otomatis"
        ],
        correct: 1,
        pembahasan: "Noise reduction membantu meningkatkan kualitas audio sehingga narasi atau efek suara terdengar lebih jelas dan profesional."
    },

    {
        q: "Integrasi video dalam multimedia interaktif membutuhkan perhatian pada format, resolusi, dan durasi. Jika video terlalu panjang atau berukuran besar, performa aplikasi dapat terganggu. Oleh karena itu, proses video compression dilakukan untuk...",
        a: [
            "Menghapus bagian penting dari video",
            "Mengurangi ukuran file video tanpa penurunan kualitas yang signifikan",
            "Membuat video tidak dapat diputar",
            "Mengubah video menjadi audio",
            "Menghilangkan seluruh warna pada video"
        ],
        correct: 1,
        pembahasan: "Video compression menjaga performa aplikasi tetap optimal tanpa mengorbankan kualitas utama dari video."
    },

    {
        q: "Dalam multimedia interaktif, timeline sering digunakan pada software pengolah animasi dan video untuk mengatur kapan sebuah objek muncul, bergerak, atau hilang. Timeline sangat penting dalam menjaga sinkronisasi antar elemen. Maka timeline digunakan untuk...",
        a: [
            "Menghapus seluruh objek animasi",
            "Mengatur timing dan durasi setiap elemen media",
            "Mengubah format file menjadi teks",
            "Meningkatkan ukuran aplikasi",
            "Menonaktifkan seluruh animasi otomatis"
        ],
        correct: 1,
        pembahasan: "Timeline memungkinkan pengembang mengatur kapan suatu media muncul sehingga sinkronisasi visual dan audio dapat dijaga."
    },

    {
        q: "Fade in dan fade out adalah dua jenis transisi audio yang digunakan dalam multimedia interaktif untuk masuk dan keluarnya suara secara bertahap. Teknik ini membuat perubahan audio lebih halus dan alami. Oleh karena itu, penggunaan fade in/out bertujuan untuk...",
        a: [
            "Menghapus seluruh efek audio",
            "Membuat perubahan suara menjadi lebih halus agar tidak mengganggu pendengaran",
            "Mempercepat durasi video",
            "Menghilangkan suara sepenuhnya",
            "Mengganti audio dengan otomatis"
        ],
        correct: 1,
        pembahasan: "Fade in/out memberikan kesan profesional dan membantu menghindarkan suara mendadak yang bisa mengganggu pengguna."
    },

    {
        q: "SVG (Scalable Vector Graphics) merupakan format gambar vektor yang banyak digunakan dalam multimedia interaktif karena dapat diperbesar tanpa kehilangan kualitas. SVG sangat ringan dan ideal digunakan untuk ikon, ilustrasi, dan animasi sederhana. Maka keuntungan utama SVG adalah...",
        a: [
            "Memiliki ukuran file sangat besar",
            "Tidak dapat dianimasikan",
            "Dapat diperbesar tanpa pecah karena berbasis vektor",
            "Hanya bisa digunakan pada software desktop",
            "Tidak kompatibel dengan browser modern"
        ],
        correct: 2,
        pembahasan: "SVG berbasis vektor sehingga tetap tajam pada berbagai resolusi dan sangat cocok untuk web modern."
    },

    {
        q: "Salah satu elemen penting pada multimedia interaktif adalah preloader animation, yaitu animasi yang muncul sebelum halaman atau media dimuat sepenuhnya. Preloader membantu pengguna memahami bahwa proses sedang dilakukan dan bukan error. Dengan demikian, preloader animation berfungsi untuk...",
        a: [
            "Menghapus seluruh elemen media",
            "Memberikan indikasi bahwa halaman sedang dimuat",
            "Memblokir akses ke seluruh konten",
            "Menambah ukuran aplikasi agar lebih besar",
            "Menonaktifkan seluruh fungsi navigasi"
        ],
        correct: 1,
        pembahasan: "Preloader memberikan informasi bahwa sistem sedang memproses data sehingga meningkatkan kejelasan alur interaksi pengguna."
    }, {
    q: "Ketika menggabungkan berbagai media dalam satu aplikasi multimedia interaktif, konsistensi gaya visual sangat penting agar tampilan tidak terlihat campur aduk. Konsistensi ini mencakup penggunaan warna, gaya ilustrasi, penempatan elemen, hingga ritme animasi. Maka menjaga konsistensi visual bertujuan untuk...",
    a: [
        "Menghilangkan variasi media pada aplikasi",
        "Membuat tampilan aplikasi lebih harmonis, rapi, dan mudah dipahami pengguna",
        "Menambah file media sebanyak mungkin",
        "Mengurangi jumlah elemen interaktif di halaman",
        "Menampilkan media dengan efek acak tanpa aturan"
    ],
    correct: 1,
    pembahasan: "Konsistensi visual membantu pengguna memahami tata letak dan alur aplikasi tanpa kebingungan sehingga meningkatkan pengalaman visual."
},

    {
        q: "Video background sering digunakan dalam multimedia interaktif untuk memberikan kesan modern dan dinamis. Namun penggunaan video background harus memperhatikan ukuran file dan kontras warna agar tidak mengganggu keterbacaan teks. Maka tujuan utama penggunaan video background adalah...",
        a: [
            "Menghasilkan tampilan yang statis",
            "Menambah kedalaman visual dan daya tarik halaman",
            "Meningkatkan ukuran aplikasi secara berlebihan",
            "Menonaktifkan seluruh elemen animasi lain",
            "Menghapus konten teks pada halaman"
        ],
        correct: 1,
        pembahasan: "Video background menambah estetika halaman, tetapi harus dirancang dengan kontras dan optimasi yang baik."
    },

    {
        q: "Ketika sebuah aplikasi multimedia interaktif memuat banyak file media sekaligus, loading menjadi proses yang berat. Untuk itu, teknik progressive loading digunakan agar media tampil secara bertahap. Dengan demikian, progressive loading bertujuan untuk...",
        a: [
            "Memuat semua file sekaligus tanpa jeda",
            "Menampilkan konten secara bertahap untuk mempercepat tampilan awal halaman",
            "Menghapus elemen video",
            "Mengecilkan seluruh file media secara otomatis",
            "Menampilkan error loading"
        ],
        correct: 1,
        pembahasan: "Progressive loading menjaga halaman tetap responsif karena bagian utama dapat ditampilkan lebih cepat."
    },

    {
        q: "Efek hover adalah perubahan visual ketika pengguna mengarahkan kursor ke sebuah elemen, seperti tombol atau ikon. Efek ini biasanya berupa perubahan warna, ukuran, atau animasi singkat. Tujuan utama efek hover adalah...",
        a: [
            "Menghapus fungsi klik pada elemen",
            "Memberikan respon visual agar pengguna mengetahui elemen tersebut interaktif",
            "Mengubah seluruh tata letak halaman",
            "Memperbesar ukuran aplikasi",
            "Menjalankan video otomatis"
        ],
        correct: 1,
        pembahasan: "Efek hover memberi tanda visual bahwa elemen dapat diklik atau berfungsi tertentu, meningkatkan interaktivitas."
    },

    {
        q: "Masking adalah teknik dalam multimedia untuk menampilkan sebagian area dari gambar atau video, biasanya dengan bentuk tertentu seperti lingkaran, kotak, atau pola khusus. Masking digunakan untuk menciptakan visual yang lebih kreatif. Maka fungsi utama masking adalah...",
        a: [
            "Menurunkan kualitas gambar",
            "Membatasi area tampilan media dengan bentuk atau pola tertentu",
            "Menghilangkan animasi sepenuhnya",
            "Memperbesar ukuran file",
            "Mengganti format file secara otomatis"
        ],
        correct: 1,
        pembahasan: "Masking memberikan kontrol penuh terhadap area media yang ingin ditampilkan sehingga menciptakan efek visual menarik."
    },

    {
        q: "Dalam multimedia interaktif, timeline keyframing digunakan untuk mengontrol perubahan gerakan, posisi, opacity, dan transformasi lain pada animasi. Keyframe menandai titik awal dan akhir perubahan. Oleh karena itu, keyframing berfungsi untuk...",
        a: [
            "Menghapus seluruh animasi",
            "Mengatur perubahan properti elemen dari waktu ke waktu",
            "Menonaktifkan efek transisi",
            "Mengatur ukuran file multimedia",
            "Membuat gambar menjadi hitam-putih"
        ],
        correct: 1,
        pembahasan: "Keyframing memungkinkan pergerakan yang halus dan teratur pada objek animasi."
    },

    {
        q: "Efek parallax adalah teknik visual yang membuat elemen latar belakang bergerak lebih lambat dibanding elemen depan, menciptakan ilusi kedalaman. Efek ini sering digunakan pada website modern. Maka tujuan efek parallax adalah...",
        a: [
            "Menghapus seluruh elemen latar belakang",
            "Menciptakan kesan kedalaman visual yang realistis",
            "Memperbesar ukuran file tanpa manfaat",
            "Menyembunyikan navigasi",
            "Mengganti format halaman"
        ],
        correct: 1,
        pembahasan: "Parallax memberikan efek kedalaman tiga dimensi sehingga tampilan lebih menarik dan dinamis."
    },

    {
        q: "Hotspot dalam multimedia interaktif adalah area tertentu yang dapat diklik untuk menampilkan informasi tambahan seperti gambar, teks, atau video. Hotspot sering digunakan pada aplikasi edukasi atau tur virtual. Berdasarkan fungsinya, hotspot digunakan untuk...",
        a: [
            "Menghapus elemen pada halaman",
            "Memberikan interaksi tambahan melalui area klik tertentu",
            "Mengurangi jumlah konten",
            "Mengatur ukuran layar",
            "Menggantikan fungsi navigasi utama"
        ],
        correct: 1,
        pembahasan: "Hotspot memberikan pengalaman interaktif kepada pengguna dengan menyediakan informasi tambahan pada area tertentu."
    },

    {
        q: "Audio sprite adalah teknik menggabungkan banyak efek suara pendek ke dalam satu file audio besar untuk mengurangi jumlah permintaan (request) ke server. Teknik ini sangat berguna untuk aplikasi web atau game berbasis browser. Maka audio sprite digunakan untuk...",
        a: [
            "Memutar suara secara acak tanpa tujuan",
            "Menggabungkan berbagai sound effect pendek dalam satu file untuk efisiensi",
            "Menambah jumlah file audio",
            "Menghapus audio latar",
            "Memperbesar ukuran audio"
        ],
        correct: 1,
        pembahasan: "Audio sprite mengurangi load time serta meningkatkan efisiensi server karena hanya satu file yang perlu dimuat."
    },

    {
        q: "Ketika menggabungkan media, pengembang harus memperhatikan kompatibilitas browser terhadap format media tertentu. Misalnya beberapa browser tidak mendukung format video tertentu. Maka memastikan kompatibilitas media bertujuan untuk...",
        a: [
            "Memblokir media pada sebagian browser",
            "Memastikan media dapat diputar dengan baik di berbagai perangkat dan browser",
            "Mengganti media menjadi teks secara otomatis",
            "Menghapus fungsi interaktif media",
            "Meningkatkan ukuran file secara drastis"
        ],
        correct: 1,
        pembahasan: "Kompatibilitas memastikan pengalaman pengguna tetap konsisten di berbagai platform."
    }, {
    q: "Dalam proses penggabungan berbagai media, salah satu elemen yang penting adalah kontrol playback. Pada video atau audio, kontrol seperti play, pause, stop, volume, dan fullscreen memberi pengguna kebebasan untuk menentukan sendiri bagaimana mereka ingin menikmati konten. Dengan demikian, kontrol playback diperlukan untuk...",
    a: [
        'Menghilangkan interaksi pengguna sepenuhnya',
        'Memberikan pengguna kemampuan mengatur proses pemutaran media sesuai kebutuhan',
        'Menghapus media dari halaman',
        'Mengurangi kualitas file media',
        'Memutar media tanpa kontrol apapun'
    ],
    correct: 1,
    pembahasan: "Kontrol playback memberikan pengalaman interaktif yang fleksibel dan nyaman bagi pengguna."
},

    {
        q: "Ambient sound atau suara latar lingkungan sering digunakan dalam multimedia interaktif untuk menciptakan suasana tertentu. Contohnya suara hutan, ombak pantai, atau suasana kota. Suara ini ditujukan untuk memperkuat nuansa visual yang ditampilkan. Berdasarkan fungsinya, ambient sound digunakan untuk...",
        a: [
            'Menghilangkan efek suara lain',
            'Memberikan suasana natural yang mendukung visual tanpa mengganggu fokus utama',
            'Memperbesar ukuran audio secara drastis',
            'Menurunkan kualitas aplikasi',
            'Menghapus narasi suara'
        ],
        correct: 1,
        pembahasan: "Ambient sound memperkaya atmosfer aplikasi dan membuat pengalaman lebih imersif."
    },

    {
        q: "Dalam multimedia interaktif, animasi micro-interaction digunakan pada elemen kecil seperti tombol, ikon, atau notifikasi untuk memberikan respons cepat terhadap aksi pengguna. Micro-interaction sangat penting untuk menunjukkan status atau feedback. Maka fungsi utama micro-interaction adalah...",
        a: [
            'Menampilkan animasi besar pada layar',
            'Memberikan respon visual kecil sebagai feedback terhadap interaksi pengguna',
            'Menghapus seluruh elemen animasi',
            'Menambah durasi loading halaman',
            'Menghilangkan fungsi navigasi'
        ],
        correct: 1,
        pembahasan: "Micro-interaction memperjelas respon dari sistem sehingga meningkatkan kepuasan dan pemahaman pengguna."
    },

    {
        q: "Chroma key adalah teknik penggabungan media yang memungkinkan penggantian latar belakang menggunakan warna tertentu, biasanya warna hijau atau biru. Teknik ini banyak digunakan dalam video interaktif, film, dan presentasi digital. Maka tujuan utama chroma key adalah...",
        a: [
            'Mengubah video menjadi format gambar',
            'Menghapus latar belakang asli dan menggantinya dengan visual lain',
            'Mengubah seluruh warna video menjadi hitam-putih',
            'Memperbesar ukuran file video',
            'Menghapus elemen audio'
        ],
        correct: 1,
        pembahasan: "Chroma key memudahkan integrasi objek dengan latar digital lain untuk menghasilkan visual kompleks."
    },

    {
        q: "Storyboard animasi sering digunakan saat menggabungkan berbagai media dalam satu alur visual. Storyboard membantu merencanakan kapan gambar muncul, kapan animasi berjalan, dan kapan audio harus dimainkan. Fungsi storyboard terutama adalah...",
        a: [
            'Mengatur ukuran file multimedia',
            'Merencanakan urutan tampilan visual sebelum proses produksi dimulai',
            'Menghapus elemen interaktif',
            'Mengurangi durasi video',
            'Menonaktifkan animasi otomatis'
        ],
        correct: 1,
        pembahasan: "Storyboard membuat alur produksi menjadi lebih terorganisir sehingga meminimalisir kesalahan pada proses penggabungan media."
    },

    {
        q: "Subtitle atau teks terjemahan sering ditambahkan pada video dalam multimedia interaktif untuk membantu pengguna memahami konten, terutama jika video menggunakan bahasa asing. Selain itu, subtitle juga bermanfaat bagi pengguna tunarungu. Dari fungsinya, subtitle digunakan untuk...",
        a: [
            'Memperbesar ukuran video',
            'Memberikan teks penjelas yang menyinkronkan dialog dengan tampilan visual',
            'Menghapus audio dari video',
            'Mengubah video menjadi teks otomatis',
            'Menyembunyikan seluruh elemen visual lain'
        ],
        correct: 1,
        pembahasan: "Subtitle meningkatkan aksesibilitas serta membantu pengguna memahami dialog atau narasi video."
    },

    {
        q: "Pre-rendered animation adalah animasi yang dibuat sebelumnya dan kemudian digabungkan ke dalam multimedia interaktif sebagai file video atau gambar berurutan. Animasi jenis ini biasanya lebih detail dibanding animasi real-time. Dengan demikian, pre-rendered animation digunakan untuk...",
        a: [
            'Mengurangi kualitas animasi',
            'Menghasilkan animasi berkualitas tinggi yang tidak harus dihitung oleh sistem secara real-time',
            'Menghapus semua elemen visual',
            'Mengganti seluruh halaman menjadi video',
            'Memperbesar ukuran aplikasi secara berlebihan'
        ],
        correct: 1,
        pembahasan: "Pre-rendered animation memungkinkan penggunaan animasi berkualitas tinggi tanpa membebani performa aplikasi."
    },

    {
        q: "Pada aplikasi multimedia, blending mode digunakan untuk mencampur dua lapisan gambar atau video sehingga menghasilkan efek visual tertentu, seperti overlay, multiply, atau screen. Teknik ini banyak digunakan dalam desain grafis dan video editing. Maka tujuan blending mode adalah...",
        a: [
            'Menghapus satu lapisan gambar',
            'Menciptakan efek pencampuran visual antara dua lapisan',
            'Mengubah seluruh gambar menjadi transparan',
            'Mengurangi jumlah media pada halaman',
            'Menghapus elemen navigasi'
        ],
        correct: 1,
        pembahasan: "Blending mode memberikan efek visual kreatif yang tidak dapat dicapai dengan satu lapisan saja."
    },

    {
        q: "Dalam multimedia interaktif, audio dan video sering memerlukan proses normalisasi, yaitu menyamakan tingkat volume pada seluruh bagian konten agar tidak ada bagian yang terlalu keras atau terlalu pelan. Maka normalisasi audio dilakukan untuk...",
        a: [
            'Menghapus seluruh suara',
            'Menyamakan level volume agar audio terdengar konsisten sepanjang pemutaran',
            'Menambah efek echo secara otomatis',
            'Mengurangi durasi audio',
            'Mengubah audio menjadi file teks'
        ],
        correct: 1,
        pembahasan: "Normalisasi membuat audio lebih konsisten sehingga pengguna tidak terganggu oleh perubahan volume yang ekstrem."
    },

    {
        q: "Setelah semua media digabungkan, tahap akhir yang sangat penting adalah usability testing, yaitu proses menguji apakah multimedia interaktif mudah digunakan, dipahami, dan memberikan pengalaman yang baik. Maka usability testing bertujuan untuk...",
        a: [
            'Menghapus seluruh fitur aplikasi',
            'Memastikan bahwa aplikasi mudah dipahami dan nyaman digunakan oleh pengguna',
            'Menambah ukuran file aplikasi',
            'Menghilangkan seluruh media kompleks',
            'Mengganti format aplikasi secara otomatis'
        ],
        correct: 1,
        pembahasan: "Usability testing memastikan aplikasi tidak hanya menarik secara visual tetapi juga mudah digunakan oleh target pengguna."
    }
);




function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    randomizedQuiz = shuffleArray(quizData).map(item => ({
        ...item,
        shuffledAnswers: shuffleArray(item.a.map((text, idx) => ({
            text,
            isCorrect: idx === item.correct
        })))
    }));

    randomizedQuiz.forEach((item, i) => {
        const div = document.createElement("div");
        div.className = "question";

        let html = `<h4>${i + 1}. ${item.q}</h4>`;
        if (item.img) html += `<img src="${item.img}" class="soal-img"/>`;
        if (item.code) html += `<pre><code class="language-js">${item.code}</code></pre>`;

        html += item.shuffledAnswers.map((ans, idx) => `
      <label>
        <input type="radio" name="q${i}" value="${idx}">
        ${String.fromCharCode(65 + idx)}. ${ans.text}
      </label>
    `).join("");

        div.innerHTML = html;
        quizContainer.appendChild(div);
    });

    hljs.highlightAll();
    updateSubmitState();
    document.querySelectorAll("input[type='radio']").forEach(input =>
        input.addEventListener("change", updateSubmitState)
    );

    // Set timer dinamis: 1 menit per soal
    startTimer(randomizedQuiz.length * 60);
}

function updateSubmitState() {
    const total = randomizedQuiz.length;
    let answered = 0;
    for (let i = 0; i < total; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) answered++;
    }
    document.getElementById("submitQuiz").disabled = answered !== total;
}

function startTimer(seconds) {
    clearInterval(timerInterval);
    timeRemaining = seconds;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("⏰ Waktu habis! Jawaban akan dikirim otomatis.");
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timer = document.getElementById("timer");
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timer.textContent = `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Reset class warna
    timer.classList.remove("warning", "danger");

    // Ganti warna jika waktu hampir habis
    if (timeRemaining <= 60) {
        timer.classList.add("danger"); // merah
    } else if (timeRemaining <= 180) {
        timer.classList.add("warning"); // oranye
    }
}

document.getElementById("submitQuiz").addEventListener("click", () => submitQuiz());

function submitQuiz() {
    clearInterval(timerInterval);

    let benar = 0;
    let feedback = "";

    randomizedQuiz.forEach((item, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const selectedIndex = selected ? Number(selected.value) : null;
        const correctAns = item.shuffledAnswers.find(a => a.isCorrect);
        const yourAns = selected ? item.shuffledAnswers[selectedIndex] : null;
        const isCorrect = yourAns && yourAns.isCorrect;
        if (isCorrect) benar++;

        feedback += `
      <div class="feedback-item ${isCorrect ? 'benar' : 'salah'}">
        <h4>${i + 1}. ${item.q}</h4>
        ${item.img ? `<img src="${item.img}" class="soal-img"/>` : ""}
        ${item.code ? `<pre><code class="language-js">${item.code}</code></pre>` : ""}
        <p><b>Jawaban kamu:</b> ${yourAns ? yourAns.text : "Tidak dijawab"}</p>
        <p><b>Jawaban benar:</b> <span class="jawaban-benar">${correctAns.text}</span></p>
        <button class="btn-pembahasan" onclick="togglePembahasan(this)">👁️ Lihat Pembahasan</button>
        <div class="pembahasan"><b>Pembahasan:</b> ${item.pembahasan}</div>
      </div>
    `;
    });

    const total = randomizedQuiz.length;
    const nilai = Math.round((benar / total) * 100);

    document.getElementById("quiz").style.display = "none";
    document.getElementById("submitQuiz").style.display = "none";
    document.getElementById("ulangQuiz").style.display = "block";
    document.getElementById("timer").textContent = "⏱️ Selesai";

    document.getElementById("result").innerHTML = `
    <div class="result-box">
      <h3>🎯 Nilai Kamu: ${nilai}</h3>
      <p>Benar: ${benar} / ${total}</p>
      <button id="lihatPembahasan" style="margin-top:15px;">📘 Lihat Hasil & Pembahasan</button>
    </div>
  `;

    const pembahasanDiv = document.getElementById("hasilPembahasan");
    pembahasanDiv.innerHTML = `<h3>Hasil & Pembahasan:</h3>${feedback}`;

    document.getElementById("lihatPembahasan").addEventListener("click", () => {
        pembahasanDiv.style.display = "block";
        document.getElementById("lihatPembahasan").style.display = "none";
    });
}


function togglePembahasan(btn) {
    const pembahasan = btn.nextElementSibling;
    const visible = pembahasan.style.display === "block";
    pembahasan.style.display = visible ? "none" : "block";
    btn.textContent = visible ? "👁️ Lihat Pembahasan" : "🙈 Sembunyikan Pembahasan";
}

document.getElementById("ulangQuiz").addEventListener("click", () => {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("submitQuiz").style.display = "block";
    document.getElementById("ulangQuiz").style.display = "none";
    document.getElementById("result").innerHTML = "";
    document.getElementById("hasilPembahasan").innerHTML = "";
    document.getElementById("hasilPembahasan").style.display = "none";
    renderQuiz();
});

// === DARK MODE TOGGLE ===
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
renderQuiz();
const backToDashboard = document.querySelector('.btn-back');
if (backToDashboard) {
    backToDashboard.addEventListener('click', (e) => {
        e.preventDefault(); // cegah efek JS lain
        window.location.href = '../../index.html';
    });
}

// === FITUR ANTI-NYONTEK ===
// ======================== 🔒 FITUR ANTI-NYONTEK ULTRA KETAT ========================

// Blok aksi copy/paste/klik kanan/drag
['contextmenu', 'copy', 'cut', 'paste', 'selectstart', 'dragstart'].forEach(evt => {
    document.addEventListener(evt, e => e.preventDefault());
});

// Cegah shortcut mencurigakan
document.addEventListener('keydown', e => {
    const blocked = ['F12', 'Escape', 'PrintScreen'];
    if (
        blocked.includes(e.key) ||
        (e.ctrlKey && ['u', 's', 'c', 'x', 'a', 'p', '+', '-', '=', 'r', 't', 'n'].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) ||
        (e.metaKey && e.key.toLowerCase() === 'p')
    ) {
        e.preventDefault();
        autoEndExam("Shortcut mencurigakan digunakan");
    }
});

// 🧩 Deteksi Print Screen (PrtSc/SysRq)
document.addEventListener('keyup', e => {
    if (e.key === 'PrintScreen' || e.keyCode === 44) {
        autoEndExam("Percobaan mengambil screenshot terdeteksi");
    }
});

// 🧩 Deteksi clipboard (indikasi screenshot)
setInterval(() => {
    navigator.clipboard?.readText?.().then(text => {
        if (text && text.length > 50 && text.includes("data:image")) {
            autoEndExam("Screenshot ke clipboard terdeteksi");
        }
    }).catch(() => { });
}, 3000);

// Deteksi keluar tab/minimize
document.addEventListener("visibilitychange", () => {
    if (document.hidden) autoEndExam("Kamu meninggalkan tab ujian");
});

// Deteksi fokus/tab baru
let lastFocusTime = Date.now();
window.addEventListener("focus", () => {
    const now = Date.now();
    if (now - lastFocusTime > 1500) {
        autoEndExam("Terindikasi membuka tab lain");
    }
});
window.addEventListener("blur", () => {
    lastFocusTime = Date.now();
});

// Wajib fullscreen
function openFullscreen() {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
}
window.addEventListener("load", openFullscreen);
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) autoEndExam("Keluar dari mode fullscreen");
});

// Cegah zoom Ctrl+scroll
document.addEventListener('wheel', e => {
    if (e.ctrlKey) e.preventDefault();
}, { passive: false });

// Disable drag/seleksi
document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.msUserSelect = 'none';
document.querySelectorAll('*').forEach(el => el.setAttribute('draggable', 'false'));

// Cegah klik kanan
document.addEventListener('contextmenu', e => e.preventDefault());

// Deteksi Developer Tools
setInterval(() => {
    const start = performance.now();
    debugger;
    const delay = performance.now() - start;
    if (delay > 100) autoEndExam("Developer Tools terdeteksi terbuka");
}, 1000);

// === Auto End Exam ===
function autoEndExam(reason) {
    alert(`❌ Ujian dihentikan karena: ${reason}`);
    try {
        submitQuiz();
    } catch (err) {
        console.warn("Submit gagal otomatis:", err);
    }
    document.exitFullscreen?.();
    document.body.innerHTML = `
        <div style="text-align:center;margin-top:120px;font-family:sans-serif;">
            <h1 style="color:red;">🚫 Ujian Dihentikan</h1>
            <h3>Alasan: ${reason}</h3>
            <p>Jawaban kamu sudah otomatis disimpan dan ujian dinyatakan selesai.</p>
        </div>
    `;
}
