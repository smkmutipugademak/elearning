let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan tipografi?",
        a: [
            "Ilmu tentang mencetak gambar",
            "Ilmu memilih dan menata huruf untuk menyampaikan pesan",
            "Seni menggambar secara manual",
            "Teknik pencetakan kuno",
            "Metode modern untuk desain grafis"
        ],
        correct: 1,
        pembahasan: "Tipografi adalah ilmu memilih dan menata huruf dengan pengaturan penyebarannya untuk menyampaikan pesan."
    },
    {
        q: "Apa tujuan utama dari tipografi dalam desain grafis?",
        a: [
            "Meningkatkan estetika gambar",
            "Menonjolkan gambar dalam desain",
            "Mempermudah pembaca memahami informasi",
            "Mengubah tata letak desain",
            "Membuat pola geometris"
        ],
        correct: 2,
        pembahasan: "Tipografi bertujuan mempermudah pembaca memahami informasi melalui pengaturan huruf yang nyaman dilihat."
    },
    {
        q: "Huruf-huruf pertama kali ditemukan dalam bentuk...",
        a: [
            "Hieroglif",
            "Kaligrafi",
            "Cetakan mesin",
            "Teks digital",
            "Alfabet Yunani"
        ],
        correct: 0,
        pembahasan: "Huruf pertama ditemukan dalam bentuk hieroglif pada masa Mesir kuno."
    },
    {
        q: "Kapan huruf serif pertama kali muncul dalam sejarah tipografi?",
        a: ["Abad ke-19", "Abad ke-17", "Abad ke-8", "Abad ke-2", "Abad ke-15"],
        correct: 2,
        pembahasan: "Huruf serif pertama kali muncul pada abad ke-8 di Roma."
    },
    {
        q: "Huruf sans-serif mulai digunakan secara luas pada...",
        a: ["Abad ke-15", "Abad ke-18", "Abad ke-20", "Abad ke-14", "Abad ke-10"],
        correct: 2,
        pembahasan: "Sans-serif populer pada abad ke-20 karena tampilannya sederhana dan modern."
    },
    {
        q: "Apa fungsi utama dari huruf serif dalam tipografi?",
        a: [
            "Memberikan tampilan modern",
            "Meningkatkan kejelasan bacaan",
            "Memberikan kesan dekoratif dan formal",
            "Membuat huruf lebih besar",
            "Menyederhanakan desain"
        ],
        correct: 2,
        pembahasan: "Serif memberikan garis dekoratif yang memberi kesan elegan dan formal."
    },
    {
        q: "Gaya huruf 'Blackletter' dikenal juga dengan nama...",
        a: ["Roman Type", "Gothic Script", "Modern Script", "Transitional Style", "Handwriting Type"],
        correct: 1,
        pembahasan: "Blackletter dikenal sebagai Gothic Script yang populer di Jerman."
    },
    {
        q: "Apa yang dimaksud dengan legibility dalam tipografi?",
        a: [
            "Kemampuan huruf dibaca dari jarak jauh",
            "Keindahan bentuk huruf",
            "Kemudahan membaca huruf secara visual",
            "Penempatan huruf pada desain",
            "Kemampuan huruf memengaruhi estetika"
        ],
        correct: 2,
        pembahasan: "Legibility adalah kemampuan huruf dikenali secara visual."
    },
    {
        q: "Huruf 'Modern' dalam tipografi mulai muncul pada...",
        a: ["Abad ke-15", "Abad ke-17", "Abad ke-18", "Abad ke-20", "Abad ke-10"],
        correct: 1,
        pembahasan: "Huruf Modern muncul pada akhir abad ke-17."
    },
    {
        q: "Jenis huruf yang menyerupai tulisan tangan manusia disebut...",
        a: ["Serif", "Script", "Sans-Serif", "Display", "Transitional"],
        correct: 1,
        pembahasan: "Script adalah huruf yang menyerupai tulisan tangan."
    },
    {
        q: "Apa yang dimaksud dengan readability dalam tipografi?",
        a: [
            "Kesan estetika huruf",
            "Kemampuan huruf menyampaikan pesan",
            "Kemudahan membaca teks dalam kalimat",
            "Kemampuan huruf dipadukan dengan gambar",
            "Ukuran huruf dalam desain"
        ],
        correct: 2,
        pembahasan: "Readability adalah kemudahan membaca teks dalam paragraf atau kalimat."
    },
    {
        q: "Apa yang dimaksud dengan clarity dalam tipografi?",
        a: [
            "Kerapihan desain huruf",
            "Kemampuan huruf mudah dibaca dari jarak jauh",
            "Kejelasan bentuk huruf dalam desain",
            "Penyesuaian huruf dan gambar",
            "Penggunaan huruf berukuran besar"
        ],
        correct: 2,
        pembahasan: "Clarity adalah kejelasan bentuk huruf sehingga mudah dikenali."
    },
    {
        q: "Huruf 'Transitional' memiliki karakteristik...",
        a: ["Dekoratif", "Sederhana", "Perpaduan gaya lama dan baru", "Tegas", "Bergaya tulisan tangan"],
        correct: 2,
        pembahasan: "Transitional adalah perpaduan serif tua dan modern."
    },
    {
        q: "Komponen utama dalam multimedia berbasis teks adalah...",
        a: ["Animasi", "Video", "Huruf dan kata", "Grafik", "Gambar"],
        correct: 2,
        pembahasan: "Huruf dan kata merupakan komponen utama multimedia berbasis teks."
    },
    {
        q: "Penggunaan huruf sans-serif lebih cocok untuk...",
        a: ["Desain formal", "Desain modern dan minimalis", "Gaya klasik", "Dokumen resmi", "Poster kuno"],
        correct: 1,
        pembahasan: "Sans-serif cocok untuk desain modern karena tampil sederhana."
    },
    {
        q: "Apa yang dimaksud dengan script dalam tipografi?",
        a: ["Huruf dekoratif", "Huruf menyerupai tulisan tangan", "Huruf geometris", "Huruf digital", "Huruf lurus"],
        correct: 1,
        pembahasan: "Script adalah huruf yang menyerupai tulisan tangan manusia."
    },
    {
        q: "Adobe Illustrator digunakan untuk...",
        a: ["Mengedit pixel", "Desain vektor", "Animasi 3D", "Dokumen teks", "Mengedit video"],
        correct: 1,
        pembahasan: "Illustrator digunakan untuk membuat desain berbasis vektor."
    },
    {
        q: "Komponen utama dalam desain multimedia adalah...",
        a: ["Teks, grafik, audio, video, animasi", "Warna dan pola", "Simbol dan tulisan tangan", "Foto dan gambar", "Sketsa manual"],
        correct: 0,
        pembahasan: "Desain multimedia mencakup teks, grafik, audio, video, dan animasi."
    },
    {
        q: "Apa fungsi utama video dalam desain multimedia?",
        a: ["Menambah warna", "Memberikan efek gerakan dan cerita", "Menambah estetika teks", "Memperbesar objek", "Membuat desain ringan"],
        correct: 1,
        pembahasan: "Video memberikan efek gerakan dan mampu menyampaikan cerita."
    },
    {
        q: "Huruf 'Display' biasanya digunakan untuk...",
        a: ["Teks kecil", "Judul besar atau iklan", "Paragraf panjang", "Dokumen resmi", "Tulisan tangan"],
        correct: 1,
        pembahasan: "Font display digunakan untuk judul besar karena menarik perhatian."
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
