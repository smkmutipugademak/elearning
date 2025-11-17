let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (TIPE DATA DASAR) ===================

    {
        q: "Apa tipe data dari nilai 10?",
        code: "x = 10\nprint(type(x))",
        a: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
        correct: 0,
        pembahasan: "10 adalah bilangan bulat, jadi bertipe int."
    },
    {
        q: "Apa tipe data dari nilai 10.5?",
        code: "x = 10.5\nprint(type(x))",
        a: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'bool'>"],
        correct: 0,
        pembahasan: "10.5 memiliki desimal, jadi bertipe float."
    },
    {
        q: "Apa tipe data dari 'Halo Dunia'?",
        code: "x = 'Halo Dunia'\nprint(type(x))",
        a: ["<class 'str'>", "<class 'int'>", "<class 'list'>", "<class 'tuple'>"],
        correct: 0,
        pembahasan: "Tanda kutip menunjukkan tipe data string (str)."
    },
    {
        q: "Apa tipe data dari nilai True?",
        code: "x = True\nprint(type(x))",
        a: ["<class 'bool'>", "<class 'str'>", "<class 'int'>", "<class 'tuple'>"],
        correct: 0,
        pembahasan: "True dan False termasuk tipe data bool (boolean)."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 5\ny = 2\nprint(x / y)",
        a: ["2.5", "2", "2.0", "Error"],
        correct: 0,
        pembahasan: "Operator / menghasilkan hasil float → 2.5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 5\ny = 2\nprint(x // y)",
        a: ["2", "2.5", "3", "Error"],
        correct: 0,
        pembahasan: "Operator // menghasilkan pembagian bulat → 2."
    },
    {
        q: "Apa tipe data hasil operasi berikut?",
        code: "x = 5 + 2.0\nprint(type(x))",
        a: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'complex'>"],
        correct: 0,
        pembahasan: "int + float menghasilkan float."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = str(123)\nprint(x)",
        a: ["'123'", "123", "Error", "'x'"],
        correct: 0,
        pembahasan: "str(123) mengubah angka menjadi string '123'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = int('10')\nprint(x + 5)",
        a: ["15", "105", "Error", "10"],
        correct: 0,
        pembahasan: "String '10' dikonversi ke integer, jadi 10 + 5 = 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = float('3.14')\nprint(x)",
        a: ["3.14", "'3.14'", "Error", "3"],
        correct: 0,
        pembahasan: "float('3.14') mengubah string menjadi angka desimal 3.14."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = bool(0)\nprint(x)",
        a: ["False", "True", "0", "Error"],
        correct: 0,
        pembahasan: "0 dianggap False dalam konteks boolean."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = bool('Python')\nprint(x)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "String non-kosong dianggap True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = type(10) == int\nprint(x)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "type(10) adalah <class 'int'>, jadi True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "print(isinstance(3.14, float))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "3.14 bertipe float, jadi True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 10\ny = '10'\nprint(x == y)",
        a: ["False", "True", "Error", "None"],
        correct: 0,
        pembahasan: "Tipe data berbeda (int vs str), jadi hasilnya False."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '5'\nprint(x * 3)",
        a: ["'555'", "15", "Error", "['5', '5', '5']"],
        correct: 0,
        pembahasan: "String dikalikan angka menggandakan isinya → '555'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = int(3.9)\nprint(x)",
        a: ["3", "4", "3.9", "Error"],
        correct: 0,
        pembahasan: "int() mengubah float menjadi int tanpa pembulatan → 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = float(5)\nprint(x)",
        a: ["5.0", "5", "Error", "‘5.0’"],
        correct: 0,
        pembahasan: "float(5) mengubah integer menjadi 5.0."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = str(5.5)\nprint(x + '0')",
        a: ["'5.50'", "5.5", "Error", "'55.0'"],
        correct: 0,
        pembahasan: "Kedua operand string, jadi digabung jadi '5.50'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = bool('')\nprint(x)",
        a: ["False", "True", "Error", "None"],
        correct: 0,
        pembahasan: "String kosong bernilai False."
    },

    // =================== LEVEL MENENGAH (KONVERSI & OPERASI TIPE) ===================

    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '5'\ny = 2\nprint(int(x) * y)",
        a: ["10", "52", "Error", "'10'"],
        correct: 0,
        pembahasan: "int('5') mengubah string menjadi angka → 5*2=10."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '3.5'\nprint(float(x) + 1)",
        a: ["4.5", "35", "Error", "‘3.51’"],
        correct: 0,
        pembahasan: "float('3.5') menghasilkan 3.5 → 3.5 + 1 = 4.5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '10'\nprint(x * 2)",
        a: ["'1010'", "20", "Error", "‘x2’"],
        correct: 0,
        pembahasan: "String dikali 2 menggandakan string → '1010'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '10'\ny = 5\nprint(x + str(y))",
        a: ["'105'", "15", "Error", "'10 5'"],
        correct: 0,
        pembahasan: "Keduanya string setelah konversi → '105'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 10\ny = '5'\nprint(x + int(y))",
        a: ["15", "105", "Error", "‘10+5’"],
        correct: 0,
        pembahasan: "int('5') = 5 → 10 + 5 = 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = bool(3.14)\nprint(x)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Nilai non-nol dianggap True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = complex(2, 3)\nprint(x)",
        a: ["(2+3j)", "‘2+3j’", "Error", "(3+2j)"],
        correct: 0,
        pembahasan: "complex(2,3) membuat bilangan kompleks 2+3j."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = type(True)\nprint(x == bool)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "type(True) adalah <class 'bool'> → True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 10.0\ny = int(x)\nprint(type(y))",
        a: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
        correct: 0,
        pembahasan: "int() mengubah float menjadi integer."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 'Hello'\nprint(len(x))",
        a: ["5", "Error", "6", "‘Hello’"],
        correct: 0,
        pembahasan: "len() menghitung jumlah karakter → 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = [1, 2, 3]\nprint(type(x))",
        a: ["<class 'list'>", "<class 'tuple'>", "<class 'set'>", "<class 'dict'>"],
        correct: 0,
        pembahasan: "Tanda kurung siku [] menandakan list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = {'a': 1}\nprint(type(x))",
        a: ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"],
        correct: 0,
        pembahasan: "Tanda kurung kurawal dengan pasangan key:value menandakan dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = (1, 2, 3)\nprint(type(x))",
        a: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
        correct: 0,
        pembahasan: "Kurung biasa () dengan elemen dipisah koma adalah tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = {1, 2, 3}\nprint(type(x))",
        a: ["<class 'set'>", "<class 'list'>", "<class 'dict'>", "<class 'tuple'>"],
        correct: 0,
        pembahasan: "Kurung kurawal tanpa pasangan adalah set."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = None\nprint(type(x))",
        a: ["<class 'NoneType'>", "<class 'bool'>", "<class 'str'>", "<class 'object'>"],
        correct: 0,
        pembahasan: "Nilai None memiliki tipe NoneType."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '10'\ny = 10\nprint(type(x) == type(y))",
        a: ["False", "True", "Error", "None"],
        correct: 0,
        pembahasan: "x bertipe str, y bertipe int, jadi False."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = int(True)\nprint(x)",
        a: ["1", "0", "Error", "True"],
        correct: 0,
        pembahasan: "True dikonversi ke 1 dalam konteks integer."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = float(False)\nprint(x)",
        a: ["0.0", "1.0", "False", "Error"],
        correct: 0,
        pembahasan: "False dikonversi menjadi 0.0 saat diubah ke float."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 3.0\ny = 3\nprint(x == y)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Nilainya sama meskipun tipe berbeda, jadi True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 'Python'\nprint(isinstance(x, (int, str)))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "x bertipe str, cocok dengan salah satu tuple tipe (int, str)."
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
