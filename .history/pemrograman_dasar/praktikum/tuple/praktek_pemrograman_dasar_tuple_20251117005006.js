let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (ARRAY "TUPLE" DASAR) ===================
    {
        q: "Apa tipe data dari variabel berikut?",
        code: "const data = [1, 2, 3];",
        a: ["Array", "Object", "Set", "Map"],
        correct: 0,
        pembahasan: "Tanda kurung siku [] menandakan array di JavaScript."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [10, 20, 30];\nconsole.log(data[0]);",
        a: ["10", "20", "30", "Error"],
        correct: 0,
        pembahasan: "Indeks 0 mengakses elemen pertama array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.length);",
        a: ["2", "3", "1", "Error"],
        correct: 1,
        pembahasan: "length menghitung jumlah elemen dalam array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [];\nconsole.log(data.length);",
        a: ["0", "1", "Error", "undefined"],
        correct: 0,
        pembahasan: "Array kosong memiliki panjang 0."
    },
    {
        q: "Bagaimana cara membuat array dengan satu elemen?",
        code: "const data = [1];\nconsole.log(Array.isArray(data));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Array dengan satu elemen ditulis [1]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.includes(2));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "includes() memeriksa apakah elemen ada di array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data[data.length - 1]);",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "data[data.length - 1] mengakses elemen terakhir array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [10, 20, 30];\nconsole.log(data[1 + 1]);",
        a: ["10", "20", "30", "Error"],
        correct: 2,
        pembahasan: "1+1=2, jadi elemen di indeks ke-2 adalah 30."
    },
    {
        q: "Bagaimana cara menggabungkan dua array?",
        code: "const a = [1, 2];\nconst b = [3, 4];\nconsole.log(a.concat(b));",
        a: ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "Error", "undefined"],
        correct: 0,
        pembahasan: "concat() digunakan untuk menggabungkan dua array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2];\nconsole.log(data.concat(data));",
        a: ["[1, 2, 1, 2]", "[2, 4]", "[1, 1, 2, 2]", "Error"],
        correct: 0,
        pembahasan: "concat() dapat menggandakan isi array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = Array.from([1, 2, 3]);\nconsole.log(data);",
        a: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "Error"],
        correct: 0,
        pembahasan: "Array.from() mengubah iterable menjadi array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\ndata.forEach(i => console.log(i));",
        a: ["1\\n2\\n3", "123", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "forEach mencetak setiap elemen array pada baris baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = ['a', 'b', 'c'];\nconsole.log(data[1]);",
        a: ["'a'", "'b'", "'c'", "Error"],
        correct: 1,
        pembahasan: "Indeks 1 berarti elemen kedua yaitu 'b'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(typeof data);",
        a: ["object", "array", "set", "list"],
        correct: 0,
        pembahasan: "Array adalah tipe object di JavaScript."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.reduce((a,b)=>a+b));",
        a: ["6", "3", "Error", "undefined"],
        correct: 0,
        pembahasan: "reduce() menjumlahkan semua elemen → 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = Array(3).fill('js');\nconsole.log(data);",
        a: ["['js', 'js', 'js']", "['js']", "Error", "undefined"],
        correct: 0,
        pembahasan: "fill() mengisi array dengan nilai yang sama."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, [2, 3]];\nconsole.log(data[1][0]);",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "data[1] adalah [2,3], elemen pertama dari itu adalah 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(Math.max(...data));",
        a: ["3", "2", "1", "Error"],
        correct: 0,
        pembahasan: "Math.max(...array) mengembalikan nilai terbesar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 2, 3];\nconsole.log(data.filter(x => x === 2).length);",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "Ada dua nilai 2 dalam array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.includes(4));",
        a: ["true", "false", "Error", "undefined"],
        correct: 1,
        pembahasan: "4 tidak ada dalam array, jadi hasilnya false."
    },

    // =================== LEVEL MENENGAH–ADVANCED ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [10, 20, 30];\nconst [a, b, c] = data;\nconsole.log(a + b + c);",
        a: ["60", "102030", "Error", "undefined"],
        correct: 0,
        pembahasan: "Array bisa di-destructuring ke beberapa variabel."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3, 4];\nconst [a, ...b] = data;\nconsole.log(b);",
        a: ["[2, 3, 4]", "[1, 2, 3]", "Error", "undefined"],
        correct: 0,
        pembahasan: "Operator spread (...) mengumpulkan sisa elemen menjadi array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\ndata[0] = 10;\nconsole.log(data);",
        a: ["[10, 2, 3]", "Error", "[1, 2, 3]", "undefined"],
        correct: 0,
        pembahasan: "Array bersifat mutable, elemennya bisa diubah."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconst newData = data.concat([4]);\nconsole.log(newData);",
        a: ["[1, 2, 3, 4]", "[1, 2, 3]", "Error", "undefined"],
        correct: 0,
        pembahasan: "concat() membuat array baru hasil gabungan."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [5, 10, 15];\nconsole.log(Math.min(...data));",
        a: ["5", "10", "15", "Error"],
        correct: 0,
        pembahasan: "Math.min(...array) mengembalikan nilai terkecil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = ['a', 'b', 'c'];\nconsole.log(data.join('-'));",
        a: ["a-b-c", "['a','b','c']", "Error", "abc"],
        correct: 0,
        pembahasan: "join() menggabungkan elemen string array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, [2, [3, 4]]];\nconsole.log(data[1][1][0]);",
        a: ["3", "4", "2", "Error"],
        correct: 0,
        pembahasan: "Array bersarang diakses dengan indeks berlapis."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.reduce((a,b)=>a+b)/data.length);",
        a: ["2", "3", "1", "Error"],
        correct: 0,
        pembahasan: "Rata-rata = (1+2+3)/3 = 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.every(Boolean));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Semua elemen bukan nol → true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [0, 1, 2];\nconsole.log(data.some(Boolean));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Ada elemen non-nol, maka true."
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
