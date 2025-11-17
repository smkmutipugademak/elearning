let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "class Hewan {\n  suara() {\n    console.log('Hewan bersuara');\n  }\n}\n\nclass Kucing extends Hewan {\n  suara() {\n    console.log('Meong');\n  }\n}\n\nconst obj = new Kucing();\nobj.suara();",
        a: ["Meong", "Hewan bersuara", "Error", "None"],
        correct: 0,
        pembahasan: "Metode suara() dioverride di subclass Kucing, hasilnya 'Meong'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  tampil() { console.log('A'); }\n}\nclass B extends A {\n  tampil() { console.log('B'); }\n}\nconst obj = new B();\nobj.tampil();",
        a: ["B", "A", "Error", "None"],
        correct: 0,
        pembahasan: "Metode tampil() di kelas B menimpa metode A."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Burung {\n  suara() { console.log('Cuit'); }\n}\nclass Ayam extends Burung {\n  suara() { console.log('Kukuruyuk'); }\n}\nconst obj = new Ayam();\nobj.suara();",
        a: ["Kukuruyuk", "Cuit", "Error", "None"],
        correct: 0,
        pembahasan: "Subclass Ayam menimpa metode suara() dari Burung."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Bentuk {\n  luas() { console.log('Tidak diketahui'); }\n}\nclass Persegi extends Bentuk {\n  luas() { console.log('Luas = sisi * sisi'); }\n}\n\nconst b = new Persegi();\nb.luas();",
        a: ["Luas = sisi * sisi", "Tidak diketahui", "Error", "None"],
        correct: 0,
        pembahasan: "Metode luas() pada subclass menimpa metode parent."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  f() { console.log('A'); }\n}\nclass B extends A {}\nnew B().f();",
        a: ["A", "B", "Error", "None"],
        correct: 0,
        pembahasan: "Karena B tidak menimpa f(), maka f() dari A dijalankan."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  halo() { console.log('Halo A'); }\n}\nclass B extends A {\n  halo() { console.log('Halo B'); }\n}\nclass C extends B {}\n\nnew C().halo();",
        a: ["Halo B", "Halo A", "Error", "None"],
        correct: 0,
        pembahasan: "C mewarisi halo() dari B karena tidak menimpa."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class X {\n  tampil() { console.log('X'); }\n}\nclass Y extends X {\n  tampil() { console.log('Y'); }\n}\nconst obj = new X();\nobj.tampil();",
        a: ["X", "Y", "Error", "None"],
        correct: 0,
        pembahasan: "Objek berasal dari kelas X, maka metode dari X yang dipanggil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Ayam {\n  suara() { console.log('Kukuruyuk'); }\n}\nclass Sapi {\n  suara() { console.log('Mooo'); }\n}\nfor (const hewan of [new Ayam(), new Sapi()]) {\n  hewan.suara();\n}",
        a: ["Kukuruyuk\\nMooo", "Mooo\\nKukuruyuk", "Error", "None"],
        correct: 0,
        pembahasan: "Dua objek berbeda, keduanya punya metode suara sendiri (duck typing)."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  cetak() { console.log('A'); }\n}\nclass B extends A {\n  cetak() { console.log('B'); }\n}\nnew A().cetak();\nnew B().cetak();",
        a: ["A\\nB", "B\\nA", "Error", "None"],
        correct: 0,
        pembahasan: "Keduanya mencetak metode sesuai kelas masing-masing."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Binatang {\n  suara() { console.log('Binatang umum'); }\n}\nclass Kucing extends Binatang {\n  suara() { super.suara(); }\n}\nnew Kucing().suara();",
        a: ["Binatang umum", "Kucing", "Error", "None"],
        correct: 0,
        pembahasan: "super.memanggil versi parent dari metode suara()."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Bentuk {\n  tampil() { console.log('Bentuk'); }\n}\nclass Persegi extends Bentuk {\n  tampil() { console.log('Persegi'); }\n}\nclass Lingkaran extends Bentuk {\n  tampil() { console.log('Lingkaran'); }\n}\nfor (const x of [new Persegi(), new Lingkaran()]) {\n  x.tampil();\n}",
        a: ["Persegi\\nLingkaran", "Bentuk\\nBentuk", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap objek menjalankan metode tampil() sesuai kelasnya."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  f() { console.log('A'); }\n}\nclass B extends A {\n  f() { console.log('B'); }\n}\nclass C extends A {\n  f() { console.log('C'); }\n}\nfor (const obj of [new A(), new B(), new C()]) {\n  obj.f();\n}",
        a: ["A\\nB\\nC", "B\\nC\\nA", "C\\nA\\nB", "Error"],
        correct: 0,
        pembahasan: "Setiap kelas menimpa f() sesuai definisinya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Mobil {\n  jalan() { console.log('Mobil berjalan'); }\n}\nclass Motor extends Mobil {\n  jalan() { console.log('Motor melaju'); }\n}\nconst obj = [new Mobil(), new Motor()];\nfor (const i of obj) i.jalan();",
        a: ["Mobil berjalan\\nMotor melaju", "Motor melaju\\nMobil berjalan", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap objek memanggil metode sendiri."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  cetak() { console.log('A'); }\n}\nclass B extends A {\n  cetak() {\n    super.cetak();\n    console.log('B');\n  }\n}\nnew B().cetak();",
        a: ["A\\nB", "B\\nA", "Error", "None"],
        correct: 0,
        pembahasan: "super.cetak() memanggil versi A, lalu print 'B'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Orang {\n  bicara() { console.log('Halo'); }\n}\nclass Dosen extends Orang {\n  bicara() { console.log('Selamat datang'); }\n}\nconst obj = new Orang();\nconst obj2 = new Dosen();\nobj.bicara();\nobj2.bicara();",
        a: ["Halo\\nSelamat datang", "Selamat datang\\nHalo", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap objek menggunakan metode versinya sendiri."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Base {\n  tampil() { console.log('Base'); }\n}\nclass Sub extends Base {\n  tampil() {\n    super.tampil();\n    console.log('Sub');\n  }\n}\nnew Sub().tampil();",
        a: ["Base\\nSub", "Sub\\nBase", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil parent sebelum menampilkan 'Sub'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  f() { return 'A'; }\n}\nclass B extends A {\n  f() { return super.f() + 'B'; }\n}\nconsole.log(new B().f());",
        a: ["AB", "BA", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil f() dari A lalu menambahkan 'B'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  nilai() { return 10; }\n}\nclass B extends A {\n  nilai() { return super.nilai() + 5; }\n}\nconsole.log(new B().nilai());",
        a: ["15", "10", "Error", "None"],
        correct: 0,
        pembahasan: "Metode di B menambah hasil metode parent 10 + 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Satu {\n  show() { console.log('Satu'); }\n}\nclass Dua extends Satu {\n  show() { console.log('Dua'); }\n}\nclass Tiga extends Satu {\n  show() { console.log('Tiga'); }\n}\nfor (const obj of [new Satu(), new Dua(), new Tiga()]) obj.show();",
        a: ["Satu\\nDua\\nTiga", "Tiga\\nDua\\nSatu", "Error", "None"],
        correct: 0,
        pembahasan: "Polymorphism: setiap class menjalankan versi show() masing-masing."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  tampil() { console.log('A'); }\n}\nclass B extends A {\n  tampil() { console.log('B'); }\n}\nclass C extends B {\n  tampil() { super.tampil(); }\n}\nnew C().tampil();",
        a: ["B", "A", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil metode tampil() milik B."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "class X {\n  tampil() { console.log('X'); }\n}\nclass Y extends X {\n  tampil() {\n    super.tampil();\n    console.log('Y');\n  }\n}\nclass Z extends Y {\n  tampil() {\n    super.tampil();\n    console.log('Z');\n  }\n}\nnew Z().tampil();",
        a: ["X\\nY\\nZ", "Z\\nY\\nX", "Error", "None"],
        correct: 0,
        pembahasan: "Pemanggilan bertingkat menggunakan super()."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  data() { return 2; }\n}\nclass B extends A {\n  data() { return super.data() * 3; }\n}\nconsole.log(new B().data());",
        a: ["6", "2", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil parent (2) lalu dikali 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  f() { console.log('A'); }\n}\nclass B extends A {\n  f() { console.log('B'); }\n}\nclass C extends B {\n  f() { super.f(); }\n}\nnew C().f();",
        a: ["B", "A", "Error", "None"],
        correct: 0,
        pembahasan: "super().f() memanggil f() milik B."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Hewan {\n  suara() { console.log('Hewan'); }\n}\nclass Anjing extends Hewan {\n  suara() { console.log('Guk'); }\n}\nclass Kucing extends Hewan {\n  suara() { console.log('Meong'); }\n}\nfor (const h of [new Anjing(), new Kucing(), new Hewan()]) h.suara();",
        a: ["Guk\\nMeong\\nHewan", "Hewan\\nGuk\\nMeong", "Error", "None"],
        correct: 0,
        pembahasan: "Polymorphism: setiap class menjalankan versinya sendiri."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Base {\n  show() { console.log('Base'); }\n}\nclass Child extends Base {\n  show() {\n    console.log('Child');\n    super.show();\n  }\n}\nnew Child().show();",
        a: ["Child\\nBase", "Base\\nChild", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil metode parent setelah child menampilkan pesannya."
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
