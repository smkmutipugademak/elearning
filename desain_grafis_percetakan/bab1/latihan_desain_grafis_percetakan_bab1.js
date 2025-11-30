let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Desain grafis adalah bentuk komunikasi visual yang bertujuan untuk ………",
        a: [
            "Membuat gambar secara manual",
            "Menyampaikan pesan atau informasi secara efektif",
            "Meningkatkan keindahan seni rupa",
            "Membuat seni lukis digital",
            "Menghasilkan produk cetak tiga dimensi"
        ],
        correct: 1,
        pembahasan: "Desain grafis menggunakan elemen visual seperti teks, gambar, dan simbol untuk menyampaikan pesan atau informasi secara efektif."
    },
    {
        q: "Elemen desain grafis yang berupa garis dikenal sebagai ………",
        a: ["Line", "Form", "Color", "Unity", "Balance"],
        correct: 0,
        pembahasan: "Garis (line) adalah elemen dasar dalam desain yang digunakan untuk menciptakan bentuk, pola, atau struktur visual."
    },
    {
        q: "Objek geometris seperti lingkaran dan kotak termasuk dalam elemen desain ………",
        a: ["Line", "Color", "Form and Space", "Texture", "Repetition"],
        correct: 2,
        pembahasan: "Form mencakup bentuk geometris dan space mengacu pada ruang dalam desain."
    },
    {
        q: "Warna yang termasuk kategori warna hangat adalah ………",
        a: ["Biru dan hijau", "Merah dan oranye", "Hitam dan putih", "Abu-abu dan cokelat", "Hijau dan ungu"],
        correct: 1,
        pembahasan: "Warna hangat seperti merah, oranye, dan kuning memberikan kesan energi dan kehangatan."
    },
    {
        q: "Balance dalam desain grafis merupakan ………",
        a: [
            "Penekanan pada elemen tertentu",
            "Kesatuan antara elemen desain",
            "Keseimbangan visual antara elemen-elemen desain",
            "Pengulangan pola yang sama",
            "Kontras warna dalam desain"
        ],
        correct: 2,
        pembahasan: "Balance mengacu pada distribusi elemen desain sehingga menghasilkan harmoni visual."
    },
    {
        q: "Elemen desain grafis yang memberikan kesan visual atau taktil disebut ………",
        a: ["Line", "Texture", "Balance", "Form", "Type"],
        correct: 1,
        pembahasan: "Tekstur memberikan dimensi visual atau sensasi permukaan pada elemen desain."
    },
    {
        q: "Fungsi utama teks dalam desain grafis adalah ………",
        a: [
            "Memberikan pesan dan informasi",
            "Menambah dekorasi visual",
            "Membuat pola geometris",
            "Menyusun elemen bentuk",
            "Menambah kontras pada desain"
        ],
        correct: 0,
        pembahasan: "Teks digunakan untuk menyampaikan informasi atau pesan secara langsung kepada audiens."
    },
    {
        q: "Prinsip desain yang menciptakan kesatuan dalam elemen desain disebut ………",
        a: ["Unity", "Balance", "Repetition", "Contrast", "Continuity"],
        correct: 0,
        pembahasan: "Unity menciptakan hubungan yang harmonis antara elemen-elemen desain."
    },
    {
        q: "Warna biru, hijau, dan ungu termasuk kategori ………",
        a: ["Warna dingin", "Warna hangat", "Warna netral", "Warna monokrom", "Warna cerah"],
        correct: 0,
        pembahasan: "Warna dingin memberikan kesan tenang, sejuk, dan damai."
    },
    {
        q: "Software yang digunakan untuk desain berbasis vektor adalah ………",
        a: ["Adobe Photoshop", "CorelDRAW", "Blender", "AutoCAD", "Microsoft Publisher"],
        correct: 1,
        pembahasan: "CorelDRAW dirancang untuk membuat desain berbasis vektor."
    },
    {
        q: "Tekstur dan gambar dalam desain grafis dapat memberikan ………",
        a: [
            "Nilai estetika lebih tinggi",
            "Gangguan pada desain",
            "Efek negatif pada audiens",
            "Pengurangan elemen warna",
            "Kesalahan desain"
        ],
        correct: 0,
        pembahasan: "Tekstur dan gambar menambah dimensi visual dan nilai estetika."
    },
    {
        q: "Pengulangan elemen yang konsisten dalam desain disebut ………",
        a: ["Continuity", "Balance", "Repetition", "Unity", "Harmony"],
        correct: 2,
        pembahasan: "Repetition menciptakan pola atau ritme visual."
    },
    {
        q: "Contrast dalam desain grafis adalah ………",
        a: [
            "Perbedaan tajam antara elemen desain",
            "Kesamaan warna antara elemen",
            "Kesatuan elemen visual",
            "Penggunaan warna hangat",
            "Penempatan teks pada desain"
        ],
        correct: 0,
        pembahasan: "Kontras membuat perbedaan mencolok untuk menarik perhatian."
    },
    {
        q: "Nirmana adalah ………",
        a: [
            "Teknik mencetak gambar",
            "Ilmu tentang elemen dasar desain grafis",
            "Seni membuat pola geometris",
            "Prinsip harmoni dalam desain",
            "Pembuatan gambar berbasis pixel"
        ],
        correct: 1,
        pembahasan: "Nirmana mempelajari elemen dan prinsip desain grafis."
    },
    {
        q: "Software yang digunakan untuk desain berbasis tiga dimensi adalah ………",
        a: ["Adobe Illustrator", "Blender", "CorelDRAW", "Microsoft Publisher", "Adobe Photoshop"],
        correct: 1,
        pembahasan: "Blender digunakan untuk model 3D, animasi, dan rendering."
    },
    {
        q: "Bitmap adalah jenis gambar yang berbasis ………",
        a: ["Vektor", "Pixel", "Garis", "Warna", "Pola geometris"],
        correct: 1,
        pembahasan: "Bitmap terdiri dari pixel yang membentuk gambar digital."
    },
    {
        q: "Kesinambungan elemen dalam desain grafis dikenal sebagai ………",
        a: ["Unity", "Repetition", "Continuity", "Balance", "Proximity"],
        correct: 2,
        pembahasan: "Continuity menjaga alur dan kesinambungan visual."
    },
    {
        q: "Program untuk pengolahan gambar berbasis pixel adalah ………",
        a: ["CorelDRAW", "Blender", "Adobe Photoshop", "AutoCAD", "Microsoft Publisher"],
        correct: 2,
        pembahasan: "Photoshop digunakan untuk editing gambar pixel."
    },
    {
        q: "Elemen desain grafis yang digunakan untuk menambah kedalaman visual adalah ………",
        a: ["Color", "Texture", "Balance", "Unity", "Line"],
        correct: 1,
        pembahasan: "Tekstur memberikan efek kedalaman dan dimensi."
    },
    {
        q: "Manfaat mempelajari estetika dalam desain grafis adalah ………",
        a: [
            "Meningkatkan kemampuan menggunakan software desain",
            "Memperdalam rasa keindahan dan pemahaman seni",
            "Membantu membuat pola geometris",
            "Meningkatkan teknik pencetakan",
            "Memahami perbedaan pixel dan vektor"
        ],
        correct: 1,
        pembahasan: "Estetika membantu memahami keindahan dan nilai seni dalam desain."
    }
];
