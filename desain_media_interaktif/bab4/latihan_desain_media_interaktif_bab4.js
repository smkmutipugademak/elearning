let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan multimedia?",
        a: [
            "Pengolahan data numerik",
            "Gabungan berbagai media untuk menyampaikan informasi",
            "Teknologi komunikasi digital",
            "Pembuatan video secara manual",
            "Penyimpanan data pada komputer"
        ],
        correct: 1,
        pembahasan: "Multimedia adalah penggabungan beberapa media (teks, audio, grafis, video, dll.) untuk menyampaikan informasi secara interaktif."
    },
    {
        q: "Komponen utama dari produksi konten multimedia meliputi, kecuali:",
        a: [
            "Audio",
            "Video",
            "Animasi",
            "Data spreadsheet",
            "Grafis"
        ],
        correct: 3,
        pembahasan: "Data spreadsheet bukan komponen utama dalam produksi multimedia."
    },
    {
        q: "Apa fungsi utama grafis dalam multimedia?",
        a: [
            "Menyampaikan informasi secara visual",
            "Sebagai dekorasi tambahan",
            "Menggantikan teks dalam aplikasi",
            "Mengurangi ukuran file",
            "Mempermudah penggunaan audio"
        ],
        correct: 0,
        pembahasan: "Grafis digunakan untuk menyampaikan informasi secara visual agar mudah dipahami."
    },
    {
        q: "Apa yang dimaksud dengan resolusi layar?",
        a: [
            "Jumlah bit per pixel",
            "Jumlah titik (dots) per inci pada layar monitor",
            "Kapasitas penyimpanan layar",
            "Ukuran layar dalam inci",
            "Kompresi ukuran file"
        ],
        correct: 1,
        pembahasan: "Resolusi layar adalah jumlah titik per inci (dpi) untuk menampilkan gambar pada monitor."
    },
    {
        q: "Manfaat penggunaan teks dalam multimedia adalah:",
        a: [
            "Menambah estetika aplikasi",
            "Menyampaikan informasi dengan efisien",
            "Menggantikan audio",
            "Mengurangi ukuran aplikasi",
            "Sebagai latar belakang"
        ],
        correct: 1,
        pembahasan: "Teks menyampaikan informasi secara langsung dan efisien."
    },
    {
        q: "Salah satu parameter pemilihan gambar digital adalah:",
        a: [
            "Format file audio",
            "Resolusi bit warna",
            "Ukuran font",
            "Kecepatan animasi",
            "Kapasitas RAM"
        ],
        correct: 1,
        pembahasan: "Resolusi bit warna menentukan jumlah warna dalam gambar."
    },
    {
        q: "Apa yang dimaksud dengan vector image?",
        a: [
            "Gambar berbasis pixel",
            "Gambar yang disimpan sebagai persamaan matematika",
            "Gambar beresolusi rendah",
            "Gambar yang dikompresi",
            "Gambar berbasis animasi"
        ],
        correct: 1,
        pembahasan: "Vector image disimpan dalam bentuk persamaan matematika."
    },
    {
        q: "Manfaat utama animasi dalam multimedia adalah:",
        a: [
            "Menambah elemen visual yang menarik",
            "Mengurangi ukuran aplikasi",
            "Menggantikan teks",
            "Mempercepat komputasi",
            "Mengurangi kebutuhan grafis"
        ],
        correct: 0,
        pembahasan: "Animasi meningkatkan daya tarik visual aplikasi."
    },
    {
        q: "Apa yang dimaksud amplitude pada gelombang suara?",
        a: [
            "Frekuensi gelombang",
            "Tingkat kekerasan suara",
            "Panjang gelombang",
            "Waktu gelombang bergetar",
            "Kecepatan suara"
        ],
        correct: 1,
        pembahasan: "Amplitude menunjukkan kekerasan suara."
    },
    {
        q: "Jenis animasi yang melibatkan pembuatan gambar frame-by-frame disebut:",
        a: ["Animasi 2D", "Animasi vektor", "Animasi frame", "Animasi digital", "Animasi 3D"],
        correct: 2,
        pembahasan: "Animasi frame dibuat dengan menggambar setiap frame secara manual."
    },
    {
        q: "Tujuan utama audio dalam multimedia adalah:",
        a: ["Sebagai latar belakang", "Menyampaikan informasi melalui suara", "Mengganti teks", "Memperkecil ukuran aplikasi", "Meningkatkan resolusi video"],
        correct: 1,
        pembahasan: "Audio membantu menyampaikan informasi melalui suara."
    },
    {
        q: "Resolusi gambar 300 dpi digunakan untuk:",
        a: ["Cetakan berkualitas tinggi", "Tampilan monitor", "Animasi", "Video", "Editing audio"],
        correct: 0
    },
    {
        q: "Perbedaan utama animasi 2D dan 3D adalah:",
        a: [
            "3D melibatkan modeling",
            "2D lebih realistis",
            "3D menggunakan warna terbatas",
            "2D hanya untuk kartun",
            "3D tidak memerlukan rendering"
        ],
        correct: 0
    },
    {
        q: "Format file audio yang umum digunakan adalah:",
        a: ["JPEG", "MP3", "PNG", "TXT", "AVI"],
        correct: 1
    },
    {
        q: "Fungsi processor audio adalah:",
        a: [
            "Meningkatkan memori",
            "Memproses sinyal untuk manipulasi nada",
            "Menggantikan speaker",
            "Mengurangi noise",
            "Menambah ukuran file"
        ],
        correct: 1
    },
    {
        q: "Tujuan penggunaan background dalam multimedia adalah:",
        a: [
            "Menambah warna",
            "Memberikan tema dan informasi tambahan",
            "Mengurangi beban memori",
            "Menyembunyikan kesalahan",
            "Menampilkan animasi"
        ],
        correct: 1
    },
    {
        q: "Format bitmap adalah:",
        a: [
            "Gambar berbasis algoritma",
            "Gambar berbasis pixel dengan resolusi tetap",
            "Gambar beresolusi dinamis",
            "Gambar berbasis teks",
            "Gambar yang tidak dapat diperbesar"
        ],
        correct: 1
    },
    {
        q: "Keuntungan vector image dibanding bitmap adalah:",
        a: [
            "Tidak butuh software",
            "Dapat diperbesar tanpa kehilangan kualitas",
            "Ukuran file lebih besar",
            "Tidak dapat digunakan di multimedia",
            "Menggunakan lebih banyak warna"
        ],
        correct: 1
    },
    {
        q: "Teks untuk menampilkan informasi ringkas adalah:",
        a: ["Bullet text", "Paragraf panjang", "Grafik teks", "Bitmap text", "Vektor text"],
        correct: 0
    },
    {
        q: "Frame rate dalam animasi adalah:",
        a: [
            "Jumlah pixel",
            "Jumlah frame per detik",
            "Kecepatan rendering",
            "Waktu pemrosesan",
            "Jumlah gambar dalam file"
        ],
        correct: 1
    },
    {
        q: "Elemen multimedia interaktif adalah:",
        a: ["Video, teks, grafis, mouse", "Audio, video, grafis, teks", "Animasi, keyboard", "Audio, mouse", "Teks, perangkat keras"],
        correct: 1
    },
    {
        q: "Animasi dengan pergerakan objek sepanjang jalur disebut:",
        a: ["Frame animation", "Path animation", "Morphing", "Vector animation", "Keyframe animation"],
        correct: 1
    },
    {
        q: "Frekuensi pada gelombang suara adalah:",
        a: [
            "Tingkat volume suara",
            "Waktu satu siklus",
            "Jumlah siklus per detik",
            "Periode antara gelombang",
            "Amplitude suara"
        ],
        correct: 2
    },
    {
        q: "Mengubah sinyal analog menjadi digital disebut:",
        a: ["Rendering", "Capturing", "Compressing", "Mixing", "Editing"],
        correct: 1
    },
    {
        q: "Defragmentasi file sebelum burning CD-ROM bertujuan untuk:",
        a: [
            "Mempercepat proses pembakaran",
            "Mengurangi ukuran file",
            "Mengatur ulang data CD",
            "Menambahkan file",
            "Menghapus file"
        ],
        correct: 0
    },
    {
        q: "Perangkat yang mengubah energi akustik menjadi sinyal listrik adalah:",
        a: ["Processor", "Transducer", "Amplifier", "Equalizer", "Speaker"],
        correct: 1
    },
    {
        q: "Cara memvisualisasikan data suara adalah:",
        a: ["Histogram", "Diagram gelombang", "Grafik pie", "Tabel", "Skala warna"],
        correct: 1
    },
    {
        q: "Keyframe adalah:",
        a: [
            "Gambar awal dan akhir animasi",
            "Semua gambar animasi",
            "Gambar utama video",
            "Efek tambahan",
            "Teknik editing"
        ],
        correct: 0
    },
    {
        q: "Tujuan kompresi video adalah:",
        a: [
            "Meningkatkan kualitas",
            "Mengurangi ukuran file",
            "Menambah efek",
            "Mempercepat frame rate",
            "Mengurangi durasi"
        ],
        correct: 1
    },
    {
        q: "Software untuk mengedit video adalah:",
        a: ["CorelDraw", "Adobe Premiere", "Word", "Audition", "AutoCAD"],
        correct: 1
    },
    {
        q: "Fungsi amplifikasi dalam audio adalah:",
        a: [
            "Mengurangi sinyal",
            "Memperbesar sinyal listrik",
            "Mengubah suara jadi sinyal",
            "Menyaring audio",
            "Menambah efek"
        ],
        correct: 1
    },
    {
        q: "Amplitude adalah:",
        a: [
            "Frekuensi",
            "Tinggi rendahnya gelombang suara",
            "Waktu gelombang",
            "Panjang gelombang",
            "Kecepatan suara"
        ],
        correct: 1
    },
    {
        q: "Animasi yang melibatkan modeling, animating, rendering adalah:",
        a: ["Frame", "Path", "2D", "3D", "Vector"],
        correct: 3
    },
    {
        q: "Saat menggunakan teks dalam multimedia, yang diperhatikan adalah:",
        a: [
            "Jenis font, ukuran, warna",
            "Perangkat keras",
            "Resolusi layar",
            "Format file",
            "Efek animasi"
        ],
        correct: 0
    },
    {
        q: "Morphing adalah:",
        a: [
            "Perubahan objek secara bertahap ke bentuk lain",
            "Pergerakan sepanjang jalur",
            "Transisi frame",
            "Animasi 3D dan 2D",
            "Rendering real-time"
        ],
        correct: 0
    },
    {
        q: "Teks artistik dalam multimedia disebut:",
        a: ["Paragraph text", "Artistic text", "Bitmap text", "Vector text", "Plain text"],
        correct: 1
    },
    {
        q: "Kelebihan video digital adalah:",
        a: [
            "Transfer cepat",
            "Tidak butuh perangkat keras",
            "Kualitas suara rendah",
            "Mudah diedit dan disimpan",
            "Memakai memori sedikit"
        ],
        correct: 3
    },
    {
        q: "Sinyal audio yang direkam digital disebut:",
        a: ["Sinyal analog", "Frekuensi rendah", "Sinyal listrik", "Digital audio", "Amplifikasi"],
        correct: 3
    },
    {
        q: "Pemilihan background harus memperhatikan:",
        a: [
            "Ukuran file",
            "Resolusi perangkat",
            "Jenis font",
            "Jenis animasi",
            "Format file"
        ],
        correct: 1
    },
    {
        q: "Screen resolution adalah:",
        a: [
            "Ukuran file gambar",
            "Resolusi layar untuk menampilkan gambar",
            "Kecepatan refresh",
            "Kontras warna",
            "Kompresi gambar"
        ],
        correct: 1
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
