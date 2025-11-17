let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\n\nclass B(A):\n    pass\n\nobj = B()\nobj.tampil()",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Class B mewarisi method tampil() dari A, jadi mencetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class Induk:\n    def pesan(self):\n        print('Halo dari Induk')\n\nclass Anak(Induk):\n    def pesan(self):\n        print('Halo dari Anak')\n\nobj = Anak()\nobj.pesan()",
        a: ["Halo dari Induk", "Halo dari Anak", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "Method di subclass menimpa (override) method induk."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        print('Init A')\n\nclass B(A):\n    pass\n\nobj = B()",
        a: ["Init A", "Init B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Konstruktor A dijalankan karena B mewarisi dari A tanpa override."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    x = 10\n\nclass B(A):\n    pass\n\nobj = B()\nprint(obj.x)",
        a: ["10", "Error", "None", "0"],
        correct: 0,
        pembahasan: "Atribut class A diwarisi oleh class B."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class Induk:\n    def tampil(self):\n        print('Induk')\n\nclass Anak(Induk):\n    def tampil(self):\n        super().tampil()\n        print('Anak')\n\nobj = Anak()\nobj.tampil()",
        a: ["Induk", "Anak", "Induk\\nAnak", "Error"],
        correct: 2,
        pembahasan: "super().tampil() memanggil method Induk, lalu mencetak 'Anak'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        self.data = 5\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.data += 2\n\nobj = B()\nprint(obj.data)",
        a: ["5", "7", "2", "Error"],
        correct: 1,
        pembahasan: "Konstruktor B menambah nilai dari konstruktor A, total = 7."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\n\nclass B(A):\n    def tampil(self):\n        print('B')\n\nclass C(B):\n    pass\n\nobj = C()\nobj.tampil()",
        a: ["A", "B", "C", "Error"],
        correct: 1,
        pembahasan: "C mewarisi dari B, dan B override method tampil()."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def halo(self):\n        print('Dari A')\n\nclass B(A):\n    pass\n\nobj = B()\nobj.halo()",
        a: ["Dari A", "Dari B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "B mewarisi method halo() dari A."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        print('A init')\n\nclass B(A):\n    def __init__(self):\n        print('B init')\n        super().__init__()\n\nobj = B()",
        a: ["A init", "B init", "B init\\nA init", "Error"],
        correct: 2,
        pembahasan: "Konstruktor B dipanggil dulu, lalu konstruktor A dengan super()."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\n\nclass B(A):\n    def tampil(self):\n        super().tampil()\n        print('B')\n\nclass C(B):\n    pass\n\nC().tampil()",
        a: ["A\\nB", "B\\nA", "C", "Error"],
        correct: 0,
        pembahasan: "super() memanggil tampil() dari A, lalu tampil() di B."
    },
    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\n\nclass B(A):\n    def tampil(self):\n        print('B')\n\nobj = A()\nobj.tampil()\nobj2 = B()\nobj2.tampil()",
        a: ["A\\nB", "B\\nA", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "obj dari A memanggil tampil() A, obj2 dari B memanggil tampil() B."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        self.x = 5\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.x *= 2\n\nprint(B().x)",
        a: ["5", "10", "Error", "2"],
        correct: 1,
        pembahasan: "Nilai x dari konstruktor A dikali 2 di konstruktor B → 10."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def data(self):\n        return 1\nclass B(A):\n    def data(self):\n        return super().data() + 1\n\nprint(B().data())",
        a: ["1", "2", "Error", "None"],
        correct: 1,
        pembahasan: "B memanggil data() dari A lalu menambah 1 → hasil 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    pass\nclass B(A):\n    pass\nclass C(B):\n    pass\n\nprint(issubclass(C, A))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "C turunan dari B, dan B turunan dari A → C juga subclass dari A."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def f(self):\n        return 'A'\nclass B(A):\n    def f(self):\n        return super().f() + 'B'\n\nprint(B().f())",
        a: ["A", "B", "AB", "Error"],
        correct: 2,
        pembahasan: "Method B memanggil f() dari A lalu menambahkan 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        print('A')\nclass B(A):\n    def __init__(self):\n        print('B')\nclass C(B):\n    pass\nC()",
        a: ["A", "B", "A\\nB", "Error"],
        correct: 1,
        pembahasan: "C mewarisi konstruktor dari B, jadi hanya 'B' yang dicetak."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def show(self):\n        print('A')\nclass B(A):\n    def show(self):\n        print('B')\nclass C(B):\n    def show(self):\n        super().show()\n        print('C')\nC().show()",
        a: ["A\\nC", "B\\nC", "C\\nB", "Error"],
        correct: 1,
        pembahasan: "super() memanggil show() dari B, lalu mencetak 'C'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class X:\n    def tampil(self):\n        print('X')\nclass Y:\n    def tampil(self):\n        print('Y')\nclass Z(X, Y):\n    pass\nZ().tampil()",
        a: ["X", "Y", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Python menggunakan MRO (Method Resolution Order), X dicari lebih dulu."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\nclass B(A):\n    def tampil(self):\n        super().tampil()\n        print('B')\nclass C(B):\n    def tampil(self):\n        super().tampil()\n        print('C')\nC().tampil()",
        a: ["A\\nB\\nC", "C\\nB\\nA", "B\\nC", "Error"],
        correct: 0,
        pembahasan: "Setiap class memanggil super() lalu cetak sendiri, hasilnya berurutan A→B→C."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self, val):\n        self.val = val\nclass B(A):\n    pass\nobj = B(10)\nprint(obj.val)",
        a: ["10", "Error", "None", "0"],
        correct: 0,
        pembahasan: "B tidak override __init__, jadi gunakan konstruktor dari A."
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
