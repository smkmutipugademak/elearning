let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa kepanjangan dari CSS?",
        a: [
            "Cascading Style Selector",
            "Cascading Style Sheet",
            "Custom Style Sheet",
            "Custom Style Selector",
            "Common Style System"
        ],
        correct: 1,
        pembahasan: "CSS adalah singkatan dari Cascading Style Sheet, digunakan untuk mengatur tampilan halaman web."
    },
    {
        q: "Fungsi utama CSS adalah untuk...?",
        a: [
            "Membuat konten baru di HTML",
            "Menambahkan animasi di JavaScript",
            "Mengatur gaya tampilan halaman web",
            "Membuat basis data website",
            "Menambahkan audio ke halaman web"
        ],
        correct: 2,
        pembahasan: "CSS digunakan untuk mengatur layout, warna, font, dan elemen visual lainnya."
    },
    {
        q: "Apa saja tiga tipe utama CSS?",
        a: [
            "Internal, Inline, Embedded",
            "Inline, External, Embedded",
            "External, Embedded, Local",
            "Internal, Inline, External",
            "Inline, Local, Embedded"
        ],
        correct: 3,
        pembahasan: "CSS dapat ditulis dalam tiga cara: Inline, Internal, dan External."
    },
    {
        q: "Pada versi CSS3, fitur apa yang diperkenalkan?",
        a: [
            "Hanya untuk layout dasar",
            "Tidak mendukung animasi",
            "Media queries dan animasi",
            "Tidak ada perubahan dari CSS2",
            "Dukungan untuk JavaScript"
        ],
        correct: 2,
        pembahasan: "CSS3 memperkenalkan media queries dan animasi."
    },
    {
        q: "Properti yang digunakan untuk mengatur warna latar belakang adalah?",
        a: ["color", "font-color", "background-color", "text-color", "layout-color"],
        correct: 2,
        pembahasan: "background-color mengatur warna latar belakang elemen."
    },
    {
        q: "Apa fungsi dari media queries pada CSS3?",
        a: ["Membatasi ukuran gambar", "Menambahkan efek hover", "Membuat halaman responsif", "Menghubungkan file CSS lain", "Memuat skrip JavaScript"],
        correct: 2,
        pembahasan: "Media Queries membuat tampilan responsif berdasarkan perangkat."
    },
    {
        q: "Properti apa yang digunakan untuk mengatur jarak antar elemen di CSS?",
        a: ["padding", "margin", "spacing", "border", "align"],
        correct: 1,
        pembahasan: "Margin digunakan untuk mengatur jarak luar antar elemen."
    },
    {
        q: "Apa yang dimaksud dengan Inline CSS?",
        a: [
            "CSS yang ditulis di file terpisah",
            "CSS yang ditulis langsung di tag HTML",
            "CSS untuk JavaScript",
            "CSS dari library",
            "CSS tanpa properti"
        ],
        correct: 1,
        pembahasan: "Inline CSS diterapkan dalam atribut style di tag HTML."
    },
    {
        q: "Apa kegunaan dari ID selector dalam CSS?",
        a: [
            "Mengatur elemen dengan nama yang sama",
            "Mengatur elemen unik dengan identitas khusus",
            "Mengatur grup elemen serupa",
            "Mengubah semua elemen dalam dokumen",
            "Menghapus elemen HTML"
        ],
        correct: 1,
        pembahasan: "ID selector menggunakan simbol # untuk elemen unik."
    },
    {
        q: "File eksternal CSS dihubungkan dengan tag...?",
        a: ["<link>", "<style>", "<script>", "<meta>", "<body>"],
        correct: 0,
        pembahasan: "Tag <link> di <head> digunakan untuk menghubungkan file CSS."
    },
    {
        q: "Sintaks yang benar untuk CSS class adalah?",
        a: [
            ".classname {property: value;}",
            "#classname {property: value;}",
            "classname {property: value;}",
            "-classname {property: value;}",
            "$classname {property: value;}"
        ],
        correct: 0,
        pembahasan: "Class selector diawali dengan titik (.)."
    },
    {
        q: "Apa kegunaan properti z-index?",
        a: [
            "Mengatur posisi horizontal",
            "Mengatur posisi vertikal",
            "Mengatur tumpang tindih elemen",
            "Mengatur warna elemen",
            "Menghapus elemen"
        ],
        correct: 2,
        pembahasan: "z-index mengatur lapisan tumpang tindih elemen."
    },
    {
        q: "Perbedaan utama ID dan class adalah?",
        a: [
            "ID untuk grup, class untuk satu elemen",
            "ID diawali #, class diawali .",
            "ID untuk file eksternal, class untuk inline",
            "ID hanya untuk <div>",
            "Class hanya untuk link"
        ],
        correct: 1,
        pembahasan: "ID menggunakan # untuk elemen unik, class menggunakan ."
    },
    {
        q: "Fitur utama CSS2 adalah?",
        a: ["Dukungan layout tabel", "Media queries", "Animasi", "Dukungan 3D", "Variabel CSS"],
        correct: 0,
        pembahasan: "CSS2 memperkenalkan dukungan penggunaan layout tabel."
    },
    {
        q: "Editor yang sering digunakan untuk menulis CSS adalah?",
        a: ["Photoshop", "VS Code", "Word", "Blender", "After Effects"],
        correct: 1,
        pembahasan: "VS Code adalah editor paling populer untuk CSS."
    },
    {
        q: "Format file CSS adalah?",
        a: [".html", ".js", ".css", ".txt", ".exe"],
        correct: 2,
        pembahasan: "File CSS berekstensi .css."
    },
    {
        q: "Cara menghubungkan file CSS eksternal ke HTML adalah?",
        a: [
            "Menggunakan <style> di <body>",
            "Menggunakan <link> di <head>",
            "Menggunakan <script> di <head>",
            "Menulis CSS di server",
            "Menambahkan CSS di JavaScript"
        ],
        correct: 1,
        pembahasan: "<link> digunakan untuk menghubungkan CSS eksternal."
    },
    {
        q: "Properti untuk mengatur ukuran teks adalah?",
        a: ["text-align", "text-size", "font-size", "size-text", "font-align"],
        correct: 2,
        pembahasan: "font-size digunakan untuk mengatur ukuran teks."
    },
    {
        q: "Apa fungsi properti float?",
        a: [
            "Menghapus elemen",
            "Mengapungkan elemen ke kiri/kanan",
            "Mengubah warna elemen",
            "Menambahkan animasi",
            "Menghapus margin"
        ],
        correct: 1,
        pembahasan: "float digunakan untuk mengapungkan elemen."
    },
    {
        q: "Apa yang dimaksud dengan embedded CSS?",
        a: ["CSS di file lain", "CSS di dalam tag <style>", "CSS dari framework", "CSS untuk JavaScript", "CSS tanpa properti"],
        correct: 1
    },
    {
        q: "Tujuan fitur archive dalam CMS adalah?",
        a: [
            "Menghapus artikel permanen",
            "Menyimpan artikel agar tidak tampil tapi tetap dapat dicari",
            "Memindahkan artikel ke halaman utama",
            "Mengedit artikel massal",
            "Menerjemahkan artikel"
        ],
        correct: 1
    },
    {
        q: "Cara mengembalikan artikel yang di-archive adalah?",
        a: [
            "Menghapus artikel",
            "Memindahkan kategori",
            "Menekan tombol unarchive",
            "Menyalin artikel",
            "Mengedit ulang"
        ],
        correct: 2
    },
    {
        q: "Langkah pertama memindahkan artikel ke kategori lain adalah?",
        a: [
            "Menekan tombol edit",
            "Memilih artikel yang akan dipindahkan",
            "Menekan tombol copy",
            "Menghapus artikel",
            "Mengubah ke draft"
        ],
        correct: 1
    },
    {
        q: "Fungsi 'publish' dalam CMS adalah?",
        a: ["Menampilkan artikel di web", "Menghapus artikel", "Membuat artikel baru", "Memindahkan artikel", "Menerjemahkan artikel"],
        correct: 0
    },
    {
        q: "Cara menghapus artikel permanen adalah?",
        a: [
            "Mengedit artikel",
            "Memindahkan artikel ke archive",
            "Memindahkan ke trash lalu delete",
            "Nonaktifkan publish",
            "Memindahkan article"
        ],
        correct: 2
    },
    {
        q: "Fitur translate digunakan untuk?",
        a: [
            "Memindahkan artikel",
            "Mengubah bahasa artikel",
            "Membuat draft",
            "Menambah animasi",
            "Menghapus terjemahan"
        ],
        correct: 1
    },
    {
        q: "Langkah terakhir membuat artikel baru adalah?",
        a: ["Tekan edit", "Tekan save", "Tekan archive", "Tekan delete", "Tekan move"],
        correct: 1
    },
    {
        q: "Tujuan section dan category adalah?",
        a: [
            "Menyimpan artikel sementara",
            "Menghapus artikel",
            "Mengorganisasi dan mengelompokkan artikel",
            "Menambahkan gambar",
            "Memindahkan artikel"
        ],
        correct: 2
    },
    {
        q: "Perbedaan fitur copy dan move adalah?",
        a: [
            "Copy menduplikasi, move memindahkan",
            "Copy menghapus artikel",
            "Copy hanya untuk draft",
            "Move hanya untuk publish",
            "Tidak ada perbedaan"
        ],
        correct: 0
    },
    {
        q: "Apa itu meta tag?",
        a: [
            "Tag untuk layout",
            "Tag untuk animasi",
            "Tag untuk memberi informasi halaman",
            "Tag untuk menambah gambar",
            "Tag untuk memindahkan artikel"
        ],
        correct: 2
    },
    {
        q: "Fungsi utama layout adalah?",
        a: [
            "Mengatur navigasi",
            "Mengatur posisi elemen dan estetika",
            "Menyimpan file media",
            "Menambah animasi",
            "Membuat artikel baru"
        ],
        correct: 1
    },
    {
        q: "Keuntungan menggunakan CSS untuk layout adalah?",
        a: ["Lebih sederhana dan fleksibel", "Hanya bekerja di perangkat tertentu", "Tabel sulit dipakai", "CSS hanya untuk browser baru", "CSS lebih mahal"],
        correct: 0
    },
    {
        q: "Apa itu CMS?",
        a: [
            "Sistem untuk mengatur konten web",
            "Sistem animasi",
            "Sistem menghapus file",
            "Sistem desain responsif",
            "Sistem memindahkan artikel"
        ],
        correct: 0
    },
    {
        q: "Langkah pertama menghapus section adalah?",
        a: [
            "Memindahkan section ke trash",
            "Memastikan tidak ada kategori di dalamnya",
            "Mengedit section",
            "Menambah artikel baru",
            "Memindahkan ke category lain"
        ],
        correct: 1
    },
    {
        q: "Fungsi artikel yang dipublish adalah?",
        a: [
            "Menampilkan artikel ke pengguna",
            "Menyembunyikan artikel",
            "Menjadi draft",
            "Menghapus artikel",
            "Menambah metadata"
        ],
        correct: 0
    },
    {
        q: "Apa yang dimaksud dengan table layout?",
        a: [
            "Layout menggunakan tabel",
            "Layout hanya untuk teks",
            "Layout tanpa CSS",
            "Layout otomatis",
            "Layout untuk media"
        ],
        correct: 0
    },
    {
        q: "Kelebihan layout div dibanding tabel adalah?",
        a: [
            "Lebih kompleks",
            "Lebih mudah dimodifikasi",
            "Tidak mendukung CSS",
            "Hanya untuk HTML lama",
            "Sulit diakses"
        ],
        correct: 1
    },
    {
        q: "Langkah terakhir membuat section baru adalah?",
        a: ["Pilih kategori", "Tekan save", "Tekan delete", "Tambahkan artikel", "Pindahkan section"],
        correct: 1
    },
    {
        q: "Fungsi Edit Article adalah?",
        a: [
            "Menghapus artikel",
            "Mengubah isi artikel",
            "Memindahkan artikel ke trash",
            "Menerjemahkan artikel",
            "Menyalin artikel"
        ],
        correct: 1
    },
    {
        q: "Sebelum memindahkan artikel ke section lain, harus dilakukan?",
        a: [
            "Pastikan artikel publish",
            "Pilih artikel terlebih dahulu",
            "Hapus kategori lama",
            "Edit artikel dulu",
            "Hapus dari trash"
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
