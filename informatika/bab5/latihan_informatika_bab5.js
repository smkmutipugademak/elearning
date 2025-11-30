let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Jaringan komputer yang menghubungkan perangkat dalam jarak dekat disebut ………",
        a: ["WAN", "MAN", "LAN", "Internet", "VPN"],
        correct: 2,
        pembahasan: "LAN digunakan untuk area kecil seperti rumah atau kantor."
    },
    {
        q: "Jaringan yang mencakup geografis luas seperti antarnegara adalah ………",
        a: ["LAN", "MAN", "WAN", "Hybrid", "Star"],
        correct: 2,
        pembahasan: "WAN mencakup area sangat luas."
    },
    {
        q: "Topologi yang menghubungkan perangkat dalam pola lingkaran adalah ………",
        a: ["Bus", "Star", "Mesh", "Ring", "Hybrid"],
        correct: 3,
        pembahasan: "Topologi ring membentuk lingkaran tertutup."
    },
    {
        q: "Keunggulan dari topologi star adalah ………",
        a: [
            "Biaya instalasi rendah",
            "Kemudahan pengembangan jaringan",
            "Tidak ada konsentrator",
            "Sinyal bergerak dua arah",
            "Semua kabel ke satu node"
        ],
        correct: 1,
        pembahasan: "Topologi star mudah dikembangkan."
    },
    {
        q: "Karakteristik utama topologi mesh adalah ………",
        a: [
            "Menggunakan terminator",
            "Semua perangkat terhubung langsung",
            "Menggunakan kabel coaxial",
            "Hanya satu arah sinyal",
            "Tidak memerlukan kabel tambahan"
        ],
        correct: 1,
        pembahasan: "Mesh menghubungkan semua perangkat secara langsung."
    },
    {
        q: "Jaringan komputer berbasis kabel disebut ………",
        a: ["Wireless Network", "Hybrid Network", "Wired Network", "LAN", "MAN"],
        correct: 2,
        pembahasan: "Wired network menggunakan kabel sebagai media."
    },
    {
        q: "Protokol utama untuk komunikasi data di internet adalah ………",
        a: ["HTTP", "FTP", "TCP/IP", "SMTP", "VPN"],
        correct: 2,
        pembahasan: "TCP/IP adalah protokol dasar internet."
    },
    {
        q: "Jenis koneksi internet dengan modem dial-up memiliki kecepatan maksimal ………",
        a: ["128 Kbps", "64 Kbps", "56 Kbps", "1 Mbps", "512 Kbps"],
        correct: 2,
        pembahasan: "Dial-up maksimal 56 Kbps."
    },
    {
        q: "Teknologi internet berkecepatan tinggi melalui saluran telepon disebut ………",
        a: ["Dial-up", "ADSL", "Satelit", "Wi-Fi", "Ethernet"],
        correct: 1,
        pembahasan: "ADSL menggunakan saluran telepon untuk kecepatan tinggi."
    },
    {
        q: "Sistem enkripsi data yang menggunakan dua kunci disebut ………",
        a: ["Simetris", "Asimetris", "Blok", "File Encryption", "Cloud Encryption"],
        correct: 1,
        pembahasan: "Asimetris memakai kunci publik dan privat."
    },
    {
        q: "Jenis koneksi internet tercepat adalah ………",
        a: ["ADSL", "Dial-up", "Leased Line", "Satelit", "Fiber-optic"],
        correct: 4,
        pembahasan: "Fiber-optic memberikan kecepatan tertinggi."
    },
    {
        q: "Teknologi 3G memungkinkan pengiriman data hingga ………",
        a: ["384 Kbps", "56 Kbps", "64 Kbps", "2 Mbps", "1 Mbps"],
        correct: 0,
        pembahasan: "3G memiliki kecepatan 384 Kbps."
    },
    {
        q: "Keuntungan utama dari topologi bus adalah ………",
        a: ["Kecepatan tinggi", "Harga kabel murah", "Menggunakan switch", "Sangat fleksibel", "Tidak membutuhkan terminator"],
        correct: 1,
        pembahasan: "Topologi bus murah karena kabel minim."
    },
    {
        q: "Data yang dikirim secara bersamaan dalam topologi star dapat menyebabkan ………",
        a: ["Kecepatan meningkat", "Node mati", "Collision", "Konsentrator mati", "Jaringan putus"],
        correct: 2,
        pembahasan: "Collision terjadi saat dua data dikirim bersamaan."
    },
    {
        q: "Kelebihan topologi hybrid adalah ………",
        a: ["Murah", "Sederhana", "Fleksibel", "Tanpa kabel tambahan", "Tidak perlu node pusat"],
        correct: 2,
        pembahasan: "Hybrid fleksibel karena gabungan beberapa topologi."
    },
    {
        q: "Proses mengubah sinyal digital menjadi analog disebut ………",
        a: ["Multiplexing", "Modulation", "Encoding", "Compression", "Decoding"],
        correct: 1,
        pembahasan: "Modulation mengubah digital ke analog."
    },
    {
        q: "Tujuan utama enkripsi data adalah ………",
        a: ["Mempercepat transfer", "Melindungi data", "Menambah storage", "Mempercepat proses", "Menambah bandwidth"],
        correct: 1,
        pembbahasan: "Enkripsi melindungi data dari akses ilegal."
    },
    {
        q: "Teknologi Wi-Fi memungkinkan ………",
        a: ["Koneksi kabel", "Jaringan wireless", "Kecepatan lambat", "Menggunakan ADSL", "Hanya 1 perangkat"],
        correct: 1,
        pembahasan: "Wi-Fi adalah jaringan nirkabel."
    },
    {
        q: "Topologi yang menggunakan sub-node adalah ………",
        a: ["Star", "Mesh", "Ring", "Hierarchical", "Hybrid"],
        correct: 3,
        pembahasan: "Hierarchical memakai sub-node untuk koneksi."
    },
    {
        q: "Keuntungan utama teknologi EDGE adalah ………",
        a: ["Lebih cepat dari 3G", "Meningkatkan efisiensi data", "Untuk 4G", "Pakai satelit", "Biaya rendah"],
        correct: 1,
        pembahasan: "EDGE meningkatkan efisiensi spektrum data."
    },
    {
        q: "Topologi yang memiliki semua perangkat saling terhubung adalah ………",
        a: ["Ring", "Star", "Mesh", "Bus", "Hybrid"],
        correct: 2,
        pembahasan: "Mesh menghubungkan semua perangkat secara langsung."
    },
    {
        q: "Kelemahan utama topologi bus adalah ………",
        a: ["Biaya tinggi", "Jaringan mati jika kabel putus", "Tidak fleksibel", "Perlu node pusat", "Instalasi rumit"],
        correct: 1,
        pembahasan: "Jika kabel utama putus, seluruh jaringan mati."
    },
    {
        q: "Komponen utama dalam koneksi internet adalah ………",
        a: ["UTP", "TCP/IP", "Hub", "Monitor", "Router"],
        correct: 1,
        pembahasan: "TCP/IP adalah dasar komunikasi internet."
    },
    {
        q: "Fungsi utama satelit VSAT adalah ………",
        a: ["Koneksi wireless", "Internet di area terpencil", "Menyimpan data", "Menghubungkan LAN", "Atur traffic data"],
        correct: 1,
        pembahasan: "VSAT digunakan untuk daerah sulit dijangkau."
    },
    {
        q: "Teknologi 4G lebih cepat dibandingkan ………",
        a: ["EDGE", "Wi-Fi", "LAN", "MAN", "WAN"],
        correct: 0,
        pembahasan: "4G adalah pengembangan dari EDGE."
    },
    {
        q: "Tujuan enkripsi data adalah ………",
        a: ["Meningkatkan kecepatan", "Mengurangi beban", "Melindungi privasi", "Mempercepat file besar", "Simpan data permanen"],
        correct: 2,
        pembahasan: "Enkripsi menjaga privasi dan keamanan data."
    },
    {
        q: "Dalam topologi star, pusat koneksi disebut ………",
        a: ["Router", "Server", "Hub atau Switch", "Node", "Repeater"],
        correct: 2,
        pembahasan: "Star terpusat pada hub/switch."
    },
    {
        q: "Protokol untuk mengakses halaman web adalah ………",
        a: ["FTP", "HTTP", "SMTP", "TCP", "IP"],
        correct: 1,
        pembahasan: "HTTP digunakan membuka web."
    },
    {
        q: "Kelemahan utama topologi mesh adalah ………",
        a: ["Biaya tinggi", "Tidak fleksibel", "Kabel minimal", "Tidak mendukung besar", "Sinyal sering putus"],
        correct: 0,
        pembahasan: "Mesh membutuhkan banyak kabel."
    },
    {
        q: "Keuntungan utama topologi hybrid adalah ………",
        a: ["Mudah diatur", "Gabungkan beberapa topologi", "Murah", "Tanpa manajemen", "Instalasi sederhana"],
        correct: 1,
        pembahasan: "Hybrid fleksibel dan bisa dikombinasikan."
    },
    {
        q: "Keunggulan ADSL dibandingkan dial-up adalah ………",
        a: ["Kecepatan lebih rendah", "Bisa internet & telepon bersamaan", "Perlu modem tambahan", "Tidak untuk streaming", "Biaya lebih murah"],
        correct: 1,
        pembahasan: "ADSL tidak mengganggu telepon suara."
    },
    {
        q: "Perangkat yang menghubungkan jaringan lokal ke internet adalah ………",
        a: ["Modem", "Hub", "Switch", "LAN Card", "Repeater"],
        correct: 0,
        pembahasan: "Modem menghubungkan ke ISP."
    },
    {
        q: "Teknologi EDGE adalah ………",
        a: ["Perkembangan 2G", "Berbasis satelit", "Untuk LAN", "Standar keamanan", "Perangkat enkripsi"],
        correct: 0,
        pembahasan: "EDGE adalah peningkatan dari 2G."
    },
    {
        q: "Karakteristik utama topologi ring adalah ………",
        a: ["Semua ke pusat", "Pola lingkaran", "Kabel utama lurus", "Tidak pakai node", "Semua terhubung langsung"],
        correct: 1,
        pembahasan: "Topologi ring membentuk lingkaran."
    },
    {
        q: "Proses mengubah sinyal analog menjadi digital disebut ………",
        a: ["Decoding", "Modulation", "Demodulation", "Multiplexing", "Encoding"],
        correct: 2,
        pembahasan: "Demodulation mengubah analog ke digital."
    },
    {
        q: "Koneksi Wi-Fi menggunakan ………",
        a: ["Satelit", "UTP", "Nirkabel", "Serat optik", "Dial-up"],
        correct: 2,
        pembahasan: "Wi-Fi adalah teknologi wireless."
    },
    {
        q: "Proses transfer data antarperangkat disebut ………",
        a: ["Synchronization", "Communication", "Sharing", "Transmission", "Collaboration"],
        correct: 3,
        pembahasan: "Transmission adalah transfer data."
    },
    {
        q: "Enkripsi simetris menggunakan ………",
        a: ["Dua kunci", "Satu kunci untuk enkripsi & dekripsi", "Kunci publik", "Kunci privat", "Tidak memakai kunci"],
        correct: 1,
        pembahasan: "Simetris memakai satu kunci yang sama."
    },
    {
        q: "Kelebihan topologi bus adalah ………",
        a: ["Tidak perlu kabel tambahan", "Mudah dikembangkan", "Biaya instalasi rendah", "Kecepatan tinggi", "Tidak perlu terminator"],
        correct: 2,
        pembahasan: "Topologi bus murah karena satu kabel utama."
    },
    {
        q: "Teknologi internet berbasis serat optik unggul karena ………",
        a: ["Lebih murah", "Kecepatan sangat tinggi", "Instalasi mudah", "Tidak butuh perangkat", "Latensi tinggi"],
        correct: 1,
        pembahasan: "Fiber-optic sangat cepat dan stabil."
    }
];
