let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL DASAR (ABSTRACTION) ===================
    {
        q: "Apa output dari kode berikut?",
        code: `class Hewan {
    suara() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
// Tidak ada instance dibuat`,
        a: ["Tidak ada output", "Error", "suara()", "undefined"],
        correct: 0,
        pembahasan: "Tidak ada objek yang dibuat, jadi tidak ada output."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    tampil() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
let obj = new A();`,
        a: ["Error", "Tidak ada output", "undefined", "tampil"],
        correct: 0,
        pembahasan: "Kelas abstrak tidak bisa digunakan langsung karena metodenya belum diimplementasikan."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Hewan {
    suara() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class Kucing extends Hewan {
    suara() {
        console.log("Meong");
    }
}
let k = new Kucing();
k.suara();`,
        a: ["Meong", "Error", "undefined", "pass"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak → mencetak 'Meong'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Bentuk {
    luas() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class Persegi extends Bentuk {
    luas() {
        return 25;
    }
}
let p = new Persegi();
console.log(p.luas());`,
        a: ["25", "Error", "luas", "undefined"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasikan dan mengembalikan 25."
    },
    {
        q: "Apa hasil kode berikut?",
        code: `class Tes {
    f() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class Coba extends Tes {}
let obj = new Coba();`,
        a: ["Error", "Tidak ada output", "undefined", "pass"],
        correct: 0,
        pembahasan: "Kelas Coba belum mengimplementasikan f(), jadi error saat instansiasi."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    tampil() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class B extends A {
    tampil() {
        console.log("Halo");
    }
}
new B().tampil();`,
        a: ["Halo", "Error", "undefined", "pass"],
        correct: 0,
        pembahasan: "Metode tampil() diimplementasikan → output 'Halo'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: `class Mesin {
    hidupkan() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class Mobil extends Mesin {
    hidupkan() {
        console.log("Mesin hidup");
    }
}
let m = new Mobil();
m.hidupkan();`,
        a: ["Mesin hidup", "Error", "pass", "undefined"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi dengan benar."
    },
    {
        q: "Apa hasil kode berikut?",
        code: `class A {
    show() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class B extends A {
    show() {
        return "OK";
    }
}
console.log(new B().show());`,
        a: ["OK", "Error", "undefined", "show"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasikan dan dipanggil → 'OK'."
    },
    {
        q: "Apa yang terjadi jika metode abstrak tidak diimplementasikan di subclass?",
        a: ["Error saat membuat objek", "Program tetap jalan", "Hanya peringatan", "Metode diabaikan"],
        correct: 0,
        pembahasan: "Akan error ketika memanggil metode yang belum diimplementasikan."
    },
    {
        q: "Apa fungsi dari konsep metode abstrak?",
        a: ["Menandai metode harus diimplementasi di subclass", "Menjalankan otomatis", "Membuat fungsi privat", "Menghapus fungsi"],
        correct: 0,
        pembahasan: "Metode abstrak menandakan bahwa subclass wajib mengimplementasikannya."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Bentuk {
    luas() {
        throw new Error("Harus diimplementasikan");
    }
}
class Lingkaran extends Bentuk {
    luas() {
        return 3.14 * 5 * 5;
    }
}
console.log(new Lingkaran().luas());`,
        a: ["78.5", "Error", "3.14", "25"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak dengan rumus luas lingkaran."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    f1() {
        throw new Error("Abstrak");
    }
}
class B extends A {
    f1() {
        console.log("Implementasi B");
    }
}
let b = new B();
b.f1();`,
        a: ["Implementasi B", "Error", "undefined", "pass"],
        correct: 0,
        pembahasan: "B mengimplementasikan f1() dengan benar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    tampil() {
        throw new Error("Abstrak");
    }
}
class B extends A {
    tampil() {
        console.log("B tampil");
    }
}
class C extends B {}
new C().tampil();`,
        a: ["B tampil", "Error", "C tampil", "undefined"],
        correct: 0,
        pembahasan: "C mewarisi implementasi tampil() dari B."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class X {
    f() {
        throw new Error("Abstrak");
    }
}
class Y extends X {
    f() {
        console.log("Y");
    }
}
class Z extends Y {
    f() {
        super.f();
    }
}
new Z().f();`,
        a: ["Y", "Z", "Error", "undefined"],
        correct: 0,
        pembahasan: "super.f() memanggil implementasi dari Y → output 'Y'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    f() {
        throw new Error("Abstrak");
    }
}
class B extends A {
    f() {
        console.log("B");
    }
}
class C extends B {
    g() {
        console.log("C");
    }
}
new C().f();`,
        a: ["B", "C", "Error", "undefined"],
        correct: 0,
        pembahasan: "C mewarisi f() dari B → mencetak 'B'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    data() { throw new Error("Abstrak"); }
}
class B extends A {
    data() { return 10; }
}
console.log(new B() instanceof A);`,
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "B adalah subclass dari A, jadi instanceof bernilai true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Animal {
    sound() { throw new Error("Abstrak"); }
}
class Dog extends Animal {
    sound() { return "Bark"; }
}
console.log(new Dog().sound());`,
        a: ["Bark", "Error", "undefined", "sound"],
        correct: 0,
        pembahasan: "Metode sound diimplementasikan, hasilnya 'Bark'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Base {
    show() { throw new Error("Abstrak"); }
}
class Derived extends Base {
    show() { console.log("Derived"); }
}
let obj = new Derived();
obj.show();`,
        a: ["Derived", "Base", "Error", "undefined"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi di subclass Derived."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Satu {
    run() { throw new Error("Abstrak"); }
}
class Dua extends Satu {
    run() { console.log("Berjalan"); }
}
new Dua().run();`,
        a: ["Berjalan", "Error", "undefined", "run"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak dengan benar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Bentuk {
    nama() { throw new Error("Abstrak"); }
}
class Persegi extends Bentuk {
    nama() { return "Persegi"; }
}
let b = new Persegi();
console.log(b.nama());`,
        a: ["Persegi", "Error", "undefined", "nama"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi → mengembalikan 'Persegi'."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    tampil() { throw new Error("Abstrak"); }
}
class B extends A {
    tampil() { console.log("B"); }
}
class C extends B {
    tampil() {
        super.tampil();
        console.log("C");
    }
}
new C().tampil();`,
        a: ["B\\nC", "C\\nB", "Error", "B"],
        correct: 0,
        pembahasan: "super() memanggil tampil() dari B lalu mencetak 'C'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Base {
    info() { throw new Error("Abstrak"); }
}
class Sub extends Base {
    info() { return 42; }
}
console.log(new Sub().info() * 2);`,
        a: ["84", "42", "Error", "undefined"],
        correct: 0,
        pembahasan: "Metode abstrak mengembalikan 42, dikali 2 = 84."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Base {
    data() { throw new Error("Abstrak"); }
}
class Child extends Base {
    data() { return [1, 2, 3]; }
}
console.log(Child.prototype.data.call(new Child()).reduce((a,b)=>a+b));`,
        a: ["6", "3", "Error", "undefined"],
        correct: 0,
        pembahasan: "Metode mengembalikan array [1,2,3], hasil penjumlahan = 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class X {
    nilai() { throw new Error("Abstrak"); }
}
class Y extends X {
    nilai() { return 5; }
}
class Z extends Y {
    nilai() { return super.nilai() + 5; }
}
console.log(new Z().nilai());`,
        a: ["10", "5", "Error", "undefined"],
        correct: 0,
        pembahasan: "Z menambah 5 dari nilai() superclass Y → total 10."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Transport {
    jalan() { throw new Error("Abstrak"); }
}
class Mobil extends Transport {
    jalan() { console.log("Braaak!"); }
}
let m = new Mobil();
m.jalan();`,
        a: ["Braaak!", "Error", "undefined", "jalan"],
        correct: 0,
        pembahasan: "Implementasi metode abstrak berhasil dijalankan."
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
