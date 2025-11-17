let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData =[
    {
        q: "Dalam pengembangan multimedia interaktif berbasis web, penerapan style atau gaya visual sangat penting untuk menciptakan konsistensi antarelemen. Style mencakup penggunaan warna, tipografi, icon, layout, serta ritme visual sehingga keseluruhan halaman tampak rapi dan mudah dipahami. Oleh karena itu, style dalam multimedia interaktif berfungsi untuk...",
        a: [
            "Membuat tampilan halaman berbeda-beda pada setiap bagian",
            "Menciptakan kesatuan visual yang konsisten sehingga pengalaman pengguna lebih nyaman",
            "Membatasi jumlah media yang digunakan",
            "Menghilangkan kebutuhan navigasi dalam halaman",
            "Menonaktifkan elemen interaktif"
        ],
        correct: 1,
        pembahasan: "Style digunakan untuk menjaga keseragaman tampilan agar pengguna tidak merasa bingung saat berpindah antarhalaman."
    },
    {
        q: "Tipografi merupakan elemen penting dalam style desain web, mencakup pemilihan font, ukuran huruf, jarak antarhuruf, dan keterbacaan. Tipografi yang buruk dapat menyebabkan pengguna kesulitan memahami informasi. Oleh karena itu, fungsi utama tipografi dalam multimedia interaktif adalah...",
        a: [
            "Menambah ukuran file halaman",
            "Meningkatkan keterbacaan dan kenyamanan visual dalam penyampaian informasi",
            "Menghapus seluruh elemen gambar",
            "Menggantikan fungsi navigasi",
            "Menambah animasi pada halaman"
        ],
        correct: 1,
        pembahasan: "Tipografi yang jelas memastikan pengguna dapat membaca dan memahami konten dengan mudah."
    },
    {
        q: "Penggunaan warna pada multimedia interaktif memiliki pengaruh besar terhadap kenyamanan pengguna. Warna yang kontras dapat meningkatkan keterbacaan, sedangkan warna yang terlalu cerah dapat membuat mata lelah. Berdasarkan perannya, warna dalam style web digunakan untuk...",
        a: [
            "Menurunkan kualitas elemen visual",
            "Menambah kejelasan, estetika, dan hierarki visual pada halaman",
            "Menghapus elemen teks",
            "Menonaktifkan segala elemen interaktif",
            "Menciptakan tampilan acak tanpa aturan"
        ],
        correct: 1,
        pembahasan: "Warna membantu memberikan fokus, kejelasan, dan estetika sehingga pengalaman pengguna meningkat."
    },
    {
        q: "Layout atau tata letak adalah cara menempatkan elemen-elemen seperti teks, gambar, audio, dan navigasi secara teratur. Layout yang baik memandu mata pengguna mengikuti alur informasi dengan mudah. Oleh karena itu, layout digunakan untuk...",
        a: [
            "Menyembunyikan elemen penting dari pengguna",
            "Mengatur penempatan elemen agar mudah dipahami dan diikuti",
            "Mengurangi keterbacaan halaman",
            "Menambah jumlah animasi pada halaman",
            "Mengatur server secara otomatis"
        ],
        correct: 1,
        pembahasan: "Layout yang tepat membantu pengguna menemukan informasi sesuai urutan dan mempermudah navigasi."
    },
    {
        q: "Ikon sering digunakan dalam aplikasi multimedia interaktif untuk menggambarkan fungsi tertentu tanpa teks. Ikon yang baik harus intuitif dan mudah dipahami. Maka ikon digunakan untuk...",
        a: [
            "Mengganti seluruh teks",
            "Memberikan visualisasi fungsi tertentu agar lebih cepat dikenali",
            "Memperbesar ukuran aplikasi",
            "Menyembunyikan navigasi",
            "Menghapus fitur interaktif"
        ],
        correct: 1,
        pembahasan: "Ikon menciptakan komunikasi visual yang cepat dan efektif mengenai fungsi suatu tombol atau menu."
    },
    {
        q: "Style guide adalah dokumen yang berisi aturan terkait warna, tipografi, ikon, dan layout yang digunakan pada proyek multimedia. Style guide diperlukan untuk menjaga konsistensi desain ketika dikerjakan oleh banyak orang. Maka style guide berfungsi untuk...",
        a: [
            "Membuat desain berubah-ubah di setiap halaman",
            "Menjaga konsistensi visual dan aturan desain pada seluruh bagian aplikasi",
            "Menghapus seluruh elemen interaktif",
            "Mengatur server secara otomatis",
            "Mengganti format media"
        ],
        correct: 1,
        pembahasan: "Dengan style guide, semua desainer mengikuti aturan yang sama sehingga tampilan tetap konsisten."
    },
    {
        q: "Evaluasi usability dilakukan untuk menilai apakah sebuah aplikasi mudah digunakan, dipahami, dan bernavigasi. Evaluasi ini penting untuk mengidentifikasi hambatan pengalaman pengguna. Maka tujuan utama usability evaluation adalah...",
        a: [
            "Menghapus fitur yang tidak diinginkan",
            "Memastikan aplikasi mudah dipahami dan digunakan oleh pengguna",
            "Mengurangi kualitas visual",
            "Mengubah seluruh elemen media menjadi teks",
            "Menghilangkan navigasi"
        ],
        correct: 1,
        pembahasan: "Usability memastikan pengalaman pengguna optimal dan tidak membingungkan."
    },
    {
        q: "Heuristic Evaluation adalah metode evaluasi antarmuka yang dilakukan oleh pakar untuk menilai apakah aplikasi memenuhi prinsip-prinsip usability. Evaluasi ini tidak membutuhkan pengguna langsung. Berdasarkan konsepnya, heuristic evaluation dilakukan untuk...",
        a: [
            "Menghapus semua media dalam aplikasi",
            "Menilai antarmuka berdasarkan prinsip-prinsip usability oleh para ahli",
            "Menjalankan animasi otomatis",
            "Mengurangi ukuran file halaman",
            "Menonaktifkan seluruh fitur interaktif"
        ],
        correct: 1,
        pembahasan: "Heuristic digunakan untuk menemukan masalah usability secara cepat sebelum diuji oleh pengguna."
    },
    {
        q: "Salah satu indikator kualitas desain adalah konsistensi antarhalaman. Jika gaya visual berubah-ubah tanpa aturan, pengguna akan merasa bingung. Maka konsistensi style diperlukan untuk...",
        a: [
            "Mengubah tema halaman setiap menit",
            "Membuat tampilan antarhalaman tetap seragam sehingga memudahkan adaptasi pengguna",
            "Menghilangkan fungsi interaktif",
            "Mengurangi ukuran teks",
            "Memperbesar seluruh media"
        ],
        correct: 1,
        pembahasan: "Konsistensi visual menjaga stabilitas pengalaman sehingga pengguna tidak perlu mempelajari ulang tampilan."
    },
    {
        q: "Evaluasi multimedia harus memperhatikan efektivitas penyampaian pesan. Jika sebuah aplikasi memiliki style yang bagus tetapi tidak menyampaikan informasi dengan jelas, maka tujuan multimedia tidak tercapai. Maka evaluasi efektivitas dilakukan untuk...",
        a: [
            "Menambah elemen visual yang berlebihan",
            "Mengukur apakah informasi tersampaikan dengan benar dan mudah dipahami",
            "Mengubah semua elemen menjadi animasi",
            "Menurunkan kualitas media",
            "Menghapus teks dari halaman"
        ],
        correct: 1,
        pembahasan: "Efektivitas multimedia memastikan pesan utama tersampaikan secara optimal."
    },
    {
    q: "Dalam multimedia interaktif berbasis web, salah satu aspek penting dalam style adalah hierarki visual yang membantu pengguna mengetahui informasi mana yang paling penting. Hierarki visual dapat dibentuk melalui ukuran teks, warna, kontras, jarak, hingga posisi elemen. Oleh karena itu, hierarki visual digunakan untuk...",
    a: [
        "Menyembunyikan elemen penting pada halaman",
        "Menentukan urutan perhatian pengguna agar informasi mudah dipahami",
        "Menghilangkan fungsi navigasi",
        "Mengubah semua elemen menjadi animasi",
        "Menurunkan keterbacaan konten"
    ],
    correct: 1,
    pembahasan: "Hierarki visual memandu mata pengguna sehingga mereka memahami informasi dengan lebih cepat dan akurat."
   },
    {
        q: "White space atau ruang kosong adalah bagian penting dalam style desain web. White space bukan area yang terbuang, melainkan elemen desain yang berguna untuk memberi ruang antar objek sehingga tampilan lebih rapi dan mudah dibaca. Maka penggunaan white space diperlukan untuk...",
        a: [
            "Menghilangkan semua elemen visual pada halaman",
            "Memberi ruang antar elemen agar tampilan tidak sesak dan lebih nyaman dilihat",
            "Mengecilkan ukuran seluruh elemen",
            "Menonaktifkan fitur interaktif",
            "Mengurangi tingkat responsivitas web"
        ],
        correct: 1,
        pembahasan: "White space membantu fokus visual, meningkatkan estetika, dan membuat konten lebih rapi."
    },
    {
        q: "Responsivitas adalah kemampuan tampilan web menyesuaikan ukuran layar perangkat seperti smartphone, tablet, dan desktop. Style responsif menggunakan grid, persentase, breakpoint, dan media query. Fungsi utama desain responsif dalam multimedia interaktif adalah...",
        a: [
            "Menampilkan konten dengan ukuran yang sama di semua perangkat",
            "Menyesuaikan tampilan agar tetap nyaman dilihat di berbagai ukuran layar",
            "Menghilangkan gambar pada perangkat kecil",
            "Mengunci layout agar tidak berubah",
            "Menambah ukuran file HTML"
        ],
        correct: 1,
        pembahasan: "Desain responsif memastikan pengalaman pengguna optimal di semua jenis perangkat."
    },
    {
        q: "Evaluasi navigasi dilakukan untuk mengetahui apakah pengguna dapat berpindah halaman dengan mudah. Navigasi yang buruk menyebabkan pengguna tersesat dan keluar dari aplikasi. Oleh karena itu, evaluasi navigasi dilakukan untuk...",
        a: [
            "Menghilangkan tombol navigasi",
            "Memastikan struktur navigasi jelas, mudah ditemukan, dan mudah digunakan",
            "Menambah jumlah halaman menjadi lebih banyak",
            "Mengubah seluruh konten menjadi video",
            "Menghapus menu utama"
        ],
        correct: 1,
        pembahasan: "Navigasi yang baik menjadi fondasi pengalaman pengguna yang efektif."
    },
    {
        q: "Animasi dalam style web digunakan untuk memperhalus perpindahan antar elemen, menambah kesan interaktif, dan memberikan feedback. Namun, animasi juga harus dipakai secara bijak agar tidak mengganggu. Maka animasi dalam multimedia interaktif berfungsi untuk...",
        a: [
            "Mengalihkan perhatian dari informasi utama",
            "Memberikan transisi dan feedback yang lebih halus dalam interaksi pengguna",
            "Memperlambat seluruh proses loading",
            "Menghilangkan fungsi navigasi",
            "Mengganti seluruh gambar menjadi animasi"
        ],
        correct: 1,
        pembahasan: "Animasi membantu memperjelas interaksi tanpa mengganggu fokus utama."
    },
    {
        q: "Kontras merupakan elemen visual dalam style yang membantu membedakan elemen penting dari yang kurang penting. Kontras dapat ditingkatkan melalui warna, ukuran, ketebalan font, dan bentuk. Oleh karena itu, kontras digunakan untuk...",
        a: [
            "Menyamakan semua elemen sehingga sulit dibedakan",
            "Mempertegas elemen penting agar mudah dilihat dan dipahami pengguna",
            "Menghilangkan hierarki visual",
            "Menambah jumlah teks berlebihan",
            "Membuat layout menjadi berantakan"
        ],
        correct: 1,
        pembahasan: "Kontras yang tepat membuat informasi penting mudah terlihat dan meningkatkan keterbacaan."
    },
    {
        q: "Salah satu aspek evaluasi multimedia adalah kinerja (performance), yakni kecepatan loading, ukuran file media, dan efisiensi pemanggilan data. Jika kinerja buruk, pengguna akan meninggalkan aplikasi. Evaluasi performance bertujuan untuk...",
        a: [
            "Membuat ukuran file sebesar mungkin",
            "Memastikan aplikasi berjalan cepat, ringan, dan efisien",
            "Menambah elemen visual sebanyak mungkin",
            "Menghapus semua elemen interaktif",
            "Menurunkan kualitas navigasi"
        ],
        correct: 1,
        pembahasan: "Kinerja mempengaruhi kenyamanan pengguna secara langsung sehingga perlu dioptimalkan."
    },
    {
        q: "User testing atau pengujian dengan pengguna dilakukan untuk melihat bagaimana pengguna nyata berinteraksi dengan aplikasi. Hasil user testing dapat menunjukkan masalah yang tidak terlihat oleh pengembang. User testing bertujuan untuk...",
        a: [
            "Menghapus fitur penting",
            "Mengetahui bagaimana pengguna berinteraksi dan memahami kesulitan mereka",
            "Mengurangi aksesibilitas",
            "Mengganti seluruh konten",
            "Menambah jumlah halaman"
        ],
        correct: 1,
        pembahasan: "User testing memberikan data nyata sehingga pengembang dapat memperbaiki pengalaman pengguna."
    },
    {
        q: "Aksesibilitas (accessibility) adalah aspek penting dalam evaluasi multimedia agar aplikasi dapat digunakan oleh semua orang, termasuk penyandang disabilitas. Contohnya penggunaan teks alternatif (alt text), kontras yang cukup, dan navigasi keyboard. Maka evaluasi aksesibilitas diperlukan untuk...",
        a: [
            "Menyulitkan pengguna berkebutuhan khusus",
            "Memastikan aplikasi dapat diakses oleh berbagai kondisi pengguna",
            "Menghapus seluruh media visual",
            "Memperkecil ukuran teks hingga sulit dibaca",
            "Mempersempit fungsi navigasi"
        ],
        correct: 1,
        pembahasan: "Aksesibilitas membuat aplikasi lebih universal dan inklusif bagi seluruh pengguna."
    },
    {
        q: "Consistency check dilakukan untuk memastikan bahwa setiap halaman memiliki style yang tidak berubah-ubah secara drastis. Ketidakkonsistenan dapat membuat pengguna bingung dan menurunkan kredibilitas aplikasi. Consistency check bertujuan untuk...",
        a: [
            "Membuat setiap halaman memiliki gaya berbeda tanpa aturan",
            "Memastikan seluruh halaman memiliki gaya visual yang seragam",
            "Menghilangkan seluruh elemen interaktif",
            "Menambah animasi secara acak",
            "Mengurangi kualitas konten"
        ],
        correct: 1,
        pembahasan: "Konsistensi memberikan pengalaman yang stabil sehingga pengguna merasa lebih percaya dan nyaman."
    },
    {
    q: "Wireframe adalah sketsa sederhana dari halaman web yang menunjukkan struktur dasar seperti posisi teks, gambar, tombol, serta navigasi tanpa detail visual. Dalam proses pengembangan multimedia interaktif, wireframe digunakan pada tahap awal desain untuk memastikan struktur halaman sudah sesuai sebelum diberi warna dan style. Maka fungsi utama wireframe adalah...",
    a: [
        "Membuat versi akhir halaman web lengkap dengan animasi",
        "Menyediakan gambaran awal struktur halaman sebelum diberikan desain visual",
        "Menghapus seluruh elemen navigasi",
        "Mengubah seluruh teks menjadi gambar",
        "Menentukan warna akhir halaman"
    ],
    correct: 1,
    pembahasan: "Wireframe membantu tim memahami tata letak dan fungsi halaman sebelum masuk ke style dan visualisasi."
   },
    {
        q: "Prototype adalah versi percobaan dari aplikasi yang biasanya sudah dapat diuji oleh pengguna. Prototype sering digunakan untuk menguji alur navigasi, tampilan, serta interaksi sebelum aplikasi dikembangkan sepenuhnya. Dengan demikian, tujuan penggunaan prototype dalam evaluasi adalah...",
        a: [
            "Menampilkan seluruh fitur final aplikasi",
            "Menguji interaksi dan alur kerja aplikasi sebelum pengembangan akhir",
            "Menghilangkan bagian penting dari aplikasi",
            "Menghapus evaluasi usability",
            "Mengunci warna dan style secara permanen"
        ],
        correct: 1,
        pembahasan: "Prototype membantu mengidentifikasi masalah lebih awal sehingga pengembangan lebih efisien."
    },
    {
        q: "Gesture-based interaction seperti swipe, drag, pinch, dan tap sangat penting pada aplikasi multimedia berbasis perangkat mobile. Evaluasi gesture dilakukan untuk memastikan pengguna dapat melakukan interaksi secara alami dan intuitif. Oleh karena itu, evaluasi gesture diperlukan untuk...",
        a: [
            "Menghilangkan fungsi layar sentuh",
            "Menilai apakah interaksi sentuhan dapat dilakukan dengan mudah oleh pengguna",
            "Mengurangi ukuran layar perangkat",
            "Menonaktifkan fitur multimedia",
            "Menghapus navigasi utama"
        ],
        correct: 1,
        pembahasan: "Gesture yang jelas dan responsif meningkatkan kenyamanan penggunaan pada perangkat mobile."
    },
    {
        q: "Visual feedback adalah respon visual yang muncul ketika pengguna melakukan sebuah aksi, seperti tombol berubah warna saat diklik atau icon bergetar saat terjadi kesalahan. Feedback seperti ini sangat penting dalam multimedia interaktif. Fungsi utama visual feedback adalah...",
        a: [
            "Membuat pengguna menunggu lebih lama",
            "Memberikan tanda bahwa sistem merespon aksi pengguna",
            "Menghapus fitur tombol",
            "Menambah error pada sistem",
            "Menurunkan kualitas antarmuka"
        ],
        correct: 1,
        pembahasan: "Feedback memastikan pengguna memahami bahwa aksinya terdeteksi oleh sistem."
    },
    {
        q: "Dalam evaluasi aplikasi berbasis web, readability atau keterbacaan adalah aspek penting untuk memastikan teks mudah dipahami. Faktor seperti ukuran font, jenis font, kontras warna, dan jarak antarbaris memengaruhi readability. Maka tujuan evaluasi readability adalah...",
        a: [
            "Meningkatkan kompleksitas tampilan",
            "Memastikan teks mudah dibaca dan tidak membuat pengguna lelah",
            "Menghilangkan seluruh teks pada halaman",
            "Mengecilkan font hingga tidak terbaca",
            "Mengurangi kontras sampai halaman sulit dibaca"
        ],
        correct: 1,
        pembahasan: "Readability penting agar informasi dapat dipahami dengan cepat tanpa membebani mata."
    },
    {
        q: "Testing kompatibilitas dilakukan untuk memastikan aplikasi dapat berjalan dengan baik pada berbagai browser seperti Chrome, Firefox, Edge, dan Safari. Setiap browser dapat menampilkan style secara berbeda. Dengan demikian, tujuan compatibility testing adalah...",
        a: [
            "Mengharuskan pengguna memakai satu browser tertentu",
            "Memastikan tampilan dan fungsi aplikasi bekerja konsisten di berbagai browser",
            "Menghapus responsivitas halaman",
            "Mengecilkan semua elemen pada halaman",
            "Mengubah semua media ke format tunggal"
        ],
        correct: 1,
        pembahasan: "Compatibility testing memastikan aplikasi tetap berfungsi dengan baik tanpa batasan browser."
    },
    {
        q: "Evaluasi interaksi pengguna juga mencakup penilaian tentang seberapa cepat pengguna dapat menyelesaikan tugas tertentu dalam aplikasi. Jika waktu yang dibutuhkan terlalu lama, maka alurnya perlu diperbaiki. Maka pengukuran task completion time dilakukan untuk...",
        a: [
            "Memperlambat performa aplikasi",
            "Mengetahui seberapa efisien pengguna menyelesaikan tugas dalam aplikasi",
            "Menghapus navigasi",
            "Menambah halaman yang tidak relevan",
            "Mengurangi kualitas media"
        ],
        correct: 1,
        pembahasan: "Task completion time memberi gambaran apakah alur interaksi sudah sederhana dan efektif."
    },
    {
        q: "User satisfaction merupakan salah satu faktor evaluasi yang menilai tingkat kepuasan pengguna terhadap tampilan, navigasi, respons sistem, dan kenyamanan penggunaan. Evaluasi kepuasan pengguna bertujuan untuk...",
        a: [
            "Menghilangkan seluruh elemen visual",
            "Mengukur kenyamanan pengguna dan persepsi mereka terhadap aplikasi",
            "Menonaktifkan fungsi multimedia",
            "Menggunakan style yang berbeda di setiap halaman",
            "Menghapus tombol aksi"
        ],
        correct: 1,
        pembahasan: "Kepuasan pengguna dapat menentukan keberhasilan aplikasi dalam jangka panjang."
    },
    {
        q: "Dalam evaluasi style multimedia, estetika visual dinilai untuk mengetahui apakah tampilan aplikasi terlihat profesional, rapi, dan menarik. Jika style buruk, pengguna dapat kehilangan minat meskipun fungsi aplikasi berjalan baik. Maka evaluasi estetika bertujuan untuk...",
        a: [
            "Menghilangkan gambar agar halaman lebih ringan",
            "Menilai keindahan dan kerapian tampilan aplikasi",
            "Menghapus semua elemen navigasi",
            "Mengubah seluruh teks menjadi gambar",
            "Memperbesar ukuran file"
        ],
        correct: 1,
        pembahasan: "Estetika yang baik menarik perhatian pengguna dan meningkatkan pengalaman visual."
    },
    {
        q: "Error prevention adalah prinsip usability yang bertujuan mencegah pengguna melakukan kesalahan. Contohnya adalah validasi input, peringatan sebelum menghapus data, dan penjelasan sebelum menjalankan aksi berisiko. Maka tujuan error prevention adalah...",
        a: [
            "Meningkatkan kesalahan pengguna",
            "Mencegah pengguna melakukan tindakan yang salah atau berbahaya",
            "Menghilangkan pesan peringatan",
            "Membuat halaman sulit digunakan",
            "Mengurangi fungsi tombol"
        ],
        correct: 1,
        pembahasan: "Error prevention membantu pengguna terhindar dari kesalahan yang tidak disengaja."
    }, 
    {
    q: "Dalam evaluasi multimedia interaktif, konsistensi penggunaan ikon sangat penting. Ikon yang berbeda untuk fungsi yang sama dapat membuat pengguna bingung. Misalnya, ikon 'save' yang berbeda-beda di setiap halaman akan menurunkan kejelasan fungsi aplikasi. Oleh karena itu, konsistensi ikon diperlukan untuk...",
    a: [
        "Membuat pengguna menebak fungsi ikon secara acak",
        "Memberikan keseragaman visual sehingga pengguna dapat memahami fungsi dengan cepat",
        "Menghilangkan tombol navigasi",
        "Mengubah ikon menjadi gambar dekoratif",
        "Mengurangi aksesibilitas aplikasi"
    ],
    correct: 1,
    pembahasan: "Ikon yang konsisten mempermudah pengguna mengenali fungsi tanpa perlu membaca teks."
    },
    {
        q: "Loading time atau waktu muat halaman menjadi salah satu komponen evaluasi kinerja (performance). Jika sebuah halaman memuat dalam waktu lebih dari 3–5 detik, banyak pengguna cenderung meninggalkannya. Oleh karena itu, optimasi loading time bertujuan untuk...",
        a: [
            "Memperlambat waktu muat agar pengguna menunggu lebih lama",
            "Memastikan halaman terbuka dengan cepat untuk meningkatkan kenyamanan pengguna",
            "Menghapus semua elemen penting",
            "Menambah ukuran file media secara berlebihan",
            "Menghilangkan animasi yang diperlukan"
        ],
        correct: 1,
        pembahasan: "Loading time yang cepat meningkatkan user retention dan pengalaman penggunaan."
    },
    {
        q: "Dalam evaluasi aksesibilitas, penggunaan ALT text pada gambar sangat penting terutama bagi pengguna tunanetra yang menggunakan screen reader. ALT text berfungsi untuk menjelaskan isi gambar secara verbal. Maka ALT text digunakan untuk...",
        a: [
            "Mengganti seluruh gambar dengan teks",
            "Memberikan deskripsi gambar agar dapat dibaca oleh screen reader",
            "Menghapus fungsi gambar pada halaman",
            "Mengurangi ukuran file",
            "Mengubah warna gambar secara otomatis"
        ],
        correct: 1,
        pembahasan: "ALT text meningkatkan aksesibilitas dengan memberikan deskripsi bagi pengguna berkebutuhan khusus."
    },
    {
        q: "Breadcrumb navigation merupakan komponen navigasi yang menunjukkan posisi pengguna dalam struktur halaman, misalnya Home > Produk > Detail Produk. Breadcrumb sangat membantu terutama pada aplikasi dengan banyak halaman. Fungsi breadcrumb dalam evaluasi navigasi adalah...",
        a: [
            "Membingungkan pengguna dengan jalur yang panjang",
            "Memberikan informasi posisi sehingga pengguna mudah kembali ke halaman sebelumnya",
            "Menghilangkan menu utama",
            "Menonaktifkan navigasi tingkat atas",
            "Mengurangi responsivitas halaman"
        ],
        correct: 1,
        pembahasan: "Breadcrumb membantu pengguna memahami struktur dan lokasi mereka di dalam aplikasi."
    },
    {
        q: "Error message atau pesan kesalahan harus dirancang dengan jelas dan informatif. Pesan yang tidak jelas seperti 'Error 004' tidak membantu pengguna memahami apa yang harus dilakukan. Oleh karena itu, error message yang baik harus...",
        a: [
            "Menggunakan kode acak yang sulit dibaca",
            "Memberikan informasi yang jelas mengenai kesalahan dan cara mengatasinya",
            "Menghapus semua elemen input",
            "Mengurangi informasi penting",
            "Menghindari penggunaan bahasa yang sederhana"
        ],
        correct: 1,
        pembahasan: "Pesan kesalahan yang jelas membantu pengguna segera memperbaiki tindakan."
    },
    {
        q: "Call to Action (CTA) seperti 'Daftar Sekarang', 'Mulai', atau 'Kirim' harus terlihat jelas dalam tampilan web karena memiliki fungsi penting dalam mengarahkan pengguna melakukan aksi tertentu. Evaluasi CTA diperlukan untuk mengetahui apakah tombol tersebut...",
        a: [
            "Tersusun dalam warna yang sama dengan latar belakang",
            "Terlihat jelas, mudah diakses, dan memotivasi pengguna untuk melakukan tindakan",
            "Menonaktifkan fungsi interaktif",
            "Mengurangi tingkat konversi",
            "Menghapus bagian penting dari halaman"
        ],
        correct: 1,
        pembahasan: "CTA yang baik meningkatkan interaksi dan konversi pengguna."
    },
    {
        q: "Salah satu aspek penting evaluasi style adalah alignment, yaitu keselarasan tata letak mulai dari teks, gambar, hingga tombol. Alignment yang buruk membuat tampilan terlihat berantakan. Maka evaluasi alignment bertujuan untuk...",
        a: [
            "Membuat halaman terlihat acak",
            "Memastikan semua elemen tersusun rapi dan mudah dibaca",
            "Menghapus struktur layout",
            "Memperkecil seluruh konten",
            "Menambah jarak antarhalaman"
        ],
        correct: 1,
        pembahasan: "Alignment yang baik menciptakan tampilan yang profesional dan memudahkan proses membaca."
    },
    {
        q: "Skala prioritas dalam style web berkaitan dengan menentukan elemen mana yang harus lebih menonjol dibandingkan yang lain, misalnya headline lebih besar dari teks biasa. Evaluasi skala prioritas diperlukan untuk...",
        a: [
            "Menjadikan seluruh elemen tampil sama besar",
            "Memberikan penekanan visual pada elemen yang lebih penting",
            "Menghapus hierarki visual",
            "Menghilangkan fungsi navigasi",
            "Menambah elemen yang tidak relevan"
        ],
        correct: 1,
        pembahasan: "Skala prioritas membuat informasi utama langsung terlihat dan mudah dipahami."
    },
    {
        q: "Mobile-first design adalah pendekatan desain yang memulai pembuatan style tampilan dari ukuran layar kecil terlebih dahulu sebelum diperluas ke layar besar. Pendekatan ini sangat efektif mengoptimalkan responsivitas. Maka mobile-first design digunakan untuk...",
        a: [
            "Mengabaikan pengguna smartphone",
            "Membuat desain yang lebih optimal pada perangkat mobile dan diperluas ke desktop",
            "Mengurangi fungsi pada perangkat mobile",
            "Memaksa tampilan desktop untuk perangkat kecil",
            "Membuat tampilan tidak responsif"
        ],
        correct: 1,
        pembahasan: "Mobile-first memastikan performa dan kenyamanan terbaik di perangkat yang paling banyak digunakan."
    },
    {
        q: "Dalam evaluasi keseluruhan, aspek user flow atau aliran pengguna sangat penting. User flow menggambarkan jalur yang dilalui pengguna dari satu halaman ke halaman lainnya untuk menyelesaikan tujuan tertentu, seperti mendaftar atau membeli produk. Evaluasi user flow bertujuan untuk...",
        a: [
            "Menambah langkah tidak perlu agar proses semakin panjang",
            "Memastikan jalur yang dilalui pengguna sederhana, logis, dan mudah diikuti",
            "Menghapus seluruh proses navigasi",
            "Mengurangi tingkat konversi",
            "Menambah kesalahan pengguna"
        ],
        correct: 1,
        pembahasan: "User flow yang baik membuat proses terasa natural dan tidak membingungkan sehingga pengguna dapat menyelesaikan tujuan dengan mudah."
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
