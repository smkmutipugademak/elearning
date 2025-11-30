let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL DASAR (BASIC) ===================
    {
        q: "Tool yang digunakan untuk memilih dan memindahkan objek di CorelDRAW...",
        a: ["Pick Tool", "Shape Tool", "Crop Tool", "Zoom Tool", "Freehand Tool"],
        correct: 0,
        pembahasan: "Pick Tool digunakan untuk memilih, memindah, dan memutar objek."
    },
    {
        q: "Tool yang digunakan untuk mengedit node atau titik pada objek vektor...",
        a: ["Shape Tool", "Pick Tool", "Freehand Tool", "Smart Fill Tool", "Pen Tool"],
        correct: 0,
        pembahasan: "Shape Tool memungkinkan kita mengedit node dan kurva objek vektor."
    },
    {
        q: "Fungsi Rectangle Tool dalam membuat bentuk di CorelDRAW...",
        a: ["Membuat persegi atau persegi panjang", "Membuat garis", "Membuat teks", "Mewarnai objek", "Membuat lingkaran"],
        correct: 0,
        pembahasan: "Rectangle Tool digunakan untuk menggambar bentuk persegi panjang atau kotak."
    },
    {
        q: "Tool yang digunakan untuk memperbesar atau memperkecil area kerja...",
        a: ["Zoom Tool", "Pick Tool", "Shape Tool", "Crop Tool", "Lens Tool"],
        correct: 0,
        pembahasan: "Zoom Tool berfungsi memperbesar atau memperkecil tampilan area kerja."
    },
    {
        q: "Fungsi Color Palette dalam memberi warna objek...",
        a: ["Memberi warna pada objek", "Membuat teks", "Menghapus objek", "Mengatur layer", "Membuat gradasi"],
        correct: 0,
        pembahasan: "Color Palette menyediakan pilihan warna untuk memberi warna pada objek."
    },
    {
        q: "Shortcut untuk menggandakan objek secara cepat...",
        a: ["Ctrl + D", "Ctrl + G", "Ctrl + Q", "Ctrl + C", "Ctrl + V"],
        correct: 0,
        pembahasan: "Ctrl + D digunakan untuk menduplikasi objek secara cepat."
    },
    {
        q: "Tool yang digunakan untuk menggabungkan dua objek menjadi satu bentuk baru...",
        a: ["Weld", "Trim", "Intersect", "Combine", "Shaping"],
        correct: 0,
        pembahasan: "Weld menggabungkan dua objek menjadi satu bentuk baru."
    },
    {
        q: "Tool yang digunakan untuk memotong bagian objek menggunakan objek lain...",
        a: ["Trim", "Weld", "Intersect", "Crop", "Knife Tool"],
        correct: 0,
        pembahasan: "Trim digunakan untuk memotong objek menggunakan bentuk objek lain."
    },
    {
        q: "Fungsi Drop Shadow Tool untuk memberi efek visual...",
        a: ["Menambahkan efek bayangan", "Membuat bentuk baru", "Menghapus bayangan", "Mengubah warna", "Membuat highlight"],
        correct: 0,
        pembahasan: "Drop Shadow Tool menambahkan efek bayangan pada objek untuk memberi kesan 3D."
    },
    {
        q: "Tool yang digunakan untuk membuat efek gradasi warna pada objek...",
        a: ["Fountain Fill", "Smart Fill", "Pattern Fill", "Texture Fill", "Mesh Fill"],
        correct: 0,
        pembahasan: "Fountain Fill digunakan untuk membuat gradasi warna pada objek."
    },
    {
        q: "Perintah untuk menyatukan beberapa objek menjadi satu grup...",
        a: ["Ctrl + G", "Ctrl + U", "Ctrl + L", "Ctrl + D", "Ctrl + Shift + G"],
        correct: 0,
        pembahasan: "Ctrl + G digunakan untuk mengelompokkan objek menjadi satu grup."
    },
    {
        q: "Tool yang digunakan untuk mengatur ketebalan dan warna garis tepi objek...",
        a: ["Outline Tool", "Eraser Tool", "Text Tool", "Transparency Tool", "Shape Tool"],
        correct: 0,
        pembahasan: "Outline Tool digunakan untuk mengatur warna dan ketebalan garis tepi objek."
    },
    {
        q: "Tool yang digunakan untuk menambahkan teks di CorelDRAW...",
        a: ["Text Tool", "Shape Tool", "Pick Tool", "Zoom Tool", "Artistic Media Tool"],
        correct: 0,
        pembahasan: "Text Tool digunakan untuk membuat dan mengedit teks."
    },
    {
        q: "Fungsi Align and Distribute untuk meratakan dan mendistribusikan objek...",
        a: ["Meratakan posisi objek", "Menghapus objek", "Mengubah warna objek", "Mengatur ukuran halaman", "Membuat efek gradasi"],
        correct: 0,
        pembahasan: "Align and Distribute digunakan untuk meratakan dan mendistribusikan posisi objek."
    },
    {
        q: "Fungsi Snap to Object agar objek menempel presisi saat digeser...",
        a: ["Membantu menyusun objek dengan presisi", "Membuat efek 3D", "Menghapus node", "Mengubah warna", "Menambahkan bayangan"],
        correct: 0,
        pembahasan: "Snap to Object membuat objek menempel secara presisi pada objek lain saat digeser."
    },
    {
        q: "Perintah untuk mengubah teks menjadi bentuk vektor agar bisa diedit bebas...",
        a: ["Convert to Curves (Ctrl + Q)", "Convert to Bitmap", "Weld", "Trim", "Envelope Tool"],
        correct: 0,
        pembahasan: "Convert to Curves mengubah teks menjadi bentuk vektor agar bisa diedit secara bebas."
    },
    {
        q: "Tool untuk membuat efek transparansi pada objek...",
        a: ["Transparency Tool", "Contour Tool", "Blend Tool", "Drop Shadow Tool", "Lens Tool"],
        correct: 0,
        pembahasan: "Transparency Tool membuat objek menjadi transparan sebagian atau seluruhnya."
    },
    {
        q: "Fungsi PowerClip untuk menempatkan objek di dalam objek lain...",
        a: ["Memasukkan objek ke dalam objek lain", "Menghapus objek", "Menyalin efek", "Menambah warna", "Membuat garis"],
        correct: 0,
        pembahasan: "PowerClip digunakan untuk menempatkan satu objek di dalam bentuk objek lain."
    },
    {
        q: "Tool untuk membuat efek transisi antar dua objek...",
        a: ["Blend Tool", "Contour Tool", "Extrude Tool", "Transparency Tool", "Mesh Fill Tool"],
        correct: 0,
        pembahasan: "Blend Tool membuat efek perpaduan bentuk atau warna antar dua objek."
    },
    {
        q: "Fitur Object Manager untuk mengatur layer dan urutan objek...",
        a: ["Mengatur layer dan urutan objek", "Menambah warna", "Membuat teks", "Menyimpan dokumen", "Menghapus objek"],
        correct: 0,
        pembahasan: "Object Manager digunakan untuk mengatur posisi dan layer objek dalam dokumen."
    },// =================== LEVEL MENENGAH (MEDIUM) ===================
{
    q: "Fitur untuk membuat efek timbul pada tepi objek...",
    a: ["Bevel Tool", "Extrude Tool", "Blend Tool", "Contour Tool", "Drop Shadow Tool"],
    correct: 0,
    pembahasan: "Bevel Tool membuat efek tepi timbul (emboss) pada objek."
},
{
    q: "Fungsi Extrude Tool untuk memberi efek kedalaman pada objek...",
    a: ["Membuat efek 3D pada objek", "Membuat efek transparansi", "Menyalin warna", "Membuat pola", "Membuat bayangan"],
    correct: 0,
    pembahasan: "Extrude Tool memberikan efek kedalaman (3D) pada objek atau teks."
},
{
    q: "Tool untuk membuat bayangan dinamis di bawah objek...",
    a: ["Drop Shadow Tool", "Lens Tool", "Transparency Tool", "Contour Tool", "Blend Tool"],
    correct: 0,
    pembahasan: "Drop Shadow Tool menciptakan bayangan realistis di bawah objek."
},
{
    q: "Fungsi Contour Tool untuk menambah garis lapisan di dalam atau luar objek...",
    a: ["Menambah garis lapisan di dalam/luar objek", "Menghapus garis luar", "Mengatur node", "Mewarnai objek", "Mengubah bentuk"],
    correct: 0,
    pembahasan: "Contour Tool digunakan untuk membuat garis berlapis dari tepi objek."
},
{
    q: "Tool untuk memberi efek cahaya atau pembesaran pada objek...",
    a: ["Lens Tool", "Transparency Tool", "Blend Tool", "Extrude Tool", "Fountain Fill"],
    correct: 0,
    pembahasan: "Lens Tool memberikan efek pembesaran, pewarnaan, atau transparansi tertentu."
},
{
    q: "Perintah untuk menempatkan teks mengikuti jalur bentuk lengkung...",
    a: ["Fit Text to Path", "Envelope Tool", "Shape Tool", "Text Wrap", "Convert to Curves"],
    correct: 0,
    pembahasan: "Fit Text to Path membuat teks mengikuti jalur bentuk lengkung atau kurva."
},
{
    q: "Fungsi Print Merge untuk menggabungkan data teks dengan desain template...",
    a: ["Menggabungkan data teks dengan desain template", "Menyimpan file PDF", "Menggabungkan layer", "Membuat efek blend", "Membuat grup objek"],
    correct: 0,
    pembahasan: "Print Merge digunakan untuk membuat dokumen massal seperti undangan atau sertifikat."
},
{
    q: "Fungsi Color Proof Settings untuk mensimulasikan hasil warna cetak...",
    a: ["Mensimulasikan hasil warna cetak", "Mengatur resolusi gambar", "Mengubah mode halaman", "Mengatur layer", "Membuat efek gradasi"],
    correct: 0,
    pembahasan: "Color Proof mensimulasikan warna hasil cetak agar sesuai dengan tampilan monitor."
},
{
    q: "Perintah Convert to Bitmap untuk mengubah vektor menjadi gambar raster...",
    a: ["Convert to Bitmap", "Convert to Curves", "Trace Bitmap", "PowerClip", "Envelope Tool"],
    correct: 0,
    pembahasan: "Convert to Bitmap mengubah objek vektor menjadi gambar raster."
},
{
    q: "Tool Trace Bitmap digunakan untuk mengubah gambar raster menjadi vektor...",
    a: ["Trace Bitmap", "Convert to Bitmap", "Weld", "Blend", "Mesh Fill Tool"],
    correct: 0,
    pembahasan: "Trace Bitmap digunakan untuk mengubah gambar raster menjadi vektor."
},
{
    q: "Fungsi Guidelines untuk membantu perataan objek di area kerja...",
    a: ["Membantu perataan objek di area kerja", "Memberi warna", "Menghapus background", "Menyatukan layer", "Membuat efek bayangan"],
    correct: 0,
    pembahasan: "Guidelines membantu menempatkan objek secara simetris dan rapi."
},
{
    q: "Fungsi Page Setup untuk mengatur ukuran halaman dan orientasi...",
    a: ["Mengatur ukuran halaman dan orientasi", "Mengatur warna latar", "Menambah efek", "Mengatur layer", "Membuat margin otomatis"],
    correct: 0,
    pembahasan: "Page Setup digunakan untuk mengatur ukuran kertas dan orientasi desain."
},
{
    q: "Tool Envelope untuk mengubah bentuk huruf atau objek agar melengkung bebas...",
    a: ["Envelope Tool", "Text Tool", "Shape Tool", "Blend Tool", "Contour Tool"],
    correct: 0,
    pembahasan: "Envelope Tool memungkinkan distorsi atau perubahan bentuk teks atau objek."
},
{
    q: "Fungsi Object Styles untuk menyimpan pengaturan warna dan garis objek...",
    a: ["Menyimpan pengaturan warna dan garis", "Menyatukan objek", "Menambah teks", "Membuat efek bayangan", "Mengubah mode halaman"],
    correct: 0,
    pembahasan: "Object Styles menyimpan dan menerapkan gaya desain secara konsisten."
},
{
    q: "Fitur Page Navigator untuk membuat beberapa halaman desain dalam satu dokumen...",
    a: ["Page Navigator", "Object Manager", "Page Setup", "Grid", "Guidelines"],
    correct: 0,
    pembahasan: "Page Navigator memungkinkan pengguna membuat dan berpindah antar halaman."
},
{
    q: "Fungsi Symbol Tool untuk membuat dan mengelola elemen berulang seperti ikon...",
    a: ["Membuat dan mengelola elemen berulang seperti ikon", "Menambah warna", "Menyalin efek", "Membuat layer baru", "Membuat garis"],
    correct: 0,
    pembahasan: "Symbol Tool memudahkan pengelolaan elemen yang digunakan berulang kali."
},
{
    q: "Fungsi Export to PDF untuk menyimpan desain siap cetak...",
    a: ["Menyimpan desain siap cetak", "Menyimpan template", "Menambah efek 3D", "Menghapus warna", "Membuat bitmap"],
    correct: 0,
    pembahasan: "Export to PDF menghasilkan file desain siap untuk proses cetak."
},
{
    q: "Mode warna CMYK digunakan untuk desain cetak...",
    a: ["CMYK", "RGB", "Grayscale", "HSB", "Pantone"],
    correct: 0,
    pembahasan: "CMYK digunakan untuk hasil cetak agar warna sesuai dengan printer."
},
{
    q: "Fungsi Grid untuk membantu keseimbangan dan posisi elemen desain...",
    a: ["Membantu keseimbangan dan posisi elemen desain", "Menambah warna", "Menghapus objek", "Mengatur transparansi", "Membuat margin otomatis"],
    correct: 0,
    pembahasan: "Grid digunakan sebagai panduan dalam menata elemen desain secara proporsional."
},
{
    q: "Fungsi Publish to PDF untuk menyimpan desain ke format PDF dengan pengaturan cetak...",
    a: ["Menyimpan desain ke format PDF dengan pengaturan cetak", "Menyimpan proyek sebagai gambar", "Membuat template", "Mengubah warna", "Menyimpan file web"],
    correct: 0,
    pembahasan: "Publish to PDF menyimpan desain dengan pengaturan profesional untuk percetakan."
},

