let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Grafis bitmap menggunakan struktur data yang terdiri dari...",
        a: [
            "Garis dan kurva",
            "Formula matematika",
            "Titik-titik berwarna (pixel)",
            "Objek tiga dimensi",
            "Rona warna"
        ],
        correct: 2,
        pembahasan: "Bitmap adalah gambar yang terbentuk dari titik-titik berwarna atau pixel yang membentuk citra visual."
    },
    {
        q: "Keuntungan utama grafis vektor dibandingkan bitmap adalah...",
        a: [
            "Ukuran file lebih besar",
            "Proses komputasi lebih cepat",
            "Kualitas tetap jelas ketika diperbesar",
            "Memiliki warna lebih akurat",
            "Kompatibel dengan semua printer"
        ],
        correct: 2,
        pembahasan: "Grafis vektor tidak pecah saat diperbesar karena berbasis formula matematika."
    },
    {
        q: "Program aplikasi berikut yang termasuk pengolah grafis bitmap adalah...",
        a: [
            "CorelDraw",
            "Adobe Illustrator",
            "Paint",
            "GIMP",
            "Semua jawaban benar"
        ],
        correct: 4,
        pembahasan: "Paint, GIMP, dan Photoshop adalah pengolah bitmap. CorelDraw dan Illustrator juga dapat mengolah bitmap meskipun utama vektor."
    },
    {
        q: "Teknik fotografi untuk menangkap objek bergerak dengan efek blur pada latar belakang disebut...",
        a: [
            "Zooming",
            "Panning",
            "Framing",
            "Depth of Field",
            "Bulb"
        ],
        correct: 1,
        pembahasan: "Panning menjaga objek tetap fokus namun membuat latar belakang blur."
    },
    {
        q: "Ciri utama grafis bitmap adalah...",
        a: [
            "File berbasis garis",
            "File berbasis pixel",
            "Tidak bergantung resolusi",
            "Ukuran file kecil",
            "Fleksibel untuk 3D"
        ],
        correct: 1,
        pembahasan: "Bitmap dibangun dari banyak pixel sehingga sangat bergantung pada resolusi."
    },
    {
        q: "Software pengolah grafis vektor adalah...",
        a: [
            "Corel PhotoPaint",
            "Adobe Photoshop",
            "GIMP",
            "Paint",
            "Adobe Illustrator"
        ],
        correct: 4,
        pembahasan: "Adobe Illustrator adalah software pemrosesan grafis vektor."
    },
    {
        q: "Faktor paling penting dalam fotografi adalah...",
        a: [
            "Kamera",
            "Cahaya",
            "Tripod",
            "Objek foto",
            "Setting lensa"
        ],
        correct: 1,
        pembahasan: "Cahaya menentukan hasil kualitas foto secara keseluruhan."
    },
    {
        q: "Format file berikut yang bukan berbasis bitmap adalah...",
        a: [
            "JPEG",
            "PNG",
            "SVG",
            "GIF",
            "BMP"
        ],
        correct: 2,
        pembahasan: "SVG adalah format grafis vektor."
    },
    {
        q: "Perbedaan utama bitmap dan vektor adalah...",
        a: [
            "Bitmap memiliki ukuran file kecil",
            "Vektor berbasis pixel",
            "Vektor tidak kehilangan kualitas saat diperbesar",
            "Bitmap menggunakan kurva matematika",
            "Bitmap memiliki resolusi lebih tinggi"
        ],
        correct: 2,
        pembahasan: "Grafis vektor tetap tajam dalam berbagai ukuran karena skalanya tidak bergantung pixel."
    },
    {
        q: "Program yang paling cocok untuk membuat desain logo adalah...",
        a: [
            "Paint",
            "Adobe Illustrator",
            "Corel PhotoPaint",
            "GIMP",
            "Photoshop"
        ],
        correct: 1,
        pembahasan: "Logo ideal dibuat dengan vektor, sehingga Adobe Illustrator paling sesuai."
    },
    {
        q: "Format file berikut termasuk file vektor adalah...",
        a: [
            "JPEG",
            "PNG",
            "SVG",
            "BMP",
            "GIF"
        ],
        correct: 2,
        pembahasan: "SVG adalah format file berbasis vektor."
    },
    {
        q: "Teknik fotografi untuk mendapatkan fokus ruang tajam adalah...",
        a: [
            "Zooming",
            "Depth of Field",
            "Bulb",
            "Panning",
            "Slow Motion"
        ],
        correct: 1,
        pembahasan: "Depth of Field mengatur ruang tajam pada objek foto."
    },
    {
        q: "Keunggulan grafis vektor adalah...",
        a: [
            "Ukuran file kecil",
            "Kualitas rendah",
            "Bergantung pixel",
            "Memerlukan memori besar",
            "Tidak cocok untuk logo"
        ],
        correct: 0,
        pembahasan: "File vektor kecil karena hanya menyimpan rumus matematika."
    },
    {
        q: "Software berikut tidak termasuk pengolah grafis bitmap...",
        a: [
            "Corel PhotoPaint",
            "GIMP",
            "Adobe Illustrator",
            "Paint",
            "Photoshop"
        ],
        correct: 2,
        pembahasan: "Adobe Illustrator adalah software vektor."
    },
    {
        q: "Kelemahan utama grafik bitmap adalah...",
        a: [
            "Ukuran file besar",
            "Tidak bergantung resolusi",
            "Tidak membutuhkan memori",
            "Tetap baik saat diperbesar",
            "Cepat diproses"
        ],
        correct: 0,
        pembahasan: "Bitmap menggunakan pixel sehingga ukuran file besar dan mudah pecah."
    },
    {
        q: "Software yang cocok digunakan untuk mengedit foto adalah...",
        a: [
            "CorelDraw",
            "Adobe Photoshop",
            "Inkscape",
            "Freehand",
            "Microsoft Word"
        ],
        correct: 1,
        pembahasan: "Photoshop adalah software edit foto profesional."
    },
    {
        q: "Teknik fotografi untuk menangkap gerakan lambat adalah...",
        a: [
            "Stop Action",
            "Slow Motion",
            "Panning",
            "Bulb",
            "Zooming"
        ],
        correct: 1,
        pembahasan: "Slow Motion digunakan untuk menangkap gerakan lambat."
    },
    {
        q: "Resolusi gambar bitmap diukur dalam satuan...",
        a: [
            "Format file",
            "Panjang dan lebar",
            "Pixel per inch (ppi)",
            "Warna pixel",
            "Ukuran dimensi"
        ],
        correct: 2,
        pembahasan: "Resolusi bitmap diukur berdasarkan pixel per inch."
    },
    {
        q: "Pengaturan ruang tajam dipengaruhi oleh...",
        a: [
            "ISO kamera",
            "Focal length",
            "Resolusi kamera",
            "Ukuran sensor",
            "File format"
        ],
        correct: 1,
        pembahasan: "Focal length sangat memengaruhi depth of field."
    },
    {
        q: "File grafis bitmap cocok digunakan untuk...",
        a: [
            "Logo",
            "Foto",
            "Diagram",
            "Ikon",
            "Sketsa"
        ],
        correct: 1,
        pembahasan: "Bitmap cocok untuk foto karena dapat menampilkan detail tinggi."
    }
];