let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

var quizData = quizData || [];

quizData.push(
    {
        q: "Apa fungsi utama dari Selection Tool di Audacity?",
        a: ["Memotong audio", "Memilih area audio untuk diedit", "Menghapus noise", "Menambah efek reverb"],
        correct: 1,
        pembahasan: "Selection Tool digunakan untuk memilih bagian audio sebelum diedit atau diberi efek."
    },
    {
        q: "Tool apakah yang digunakan untuk menggeser posisi track tanpa mengubah durasi audio?",
        a: ["Envelope Tool", "Time Shift Tool", "Draw Tool", "Zoom Tool"],
        correct: 1,
        pembahasan: "Time Shift Tool memindahkan track kiri/kanan pada timeline."
    },
    {
        q: "Efek apa yang digunakan untuk mengurangi noise latar belakang seperti hiss atau hum?",
        a: ["Normalize", "Noise Reduction", "Equalization", "Limiter"],
        correct: 1,
        pembahasan: "Noise Reduction adalah fitur utama untuk membersihkan noise latar."
    },
    {
        q: "Untuk memperbesar tampilan waveform secara horizontal digunakan...",
        a: ["Draw Tool", "Zoom Tool", "Envelope Tool", "Sync-Lock Tracks"],
        correct: 1,
        pembahasan: "Zoom Tool memperbesar tampilan waveform agar editing lebih detail."
    },
    {
        q: "Efek apa yang digunakan untuk menghaluskan perbedaan volume pada audio?",
        a: ["Compressor", "Amplify", "Fade In", "Echo"],
        correct: 0,
        pembahasan: "Compressor menyeimbangkan dinamika suara."
    },
    {
        q: "Fitur Normalize digunakan untuk...",
        a: ["Menghapus noise", "Mengatur level puncak audio ke nilai tertentu", "Mempercepat audio", "Membalikkan audio"],
        correct: 1,
        pembahasan: "Normalize menyamakan level audio berdasarkan peak amplitude."
    },
    {
        q: "Perintah untuk memotong bagian audio yang dipilih adalah...",
        a: ["Delete", "Trim Audio", "Split Audio", "Cut"],
        correct: 1,
        pembahasan: "Trim Audio membuang bagian di luar seleksi."
    },
    {
        q: "Fungsi dari Envelope Tool adalah...",
        a: ["Menggambar ulang bentuk waveform", "Mengatur volume secara bertahap", "Memotong track", "Menghapus clip"],
        correct: 1,
        pembahasan: "Envelope Tool membuat kurva volume naik/turun di track."
    },
    {
        q: "Tool mana yang digunakan untuk menggambar dan memperbaiki bentuk waveform secara manual?",
        a: ["Draw Tool", "Pen Tool", "Shape Tool", "Node Tool"],
        correct: 0,
        pembahasan: "Draw Tool dapat memperbaiki waveform secara detail."
    },
    {
        q: "Untuk memisahkan stereo menjadi dua track mono digunakan menu...",
        a: ["Track > Split Stereo to Mono", "Effect > Split", "Audio > Convert", "Tools > Unmerge"],
        correct: 0,
        pembahasan: "Audacity menyediakan opsi langsung untuk split stereo."
    },
    {
        q: "Efek apakah yang digunakan untuk membuat suara bergema?",
        a: ["Echo", "Limiter", "Compressor", "Noise Gate"],
        correct: 0,
        pembahasan: "Echo memberikan efek pantulan suara."
    },
    {
        q: "Menu apa yang digunakan untuk meningkatkan atau menurunkan volume secara keseluruhan?",
        a: ["Amplify", "Fade In", "Limiter", "Gate"],
        correct: 0,
        pembahasan: "Amplify meningkatkan atau menurunkan gain audio."
    },
    {
        q: "Shortcut untuk memutar audio hanya pada area seleksi adalah...",
        a: ["Space", "Shift + Space", "Ctrl + R", "Ctrl + Space"],
        correct: 1,
        pembahasan: "Shift + Space memutar hanya bagian yang diseleksi."
    },
    {
        q: "Untuk menghapus breath (“helaan napas”) yang terlalu keras, teknik yang digunakan adalah...",
        a: ["Noise Reduction", "Amplify negatif", "Envelope Tool", "High-pass Filter"],
        correct: 1,
        pembahasan: "Menggunakan Amplify negatif menurunkan volume breath secara halus."
    },
    {
        q: "Efek apa yang digunakan untuk meratakan puncak audio yang terlalu tinggi?",
        a: ["Limiter", "Reverb", "Bass Boost", "Normalize"],
        correct: 0,
        pembahasan: "Limiter mencegah audio melewati batas peak tertentu."
    },
    {
        q: "Jika ingin mempercepat audio tanpa mengubah pitch, gunakan...",
        a: ["Change Speed", "Change Pitch", "Change Tempo", "Sliding Stretch"],
        correct: 2,
        pembahasan: "Change Tempo mengubah durasi tanpa mengubah nada."
    },
    {
        q: "Efek High-pass Filter digunakan untuk...",
        a: ["Menghapus frekuensi rendah", "Menghapus frekuensi tinggi", "Menambah bass", "Menghapus vokal"],
        correct: 0,
        pembahasan: "High-pass menghilangkan frekuensi rendah."
    },
    {
        q: "Untuk menghapus suara klik atau pop, fitur yang digunakan adalah...",
        a: ["Repair", "DeClicker", "DeNoise", "Limiter"],
        correct: 0,
        pembahasan: "Repair memperbaiki lonjakan waveform kecil."
    },
    {
        q: "Fade In digunakan untuk...",
        a: ["Memperlambat audio", "Menaikkan volume secara bertahap", "Menghapus suara", "Menstabilkan pitch"],
        correct: 1,
        pembahasan: "Fade In menaikkan volume dari 0 ke normal."
    },
    {
        q: "Untuk membuat dua track sinkron bergerak bersama digunakan fitur...",
        a: ["Sync-Lock Tracks", "Grouping", "Track Link", "Align Tool"],
        correct: 0,
        pembahasan: "Sync-Lock Tracks mengikat track agar tidak bergeser sendiri."
    },
    {
        q: "Fitur Quantization di Audacity digunakan untuk...",
        a: ["Tidak ada, Audacity tidak memiliki fitur quantization", "Mengatur timing", "Menghapus beat", "Mengubah pitch"],
        correct: 0,
        pembahasan: "Audacity tidak memiliki fitur midi quantization."
    },
    {
        q: "Jika audio stereo tidak seimbang (kanan lebih keras), solusi paling cepat adalah...",
        a: ["Amplify", "Pan Adjustment", "Split Stereo to Mono", "Normalize Left Channel"],
        correct: 1,
        pembahasan: "Pan mengatur posisi suara L-R."
    },
    {
        q: "Untuk mengekspor audio ke format MP3, Audacity memerlukan...",
        a: ["Codec tambahan LAME", "Plugin WAV", "No additional plugin", "ASIO Driver"],
        correct: 0,
        pembahasan: "Audacity membutuhkan LAME MP3 encoder pada versi lama."
    },
    {
        q: "Efek 'Change Pitch' mengubah...",
        a: ["Kecepatan audio", "Nada audio", "Volume", "Frekensiu low-end saja"],
        correct: 1,
        pembahasan: "Change Pitch menaikkan atau menurunkan pitch tanpa mengubah durasi."
    },
    {
        q: "Untuk menyeleksi seluruh track digunakan shortcut...",
        a: ["Ctrl + A", "Ctrl + Shift + A", "A", "Alt + A"],
        correct: 0,
        pembahasan: "Ctrl + A adalah shortcut umum untuk Select All."
    },
    {
        q: "Efek NOTCH Filter digunakan untuk...",
        a: ["Menghilangkan frekuensi tertentu", "Menambah bass", "Menghapus noise", "Menambah echo"],
        correct: 0,
        pembahasan: "Notch Filter menghapus frekuensi sempit yang mengganggu."
    },
    {
        q: "Time Stretch digunakan untuk...",
        a: ["Mengubah volume", "Mengubah durasi klip", "Menghapus bass", "Menggabungkan track"],
        correct: 1,
        pembahasan: "Time Stretch mengubah panjang audio."
    },
    {
        q: "Fitur Noise Gate berfungsi untuk...",
        a: ["Menambah noise", "Mengurangi suara yang berada di bawah threshold tertentu", "Meningkatkan gain", "Menambah echo"],
        correct: 1,
        pembahasan: "Noise Gate mematikan suara pelan seperti nafas kecil atau ambience."
    },
    {
        q: "Untuk menyalin area seleksi ke clipboard, perintah yang digunakan adalah...",
        a: ["Copy", "Store", "Export", "Repeat"],
        correct: 0,
        pembahasan: "Copy menyalin area terpilih."
    },
    {
        q: "Equalization (EQ) digunakan untuk...",
        a: ["Mengubah pitch", "Mengatur frekuensi audio", "Menghapus clip", "Menggabungkan track"],
        correct: 1,
        pembahasan: "EQ mengatur frekuensi tinggi, rendah, maupun mid."
    },
    {
        q: "Fungsi utama 'Spectrogram View' adalah...",
        a: ["Melihat waveform", "Melihat intensitas frekuensi audio", "Menghapus noise", "Melakukan mixing"],
        correct: 1,
        pembahasan: "Spectrogram menampilkan frekuensi dalam bentuk warna dan intensitas."
    },
    {
        q: "Menu 'Align Tracks' digunakan untuk...",
        a: ["Mensinkronkan awal track", "Menghapus track", "Mengubah waveform", "Mengatur pan"],
        correct: 0,
        pembahasan: "Align menyelaraskan posisi beberapa track."
    },
    {
        q: "Efek Reverb digunakan untuk...",
        a: ["Menghapus noise", "Menambah ruang atau ambience", "Menstabilkan volume", "Menghapus breath"],
        correct: 1,
        pembahasan: "Reverb menambah efek ruangan agar suara lebih natural."
    },
    {
        q: "Untuk memisahkan area seleksi menjadi klip baru digunakan...",
        a: ["Split", "Cut", "Trim", "Delete"],
        correct: 0,
        pembahasan: "Split memotong area tanpa menghapus bagian lainnya."
    },
    {
        q: "Fitur 'Crossfade' digunakan untuk...",
        a: ["Menghapus dua track", "Membuat transisi halus antara dua audio", "Mempercepat track", "Mengubah pitch"],
        correct: 1,
        pembahasan: "Crossfade membuat transisi lembut antar dua track."
    },
    {
        q: "Efek 'Bass and Treble' digunakan untuk...",
        a: ["Memotong track", "Menambah atau mengurangi bass/treble", "Mengubah tempo", "Menghapus vokal"],
        correct: 1,
        pembahasan: "Bass and Treble mengatur frekuensi rendah dan tinggi."
    },
    {
        q: "Untuk membuat suara robot, efek yang digunakan adalah...",
        a: ["Phaser atau Vocoder", "Limiter", "Noise Gate", "EQ High-pass"],
        correct: 0,
        pembahasan: "Phaser atau Vocoder memberikan efek distorsi khas suara robot."
    },
    {
        q: "Efek Reverse digunakan untuk...",
        a: ["Memotong track", "Membalikkan audio dari belakang ke depan", "Mempercepat audio", "Menambah bising"],
        correct: 1,
        pembahasan: "Reverse membuat audio berjalan mundur."
    },
    {
        q: "Untuk menghilangkan vokal dari lagu, teknik yang digunakan adalah...",
        a: ["Vocal Cut / Vocal Reduction", "Delay", "Limiter", "Filter Curve"],
        correct: 0,
        pembahasan: "Vocal Reduction menghapus mid-frequency tempat vokal biasanya berada."
    },
    {
        q: "Untuk menyatukan beberapa file audio menjadi satu track, fitur yang digunakan adalah...",
        a: ["Join", "Mix and Render", "Combine", "Merge"],
        correct: 1,
        pembahasan: "Mix and Render menggabungkan semua track menjadi satu audio mixdown."
    }

)

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
