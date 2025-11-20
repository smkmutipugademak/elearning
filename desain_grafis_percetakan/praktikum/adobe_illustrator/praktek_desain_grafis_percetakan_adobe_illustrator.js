let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL DASAR (BASIC) ===================
    {
        q: "Tool apa yang digunakan untuk memilih dan memindahkan objek di Adobe Illustrator?",
        a: ["Selection Tool", "Direct Selection Tool", "Pen Tool", "Zoom Tool"],
        correct: 0,
        pembahasan: "Selection Tool digunakan untuk memilih, memindahkan, dan mengubah ukuran objek."
    },
    {
        q: "Tool mana yang digunakan untuk mengedit anchor point pada objek vektor?",
        a: ["Direct Selection Tool", "Selection Tool", "Pen Tool", "Shape Builder Tool"],
        correct: 0,
        pembahasan: "Direct Selection Tool memungkinkan kita mengedit anchor point dan path objek."
    },
    {
        q: "Fungsi Rectangle Tool adalah...",
        a: ["Membuat bentuk persegi dan persegi panjang", "Membuat garis", "Membuat teks", "Menghapus objek"],
        correct: 0,
        pembahasan: "Rectangle Tool digunakan untuk menggambar bentuk persegi panjang."
    },
    {
        q: "Tool yang digunakan untuk memperbesar dan memperkecil tampilan adalah...",
        a: ["Zoom Tool", "Hand Tool", "Selection Tool", "Rotate Tool"],
        correct: 0,
        pembahasan: "Zoom Tool berfungsi untuk memperbesar atau memperkecil tampilan area kerja."
    },
    {
        q: "Apa fungsi dari Fill Color di Illustrator?",
        a: ["Memberikan warna isi pada objek", "Membuat outline", "Menghapus objek", "Mengatur layer"],
        correct: 0,
        pembahasan: "Fill Color digunakan untuk memberi warna bagian dalam objek."
    },
    {
        q: "Shortcut untuk menduplikasi objek adalah...",
        a: ["Alt + Drag", "Ctrl + C", "Ctrl + D", "Shift + Alt + D"],
        correct: 0,
        pembahasan: "Menahan Alt sambil menyeret objek akan membuat duplikasi."
    },
    {
        q: "Tool apa yang digunakan untuk menggabungkan bentuk objek?",
        a: ["Shape Builder Tool", "Pen Tool", "Knife Tool", "Eraser Tool"],
        correct: 0,
        pembahasan: "Shape Builder Tool digunakan untuk menggabungkan, memotong, dan membentuk objek."
    },
    {
        q: "Tool apa yang digunakan untuk memotong bagian dari objek?",
        a: ["Knife Tool", "Shape Builder Tool", "Selection Tool", "Gradient Tool"],
        correct: 0,
        pembahasan: "Knife Tool memotong objek secara bebas."
    },
    {
        q: "Apa fungsi Drop Shadow di Illustrator?",
        a: ["Memberikan efek bayangan", "Menghapus objek", "Mengubah warna", "Membuat outline"],
        correct: 0,
        pembahasan: "Drop Shadow digunakan untuk menambahkan bayangan agar objek terlihat realistis."
    },
    {
        q: "Tool yang digunakan untuk membuat gradasi warna adalah...",
        a: ["Gradient Tool", "Mesh Tool", "Eyedropper Tool", "Swatches"],
        correct: 0,
        pembahasan: "Gradient Tool digunakan untuk membuat dan mengatur gradasi warna."
    },
    {
        q: "Perintah untuk membuat grup objek adalah...",
        a: ["Ctrl + G", "Ctrl + Shift + G", "Ctrl + D", "Ctrl + K"],
        correct: 0,
        pembahasan: "Ctrl + G digunakan untuk mengelompokkan objek."
    },
    {
        q: "Apa fungsi Stroke di Illustrator?",
        a: ["Mengatur garis tepi objek", "Menghapus warna", "Membuat teks", "Mengatur transparansi"],
        correct: 0,
        pembahasan: "Stroke mengatur ketebalan, warna, dan gaya garis tepi objek."
    },
    {
        q: "Tool untuk membuat dan mengedit teks adalah...",
        a: ["Type Tool", "Pen Tool", "Selection Tool", "Line Tool"],
        correct: 0,
        pembahasan: "Type Tool digunakan untuk membuat dan mengedit teks."
    },
    {
        q: "Fungsi Align Panel adalah...",
        a: ["Meratakan posisi objek", "Membuat efek bayangan", "Mengubah warna", "Mengatur artboard"],
        correct: 0,
        pembahasan: "Align Panel digunakan untuk meratakan objek secara presisi."
    },
    {
        q: "Fungsi Smart Guides adalah...",
        a: ["Membantu menempatkan objek dengan presisi", "Membuat efek 3D", "Menghapus warna", "Mengubah anchor point"],
        correct: 0,
        pembahasan: "Smart Guides membantu penempatan objek secara presisi."
    },
    {
        q: "Untuk mengubah teks menjadi bentuk vektor digunakan...",
        a: ["Create Outlines (Ctrl + Shift + O)", "Expand", "Ungroup", "Mask"],
        correct: 0,
        pembahasan: "Create Outlines mengubah teks menjadi path sehingga bisa diedit."
    },
    {
        q: "Tool untuk membuat efek transparansi adalah...",
        a: ["Opacity", "Drop Shadow", "Blend Tool", "Pathfinder"],
        correct: 0,
        pembahasan: "Opacity digunakan untuk mengubah tingkat transparansi objek."
    },
    {
        q: "Fungsi Clipping Mask adalah...",
        a: ["Memasukkan objek ke dalam bentuk objek lain", "Menghapus objek", "Membuat layer", "Mengubah warna"],
        correct: 0,
        pembahasan: "Clipping Mask menyembunyikan objek di luar batas bentuk tertentu."
    },
    {
        q: "Tool yang digunakan untuk membuat perpaduan dua bentuk adalah...",
        a: ["Blend Tool", "Mesh Tool", "Gradient Tool", "Knife Tool"],
        correct: 0,
        pembahasan: "Blend Tool membuat transisi bentuk maupun warna antar dua objek."
    },
    {
        q: "Fungsi Layers Panel adalah...",
        a: ["Mengatur objek berdasarkan layer", "Mengubah warna", "Menambah efek 3D", "Mengatur plugin"],
        correct: 0,
        pembahasan: "Layers Panel mengatur urutan dan struktur layer objek."
    },

    // =================== LEVEL MENENGAH (MEDIUM) ===================
    {
        q: "Fungsi Pathfinder Unite adalah...",
        a: ["Menggabungkan bentuk menjadi satu", "Memotong objek", "Membuat lubang", "Menghapus titik anchor"],
        correct: 0,
        pembahasan: "Pathfinder Unite menyatukan beberapa shape menjadi satu objek."
    },
    {
        q: "Fungsi Expand adalah...",
        a: ["Mengubah efek menjadi objek vektor", "Menghapus warna", "Menggabungkan layer", "Membuat raster"],
        correct: 0,
        pembahasan: "Expand mengubah appearance dan efek menjadi bentuk vektor."
    },
    {
        q: "Tool untuk membuat mesh gradasi adalah...",
        a: ["Mesh Tool", "Gradient Tool", "Blend Tool", "Eyedropper"],
        correct: 0,
        pembahasan: "Mesh Tool membuat gradasi kompleks pada objek."
    },
    {
        q: "Fungsi Eyedropper Tool adalah...",
        a: ["Mengambil warna dari objek lain", "Membuat shape baru", "Menghapus warna", "Mengatur layer"],
        correct: 0,
        pembahasan: "Eyedropper Tool mengambil warna atau style objek lain."
    },
    {
        q: "Apa fungsi Image Trace?",
        a: ["Mengubah gambar raster menjadi vektor", "Menghapus background", "Menambah filter", "Membuat artboard"],
        correct: 0,
        pembahasan: "Image Trace mengubah pixel gambar menjadi bentuk vektor."
    },
    {
        q: "Untuk menempatkan teks mengikuti bentuk lengkung digunakan...",
        a: ["Type on a Path Tool", "Area Type Tool", "Type Tool", "Warp Tool"],
        correct: 0,
        pembahasan: "Type on a Path digunakan untuk menempelkan teks pada garis atau kurva."
    },
    {
        q: "Fungsi Artboard Tool adalah...",
        a: ["Mengatur dan membuat artboard", "Mengubah warna", "Membuat layer", "Mengedit vektor"],
        correct: 0,
        pembahasan: "Artboard Tool digunakan untuk menambah dan mengatur artboard."
    },
    {
        q: "Mode warna untuk desain cetak adalah...",
        a: ["CMYK", "RGB", "Grayscale", "HSB"],
        correct: 0,
        pembahasan: "CMYK digunakan untuk kebutuhan cetak."
    },
    {
        q: "Fungsi Recolor Artwork adalah...",
        a: ["Mengganti keseluruhan warna desain secara cepat", "Menghapus objek", "Mengatur artboard", "Menambah filter"],
        correct: 0,
        pembahasan: "Recolor Artwork memodifikasi warna desain dengan fleksibel."
    },
    {
        q: "Apa fungsi Warp Tool?",
        a: ["Mendistorsi objek secara bebas", "Menghapus vektor", "Memindahkan objek", "Mengubah warna"],
        correct: 0,
        pembahasan: "Warp Tool digunakan untuk mendistorsi objek seperti melengkungkan."
    },
    {
        q: "Fungsi Brushes Panel adalah...",
        a: ["Mengatur dan menggunakan kuas artistik", "Menghapus objek", "Membuat teks", "Membuat artboard"],
        correct: 0,
        pembahasan: "Brushes Panel menyimpan berbagai jenis kuas untuk membuat garis artistik."
    },
    {
        q: "Fungsi Symbol Tool adalah...",
        a: ["Menggunakan objek simbol yang dapat dipakai berulang", "Mengubah warna", "Menghapus layer", "Menambah efek"],
        correct: 0,
        pembahasan: "Symbol Tool menyimpan objek agar bisa dipakai ulang tanpa memperbesar file."
    },
    {
        q: "Blend Options digunakan untuk...",
        a: ["Mengatur jarak dan langkah blend", "Menghapus blend", "Mengatur layer", "Menambah efek"],
        correct: 0,
        pembahasan: "Blend Options mengatur smoothness transisi objek."
    },
    {
        q: "Fitur Transparency Panel digunakan untuk...",
        a: ["Mengatur opacity dan blending mode", "Membuat outline", "Mengedit anchor point", "Membuat mesh"],
        correct: 0,
        pembahasan: "Transparency Panel mengatur tingkat transparansi dan mode campuran warna."
    },
    {
        q: "Fitur yang digunakan untuk membuat multiple artboard dalam satu file adalah...",
        a: ["Artboard Panel", "Layer Panel", "Pathfinder", "Transform"],
        correct: 0,
        pembahasan: "Artboard Panel mengatur banyak area kerja dalam satu dokumen."
    },
    {
        q: "Fungsi Offset Path adalah...",
        a: ["Membuat garis luar baru dari bentuk objek", "Menghapus outline", "Mengatur layer", "Membuat gradasi"],
        correct: 0,
        pembahasan: "Offset Path membuat bentuk baru yang lebih besar atau kecil dari objek asli."
    },
    {
        q: "Fitur Appearance Panel digunakan untuk...",
        a: ["Mengatur efek, fill, dan stroke pada satu objek", "Menghapus layer", "Membuat artboard", "Mengedit teks"],
        correct: 0,
        pembahasan: "Appearance Panel mengatur banyak efek pada suatu objek."
    },
    {
        q: "Fungsi Isolation Mode adalah...",
        a: ["Mengedit objek tanpa mengganggu objek lain", "Menghapus objek", "Mengatur alignment", "Mengatur warna"],
        correct: 0,
        pembahasan: "Isolation Mode memungkinkan fokus pada satu objek atau grup."
    },
    {
        q: "Fungsi Save for Web adalah...",
        a: ["Menyimpan gambar untuk kebutuhan web", "Menyimpan untuk cetak", "Menghapus warna", "Membuat vektor"],
        correct: 0,
        pembahasan: "Save for Web mengoptimalkan gambar untuk tampilan web."
    },
    {
        q: "Fungsi Gradient Panel adalah...",
        a: ["Mengatur arah dan warna gradasi", "Menghapus gradasi", "Membuat layer", "Menambah efek 3D"],
        correct: 0,
        pembahasan: "Gradient Panel mengontrol detail gradasi objek."
    },

    // =================== LEVEL LANJUT (ADVANCED) ===================
    {
        q: "Fungsi Puppet Warp adalah...",
        a: ["Mengubah posisi bagian objek dengan pin kontrol", "Memotong objek", "Menambah shadow", "Membuat outline"],
        correct: 0,
        pembahasan: "Puppet Warp memungkinkan deformasi bagian objek dengan lebih realistis."
    },
    {
        q: "Fungsi 3D Extrude and Bevel adalah...",
        a: ["Membuat efek 3D pada objek", "Menghapus warna", "Mengatur layer", "Menghilangkan outline"],
        correct: 0,
        pembahasan: "Extrude & Bevel membuat bentuk 3D dari objek vektor."
    },
    {
        q: "Fitur 3D Revolve digunakan untuk...",
        a: ["Membuat objek 3D dengan memutar profil", "Menghapus objek", "Membuat garis", "Mengedit mesh"],
        correct: 0,
        pembahasan: "3D Revolve memutar shape menjadi bentuk 3D seperti vas atau botol."
    },
    {
        q: "Fungsi Envelope Distort adalah...",
        a: ["Mendistorsi objek mengikuti bentuk tertentu", "Menghapus outline", "Mengatur layer", "Menambah shadow"],
        correct: 0,
        pembahasan: "Envelope Distort memungkinkan objek mengikuti bentuk warp tertentu."
    },
    {
        q: "Fungsi Color Guide adalah...",
        a: ["Menyarankan kombinasi warna harmonis", "Menghapus warna", "Membuat gradient mesh", "Mengatur artboard"],
        correct: 0,
        pembahasan: "Color Guide membantu memilih skema warna yang harmonis."
    },
    {
        q: "Fungsi Asset Export adalah...",
        a: ["Men-export objek menjadi aset terpisah", "Menghapus vector", "Mengedit anchor point", "Mengatur layer"],
        correct: 0,
        pembahasan: "Asset Export memungkinkan ekspor objek satu per satu."
    },
    {
        q: "Fitur Global Edit digunakan untuk...",
        a: ["Mengedit objek serupa secara otomatis", "Menghapus layer", "Membuat artboard", "Membuat mask"],
        correct: 0,
        pembahasan: "Global Edit memperbarui semua objek dengan bentuk serupa."
    },
    {
        q: "Fungsi Expand Appearance adalah...",
        a: ["Mengubah efek menjadi bentuk vektor", "Menghapus objek", "Mengatur grid", "Menambah teks"],
        correct: 0,
        pembahasan: "Expand Appearance menjadikan efek menjadi objek nyata."
    },
    {
        q: "Fungsi Perspective Grid adalah...",
        a: ["Membuat objek dalam perspektif 1–3 titik", "Menghapus anchor point", "Menambah outline", "Mengubah warna"],
        correct: 0,
        pembahasan: "Perspective Grid membantu menggambar objek dengan perspektif realistis."
    },
    {
        q: "Fitur Live Paint digunakan untuk...",
        a: ["Mewarnai area vektor seperti mewarnai komik", "Menghapus warna", "Mengatur layer", "Membuat shadow"],
        correct: 0,
        pembahasan: "Live Paint memudahkan pewarnaan area antar garis seperti gambar manual."
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

// function startTimer(seconds) {
//     clearInterval(timerInterval);
//     timeRemaining = seconds;
//     updateTimerDisplay();

//     timerInterval = setInterval(() => {
//         timeRemaining--;
//         updateTimerDisplay();

//         if (timeRemaining <= 0) {
//             clearInterval(timerInterval);
//             alert("⏰ Waktu habis! Jawaban akan dikirim otomatis.");
//             submitQuiz();
//         }
//     }, 1000);
// }

// function updateTimerDisplay() {
//     const timer = document.getElementById("timer");
//     const minutes = Math.floor(timeRemaining / 60);
//     const seconds = timeRemaining % 60;
//     timer.textContent = `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

//     // Reset class warna
//     timer.classList.remove("warning", "danger");

//     // Ganti warna jika waktu hampir habis
//     if (timeRemaining <= 60) {
//         timer.classList.add("danger"); // merah
//     } else if (timeRemaining <= 180) {
//         timer.classList.add("warning"); // oranye
//     }
// }

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

// // === FITUR ANTI-NYONTEK ===
// // ======================== 🔒 FITUR ANTI-NYONTEK ULTRA KETAT ========================

// // Blok aksi copy/paste/klik kanan/drag
// ['contextmenu', 'copy', 'cut', 'paste', 'selectstart', 'dragstart'].forEach(evt => {
//     document.addEventListener(evt, e => e.preventDefault());
// });

// // Cegah shortcut mencurigakan
// document.addEventListener('keydown', e => {
//     const blocked = ['F12', 'Escape', 'PrintScreen'];
//     if (
//         blocked.includes(e.key) ||
//         (e.ctrlKey && ['u', 's', 'c', 'x', 'a', 'p', '+', '-', '=', 'r', 't', 'n'].includes(e.key.toLowerCase())) ||
//         (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) ||
//         (e.metaKey && e.key.toLowerCase() === 'p')
//     ) {
//         e.preventDefault();
//         autoEndExam("Shortcut mencurigakan digunakan");
//     }
// });

// // 🧩 Deteksi Print Screen (PrtSc/SysRq)
// document.addEventListener('keyup', e => {
//     if (e.key === 'PrintScreen' || e.keyCode === 44) {
//         autoEndExam("Percobaan mengambil screenshot terdeteksi");
//     }
// });

// // 🧩 Deteksi clipboard (indikasi screenshot)
// setInterval(() => {
//     navigator.clipboard?.readText?.().then(text => {
//         if (text && text.length > 50 && text.includes("data:image")) {
//             autoEndExam("Screenshot ke clipboard terdeteksi");
//         }
//     }).catch(() => { });
// }, 3000);

// // Deteksi keluar tab/minimize
// document.addEventListener("visibilitychange", () => {
//     if (document.hidden) autoEndExam("Kamu meninggalkan tab ujian");
// });

// // Deteksi fokus/tab baru
// let lastFocusTime = Date.now();
// window.addEventListener("focus", () => {
//     const now = Date.now();
//     if (now - lastFocusTime > 1500) {
//         autoEndExam("Terindikasi membuka tab lain");
//     }
// });
// window.addEventListener("blur", () => {
//     lastFocusTime = Date.now();
// });

// // Wajib fullscreen
// function openFullscreen() {
//     const el = document.documentElement;
//     if (el.requestFullscreen) el.requestFullscreen();
//     else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
//     else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
//     else if (el.msRequestFullscreen) el.msRequestFullscreen();
// }
// window.addEventListener("load", openFullscreen);
// document.addEventListener("fullscreenchange", () => {
//     if (!document.fullscreenElement) autoEndExam("Keluar dari mode fullscreen");
// });

// // Cegah zoom Ctrl+scroll
// document.addEventListener('wheel', e => {
//     if (e.ctrlKey) e.preventDefault();
// }, { passive: false });

// // Disable drag/seleksi
// document.body.style.userSelect = 'none';
// document.body.style.webkitUserSelect = 'none';
// document.body.style.msUserSelect = 'none';
// document.querySelectorAll('*').forEach(el => el.setAttribute('draggable', 'false'));

// // Cegah klik kanan
// document.addEventListener('contextmenu', e => e.preventDefault());

// // Deteksi Developer Tools
// setInterval(() => {
//     const start = performance.now();
//     debugger;
//     const delay = performance.now() - start;
//     if (delay > 100) autoEndExam("Developer Tools terdeteksi terbuka");
// }, 1000);

// // === Auto End Exam ===
// function autoEndExam(reason) {
//     alert(`❌ Ujian dihentikan karena: ${reason}`);
//     try {
//         submitQuiz();
//     } catch (err) {
//         console.warn("Submit gagal otomatis:", err);
//     }
//     document.exitFullscreen?.();
//     document.body.innerHTML = `
//         <div style="text-align:center;margin-top:120px;font-family:sans-serif;">
//             <h1 style="color:red;">🚫 Ujian Dihentikan</h1>
//             <h3>Alasan: ${reason}</h3>
//             <p>Jawaban kamu sudah otomatis disimpan dan ujian dinyatakan selesai.</p>
//         </div>
//     `;
// }
