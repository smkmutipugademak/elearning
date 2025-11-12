let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa tipe data dari nilai 10?",
        code: "let x = 10;\nconsole.log(typeof x);",
        a: ["number", "string", "boolean", "object"],
        correct: 0,
        pembahasan: "10 adalah bilangan, jadi bertipe number."
    },
    {
        q: "Apa tipe data dari nilai 10.5?",
        code: "let x = 10.5;\nconsole.log(typeof x);",
        a: ["number", "string", "boolean", "object"],
        correct: 0,
        pembahasan: "JavaScript tidak membedakan int dan float, keduanya adalah number."
    },
    {
        q: "Apa tipe data dari 'Halo Dunia'?",
        code: "let x = 'Halo Dunia';\nconsole.log(typeof x);",
        a: ["string", "number", "object", "boolean"],
        correct: 0,
        pembahasan: "Tanda kutip menunjukkan tipe data string."
    },
    {
        q: "Apa tipe data dari nilai true?",
        code: "let x = true;\nconsole.log(typeof x);",
        a: ["boolean", "string", "number", "object"],
        correct: 0,
        pembahasan: "true dan false termasuk tipe data boolean."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 5;\nlet y = 2;\nconsole.log(x / y);",
        a: ["2.5", "2", "2.0", "Error"],
        correct: 0,
        pembahasan: "Operator / menghasilkan pembagian biasa → 2.5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 5;\nlet y = 2;\nconsole.log(Math.floor(x / y));",
        a: ["2", "2.5", "3", "Error"],
        correct: 0,
        pembahasan: "Math.floor(x / y) membulatkan ke bawah → 2."
    },
    {
        q: "Apa tipe data hasil operasi berikut?",
        code: "let x = 5 + 2.0;\nconsole.log(typeof x);",
        a: ["number", "string", "boolean", "object"],
        correct: 0,
        pembahasan: "Hasil operasi bilangan menghasilkan number."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = String(123);\nconsole.log(x);",
        a: ["'123'", "123", "Error", "'x'"],
        correct: 0,
        pembahasan: "String(123) mengubah angka menjadi string '123'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Number('10');\nconsole.log(x + 5);",
        a: ["15", "105", "Error", "10"],
        correct: 0,
        pembahasan: "String '10' dikonversi ke angka, jadi 10 + 5 = 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = parseFloat('3.14');\nconsole.log(x);",
        a: ["3.14", "'3.14'", "Error", "3"],
        correct: 0,
        pembahasan: "parseFloat('3.14') mengubah string menjadi angka desimal 3.14."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Boolean(0);\nconsole.log(x);",
        a: ["false", "true", "0", "Error"],
        correct: 0,
        pembahasan: "0 dianggap false dalam konteks boolean."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Boolean('JavaScript');\nconsole.log(x);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "String non-kosong dianggap true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = typeof 10 === 'number';\nconsole.log(x);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "typeof 10 menghasilkan 'number', jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "console.log(typeof 3.14 === 'number');",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "3.14 bertipe number, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 10;\nlet y = '10';\nconsole.log(x == y);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "Operator == membandingkan nilai, bukan tipe, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '5';\nconsole.log(x.repeat(3));",
        a: ["'555'", "15", "Error", "['5','5','5']"],
        correct: 0,
        pembahasan: "String.repeat(3) menggandakan isi string → '555'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Math.trunc(3.9);\nconsole.log(x);",
        a: ["3", "4", "3.9", "Error"],
        correct: 0,
        pembahasan: "Math.trunc() menghapus desimal tanpa pembulatan → 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 5;\nconsole.log(parseFloat(x));",
        a: ["5", "5.0", "Error", "'5.0'"],
        correct: 0,
        pembahasan: "parseFloat(5) tetap menghasilkan number 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = String(5.5);\nconsole.log(x + '0');",
        a: ["'5.50'", "5.5", "Error", "'55.0'"],
        correct: 0,
        pembahasan: "Keduanya string, jadi digabung jadi '5.50'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Boolean('');\nconsole.log(x);",
        a: ["false", "true", "Error", "null"],
        correct: 0,
        pembahasan: "String kosong bernilai false."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '5';\nlet y = 2;\nconsole.log(Number(x) * y);",
        a: ["10", "52", "Error", "'10'"],
        correct: 0,
        pembahasan: "Number('5') mengubah string jadi angka → 5*2=10."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '3.5';\nconsole.log(parseFloat(x) + 1);",
        a: ["4.5", "35", "Error", "'3.51'"],
        correct: 0,
        pembahasan: "parseFloat('3.5') menghasilkan 3.5 → 3.5 + 1 = 4.5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '10';\nconsole.log(x.repeat(2));",
        a: ["'1010'", "20", "Error", "'x2'"],
        correct: 0,
        pembahasan: "String.repeat(2) menggandakan string → '1010'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '10';\nlet y = 5;\nconsole.log(x + String(y));",
        a: ["'105'", "15", "Error", "'10 5'"],
        correct: 0,
        pembahasan: "Keduanya string setelah konversi → '105'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 10;\nlet y = '5';\nconsole.log(x + Number(y));",
        a: ["15", "105", "Error", "'10+5'"],
        correct: 0,
        pembahasan: "Number('5') = 5 → 10 + 5 = 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Boolean(3.14);\nconsole.log(x);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "Nilai non-nol dianggap true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = {real: 2, imag: 3};\nconsole.log(x);",
        a: ["{real: 2, imag: 3}", "‘2+3j’", "Error", "(3+2j)"],
        correct: 0,
        pembahasan: "JavaScript tidak punya tipe kompleks bawaan, tapi bisa disimulasikan dengan object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = true;\nconsole.log(typeof x === 'boolean');",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "typeof true menghasilkan 'boolean' → true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 10.0;\nlet y = parseInt(x);\nconsole.log(typeof y);",
        a: ["number", "string", "boolean", "object"],
        correct: 0,
        pembahasan: "parseInt() menghasilkan number bertipe number."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 'Hello';\nconsole.log(x.length);",
        a: ["5", "Error", "6", "'Hello'"],
        correct: 0,
        pembahasan: "String memiliki properti length → 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = [1, 2, 3];\nconsole.log(Array.isArray(x));",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "Array.isArray(x) mengembalikan true jika x adalah array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = {a: 1};\nconsole.log(typeof x);",
        a: ["object", "array", "function", "Error"],
        correct: 0,
        pembahasan: "Object literal dengan {} bertipe object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = [1, 2, 3];\nconsole.log(typeof x);",
        a: ["object", "array", "number", "function"],
        correct: 0,
        pembahasan: "Array di JavaScript bertipe object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = null;\nconsole.log(typeof x);",
        a: ["object", "null", "undefined", "boolean"],
        correct: 0,
        pembahasan: "typeof null di JavaScript adalah 'object' (bug historis)."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '10';\nlet y = 10;\nconsole.log(typeof x === typeof y);",
        a: ["false", "true", "Error", "null"],
        correct: 0,
        pembahasan: "x string, y number, jadi false."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Number(true);\nconsole.log(x);",
        a: ["1", "0", "Error", "true"],
        correct: 0,
        pembahasan: "true dikonversi ke 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Number(false);\nconsole.log(x);",
        a: ["0", "1", "false", "Error"],
        correct: 0,
        pembahasan: "false dikonversi ke 0."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 3.0;\nlet y = 3;\nconsole.log(x === y);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "Keduanya bernilai sama dan bertipe number, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 'JavaScript';\nconsole.log(typeof x === 'string');",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "x bertipe string, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 0;\nlet y = '0';\nconsole.log(x === y);",
        a: ["false", "true", "Error", "undefined"],
        correct: 0,
        pembahasan: "Operator === membandingkan nilai dan tipe data, jadi 0 (number) tidak sama dengan '0' (string)."
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
