let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Dalam konteks pembelajaran multimedia, istilah 'multimedia' tidak sekadar mengacu pada penggunaan satu jenis media saja, tetapi merujuk pada gabungan berbagai elemen seperti teks, gambar, audio, video, dan animasi yang dipadukan untuk menyampaikan informasi secara lebih efektif. Berdasarkan definisi tersebut, multimedia adalah...",
        a: [
            "Media tunggal yang menyampaikan informasi secara visual",
            "Gabungan beberapa media untuk menyampaikan informasi",
            "Informasi yang hanya menggunakan media teks",
            "Penyampaian informasi melalui suara saja",
            "Proses pengolahan data dalam komputer"
        ],
        correct: 1,
        pembahasan: "Multimedia merupakan kombinasi dari berbagai elemen media seperti teks, audio, gambar, video, dan animasi yang disatukan untuk menghasilkan komunikasi yang menarik dan informatif."
    },
    {
        q: "Dalam proses penyampaian informasi modern, multimedia digunakan untuk meningkatkan efektivitas komunikasi. Penggunaan berbagai media seperti video, suara, dan animasi memungkinkan pengguna berinteraksi serta memahami materi dengan lebih mudah. Oleh karena itu, tujuan utama dari multimedia dalam komunikasi adalah...",
        a: [
            "Memberikan hiburan semata",
            "Menyampaikan informasi dalam format tulisan",
            "Memberikan pengalaman interaktif kepada pengguna",
            "Menyediakan data statis untuk pengguna",
            "Mengurangi penggunaan teknologi"
        ],
        correct: 2,
        pembahasan: "Multimedia memberikan pengalaman interaktif yang memungkinkan pengguna mengendalikan dan menjelajahi informasi sesuai kebutuhan."
    },
    {
        q: "Dalam penyusunan sebuah produk multimedia, terdapat beberapa jenis elemen yang umumnya wajib ada agar produk tersebut dapat dikategorikan sebagai multimedia. Elemen-elemen tersebut mencakup berbagai komponen yang berfungsi melengkapi tampilan dan penyampaian informasi. Kategori utama dalam multimedia terdiri dari...",
        a: [
            "Suara, video, teks",
            "Gambar, film, musik",
            "Teks, grafis, audio, video, animasi",
            "Audio, video, grafik",
            "Teks, desain, musik"
        ],
        correct: 2,
        pembahasan: "Lima komponen penting dalam multimedia adalah teks, grafis, audio, video, dan animasi karena semuanya berperan dalam menyampaikan informasi secara visual maupun auditori."
    },
    {
        q: "Dalam pembuatan produk multimedia, visual effect atau efek visual sering kali ditambahkan untuk memberikan tampilan yang lebih menarik. Efek visual ini membantu memperkuat pesan, memperjelas alur, serta menciptakan pengalaman visual yang memukau bagi pengguna. Oleh karena itu, fungsi utama visual effect dalam multimedia adalah...",
        a: [
            "Mengurangi ukuran file multimedia",
            "Memberikan pengalaman visual yang menarik",
            "Menyampaikan informasi tertulis",
            "Menampilkan data dalam format spreadsheet",
            "Mengedit konten teks"
        ],
        correct: 1,
        pembahasan: "Visual effect berfungsi menambah daya tarik visual sehingga konten lebih mudah dipahami dan lebih menyenangkan untuk dilihat."
    },
    {
        q: "Dalam sistem multimedia modern, salah satu istilah yang sering digunakan adalah 'multimedia interaktif'. Istilah ini mengacu pada jenis multimedia yang memungkinkan pengguna untuk mengontrol alur informasi, memilih menu, menekan tombol, atau menentukan sendiri bagian mana yang ingin diakses. Berdasarkan penjelasan tersebut, multimedia interaktif adalah...",
        a: [
            "Multimedia dengan alur cerita tetap",
            "Sistem yang memungkinkan pengguna berinteraksi dengan konten",
            "Produk multimedia berbasis teks saja",
            "Multimedia tanpa audio",
            "Penggunaan gambar dan video dalam format tunggal"
        ],
        correct: 1,
        pembahasan: "Multimedia interaktif memberikan kebebasan pada pengguna untuk mengendalikan jalannya materi sehingga pengalaman belajar atau penggunaan menjadi lebih fleksibel."
    },
    {
        q: "Dalam dunia pendidikan, multimedia memegang peran penting karena dapat meningkatkan kualitas proses belajar mengajar. Penggabungan berbagai elemen media dapat membuat materi lebih menarik, mudah dipahami, dan memberikan pengalaman belajar yang berbeda dibandingkan metode tradisional. Oleh karena itu, salah satu keuntungan penggunaan multimedia dalam pendidikan adalah...",
        a: [
            "Membuat pembelajaran lebih menarik dan interaktif",
            "Mengurangi penggunaan buku cetak",
            "Mempercepat penyampaian materi",
            "Membatasi akses informasi",
            "Menggunakan media tradisional"
        ],
        correct: 0,
        pembahasan: "Multimedia menambah daya tarik dan memperkaya pengalaman belajar melalui kombinasi audio-visual."
    },
    {
        q: "Pada tahap awal proses produksi multimedia, ada sebuah dokumen penting yang digunakan untuk menggambarkan alur cerita secara visual sebelum proses pembuatan dimulai. Dokumen ini biasanya terdiri dari gambar-gambar sederhana yang mewakili setiap adegan atau tampilan layar. Dokumen tersebut dikenal sebagai storyboard. Fungsi utama storyboard adalah...",
        a: [
            "Membuat desain perangkat lunak",
            "Membuat sketsa visual alur cerita",
            "Menganalisis pasar produk",
            "Mengedit hasil akhir multimedia",
            "Membuat data statistik"
        ],
        correct: 1,
        pembahasan: "Storyboard berfungsi sebagai panduan visual yang menggambarkan setiap bagian konten sebelum diproduksi."
    },
    {
        q: "Dalam alur kerja produksi multimedia, tahap preproduksi menjadi fondasi penting karena seluruh perencanaan dilakukan pada tahap ini. Mulai dari analisis kebutuhan, penentuan konsep, pembuatan storyboard, hingga perencanaan teknis semuanya dipersiapkan sebelum proses produksi dimulai. Oleh karena itu, preproduksi adalah...",
        a: [
            "Tahap pengolahan video dan audio",
            "Tahap perencanaan dan desain awal",
            "Tahap distribusi konten",
            "Tahap evaluasi hasil akhir",
            "Proses mengedit elemen animasi"
        ],
        correct: 1,
        pembahasan: "Preproduksi mencakup penetapan konsep, naskah, storyboard, dan perencanaan teknis lainnya."
    },
    {
        q: "Untuk menghasilkan produk multimedia yang utuh, diperlukan berbagai elemen penyusun yang saling melengkapi. Tanpa kehadiran elemen-elemen tersebut, sebuah produk tidak dapat disebut multimedia. Elemen-elemen yang dimaksud adalah...",
        a: [
            "Gambar, teks, musik",
            "Audio, desain, teks",
            "Teks, grafis, audio, video, animasi",
            "Animasi, gambar, suara",
            "Film, teks, grafis"
        ],
        correct: 2,
        pembahasan: "Kelima elemen tersebut merupakan fondasi utama yang membentuk keseluruhan struktur multimedia."
    },
    {
        q: "Setelah seluruh proses produksi selesai, konten tidak langsung didistribusikan. Ada tahap penting yang harus dilakukan yaitu pascaproduksi. Pada tahap ini, konten diperiksa, diedit, disempurnakan, dan diuji agar hasil akhirnya sesuai standar dan tujuan awal. Berdasarkan hal tersebut, pascaproduksi adalah...",
        a: [
            "Proses editing audio saja",
            "Tahap evaluasi, revisi, dan distribusi konten",
            "Tahap pengumpulan data",
            "Produksi animasi",
            "Proses rekaman video"
        ],
        correct: 1,
        pembahasan: "Pascaproduksi mencakup editing final, revisi, rendering, dan publikasi."
    }, {
        q: "Dalam proses pembuatan produk multimedia, perangkat lunak atau software memiliki peranan yang sangat penting. Tanpa adanya software, proses seperti pengeditan gambar, pemotongan video, pengaturan suara, hingga pembuatan animasi tidak dapat dilakukan. Oleh karena itu, peran utama software dalam produksi multimedia adalah...",
        a: [
            "Membantu proses pengolahan konten digital",
            "Mengurangi ukuran file secara otomatis",
            "Mengatur distribusi data audio",
            "Membuat konten tanpa melalui proses editing",
            "Menyediakan file mentah tanpa perubahan"
        ],
        correct: 0,
        pembahasan: "Software seperti Adobe Photoshop, Premiere, dan After Effects digunakan untuk memproses berbagai elemen multimedia agar siap digunakan dalam produk akhir."
    },
    {
        q: "Tidak semua jenis multimedia memberikan kebebasan kepada pengguna untuk mengontrol jalannya informasi. Ada format multimedia yang berjalan secara berurutan dari awal hingga akhir tanpa interaksi dari pengguna. Format seperti ini sering ditemukan pada video, film, dan presentasi otomatis. Jenis multimedia tersebut dikenal sebagai multimedia linear. Berdasarkan penjelasan tersebut, multimedia linear adalah...",
        a: [
            "Multimedia dengan alur tetap dan tidak dapat dikendalikan pengguna",
            "Multimedia tanpa elemen teks",
            "Multimedia yang hanya berisi animasi",
            "Sistem interaktif berbasis audio",
            "Proses editing gambar digital"
        ],
        correct: 0,
        pembahasan: "Multimedia linear tidak memberikan navigasi kepada pengguna, sehingga alur informasi berjalan secara berurutan."
    },
    {
        q: "Produksi multimedia membutuhkan berbagai sumber daya mulai dari perangkat keras, perangkat lunak, hingga tenaga ahli dalam berbagai bidang seperti desain, video editing, dan audio engineering. Faktor-faktor tersebut membuat pembuatan multimedia memerlukan biaya yang tidak sedikit. Oleh sebab itu, salah satu kelemahan dalam produksi multimedia adalah...",
        a: [
            "Biaya produksi yang relatif tinggi",
            "Konten tidak interaktif",
            "Mengurangi efisiensi komunikasi",
            "Memerlukan koneksi internet",
            "Tidak mendukung grafis"
        ],
        correct: 0,
        pembahasan: "Karena membutuhkan teknologi dan tenaga ahli, produksi multimedia cenderung memiliki biaya tinggi dibanding media tradisional."
    },
    {
        q: "Animasi merupakan salah satu elemen multimedia yang sangat populer karena dapat menyampaikan informasi secara lebih dinamis dibandingkan teks atau gambar statis. Animasi dapat membantu menjelaskan konsep yang kompleks, memberikan ilustrasi visual, dan meningkatkan daya tarik tampilan. Oleh karena itu, manfaat utama animasi dalam multimedia adalah...",
        a: [
            "Menyampaikan informasi secara dinamis dan menarik",
            "Mengurangi peran teks dalam materi",
            "Membatasi akses pengguna",
            "Meningkatkan ukuran file secara drastis",
            "Memberikan tambahan suara latar secara otomatis"
        ],
        correct: 0,
        pembahasan: "Animasi digunakan untuk menampilkan konsep yang sulit dengan cara yang menarik, hidup, dan mudah dipahami."
    },
    {
        q: "Setelah produk multimedia selesai dibuat, perlu dilakukan pemeriksaan kualitas untuk memastikan bahwa seluruh komponen telah berfungsi dengan baik. Proses ini melibatkan pengecekan materi, memastikan tidak ada kesalahan teknis, dan memastikan tujuan produk telah tercapai. Kegiatan tersebut termasuk dalam tahap evaluasi. Dengan demikian, tujuan utama evaluasi dalam proses produksi multimedia adalah...",
        a: [
            "Menyunting konten teks",
            "Menilai hasil akhir agar sesuai tujuan dan standar kualitas",
            "Mengedit audio",
            "Mendistribusikan konten",
            "Mengumpulkan data pengguna"
        ],
        correct: 1,
        pembahasan: "Evaluasi memastikan produk sesuai standar kualitas sebelum dirilis ke publik."
    },
    {
        q: "Dalam pembuatan aplikasi dan produk multimedia, desain antarmuka atau interface design memegang peranan penting. Interface berfungsi sebagai penghubung antara pengguna dan sistem, sehingga tampilan yang mudah dipahami dan navigasi yang intuitif sangat diperlukan. Oleh karena itu, desain interface adalah...",
        a: [
            "Proses editing video",
            "Proses mendesain bagaimana pengguna berinteraksi dengan sistem",
            "Tahap distribusi konten",
            "Tahap evaluasi produk akhir",
            "Proses pembuatan storyboard"
        ],
        correct: 1,
        pembahasan: "Interface design menentukan kenyamanan pengguna saat mengoperasikan aplikasi multimedia."
    },
    {
        q: "Ketika menggabungkan berbagai elemen multimedia seperti teks, gambar, suara, video, dan animasi ke dalam satu produk utuh, proses ini disebut integrasi media. Tanpa integrasi, elemen-elemen tersebut hanya akan menjadi komponen terpisah yang tidak saling berhubungan. Dengan demikian, fungsi utama integrasi media adalah...",
        a: [
            "Memisahkan elemen-elemen media",
            "Menggabungkan berbagai elemen media menjadi satu produk utuh",
            "Mengurangi interaksi pengguna",
            "Menampilkan media dalam bentuk teks saja",
            "Membatasi akses pengguna terhadap konten"
        ],
        correct: 1,
        pembahasan: "Integrasi media menyatukan seluruh elemen sehingga menghasilkan produk multimedia yang harmonis dan berfungsi."
    },
    {
        q: "Dalam alur produksi multimedia, tahap produksi merupakan tahap inti di mana seluruh konsep, desain, dan rencana yang telah dibuat pada tahap preproduksi mulai diwujudkan. Pada tahap ini, semua aset seperti gambar, video, audio, dan animasi dibuat atau dikumpulkan sesuai kebutuhan. Dengan demikian, tujuan utama tahap produksi adalah...",
        a: [
            "Menganalisis data yang telah dikumpulkan",
            "Mewujudkan seluruh konten sesuai konsep dan desain",
            "Melakukan editing akhir terhadap konten",
            "Mendistribusikan konten kepada pengguna",
            "Mengumpulkan dan mengatur suara serta audio"
        ],
        correct: 1,
        pembahasan: "Produksi merupakan tahap pembuatan seluruh materi dasar multimedia yang akan digunakan pada tahap berikutnya."
    },
    {
        q: "Dalam proses pembuatan multimedia, sebelum sebuah produk dikembangkan sepenuhnya, biasanya dibuat prototipe atau model awal. Prototipe ini bertujuan untuk menguji efektivitas desain dan interaksi secara awal sehingga dapat diperbaiki sebelum masuk ke tahap produksi penuh. Dengan demikian, evaluasi prototipe adalah...",
        a: [
            "Langkah untuk mendistribusikan konten",
            "Upaya menilai dan menguji desain awal sebelum diproduksi secara menyeluruh",
            "Proses editing visual",
            "Tahap integrasi media ke dalam konten akhir",
            "Dokumen pengganti storyboard"
        ],
        correct: 1,
        pembahasan: "Prototipe membantu mendeteksi kekurangan sebelum produksi besar dilakukan, sehingga lebih efisien dan hemat biaya."
    },
    {
        q: "Berbeda dengan multimedia linear, multimedia non-linear memberikan kebebasan kepada pengguna untuk menentukan alur informasi yang ingin mereka akses. Sistem seperti ini banyak digunakan dalam aplikasi interaktif, website edukasi, dan game. Berdasarkan hal tersebut, multimedia non-linear adalah...",
        a: [
            "Sistem yang memberikan kontrol navigasi penuh kepada pengguna",
            "Sistem dengan alur tetap yang tidak dapat dikendalikan",
            "Multimedia yang hanya berisi elemen suara",
            "Multimedia yang hanya berfokus pada animasi",
            "Proses editing gambar dan video"
        ],
        correct: 0,
        pembahasan: "Multimedia non-linear memungkinkan pengguna memilih jalur informasi sendiri sehingga lebih fleksibel."
    }, {
        q: "Dalam proses produksi multimedia, setelah semua materi berhasil dibuat pada tahap produksi, terdapat tahap lanjutan yang bertujuan untuk menyempurnakan keseluruhan isi produk. Tahap ini dikenal sebagai post-produksi, di mana proses seperti pengeditan, penggabungan elemen, pemberian efek tambahan, hingga persiapan akhir dilakukan sebelum produk siap dipublikasikan. Berdasarkan hal tersebut, tujuan utama tahap post-produksi adalah...",
        a: [
            "Menyusun storyboard sebagai rencana awal",
            "Menyelesaikan proses penyempurnaan hasil akhir sebelum dirilis",
            "Melakukan riset audiens untuk analisis kebutuhan",
            "Merancang konsep awal multimedia",
            "Mengumpulkan berbagai aset mentah untuk produksi"
        ],
        correct: 1,
        pembahasan: "Post-produksi memastikan seluruh elemen multimedia tersusun dengan baik, bebas dari kesalahan, dan siap untuk digunakan atau didistribusikan."
    },
    {
        q: "Storyboard memiliki peran penting dalam tahap perencanaan sebuah produk multimedia. Dokumen ini menyajikan rangkaian gambar yang menggambarkan alur visual, urutan adegan, tata letak tampilan, serta interaksi pengguna. Dengan adanya storyboard, seluruh tim produksi memiliki pedoman yang jelas dalam membuat konten. Oleh karena itu, storyboard berfungsi sebagai...",
        a: [
            "Alat untuk melakukan editing video",
            "Rancangan visual yang menggambarkan alur cerita secara terstruktur",
            "Media untuk menyusun elemen teks",
            "Panduan teknis dalam mengintegrasikan audio",
            "Lembar kerja untuk memperbaiki error teknis"
        ],
        correct: 1,
        pembahasan: "Storyboard memastikan bahwa seluruh alur multimedia dapat divisualisasikan sebelum proses produksi dimulai, sehingga mengurangi kesalahan konsep."
    },
    {
        q: "Dalam pengembangan aplikasi atau produk multimedia, sangat penting untuk memastikan bahwa pengguna dapat mengoperasikan dan memahami tampilan yang disajikan dengan mudah. Untuk itu dilakukan usability testing, yaitu proses pengujian yang melibatkan pengguna untuk mengetahui apakah tampilan, navigasi, dan interaksi dalam aplikasi sudah nyaman dan mudah digunakan. Berdasarkan hal tersebut, usability testing adalah...",
        a: [
            "Pengujian perangkat lunak dari sisi teknis",
            "Penilaian tingkat kenyamanan dan kemudahan penggunaan aplikasi oleh pengguna",
            "Proses distribusi konten multimedia",
            "Tahap penyusunan konsep dan naskah",
            "Proses pengumpulan data visual"
        ],
        correct: 1,
        pembahasan: "Usability testing memastikan bahwa pengguna dapat menggunakan aplikasi tanpa kebingungan, sesuai prinsip user-centered design."
    },
    {
        q: "Untuk membuat produk multimedia yang kompleks, biasanya diperlukan lebih dari satu aplikasi. Misalnya, satu software digunakan untuk desain grafis, yang lain untuk editing video, dan software lain untuk membuat animasi. Proses penggunaan berbagai software tersebut secara terpadu dikenal sebagai integrasi software. Dengan demikian, integrasi software adalah...",
        a: [
            "Penggabungan perangkat keras untuk produksi",
            "Penggunaan berbagai software berbeda secara bersamaan untuk menghasilkan produk multimedia",
            "Penyimpanan file multimedia ke dalam folder khusus",
            "Proses editing suara dalam perangkat lunak audio",
            "Pembuatan animasi berbasis teks"
        ],
        correct: 1,
        pembahasan: "Integrasi software memungkinkan proses produksi lebih efisien dengan memanfaatkan keunggulan setiap aplikasi."
    },
    {
        q: "Dalam pengembangan website maupun aplikasi multimedia, desain yang responsif atau responsive design menjadi hal penting agar tampilan dapat menyesuaikan ukuran layar perangkat pengguna, seperti komputer, tablet, atau smartphone. Hal ini memastikan produk tetap nyaman digunakan pada berbagai resolusi. Dengan demikian, salah satu keunggulan desain responsif adalah...",
        a: [
            "Tampilan tetap baik pada berbagai perangkat tanpa merusak tata letak",
            "Hanya mendukung elemen teks dan gambar statis",
            "Tidak memerlukan proses editing tampilan",
            "Hanya fokus pada animasi dan efek visual",
            "Konten selalu ditampilkan secara berurutan dan tidak bisa diubah"
        ],
        correct: 0,
        pembahasan: "Responsive design memberikan fleksibilitas tampilan sehingga pengguna dapat mengakses konten secara optimal di perangkat apa pun."
    },
    {
        q: "Media interaktif adalah salah satu jenis multimedia yang banyak digunakan dalam aplikasi edukasi, presentasi interaktif, dan game. Media ini memungkinkan pengguna melakukan tindakan tertentu seperti memilih menu, menekan tombol, atau mengontrol jalannya informasi. Dengan demikian, media interaktif adalah...",
        a: [
            "Media yang hanya dapat diakses oleh pengguna tertentu",
            "Media yang memberikan kesempatan kepada pengguna untuk berinteraksi langsung dengan konten",
            "Media yang hanya menampilkan suara dan musik",
            "Media yang berfokus pada animasi linear",
            "Media berbasis teks sepenuhnya"
        ],
        correct: 1,
        pembahasan: "Media interaktif memberi kebebasan pengguna untuk berpartisipasi aktif dalam mengendalikan konten."
    },
    {
        q: "Tahap pre-produksi merupakan tahap terpenting dalam alur produksi multimedia karena pada tahap ini seluruh rencana utama dibentuk. Mulai dari penentuan ide awal, pengembangan konsep, pembuatan storyboard, hingga kebutuhan teknis semuanya dipersiapkan dengan matang agar proses produksi berjalan lancar. Oleh karena itu, tujuan utama pre-produksi adalah...",
        a: [
            "Melakukan evaluasi akhir terhadap produk",
            "Menyusun seluruh rencana konsep dan desain sebelum produksi",
            "Melakukan editing setelah konten selesai",
            "Mengintegrasikan seluruh elemen media",
            "Membuat laporan akhir setelah distribusi"
        ],
        correct: 1,
        pembahasan: "Pre-produksi menjadi dasar keseluruhan pembuatan multimedia karena menyiapkan kerangka utama produksi."
    },
    {
        q: "Dalam proses editing video, terdapat sebuah fitur penting yang digunakan untuk menempatkan berbagai elemen seperti video, audio, efek, dan teks dalam urutan waktu tertentu. Fitur ini berbentuk garis waktu yang menunjukkan durasi dan posisi setiap elemen dalam proyek. Fitur tersebut dikenal sebagai timeline. Dengan demikian, timeline adalah...",
        a: [
            "Alat untuk menilai kualitas video",
            "Elemen grafik untuk membuat animasi",
            "Representasi urutan elemen video dan audio dalam editor",
            "Folder penyimpanan media dalam software",
            "Pengaturan ukuran layar output"
        ],
        correct: 2,
        pembahasan: "Timeline membantu mengatur dan menggabungkan semua elemen sehingga tersusun sesuai alur yang diinginkan."
    },
    {
        q: "Dalam produksi multimedia, sangat penting untuk mengetahui apakah audiens dapat memahami dan menerima konten yang disampaikan. Proses untuk menilai hal tersebut dilakukan melalui evaluasi audiens. Dengan demikian, peran utama evaluasi audiens adalah...",
        a: [
            "Menentukan format file yang akan digunakan",
            "Menilai tingkat pemahaman dan respons audiens terhadap konten",
            "Mengedit elemen visual dalam multimedia",
            "Merancang antarmuka pengguna",
            "Membuat storyboard dan konsep awal"
        ],
        correct: 1,
        pembahasan: "Evaluasi audiens membantu memastikan bahwa materi sesuai dengan kebutuhan dan kemampuan pengguna target."
    },
    {
        q: "Animasi merupakan salah satu elemen visual penting yang sering digunakan untuk memperjelas konsep, mempercantik tampilan, dan meningkatkan interaksi. Dibandingkan gambar statis, animasi mampu menampilkan perubahan dan gerakan sehingga lebih menarik dan informatif. Dengan demikian, fungsi utama animasi dalam multimedia adalah...",
        a: [
            "Menjadi alternatif dari penggunaan teks",
            "Memberikan efek visual yang dinamis dan menarik",
            "Mengurangi kualitas video",
            "Membuat audio lebih hidup",
            "Mengatur tata letak antarmuka"
        ],
        correct: 1,
        pembahasan: "Animasi memudahkan penyampaian pesan karena pergerakan visual menarik perhatian dan membantu pemahaman."
    }, {
        q: "Dalam proses penyampaian informasi visual, efek visual atau visual effect sering digunakan untuk memperkuat pesan dan membuat tampilan lebih menarik. Efek visual ini dapat berupa transisi, bayangan, pencahayaan, atau manipulasi visual lainnya yang memberikan kesan profesional pada konten multimedia. Berdasarkan hal tersebut, visual effect adalah...",
        a: [
            "Efek yang diterapkan pada audio",
            "Efek tampilan visual yang diberikan untuk memperindah dan memperkuat pesan",
            "Proses rendering video",
            "Pengaturan layout teks dalam desain",
            "Gambar vektor yang bersifat statis"
        ],
        correct: 1,
        pembahasan: "Visual effect membantu memperkuat kesan dan membuat tampilan multimedia lebih menarik serta informatif."
    },
    {
        q: "Selain efek visual, terdapat juga unsur suara tambahan dalam multimedia yang digunakan untuk memperkuat suasana, memberikan tanda, atau menekankan suatu peristiwa. Unsur ini biasanya berupa suara pendek seperti klik, denting, ledakan, atau efek lingkungan. Unsur tersebut dikenal sebagai sound effect. Dengan demikian, sound effect berfungsi untuk...",
        a: [
            "Mengurangi kualitas suara utama",
            "Memberikan efek suara tambahan yang memperkaya pengalaman pengguna",
            "Menghapus suara latar belakang",
            "Mengatur format file audio",
            "Memproduksi musik secara otomatis"
        ],
        correct: 1,
        pembahasan: "Sound effect digunakan untuk menambah nuansa dan menciptakan pengalaman audio yang lebih hidup dalam multimedia."
    },
    {
        q: "Berbeda dengan multimedia linear yang memiliki alur tetap, multimedia non-linear memberikan kebebasan bagi pengguna untuk menentukan bagian konten mana yang ingin mereka akses terlebih dahulu. Konsep ini banyak diterapkan pada aplikasi edukasi, website interaktif, dan game. Oleh karena itu, tujuan utama media non-linear adalah...",
        a: [
            "Menyajikan alur informasi tetap tanpa kontrol pengguna",
            "Memberikan kebebasan navigasi sehingga pengguna dapat memilih jalur pembelajaran sendiri",
            "Mengurangi interaksi pengguna dengan konten",
            "Menyediakan format penyimpanan audio berkualitas",
            "Menampilkan konten secara berurutan dari awal hingga akhir"
        ],
        correct: 1,
        pembahasan: "Media non-linear memberikan fleksibilitas lebih besar sehingga pengguna dapat menyesuaikan jalur pembelajaran sesuai kebutuhan mereka."
    },
    {
        q: "Video merupakan elemen penting dalam multimedia, dan salah satu format video yang paling umum digunakan adalah MP4. Format ini mendukung kompresi tinggi dengan kualitas yang baik sehingga cocok untuk distribusi online maupun penyimpanan efisien. Dengan demikian, fungsi utama format MP4 adalah...",
        a: [
            "Menyimpan file teks",
            "Menyimpan gambar dalam resolusi tinggi",
            "Menyimpan video dan audio dalam format terkompresi",
            "Menyimpan audio mentah tanpa proses kompresi",
            "Menyimpan metadata untuk file multimedia"
        ],
        correct: 2,
        pembahasan: "MP4 merupakan format video modern yang mendukung kompresi tinggi sehingga ukuran file kecil namun kualitas tetap baik."
    },
    {
        q: "Editing merupakan salah satu tahap penting dalam proses produksi multimedia. Pada tahap ini, berbagai elemen seperti gambar, video, audio, teks, dan animasi disempurnakan dan disusun agar menghasilkan tampilan yang lebih profesional. Oleh karena itu, editing dalam produksi multimedia adalah...",
        a: [
            "Pengumpulan data mentah",
            "Proses penyempurnaan dan pengaturan elemen-elemen multimedia agar lebih baik",
            "Penyimpanan file multimedia",
            "Penentuan target audiens",
            "Pembuatan storyboard untuk konsep awal"
        ],
        correct: 1,
        pembahasan: "Editing dilakukan untuk memperbaiki kualitas konten dan menggabungkan seluruh elemen multimedia menjadi produk final."
    },
    {
        q: "Dalam proses pembuatan produk multimedia, sebelum mengembangkan versi lengkap, sering dibuat sebuah model awal untuk melihat bagaimana konsep dan interaksi akan bekerja. Model awal ini disebut prototipe atau prototyping. Dengan demikian, prototyping adalah...",
        a: [
            "Proses editing lanjutan setelah render final",
            "Pembuatan model awal produk multimedia untuk diuji",
            "Proses membuat software editing baru",
            "Proses menentukan format file akhir",
            "Pembuatan storyboard dalam bentuk sketsa"
        ],
        correct: 1,
        pembahasan: "Prototyping memungkinkan tim untuk melihat gambaran awal produk dan melakukan perbaikan sebelum produksi penuh."
    },
    {
        q: "Dalam file multimedia, terdapat informasi tambahan yang tidak terlihat langsung oleh pengguna namun tersimpan sebagai bagian dari file. Informasi ini mencakup data seperti durasi video, ukuran file, tipe codec, dan tanggal pembuatan. Informasi ini dikenal sebagai metadata. Oleh karena itu, fungsi metadata adalah...",
        a: [
            "Menyimpan informasi tambahan mengenai file multimedia",
            "Menambah efek visual pada video",
            "Menggabungkan audio dan video",
            "Menentukan resolusi gambar secara otomatis",
            "Membuat animasi dua dimensi secara cepat"
        ],
        correct: 0,
        pembahasan: "Metadata penting untuk mengatur, menyimpan, dan membaca informasi teknis mengenai file multimedia."
    },
    {
        q: "Dalam proses editing video profesional, salah satu software yang sering digunakan adalah Adobe Premiere Pro. Software ini memungkinkan pengguna memotong video, mengatur audio, menambahkan efek visual, dan menggabungkan berbagai elemen multimedia. Dengan demikian, peran utama Adobe Premiere dalam produksi multimedia adalah...",
        a: [
            "Menyimpan file mentah tanpa perubahan",
            "Membuat storyboard secara otomatis",
            "Mengedit dan mengintegrasikan video serta audio",
            "Mendesain antarmuka pengguna",
            "Mengonversi dokumen ke format PDF"
        ],
        correct: 2,
        pembahasan: "Adobe Premiere adalah software editing video profesional yang digunakan untuk mengedit, memotong, dan menggabungkan elemen multimedia."
    },
    {
        q: "Setelah seluruh proses produksi dan penyempurnaan selesai, penting untuk memastikan bahwa produk multimedia telah sesuai dengan tujuan pembelajaran, kebutuhan pengguna, dan standar kualitas yang ditetapkan. Proses ini dilakukan dalam tahap evaluasi hasil akhir. Oleh karena itu, tujuan evaluasi hasil akhir adalah...",
        a: [
            "Membuat storyboard tambahan",
            "Memastikan produk memenuhi kebutuhan pengguna dan tujuan pembuatannya",
            "Menambah metadata pada file",
            "Mempersiapkan proses produksi untuk proyek berikutnya",
            "Menentukan format file yang akan digunakan"
        ],
        correct: 1,
        pembahasan: "Evaluasi akhir memastikan bahwa produk multimedia sesuai dengan target dan tidak memiliki kesalahan sebelum didistribusikan."
    },
    {
        q: "Dalam konteks multimedia, teks tetap menjadi salah satu komponen dasar yang sangat penting karena mampu menyampaikan informasi secara langsung, ringkas, dan mudah dipahami. Meskipun multimedia mengandalkan elemen visual dan audio, teks tidak dapat ditinggalkan. Dengan demikian, fungsi utama teks dalam multimedia adalah...",
        a: [
            "Menyampaikan informasi dengan cara yang paling sederhana dan jelas",
            "Menambah efek suara dalam video",
            "Menghasilkan visual yang dinamis",
            "Mengurangi interaksi pengguna",
            "Mengatur format file audio"
        ],
        correct: 0,
        pembahasan: "Teks berperan sebagai penyampai informasi inti yang memperjelas maksud dari konten multimedia."
    }
];

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
