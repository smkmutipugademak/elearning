let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizDataJS = [
    // =================== LEVEL MUDAH (FOR & WHILE DASAR) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    console.log('Hai');\n}",
        a: ["Hai Hai Hai", "Hai", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop berjalan 3 kali, mencetak 'Hai' sebanyak 3 kali ke console."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    console.log(i);\n}",
        a: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop dimulai dari 0 hingga kurang dari 3, sehingga mencetak 0, 1, 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 4; i++) {\n    console.log(i);\n}",
        a: ["1 2 3", "0 1 2", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Loop dimulai dari 1 sampai kurang dari 4, menghasilkan 1, 2, 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let i = 0;\nwhile (i < 3) {\n    console.log(i);\n    i++;\n}",
        a: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop berjalan selama i < 3, sehingga mencetak 0, 1, 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let huruf of 'abc') {\n    console.log(huruf);\n}",
        a: ["a b c", "abc", "a,b,c", "Error"],
        correct: 0,
        pembahasan: "Loop berjalan untuk setiap karakter dalam string 'abc'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i of [1, 2, 3]) {\n    console.log(i * 2);\n}",
        a: ["2 4 6", "1 2 3", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Setiap elemen dikali 2 menghasilkan 2, 4, 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 5; i++) {\n    if (i === 3) break;\n    console.log(i);\n}",
        a: ["0 1 2", "0 1 2 3", "1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i === 3, jadi hanya 0, 1, 2 yang dicetak."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 5; i++) {\n    if (i === 2) continue;\n    console.log(i);\n}",
        a: ["0 1 3 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "continue melewati nilai 2, jadi mencetak 0, 1, 3, 4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let count = 0;\nwhile (count < 5) {\n    console.log(count);\n    count += 2;\n}",
        a: ["0 2 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "count bertambah 2 tiap iterasi → 0, 2, 4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 6; i += 2) {\n    console.log(i);\n}",
        a: ["1 3 5", "2 4 6", "1 2 3 4 5", "Error"],
        correct: 0,
        pembahasan: "Langkah 2 menghasilkan 1, 3, 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    console.log('Loop', i);\n}",
        a: ["Loop 0 Loop 1 Loop 2", "Loop Loop Loop", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "console.log menampilkan teks dan nilai i."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [2, 4, 6];\nfor (let i of angka) {\n    console.log(i - 1);\n}",
        a: ["1 3 5", "2 4 6", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Setiap elemen dikurangi 1 → 1, 3, 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 2; j++) {\n        console.log(i, j);\n    }\n}",
        a: ["0 0 0 1 1 0 1 1 2 0 2 1", "0 1 2", "0 0 1 1 2 2", "Error"],
        correct: 0,
        pembahasan: "Loop bersarang: i=0→1→2, j=0→1 tiap kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let i = 3;\nwhile (i > 0) {\n    console.log(i);\n    i--;\n}",
        a: ["3 2 1", "1 2 3", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop mundur dari 3 ke 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 2; i++) {\n    console.log('A');\n}\nconsole.log('B');",
        a: ["A A B", "A B A", "B A A", "Error"],
        correct: 0,
        pembahasan: "'A' dua kali di dalam loop, lalu 'B' di luar loop."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 1;\nwhile (x < 5) {\n    console.log(x);\n    x += 3;\n}",
        a: ["1 4", "1 2 3 4", "1 2 4", "Error"],
        correct: 0,
        pembahasan: "x naik +3 tiap iterasi → 1, 4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 4; i++) {\n    if (i % 2 === 0) {\n        console.log(i);\n    }\n}",
        a: ["0 2", "1 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Cetak hanya bilangan genap → 0, 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 5; i++) {\n    if (i === 3) break;\n    console.log(i);\n}",
        a: ["1 2", "1 2 3", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i === 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < i; j++) {\n        process.stdout.write('*');\n    }\n    console.log();\n}",
        a: ["\\n*\\n**", "*\\n**\\n***", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop dalam mencetak segitiga bertingkat bintang."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 4; i++) {\n    console.log('A'.repeat(i));\n}",
        a: ["A AA AAA", "AAA AA A", "A A A", "Error"],
        correct: 0,
        pembahasan: "i=1→'A', i=2→'AA', i=3→'AAA'."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 2; i < 8; i += 3) {\n    console.log(i);\n}",
        a: ["2 5", "2 3 4 5", "2 5 8", "Error"],
        correct: 0,
        pembahasan: "Loop dengan langkah 3 menghasilkan 2 dan 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 2; j++) {\n        console.log(i + j);\n    }\n}",
        a: ["0 1 1 2 2 3", "0 1 2 3 4", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Kombinasi i+j menghasilkan pola 0,1,1,2,2,3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let total = 0;\nfor (let i = 1; i < 4; i++) {\n    total += i;\n}\nconsole.log(total);",
        a: ["6", "10", "3", "Error"],
        correct: 0,
        pembahasan: "1 + 2 + 3 = 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let i = 0;\nwhile (i < 4) {\n    i++;\n}\nconsole.log(i);",
        a: ["4", "3", "5", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i mencapai 4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 5; i++) {\n    if (i === 3) continue;\n    console.log(i);\n}",
        a: ["0 1 2 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Melewati angka 3 karena continue."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    console.log(i);\n}\nconsole.log('Selesai');",
        a: ["0 1 2 Selesai", "0 1 2", "Selesai", "Error"],
        correct: 0,
        pembahasan: "Bagian setelah for dijalankan setelah loop selesai."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 0;\nwhile (x < 3) {\n    console.log('Loop', x);\n    x++;\n}\nconsole.log('Done');",
        a: ["Loop 0 Loop 1 Loop 2 Done", "Loop Done", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop while berakhir normal, lalu cetak 'Done'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 4; i++) {\n    for (let j = 1; j < 3; j++) {\n        console.log(i * j);\n    }\n}",
        a: ["1 2 2 4 3 6", "1 2 3 4 5 6", "2 4 6", "Error"],
        correct: 0,
        pembahasan: "Perkalian kombinasi i×j menghasilkan 1, 2, 2, 4, 3, 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 3; j++) {\n        if (i === j) console.log(i);\n    }\n}",
        a: ["0 1 2", "0 0 1 1 2 2", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Cetak hanya saat i === j → 0, 1, 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 1;\nwhile (x < 10) {\n    x *= 2;\n}\nconsole.log(x);",
        a: ["16", "8", "10", "Error"],
        correct: 0,
        pembahasan: "x dikali 2 terus hingga mencapai 16."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 4; i > 0; i--) {\n    console.log(i);\n}",
        a: ["4 3 2 1", "1 2 3 4", "4 3 2", "Error"],
        correct: 0,
        pembahasan: "Loop mundur dari 4 ke 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    if (i === 1) break;\n    console.log(i);\n}",
        a: ["0", "1", "0 1", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti di i === 1, hanya cetak 0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = [1, 2, 3];\nfor (let i of x) {\n    if (i % 2 === 0) console.log(i);\n}",
        a: ["2", "1 2", "1 3", "Error"],
        correct: 0,
        pembahasan: "Hanya angka genap (2) yang dicetak."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 4; i++) {\n    console.log('*'.repeat(i));\n}",
        a: ["* ** ***", "*** ** *", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop menghasilkan segitiga bintang bertingkat."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 2; i++) {\n    for (let j = 0; j < 2; j++) {\n        process.stdout.write((i + j) + ' ');\n    }\n}",
        a: ["0 1 1 2", "1 2 3 4", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "i=0→(0,1), i=1→(1,2)."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let i = 0;\nwhile (i < 3) {\n    console.log('*');\n    i++;\n}",
        a: ["* * *", "*", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop while mencetak '*' sebanyak 3 kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    if (i === 1) continue;\n    console.log('A', i);\n}",
        a: ["A 0 A 2", "A 0 A 1 A 2", "A 1 A 2", "Error"],
        correct: 0,
        pembahasan: "Melewati i === 1, hanya mencetak 0 dan 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 5;\nwhile (x > 0) {\n    x -= 2;\n}\nconsole.log(x);",
        a: ["-1", "1", "0", "Error"],
        correct: 0,
        pembahasan: "x berkurang 2 tiap iterasi → terakhir -1."
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
