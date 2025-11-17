let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0; // in seconds

const quizData = [
    {
        q: "MySQL termasuk jenis perangkat lunak yang bersifat?",
        a: ["Berbayar", "Freeware", "Shareware", "Proprietary", "Trial"],
        correct: 1,
        pembahasan: "MySQL bersifat freeware, artinya dapat digunakan secara gratis tanpa lisensi berbayar."
    },
    {
        q: "Kelebihan MySQL dibandingkan DBMS lain adalah?",
        a: ["Sulit digunakan", "Berat dijalankan", "Ringan dan mudah digunakan", "Tidak open source", "Hanya untuk Linux"],
        correct: 2,
        pembahasan: "MySQL dikenal ringan, cepat, dan mudah digunakan oleh berbagai sistem operasi."
    },
    {
        q: "Software yang sering digunakan untuk menjalankan MySQL adalah?",
        a: ["WAMP", "XAMPP", "Mercury", "NetBeans", "Eclipse"],
        correct: 1,
        pembahasan: "XAMPP adalah paket server lokal yang berisi Apache, MySQL, PHP, dan Perl."
    },
    {
        q: "Dalam paket XAMPP, MySQL berfungsi sebagai?",
        a: ["Web Server", "Database Server", "Mail Server", "FTP Client", "File Manager"],
        correct: 1,
        pembahasan: "MySQL berperan sebagai database server untuk menyimpan data aplikasi."
    },
    {
        q: "Apache pada XAMPP digunakan untuk?",
        a: ["Database Server", "Web Server", "FTP Server", "Mail Server", "DNS Server"],
        correct: 1,
        pembahasan: "Apache adalah web server yang digunakan untuk menjalankan aplikasi web secara lokal."
    },
    {
        q: "Direktori MySQL yang berisi file database adalah?",
        a: ["bin", "data", "htdocs", "config", "system"],
        correct: 1,
        pembahasan: "Folder data menyimpan semua file database yang telah dibuat di MySQL."
    },
    {
        q: "Direktori 'bin' pada MySQL berisi?",
        a: ["File data", "Service dan executable file", "Backup database", "Konfigurasi PHP", "File hasil query"],
        correct: 1,
        pembahasan: "Direktori bin berisi file .exe seperti mysql.exe yang menjalankan layanan MySQL."
    },
    {
        q: "Untuk menjalankan MySQL melalui CMD, direktori yang digunakan adalah?",
        a: ["c:\\xampp\\htdocs", "c:\\xampp\\mysql\\bin", "c:\\xampp\\apache", "c:\\xampp\\config", "c:\\xampp\\sql"],
        correct: 1,
        pembahasan: "File mysql.exe berada di direktori c:\\xampp\\mysql\\bin."
    },
    {
        q: "Perintah untuk masuk ke MySQL dengan user root tanpa password adalah?",
        a: ["mysql –u root –p", "mysql –u root", "mysql –root", "mysql –u admin", "mysql –login root"],
        correct: 1,
        pembahasan: "User root tanpa password cukup menggunakan perintah mysql –u root."
    },
    {
        q: "Setelah berhasil masuk ke MySQL, pengguna dapat menulis?",
        a: ["Perintah DOS", "Query SQL", "Kode PHP", "Sintaks JavaScript", "Perintah HTML"],
        correct: 1,
        pembahasan: "Setelah login ke MySQL, pengguna dapat menulis perintah SQL (query)."
    },
    {
        q: "Perintah SHOW DATABASES; berfungsi untuk?",
        a: ["Membuat database", "Menampilkan daftar database", "Menghapus database", "Menyalin database", "Mengubah nama database"],
        correct: 1,
        pembahasan: "SHOW DATABASES digunakan untuk menampilkan semua database yang tersedia di server."
    },
    {
        q: "Perintah untuk menampilkan semua tabel dalam database adalah?",
        a: ["SHOW TABLES;", "LIST TABLES;", "SHOW ALL;", "SHOW DB;", "SELECT * FROM TABLES;"],
        correct: 0,
        pembahasan: "SHOW TABLES; menampilkan daftar tabel dalam database yang sedang aktif."
    },
    {
        q: "Fungsi USE nama_database; adalah?",
        a: ["Membuat database baru", "Memilih database yang akan digunakan", "Menghapus database", "Menampilkan database", "Mengedit database"],
        correct: 1,
        pembahasan: "USE digunakan untuk berpindah ke database tertentu sebelum menjalankan query lain."
    },
    {
        q: "Perintah CREATE DATABASE mahasiswa; digunakan untuk?",
        a: ["Membuat database baru", "Menghapus tabel", "Menampilkan isi tabel", "Menggandakan database", "Menyalin struktur database"],
        correct: 0,
        pembahasan: "CREATE DATABASE membuat database baru bernama 'mahasiswa'."
    },
    {
        q: "Perintah untuk membuat tabel baru adalah?",
        a: ["NEW TABLE", "CREATE TABLE", "ADD TABLE", "MAKE TABLE", "TABLE NEW"],
        correct: 1,
        pembahasan: "CREATE TABLE digunakan untuk membuat tabel baru dengan struktur kolom tertentu."
    },
    {
        q: "Bagian tabel yang berisi tipe data disebut?",
        a: ["Record", "Field", "Primary Key", "Value", "Entry"],
        correct: 1,
        pembahasan: "Field adalah kolom tabel yang mendefinisikan nama dan tipe data yang disimpan."
    },
    {
        q: "Perintah DESC nama_tabel; digunakan untuk?",
        a: ["Melihat struktur tabel", "Menampilkan isi tabel", "Menghapus tabel", "Menyalin tabel", "Menambah kolom"],
        correct: 0,
        pembahasan: "DESC (describe) menampilkan struktur kolom dan tipe data tabel."
    },
    {
        q: "SQL adalah singkatan dari?",
        a: ["System Query Language", "Structured Query Language", "Standard Query Logic", "Simple Question Language", "Server Query Layer"],
        correct: 1,
        pembahasan: "SQL singkatan dari Structured Query Language, bahasa standar untuk pengelolaan database."
    },
    {
        q: "Setiap perintah SQL diakhiri dengan?",
        a: [".", ";", ",", ":", "/"],
        correct: 1,
        pembahasan: "Perintah SQL harus diakhiri dengan tanda titik koma (;)."
    },
    {
        q: "Tipe data numerik pada MySQL adalah?",
        a: ["CHAR", "VARCHAR", "INT", "TEXT", "ENUM"],
        correct: 2,
        pembahasan: "INT digunakan untuk menyimpan data bilangan bulat di MySQL."
    },
    {
        q: "Nama database yang dibuat dalam contoh praktikum adalah?",
        a: ["sekolah", "mahasiswa", "dosen", "pegawai", "siswa"],
        correct: 1,
        pembahasan: "Dalam contoh praktikum, database yang dibuat bernama 'mahasiswa'."
    },
    {
        q: "Tabel siswa pada contoh memiliki field berikut, kecuali?",
        a: ["Nim", "Nama", "Wali", "Alamat", "KodeDosen"],
        correct: 3,
        pembahasan: "Tabel siswa berisi Nim, Nama, dan Wali — tidak memiliki kolom Alamat."
    },
    {
        q: "Tabel wali memiliki field berikut, kecuali?",
        a: ["Nip", "Nama", "Alamat", "Wali", "Kode"],
        correct: 3,
        pembahasan: "Tabel wali memiliki field Nip, Nama, dan Alamat — tidak ada field Wali."
    },
    {
        q: "Kata kunci NOT NULL digunakan untuk?",
        a: ["Mengizinkan nilai kosong", "Menolak nilai kosong", "Menghapus nilai", "Menentukan tipe data", "Menambah kolom"],
        correct: 1,
        pembahasan: "NOT NULL berarti kolom wajib diisi dan tidak boleh bernilai kosong."
    },
    {
        q: "Perintah SQL yang benar untuk membuat database adalah?",
        a: ["CREATE DATABASE mahasiswa;", "NEW DATABASE mahasiswa;", "ADD DATABASE mahasiswa;", "INSERT DATABASE mahasiswa;", "INIT DATABASE mahasiswa;"],
        correct: 0,
        pembahasan: "CREATE DATABASE adalah perintah resmi untuk membuat database baru."
    },
    {
        q: "Perintah yang benar untuk melihat struktur tabel siswa adalah?",
        a: ["SHOW TABLE siswa;", "DESC siswa;", "VIEW siswa;", "DETAIL siswa;", "CHECK TABLE siswa;"],
        correct: 1,
        pembahasan: "DESC siswa; digunakan untuk menampilkan struktur tabel siswa."
    },
    {
        q: "Fungsi utama XAMPP adalah?",
        a: ["Aplikasi pengolah kata", "Server lokal untuk pengembangan web", "Program desain grafis", "Database client", "Network monitor"],
        correct: 1,
        pembahasan: "XAMPP adalah paket server lokal untuk pengembangan web."
    },
    {
        q: "FileZilla dalam XAMPP berfungsi sebagai?",
        a: ["FTP Server", "Web Server", "Database Server", "DNS Server", "Mail Client"],
        correct: 0,
        pembahasan: "FileZilla adalah FTP server untuk mentransfer file antar komputer melalui jaringan."
    },
    {
        q: "Mercury pada XAMPP berfungsi sebagai?",
        a: ["Mail Server", "Web Server", "Database Server", "FTP Client", "DNS Server"],
        correct: 0,
        pembahasan: "Mercury adalah mail server yang mengelola pengiriman dan penerimaan email lokal."
    },
    {
        q: "Perintah SHOW TABLES; dapat dijalankan setelah?",
        a: ["Menjalankan Apache", "Memilih database dengan USE", "Menginstal XAMPP", "Membuat tabel baru", "Menulis query SELECT"],
        correct: 1,
        pembahasan: "SHOW TABLES hanya dapat dijalankan setelah memilih database aktif dengan perintah USE."
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