// =================== LEVEL LANJUT (ADVANCED) ===================
{
    q: "Fungsi PowerTRACE untuk mengubah bitmap menjadi vektor dengan kontrol detail...",
    a: ["Mengubah bitmap menjadi vektor dengan kontrol detail", "Mengubah warna bitmap", "Menambah efek 3D", "Menambahkan bayangan", "Membuat transparansi"],
    correct: 0,
    pembahasan: "PowerTRACE memberikan hasil vektorisasi bitmap yang presisi."
},
{
    q: "Fitur Preflight digunakan untuk memeriksa file sebelum dicetak...",
    a: ["Memeriksa file sebelum dicetak", "Mengatur layer", "Menambah warna", "Menambah teks", "Membuat halaman baru"],
    correct: 0,
    pembahasan: "Preflight membantu memastikan semua elemen desain siap untuk produksi cetak."
},
{
    q: "Fungsi Macros untuk mengotomatisasi tugas berulang di CorelDRAW...",
    a: ["Mengotomatisasi tugas berulang", "Menghapus objek", "Mengatur transparansi", "Menambah halaman", "Mengubah warna"],
    correct: 0,
    pembahasan: "Macros digunakan untuk membuat skrip otomatisasi proses desain."
},
{
    q: "Fungsi Perspective Tool untuk memberi efek perspektif pada objek...",
    a: ["Memberi efek perspektif pada objek", "Menambah warna", "Membuat grid", "Membuat efek transparansi", "Membuat bayangan"],
    correct: 0,
    pembahasan: "Perspective Tool digunakan untuk memberi ilusi kedalaman pada objek."
},
{
    q: "Fungsi Color Styles untuk menyimpan dan menerapkan kombinasi warna proyek...",
    a: ["Menyimpan dan menerapkan kombinasi warna proyek", "Menyimpan template halaman", "Menghapus warna", "Menambah efek 3D", "Membuat gradasi kompleks"],
    correct: 0,
    pembahasan: "Color Styles menjaga konsistensi warna antar elemen dalam satu proyek."
},
{
    q: "Fungsi Print Preview untuk melihat tampilan hasil cetak sebelum dicetak...",
    a: ["Melihat tampilan hasil cetak sebelum diprint", "Menyimpan dokumen", "Mengedit teks", "Menambah layer", "Mengatur grid"],
    correct: 0,
    pembahasan: "Print Preview menampilkan pratinjau hasil cetak untuk memastikan layout dan warna sudah benar."
},
{
    q: "Fitur Perspective/Envelope untuk menyusun desain kemasan dengan simulasi bentuk fisik...",
    a: ["Perspective / Envelope Tool", "Grid", "Contour", "Lens", "Blend Tool"],
    correct: 0,
    pembahasan: "Perspective dan Envelope digunakan untuk mensimulasikan bentuk 3D kemasan."
},
{
    q: "Fungsi Color Management untuk menjaga konsistensi warna antar perangkat...",
    a: ["Menjaga konsistensi warna antar perangkat", "Menambah warna", "Menghapus layer", "Menambah efek", "Mengatur transparansi"],
    correct: 0,
    pembahasan: "Color Management menjaga agar warna di layar sama dengan hasil cetak."
},
{
    q: "Fungsi PowerClip Edit Inside untuk mengedit objek di dalam PowerClip...",
    a: ["Mengedit objek di dalam PowerClip tanpa keluar dari wadahnya", "Menghapus PowerClip", "Membuat layer baru", "Mengubah ukuran halaman", "Membuat grup objek"],
    correct: 0,
    pembahasan: "Edit Inside memungkinkan modifikasi objek di dalam wadah PowerClip."
},
{
    q: "Fitur Publish to Web untuk menyimpan desain ke format web seperti HTML, PNG, JPG...",
    a: ["Menyimpan desain ke format web (HTML, PNG, JPG)", "Membuat PDF cetak", "Menambah layer", "Membuat vektor", "Membuat template web"],
    correct: 0,
    pembahasan: "Publish to Web menyiapkan desain agar sesuai untuk tampilan di web."
},
{
    q: "Fungsi Document Color Palette untuk menyimpan warna yang digunakan di dokumen aktif...",
    a: ["Menyimpan warna yang digunakan di dokumen aktif", "Menghapus warna", "Menambah teks", "Mengatur layer", "Membuat gradasi warna"],
    correct: 0,
    pembahasan: "Document Color Palette otomatis merekam semua warna yang digunakan dalam dokumen."
},
{
    q: "Fungsi Mesh Fill Tool untuk memberi gradasi warna kompleks pada objek...",
    a: ["Memberi gradasi warna kompleks pada objek", "Menambah bayangan", "Menambah outline", "Membuat teks", "Membuat pola"],
    correct: 0,
    pembahasan: "Mesh Fill memungkinkan kontrol gradasi warna yang realistis."
},
{
    q: "Fungsi Page Numbering untuk menambahkan nomor halaman otomatis pada proyek multi-page...",
    a: ["Menambahkan nomor halaman otomatis", "Menambah teks", "Menghapus halaman", "Mengatur warna", "Membuat footer"],
    correct: 0,
    pembahasan: "Page Numbering digunakan untuk memberi nomor halaman otomatis pada proyek multi-page."
},
{
    q: "Fungsi Object Styles Docker untuk mengelola dan menerapkan gaya objek dengan cepat...",
    a: ["Mengelola dan menerapkan gaya objek dengan cepat", "Menambah efek 3D", "Menyimpan halaman", "Mengatur resolusi", "Membuat template"],
    correct: 0,
    pembahasan: "Object Styles Docker memudahkan pengaturan gaya yang digunakan berulang."
},
{
    q: "Fungsi Layout Grid untuk menata teks dan gambar agar proporsional dalam desain editorial...",
    a: ["Menata teks dan gambar agar proporsional", "Menambah efek", "Mengubah warna", "Menghapus objek", "Mengatur margin"],
    correct: 0,
    pembahasan: "Layout Grid membantu keseimbangan desain dalam layout editorial atau majalah."
},
{
    q: "Fitur Page Border untuk membuat garis tepi halaman desain...",
    a: ["Membuat garis tepi halaman desain", "Menambah efek", "Menambah layer", "Mengubah warna", "Membuat bingkai dekoratif"],
    correct: 0,
    pembahasan: "Page Border membantu memberi batas visual pada area desain."
},
{
    q: "Fungsi Artistic Media Tool untuk membuat garis artistik seperti kuas, semprot, atau pola...",
    a: ["Membuat garis artistik seperti kuas, semprot, atau pola", "Menambah bayangan", "Membuat gradasi", "Menghapus outline", "Membuat shape baru"],
    correct: 0,
    pembahasan: "Artistic Media Tool digunakan untuk menciptakan efek garis artistik dan brush."
},
{
    q: "Fungsi Publish to EPS untuk menyimpan file desain ke format EPS untuk percetakan profesional...",
    a: ["Menyimpan file desain ke format EPS untuk percetakan profesional", "Menyimpan gambar raster", "Membuat bitmap", "Menambah layer", "Membuat template"],
    correct: 0,
    pembahasan: "EPS digunakan untuk pertukaran file vektor dengan printer dan software grafis lain."
},
{
    q: "Fungsi Table Tool untuk membuat tabel data dalam desain...",
    a: ["Membuat tabel data dalam desain", "Menambah layer", "Mengatur warna", "Membuat garis", "Menyatukan objek"],
    correct: 0,
    pembahasan: "Table Tool memungkinkan pembuatan tabel dalam desain layout."
},
{
    q: "Fitur Alignment Guide bekerja untuk menampilkan garis bantu otomatis saat objek disejajarkan...",
    a: ["Menampilkan garis bantu otomatis saat objek disejajarkan", "Menambah warna", "Menghapus teks", "Mengatur halaman", "Membuat grid otomatis"],
    correct: 0,
    pembahasan: "Alignment Guide membantu perataan objek secara otomatis dan presisi."
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
