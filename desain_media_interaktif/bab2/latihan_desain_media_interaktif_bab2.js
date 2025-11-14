let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa prinsip utama dalam mendesain user interface menurut Norman dan Nielsen?",
        a: ["Simplicity", "Consistency", "User Control", "Compatibility", "Affordance"],
        correct: 1,
        pembahasan: "Prinsip desain UI harus menjaga konsistensi agar pengguna merasa familiar dengan elemen antarmuka."
    },
    {
        q: "Tag <html> dalam HTML berfungsi untuk apa?",
        a: ["Menentukan judul halaman", "Menentukan struktur dasar dokumen HTML", "Membuat tautan antarhalaman", "Menentukan paragraf", "Membuat tabel"],
        correct: 1,
        pembahasan: "Tag <html> adalah elemen utama yang membungkus seluruh isi halaman web."
    },
    {
        q: "Apa kepanjangan dari HTML?",
        a: ["Hyper Tool Markup Language", "Hypertext Machine Language", "Hypertext Markup Language", "Hyper Machine Text Language", "Hyper Transfer Markup Language"],
        correct: 2,
        pembahasan: "HTML adalah singkatan dari Hypertext Markup Language."
    },
    {
        q: "Tag <h1> hingga <h6> digunakan untuk apa dalam HTML?",
        a: ["Membuat tabel", "Menentukan heading pada halaman web", "Membuat hyperlink", "Memasukkan gambar", "Membuat paragraf"],
        correct: 1,
        pembahasan: "Tag heading digunakan untuk judul dan subjudul pada halaman web."
    },
    {
        q: "Apa fungsi tag <img> dalam HTML?",
        a: ["Membuat tabel", "Menampilkan gambar", "Membuat form", "Membuat hyperlink", "Menambahkan background"],
        correct: 1,
        pembahasan: "Tag <img> digunakan untuk menyisipkan gambar pada halaman web."
    },
    {
        q: "Apa fungsi atribut alt pada tag <img>?",
        a: ["Menentukan ukuran gambar", "Menambahkan teks alternatif untuk gambar", "Mengatur posisi gambar", "Menentukan tautan gambar", "Mengganti warna gambar"],
        correct: 1,
        pembahasan: "Atribut alt berisi teks alternatif jika gambar tidak bisa dimuat."
    },
    {
        q: "Apa yang dimaksud dengan WYSIWYG?",
        a: ["Aplikasi desain grafis", "Antarmuka pengembangan web", "Konsep 'What You See Is What You Get'", "Sistem manajemen konten", "Standar HTML terbaru"],
        correct: 2,
        pembahasan: "WYSIWYG berarti tampilan editor sama dengan hasil akhirnya."
    },
    {
        q: "Tag <a> dalam HTML digunakan untuk?",
        a: ["Membuat form", "Membuat hyperlink", "Menampilkan gambar", "Membuat heading", "Menambahkan tabel"],
        correct: 1,
        pembahasan: "Tag <a> digunakan untuk membuat link."
    },
    {
        q: "Apa itu CSS?",
        a: ["Cascading Style Sheets", "Coding Style Standards", "Content Style Sheets", "Cascading Sheets Style", "Creative Style Standards"],
        correct: 0,
        pembahasan: "CSS digunakan untuk mengatur tampilan dan gaya halaman web."
    },
    {
        q: "Tag <table> dalam HTML digunakan untuk apa?",
        a: ["Membuat gambar", "Membuat tabel", "Membuat form", "Membuat paragraf", "Membuat hyperlink"],
        correct: 1,
        pembahasan: "Tag <table> digunakan untuk membuat tabel."
    },
    {
        q: "Apa fungsi tag <form> dalam HTML?",
        a: ["Menambahkan gambar", "Membuat form input data", "Membuat heading", "Menambahkan tabel", "Membuat hyperlink"],
        correct: 1,
        pembahasan: "Tag <form> digunakan untuk menerima input dari pengguna."
    },
    {
        q: "Tag <ul> digunakan untuk apa dalam HTML?",
        a: ["Daftar tidak bernomor", "Daftar bernomor", "Paragraf", "Tabel", "Hyperlink"],
        correct: 0,
        pembahasan: "Tag <ul> digunakan untuk bullet list."
    },
    {
        q: "Apa kepanjangan dari CSS?",
        a: ["Cascading Sheets Style", "Coding Style Standards", "Content Style Sheets", "Cascading Style Sheets", "Creative Style Standards"],
        correct: 3,
        pembahasan: "CSS adalah Cascading Style Sheets."
    },
    {
        q: "Tag <ol> digunakan untuk?",
        a: ["Daftar tidak bernomor", "Daftar bernomor", "Menambah gambar", "Paragraf", "Tabel"],
        correct: 1,
        pembahasan: "Tag <ol> membuat daftar bernomor."
    },
    {
        q: "Atribut type pada tag <input> digunakan untuk?",
        a: ["Menentukan tipe data input", "Menentukan ukuran input", "Menambahkan label input", "Menentukan warna input", "Menambahkan teks alternatif"],
        correct: 0,
        pembahasan: "Atribut type menentukan jenis input."
    },
    {
        q: "Tag <head> berisi informasi tentang?",
        a: ["Konten utama halaman", "Metadata halaman", "Paragraf halaman", "Link halaman lain", "Gambar halaman"],
        correct: 1,
        pembahasan: "Metadata seperti title, meta, dan link CSS berada dalam <head>."
    },
    {
        q: "Apa fungsi atribut src pada tag <img>?",
        a: ["Menentukan ukuran gambar", "Menentukan sumber gambar", "Menambahkan teks alternatif", "Mengatur posisi gambar", "Mengubah warna gambar"],
        correct: 1,
        pembahasan: "Atribut src menentukan lokasi file gambar."
    },
    {
        q: "Tag <br> digunakan untuk?",
        a: ["Garis horizontal", "Baris baru", "Paragraf", "Daftar", "Tabel"],
        correct: 1,
        pembahasan: "Tag <br> membuat line break."
    },
    {
        q: "Apa itu tag <title>?",
        a: ["Judul halaman di browser", "Paragraf", "Tabel", "Hyperlink", "Daftar"],
        correct: 0,
        pembahasan: "Tag <title> menentukan nama tab browser."
    },
    {
        q: "Apa fungsi atribut href pada tag <a>?",
        a: ["Sumber gambar", "URL tujuan link", "Warna link", "Ukuran font", "Jenis input"],
        correct: 1,
        pembahasan: "href menentukan URL tujuan link."
    },
    {
        q: "Apa itu atribut action dalam tag <form>?",
        a: ["URL tujuan data form", "Metode input form", "Menambahkan label", "Ukuran input", "Warna form"],
        correct: 0,
        pembahasan: "action berisi alamat tujuan form."
    },
    {
        q: "Tag <th> digunakan untuk?",
        a: ["Header kolom tabel", "Data sel tabel", "Garis tabel", "Ukuran tabel", "Warna tabel"],
        correct: 0,
        pembahasan: "Tag <th> adalah header tabel."
    },
    {
        q: "Apa itu hyperlink absolut?",
        a: ["Link dalam dokumen yang sama", "Link dengan URL lengkap", "Link ke gambar", "Link ke CSS", "Link internal"],
        correct: 1,
        pembahasan: "Hyperlink absolut menggunakan URL lengkap."
    },
    {
        q: "Atribut target=\"_blank\" digunakan untuk?",
        a: ["Membuka link di tab baru", "Menambah teks alternatif", "Mengatur ukuran font", "Mengubah warna link", "Sumber link"],
        correct: 0,
        pembahasan: "target=\"_blank\" membuka link di tab baru."
    },
    {
        q: "Tag <div> digunakan untuk?",
        a: ["Paragraf", "Mengelompokkan elemen", "Tabel", "Daftar", "Gambar"],
        correct: 1,
        pembahasan: "Tag <div> berfungsi sebagai container."
    },
    {
        q: "Apa itu DOCTYPE?",
        a: ["Deklarasi jenis dokumen HTML", "Struktur tabel", "URL gambar", "Atribut CSS", "Deklarasi form"],
        correct: 0,
        pembahasan: "DOCTYPE memberi tahu browser versi HTML."
    },
    {
        q: "Apa fungsi tag <iframe>?",
        a: ["Menambah tabel", "Menyisipkan halaman lain", "Heading", "Form", "Daftar"],
        correct: 1,
        pembahasan: "iframe digunakan untuk menampilkan halaman web lain."
    },
    {
        q: "Tag <strong> digunakan untuk?",
        a: ["Warna teks", "Teks tebal", "Teks miring", "Gambar", "Paragraf"],
        correct: 1,
        pembahasan: "Tag <strong> memberi penekanan (bold)."
    },
    {
        q: "Apa itu tag <meta>?",
        a: ["Metadata halaman", "Gambar", "Judul halaman", "Daftar", "Tabel"],
        correct: 0,
        pembahasan: "Tag <meta> menyimpan metadata seperti charset."
    },
    {
        q: "Apa fungsi atribut colspan?",
        a: ["Menggabungkan kolom", "Menggabungkan baris", "Ukuran kolom", "Warna tabel", "Border tabel"],
        correct: 0,
        pembahasan: "colspan menggabungkan kolom."
    },
    {
        q: "Tag <textarea> digunakan untuk?",
        a: ["Gambar", "Area input teks panjang", "Daftar", "Tabel", "Hyperlink"],
        correct: 1,
        pembahasan: "textarea dipakai untuk input teks panjang."
    },
    {
        q: "Apa fungsi atribut rowspan?",
        a: ["Menggabungkan baris", "Menggabungkan kolom", "Ukuran kolom", "Warna tabel", "Border tabel"],
        correct: 0,
        pembahasan: "rowspan menggabungkan baris."
    },
    {
        q: "Tag <blockquote> digunakan untuk?",
        a: ["Gambar", "Kutipan panjang", "Tabel", "Daftar", "Paragraf"],
        correct: 1,
        pembahasan: "blockquote digunakan untuk kutipan panjang."
    },
    {
        q: "Tag <fieldset> digunakan untuk?",
        a: ["Kelompok form", "Gambar", "Paragraf", "Daftar", "Heading"],
        correct: 0,
        pembahasan: "fieldset mengelompokkan elemen form."
    },
    {
        q: "Atribut method pada tag <form> digunakan untuk?",
        a: ["Metode pengiriman data", "URL tujuan", "Ukuran form", "Warna form", "Jenis input"],
        correct: 0,
        pembahasan: "method menentukan GET atau POST."
    },
    {
        q: "Tag <caption> digunakan untuk?",
        a: ["Judul tabel", "Border tabel", "Gambar", "Daftar", "Heading"],
        correct: 0,
        pembahasan: "caption adalah judul tabel."
    },
    {
        q: "Apa fungsi tag <code>?",
        a: ["Teks tebal", "Menampilkan teks sebagai kode", "Teks miring", "Gambar", "Paragraf"],
        correct: 1,
        pembahasan: "Tag <code> menampilkan teks dalam gaya kode."
    },
    {
        q: "Atribut alt pada tag <img> adalah...",
        a: ["Teks alternatif", "Ukuran gambar", "Warna", "Border", "Posisi gambar"],
        correct: 0,
        pembahasan: "alt menampilkan deskripsi gambar."
    },
    {
        q: "Apa fungsi atribut action dalam form?",
        a: ["URL tujuan data", "Label form", "Ukuran form", "Jenis input", "Warna form"],
        correct: 0,
        pembahasan: "action menentukan URL tujuan data."
    },
    {
        q: "Tag <link> digunakan untuk?",
        a: ["Menghubungkan file eksternal seperti CSS", "Hyperlink", "Tabel", "Daftar", "Gambar"],
        correct: 0,
        pembahasan: "Tag <link> menghubungkan HTML dengan CSS."
    },
    {
        q: "Tag <legend> digunakan untuk?",
        a: ["Tabel", "Keterangan untuk <fieldset>", "Gambar", "Daftar", "Heading"],
        correct: 1,
        pembahasan: "legend memberi judul pada fieldset."
    },
    {
        q: "Atribut target=\"_blank\" digunakan untuk?",
        a: ["Buka link di tab baru", "Arahkan link ke halaman utama", "Border link", "Gambar di bawah link", "Daftar dalam link"],
        correct: 0,
        pembahasan: "target=\"_blank\" membuka tab baru."
    },
    {
        q: "Tag <br> digunakan untuk?",
        a: ["Garis horizontal", "Baris baru", "Teks tebal", "Gambar", "Daftar"],
        correct: 1,
        pembahasan: "Tag <br> membuat baris baru."
    },
    {
        q: "Apa itu atribut cols pada <textarea>?",
        a: ["Lebar kolom input teks", "Jumlah baris", "Warna teks", "Batas karakter", "Jenis teks"],
        correct: 0,
        pembahasan: "cols menentukan lebar textarea."
    },
    {
        q: "Apa fungsi atribut for pada tag <label>?",
        a: ["Menghubungkan label dengan elemen form", "Warna teks", "Gambar", "Daftar", "Jenis input"],
        correct: 0,
        pembahasan: "for menghubungkan label dengan elemen berdasarkan id."
    },
    {
        q: "Atribut name pada tag <input> digunakan untuk?",
        a: ["Nama data yang dikirim", "Ukuran form", "Warna form", "Daftar", "Gambar"],
        correct: 0,
        pembahasan: "name menentukan nama variabel form."
    },
    {
        q: "Tag <hr> digunakan untuk?",
        a: ["Garis horizontal", "Heading", "Baris baru", "Gambar", "Teks tebal"],
        correct: 0,
        pembahasan: "<hr> membuat garis horizontal."
    },
    {
        q: "Apa fungsi atribut value pada <input>?",
        a: ["Nilai awal input", "Warna input", "Border input", "Lebar input", "Jenis input"],
        correct: 0,
        pembahasan: "value untuk nilai default input."
    },
    {
        q: "Tag <thead> digunakan untuk?",
        a: ["Bagian kepala tabel", "Gambar tabel", "Daftar", "Baris baru", "Ukuran tabel"],
        correct: 0,
        pembahasan: "<thead> mencakup baris-baris header tabel."
    },
    {
        q: "Atribut type=\"password\" digunakan untuk?",
        a: ["Menyembunyikan teks input", "Membatasi panjang input", "Mengatur lebar", "Border input", "Input angka"],
        correct: 0,
        pembahasan: "Input password menyembunyikan karakter."
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
