let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

var quizData = quizData || [];

quizData.push(
    {
        q: "Dalam proses produksi konten multimedia berbasis video, kamera video memiliki peran yang sangat penting karena merupakan alat utama yang digunakan untuk menangkap peristiwa dalam bentuk gambar bergerak. Tanpa kamera, tidak mungkin sebuah produksi video dapat dihasilkan secara visual. Berdasarkan fungsi utamanya tersebut, kamera video digunakan untuk...",
        a: [
            "Mengedit video secara langsung",
            "Menghasilkan gambar bergerak yang direkam secara nyata",
            "Meningkatkan kualitas suara melalui mikrofon internal",
            "Menyimpan dokumen teks dalam format digital",
            "Memutar ulang video yang telah direkam"
        ],
        correct: 1,
        pembahasan: "Kamera video bertugas menangkap pergerakan objek dalam bentuk rekaman visual sehingga menjadi dasar utama dalam proses produksi audio-visual."
    },
    {
        q: "Dalam perkembangan teknologi, terdapat perbedaan signifikan antara kamera video analog dan kamera digital. Perbedaan ini tidak hanya pada kualitas gambar, tetapi juga pada cara penyimpanan data hasil rekaman. Kamera digital modern menyimpan hasil rekaman dalam format file digital yang mudah dipindahkan dan diedit. Dengan demikian, perbedaan utama antara kamera analog dan digital adalah...",
        a: [
            "Kamera analog lebih ringan dibandingkan kamera digital",
            "Kamera digital menggunakan media penyimpanan berbentuk file digital",
            "Kamera analog memiliki resolusi lebih tinggi daripada kamera digital",
            "Kamera digital tidak memerlukan daya listrik",
            "Kamera analog mendukung konektivitas internet"
        ],
        correct: 1,
        pembahasan: "Kamera digital menyimpan hasil rekaman dalam bentuk file digital, sehingga mempermudah proses editing, transfer, dan pengarsipan."
    },
    {
        q: "Kamera video profesional merupakan jenis kamera yang umumnya digunakan dalam produksi film, iklan, maupun siaran televisi. Kamera ini dirancang dengan berbagai fitur tambahan untuk menghasilkan tampilan visual yang lebih detail, stabil, dan berkualitas tinggi. Oleh karena itu, ciri utama kamera video profesional adalah...",
        a: [
            "Bentuknya sangat ringkas sehingga mudah dibawa",
            "Kemampuannya menghasilkan rekaman dengan resolusi sangat tinggi",
            "Lebih cocok digunakan untuk kegiatan rumah tangga",
            "Tidak memiliki fitur zoom optik untuk memperbesar objek",
            "Tidak menyediakan pengaturan manual untuk exposure"
        ],
        correct: 1,
        pembahasan: "Kamera profesional biasanya memiliki resolusi tinggi, sensor lebih besar, serta dukungan pengaturan manual yang lengkap untuk hasil maksimal."
    },
    {
        q: "Dalam fotografi maupun videografi, pemilihan jenis lensa sangat menentukan hasil rekaman. Salah satu jenis lensa yang sering digunakan untuk memotret atau merekam area yang luas adalah lensa sudut lebar. Lensa jenis ini memberikan bidang pandang yang lebih lebar daripada lensa standar. Berdasarkan fungsinya, lensa sudut lebar digunakan untuk...",
        a: [
            "Memperbesar detail objek kecil dari jarak jauh",
            "Mengambil gambar panorama atau pemandangan luas",
            "Mengaburkan objek latar belakang (bokeh)",
            "Membatasi cahaya masuk ke kamera",
            "Memperjelas detail objek sangat kecil"
        ],
        correct: 1,
        pembahasan: "Lensa sudut lebar mampu menangkap area yang lebih luas dalam satu frame, cocok untuk pemandangan, arsitektur, atau ruangan sempit."
    },
    {
        q: "Ketika ingin memperbesar objek tanpa mengurangi kualitas gambar, seorang videografer biasanya menggunakan zoom optik. Zoom optik bekerja melalui mekanisme fisik pada lensa sehingga pembesaran dilakukan secara optik, bukan melalui piksel digital. Berdasarkan prinsip tersebut, zoom optik adalah...",
        a: [
            "Pembesaran gambar dengan memperbesar piksel pada sensor",
            "Pembesaran objek menggunakan pergerakan mekanik pada lensa",
            "Proses mengubah warna gambar secara otomatis",
            "Mode pemotretan otomatis pada kamera",
            "Pengaturan untuk mengubah fokus latar belakang"
        ],
        correct: 1,
        pembahasan: "Zoom optik menggerakkan elemen lensa sehingga dapat memperbesar objek tanpa kehilangan kualitas."
    },
    {
        q: "Dalam dunia pengambilan gambar, depth of field (DOF) merupakan istilah penting yang menggambarkan seberapa banyak area dalam gambar yang terlihat tajam. DOF dipengaruhi oleh aperture, jarak objek, dan panjang fokus lensa. Berdasarkan definisinya, depth of field adalah...",
        a: [
            "Jarak fokus yang sangat pendek pada kamera",
            "Area dalam gambar yang terlihat tajam, baik di depan maupun di belakang objek utama",
            "Ketajaman warna dalam sebuah gambar",
            "Proses mengatur pencahayaan dalam kamera",
            "Resolusi tinggi yang dihasilkan oleh sensor kamera"
        ],
        correct: 1,
        pembahasan: "DOF menjelaskan rentang area fokus dalam sebuah gambar, dari foreground hingga background."
    },
    {
        q: "Dalam kondisi cahaya yang sangat terang, hasil rekaman bisa tampak overexposed atau terlalu terang. Untuk mengatasi hal tersebut, videografer sering menggunakan filter ND (Neutral Density), yaitu filter yang berfungsi mengurangi intensitas cahaya tanpa memengaruhi warna. Oleh karena itu, fungsi utama filter ND adalah...",
        a: [
            "Meningkatkan kecerahan gambar pada kondisi gelap",
            "Mengurangi intensitas cahaya yang masuk ke lensa tanpa mengubah warna",
            "Mengubah warna gambar menjadi hitam putih",
            "Mengatur resolusi video",
            "Memperjelas fokus latar belakang"
        ],
        correct: 1,
        pembahasan: "Filter ND bekerja seperti kacamata hitam pada lensa: mengurangi cahaya tanpa mengubah karakter warna."
    },
    {
        q: "Dalam proses perekaman, kamera harus mampu menangkap warna putih secara akurat meski kondisi pencahayaan berbeda-beda. Untuk itu, fitur white balance dibutuhkan agar kamera dapat menyesuaikan suhu warna cahaya. Berdasarkan fungsinya, white balance digunakan untuk...",
        a: [
            "Mengatur intensitas cahaya masuk",
            "Menyeimbangkan warna gambar agar putih tampak alami",
            "Meningkatkan kontras warna",
            "Memperjelas gambar yang buram",
            "Mengubah resolusi video"
        ],
        correct: 1,
        pembahasan: "White balance memastikan warna tetap akurat sehingga putih tidak tampak kebiruan atau kekuningan."
    },
    {
        q: "Kamera consumer merupakan jenis kamera yang dirancang untuk kebutuhan dasar seperti perekaman acara keluarga, perjalanan, atau kegiatan pribadi lainnya. Kamera ini tidak memiliki fitur profesional yang kompleks. Dengan demikian, kamera consumer biasanya digunakan untuk...",
        a: [
            "Produksi film layar lebar",
            "Kebutuhan pribadi atau rumah tangga",
            "Rekaman siaran televisi profesional",
            "Pengeditan video secara langsung",
            "Pembuatan iklan komersial profesional"
        ],
        correct: 1,
        pembahasan: "Kamera consumer dibuat sederhana, praktis, dan mudah digunakan oleh masyarakat umum."
    },
    {
        q: "Dibandingkan dengan kamera analog, kamera digital menawarkan keuntungan signifikan pada tahap editing karena hasil rekaman sudah tersimpan sebagai file digital. Hal ini membuat proses pengolahan video menjadi lebih cepat dan efisien. Oleh sebab itu, salah satu kelebihan kamera digital adalah...",
        a: [
            "Memiliki resolusi yang lebih rendah daripada kamera analog",
            "Mempermudah pengeditan video karena hasil rekaman berbentuk file digital",
            "Memerlukan daya listrik lebih sedikit",
            "Tidak kompatibel dengan komputer modern",
            "Tidak dapat digunakan tanpa tripod"
        ],
        correct: 1,
        pembahasan: "Video digital dapat diolah dengan software editing tanpa proses konversi analog terlebih dahulu."
    },
    {
        q: "Dalam pengambilan gambar bergerak, pencahayaan memegang peranan yang sangat penting karena menentukan seberapa jelas objek dapat terlihat dalam rekaman. Cahaya yang tidak memadai akan menghasilkan gambar gelap dan penuh noise, sementara cahaya berlebihan dapat menyebabkan overexposure. Oleh karena itu, pencahayaan yang baik diperlukan agar kamera dapat menangkap gambar dengan kualitas optimal. Berdasarkan hal tersebut, fungsi utama pencahayaan dalam proses perekaman adalah...",
        a: [
            "Memberikan efek warna tertentu pada gambar",
            "Membantu kamera menangkap gambar dengan jelas dan optimal",
            "Membuat gambar tampak lebih gelap untuk kesan dramatis",
            "Mengubah resolusi video agar lebih stabil",
            "Menghilangkan bayangan sepenuhnya dari objek"
        ],
        correct: 1,
        pembahasan: "Pencahayaan yang baik sangat penting agar sensor kamera dapat menangkap detail objek dengan jelas tanpa noise atau hilangnya informasi visual."
    },
    {
        q: "Shutter speed adalah salah satu pengaturan penting dalam kamera yang berfungsi mengontrol durasi sensor menerima cahaya. Pengaturan ini sangat memengaruhi tampilan objek yang bergerak. Jika shutter speed terlalu lambat, gerakan objek dapat menjadi blur, sedangkan shutter speed cepat membuat gerakan tampak membeku. Oleh karena itu, shutter speed adalah...",
        a: [
            "Pengaturan untuk mengubah warna objek",
            "Kecepatan rana kamera saat membuka dan menutup dalam menangkap cahaya",
            "Fitur untuk mengatur tingkat zoom optik",
            "Tool untuk meningkatkan kualitas suara",
            "Pengaturan untuk mengubah format file rekaman"
        ],
        correct: 1,
        pembahasan: "Shutter speed mengontrol berapa lama sensor terekspos cahaya sehingga mempengaruhi efek blur atau beku pada gerakan."
    },
    {
        q: "ISO merupakan salah satu parameter exposure yang menentukan sensitivitas sensor terhadap cahaya. Semakin tinggi nilai ISO, semakin sensitif kamera terhadap cahaya sehingga perekaman dapat dilakukan meski pada kondisi minim cahaya, tetapi dengan risiko meningkatnya noise. Dengan demikian, fungsi ISO dalam perekaman gambar bergerak adalah...",
        a: [
            "Mengurangi tingkat kejernihan gambar",
            "Mengatur sensitivitas sensor terhadap cahaya",
            "Mengatur kedalaman ruang (depth of field)",
            "Meningkatkan stabilitas gambar dalam rekaman",
            "Membuat warna tampak lebih tajam dan kontras"
        ],
        correct: 1,
        pembahasan: "ISO mempengaruhi sensitivitas sensor terhadap cahaya; semakin tinggi ISO, semakin terang gambar, tetapi noise juga meningkat."
    },
    {
        q: "Frame rate merupakan jumlah frame atau gambar yang direkam dalam satu detik. Semakin tinggi frame rate, semakin halus pergerakan yang direkam. Frame rate rendah membuat gerakan tampak patah-patah. Oleh karena itu, frame rate dalam pengambilan gambar bergerak adalah...",
        a: [
            "Jumlah cahaya yang masuk melalui sensor kamera",
            "Jumlah gambar yang direkam dalam setiap detik",
            "Kecepatan kamera memproses warna",
            "Durasi fokus kamera terhadap objek",
            "Jumlah piksel dalam satu gambar"
        ],
        correct: 1,
        pembahasan: "Frame rate menentukan seberapa halus gerakan terlihat dalam rekaman video. Umumnya diambil 24fps, 30fps, atau 60fps."
    },
    {
        q: "Dalam fotografi dan videografi, fokus kamera sangat menentukan area mana dalam gambar yang tampak tajam. Fitur autofocus membantu kamera menentukan fokus secara otomatis berdasarkan jarak objek. Oleh sebab itu, autofocus adalah...",
        a: [
            "Pengaturan manual untuk mengatur ketajaman gambar",
            "Sistem otomatis yang menentukan fokus berdasarkan jarak objek",
            "Filter untuk memperhalus warna",
            "Pengaturan cahaya otomatis",
            "Mode zoom digital otomatis"
        ],
        correct: 1,
        pembahasan: "Autofocus bekerja mendeteksi jarak objek dan menyesuaikan fokus lensa agar objek terlihat tajam."
    },
    {
        q: "White balance memiliki beberapa mode yang dapat digunakan untuk kondisi cahaya tertentu, seperti daylight, cloudy, tungsten, dan fluorescent. Setiap mode dirancang untuk menyesuaikan suhu warna cahaya yang berbeda. Dengan demikian, salah satu fungsi pengaturan white balance adalah...",
        a: [
            "Mengoreksi warna agar tampak natural sesuai jenis sumber cahaya",
            "Meningkatkan kecepatan shutter secara otomatis",
            "Mengatur tingkat zoom optik",
            "Mengubah resolusi gambar",
            "Membuat objek tampak lebih dekat"
        ],
        correct: 0,
        pembahasan: "White balance menyesuaikan warna agar objek tampak alami meski cahaya lingkungan berbeda."
    },
    {
        q: "Tripod merupakan alat pendukung yang sangat umum digunakan dalam perekaman video untuk menjaga kamera tetap stabil. Tripod sangat penting terutama dalam pengambilan gambar statis atau long exposure. Oleh karena itu, tripod berfungsi untuk...",
        a: [
            "Mengatur pencahayaan pada kamera",
            "Menstabilkan kamera agar tidak goyah saat merekam",
            "Meningkatkan kualitas suara",
            "Menghasilkan efek blur artistik",
            "Memperbesar objek secara optik"
        ],
        correct: 1,
        pembahasan: "Tripod menjaga kamera tetap stabil sehingga rekaman lebih halus dan bebas guncangan."
    },
    {
        q: "Dalam pengambilan gambar, terdapat teknik yang disebut panning, yaitu gerakan kamera secara horizontal mengikuti objek yang bergerak. Teknik ini menghasilkan efek gerakan yang dinamis dan menjaga objek tetap fokus. Oleh karena itu, panning adalah...",
        a: [
            "Gerakan kamera secara vertikal",
            "Gerakan kamera secara horizontal mengikuti objek bergerak",
            "Teknik memperbesar objek dari jarak jauh",
            "Teknik untuk memotret objek dari atas",
            "Gerakan kamera dalam arah melingkar"
        ],
        correct: 1,
        pembahasan: "Panning digunakan untuk mengikuti pergerakan objek sehingga tetap terlihat jelas di tengah gerakan."
    },
    {
        q: "Tracking shot merupakan teknik pengambilan gambar di mana kamera bergerak mengikuti objek, biasanya menggunakan alat khusus seperti dolly atau stabilizer. Teknik ini memberikan efek pergerakan yang halus dan profesional. Maka dari itu, tracking shot adalah...",
        a: [
            "Gerakan kamera berputar pada porosnya",
            "Gerakan kamera mendekati objek secara cepat",
            "Gerakan kamera mengikuti pergerakan objek dengan berpindah posisi",
            "Gerakan kamera dari bawah ke atas",
            "Gerakan kamera untuk memperbesar objek"
        ],
        correct: 2,
        pembahasan: "Tracking shot membuat kamera bergerak bersama objek sehingga menciptakan kesan dekat dan mengikuti aksi."
    },
    {
        q: "Tilt shot adalah teknik pergerakan kamera yang membuat sudut pandang berubah dari bawah ke atas atau sebaliknya tanpa memindahkan posisi kamera. Teknik ini sering digunakan untuk menunjukkan tinggi suatu objek atau memberikan kesan dramatis. Oleh karena itu, tilt shot adalah...",
        a: [
            "Gerakan kamera dari kiri ke kanan",
            "Gerakan kamera maju mendekati objek",
            "Gerakan kamera naik turun tanpa memindahkan posisi kamera",
            "Gerakan kamera berputar 360 derajat",
            "Gerakan kamera menjauh secara cepat"
        ],
        correct: 2,
        pembahasan: "Tilt shot digunakan untuk menyorot objek tinggi atau memberikan dinamika visual dari atas ke bawah atau sebaliknya."
    },
    {
        q: "Dalam dunia sinematografi, komposisi gambar berperan sangat penting untuk menciptakan visual yang menarik dan mampu mengarahkan perhatian penonton pada subjek utama. Salah satu aturan komposisi yang paling populer adalah rule of thirds, di mana bingkai gambar dibagi menjadi sembilan bagian menggunakan dua garis horizontal dan dua garis vertikal. Dengan demikian, rule of thirds adalah teknik komposisi yang digunakan untuk...",
        a: [
            "Membagi objek menjadi dua bagian simetris",
            "Menempatkan subjek pada titik perpotongan garis agar tampak lebih menarik",
            "Menghapus latar belakang objek secara otomatis",
            "Meningkatkan ketajaman gambar melalui fokus manual",
            "Menentukan resolusi video secara otomatis"
        ],
        correct: 1,
        pembahasan: "Rule of thirds membantu menciptakan komposisi yang lebih seimbang dan menarik dengan menempatkan objek pada titik-titik strategis."
    },
    {
        q: "Dalam proses perekaman video, stabilisasi menjadi hal yang sangat penting karena gerakan tangan yang tidak stabil dapat menyebabkan rekaman terlihat goyah dan tidak profesional. Salah satu alat yang umum digunakan untuk menghasilkan gerakan kamera yang lembut adalah stabilizer atau gimbal. Dengan demikian, fungsi utama stabilizer adalah...",
        a: [
            "Mengatur warna gambar secara otomatis",
            "Menstabilkan kamera agar gerakannya halus meski operator bergerak",
            "Menambah efek bayangan pada objek",
            "Meningkatkan kualitas audio pada rekaman",
            "Memperbesar objek dengan zoom optik"
        ],
        correct: 1,
        pembahasan: "Stabilizer menjaga gerakan kamera tetap halus dan stabil meski operator berjalan atau bergerak."
    },
    {
        q: "Dalam beberapa situasi, videografer memerlukan teknik pengambilan gambar yang memberikan kesan lembut dan romantis. Salah satu cara yang dapat digunakan adalah dengan menambahkan filter soft focus pada lensa. Filter ini membuat cahaya yang masuk menjadi lebih menyebar sehingga menghasilkan tampilan lembut. Dengan demikian, filter soft focus digunakan untuk...",
        a: [
            "Meningkatkan ketajaman gambar",
            "Memberikan efek lembut dan sedikit blur pada gambar",
            "Menggelapkan warna gambar",
            "Mengatur keseimbangan putih otomatis",
            "Mengurangi distorsi lensa"
        ],
        correct: 1,
        pembahasan: "Soft focus memberikan kesan dreamy dengan mengurangi ketajaman dan membuat cahaya lebih menyebar."
    },
    {
        q: "Close up merupakan teknik framing yang sering digunakan untuk menonjolkan ekspresi wajah atau detail penting pada objek. Dengan mempersempit sudut pandang, penonton dapat lebih fokus pada elemen emosional atau detail kecil yang ingin ditonjolkan. Berdasarkan hal tersebut, close up digunakan untuk...",
        a: [
            "Menampilkan objek dalam skala penuh",
            "Menonjolkan detail wajah atau objek tertentu secara dekat",
            "Mengambil pemandangan yang sangat luas",
            "Menyorot objek dari jarak jauh",
            "Mengambil gambar dari sudut ekstrem tinggi"
        ],
        correct: 1,
        pembahasan: "Close up memperlihatkan ekspresi atau detail yang tidak dapat terlihat dari jarak jauh."
    },
    {
        q: "Dalam pembuatan film atau video, wide shot atau long shot digunakan untuk memperlihatkan seluruh tubuh subjek beserta lingkungan di sekitarnya. Teknik ini penting untuk memberikan konteks lokasi dan situasi adegan. Dengan demikian, wide shot digunakan untuk...",
        a: [
            "Menyorot detail wajah secara dekat",
            "Menampilkan subjek dan latar belakang secara keseluruhan",
            "Menyorot objek kecil dari sangat dekat",
            "Menghilangkan latar belakang gambar",
            "Menampilkan objek dalam kondisi gelap"
        ],
        correct: 1,
        pembahasan: "Wide shot memperlihatkan ruang dan lingkungan sehingga penonton memahami konteks adegan."
    },
    {
        q: "Dalam perekaman video profesional, teknik rack focus sering digunakan untuk mengarahkan perhatian penonton dari satu objek ke objek lainnya. Teknik ini dilakukan dengan mengubah fokus secara halus selama pengambilan gambar, sehingga fokus berpindah dari latar depan ke latar belakang atau sebaliknya. Oleh karena itu, rack focus adalah teknik untuk...",
        a: [
            "Mengubah warna gambar secara bertahap",
            "Memindahkan fokus dari satu objek ke objek lain saat merekam",
            "Mengubah pencahayaan secara otomatis",
            "Menstabilkan kamera dengan tripod",
            "Memperbesar objek secara digital"
        ],
        correct: 1,
        pembahasan: "Rack focus mengarahkan perhatian penonton dengan memindahkan fokus secara halus dari satu titik ke titik lainnya."
    },
    {
        q: "Dalam teknik pengambilan gambar, bird's eye view digunakan untuk memberikan sudut pandang dari atas sehingga objek tampak kecil dan lingkungannya terlihat luas. Teknik ini memberikan perspektif yang dramatis dan sering digunakan dalam adegan pembuka sebuah film. Berdasarkan fungsinya, bird's eye view adalah...",
        a: [
            "Pengambilan gambar sejajar dengan mata manusia",
            "Pengambilan gambar dari sudut sangat tinggi sehingga objek tampak kecil",
            "Pengambilan gambar dari sudut rendah ke atas",
            "Pengambilan gambar untuk memperbesar detail",
            "Pengambilan gambar dari samping objek"
        ],
        correct: 1,
        pembahasan: "Bird's eye view menciptakan perspektif tinggi dan memberikan gambaran keseluruhan lingkungan."
    },
    {
        q: "Sebaliknya dari bird’s eye view, low angle shot adalah teknik pengambilan gambar dari bawah ke atas yang memberikan kesan kuat dan dominan pada subjek. Teknik ini sering digunakan untuk menonjolkan kekuatan karakter atau objek. Dengan demikian, low angle shot digunakan untuk...",
        a: [
            "Membuat objek terlihat kecil dan tidak berdaya",
            "Memberikan kesan bahwa objek tampak lebih besar, kuat, atau berwibawa",
            "Memperlihatkan lingkungan secara luas",
            "Mengambil detail kecil objek",
            "Menampilkan objek dari jarak jauh"
        ],
        correct: 1,
        pembahasan: "Low angle shot memberikan kesan kekuatan dan dominasi karena posisi kamera lebih rendah dari objek."
    },
    {
        q: "Dalam pengambilan gambar bergerak, continuity atau kesinambungan visual sangat penting untuk memastikan bahwa setiap adegan terlihat konsisten dan tidak membingungkan. Continuity menjaga agar posisi objek, pencahayaan, dan pergerakan tetap selaras antara satu shot dengan shot lainnya. Berdasarkan hal tersebut, continuity bertujuan untuk...",
        a: [
            "Menciptakan efek blur artistik",
            "Menjaga konsistensi visual dari satu adegan ke adegan lainnya",
            "Memperbesar objek secara manual",
            "Membuat warna tampak lebih kontras",
            "Mengganti latar belakang secara otomatis"
        ],
        correct: 1,
        pembahasan: "Continuity mencegah kesalahan visual seperti perubahan posisi objek yang tiba-tiba sehingga cerita tetap masuk akal."
    },
    {
        q: "Shot list adalah dokumen penting dalam proses produksi gambar bergerak karena berisi daftar seluruh jenis shot yang harus diambil, lengkap dengan sudut pengambilan, pergerakan kamera, dan detail teknis lainnya. Dokumen ini membantu tim produksi bekerja secara lebih terorganisir. Dengan demikian, shot list digunakan untuk...",
        a: [
            "Mengatur warna gambar dalam editing",
            "Mencatat seluruh pengambilan gambar yang dibutuhkan dalam produksi",
            "Menyusun storyboard secara visual",
            "Mengedit dialog dalam naskah",
            "Mengatur format file video"
        ],
        correct: 1,
        pembahasan: "Shot list membantu memastikan semua kebutuhan gambar diambil dengan lengkap dan sesuai rencana produksi."
    },
    {
        q: "Dalam proses perekaman video, exposure merupakan elemen paling dasar yang menentukan seberapa terang atau gelap hasil rekaman. Exposure dipengaruhi oleh tiga faktor utama, yaitu shutter speed, aperture, dan ISO. Pengaturan yang tidak tepat dapat menghasilkan gambar terlalu terang (overexposed) atau terlalu gelap (underexposed), sehingga mengurangi kualitas visual. Oleh karena itu, exposure dalam pengambilan gambar bergerak adalah...",
        a: [
            "Proses memperbesar objek secara optik",
            "Jumlah cahaya yang masuk ke sensor kamera selama perekaman",
            "Teknik menentukan warna gambar secara manual",
            "Mode otomatis untuk mengatur komposisi",
            "Kadence suara yang masuk ke mikrofon"
        ],
        correct: 1,
        pembahasan: "Exposure menentukan intensitas cahaya yang diterima sensor kamera; keseimbangan exposure sangat penting untuk menghasilkan gambar yang jelas dan profesional."
    },
    {
        q: "Lighting atau tata cahaya dalam pengambilan gambar bergerak melibatkan pengaturan lampu untuk menciptakan suasana tertentu. Salah satu metode populer adalah three-point lighting yang terdiri dari key light, fill light, dan back light. Teknik ini digunakan secara luas dalam produksi film, wawancara, dan video profesional. Dengan demikian, tujuan dari three-point lighting adalah...",
        a: [
            "Menghasilkan gambar hitam-putih",
            "Memberikan pencahayaan seimbang dari tiga arah untuk menonjolkan subjek",
            "Menghilangkan semua bayangan pada objek",
            "Meningkatkan resolusi sensor kamera",
            "Mengatur fokus kamera secara otomatis"
        ],
        correct: 1,
        pembahasan: "Three-point lighting memberikan pencahayaan menyeluruh yang menonjolkan subjek sambil mempertahankan depth dan karakter visual."
    },
    {
        q: "Dalam sinematografi, istilah color grading merujuk pada proses mengatur warna video setelah rekaman selesai. Proses ini digunakan untuk menciptakan suasana tertentu, menyelaraskan tone warna antarshot, atau menambah kesan dramatis pada video. Berdasarkan fungsinya, color grading adalah...",
        a: [
            "Proses menyesuaikan fokus kamera",
            "Proses memperbaiki distorsi lensa",
            "Proses mengubah dan menyesuaikan warna dalam hasil rekaman video",
            "Teknik menstabilkan kamera saat bergerak",
            "Teknik untuk memperbesar objek secara digital"
        ],
        correct: 2,
        pembahasan: "Color grading digunakan untuk menyesuaikan mood visual dan membuat warna antaradegan tetap konsisten."
    },
    {
        q: "Dalam pengambilan gambar bergerak, sering kali diperlukan alat bantu seperti clapperboard untuk sinkronisasi antara audio dan video, terutama dalam produksi film yang menggunakan rekaman suara terpisah. Selain itu, alat ini juga digunakan untuk menandai nomor adegan, take, dan informasi penting lainnya. Oleh karena itu, clapperboard berfungsi untuk...",
        a: [
            "Mengatur pencahayaan",
            "Menyinkronkan audio dan video serta memberi informasi shot",
            "Mengganti lensa secara otomatis",
            "Merekam suara ambience",
            "Membersihkan sensor kamera"
        ],
        correct: 1,
        pembahasan: "Clapperboard digunakan untuk sinkronisasi audio-video dan mencatat data produksi seperti nomor adegan, take, dan judul."
    },
    {
        q: "Dalam proses produksi video, kamera sering kali membutuhkan bantuan alat seperti boom pole untuk menangkap suara secara lebih fokus. Boom pole memungkinkan mikrofon diarahkan dekat ke sumber suara tanpa masuk ke dalam frame. Dengan demikian, boom pole digunakan untuk...",
        a: [
            "Menahan lampu studio",
            "Menggantung kamera dari ketinggian",
            "Menempatkan mikrofon lebih dekat ke sumber suara tanpa terlihat dalam frame",
            "Mengatur kecepatan shutter",
            "Mengganti baterai kamera"
        ],
        correct: 2,
        pembahasan: "Boom pole memungkinkan operator suara memposisikan mikrofon dekat dengan aktor tanpa mengganggu visual gambar."
    },
    {
        q: "Dalam videografi, istilah b-roll merujuk pada rekaman tambahan yang digunakan untuk mendukung rekaman utama (a-roll). B-roll biasanya berupa gambar pendukung untuk memperkaya visual, seperti detail objek, lingkungan sekitar, atau aktivitas pendukung. Oleh karena itu, fungsi b-roll adalah...",
        a: [
            "Menjadi rekaman utama dalam wawancara",
            "Menyediakan visual tambahan untuk mendukung narasi atau rekaman utama",
            "Menghapus noise dalam rekaman audio",
            "Mengatur expsoure secara otomatis",
            "Mengganti audio utama"
        ],
        correct: 1,
        pembahasan: "B-roll membuat video lebih dinamis, menjembatani transisi, dan memperjelas konteks visual."
    },
    {
        q: "Lens flare adalah fenomena cahaya yang muncul ketika cahaya kuat mengenai lensa kamera secara langsung. Efek ini bisa muncul secara tidak sengaja tetapi juga dapat digunakan secara artistik dalam produksi video. Berdasarkan pengertiannya, lens flare adalah...",
        a: [
            "Distorsi gambar akibat goyangan kamera",
            "Cahaya berlebih yang masuk ke lensa sehingga menciptakan efek pantulan atau garis bercahaya",
            "Gambar menjadi buram karena fokus tidak tepat",
            "Bayangan gelap akibat kurangnya cahaya",
            "Efek digital yang ditambahkan dalam editing"
        ],
        correct: 1,
        pembahasan: "Lens flare terjadi akibat pantulan cahaya pada elemen lensa dan dapat menambah nuansa artistik bila digunakan dengan sengaja."
    },
    {
        q: "Dalam pengambilan gambar bergerak, storyboard digunakan sebagai panduan visual untuk menggambarkan setiap adegan, pergerakan kamera, serta komposisi frame sebelum proses produksi dilakukan. Dengan demikian, storyboard dalam produksi video berfungsi untuk...",
        a: [
            "Mengatur mikrofon dan audio",
            "Menjadi panduan visual alur adegan sebelum proses perekaman",
            "Mengedit warna hasil rekaman",
            "Mengatur format penyimpanan video",
            "Mengatur keseimbangan putih secara otomatis"
        ],
        correct: 1,
        pembahasan: "Storyboard membantu tim memahami kebutuhan pengambilan gambar secara visual dan teknis sebelum produksi."
    },
    {
        q: "Dalam teknik pengambilan gambar, establishing shot digunakan pada awal adegan untuk menunjukkan lokasi atau lingkungan secara menyeluruh. Shot ini membantu penonton memahami konteks tempat sebelum adegan dimulai. Dengan demikian, establishing shot digunakan untuk...",
        a: [
            "Menampilkan detail wajah atau objek secara dekat",
            "Memperlihatkan lokasi atau suasana secara luas sebelum adegan utama",
            "Mengambil gambar dari sudut ekstrem bawah",
            "Menyorot objek kecil",
            "Menampilkan adegan aksi secara cepat"
        ],
        correct: 1,
        pembahasan: "Establishing shot memperkenalkan lokasi dan suasana sehingga penonton memahami konteks cerita."
    },
    {
        q: "Dalam proses pengambilan gambar bergerak, operator kamera harus memahami focal length karena panjang fokus lensa menentukan seberapa besar atau kecil objek tampak dalam frame. Lensa dengan focal length lebih panjang memperbesar objek, sedangkan focal length pendek memperluas area pandang. Dengan demikian, focal length adalah...",
        a: [
            "Jarak antara sensor dan baterai kamera",
            "Ukuran kamera secara keseluruhan",
            "Jarak antara pusat optik lensa dan sensor ketika lensa pada fokus",
            "Kecepatan kamera dalam menangkap frame",
            "Warna cahaya yang masuk ke lensa"
        ],
        correct: 2,
        pembahasan: "Focal length memengaruhi sudut pandang serta seberapa besar objek terlihat dalam rekaman."
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