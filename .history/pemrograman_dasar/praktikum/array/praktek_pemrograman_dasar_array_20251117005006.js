let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (ARRAY DASAR) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka[0]);",
        a: ["1", "2", "3", "Error"],
        correct: 0,
        pembahasan: "Indeks pertama (0) berisi nilai 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [5, 10, 15];\nconsole.log(angka[2]);",
        a: ["5", "10", "15", "Error"],
        correct: 2,
        pembahasan: "Indeks ke-2 menunjukkan elemen ketiga yaitu 15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka.length);",
        a: ["2", "3", "4", "Error"],
        correct: 1,
        pembahasan: "Properti length menghitung jumlah elemen dalam array, yaitu 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [];\nangka.push(10);\nconsole.log(angka);",
        a: ["[]", "[10]", "10", "Error"],
        correct: 1,
        pembahasan: "push() menambah elemen ke akhir array → [10]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2];\nangka.push(3);\nconsole.log(angka);",
        a: ["[1, 2, 3]", "[3, 2, 1]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "push() menambahkan elemen 3 di akhir array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [10, 20, 30];\nangka[1] = 99;\nconsole.log(angka);",
        a: ["[10, 99, 30]", "[99, 20, 30]", "[10, 20, 30]", "Error"],
        correct: 0,
        pembahasan: "Elemen pada indeks ke-1 diubah menjadi 99."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka.pop();\nconsole.log(angka);",
        a: ["[1, 2]", "[2, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "pop() menghapus elemen terakhir → [1, 2]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka[angka.length - 1]);",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Indeks terakhir adalah length - 1, hasilnya 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [2, 4];\nconsole.log(angka.concat(angka));",
        a: ["[2, 4, 2, 4]", "[4, 8]", "[2, 4, 4]", "Error"],
        correct: 0,
        pembahasan: "concat() menggandakan isi array → [2, 4, 2, 4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka.reduce((a,b)=>a+b));",
        a: ["6", "123", "Error", "None"],
        correct: 0,
        pembahasan: "reduce() menjumlahkan semua elemen → 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [5, 6, 7];\nconsole.log(angka.includes(2));",
        a: ["True", "False", "Error", "None"],
        correct: 1,
        pembahasan: "2 tidak ada di array [5,6,7] → hasilnya false."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka.slice(0, 2));",
        a: ["[1, 2]", "[2, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "slice(0,2) mengambil indeks 0 dan 1 → [1,2]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka = [];\nconsole.log(angka);",
        a: ["[]", "[1, 2, 3]", "None", "Error"],
        correct: 0,
        pembahasan: "Array dikosongkan, hasilnya []."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [2, 4, 6];\nconsole.log(Math.max(...angka));",
        a: ["2", "4", "6", "Error"],
        correct: 2,
        pembahasan: "Math.max() mencari nilai terbesar dalam array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [3, 1, 2];\nangka.sort();\nconsole.log(angka);",
        a: ["[3, 1, 2]", "[1, 2, 3]", "[2, 1, 3]", "Error"],
        correct: 1,
        pembahasan: "sort() mengurutkan elemen secara ascending (string-based, tapi tetap benar di sini)."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka.reverse();\nconsole.log(angka);",
        a: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"],
        correct: 0,
        pembahasan: "reverse() membalik urutan elemen dalam array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [10];\nconsole.log(angka.length);",
        a: ["0", "1", "10", "Error"],
        correct: 1,
        pembahasan: "Array berisi satu elemen, panjangnya 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 1, 1];\nconsole.log(angka.filter(x => x === 1).length);",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Ada tiga angka 1 dalam array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka.splice(1, 0, 5);\nconsole.log(angka);",
        a: ["[1, 5, 2, 3]", "[5, 1, 2, 3]", "[1, 2, 5, 3]", "Error"],
        correct: 0,
        pembahasan: "splice(1,0,5) menyisipkan 5 di posisi indeks 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka.splice(angka.indexOf(2), 1);\nconsole.log(angka);",
        a: ["[1, 3]", "[2, 3]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "splice() menghapus nilai pertama yang cocok, yaitu 2."
    },

    // =================== LEVEL MENENGAH (ARRAY OPERASI & LOGIKA) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka.filter((_,i)=>i%2===0));",
        a: ["[1, 3]", "[2, 3]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "Indeks genap diambil → [1,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nlet angka2 = angka.slice();\nangka2.push(4);\nconsole.log(angka);",
        a: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
        correct: 0,
        pembahasan: "slice() membuat salinan, jadi array asli tidak berubah."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2];\nlet buah = ['apel', 'pisang'];\nconsole.log(angka.concat(buah));",
        a: ["[1, 2, 'apel', 'pisang']", "['apel', 'pisang', 1, 2]", "Error", "[1, 2]['apel','pisang']"],
        correct: 0,
        pembahasan: "concat() menggabungkan dua array menjadi satu."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let data = [[1,2], [3,4]];\nconsole.log(data[1][0]);",
        a: ["1", "2", "3", "4"],
        correct: 2,
        pembahasan: "data[1] = [3,4], lalu [0] mengambil elemen pertama yaitu 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4];\nconsole.log(angka.slice(1,3));",
        a: ["[2, 3]", "[1, 2, 3]", "[3, 4]", "Error"],
        correct: 0,
        pembahasan: "slice(1,3) mengambil indeks 1 dan 2 → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4,5];\nconsole.log(angka.filter((_,i)=>i%2!==0));",
        a: ["[2, 4]", "[1,3,5]", "[2,3,4]", "Error"],
        correct: 0,
        pembahasan: "Indeks ganjil diambil → [2,4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [10,20,30];\nangka.forEach(x=>process.stdout.write(x + ' '));",
        a: ["10 20 30 ", "10,20,30", "[10, 20, 30]", "Error"],
        correct: 0,
        pembahasan: "Loop menampilkan setiap elemen dipisah spasi."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3];\nconsole.log(angka.reduce((a,b)=>a+b)/angka.length);",
        a: ["2.0", "3.0", "1.0", "Error"],
        correct: 0,
        pembahasan: "Rata-rata (1+2+3)/3 = 2.0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, [2,3], 4];\nconsole.log(angka[1][1]);",
        a: ["1", "2", "3", "4"],
        correct: 2,
        pembahasan: "angka[1] = [2,3], lalu indeks [1] → 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [4,2,8,6];\nangka.sort((a,b)=>b-a);\nconsole.log(angka);",
        a: ["[8, 6, 4, 2]", "[2, 4, 6, 8]", "Error", "None"],
        correct: 0,
        pembahasan: "Sort dengan pembanding (b-a) mengurutkan dari besar ke kecil."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3, 4];\nconsole.log(angka.slice(-3,-1));",
        a: ["[2, 3]", "[3, 4]", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "slice(-3,-1) mengambil elemen kedua dan ketiga → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = [1, 2];\nlet b = a;\nb.push(3);\nconsole.log(a);",
        a: ["[1, 2, 3]", "[1, 2]", "[3]", "Error"],
        correct: 0,
        pembahasan: "a dan b menunjuk array yang sama, jadi keduanya berubah."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3].map(x=>x*2);\nconsole.log(angka);",
        a: ["[2, 4, 6]", "[1,2,3]", "[1,4,9]", "Error"],
        correct: 0,
        pembahasan: "map() menggandakan setiap elemen."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [10, 20, 30];\nconsole.log(angka.indexOf(20));",
        a: ["0", "1", "2", "Error"],
        correct: 1,
        pembahasan: "indexOf(20) mengembalikan posisi nilai 20, yaitu indeks 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3];\nangka.shift();\nconsole.log(angka);",
        a: ["[2, 3]", "[1, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "shift() menghapus elemen pertama → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3];\nangka.push(...[4,5]);\nconsole.log(angka);",
        a: ["[1, 2, 3, 4, 5]", "[[1,2,3],[4,5]]", "[4,5,1,2,3]", "Error"],
        correct: 0,
        pembahasan: "push(...[4,5]) menambah semua elemen ke akhir array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4];\nconsole.log([...angka].reverse());",
        a: ["[4, 3, 2, 1]", "[1,2,3,4]", "Error", "None"],
        correct: 0,
        pembahasan: "Spread copy lalu reverse membalik urutan array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4,5];\nconsole.log(angka.filter((_,i)=>i%3===0));",
        a: ["[1, 4]", "[3, 5]", "[1, 3, 5]", "Error"],
        correct: 0,
        pembahasan: "Ambil elemen tiap tiga langkah (indeks 0 dan 3) → [1,4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka = angka.concat(angka);\nconsole.log(angka);",
        a: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "concat() menggandakan isi array dua kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4];\nconsole.log(angka.slice(1,3).reduce((a,b)=>a+b));",
        a: ["5", "6", "9", "7"],
        correct: 0,
        pembahasan: "slice(1,3) menghasilkan [2,3], jumlahnya 5."
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
