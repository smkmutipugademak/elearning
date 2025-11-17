let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MENENGAH (IF-ELSE) ===================

    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\ny = 5\nif x > y:\n    print('A')\nelse:\n    print('B')",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Karena 10 > 5, maka kondisi benar dan mencetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 3\nif x == 3:\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Kondisi x == 3 terpenuhi, maka mencetak 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 7\nif x % 2 == 0:\n    print('Genap')\nelse:\n    print('Ganjil')",
        a: ["Genap", "Ganjil", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "7 tidak habis dibagi 2, maka 'Ganjil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x > 10:\n    print('Lebih')\nelif x == 10:\n    print('Sama')\nelse:\n    print('Kurang')",
        a: ["Lebih", "Sama", "Kurang", "Error"],
        correct: 1,
        pembahasan: "x == 10 terpenuhi, maka 'Sama'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 5\nb = 8\nif a < b:\n    print('A')\nif b < 10:\n    print('B')",
        a: ["A", "B", "A\\nB", "Tidak ada output"],
        correct: 2,
        pembahasan: "Kedua kondisi benar, maka mencetak 'A' lalu 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 4\nif x > 0:\n    print('Positif')\nelse:\n    print('Negatif')",
        a: ["Positif", "Negatif", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x bernilai 4 (>0), maka 'Positif'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = -2\nif x >= 0:\n    print('A')\nelse:\n    print('B')",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "x negatif, maka kondisi else dijalankan."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 2\nb = 3\nif a * b == 6:\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "2*3 = 6, maka kondisi benar."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x % 3 == 1:\n    print('A')\nelif x % 3 == 2:\n    print('B')\nelse:\n    print('C')",
        a: ["A", "B", "C", "Error"],
        correct: 1,
        pembahasan: "10 % 3 = 1, sisanya 1 → cetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\ny = 10\nif x > 2 and y > 5:\n    print('OK')",
        a: ["OK", "Error", "Tidak ada output", "False"],
        correct: 0,
        pembahasan: "Kedua kondisi benar, maka 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\ny = 10\nif x > 2 or y < 5:\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Kondisi pertama sudah benar, maka 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 0\nif not x:\n    print('Kosong')",
        a: ["Kosong", "Error", "False", "Tidak ada output"],
        correct: 0,
        pembahasan: "x = 0 dianggap False, jadi not False = True → cetak 'Kosong'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x < 0:\n    print('Negatif')\nelse:\n    if x == 0:\n        print('Nol')\n    else:\n        print('Positif')",
        a: ["Negatif", "Nol", "Positif", "Error"],
        correct: 2,
        pembahasan: "x = 10 → masuk else bagian kedua → 'Positif'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 5\nb = 10\nif b % a == 0:\n    print('Bagi')\nelse:\n    print('Tidak')",
        a: ["Bagi", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "10 % 5 = 0 → habis dibagi → 'Bagi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 4\nif x % 2 == 0:\n    print('Genap')\nif x % 4 == 0:\n    print('Kelipatan 4')",
        a: ["Genap", "Kelipatan 4", "Genap\\nKelipatan 4", "Tidak ada output"],
        correct: 2,
        pembahasan: "Kedua kondisi benar, keduanya dieksekusi."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 3\nb = 7\nif a * 2 == b:\n    print('Cocok')\nelse:\n    print('Tidak')",
        a: ["Cocok", "Tidak", "Error", "None"],
        correct: 1,
        pembahasan: "3*2 = 6 ≠ 7, maka else dijalankan."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\nif x > 10:\n    print('Besar')\nelif x > 3:\n    print('Sedang')\nelse:\n    print('Kecil')",
        a: ["Besar", "Sedang", "Kecil", "Error"],
        correct: 1,
        pembahasan: "x=5 > 3 maka 'Sedang'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 8\nif a % 4 == 0:\n    print('Ya')\nelse:\n    print('Tidak')",
        a: ["Ya", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "8 habis dibagi 4 → 'Ya'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 7\nif x % 2 == 0:\n    print('Genap')\nelse:\n    print('Ganjil')",
        a: ["Genap", "Ganjil", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "7 tidak habis dibagi 2 → 'Ganjil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x > 0:\n    print('A')\nif x > 5:\n    print('B')",
        a: ["A", "B", "A\\nB", "Tidak ada output"],
        correct: 2,
        pembahasan: "Kedua kondisi benar → 'A' dan 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 9\ny = 3\nif x % y == 0 and x > y:\n    print('OK')\nelse:\n    print('NO')",
        a: ["OK", "NO", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "9 % 3 == 0 dan 9 > 3 → 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 0\nif x:\n    print('True')\nelse:\n    print('False')",
        a: ["True", "False", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "x=0 dianggap False dalam if."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 3\nb = 5\nif a + b > 10:\n    print('Besar')\nelse:\n    print('Kecil')",
        a: ["Besar", "Kecil", "Error", "None"],
        correct: 1,
        pembahasan: "3+5=8 <10 → 'Kecil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = -1\nif x:\n    print('True')\nelse:\n    print('False')",
        a: ["True", "False", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Nilai non-zero dianggap True."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 15\nif x % 5 == 0:\n    print('A')\nif x % 3 == 0:\n    print('B')",
        a: ["A", "B", "A\\nB", "Tidak ada output"],
        correct: 2,
        pembahasan: "15 habis dibagi 5 dan 3 → 'A' lalu 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 8\nif x < 5:\n    print('Kecil')\nelif x < 10:\n    print('Sedang')\nelse:\n    print('Besar')",
        a: ["Kecil", "Sedang", "Besar", "Error"],
        correct: 1,
        pembahasan: "x < 10 terpenuhi → 'Sedang'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\nif x != 5:\n    print('A')\nelse:\n    print('B')",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "x == 5 → kondisi if salah → 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 4\nb = 2\nif a / b == 2:\n    print('Cocok')\nelse:\n    print('Tidak')",
        a: ["Cocok", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "4 / 2 = 2 → kondisi benar."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 6\nif x % 3 == 0:\n    print('Kelipatan 3')",
        a: ["Kelipatan 3", "Error", "Tidak ada output", "False"],
        correct: 0,
        pembahasan: "6 habis dibagi 3 → 'Kelipatan 3'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x % 2 == 0 and x % 5 == 0:\n    print('Ya')\nelse:\n    print('Tidak')",
        a: ["Ya", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "10 habis dibagi 2 dan 5 → 'Ya'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 3\nb = 3\nif a == b:\n    print('Sama')\nelse:\n    print('Beda')",
        a: ["Sama", "Beda", "Error", "None"],
        correct: 0,
        pembahasan: "a dan b sama → 'Sama'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\ny = 15\nif y / x == 3:\n    print('OK')",
        a: ["OK", "Error", "Tidak ada output", "False"],
        correct: 0,
        pembahasan: "15/5 = 3 → kondisi benar → cetak 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 8\nif x % 2 == 0:\n    print('Genap')\nelse:\n    print('Ganjil')",
        a: ["Genap", "Ganjil", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "8 habis dibagi 2 → 'Genap'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 4\ny = 9\nif (x % 2 == 0 and y % 3 == 0):\n    print('A')\nelse:\n    print('B')",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "4 genap dan 9 habis dibagi 3 → kondisi benar → cetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 7\ny = 14\nif y / x == 2:\n    if y % x == 0:\n        print('Benar')\n    else:\n        print('Salah')\nelse:\n    print('Tidak')",
        a: ["Benar", "Salah", "Tidak", "Error"],
        correct: 0,
        pembahasan: "14/7=2 dan 14%7=0 → kedua kondisi benar → 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 10\nb = 5\nif a > b:\n    if a - b == 5:\n        print('OK')\n    else:\n        print('X')\nelse:\n    print('NO')",
        a: ["OK", "X", "NO", "Error"],
        correct: 0,
        pembahasan: "10 > 5 dan selisihnya 5 → 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 3\ny = 5\nz = 7\nif x < y < z:\n    print('Naik')\nelse:\n    print('Turun')",
        a: ["Naik", "Turun", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "3 < 5 < 7 benar → 'Naik'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 'abc'\nif len(x) == 3 and x[0] == 'a':\n    print('Valid')\nelse:\n    print('Invalid')",
        a: ["Valid", "Invalid", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Panjang string 3 dan huruf pertama 'a' → 'Valid'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "nilai = 75\nif nilai >= 90:\n    print('A')\nelif nilai >= 80:\n    print('B')\nelif nilai >= 70:\n    print('C')\nelse:\n    print('D')",
        a: ["A", "B", "C", "D"],
        correct: 2,
        pembahasan: "75 >= 70 tapi < 80 → 'C'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = True\ny = False\nif not y and x:\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "not False = True dan x True → keduanya benar → 'Benar'."
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
