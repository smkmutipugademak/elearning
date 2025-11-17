let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

var quizData = quizData || [];

const quizData =[
    {
        q: "Dalam proses produksi multimedia, tahap pra-produksi merupakan fase yang sangat penting karena menjadi dasar dari keseluruhan proyek. Pada tahap ini dilakukan berbagai kegiatan seperti analisis kebutuhan, perumusan konsep, penentuan tujuan, serta penyusunan storyboard. Maka tujuan utama pra-produksi adalah...",
        a: [
            "Melakukan editing akhir pada video dan audio",
            "Menyusun rencana dan konsep dasar sebelum proses produksi dimulai",
            "Menggabungkan seluruh media dalam satu aplikasi",
            "Melakukan rendering akhir proyek",
            "Menjalankan uji coba terhadap pengguna"
        ],
        correct: 1,
        pembahasan: "Pra-produksi memastikan arah proyek jelas sehingga meminimalisir kesalahan saat produksi berlangsung."
    },
    {
        q: "Analisis kebutuhan adalah langkah awal dalam perencanaan produksi multimedia. Pada tahap ini, produsen mengidentifikasi kebutuhan pengguna, target audiens, tujuan aplikasi, serta media apa saja yang akan digunakan. Analisis kebutuhan dilakukan agar...",
        a: [
            "Proyek dapat berjalan tanpa perencanaan",
            "Pengembang memahami kebutuhan pengguna sebelum membuat aplikasi",
            "Proses editing menjadi lebih rumit",
            "Hasil akhir tidak memerlukan evaluasi",
            "Seluruh proses dapat dilakukan tanpa dokumentasi"
        ],
        correct: 1,
        pembahasan: "Dengan analisis kebutuhan, produk multimedia menjadi lebih tepat guna dan sesuai tujuan."
    },
    {
        q: "Dalam alur produksi multimedia, storyboard digunakan untuk menggambarkan alur visual secara runtut. Storyboard memuat sketsa tampilan, urutan adegan, narasi, hingga interaksi yang akan terjadi. Fungsi storyboard adalah...",
        a: [
            "Menentukan kualitas akhir video",
            "Memberikan panduan visual dan alur cerita sebelum produksi dimulai",
            "Meningkatkan ukuran file proyek",
            "Mengubah seluruh media menjadi animasi",
            "Menghapus proses pra-produksi"
        ],
        correct: 1,
        pembahasan: "Storyboard membantu seluruh tim memahami alur sebelum tahap produksi."
    },
    {
        q: "Tahap produksi merupakan fase utama di mana seluruh aset multimedia dibuat, seperti gambar, animasi, video, audio, dan elemen interaktif. Pada tahap ini, kru bekerja berdasarkan pedoman storyboard dan naskah. Maka tujuan produksi adalah...",
        a: [
            "Membuat konsep awal proyek",
            "Mewujudkan seluruh aset dan konten sesuai rencana pra-produksi",
            "Melakukan pengujian akhir aplikasi",
            "Menghapus aset yang tidak dibutuhkan",
            "Mengatur revisi dari pengguna"
        ],
        correct: 1,
        pembahasan: "Produksi adalah tahap realisasi konten sebelum masuk ke proses penggabungan media."
    },
    {
        q: "Naskah (script) dalam produksi multimedia berisi dialog, narasi, instruksi interaksi, serta informasi penting lain. Naskah memastikan semua elemen mengikuti alur yang benar. Maka naskah digunakan untuk...",
        a: [
            "Menghilangkan struktur cerita",
            "Mengatur jalannya cerita, narasi, dan interaksi dalam aplikasi",
            "Menghapus kebutuhan storyboard",
            "Mengurangi jumlah media",
            "Menetapkan ukuran file akhir"
        ],
        correct: 1,
        pembahasan: "Script menjadi panduan utama agar alur multimedia konsisten dan terarah."
    },
    {
        q: "Dalam proses produksi multimedia, kualitas aset sangat berpengaruh pada hasil akhir. Aset seperti gambar, video, dan audio harus dibuat dengan resolusi yang sesuai kebutuhan. Kualitas aset berpengaruh terhadap...",
        a: [
            "Kinerja aplikasi dan estetika tampilan",
            "Jumlah halaman pada aplikasi",
            "Fungsi navigasi utama",
            "Struktur menu",
            "Penggunaan warna latar"
        ],
        correct: 0,
        pembahasan: "Aset yang terlalu besar membuat aplikasi lambat, sedangkan aset yang terlalu kecil menurunkan kualitas visual."
    },
    {
        q: "Tahap pasca produksi mencakup proses editing, penggabungan media, penyempurnaan audio, rendering, dan finalisasi. Tahap ini bertujuan memastikan semua aset menyatu dengan baik. Oleh karena itu, pasca produksi berfungsi untuk...",
        a: [
            "Menyusun konsep awal aplikasi",
            "Mengedit dan menggabungkan seluruh aset menjadi produk multimedia final",
            "Menentukan kebutuhan pengguna",
            "Membuat storyboard baru",
            "Mengubah tujuan proyek"
        ],
        correct: 1,
        pembahasan: "Pasca produksi adalah tahap di mana produk multimedia menjadi versi lengkap."
    },
    {
        q: "Rendering adalah proses mengubah dan menyatukan seluruh media menjadi satu keluaran final seperti video, aplikasi, atau animasi. Proses rendering membutuhkan waktu dan perangkat yang memadai. Maka rendering digunakan untuk...",
        a: [
            "Menjalankan aplikasi tanpa penggabungan media",
            "Menghasilkan file akhir yang siap digunakan atau dipublikasikan",
            "Menghapus aset yang tidak dipakai",
            "Mengubah format teks menjadi gambar",
            "Mengubah aplikasi menjadi file audio"
        ],
        correct: 1,
        pembahasan: "Rendering adalah tahap akhir untuk menghasilkan output multimedia yang siap disebarkan."
    },
    {
        q: "Quality control dalam pasca produksi dilakukan untuk memastikan tidak ada kesalahan seperti audio tidak sinkron, gambar pecah, tombol tidak berfungsi, atau animasi patah-patah. QC dilakukan agar...",
        a: [
            "Kesalahan dibiarkan hingga pengguna memperbaikinya",
            "Produk multimedia terhindar dari error sebelum dirilis",
            "Aset tidak perlu direvisi",
            "Ukuran aplikasi menjadi lebih besar",
            "Storyboard tidak perlu diperiksa kembali"
        ],
        correct: 1,
        pembahasan: "Quality control memastikan pengguna tidak mengalami gangguan saat menggunakan aplikasi."
    },
    {
        q: "Setelah produk multimedia selesai, dilakukan tahap distribusi. Distribusi bisa dilakukan melalui website, platform video, aplikasi, atau media penyimpanan. Tahap distribusi penting untuk...",
        a: [
            "Menyembunyikan produk dari pengguna",
            "Menyampaikan produk multimedia kepada audiens target",
            "Menghapus file sumber",
            "Mengurangi kualitas produk",
            "Menonaktifkan elemen interaktif"
        ],
        correct: 1,
        pembahasan: "Distribusi adalah proses merilis produk agar dapat digunakan atau dinikmati oleh pengguna."
    }, 
    {
    q: "Dalam proses produksi multimedia, dokumen perencanaan atau project plan dibuat untuk merinci jadwal kerja, pembagian tugas, anggaran, perangkat yang dibutuhkan, serta estimasi waktu produksi. Dokumen ini sangat penting agar seluruh tim memiliki arah yang jelas. Dengan demikian, fungsi utama project plan adalah...",
    a: [
        "Menentukan warna dan style visual aplikasi",
        "Memberikan panduan lengkap mengenai jadwal dan pengaturan kerja tim",
        "Menghapus kebutuhan storyboard",
        "Membuat animasi secara otomatis",
        "Mengurangi durasi pasca produksi"
    ],
    correct: 1,
    pembahasan: "Project plan memberi struktur dan pedoman agar produksi multimedia berjalan terorganisir dan tepat waktu."
},
    {
        q: "Salah satu tugas penting pada tahap pra-produksi adalah membuat flowchart interaksi. Flowchart menggambarkan alur perpindahan halaman, fungsi tombol, dan logika interaksi. Flowchart diperlukan untuk...",
        a: [
            "Mengatur ukuran file aset",
            "Memvisualisasikan alur logika dan hubungan antarhalaman secara jelas",
            "Mengurangi kebutuhan produksi",
            "Menghapus tahapan editing",
            "Mengatur warna seluruh halaman"
        ],
        correct: 1,
        pembahasan: "Flowchart membantu pengembang memahami alur interaksi sebelum aplikasi diproduksi."
    },
    {
        q: "Pada tahap produksi, proses capturing adalah kegiatan merekam media seperti video, suara, atau gambar menggunakan kamera atau perangkat perekam. Capturing menjadi tahap penting karena kualitas media awal menentukan hasil editing. Maka tujuan capturing adalah...",
        a: [
            "Menghapus media yang tidak diperlukan",
            "Mengumpulkan bahan mentah berupa media yang akan diolah pada tahap selanjutnya",
            "Membuat storyboard baru",
            "Mengubah format audio menjadi teks",
            "Melakukan distribusi aplikasi"
        ],
        correct: 1,
        pembahasan: "Tanpa capturing yang baik, kualitas media dalam proyek tidak dapat maksimal."
    },
    {
        q: "Salah satu peran produser multimedia adalah mengawasi jalannya proyek dari awal hingga akhir. Produser memastikan setiap bagian bekerja sesuai rencana dan menyelesaikan kendala yang terjadi selama proses produksi. Maka peran produser dalam produksi multimedia adalah...",
        a: [
            "Mengatur coding seluruh aplikasi",
            "Mengawasi proses produksi dan memastikan proyek berjalan sesuai rencana",
            "Mengedit seluruh video secara pribadi",
            "Menghapus semua aset yang tidak diperlukan",
            "Menentukan resolusi gambar secara otomatis"
        ],
        correct: 1,
        pembahasan: "Produser berperan sebagai pengendali alur produksi agar tetap sesuai target dan kualitas."
    },
    {
        q: "Dalam pengembangan multimedia, graphic designer bertanggung jawab untuk membuat elemen visual seperti ilustrasi, layout, ikon, dan style halaman. Peran graphic designer sangat penting karena...",
        a: [
            "Mengatur alur interaksi pengguna",
            "Menghasilkan elemen visual yang menjadi tampilan utama aplikasi",
            "Membuat script untuk aplikasi",
            "Mengatur distribusi konten",
            "Menjalankan pengujian teknis"
        ],
        correct: 1,
        pembahasan: "Desainer grafis menciptakan visual yang menentukan estetika dan kenyamanan melihat aplikasi."
    },
    {
        q: "Audio editor dalam produksi multimedia bertugas mengolah suara seperti efek suara, narasi, dan musik agar terdengar jelas dan sesuai kebutuhan. Pengolahan audio penting karena...",
        a: [
            "Suara dapat dibiarkan apa adanya tanpa pengaturan",
            "Audio berpengaruh besar pada suasana dan pengalaman pengguna",
            "Audio tidak berpengaruh pada kualitas produk",
            "Mengurangi ukuran file video",
            "Menghapus kebutuhan editing"
        ],
        correct: 1,
        pembahasan: "Audio yang baik dapat meningkatkan suasana dan membuat aplikasi lebih imersif."
    },
    {
        q: "Video editor bertanggung jawab menggabungkan potongan video, memberi efek transisi, menyesuaikan warna, dan menyelaraskan audio. Dalam konteks produksi multimedia, tujuan utama editing video adalah...",
        a: [
            "Menghapus sebagian besar scene agar lebih pendek",
            "Menghasilkan video yang bersih, nyaman ditonton, dan sesuai alur cerita",
            "Mengubah format video menjadi gambar",
            "Menghilangkan kebutuhan storyboard",
            "Mengurangi kualitas visual"
        ],
        correct: 1,
        pembahasan: "Editing memastikan video memiliki alur yang rapi, estetis, dan profesional."
    },
    {
        q: "Interactive programmer bertugas membuat fungsi interaktif seperti tombol, navigasi, transisi, dan integrasi media. Programmer memastikan perangkat multimedia dapat digunakan sesuai konsep. Oleh karena itu, peran interactive programmer adalah...",
        a: [
            "Mengatur penjadwalan produksi",
            "Mewujudkan fungsi interaktif agar aplikasi dapat digunakan dengan baik",
            "Menghapus elemen navigasi",
            "Mendesain ikon dan ilustrasi",
            "Melakukan dubbing audio"
        ],
        correct: 1,
        pembahasan: "Programmer interaktif memastikan aplikasi berjalan secara teknis dan interaktif."
    },
    {
        q: "Saat proses produksi, sering kali tim perlu melakukan revisi untuk menyesuaikan hasil dengan storyboard atau kebutuhan pengguna. Revisi produksi diperlukan karena...",
        a: [
            "Kesalahan tidak pernah terjadi dalam produksi",
            "Penyesuaian perlu dilakukan agar hasil akhir sesuai konsep dan kualitas yang diinginkan",
            "Revisi selalu dilakukan tanpa alasan",
            "Revisi hanya dilakukan setelah distribusi",
            "Tidak ada perubahan yang boleh dilakukan setelah pra-produksi"
        ],
        correct: 1,
        pembahasan: "Revisi menjaga kualitas dan memastikan kesesuaian hasil dengan tujuan proyek."
    },
    {
        q: "Setelah aplikasi selesai dan melalui tahap quality control, produk multimedia akan diimplementasikan pada platform tertentu seperti website, aplikasi mobile, atau media presentasi. Tahap implementasi bertujuan untuk...",
        a: [
            "Menghapus fitur yang sudah dibuat",
            "Menempatkan produk multimedia pada platform yang akan digunakan oleh pengguna",
            "Mengubah aplikasi menjadi draft konsep",
            "Menghapus seluruh aset media",
            "Menurunkan kualitas hasil akhir"
        ],
        correct: 1,
        pembahasan: "Implementasi memastikan produk siap digunakan dan dapat diakses oleh audiens target."
    },
    {
    q: "Dalam alur proses produksi multimedia, salah satu dokumen penting adalah spesifikasi teknis (technical specification). Dokumen ini berisi detail teknis seperti format file, resolusi gambar, bitrate audio, ukuran video, hingga software yang digunakan. Spesifikasi teknis dibuat agar seluruh tim mengikuti standar yang sama. Oleh karena itu, tujuan utama dokumen spesifikasi teknis adalah...",
    a: [
        "Menentukan tema warna aplikasi",
        "Menjamin semua aset multimedia dibuat dengan standar teknis yang konsisten",
        "Menghapus kebutuhan editing",
        "Menentukan storyboard secara visual",
        "Menonaktifkan fitur interaktif"
    ],
    correct: 1,
    pembahasan: "Spesifikasi teknis menjaga kualitas dan kompatibilitas semua media di tahap produksi dan pasca produksi."
},
    {
        q: "Timeline produksi atau jadwal pengerjaan adalah bagian penting dari manajemen proyek multimedia. Timeline membantu tim mengetahui kapan tugas dimulai dan selesai. Tanpa timeline, proyek mudah terlambat. Maka fungsi timeline produksi adalah...",
        a: [
            "Menambah jumlah revisi",
            "Mengatur waktu pengerjaan agar proyek berjalan sesuai rencana",
            "Menghapus aset yang sudah dibuat",
            "Menghasilkan otomatisasi editing",
            "Mengurangi jumlah tim"
        ],
        correct: 1,
        pembahasan: "Dengan timeline, seluruh pekerjaan menjadi terstruktur dan risiko keterlambatan dapat diminimalisir."
    },
    {
        q: "Client briefing adalah pertemuan awal antara pengembang dan klien untuk membahas kebutuhan, tujuan, serta ekspektasi hasil produk multimedia. Briefing dilakukan agar...",
        a: [
            "Proyek berjalan tanpa pedoman",
            "Pengembang memahami keinginan klien secara jelas sebelum memulai proyek",
            "Pengembang membuat aplikasi tanpa konsep",
            "Editing dapat dilakukan lebih lama",
            "Media tidak perlu disesuaikan"
        ],
        correct: 1,
        pembahasan: "Briefing memberikan pemahaman awal yang sangat dibutuhkan sebelum pra-produksi dimulai."
    },
    {
        q: "User persona adalah representasi fiktif dari pengguna target yang berisi karakteristik, kebutuhan, kebiasaan, dan tujuan pengguna. User persona dibuat pada tahap pra-produksi untuk...",
        a: [
            "Menghapus data pengguna",
            "Membantu pengembang memahami pengguna yang akan memakai aplikasi",
            "Menghilangkan riset pasar",
            "Menentukan format file akhir",
            "Mengurangi jumlah halaman"
        ],
        correct: 1,
        pembahasan: "User persona membantu tim membuat keputusan desain yang lebih tepat dan terarah."
    },
    {
        q: "Scope of work (SOW) adalah dokumen yang berisi rincian pekerjaan, tanggung jawab tim, batasan proyek, serta target yang harus dicapai. SOW sangat penting karena...",
        a: [
            "Membuat jadwal menjadi lebih panjang",
            "Memberikan batasan dan ruang lingkup proyek agar tidak melebar dari tujuan awal",
            "Menghapus tugas anggota tim",
            "Mengurangi kebutuhan dokumentasi",
            "Menambah biaya produksi secara otomatis"
        ],
        correct: 1,
        pembahasan: "SOW mencegah proyek mengalami scope creep atau perubahan berlebihan di luar rencana."
    },
    {
        q: "Risk assessment atau analisis risiko dilakukan untuk mengidentifikasi potensi hambatan seperti gangguan teknis, keterlambatan produksi, hingga kekurangan sumber daya. Analisis ini penting agar tim dapat mengantisipasi masalah sebelum terjadi. Oleh karena itu, risk assessment dilakukan untuk...",
        a: [
            "Membiarkan masalah terjadi tanpa persiapan",
            "Mengidentifikasi risiko dan menyiapkan solusi cadangan untuk mengurangi dampak masalah",
            "Menghapus kebutuhan revisi",
            "Mengganti seluruh tim produksi",
            "Mengurangi kualitas project plan"
        ],
        correct: 1,
        pembahasan: "Risk assessment membuat proses produksi lebih aman dan terkontrol."
    },
    {
        q: "Budgeting atau perencanaan anggaran adalah bagian krusial dalam produksi multimedia. Anggaran mencakup biaya perangkat, tenaga kerja, perangkat lunak, lokasi, dan distribusi. Budgeting dilakukan agar...",
        a: [
            "Pengeluaran tidak terkontrol",
            "Biaya yang digunakan sesuai rencana dan tidak melebihi batas",
            "Seluruh biaya dihapuskan",
            "Proyek dibuat tanpa rencana finansial",
            "Tim dapat mengabaikan keterbatasan produksi"
        ],
        correct: 1,
        pembahasan: "Anggaran yang jelas menjaga efisiensi produksi dan mencegah pemborosan."
    },
    {
        q: "Dalam produksi multimedia, prototyping sering dilakukan sebelum pembuatan versi final. Prototype adalah versi awal yang menampilkan fungsi dasar aplikasi. Prototyping bertujuan untuk...",
        a: [
            "Menghapus navigasi utama",
            "Menguji konsep dan interaksi sebelum aplikasi final dikembangkan",
            "Menentukan ukuran file akhir",
            "Menghilangkan tahap pra-produksi",
            "Mengganti seluruh elemen visual"
        ],
        correct: 1,
        pembahasan: "Prototyping menghemat waktu dan biaya karena kesalahan dapat diperbaiki sebelum aplikasi final dibuat."
    },
    {
        q: "Pada proses produksi multimedia, tim developer sering melakukan stand-up meeting atau pertemuan singkat harian. Tujuan stand-up meeting adalah untuk...",
        a: [
            "Menambah durasi rapat secara berjam-jam",
            "Memastikan setiap anggota memahami perkembangan proyek dan hambatan yang dihadapi",
            "Menghapus tugas anggota tim",
            "Mengganti tujuan proyek setiap hari",
            "Menonaktifkan proses produksi"
        ],
        correct: 1,
        pembahasan: "Stand-up meeting menjaga komunikasi tim tetap efektif selama proses produksi."
    },
    {
        q: "Setelah proyek selesai, dilakukan post-mortem analysis yaitu evaluasi terhadap keseluruhan proses produksi, mencakup apa yang berhasil, apa yang gagal, dan apa yang dapat diperbaiki di masa depan. Post-mortem dilakukan agar...",
        a: [
            "Kesalahan yang sama terulang kembali",
            "Tim memperoleh wawasan untuk meningkatkan kualitas produksi selanjutnya",
            "Seluruh dokumentasi dihapus",
            "Tim tidak melakukan perbaikan apapun",
            "Tujuan proyek diubah setelah selesai"
        ],
        correct: 1,
        pembahasan: "Post-mortem penting untuk memperbaiki metode kerja dan meningkatkan kualitas proyek berikutnya."
    },
    {
    q: "Dokumentasi produksi multimedia adalah proses mencatat seluruh tahapan, keputusan, perubahan, dan hasil yang terjadi selama pra-produksi, produksi, dan pasca-produksi. Dokumentasi ini penting untuk referensi di masa depan dan untuk memastikan tim memiliki catatan lengkap jika terjadi revisi atau evaluasi. Oleh karena itu, dokumentasi diperlukan untuk...",
    a: [
        "Menghapus riwayat proses kerja",
        "Menyediakan catatan lengkap yang dapat dijadikan referensi dalam evaluasi dan produksi berikutnya",
        "Mengurangi kebutuhan komunikasi tim",
        "Menambah ukuran aplikasi secara otomatis",
        "Menghapus kebutuhan perencanaan proyek"
    ],
    correct: 1,
    pembahasan: "Dokumentasi membuat proses produksi lebih transparan dan memudahkan evaluasi."
},
    {
        q: "Pada tahap pra-produksi, dilakukan kegiatan brainstorming untuk menghasilkan ide sebanyak mungkin yang dapat digunakan dalam konsep multimedia. Brainstorming dilakukan secara kolaboratif agar perspektif antaranggota tim dapat digabungkan. Fungsi brainstorming adalah...",
        a: [
            "Membatasi ide hanya pada satu orang",
            "Menghasilkan banyak ide kreatif sebagai bahan dasar pengembangan konsep",
            "Menghapus kebutuhan storyboard",
            "Menurunkan kualitas konsep",
            "Mengurangi partisipasi anggota tim"
        ],
        correct: 1,
        pembahasan: "Brainstorming membantu tim menemukan konsep terbaik sebelum memasuki proses desain."
    },
    {
        q: "Moodboard adalah kumpulan referensi visual seperti warna, foto, ikon, dan gaya desain yang membantu tim menentukan arah estetika sebuah proyek multimedia. Moodboard biasanya dibuat sebelum desain visual final dikerjakan. Oleh karena itu, moodboard digunakan untuk...",
        a: [
            "Menentukan coding aplikasi",
            "Memberikan inspirasi visual dan gambaran gaya desain yang akan digunakan",
            "Menghapus proses produksi",
            "Mengurangi kebutuhan desain",
            "Menentukan durasi video"
        ],
        correct: 1,
        pembahasan: "Moodboard berfungsi sebagai acuan estetika agar seluruh visual konsisten."
    },
    {
        q: "Dalam produksi multimedia, pemilihan perangkat lunak sangat penting karena aplikasi tertentu lebih cocok digunakan untuk pekerjaan tertentu. Misalnya Adobe Premiere untuk video, Adobe Illustrator untuk vektor, dan Blender untuk animasi 3D. Dengan demikian, pemilihan software dilakukan agar...",
        a: [
            "Proses kerja menjadi lebih lambat",
            "Pembuatan aset multimedia lebih efisien dan sesuai kebutuhan",
            "Seluruh proses dilakukan secara manual",
            "Media tidak dapat diedit kembali",
            "Aplikasi tidak kompatibel dengan platform"
        ],
        correct: 1,
        pembahasan: "Software yang tepat meningkatkan efisiensi, kualitas, dan fleksibilitas produksi."
    },
    {
        q: "Asset management adalah proses pengorganisasian file proyek seperti gambar, audio, video, dokumen, dan script agar mudah ditemukan, diakses, dan diperbarui. Manajemen aset yang buruk dapat memperlambat produksi. Oleh karena itu, asset management diperlukan untuk...",
        a: [
            "Membuat file tersebar tanpa struktur",
            "Mengatur file proyek dengan rapi sehingga produksi lebih efisien",
            "Menghapus file penting",
            "Mengurangi jumlah media",
            "Menonaktifkan kolaborasi tim"
        ],
        correct: 1,
        pembahasan: "Asset management menjaga keteraturan dan mempercepat proses produksi."
    },
    {
        q: "Versioning adalah teknik menyimpan beberapa versi file saat proses produksi untuk menghindari kehilangan data atau kerusakan file. Dalam multimedia, versioning menjadi penting karena file sering mengalami revisi. Tujuan versioning adalah...",
        a: [
            "Menghapus versi sebelumnya",
            "Memastikan setiap revisi dapat dilacak dan dipulihkan jika terjadi kesalahan",
            "Menambah kebingungan tim",
            "Mengganti seluruh file dengan versi awal",
            "Mengurangi keamanan data"
        ],
        correct: 1,
        pembahasan: "Versioning melindungi proyek dari kesalahan fatal dan mempermudah kolaborasi."
    },
    {
        q: "Dalam tahap produksi, pengambilan gambar atau rekaman suara harus mengikuti teknik sesuai standar seperti pencahayaan, framing, dan kualitas mikrofon. Kualitas teknik produksi memengaruhi hasil akhir secara signifikan. Maka penggunaan teknik produksi yang baik bertujuan untuk...",
        a: [
            "Menghasilkan media berkualitas rendah",
            "Memastikan aset mentah memiliki kualitas tinggi sebelum masuk tahap editing",
            "Menghapus kebutuhan peralatan",
            "Mengurangi akurasi warna",
            "Menghilangkan detail visual"
        ],
        correct: 1,
        pembahasan: "Media mentah yang bagus membuat editing lebih mudah dan hasil akhir lebih profesional."
    },
    {
        q: "Pilot testing dilakukan sebelum produk multimedia diluncurkan secara penuh. Pengujian ini melibatkan pengguna dalam skala kecil untuk melihat apakah aplikasi berjalan sesuai yang diharapkan. Pilot testing dilakukan untuk...",
        a: [
            "Menonaktifkan seluruh fungsi aplikasi",
            "Mengetahui masalah awal yang mungkin tidak terlihat selama produksi",
            "Meningkatkan jumlah error",
            "Menghapus kebutuhan quality control",
            "Mengurangi kualitas aplikasi"
        ],
        correct: 1,
        pembahasan: "Pilot testing membantu menemukan kesalahan lebih awal sebelum aplikasi digunakan oleh banyak orang."
    },
    {
        q: "Setelah distribusi, dilakukan tahap maintenance yang meliputi pembaruan konten, perbaikan bug, penyesuaian navigasi, atau optimasi performa berdasarkan feedback pengguna. Maintenance diperlukan karena...",
        a: [
            "Aplikasi tidak boleh diubah setelah dirilis",
            "Produk multimedia harus terus diperbarui agar tetap relevan dan bebas dari error",
            "Seluruh media harus dihapus setelah rilis",
            "Pemeliharaan tidak berpengaruh apa pun",
            "Aplikasi tidak diizinkan berkembang"
        ],
        correct: 1,
        pembahasan: "Maintenance menjaga kualitas aplikasi tetap optimal dalam jangka panjang."
    },
    {
        q: "Salah satu indikator keberhasilan proyek multimedia adalah user engagement, yaitu seberapa banyak pengguna berinteraksi dengan aplikasi. Tingginya engagement menunjukkan bahwa aplikasi efektif dan menarik. Maka evaluasi user engagement bertujuan untuk...",
        a: [
            "Mengabaikan perilaku pengguna",
            "Mengetahui tingkat partisipasi dan interaksi pengguna terhadap aplikasi",
            "Menghapus fitur interaktif",
            "Menambah durasi loading",
            "Mengurangi kualitas layout"
        ],
        correct: 1,
        pembahasan: "User engagement memperlihatkan apakah aplikasi berhasil menarik minat dan mempertahankan pengguna."
    }
);

