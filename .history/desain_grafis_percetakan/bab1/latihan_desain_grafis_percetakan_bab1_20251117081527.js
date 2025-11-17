let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Desain grafis adalah bentuk komunikasi visual yang bertujuan untuk...",
        a: [
            "Membuat gambar secara manual",
            "Menyampaikan pesan atau informasi secara efektif",
            "Meningkatkan keindahan seni rupa",
            "Membuat seni lukis digital",
            "Menghasilkan produk cetak tiga dimensi"
        ],
        correct: 1,
        pembahasan: "Desain grafis menggunakan elemen visual seperti teks, gambar,dan simbol untuk menyampaikan pesan atau informasi secara efektif."
    }, {
        q: "Elemen desain grafis yang berupa garis dikenal sebagai...",
        a: [
            "Line",
            "Form",
            "Color",
            "Unity",
            "Balance"
        ],
        correct: 0,
        pembahasan: "Garis (line) adalah elemen dasar dalam desain yang digunakan untuk menciptakan bentuk, pola, atau struktur visual."
    }, {
        q: "Objek geometris seperti lingkaran dan kotak termasuk dalam elemen desain...",
        a: [
            "Line",
            "Color",
            "Form and Space",
            "Texture",
            "Repetition"
        ],
        correct: 2,
        pembahasan: "Form mencakup bentuk geometris (kotak, lingkaran, dll.) dan space mengacu pada ruang dalam desain."
    }, {
        q: "Warna yang termasuk kategori warna hangat adalah...",
        a: [
            "Biru dan hijau",
            "Merah dan oranye",
            "Hitam dan putih",
            "Abu-abu dan cokelat",
            "Hijau dan ungu"
        ],
        correct: 1,
        pembahasan: "Warna hangat seperti merah, oranye, dan kuning memberikan kesan energi, semangat, dan kehangatan."
    }, {
        q: "Apa yang dimaksud dengan balance dalam desain grafis?",
        a: [
            "Penekanan pada elemen tertentu",
            "Kesatuan antara elemen desain",
            "Keseimbangan visual antara elemen-elemen desain",
            "Pengulangan pola yang sama",
            "Kontras warna dalam desain"
        ],
        correct: 2,
        pembahasan: "Balance mengacu pada distribusi elemen desain sehingga menghasilkan harmoni visual."
    }, {
        q: "Elemen desain grafis yang memberikan kesan visual atau taktil disebut...",
        a: [
            "Line",
            "Texture",
            "Balance",
            "Form",
            "Type"
        ],
        correct: 1,
        pembahasan: "Tekstur (texture) memberikan dimensi visual atau sensasi permukaan pada elemen desain."
    }, {
        q: "Apa fungsi utama teks dalam desain grafis?",
        a: [
            "Memberikan pesan dan informasi",
            "Menambah dekorasi visual",
            "Membuat pola geometris",
            "Menyusun elemen bentuk",
            "Menambah kontras pada desain"
        ],
        correct: 0,
        pembahasan: "Teks adalah elemen penting yang digunakan untuk menyampaikan informasi atau pesan secara langsung kepada audiens."
    }, {
        q: "Prinsip desain yang menciptakan kesatuan dalam elemen desain disebut...",
        a: [
            "Unity",
            "Balance",
            "Repetition",
            "Contrast",
            "Continuity"
        ],
        correct: 0,
        pembahasan: "Unity adalah prinsip yang menciptakan hubungan yang harmonis antara elemen-elemen desain."
    }, {
        q: "Warna biru, hijau, dan ungu termasuk kategori...",
        a: [
            "Warna dingin",
            "Warna hangat",
            "Warna netral",
            "Warna monokrom",
            "Warna cerah"
        ],
        correct: 0,
        pembahasan: "Warna dingin memberikan kesan tenang, sejuk, dan damai."
    }, {
        q: "Software yang digunakan untuk desain berbasis vektor adalah...",
        a: [
            "Adobe Photoshop",
            "CorelDRAW",
            "Blender",
            "AutoCAD",
            "Microsoft Publisher"
        ],
        correct: 1,
        pembahasan: "CorelDRAW adalah perangkat lunak yang dirancang untuk membuat desain berbasis vektor seperti logo dan ilustrasi."
    }, {
        q: "Tekstur dan gambar dalam desain grafis dapat memberikan...",
        a: [
            "Nilai estetika lebih tinggi",
            "Gangguan pada desain",
            "Efek negatif pada audiens",
            "Pengurangan elemen warna",
            "Kesalahan desain"
        ],
        correct: 0,
        pembahasan: "Tekstur dan gambar digunakan untuk menambahkan dimensi visual yang menarik dan meningkatkan nilai estetika desain."
    }, {
        q: "Pengulangan elemen yang konsisten dalam desain disebut...",
        a: [
            "Continuity",
            "Balance",
            "Repetition",
            "Unity",
            "Harmony"
        ],
        correct: 2,
        pembahasan: "Repetition menciptakan pola atau ritme visual yang konsisten dalam desain."
    }, {
        q: "Apa yang dimaksud dengan contrast dalam desain grafis?",
        a: [
            "Perbedaan tajam antara elemen desain",
            "Kesamaan warna antara elemen",
            "Kesatuan elemen visual",
            "Penggunaan warna hangat",
            "Penempatan teks pada desain"
        ],
        correct: 0,
        pembahasan: "Kontras menciptakan perbedaan yang mencolok antara elemen untuk menarik perhatian atau menonjolkan suatu area desain."
    }, {
        q: "Apa yang dimaksud dengan nirmana?",
        a: [
            "Teknik mencetak gambar",
            "Ilmu tentang elemen dasar desain grafis",
            "Seni membuat pola geometris",
            "Prinsip harmoni dalam desain",
            "Pembuatan gambar berbasis pixel"
        ],
        correct: 1,
        pembahasan: "Nirmana adalah studi tentang elemen-elemen desain grafis seperti garis, warna, dan tekstur beserta prinsip-prinsipnya."
    }, {
        q: "Software yang digunakan untuk desain berbasis tiga dimensi adalah...",
        a: [
            "Adobe Illustrator",
            "Blender",
            "CorelDRAW",
            "Microsoft Publisher",
            "Adobe Photoshop"
        ],
        correct: 1,
        pembahasan: "Blender adalah software gratis yang populer untuk membuat model tiga dimensi, animasi, dan rendering."
    }, {
        q: "Bitmap adalah jenis gambar yang berbasis...",
        a: [
            "Vektor",
            "Pixel",
            "Garis",
            "Warna",
            "Pola geometris"
        ],
        correct: 1,
        pembahasan: "Bitmap terdiri dari grid pixel yang merepresentasikan gambar digital, seperti foto."
    }, {
        q: "Kesinambungan elemen dalam desain grafis dikenal sebagai...",
        a: [
            "Unity",
            "Repetition",
            "Continuity",
            "Balance",
            "Proximity"
        ],
        correct: 2,
        pembahasan: "Continuity adalah prinsip yang menjaga kesinambungan visual di antara elemen desain."
    }, {
        q: "Program berikut yang digunakan untuk pengolahan gambar berbasis pixel adalah...",
        a: [
            "CorelDRAW",
            "Blender",
            "Adobe Photoshop",
            "AutoCAD",
            "Microsoft Publisher"
        ],
        correct: 2,
        pembahasan: "Photoshop adalah perangkat lunak yang dirancang untuk mengedit gambar berbasis pixel, seperti foto."
    }, {
        q: "Elemen desain grafis yang digunakan untuk menambah kedalaman visual adalah...",
        a: [
            "Color",
            "Texture",
            "Balance",
            "Unity",
            "Line"
        ],
        correct: 1,
        pembahasan: "Tekstur memberikan kesan kedalaman dan dimensi pada desain grafis."
    }, {
        q: "Apa manfaat mempelajari estetika dalam desain grafis?",
        a: [
            "Meningkatkan kemampuan menggunakan software desain",
            "Memperdalam rasa keindahan dan pemahaman seni",
            "Membantu membuat pola geometris",
            "Meningkatkan teknik pencetakan",
            "Membantu memahami perbedaan pixel dan vektor"
        ],
        correct: 1,
        pembahasan: "Estetika membantu meningkatkan apresiasi terhadap keindahan, harmoni, dan nilai seni dalam desain grafis."
    },
];

