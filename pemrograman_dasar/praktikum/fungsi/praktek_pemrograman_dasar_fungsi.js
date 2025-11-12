let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa output dari kode berikut?",
        code: "function halo() {\n    console.log('Selamat pagi');\n}\nhalo();",
        a: ["Selamat pagi", "Error", "Tidak ada output", "Selamat siang"],
        correct: 0,
        pembahasan: "Fungsi halo() dipanggil dan mencetak 'Selamat pagi'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function tambah() {\n    return 2 + 3;\n}\nconsole.log(tambah());",
        a: ["2 + 3", "5", "Error", "23"],
        correct: 1,
        pembahasan: "Fungsi mengembalikan hasil 2+3 yaitu 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function kali(a, b) {\n    console.log(a * b);\n}\nkali(3, 4);",
        a: ["7", "12", "3*4", "Error"],
        correct: 1,
        pembahasan: "a=3 dan b=4 → hasil perkalian = 12."
    },
    {
        q: "Apa yang dikembalikan fungsi berikut?",
        code: "function identitas(nama) {\n    return 'Halo ' + nama;\n}\nconsole.log(identitas('Rani'));",
        a: ["Halo", "Rani", "Halo Rani", "Error"],
        correct: 2,
        pembahasan: "Return menggabungkan string 'Halo ' dengan 'Rani'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function angka() {\n    return 10;\n}\nlet x = angka();\nconsole.log(x);",
        a: ["angka", "10", "Error", "None"],
        correct: 1,
        pembahasan: "Return mengembalikan nilai 10 ke variabel x."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function tambah(x, y) {\n    return x + y;\n}\nconsole.log(tambah(1,2) + tambah(3,4));",
        a: ["10", "9", "7", "Error"],
        correct: 0,
        pembahasan: "1+2=3 dan 3+4=7, jadi 3+7=10 → hasilnya 10."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function test() {\n    console.log('Belajar JavaScript');\n    return 5;\n}\ntest();",
        a: ["5", "Belajar JavaScript", "undefined", "Error"],
        correct: 1,
        pembahasan: "Fungsi dipanggil, mencetak teks sebelum return."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function f(x) {\n    return x * 3;\n}\nconsole.log(f(2));",
        a: ["6", "3", "2", "Error"],
        correct: 0,
        pembahasan: "x=2 → 2×3=6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function salam() {\n    return 'Hai!';\n}\nconsole.log(salam());",
        a: ["Hai!", "undefined", "Error", "salam"],
        correct: 0,
        pembahasan: "Return 'Hai!' ditampilkan oleh console.log()."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tampil() {\n    console.log('JavaScript menyenangkan');\n}\nconsole.log(tampil());",
        a: ["JavaScript menyenangkan", "undefined", "Error", "JavaScript menyenangkan undefined"],
        correct: 1,
        pembahasan: "Fungsi hanya console.log tanpa return → mengembalikan undefined."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function luas(p, l) {\n    return p * l;\n}\nconsole.log(luas(4,2));",
        a: ["6", "8", "4", "Error"],
        correct: 1,
        pembahasan: "Luas = panjang × lebar = 4×2 = 8."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function bagi(x, y) {\n    return x / y;\n}\nconsole.log(bagi(6,3));",
        a: ["2", "3", "6", "Error"],
        correct: 0,
        pembahasan: "6 ÷ 3 = 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function f(x, y) {\n    return x - y;\n}\nconsole.log(f(10,4));",
        a: ["6", "14", "-6", "Error"],
        correct: 0,
        pembahasan: "10 - 4 = 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tampil(nama = 'Ayu') {\n    console.log('Halo', nama);\n}\ntampil();",
        a: ["Halo", "Halo Ayu", "Ayu", "Error"],
        correct: 1,
        pembahasan: "Parameter default digunakan karena tidak ada argumen."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function tambah(a, b = 5) {\n    return a + b;\n}\nconsole.log(tambah(3));",
        a: ["3", "5", "8", "Error"],
        correct: 2,
        pembahasan: "b menggunakan default 5 → 3+5=8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tampil() {\n    return 'JavaScript';\n}\nconsole.log(tampil() + tampil());",
        a: ["JavaScript", "JavaScriptJavaScript", "2", "Error"],
        correct: 1,
        pembahasan: "String digabung dua kali."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function hitung(a,b,c) {\n    return a+b+c;\n}\nconsole.log(hitung(1,2,3));",
        a: ["5", "6", "7", "Error"],
        correct: 1,
        pembahasan: "1+2+3 = 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function cek() {\n    let x = 10;\n    return x > 5;\n}\nconsole.log(cek());",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "10 > 5 menghasilkan true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function f(n) {\n    console.log('A'.repeat(n));\n}\nf(3);",
        a: ["A", "AA", "AAA", "Error"],
        correct: 2,
        pembahasan: "n=3 → 'A' diulang 3 kali = 'AAA'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function sapa(nama) {\n    return `Halo ${nama}`;\n}\nconsole.log(sapa('Andi'));",
        a: ["Halo Andi", "Halo ${nama}", "Andi", "Error"],
        correct: 0,
        pembahasan: "Template literal menggantikan variabel nama menjadi 'Halo Andi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function nilai() {\n    return 100;\n}\nconsole.log(nilai() + 50);",
        a: ["100", "150", "50", "Error"],
        correct: 1,
        pembahasan: "100 + 50 = 150."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function f(x) {\n    return x ** 2;\n}\nconsole.log(f(3));",
        a: ["6", "9", "3", "Error"],
        correct: 1,
        pembahasan: "3 pangkat 2 = 9."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f() {}\nconsole.log(f());",
        a: ["Error", "undefined", "pass", "0"],
        correct: 1,
        pembahasan: "Fungsi tanpa return akan menghasilkan undefined."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function gabung(a,b) {\n    return a + ' ' + b;\n}\nconsole.log(gabung('Selamat','Datang'));",
        a: ["Selamat Datang", "SelamatDatang", "Error", "undefined"],
        correct: 0,
        pembahasan: "String digabung dengan spasi di antaranya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function cek(nilai) {\n    if (nilai >= 75) {\n        return 'Lulus';\n    } else {\n        return 'Gagal';\n    }\n}\nconsole.log(cek(80));",
        a: ["Lulus", "Gagal", "Error", "undefined"],
        correct: 0,
        pembahasan: "80 >= 75 → kondisi benar → return 'Lulus'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function f(x,y) {\n    console.log(x + y);\n}\nf(2,3);",
        a: ["5", "Error", "x+y", "23"],
        correct: 0,
        pembahasan: "2+3=5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function total(a,b,c=2) {\n    return a+b+c;\n}\nconsole.log(total(1,2));",
        a: ["3", "5", "6", "Error"],
        correct: 1,
        pembahasan: "c memakai nilai default 2 → 1+2+2=5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function pangkat(x) {\n    return x ** 3;\n}\nconsole.log(pangkat(2));",
        a: ["4", "6", "8", "Error"],
        correct: 2,
        pembahasan: "2³ = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function angka() {\n    console.log(1);\n    console.log(2);\n}\nangka();",
        a: ["1", "2", "1 2", "Error"],
        correct: 2,
        pembahasan: "Fungsi mencetak dua baris angka: 1 dan 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function data() {\n    return [1,2,3];\n}\nconsole.log(data()[0]);",
        a: ["1", "2", "3", "Error"],
        correct: 0,
        pembahasan: "Index 0 mengambil elemen pertama array → 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function f(a,b) {\n    return a * b;\n}\nconsole.log(f('Hi',2));",
        a: ["Hi", "HiHi", "2Hi", "Error"],
        correct: 1,
        pembahasan: "String dikalikan 2 → diulang dua kali = 'HiHi'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function jumlah() {\n    let total = [1,2,3].reduce((a,b)=>a+b);\n    return total;\n}\nconsole.log(jumlah());",
        a: ["1", "6", "123", "Error"],
        correct: 1,
        pembahasan: "reduce() menjumlahkan elemen array → 1+2+3=6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function panjang(teks) {\n    return teks.length;\n}\nconsole.log(panjang('abc'));",
        a: ["2", "3", "4", "Error"],
        correct: 1,
        pembahasan: "Panjang string 'abc' = 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function nilai(x) {\n    if (x % 2 === 0) {\n        return 'Genap';\n    } else {\n        return 'Ganjil';\n    }\n}\nconsole.log(nilai(7));",
        a: ["Genap", "Ganjil", "Error", "undefined"],
        correct: 1,
        pembahasan: "7 % 2 = 1 → hasilnya 'Ganjil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f(a,b) {\n    return Math.floor(a / b);\n}\nconsole.log(f(7,2));",
        a: ["3", "3.5", "4", "Error"],
        correct: 0,
        pembahasan: "Math.floor(7/2) = 3 → pembagian bulat."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function f(x) {\n    return typeof x;\n}\nconsole.log(f(5));",
        a: ["'number'", "'string'", "int", "Error"],
        correct: 0,
        pembahasan: "5 adalah number."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function cek(nilai) {\n    return [1,2,3].includes(nilai);\n}\nconsole.log(cek(2));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "2 ada di array, maka true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function gabung(...args) {\n    return args;\n}\nconsole.log(gabung('a','b'));",
        a: ["['a','b']", "('a','b')", "a,b", "Error"],
        correct: 0,
        pembahasan: "Rest parameter mengembalikan array dari argumen."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function data(info) {\n    return info.nama;\n}\nconsole.log(data({nama:'Budi'}));",
        a: ["Budi", "nama", "Error", "undefined"],
        correct: 0,
        pembahasan: "Objek dikirim sebagai parameter dan diakses melalui properti nama."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "function hitung() {\n    let a = 5;\n    let b = 3;\n    return a + b;\n}\nconsole.log(hitung());",
        a: ["8", "53", "a + b", "Error"],
        correct: 0,
        pembahasan: "Fungsi menjumlahkan 5 dan 3 lalu mengembalikannya → hasilnya 8."
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
