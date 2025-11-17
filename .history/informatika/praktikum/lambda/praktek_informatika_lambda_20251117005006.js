let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL DASAR ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda x: x + 2\nprint(f(3))",
        a: ["5", "6", "3", "Error"],
        correct: 0,
        pembahasan: "Lambda menambah 2 ke x, jadi hasilnya 3 + 2 = 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "g = lambda x, y: x * y\nprint(g(2, 3))",
        a: ["6", "5", "8", "Error"],
        correct: 0,
        pembahasan: "Lambda mengalikan 2 × 3 = 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda: 10\nprint(f())",
        a: ["10", "None", "Error", "f"],
        correct: 0,
        pembahasan: "Lambda tanpa argumen bisa mengembalikan nilai tetap."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda x: x ** 2\nprint(f(4))",
        a: ["16", "8", "4", "Error"],
        correct: 0,
        pembahasan: "4 kuadrat = 16."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x, y=2: x + y\nprint(f(3))",
        a: ["5", "3", "Error", "2"],
        correct: 0,
        pembahasan: "Argumen default y=2, jadi 3 + 2 = 5."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda a, b: a if a > b else b\nprint(f(5, 9))",
        a: ["9", "5", "Error", "None"],
        correct: 0,
        pembahasan: "Ternary di lambda mengembalikan nilai terbesar → 9."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda x: 'Genap' if x % 2 == 0 else 'Ganjil'\nprint(f(7))",
        a: ["Ganjil", "Genap", "7", "Error"],
        correct: 0,
        pembahasan: "7 tidak habis dibagi 2 → Ganjil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "hasil = (lambda x, y: x - y)(10, 3)\nprint(hasil)",
        a: ["7", "13", "Error", "None"],
        correct: 0,
        pembahasan: "Lambda langsung dipanggil, hasil 10 - 3 = 7."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda s: s.upper()\nprint(f('halo'))",
        a: ["HALO", "halo", "Error", "None"],
        correct: 0,
        pembahasan: "Mengubah string menjadi huruf besar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda: print('Hi')\nf()",
        a: ["Hi", "None", "Error", "lambda"],
        correct: 0,
        pembahasan: "Lambda dapat berisi print() dan menampilkan 'Hi'."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1, 2, 3, 4]\nkuadrat = list(map(lambda x: x ** 2, angka))\nprint(kuadrat)",
        a: ["[1, 4, 9, 16]", "[2, 3, 4, 5]", "Error", "[]"],
        correct: 0,
        pembahasan: "map() menerapkan lambda ke setiap elemen."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "data = [1, 2, 3, 4, 5]\nganjil = list(filter(lambda x: x % 2 != 0, data))\nprint(ganjil)",
        a: ["[1, 3, 5]", "[2, 4]", "Error", "[]"],
        correct: 0,
        pembahasan: "filter() memilih hanya bilangan ganjil."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "kata = ['apel', 'pisang', 'kiwi']\nurut = sorted(kata, key=lambda x: len(x))\nprint(urut)",
        a: ["['kiwi', 'apel', 'pisang']", "['pisang', 'apel', 'kiwi']", "Error", "['apel', 'kiwi', 'pisang']"],
        correct: 0,
        pembahasan: "sorted() mengurut berdasarkan panjang kata."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = [5, 10, 15]\nprint(list(map(lambda x: x / 5, data)))",
        a: ["[1.0, 2.0, 3.0]", "[5, 10, 15]", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap elemen dibagi 5 menggunakan lambda."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: x[::-1]\nprint(f('abcd'))",
        a: ["dcba", "abcd", "Error", "None"],
        correct: 0,
        pembahasan: "Membalik string menggunakan slicing."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: (x > 0) and 'Positif' or 'Negatif'\nprint(f(-5))",
        a: ["Negatif", "Positif", "Error", "None"],
        correct: 0,
        pembahasan: "x < 0 maka hasilnya 'Negatif'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: x % 3 == 0\nprint(f(9))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "9 habis dibagi 3 → True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1, 2, 3, 4, 5]\nhasil = list(map(lambda x: x if x % 2 == 0 else x * 10, angka))\nprint(hasil)",
        a: ["[10, 2, 30, 4, 50]", "[1, 2, 3, 4, 5]", "Error", "[2, 4]"],
        correct: 0,
        pembahasan: "Jika ganjil dikali 10, genap tetap."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "a = lambda x, y: x if x > y else y\nprint(a(5, 8))",
        a: ["8", "5", "Error", "None"],
        correct: 0,
        pembahasan: "Mengembalikan nilai terbesar antara dua angka."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "fungsi = lambda x: (lambda y: x + y)\nprint(fungsi(2)(3))",
        a: ["5", "23", "Error", "None"],
        correct: 0,
        pembahasan: "Lambda bersarang, hasil 2 + 3 = 5."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil kode berikut?",
        code: "data = [10, 25, 30, 45]\nhasil = list(filter(lambda x: x % 15 == 0, data))\nprint(hasil)",
        a: ["[30, 45]", "[10, 25]", "[]", "Error"],
        correct: 0,
        pembahasan: "30 dan 45 habis dibagi 15."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "kata = ['python', 'ai', 'chatgpt']\nurut = sorted(kata, key=lambda x: x[-1])\nprint(urut)",
        a: ["['ai', 'python', 'chatgpt']", "['chatgpt', 'python', 'ai']", "Error", "['python', 'ai', 'chatgpt']"],
        correct: 0,
        pembahasan: "Urut berdasarkan huruf terakhir tiap kata."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: (x + 5, x * 2)\nprint(f(3))",
        a: ["(8, 6)", "8,6", "Error", "[8,6]"],
        correct: 0,
        pembahasan: "Lambda dapat mengembalikan tuple."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "data = ['a', 'bb', 'ccc']\nprint(list(map(lambda x: len(x), data)))",
        a: ["[1, 2, 3]", "[3, 2, 1]", "Error", "None"],
        correct: 0,
        pembahasan: "Menghitung panjang tiap string dalam list."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "data = [3, 6, 9]\nprint(list(map(lambda x: x//3, data)))",
        a: ["[1, 2, 3]", "[3, 6, 9]", "Error", "None"],
        correct: 0,
        pembahasan: "Membagi setiap angka dengan 3 menggunakan floor division."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: x * (x - 1)\nprint(f(5))",
        a: ["20", "25", "10", "Error"],
        correct: 0,
        pembahasan: "5 × 4 = 20."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "data = [2, 4, 6]\nres = sum(map(lambda x: x + 1, data))\nprint(res)",
        a: ["15", "12", "9", "Error"],
        correct: 0,
        pembahasan: "map menambah 1 ke tiap elemen → (3 + 5 + 7) = 15."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x, y: x ** y\nprint(f(2, 3))",
        a: ["8", "6", "9", "Error"],
        correct: 0,
        pembahasan: "2 pangkat 3 = 8."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "a = lambda x: (x > 5) * 100\nprint(a(4))",
        a: ["0", "100", "Error", "None"],
        correct: 0,
        pembahasan: "Ekspresi (x > 5) bernilai False (0)."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: 'besar' if x > 10 else ('sedang' if x > 5 else 'kecil')\nprint(f(8))",
        a: ["sedang", "besar", "kecil", "Error"],
        correct: 0,
        pembahasan: "x=8 lebih dari 5 tapi kurang dari 10 → sedang."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "angka = [1, 2, 3]\nprint((lambda x: [i * 2 for i in x])(angka))",
        a: ["[2, 4, 6]", "[1, 2, 3]", "Error", "None"],
        correct: 0,
        pembahasan: "Lambda bisa berisi list comprehension juga."
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
