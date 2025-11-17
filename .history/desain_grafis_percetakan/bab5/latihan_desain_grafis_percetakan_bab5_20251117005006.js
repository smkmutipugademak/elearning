let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Software pengolah gambar berikut yang tidak termasuk perangkat lunak berbasis vektor adalah:",
        a: [
            "CorelDraw",
            "Adobe Illustrator",
            "Adobe Photoshop",
            "GIMP",
            "Inkscape"
        ],
        correct: 2,
        pembahasan: "Adobe Photoshop adalah perangkat lunak berbasis bitmap, bukan vektor."
    },
    {
        q: "Fungsi utama CorelDraw adalah:",
        a: [
            "Mengedit foto",
            "Mengolah gambar vektor",
            "Mengelola video",
            "Membuat animasi",
            "Mengedit audio"
        ],
        correct: 1,
        pembahasan: "CorelDraw dirancang untuk membuat dan mengolah gambar berbasis vektor."
    },
    {
        q: "Keunggulan Adobe Illustrator dibandingkan CorelDraw adalah:",
        a: [
            "Tidak memakan memori besar",
            "Fitur desain grafis yang sangat lengkap",
            "User-friendly",
            "Kompatibilitas dengan format lain",
            "Gratis digunakan"
        ],
        correct: 1,
        pembahasan: "Adobe Illustrator memiliki fitur desain grafis yang sangat lengkap untuk industri profesional."
    },
    {
        q: "GIMP adalah software yang bersifat:",
        a: [
            "Berbayar",
            "Open-source",
            "Proprietary",
            "Hanya untuk Windows",
            "Tidak mendukung format vektor"
        ],
        correct: 1,
        pembahasan: "GIMP adalah software gratis dan open-source."
    },
    {
        q: "Software pengolah gambar yang paling sering digunakan untuk desain grafis profesional adalah:",
        a: [
            "Paint",
            "Adobe Illustrator",
            "CorelDraw",
            "GIMP",
            "Adobe Photoshop"
        ],
        correct: 1,
        pembahasan: "Adobe Illustrator merupakan standar industri untuk desain berbasiskan vektor."
    },
    {
        q: "Efek Blend pada CorelDraw digunakan untuk:",
        a: [
            "Membuat gradasi warna",
            "Memberi bayangan pada objek",
            "Menggabungkan dua objek",
            "Membuat efek 3D",
            "Membuat tekstur"
        ],
        correct: 3,
        pembahasan: "Efek Blend menciptakan transisi atau efek 3D antara dua objek."
    },
    {
        q: "Langkah pertama untuk memulai CorelDraw adalah:",
        a: [
            "Membuat dokumen baru",
            "Memilih template",
            "Menyalakan komputer",
            "Membuka file sebelumnya",
            "Mengatur pengaturan awal"
        ],
        correct: 2,
        pembahasan: "Langkah awal adalah menyalakan komputer dan membuka aplikasi CorelDraw."
    },
    {
        q: "Keunggulan utama CorelDraw dibandingkan Adobe Illustrator adalah:",
        a: [
            "Fitur lengkap",
            "Kemampuan tracing otomatis",
            "Kompatibilitas tinggi",
            "User-friendly",
            "Gratis digunakan"
        ],
        correct: 3,
        pembahasan: "CorelDraw dikenal memiliki antarmuka yang lebih mudah dipahami pemula."
    },
    {
        q: "Langkah terakhir dalam membuat dokumen di CorelDraw adalah:",
        a: [
            "Menyimpan file",
            "Menambahkan efek",
            "Mengatur layout",
            "Memilih warna",
            "Menutup program"
        ],
        correct: 0,
        pembahasan: "Langkah terakhir adalah menyimpan dokumen."
    },
    {
        q: "Adobe Photoshop lebih dikenal untuk:",
        a: [
            "Desain berbasis vektor",
            "Edit foto dan bitmap",
            "Pembuatan animasi",
            "Desain 3D",
            "Edit audio"
        ],
        correct: 1,
        pembahasan: "Photoshop digunakan untuk mengedit foto dan gambar bitmap."
    },
    {
        q: "Perangkat lunak yang didistribusikan secara gratis dan open-source adalah:",
        a: [
            "CorelDraw",
            "GIMP",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Paint"
        ],
        correct: 1,
        pembahasan: "GIMP adalah software gratis dan open-source."
    },
    {
        q: "Fitur Drop Shadow pada CorelDraw digunakan untuk:",
        a: [
            "Memberi bayangan pada objek",
            "Membuat gradasi warna",
            "Membuat objek transparan",
            "Menambahkan efek garis",
            "Memotong gambar"
        ],
        correct: 0,
        pembahasan: "Drop Shadow digunakan untuk menambahkan bayangan pada objek."
    },
    {
        q: "Efek Distort pada CorelDraw memungkinkan pengguna untuk:",
        a: [
            "Membuat bayangan",
            "Memutar objek",
            "Mengubah bentuk objek secara abstrak",
            "Menambahkan warna",
            "Membuat objek transparan"
        ],
        correct: 2,
        pembahasan: "Distort digunakan untuk mengubah bentuk objek menjadi lebih dinamis dan abstrak."
    },
    {
        q: "Untuk membuat dokumen baru di CorelDraw, kita perlu memilih:",
        a: [
            "Open graphic",
            "New document",
            "Template",
            "Layout",
            "Edit file"
        ],
        correct: 1,
        pembahasan: "Membuat dokumen baru dilakukan melalui opsi 'New document'."
    },
    {
        q: "Kelemahan utama dari GIMP adalah:",
        a: [
            "Tidak mendukung open-source",
            "Tidak mendukung format vektor",
            "Hanya mendukung 8 bits per-channel",
            "Memakan banyak memori",
            "Tidak dapat digunakan di Mac OS"
        ],
        correct: 2,
        pembahasan: "GIMP hanya mendukung 8 bits per-channel, sehingga kedalaman warnanya terbatas."
    },
    {
        q: "CorelDraw mendukung fitur berikut, kecuali:",
        a: [
            "Membuat logo",
            "Mengedit foto",
            "Desain vektor",
            "Pembuatan animasi",
            "Layout dokumen"
        ],
        correct: 3,
        pembahasan: "CorelDraw tidak digunakan untuk membuat animasi."
    },
    {
        q: "Untuk menyimpan dokumen di CorelDraw, langkah yang benar adalah:",
        a: [
            "File > Save",
            "Edit > Save",
            "Tools > Save",
            "Klik Export",
            "Klik Print"
        ],
        correct: 0,
        pembahasan: "Dokumen disimpan melalui menu File > Save."
    },
    {
        q: "Efek Contour pada CorelDraw berfungsi untuk:",
        a: [
            "Memberikan garis tepi pada objek",
            "Membuat objek transparan",
            "Menambahkan warna",
            "Memberikan bayangan",
            "Memotong objek"
        ],
        correct: 0,
        pembahasan: "Contour menambahkan garis tepi pada objek, baik ke dalam maupun ke luar."
    },
    {
        q: "Adobe Photoshop dikenal sebagai:",
        a: [
            "Software vektor",
            "Software foto dan bitmap",
            "Software 3D",
            "Software animasi",
            "Software layout"
        ],
        correct: 1,
        pembahasan: "Photoshop digunakan untuk pengeditan foto dan grafik bitmap."
    },
    {
        q: "Shortcut untuk keluar dari CorelDraw adalah:",
        a: [
            "Ctrl + S",
            "Ctrl + Z",
            "Alt + F4",
            "Shift + Ctrl + Z",
            "Ctrl + Alt + S"
        ],
        correct: 2,
        pembahasan: "Alt + F4 adalah shortcut standar untuk menutup aplikasi."
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
