let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa definisi multimedia menurut Hofstetter?",
        a: [
            "Penggunaan perangkat keras untuk mengolah data",
            "Penggunaan komputer untuk menyajikan dan menggabungkan teks, suara, gambar, animasi, dan video",
            "Pengolahan data digital untuk tujuan tertentu",
            "Penyajian data melalui media cetak",
            "Pemrosesan teks untuk hiburan"
        ],
        correct: 1,
        pembahasan: "Menurut Hofstetter, multimedia adalah penggunaan komputer untuk menyajikan berbagai elemen seperti teks, suara, gambar, animasi, dan video."
    },
    {
        q: "Apa yang dimaksud dengan teks dalam elemen multimedia?",
        a: [
            "Media yang paling kompleks",
            "Elemen dasar yang paling mudah dimengerti",
            "Gabungan antara gambar dan suara",
            "Media digital dengan ukuran besar",
            "Proses pencitraan melalui scanner"
        ],
        correct: 1,
        pembahasan: "Teks adalah elemen dasar multimedia yang paling mudah dipahami masyarakat."
    },
    {
        q: "Apa jenis grafik yang paling umum digunakan dalam multimedia?",
        a: ["Raster dan vektor", "Bitmap dan audio", "Animasi dan teks", "MIDI dan video", "Raster dan analog"],
        correct: 0,
        pembahasan: "Grafik dalam multimedia biasanya berupa grafik raster (bitmap) dan grafik vektor."
    },
    {
        q: "Apa fungsi utama audio dalam multimedia?",
        a: [
            "Menyediakan efek visual",
            "Meningkatkan estetika tampilan",
            "Menambah dimensi suara untuk mendukung informasi visual",
            "Mengganti elemen teks sepenuhnya",
            "Mengurangi kebutuhan memori"
        ],
        correct: 2,
        pembahasan: "Audio memberikan dimensi suara untuk mendukung informasi visual."
    },
    {
        q: "Elemen multimedia yang digunakan untuk menggambarkan gerakan adalah...",
        a: ["Teks", "Grafik", "Audio", "Animasi", "Video"],
        correct: 3,
        pembahasan: "Animasi menggambarkan gerakan melalui rangkaian frame."
    },
    {
        q: "Tujuan utama multimedia interaktif adalah...",
        a: ["Membuat presentasi menarik", "Memberikan hiburan", "Meningkatkan interaksi antara pengguna dan konten", "Mempermudah pengolahan data", "Mengganti metode komunikasi tradisional"],
        correct: 2,
        pembahasan: "Multimedia interaktif fokus meningkatkan interaksi pengguna dengan konten."
    },
    {
        q: "Teknologi yang memungkinkan suara disimpan secara digital adalah...",
        a: ["MIDI", "CD-ROM", "File Compression", "Digital Audio", "Bitmap"],
        correct: 3,
        pembahasan: "Digital Audio memungkinkan perekaman dan penyimpanan suara dalam format digital."
    },
    {
        q: "Apa yang dimaksud dengan hypertext?",
        a: ["Teks untuk animasi", "Teks dengan tautan ke lokasi lain", "Teks menjadi gambar", "Teks 3D", "Teks bergerak"],
        correct: 1,
        pembahasan: "Hypertext menghubungkan teks dengan lokasi informasi lain melalui link."
    },
    {
        q: "Manfaat utama animasi dalam multimedia adalah...",
        a: [
            "Memberikan hiburan saja",
            "Menyampaikan informasi secara dinamis dan visual",
            "Menggantikan teks sepenuhnya",
            "Mengurangi ukuran file",
            "Meningkatkan kecepatan data"
        ],
        correct: 1,
        pembahasan: "Animasi menyampaikan informasi dengan cara dinamis dan menarik."
    },
    {
        q: "Peran utama video dalam multimedia adalah...",
        a: [
            "Menyediakan elemen suara",
            "Memberikan efek estetis",
            "Menyampaikan informasi melalui gambar bergerak",
            "Mengganti teks",
            "Mengurangi durasi presentasi"
        ],
        correct: 2,
        pembahasan: "Video menyampaikan informasi melalui gambar bergerak."
    },
    {
        q: "Yang termasuk multimedia content production adalah...",
        a: ["Televisi, radio, game", "Film, tutorial, animasi", "Internet, cetak, CD-ROM", "Gambar, suara, teks", "Audio, grafik, video"],
        correct: 1,
        pembahasan: "Film, tutorial, dan animasi adalah bagian dari multimedia content production."
    },
    {
        q: "Apa yang dimaksud dengan multimedia non-linear?",
        a: [
            "Memiliki struktur tertentu",
            "Pengguna bebas menavigasi konten",
            "Menggunakan audio dan teks",
            "Alur cerita tetap",
            "Hanya menggunakan animasi"
        ],
        correct: 1,
        pembahasan: "Multimedia non-linear memungkinkan navigasi bebas."
    },
    {
        q: "Kelebihan multimedia interaktif dalam pendidikan adalah...",
        a: ["Menggantikan guru", "Membuat siswa aktif dalam belajar", "Mengurangi waktu belajar", "Mengganti buku cetak", "Meningkatkan biaya"],
        correct: 1,
        pembahasan: "Multimedia interaktif membuat siswa lebih aktif."
    },
    {
        q: "Manfaat multimedia dalam industri hiburan adalah...",
        a: ["Membuat video saja", "Mengembangkan efek visual untuk film dan animasi", "Mempercepat produksi film", "Menghilangkan perangkat keras", "Mengurangi audio"],
        correct: 1,
        pembahasan: "Multimedia digunakan untuk efek visual dalam film dan animasi."
    },
    {
        q: "Elemen utama pembuatan multimedia adalah...",
        a: ["Kamera dan mikrofon", "Teks, audio, grafik, video, animasi", "Internet dan televisi", "Software dan hardware", "CD-ROM dan USB"],
        correct: 1,
        pembahasan: "Ada lima elemen utama: teks, audio, grafik, video, dan animasi."
    },
    {
        q: "Tujuan utama multimedia dalam bisnis adalah...",
        a: ["Mengurangi biaya produksi", "Presentasi menarik", "Mengganti media cetak", "Membuat perusahaan modern", "Meningkatkan interaksi konsumen"],
        correct: 4,
        pembahasan: "Multimedia meningkatkan interaksi dengan konsumen."
    },
    {
        q: "Manfaat multimedia dalam bidang kesehatan adalah...",
        a: ["Mengurangi alat medis", "Menggantikan perangkat tradisional", "Mengurangi biaya perawatan", "Meningkatkan interaksi pasien-dokter", "Membatasi informasi"],
        correct: 3,
        pembahasan: "Multimedia meningkatkan komunikasi antara pasien dan dokter."
    },
    {
        q: "Apa yang dimaksud dengan MIDI?",
        a: [
            "Suara digital berkualitas tinggi",
            "Format file video",
            "File suara berkapasitas kecil",
            "Gambar bitmap",
            "Grafik animasi"
        ],
        correct: 2,
        pembahasan: "MIDI adalah format suara berukuran kecil."
    },
    {
        q: "Perbedaan multimedia linier dan non-linier adalah...",
        a: [
            "Linier hanya teks",
            "Linier mengikuti alur tetap, non-linier bebas dinavigasi",
            "Linier pakai animasi, non-linier tidak",
            "Linier lebih sederhana",
            "Linier hanya untuk pendidikan"
        ],
        correct: 1,
        pembahasan: "Linier = alur tetap; non-linier = bebas navigasi."
    },
    {
        q: "Apa yang dimaksud multimedia communication?",
        a: [
            "Media massa seperti TV dan radio untuk informasi",
            "Kombinasi teks dan gambar",
            "Animasi interaktif",
            "Komputer untuk menyimpan data",
            "Integrasi audio-video pada perangkat keras"
        ],
        correct: 0,
        pembahasan: "Multimedia communication menggunakan media massa seperti TV, radio, dan internet."
    },
    {
        q: "Manfaat multimedia di bidang teknik adalah...",
        a: [
            "Mengurangi pelatihan",
            "Membuat simulasi untuk pelatihan dan desain",
            "Menggantikan alat fisik",
            "Mengurangi biaya perangkat",
            "Membatasi software"
        ],
        correct: 1,
        pembahasan: "Multimedia digunakan untuk simulasi teknik."
    },
    {
        q: "Kelebihan elemen grafik dalam multimedia adalah...",
        a: [
            "Mengganti semua teks",
            "Menyampaikan informasi sulit secara visual",
            "Membuat konten kompleks",
            "Meningkatkan kapasitas penyimpanan",
            "Mempercepat pembuatan konten"
        ],
        correct: 1,
        pembahasan: "Grafik menyampaikan informasi yang sulit dijelaskan dengan kata-kata."
    },
    {
        q: "Peran animasi dalam multimedia interaktif adalah...",
        a: [
            "Menambah ukuran file",
            "Mengganti teks dan grafik",
            "Memberikan visualisasi gerakan",
            "Mengurangi perangkat keras",
            "Memperpendek durasi presentasi"
        ],
        correct: 2,
        pembahasan: "Animasi memberikan visualisasi gerakan."
    },
    {
        q: "Apa yang dimaksud multimedia content production?",
        a: [
            "Produksi teks dan grafik",
            "Penggunaan berbagai media untuk informasi atau hiburan",
            "Gabungan video dan audio",
            "Pembuatan gambar digital",
            "Media cetak dengan teknologi komputer"
        ],
        correct: 1,
        pembahasan: "Content production = menghasilkan konten multimedia."
    },
    {
        q: "Fungsi utama teks dalam multimedia adalah...",
        a: [
            "Elemen pendukung",
            "Media utama menyampaikan informasi",
            "Mengurangi kompleksitas",
            "Menambah efek visual",
            "Menggantikan animasi"
        ],
        correct: 1,
        pembahasan: "Teks menyampaikan informasi inti."
    },
    {
        q: "Elemen multimedia yang berfungsi menyampaikan informasi dengan suara adalah...",
        a: ["Teks", "Grafik", "Audio", "Video", "Animasi"],
        correct: 2,
        pembahasan: "Audio digunakan untuk narasi, musik, dan efek."
    },
    {
        q: "Perbedaan multimedia content production dan communication adalah...",
        a: [
            "Production fokus publikasi, communication pada distribusi",
            "Production menghasilkan konten, communication menyebarkan konten",
            "Production hanya teks, communication video",
            "Production media cetak, communication digital",
            "Production untuk promosi, communication untuk edukasi"
        ],
        correct: 1,
        pembahasan: "Content production membuat konten; communication menyebarkannya."
    },
    {
        q: "Manfaat utama animasi dalam multimedia adalah...",
        a: [
            "Mempercepat presentasi",
            "Menjelaskan konsep kompleks dengan gerakan",
            "Mengganti teks",
            "Mengurangi interaktivitas",
            "Menyederhanakan konten"
        ],
        correct: 1,
        pembahasan: "Animasi menjelaskan konsep melalui visualisasi gerakan."
    },
    {
        q: "Karakteristik multimedia linier adalah...",
        a: [
            "User mengontrol urutan",
            "Informasi disajikan berurutan tanpa kontrol pengguna",
            "Menggunakan animasi sebagai utama",
            "Audio sebagai unsur utama",
            "Tidak butuh hardware"
        ],
        correct: 1,
        pembahasan: "Multimedia linier berjalan otomatis tanpa kontrol pengguna."
    },
    {
        q: "Mengapa multimedia penting dalam pendidikan?",
        a: [
            "Menggantikan guru",
            "Menyederhanakan belajar",
            "Mempermudah penyampaian informasi dengan berbagai media",
            "Mengurangi waktu belajar",
            "Mengurangi biaya sekolah"
        ],
        correct: 2,
        pembahasan: "Multimedia mempermudah penyampaian informasi dengan kombinasi media."
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
