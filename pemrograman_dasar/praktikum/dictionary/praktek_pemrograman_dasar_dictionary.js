let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================

    {
        q: "Apa output dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(data['a']);",
        a: ["1", "2", "Error", "undefined"],
        correct: 0,
        pembahasan: "Akses nilai dari key 'a' menghasilkan 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {};\nconsole.log(Object.keys(data).length);",
        a: ["0", "1", "Error", "undefined"],
        correct: 0,
        pembahasan: "Object kosong memiliki panjang 0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "const data = {x: 10};\ndata.y = 20;\nconsole.log(data);",
        a: ["{x: 10}", "{y: 20}", "{x: 10, y: 20}", "Error"],
        correct: 2,
        pembahasan: "Property baru 'y' ditambahkan ke object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log('a' in data);",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Operator 'in' memeriksa keberadaan property."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(data['c']);",
        a: ["1", "2", "undefined", "Error"],
        correct: 2,
        pembahasan: "Property 'c' tidak ada, hasilnya undefined."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.keys(data).length);",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "Object memiliki dua properti."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let data = {x: 10, y: 20};\ndelete data.x;\nconsole.log(data);",
        a: ["{y: 20}", "{x: 10}", "{}", "Error"],
        correct: 0,
        pembahasan: "Property 'x' dihapus menggunakan delete."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.keys(data));",
        a: ["['a', 'b']", "[1, 2]", "[['a', 1], ['b', 2]]", "Error"],
        correct: 0,
        pembahasan: "Object.keys() menampilkan daftar key."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.values(data).reduce((a,b)=>a+b));",
        a: ["3", "2", "1", "Error"],
        correct: 0,
        pembahasan: "Object.values() menghasilkan [1,2], totalnya 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(!('c' in data));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "'c' tidak ada, jadi hasilnya true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let data = {x: 1};\ndata.x = 99;\nconsole.log(data.x);",
        a: ["1", "99", "Error", "undefined"],
        correct: 1,
        pembahasan: "Nilai property 'x' diganti menjadi 99."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nfor (let k in data) {\n  console.log(k);\n}",
        a: ["a b", "1 2", "['a',1] ['b',2]", "Error"],
        correct: 0,
        pembahasan: "Loop for...in iterasi pada key object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log('a' in data);",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Property 'a' ada di object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = Object.assign({}, {a: 1, b: 2});\nconsole.log(data);",
        a: ["{a: 1, b: 2}", "{a: '1', b: '2'}", "Error", "{}"],
        correct: 0,
        pembahasan: "Object.assign() menyalin properti ke object baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1};\nconsole.log(typeof data);",
        a: ["'object'", "'array'", "'function'", "'set'"],
        correct: 0,
        pembahasan: "Tipe data object adalah 'object'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 10, b: 20};\nconsole.log(Math.max(...Object.values(data)));",
        a: ["10", "20", "a", "Error"],
        correct: 1,
        pembahasan: "Nilai terbesar dari [10,20] adalah 20."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.entries(data)[0]);",
        a: ["['a', 1]", "['b', 2]", "['a','b']", "Error"],
        correct: 0,
        pembahasan: "Object.entries() mengembalikan pasangan [key, value]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {x: 10};\nconsole.log('y' in data);",
        a: ["true", "false", "Error", "undefined"],
        correct: 1,
        pembahasan: "'y' tidak ada di object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.values(data)[1]);",
        a: ["1", "2", "Error", "undefined"],
        correct: 1,
        pembahasan: "Elemen kedua dari values adalah 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let data = {a: 1};\ndelete data.a;\nconsole.log(data);",
        a: ["{}", "{a: 1}", "Error", "undefined"],
        correct: 0,
        pembahasan: "delete menghapus property 'a' dari object."
    },

    // =================== LEVEL MENENGAH ===================

    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: {x: 5}};\nconsole.log(data.b.x);",
        a: ["1", "5", "Error", "undefined"],
        correct: 1,
        pembahasan: "Mengakses object di dalam object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1};\nObject.assign(data, {b: 2});\nconsole.log(data);",
        a: ["{a: 1}", "{a: 1, b: 2}", "Error", "{}"],
        correct: 1,
        pembahasan: "Object.assign menambah atau mengganti property."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const keys = ['x', 'y'];\nconst data = Object.fromEntries(keys.map(k => [k, 0]));\nconsole.log(data);",
        a: ["{x: 0, y: 0}", "{x: null, y: null}", "{}", "Error"],
        correct: 0,
        pembahasan: "Object.fromEntries membuat object dengan default value 0."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const keys = ['a', 'b'];\nconst vals = [1, 2];\nconst data = Object.fromEntries(keys.map((k,i)=>[k, vals[i]]));\nconsole.log(data);",
        a: ["{a: 1, b: 2}", "{a: 2, b: 1}", "{}", "Error"],
        correct: 0,
        pembahasan: "Menggabungkan dua array jadi pasangan key-value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 10, b: 20};\nObject.values(data).forEach(v => process.stdout.write(v + ' '));",
        a: ["10 20", "a b", "(a,10) (b,20)", "Error"],
        correct: 0,
        pembahasan: "Loop menampilkan setiap value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {x: 1, y: 2};\nconst doubled = Object.fromEntries(Object.entries(data).map(([k,v]) => [k, v*2]));\nconsole.log(doubled);",
        a: ["{x: 2, y: 4}", "{x: 1, y: 2}", "Error", "{}"],
        correct: 0,
        pembahasan: "Object comprehension menggandakan value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1};\nconst copy = {...data};\ncopy.a = 5;\nconsole.log(data.a);",
        a: ["1", "5", "Error", "undefined"],
        correct: 0,
        pembahasan: "Spread operator membuat salinan baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Math.min(...Object.values(data)));",
        a: ["1", "2", "a", "Error"],
        correct: 0,
        pembahasan: "Nilai terkecil dari [1,2] adalah 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 5, b: 10};\nconsole.log(Object.values(data).reduce((a,b)=>a+b));",
        a: ["15", "10", "5", "Error"],
        correct: 0,
        pembahasan: "Menjumlahkan semua value object menghasilkan 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nif (!('c' in data)) {\n  console.log('Kosong');\n}",
        a: ["Kosong", "Error", "undefined", "Tidak ada output"],
        correct: 0,
        pembahasan: "Karena 'c' tidak ada, maka output 'Kosong'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: [1,2,3]};\nconsole.log(data.a[1]);",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "Mengakses elemen ke-2 dari array di dalam object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: [1,2]};\nconsole.log(Array.isArray(data.a));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Value bertipe array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {x: 10, y: 5};\nconsole.log(Object.values(data).every(v => v > 0));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Semua nilai > 0, maka true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.values(data).some(v => v > 1));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Ada nilai lebih besar dari 1, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 10, b: 20};\nconsole.log(Object.keys(data).sort());",
        a: ["['a', 'b']", "['b', 'a']", "[10, 20]", "Error"],
        correct: 0,
        pembahasan: "Object.keys() mengembalikan key yang bisa diurutkan."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconst filtered = Object.fromEntries(Object.entries(data).filter(([k,v])=>v>1));\nconsole.log(filtered);",
        a: ["{b: 2}", "{a: 1}", "{}", "Error"],
        correct: 0,
        pembahasan: "Filter hanya value > 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: {x: 1}};\nconsole.log('x' in data.a);",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Property 'x' ada di dalam object 'a'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nfor (const [k,v] of Object.entries(data)) {\n  process.stdout.write(k + ' ' + v + ' ');\n}",
        a: ["a 1 b 2", "1 a 2 b", "['a',1]['b',2]", "Error"],
        correct: 0,
        pembahasan: "Menampilkan setiap key dan valuenya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = Object.fromEntries(Array.from({length:3}, (_,i)=>[i, i**2]));\nconsole.log(data);",
        a: ["{0:0, 1:1, 2:4}", "{1:1, 2:2, 3:3}", "Error", "{}"],
        correct: 0,
        pembahasan: "Membuat object dengan key angka dan value kuadratnya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {x: 5};\nif (!('y' in data)) data.y = 10;\nconsole.log(data.y);",
        a: ["10", "5", "Error", "undefined"],
        correct: 0,
        pembahasan: "Property baru 'y' ditambah dengan nilai default 10."
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
