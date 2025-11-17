let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "function sapa(nama) {\n    console.log('Halo', nama);\n}\n\nsapa('Budi');",
        a: ["Halo", "nama", "Halo Budi", "Error"],
        correct: 2,
        pembahasan: "Fungsi menerima argumen 'Budi' lalu mencetak 'Halo Budi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tambah(a, b) {\n    console.log(a + b);\n}\n\ntambah(2, 3);",
        a: ["23", "5", "2 + 3", "Error"],
        correct: 1,
        pembahasan: "Menjumlahkan 2 + 3 menghasilkan 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function cetak(nama = 'Andi') {\n    console.log(nama);\n}\n\ncetak();",
        a: ["Andi", "Error", "nama", "undefined"],
        correct: 0,
        pembahasan: "Parameter default digunakan jika tidak ada argumen, jadi mencetak 'Andi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function kali(x, y = 2) {\n    return x * y;\n}\n\nconsole.log(kali(4));",
        a: ["8", "6", "4", "Error"],
        correct: 0,
        pembahasan: "y bernilai default 2, jadi 4 * 2 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tampil(nama, umur) {\n    console.log(nama, umur);\n}\n\ntampil('Ayu', 18);",
        a: ["nama umur", "Ayu 18", "18 Ayu", "Error"],
        correct: 1,
        pembahasan: "Argumen diberikan sesuai urutan parameter: 'Ayu' dan 18."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tambah(a, b) {\n    return a + b;\n}\n\nlet hasil = tambah(5, 10);\nconsole.log(hasil);",
        a: ["15", "510", "a + b", "Error"],
        correct: 0,
        pembahasan: "Fungsi mengembalikan hasil penjumlahan 5 + 10 = 15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function hello() {\n    return 'Hai Dunia';\n}\n\nconsole.log(hello());",
        a: ["Hai Dunia", "undefined", "hello", "Error"],
        correct: 0,
        pembahasan: "Fungsi mengembalikan string 'Hai Dunia' yang dicetak oleh console.log()."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function total(a, b = 5) {\n    return a + b;\n}\n\nconsole.log(total(3));",
        a: ["8", "35", "Error", "5"],
        correct: 0,
        pembahasan: "Parameter kedua default 5, jadi 3 + 5 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function show(nama, kota = 'Bandung') {\n    console.log(nama, kota);\n}\n\nshow('Rina');",
        a: ["Rina Bandung", "kota Rina", "Rina", "Error"],
        correct: 0,
        pembahasan: "Default parameter digunakan untuk 'kota', jadi hasilnya 'Rina Bandung'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function hitung(a, b) {\n    return a - b;\n}\n\nconsole.log(hitung(10, 3));",
        a: ["7", "13", "-7", "Error"],
        correct: 0,
        pembahasan: "Hasil pengurangan 10 - 3 = 7."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "function fungsi(a, b, c = 3) {\n    console.log(a + b + c);\n}\n\nfungsi(1, 2);",
        a: ["3", "6", "Error", "12"],
        correct: 1,
        pembahasan: "c menggunakan default 3 → 1 + 2 + 3 = 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function test(a, b) {\n    return a * b;\n}\n\nconsole.log(test(2, 4));",
        a: ["8", "24", "Error", "6"],
        correct: 0,
        pembahasan: "Fungsi dikirim argumen sesuai posisi, hasilnya 2 * 4 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function sapa(nama1, nama2 = 'Budi') {\n    console.log('Hai', nama1, 'dan', nama2);\n}\n\nsapa('Ani');",
        a: ["Hai Ani dan Budi", "Hai Budi dan Ani", "Error", "Hai Ani"],
        correct: 0,
        pembahasan: "Parameter nama2 punya nilai default 'Budi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function data(...args) {\n    console.log(args);\n}\n\ndata(1, 2, 3);",
        a: ["[1, 2, 3]", "(1, 2, 3)", "1 2 3", "Error"],
        correct: 0,
        pembahasan: "Rest parameter ...args menampung semua argumen sebagai array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tampil(obj) {\n    console.log(obj);\n}\n\ntampil({nama: 'Doni', umur: 20});",
        a: ["{nama: 'Doni', umur: 20}", "['Doni', 20]", "('Doni', 20)", "Error"],
        correct: 0,
        pembahasan: "Objek dalam JavaScript ditulis dengan tanda kurung kurawal."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tampil(...args) {\n    for (let a of args) {\n        process.stdout.write(a + ' ');\n    }\n}\n\ntampil('A', 'B', 'C');",
        a: ["A B C ", "['A', 'B', 'C']", "('A', 'B', 'C')", "Error"],
        correct: 0,
        pembahasan: "Rest parameter dapat diiterasi dengan for-of."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function combine(a, ...args) {\n    console.log(a, args);\n}\n\ncombine(1, 2, 3);",
        a: ["1 [2, 3]", "1 (2, 3)", "Error", "1 2 3"],
        correct: 0,
        pembahasan: "Argumen pertama masuk ke a, sisanya disimpan dalam array args."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function showInfo(info) {\n    for (let key in info) {\n        console.log(key, info[key]);\n    }\n}\n\nshowInfo({nama: 'Ari', umur: 19});",
        a: ["nama Ari\\numur 19", "('nama', 'Ari')", "Error", "None"],
        correct: 0,
        pembahasan: "Loop for-in menampilkan pasangan key dan value dari objek."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function test(x, y = 10) {\n    return x + y;\n}\n\nconsole.log(test(7, 3));",
        a: ["10", "13", "Error", "7"],
        correct: 1,
        pembahasan: "Nilai 7 dan 3 dijumlahkan menghasilkan 10."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f(x, y, z) {\n    console.log(x, y, z);\n}\n\nlet data = [1, 2, 3];\nf(...data);",
        a: ["1 2 3", "(1, 2, 3)", "Error", "[1, 2, 3]"],
        correct: 0,
        pembahasan: "Operator spread `...` mengekstrak isi array ke parameter satu per satu."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa output dari kode berikut?",
        code: "function g(a, b = 2, c = 3) {\n    return a * b + c;\n}\n\nconsole.log(g(2));",
        a: ["7", "10", "8", "Error"],
        correct: 0,
        pembahasan: "a=2, b=2, c=3 → 2×2+3=7."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function fungsi(x, y) {\n    return x / y;\n}\n\nconsole.log(fungsi(10, 2));",
        a: ["5", "5.0", "Error", "0.5"],
        correct: 0,
        pembahasan: "10 / 2 = 5 hasilnya number."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f(x, y = 2, ...args) {\n    console.log(x, y, args);\n}\n\nf(1, 3, 5, 7);",
        a: ["1 3 [5, 7]", "1 3 (5, 7)", "Error", "1 3 5 7"],
        correct: 0,
        pembahasan: "Argumen ekstra disimpan dalam array args."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f(a, b, kwargs) {\n    console.log(a, b, kwargs);\n}\n\nf(1, 2, {x: 10, y: 20});",
        a: ["1 2 {x: 10, y: 20}", "Error", "1 2 (10,20)", "1 2 [10,20]"],
        correct: 0,
        pembahasan: "Objek {x:10, y:20} digunakan sebagai argumen ketiga."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function merge(a, b) {\n    return String(a) + String(b);\n}\n\nconsole.log(merge(2, 3));",
        a: ["23", "5", "Error", "a+b"],
        correct: 0,
        pembahasan: "Konversi ke string lalu digabung → '23'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f(x, y) {\n    x = x + 1;\n    y = y + 2;\n    return x + y;\n}\n\nconsole.log(f(1, 1));",
        a: ["5", "3", "4", "Error"],
        correct: 0,
        pembahasan: "x jadi 2, y jadi 3 → hasil 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function calc(a, b) {\n    return a ** b;\n}\n\nconsole.log(calc(2, 3));",
        a: ["8", "6", "23", "Error"],
        correct: 0,
        pembahasan: "2 pangkat 3 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tes(x, y = 5) {\n    return x + y;\n}\n\nconsole.log(tes(5, 10));",
        a: ["15", "10", "Error", "5"],
        correct: 0,
        pembahasan: "Argumen kedua menimpa default-nya, jadi 5+10=15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function data(a, b, c = 5) {\n    console.log(a, b, c);\n}\n\ndata(1, 2, 3);",
        a: ["1 2 3", "Error", "1 3 2", "1 c=3 b=2"],
        correct: 0,
        pembahasan: "Parameter dikirim sesuai urutan."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function hitung(a, b) {\n    return a + b;\n}\n\nconsole.log(hitung(4, 5));",
        a: ["9", "45", "Error", "5"],
        correct: 0,
        pembahasan: "Urutan parameter tidak masalah karena sesuai posisi, hasil 4 + 5 = 9."
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
document.querySelector('.btn-back').addEventListener('click', function (e) {
    e.preventDefault();
    // Deteksi lokasi root otomatis (3 tingkat ke atas)
    const current = window.location.href;
    const newUrl = current.split("/informatika/")[0] + "/index.html";
    window.location.href = newUrl;
});

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
