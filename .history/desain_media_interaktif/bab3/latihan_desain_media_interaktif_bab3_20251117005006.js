let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa yang dimaksud dengan 'link' dalam halaman web?",
        a: [
            "Teks atau objek yang berisi animasi",
            "Teks atau objek yang dapat diklik untuk menuju ke halaman lain",
            "Halaman web yang berisi gambar interaktif",
            "Tombol navigasi utama dalam sebuah website",
            "Semua jawaban benar"
        ],
        correct: 1,
        pembahasan: "Link adalah teks atau objek yang berfungsi sebagai pranala ke halaman lain."
    },
    {
        q: "Apa jenis link yang menghubungkan halaman dalam satu situs web?",
        a: ["Eksternal link", "Internal link", "Navigasi menu", "Subdomain", "Metadata"],
        correct: 1,
        pembahasan: "Internal link menghubungkan halaman dalam domain yang sama."
    },
    {
        q: "Apa fungsi utama search engine dalam website?",
        a: ["Mencari gambar di internet", "Mengarahkan pengunjung ke halaman relevan", "Membuat link baru otomatis", "Menghapus konten lama", "Menyimpan data website"],
        correct: 1,
        pembahasan: "Search engine membantu pengguna menemukan informasi secara cepat dan relevan."
    },
    {
        q: "Bagaimana cara memeriksa apakah link bersifat nofollow?",
        a: ["Melihat kodenya di HTML", "Mengklik link langsung", "Membuka link di browser lain", "Menggunakan aplikasi tambahan", "Semua jawaban benar"],
        correct: 0,
        pembahasan: "Nofollow dapat diperiksa melalui atribut rel='nofollow'."
    },
    {
        q: "Apa yang dimaksud dengan link eksternal?",
        a: ["Link ke halaman internal", "Link ke domain lain", "Link dengan banyak gambar", "Link navigasi menu", "Link dengan atribut spesifik"],
        correct: 1,
        pembahasan: "Eksternal link mengarahkan pengunjung ke domain berbeda."
    },
    {
        q: "Apa syarat navigasi website yang baik?",
        a: ["Desain unik", "Tombol navigasi sulit ditemukan", "User-friendly dan jelas", "Animasi kompleks", "Tanpa struktur"],
        correct: 2,
        pembahasan: "Navigasi yang baik harus mudah digunakan dan jelas."
    },
    {
        q: "Tombol navigasi utama biasanya berada di:",
        a: ["Bagian atas halaman", "Footer", "Sidebar kanan", "Halaman login", "Menu pop-up"],
        correct: 0,
        pembahasan: "Menu utama biasanya berada di bagian atas website."
    },
    {
        q: "Apa tujuan membuat internal link?",
        a: ["Meningkatkan SEO dan mempermudah navigasi", "Mengurangi waktu loading", "Menghubungkan situs eksternal", "Menambah gambar interaktif", "Membuat menu dropdown"],
        correct: 0,
        pembahasan: "Internal link baik untuk SEO dan memudahkan pengguna menjelajah."
    },
    {
        q: "Apa yang dimaksud dengan navigasi website?",
        a: [
            "Proses membuka file di browser",
            "Sistem yang membantu pengguna menemukan konten",
            "Struktur desain website",
            "Aplikasi membuka link",
            "Semua jawaban benar"
        ],
        correct: 1,
        pembahasan: "Navigasi memandu pengguna menemukan informasi."
    },
    {
        q: "Langkah pertama dalam membuat link di halaman web adalah...",
        a: ["Menulis teks biasa", "Menentukan URL tujuan", "Memasukkan gambar", "Menambahkan atribut HTML", "Menyisipkan JavaScript"],
        correct: 1,
        pembahasan: "Sebelum membuat link, tentukan alamat tujuannya."
    },
    {
        q: "Link dengan atribut 'nofollow' digunakan untuk:",
        a: ["Menghindari SEO negatif", "Meningkatkan trafik", "Membatasi akses", "Menyembunyikan halaman", "Membuka halaman eksternal"],
        correct: 0,
        pembahasan: "Nofollow menginstruksikan mesin pencari agar tidak mengikuti link."
    },
    {
        q: "Apa yang dimaksud dengan anchor text?",
        a: ["Gambar yang dijadikan link", "Teks yang dapat diklik pada link", "URL halaman tujuan", "Tombol menu utama", "Atribut tambahan link"],
        correct: 1,
        pembahasan: "Anchor text adalah teks yang berfungsi sebagai hyperlink."
    },
    {
        q: "Kriteria navigasi website yang baik adalah:",
        a: ["Warna cerah", "Struktur jelas dan konsisten", "Banyak animasi", "Tanpa hierarki", "Semua jawaban benar"],
        correct: 1,
        pembahasan: "Struktur navigasi harus jelas dan konsisten."
    },
    {
        q: "Tujuan utama metadata di website adalah...",
        a: ["Meningkatkan estetika", "Memberikan informasi ke mesin pencari", "Menghubungkan internal link", "Menampilkan animasi", "Membuka file PDF"],
        correct: 1,
        pembahasan: "Metadata membantu mesin pencari memahami isi halaman."
    },
    {
        q: "Manfaat link eksternal untuk SEO adalah...",
        a: ["Meningkatkan kecepatan loading", "Menambah kredibilitas website", "Mengurangi bounce rate", "Membuka halaman internal", "Menyembunyikan konten"],
        correct: 1,
        pembahasan: "Link eksternal yang relevan meningkatkan kepercayaan website."
    },
    {
        q: "Perbedaan utama internal dan eksternal link adalah...",
        a: [
            "Internal link mengarah ke domain sama, eksternal ke domain lain",
            "Internal link hanya teks, eksternal gambar",
            "Internal untuk menu utama, eksternal footer",
            "Internal lebih cepat, eksternal lebih lambat",
            "Tidak ada perbedaan"
        ],
        correct: 0,
        pembahasan: "Internal = domain sama; eksternal = domain berbeda."
    },
    {
        q: "Fungsi atribut 'title' pada link adalah...",
        a: [
            "Menambahkan animasi",
            "Memberikan deskripsi singkat saat kursor diarahkan",
            "Menyembunyikan link",
            "Mengatur warna link",
            "Membatasi akses"
        ],
        correct: 1,
        pembahasan: "Title memberi informasi tambahan ketika diarahkan kursor."
    },
    {
        q: "Apa itu breadcrumb navigation?",
        a: [
            "Navigasi tombol besar",
            "Navigasi yang menunjukkan lokasi pengguna",
            "Menu pop-up",
            "Tombol kembali",
            "Navigasi berbasis gambar"
        ],
        correct: 1,
        pembahasan: "Breadcrumb menunjukkan posisi pengguna dalam struktur website."
    },
    {
        q: "Cara menentukan link dofollow adalah...",
        a: ["Memeriksa atribut rel pada HTML", "Klik link", "Buka tab baru", "Bandingkan URL", "Semua benar"],
        correct: 0,
        pembahasan: "Link dofollow adalah link tanpa atribut 'nofollow'."
    },
    {
        q: "Apa yang dimaksud responsive design?",
        a: [
            "Navigasi berubah sesuai perangkat",
            "Navigasi penuh warna",
            "Navigasi dengan animasi",
            "Navigasi hanya desktop",
            "Navigasi pop-up"
        ],
        correct: 0,
        pembahasan: "Responsive design menyesuaikan tampilan sesuai perangkat."
    },
    {
        q: "Apa yang dimaksud nofollow pada sebuah link?",
        a: [
            "Link tidak memberi pengaruh SEO",
            "Link tidak dapat diklik",
            "Link hanya untuk admin",
            "Link sebagai placeholder",
            "Link hanya tampil di halaman utama"
        ],
        correct: 0,
        pembahasan: "Nofollow menginstruksikan mesin pencari tidak mengikuti link."
    },
    {
        q: "Fungsi search engine ranking adalah...",
        a: [
            "Menentukan warna hasil pencarian",
            "Mengatur urutan link berdasarkan relevansi",
            "Menampilkan gambar",
            "Memblokir situs tertentu",
            "Membatasi akses"
        ],
        correct: 1,
        pembahasan: "Ranking menentukan posisi website dalam hasil pencarian."
    },
    {
        q: "Navigasi yang baik adalah...",
        a: [
            "Menggunakan banyak animasi",
            "Membantu pengguna menemukan informasi dengan cepat",
            "Selalu di bawah halaman",
            "Hanya menggunakan gambar",
            "Memiliki banyak tab"
        ],
        correct: 1,
        pembahasan: "Navigasi harus efisien dan mudah digunakan."
    },
    {
        q: "Contoh elemen navigasi website adalah...",
        a: ["Teks artikel", "Gambar background", "Header, footer, sidebar", "Tombol Like", "Iklan pop-up"],
        correct: 2,
        pembahasan: "Header, footer dan sidebar membantu navigasi website."
    },
    {
        q: "Apa yang dimaksud menu dropdown?",
        a: [
            "Menu yang selalu terlihat",
            "Menu muncul saat pengguna mengklik atau hover",
            "Menu dengan satu pilihan",
            "Menu menuju domain eksternal",
            "Menu tanpa navigasi"
        ],
        correct: 1,
        pembahasan: "Menu dropdown memperlihatkan submenu saat dipilih."
    },
    {
        q: "Meta description adalah...",
        a: [
            "Deskripsi singkat yang muncul di hasil pencarian",
            "Judul halaman",
            "Nama domain",
            "Navigasi internal",
            "Struktur URL"
        ],
        correct: 0,
        pembahasan: "Meta description memberi ringkasan halaman untuk mesin pencari."
    },
    {
        q: "Fungsi internal link adalah...",
        a: ["Menghubungkan halaman dalam domain sama", "Menuju domain lain", "Mengubah background", "Menambah animasi", "Membuat halaman responsif"],
        correct: 0,
        pembahasan: "Internal link mempermudah navigasi dan meningkatkan SEO."
    },
    {
        q: "Tujuan testing navigasi website adalah...",
        a: [
            "Menambah grafis",
            "Memastikan navigasi berfungsi di semua perangkat",
            "Mengurangi loading",
            "Menghapus link",
            "Menambah animasi"
        ],
        correct: 1,
        pembahasan: "Testing memastikan navigasi nyaman di semua perangkat."
    },
    {
        q: "Peran breadcrumb navigation adalah...",
        a: ["Mengganti halaman utama", "Menambah link eksternal", "Menunjukkan posisi pengguna", "Membuat efek visual", "Memblokir halaman"],
        correct: 2,
        pembahasan: "Breadcrumb menunjukkan hierarki lokasi pengguna."
    },
    {
        q: "UX design adalah...",
        a: [
            "Desain berbasis efek animasi",
            "Desain fokus pengalaman pengguna",
            "Desain penuh warna",
            "Desain untuk SEO",
            "Desain dengan navigasi otomatis"
        ],
        correct: 1,
        pembahasan: "UX design bertujuan meningkatkan pengalaman pengguna."
    },
    {
        q: "Eksternal link adalah...",
        a: [
            "Link ke halaman dalam domain yang sama",
            "Link menuju domain lain",
            "Link tidak dapat digunakan",
            "Link hanya di halaman utama",
            "Link untuk mencetak halaman"
        ],
        correct: 1,
        pembahasan: "Eksternal link mengarah ke domain lain."
    },
    {
        q: "Manfaat internal link adalah...",
        a: ["Meningkatkan visibilitas halaman", "Meningkatkan loading", "Menghapus navigasi", "Membuat halaman responsif", "Menambah animasi"],
        correct: 0,
        pembahasan: "Internal link meningkatkan SEO dan navigasi."
    },
    {
        q: "Fungsi meta tag adalah...",
        a: ["Informasi untuk mesin pencari", "Mengubah background", "Menambah grafik", "Interaktivitas halaman", "Menambah tombol"],
        correct: 0,
        pembahasan: "Meta tag membantu mesin pencari memahami halaman."
    },
    {
        q: "Tujuan navigasi yang baik adalah...",
        a: ["Menampilkan iklan", "Membantu pengguna menemukan informasi", "Membuat halaman berat", "Menyembunyikan konten", "Menambah visual"],
        correct: 1,
        pembahasan: "Navigasi mempermudah pencarian informasi."
    },
    {
        q: "Responsive design adalah...",
        a: [
            "Tampilan menyesuaikan perangkat",
            "Desain dengan banyak animasi",
            "Hanya untuk desktop",
            "Minimalis warna",
            "Desain dengan banyak tab"
        ],
        correct: 0,
        pembahasan: "Responsive design menyesuaikan halaman dengan ukuran layar."
    },
    {
        q: "Peran SEO adalah...",
        a: ["Mengubah warna halaman", "Meningkatkan ranking website", "Menambah animasi", "Menghapus navigasi", "Menambah tabel"],
        correct: 1,
        pembahasan: "SEO meningkatkan posisi website di mesin pencari."
    },
    {
        q: "CTA (Call-to-Action) adalah...",
        a: [
            "Elemen yang mendorong pengguna bertindak",
            "Teks deskripsi halaman",
            "Gambar latar",
            "Navigasi dalam halaman",
            "Judul utama"
        ],
        correct: 0,
        pembahasan: "CTA mengajak pengguna melakukan tindakan seperti daftar, beli, dll."
    },
    {
        q: "Apa yang dimaksud sitemap?",
        a: ["Daftar semua halaman website", "Navigasi utama website", "Grafik interaktif", "Struktur eksternal", "Tabel data"],
        correct: 0,
        pembahasan: "Sitemap membantu mesin pencari dan pengguna menemukan halaman."
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
