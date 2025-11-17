let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan technopreneur?",
        a: [
            "Orang yang bekerja di bidang teknologi tanpa risiko",
            "Wirausahawan yang memanfaatkan teknologi modern untuk bisnis",
            "Pengembang software tanpa tujuan bisnis",
            "Pemilik toko teknologi tradisional",
            "Pekerja lepas di bidang desain grafis"
        ],
        correct: 1,
        pembahasan: "Technopreneur adalah wirausahawan yang menggunakan teknologi sebagai solusi inovatif dalam bisnis mereka."
    },
    {
        q: "Tujuan utama technopreneurship adalah...",
        a: [
            "Meningkatkan konsumsi produk teknologi",
            "Menciptakan solusi inovatif untuk masalah sosial dan bisnis",
            "Menguasai pasar global tanpa inovasi",
            "Membatasi kemajuan teknologi untuk mengurangi risiko",
            "Hanya untuk mendapatkan keuntungan semata"
        ],
        correct: 1,
        pembahasan: "Technopreneurship bertujuan menciptakan dampak positif melalui inovasi teknologi yang memecahkan masalah nyata."
    },
    {
        q: "Contoh technopreneur terkenal adalah...",
        a: [
            "Bill Gates dan Steve Jobs",
            "Walt Disney dan JK Rowling",
            "Elon Musk dan Pablo Picasso",
            "Steve Irwin dan Nikola Tesla",
            "Albert Einstein dan Leonardo Da Vinci"
        ],
        correct: 0,
        pembahasan: "Bill Gates (Microsoft) dan Steve Jobs (Apple) adalah contoh technopreneur yang sukses memanfaatkan teknologi untuk inovasi bisnis."
    },
    {
        q: "Apa manfaat utama dari technopreneurship bagi masyarakat?",
        a: [
            "Mengurangi kemiskinan melalui penciptaan lapangan kerja",
            "Meningkatkan ketergantungan pada teknologi asing",
            "Membatasi inovasi untuk mengurangi risiko",
            "Meningkatkan konsumsi produk impor",
            "Menyediakan teknologi mahal"
        ],
        correct: 0,
        pembahasan: "Technopreneurship menciptakan lapangan kerja baru melalui inovasi, sehingga membantu mengurangi angka pengangguran."
    },
    {
        q: "Apa yang menjadi fokus utama technopreneur?",
        a: [
            "Teknologi informasi dan komunikasi",
            "Produksi makanan",
            "Pekerjaan manual",
            "Pendidikan formal",
            "Kerajinan tradisional"
        ],
        correct: 0,
        pembahasan: "Technopreneur fokus pada pengembangan teknologi, seperti teknologi informasi,komunikasi, dan internet."
    },
    {
        q: "Langkah pertama menjadi technopreneur adalah...",
        a: [
            "Membeli alat teknologi",
            "Menghindari risiko",
            "Menemukan ide inovatif",
            "Memulai bisnis besar langsung",
            "Mengandalkan tim sepenuhnya"
        ],
        correct: 2,
        pembahasan: "Ide kreatif dan inovatif menjadi dasar technopreneurship karena menentukan arah bisnis yang akan dibangun."
    },
    {
        q: "Profesi yang termasuk dalam technopreneur di bidang DKV adalah...",
        a: [
            "Dokter",
            "Ilustrator",
            "Insinyur",
            "Petani",
            "Guru"
        ],
        correct: 1,
        pembahasan: "Ilustrator adalah salah satu profesi yang dapat digeluti oleh lulusan DKV sebagai technopreneur."
    },
    {
        q: "Apa manfaat diversifikasi bisnis dalam technopreneurship?",
        a: [
            "Meningkatkan fokus pada satu produk saja",
            "Mengurangi potensi inovasi",
            "Menyebarkan risiko dan memperluas peluang",
            "Menghambat pertumbuhan bisnis",
            "Membatasi jangkauan teknologi"
        ],
        correct: 2,
        pembahasan: "Diversifikasi membantu technopreneur mengurangi risiko dan meningkatkan peluang keberhasilan di berbagai sektor."
    },
    {
        q: "Salah satu alasan technopreneurship penting bagi ekonomi adalah...",
        a: [
            "Menjaga ketergantungan pada produk impor",
            "Membatasi inovasi",
            "Menciptakan lapangan kerja baru",
            "Meningkatkan kesenjangan teknologi",
            "Membatasi diversifikasi bisnis"
        ],
        correct: 2,
        pembahasan: "Technopreneurship membuka lapangan kerja baru, yang berdampak positif pada pengurangan pengangguran."
    },
    {
        q: "Apa saja alat yang dibutuhkan untuk memulai bisnis desain grafis?",
        a: [
            "Alat pertanian",
            "Software desain dan perangkat keras",
            "Buku manual",
            "Meja dan kursi sederhana",
            "Alat olahraga"
        ],
        correct: 1,
        pembahasan: "Bisnis desain grafis membutuhkan alat seperti komputer, software desain (Photoshop,Illustrator), dan perangkat pendukung lainnya."
    },
    {
        q: "Technopreneurship tidak hanya menciptakan produk, tetapi juga...",
        a: [
            "Inovasi berkelanjutan",
            "Konsumsi tinggi",
            "Pengurangan ekspor",
            "Ketergantungan teknologi",
            "Perdagangan bebas"
        ],
        correct: 0,
        pembahasan: "Technopreneurship berfokus pada inovasi yang dapat berkembang secara berkelanjutan untuk memenuhi kebutuhan pasar."
    },
    {
        q: "Apa tujuan utama pemasaran dalam bisnis desain grafis?",
        a: [
            "Meningkatkan konsumsi produk lokal",
            "Memperluas jangkauan klien dan pelanggan",
            "Mengurangi biaya produksi",
            "Membatasi pasar internasional",
            "Menghilangkan persaingan"
        ],
        correct: 1,
        pembahasan: "Pemasaran bertujuan untuk memperkenalkan jasa atau produk kepada audiens yang lebih luas, meningkatkan peluang bisnis."
    },
    {
        q: "Apa perbedaan utama antara animator dan ilustrator?",
        a: [
            "Animator membuat gambar bergerak, ilustrator membuat gambar statis",
            "Animator lebih fokus pada seni, ilustrator pada teknologi",
            "Animator bekerja sendiri, ilustrator dalam tim",
            "Animator menggunakan alat manual, ilustrator digital",
            "Animator hanya bekerja di studio film"
        ],
        correct: 0,
        pembahasan: "Animator menciptakan gambar bergerak untuk video atau animasi, sementara ilustrator menciptakan gambar statis untuk berbagai kebutuhan."
    },
    {
        q: "Apa fungsi legalitas bisnis dalam technopreneurship?",
        a: [
            "Menghindari pajak",
            "Melindungi bisnis secara hukum",
            "Membatasi peluang inovasi",
            "Membatasi pertumbuhan bisnis",
            "Meningkatkan biaya operasional"
        ],
        correct: 1,
        pembahasan: "Legalitas memastikan bahwa bisnis beroperasi sesuai aturan hukum, sehingga terlindungi dari masalah hukum di kemudian hari."
    },
    {
        q: "Apa kelebihan desainer grafis dengan latar belakang karier mapan?",
        a: [
            "Memiliki banyak alat dan sumber daya",
            "Hanya bisa bekerja sendiri",
            "Tidak perlu inovasi baru",
            "Tidak perlu pemasaran",
            "Membatasi pilihan proyek"
        ],
        correct: 0,
        pembahasan: "Desainer grafis dengan latar belakang mapan biasanya memiliki sumber daya seperti perangkat lunak, pengalaman, dan jaringan yang luas."
    },
    {
        q: "Apa tujuan membuat daftar klien potensial dalam bisnis desain grafis?",
        a: [
            "Membatasi proyek ke klien tertentu",
            "Menyusun strategi pemasaran dan mendapatkan peluang baru",
            "Mengurangi risiko persaingan",
            "Membatasi proyek kecil",
            "Menentukan harga mahal"
        ],
        correct: 1,
        pembahasan: "Daftar klien potensial membantu technopreneur menyusun strategi yang lebih efektif untuk mencapai target pasar."
    },
    {
        q: "Apa langkah penting dalam membangun relasi bisnis yang potensial?",
        a: [
            "Membatasi komunikasi hanya dengan satu klien",
            "Menggunakan waktu untuk memperluas jaringan dan koneksi",
            "Menghindari kerjasama dengan pihak lain",
            "Fokus pada satu jenis layanan tanpa diversifikasi",
            "Menghindari penggunaan teknologi komunikasi"
        ],
        correct: 1,
        pembahasan: "Membangun relasi bisnis memerlukan usaha untuk memperluas jaringan dan koneksi,karena hal ini dapat membuka peluang baru untuk kolaborasi dan proyek."
    },
    {
        q: "Mengapa technopreneurship penting dalam bidang seni dan desain?",
        a: [
            "Mengurangi kreativitas dalam proyek",
            "Memberikan solusi kreatif berbasis teknologi",
            "Membatasi inovasi seni",
            "Menghilangkan proses manual dalam seni",
            "Menyederhanakan semua konsep desain"
        ],
        correct: 1,
        pembahasan: "Technopreneurship di bidang seni membantu menciptakan solusi kreatif melalui teknologi, seperti animasi digital, desain grafis, dan media interaktif."
    },
    {
        q: "Apa yang perlu dipertimbangkan dalam menetapkan harga jasa desain grafis?",
        a: [
            "Harga sembarang tanpa analisis pasar",
            "Kompetisi, kebutuhan klien, dan biaya produksi",
            "Menghindari proyek dengan nilai rendah",
            "Fokus hanya pada keuntungan besar",
            "Menentukan harga tanpa mempertimbangkan persaingan"
        ],
        correct: 1,
        pembahasan: "Menetapkan harga harus mempertimbangkan faktor kompetisi, kebutuhan klien, dan biaya produksi agar tetap kompetitif dan menguntungkan."
    },
    {
        q: "Apa strategi pemasaran yang baik untuk technopreneur di bidang desain grafis?",
        a: [
            "Membuat materi pemasaran yang sesuai dengan target audiens",
            "Hanya mengandalkan klien lama",
            "Menghindari platform digital",
            "Fokus hanya pada pemasaran cetak",
            "Tidak memperhatikan kebutuhan audiens"
        ],
        correct: 0,
        pembahasan: "Strategi pemasaran yang efektif harus relevan dengan kebutuhan target audiens,menggunakan platform digital dan tradisional untuk menjangkau lebih banyak klien."
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
