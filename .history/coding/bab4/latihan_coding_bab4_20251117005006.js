let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0; // in seconds

const quizData = [
    {
        q: "Fungsi utama perintah UPDATE dalam SQL adalah?",
        a: [
            "Menambah tabel baru",
            "Menghapus tabel dari database",
            "Mengubah isi data field dalam record",
            "Menampilkan seluruh data",
            "Menghapus field dalam tabel"
        ],
        correct: 2,
        pembahasan: "UPDATE digunakan untuk mengubah isi data pada suatu record dalam tabel."
    },
    {
        q: "Bentuk umum sintaks UPDATE yang benar adalah?",
        a: [
            "UPDATE SET nama_tabel WHERE nama_field = 'value'",
            "UPDATE nama_tabel SET nama_field = 'value' WHERE nama_field = 'value'",
            "UPDATE nama_field SET nama_tabel = 'value'",
            "UPDATE nama_field WHERE nama_tabel = 'value'",
            "UPDATE TABLE nama_field SET nama_tabel = 'value'"
        ],
        correct: 1,
        pembahasan: "Format umumnya adalah UPDATE nama_tabel SET kolom = 'nilai' WHERE kondisi."
    },
    {
        q: "Fungsi perintah DELETE dalam SQL adalah?",
        a: [
            "Menambah kolom baru",
            "Menghapus sebuah record",
            "Mengubah struktur tabel",
            "Menampilkan metadata tabel",
            "Menghapus database"
        ],
        correct: 1,
        pembahasan: "DELETE digunakan untuk menghapus data (record) dalam tabel."
    },
    {
        q: "Sintaks dasar perintah DELETE yang benar adalah?",
        a: [
            "DELETE TABLE nama_tabel WHERE kondisi",
            "DELETE RECORD nama_tabel WHERE kondisi",
            "DELETE nama_tabel WHERE nama_field = 'value'",
            "DELETE FROM nama_tabel WHERE nama_field = 'value'",
            "DELETE DATABASE nama_tabel"
        ],
        correct: 3,
        pembahasan: "Penulisan yang benar adalah DELETE FROM nama_tabel WHERE kondisi."
    },
    {
        q: "Fungsi utama perintah ALTER adalah?",
        a: [
            "Menghapus tabel",
            "Mengubah isi data",
            "Mengubah struktur tabel",
            "Menampilkan data",
            "Menghapus record"
        ],
        correct: 2,
        pembahasan: "ALTER digunakan untuk menambah, mengubah, atau menghapus kolom dari tabel."
    },
    {
        q: "Perintah untuk menambahkan field baru pada tabel adalah?",
        a: [
            "ALTER TABLE nama_tabel ADD nama_field tipedata",
            "ALTER TABLE nama_tabel DROP nama_field",
            "ALTER TABLE nama_tabel CHANGE nama_field tipedata",
            "ALTER DATABASE nama_database ADD field",
            "ALTER ADD TABLE field tipedata"
        ],
        correct: 0,
        pembahasan: "Menambah kolom baru menggunakan ALTER TABLE nama_tabel ADD nama_field tipedata."
    },
    {
        q: "Perintah untuk mengganti nama kolom adalah?",
        a: [
            "ALTER TABLE nama_tabel MODIFY field_lama field_baru tipedata",
            "ALTER TABLE nama_tabel CHANGE field_lama field_baru tipedata",
            "UPDATE TABLE nama_tabel SET field_baru",
            "ALTER FIELD nama_field",
            "MODIFY TABLE nama_tabel CHANGE field_baru"
        ],
        correct: 1,
        pembahasan: "Gunakan CHANGE untuk mengganti nama kolom dan/atau tipe datanya."
    },
    {
        q: "Untuk menghapus kolom dalam tabel digunakan perintah?",
        a: [
            "ALTER TABLE nama_tabel REMOVE nama_field",
            "DELETE nama_field FROM nama_tabel",
            "ALTER TABLE nama_tabel DROP nama_field",
            "UPDATE TABLE nama_tabel DROP nama_field",
            "DROP COLUMN nama_field"
        ],
        correct: 2,
        pembahasan: "Perintah ALTER TABLE nama_tabel DROP nama_field digunakan untuk menghapus kolom."
    },
    {
        q: "Fungsi DROP dalam SQL adalah?",
        a: [
            "Menghapus record",
            "Menghapus struktur database atau tabel",
            "Mengubah kolom",
            "Menampilkan struktur tabel",
            "Menambah field"
        ],
        correct: 1,
        pembahasan: "DROP digunakan untuk menghapus tabel atau database secara keseluruhan."
    },
    {
        q: "Perintah untuk menghapus tabel adalah?",
        a: [
            "DROP DATABASE nama_database",
            "DROP TABLE nama_tabel",
            "DELETE TABLE nama_tabel",
            "REMOVE TABLE nama_tabel",
            "DELETE FROM nama_tabel"
        ],
        correct: 1,
        pembahasan: "DROP TABLE nama_tabel digunakan untuk menghapus seluruh tabel beserta strukturnya."
    },
    {
        q: "Perintah untuk menghapus database adalah?",
        a: [
            "DELETE DATABASE nama_database",
            "DROP DATABASE nama_database",
            "REMOVE DATABASE nama_database",
            "ALTER DATABASE DROP",
            "DROP TABLE nama_database"
        ],
        correct: 1,
        pembahasan: "DROP DATABASE nama_database digunakan untuk menghapus database dari sistem."
    },
    {
        q: "Fungsi perintah DESC adalah?",
        a: [
            "Menghapus database",
            "Menampilkan struktur tabel",
            "Mengubah tipe data",
            "Menambahkan kolom baru",
            "Menghapus record"
        ],
        correct: 1,
        pembahasan: "DESC digunakan untuk melihat struktur tabel seperti nama kolom dan tipe data."
    },
    {
        q: "Perintah untuk menampilkan struktur tabel bernama barang adalah?",
        a: [
            "STRUCT barang;",
            "SHOW TABLE barang;",
            "DESC barang;",
            "DISPLAY barang;",
            "LIST barang;"
        ],
        correct: 2,
        pembahasan: "Gunakan DESC nama_tabel; untuk melihat struktur kolom dan tipe data."
    },
    {
        q: "Kolom kunci utama (primary key) pada tabel barang adalah?",
        a: ["nama_barang", "jenis_barang", "harga_beli", "id", "stok"],
        correct: 3,
        pembahasan: "Kolom 'id' digunakan sebagai primary key tabel barang."
    },
    {
        q: "Perintah untuk mengubah stok barang B01 menjadi 15 adalah?",
        a: [
            "UPDATE barang SET stok = 15;",
            "UPDATE barang SET stok = '15' WHERE id = 'B01';",
            "MODIFY stok TO 15 WHERE id = B01;",
            "CHANGE barang stok = 15;",
            "UPDATE FROM barang SET stok = 15;"
        ],
        correct: 1,
        pembahasan: "UPDATE barang SET stok = '15' WHERE id = 'B01'; adalah bentuk yang benar."
    },
    {
        q: "Perintah untuk menghapus record dengan id B01 adalah?",
        a: [
            "DELETE barang id = 'B01';",
            "DELETE FROM barang WHERE id = 'B01';",
            "DROP RECORD barang WHERE id = 'B01';",
            "REMOVE barang id = 'B01';",
            "UPDATE barang SET id = NULL WHERE id = 'B01';"
        ],
        correct: 1,
        pembahasan: "DELETE FROM barang WHERE id = 'B01'; menghapus record dengan ID tertentu."
    },
    {
        q: "Perintah untuk menambahkan kolom 'distributor' bertipe CHAR(15) adalah?",
        a: [
            "ALTER TABLE barang ADD distributor char(15);",
            "UPDATE barang ADD distributor char(15);",
            "ADD COLUMN distributor TO barang;",
            "CREATE FIELD distributor char(15);",
            "ALTER barang ADD distributor varchar(15);"
        ],
        correct: 0,
        pembahasan: "Gunakan ALTER TABLE barang ADD distributor char(15); untuk menambah kolom baru."
    },
    {
        q: "Perintah untuk mengubah kolom 'distributor' menjadi 'penyalur' bertipe CHAR(15) adalah?",
        a: [
            "ALTER TABLE barang RENAME distributor TO penyalur;",
            "ALTER TABLE barang CHANGE distributor penyalur char(15);",
            "UPDATE TABLE barang SET penyalur = distributor;",
            "ALTER barang MODIFY distributor penyalur;",
            "ALTER TABLE barang ADD penyalur;"
        ],
        correct: 1,
        pembahasan: "CHANGE digunakan untuk mengganti nama dan tipe kolom."
    },
    {
        q: "Perintah untuk menghapus kolom 'penyalur' adalah?",
        a: [
            "ALTER TABLE barang DROP penyalur;",
            "DELETE penyalur FROM barang;",
            "REMOVE COLUMN penyalur;",
            "UPDATE barang REMOVE penyalur;",
            "DROP FIELD penyalur;"
        ],
        correct: 0,
        pembahasan: "Gunakan ALTER TABLE barang DROP penyalur; untuk menghapus kolom dari tabel."
    },
    {
        q: "Perintah untuk membuat database bernama COBA_DROP adalah?",
        a: [
            "CREATE DATABASE COBA_DROP;",
            "DROP DATABASE COBA_DROP;",
            "NEW DATABASE COBA_DROP;",
            "ADD DATABASE COBA_DROP;",
            "MAKE DATABASE COBA_DROP;"
        ],
        correct: 0,
        pembahasan: "CREATE DATABASE digunakan untuk membuat database baru."
    },
    {
        q: "Untuk membuat tabel COBA_DROP dengan field coba (int) digunakan perintah?",
        a: [
            "CREATE TABLE COBA_DROP (coba integer);",
            "CREATE TABLE COBA_DROP coba int;",
            "NEW TABLE COBA_DROP (coba int);",
            "MAKE TABLE COBA_DROP int(coba);",
            "ADD TABLE COBA_DROP (int coba);"
        ],
        correct: 0,
        pembahasan: "CREATE TABLE COBA_DROP (coba integer); membuat tabel baru dengan kolom coba."
    },
    {
        q: "Untuk menghapus tabel COBA_DROP digunakan perintah?",
        a: [
            "DELETE TABLE COBA_DROP;",
            "DROP TABLE COBA_DROP;",
            "REMOVE TABLE COBA_DROP;",
            "ERASE TABLE COBA_DROP;",
            "DELETE FROM COBA_DROP;"
        ],
        correct: 1,
        pembahasan: "DROP TABLE COBA_DROP; akan menghapus tabel beserta struktur datanya."
    },
    {
        q: "Keyword SET pada perintah UPDATE digunakan untuk?",
        a: [
            "Menentukan tabel yang diubah",
            "Menentukan kolom dan nilai baru",
            "Menghapus record tertentu",
            "Menampilkan kolom",
            "Mengganti tipe data"
        ],
        correct: 1,
        pembahasan: "SET digunakan untuk menentukan kolom dan nilai baru yang ingin diubah."
    },
    {
        q: "Klausa WHERE digunakan untuk?",
        a: [
            "Menentukan tabel",
            "Menentukan kondisi record yang akan diubah atau dihapus",
            "Menentukan tipe data",
            "Menampilkan seluruh data",
            "Menghapus field tertentu"
        ],
        correct: 1,
        pembahasan: "WHERE digunakan untuk memberi syarat pada data yang diubah atau dihapus."
    },
    {
        q: "Jika perintah DELETE tidak menggunakan klausa WHERE, maka?",
        a: [
            "Tidak ada data yang dihapus",
            "Hanya satu record dihapus",
            "Semua record akan dihapus",
            "Akan muncul error",
            "Hanya field kosong yang dihapus"
        ],
        correct: 2,
        pembahasan: "Tanpa WHERE, semua data dalam tabel akan dihapus."
    },
    {
        q: "Untuk mengubah dua kolom sekaligus dalam satu UPDATE digunakan?",
        a: [
            "UPDATE barang SET harga_beli = 5000, harga_jual = 7000 WHERE id='B03';",
            "UPDATE barang SET harga_beli = 5000; UPDATE harga_jual = 7000;",
            "ALTER TABLE barang CHANGE harga_beli harga_jual;",
            "UPDATE 2 COLUMNS barang;",
            "UPDATE harga_beli, harga_jual = 5000, 7000;"
        ],
        correct: 0,
        pembahasan: "Gunakan koma untuk memisahkan kolom yang ingin diubah."
    },
    {
        q: "Perintah ALTER TABLE nama_tabel CHANGE field_lama field_baru tipedata digunakan untuk?",
        a: [
            "Menambah kolom baru",
            "Menghapus tabel",
            "Mengganti nama dan tipe data kolom",
            "Mengubah isi data",
            "Menampilkan kolom"
        ],
        correct: 2,
        pembahasan: "CHANGE berfungsi untuk mengganti nama kolom dan/atau tipe datanya."
    },
    {
        q: "Untuk menampilkan semua isi tabel barang digunakan perintah?",
        a: [
            "SHOW ALL barang;",
            "SELECT * FROM barang;",
            "DISPLAY TABLE barang;",
            "DESC barang;",
            "SELECT barang;"
        ],
        correct: 1,
        pembahasan: "SELECT * FROM barang; menampilkan semua data dan kolom."
    },
    {
        q: "Kolom bertipe INT digunakan untuk menyimpan?",
        a: [
            "Teks pendek",
            "Angka bulat",
            "Tanggal",
            "Huruf kapital",
            "Kalimat panjang"
        ],
        correct: 1,
        pembahasan: "INT digunakan untuk menyimpan bilangan bulat."
    },
    {
        q: "Kolom bertipe CHAR digunakan untuk menyimpan?",
        a: [
            "Angka bulat",
            "Teks dengan panjang tetap",
            "Data tanggal",
            "Nilai boolean",
            "Nilai desimal"
        ],
        correct: 1,
        pembahasan: "CHAR digunakan untuk teks dengan panjang tetap."
    },
    {
        q: "Untuk menambahkan kolom PRODUKSI bertipe CHAR digunakan perintah?",
        a: [
            "ALTER TABLE barang ADD produksi char(15);",
            "CREATE FIELD produksi char(15);",
            "UPDATE barang ADD produksi char(15);",
            "ADD produksi TO barang;",
            "ALTER TABLE ADD produksi char(15);"
        ],
        correct: 0,
        pembahasan: "ALTER TABLE ADD digunakan untuk menambahkan kolom baru."
    },
    {
        q: "Untuk mengubah tipe data kolom PRODUKSI menjadi INT digunakan perintah?",
        a: [
            "ALTER TABLE barang CHANGE produksi produksi int;",
            "UPDATE produksi SET tipe = int;",
            "ALTER TABLE barang MODIFY produksi int;",
            "CHANGE TABLE produksi int;",
            "ALTER TABLE produksi TO int;"
        ],
        correct: 0,
        pembahasan: "Gunakan CHANGE untuk mengganti tipe data kolom."
    },
    {
        q: "Jika ingin menghapus semua data tetapi tidak struktur tabel, gunakan?",
        a: [
            "DROP TABLE",
            "DELETE FROM nama_tabel",
            "DROP DATABASE",
            "REMOVE ALL",
            "ALTER TABLE"
        ],
        correct: 1,
        pembahasan: "DELETE FROM hanya menghapus isi data, bukan strukturnya."
    },
    {
        q: "Untuk menampilkan daftar database dalam MySQL digunakan perintah?",
        a: [
            "SHOW DATABASES;",
            "DESC DATABASES;",
            "SELECT DATABASE;",
            "LIST DATABASES;",
            "DATABASE SHOW;"
        ],
        correct: 0,
        pembahasan: "SHOW DATABASES; menampilkan seluruh database yang ada."
    },
    {
        q: "Agar perubahan data hanya terjadi pada record tertentu harus menggunakan klausa?",
        a: ["FROM", "SET", "WHERE", "HAVING", "GROUP BY"],
        correct: 2,
        pembahasan: "Klausa WHERE digunakan untuk memberi batasan kondisi perubahan data."
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
