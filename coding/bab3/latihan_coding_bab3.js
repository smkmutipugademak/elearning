let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0; // in seconds

const quizData = [
    {
        q: "Klausa WHERE dalam SQL digunakan untuk?",
        a: [
            "Mengurutkan data berdasarkan kolom tertentu",
            "Menentukan kondisi pengambilan data",
            "Menampilkan semua data tanpa filter",
            "Menghapus data dalam tabel",
            "Menambahkan kolom baru"
        ],
        correct: 1,
        pembahasan: "WHERE digunakan untuk menampilkan data yang memenuhi kondisi tertentu."
    },
    {
        q: "Fungsi dari operator '=' dalam perintah SQL adalah?",
        a: [
            "Menjumlahkan dua nilai",
            "Membandingkan nilai antar field",
            "Menampilkan data acak",
            "Menghapus record",
            "Mengurutkan data"
        ],
        correct: 1,
        pembahasan: "Operator '=' digunakan untuk membandingkan nilai dalam SQL."
    },
    {
        q: "LIKE dalam SQL digunakan untuk?",
        a: [
            "Menghapus data berdasarkan pola",
            "Menampilkan data yang sesuai pola tertentu",
            "Menampilkan data terurut naik",
            "Mengelompokkan data berdasarkan field",
            "Menjumlahkan data numerik"
        ],
        correct: 1,
        pembahasan: "LIKE digunakan untuk pencarian data berdasarkan pola."
    },
    {
        q: "Simbol % pada klausa LIKE berarti?",
        a: [
            "Menunjukkan huruf besar",
            "Satu karakter bebas",
            "Satu atau lebih karakter bebas",
            "Menunjukkan angka desimal",
            "Tanda pengulangan query"
        ],
        correct: 2,
        pembahasan: "Simbol % mewakili satu atau lebih karakter bebas dalam pola LIKE."
    },
    {
        q: "Query SELECT * FROM pelanggan WHERE nama LIKE '%dewa%'; akan menampilkan?",
        a: [
            "Semua data pelanggan",
            "Pelanggan dengan nama persis 'dewa'",
            "Pelanggan yang mengandung kata 'dewa' di mana saja",
            "Pelanggan yang namanya diakhiri dengan 'dewa'",
            "Tidak menampilkan data"
        ],
        correct: 2,
        pembahasan: "Pola %dewa% menampilkan semua nama yang mengandung kata 'dewa'."
    },
    {
        q: "Pola LIKE 'data%' berarti?",
        a: [
            "Data harus ada di awal teks",
            "Data harus ada di tengah teks",
            "Data harus ada di akhir teks",
            "Data tidak boleh muncul",
            "Data muncul dua kali"
        ],
        correct: 0,
        pembahasan: "Pola 'data%' berarti teks dimulai dengan kata 'data'."
    },
    {
        q: "Pola LIKE '%data' berarti?",
        a: [
            "Teks dimulai dengan 'data'",
            "Teks berakhiran 'data'",
            "Teks berisi 'data' di tengah",
            "Teks kosong",
            "Semua jawaban salah"
        ],
        correct: 1,
        pembahasan: "Pola '%data' menampilkan teks yang berakhir dengan kata 'data'."
    },
    {
        q: "Fungsi ORDER BY dalam SQL adalah?",
        a: [
            "Menghapus data duplikat",
            "Menampilkan data secara acak",
            "Mengurutkan hasil query",
            "Menggabungkan dua tabel",
            "Menghapus record tertentu"
        ],
        correct: 2,
        pembahasan: "ORDER BY digunakan untuk mengurutkan hasil query berdasarkan kolom."
    },
    {
        q: "ASC dalam SQL berarti?",
        a: [
            "Mengurutkan secara menurun",
            "Mengurutkan secara menaik",
            "Menghapus hasil urutan",
            "Menampilkan hasil acak",
            "Mengelompokkan data"
        ],
        correct: 1,
        pembahasan: "ASC (Ascending) berarti urutan dari kecil ke besar atau A-Z."
    },
    {
        q: "DESC digunakan untuk?",
        a: [
            "Mengurutkan data menaik",
            "Menghapus data duplikat",
            "Mengurutkan data menurun",
            "Menampilkan semua data",
            "Mengubah tipe data"
        ],
        correct: 2,
        pembahasan: "DESC (Descending) digunakan untuk mengurutkan data menurun (Z–A)."
    },
    {
        q: "Perintah SELECT * FROM pelanggan ORDER BY nama DESC; akan menampilkan?",
        a: [
            "Semua data diurutkan A-Z",
            "Semua data diurutkan Z-A",
            "Hanya nama pelanggan",
            "Data tanpa urutan",
            "Data teracak"
        ],
        correct: 1,
        pembahasan: "DESC mengurutkan hasil berdasarkan nama secara menurun (Z ke A)."
    },
    {
        q: "GROUP BY digunakan untuk?",
        a: [
            "Menghapus record duplikat",
            "Mengelompokkan hasil query berdasarkan field tertentu",
            "Menampilkan data tanpa kondisi",
            "Mengurutkan hasil query",
            "Menggandakan data"
        ],
        correct: 1,
        pembahasan: "GROUP BY mengelompokkan hasil SELECT berdasarkan kesamaan nilai field."
    },
    {
        q: "Query SELECT * FROM pelanggan GROUP BY tipe; artinya?",
        a: [
            "Data dikelompokkan berdasarkan nama",
            "Data diurutkan berdasarkan tipe",
            "Data dikelompokkan berdasarkan tipe pelanggan",
            "Data dihapus berdasarkan tipe",
            "Data tidak ditampilkan"
        ],
        correct: 2,
        pembahasan: "GROUP BY tipe akan mengelompokkan hasil SELECT berdasarkan tipe pelanggan."
    },
    {
        q: "Jika ORDER BY tidak digunakan, maka hasil SELECT akan ditampilkan berdasarkan?",
        a: [
            "Abjad nama",
            "Urutan penginputan data",
            "Nilai terkecil",
            "Kota pelanggan",
            "Tipe pelanggan"
        ],
        correct: 1,
        pembahasan: "Tanpa ORDER BY, data ditampilkan sesuai urutan input ke database."
    },
    {
        q: "Query untuk menampilkan kode 123 dan 136 urut alamat ASC adalah?",
        a: [
            "SELECT * FROM pelanggan WHERE kode=123,136 ORDER BY alamat ASC;",
            "SELECT * FROM pelanggan ORDER BY alamat WHERE kode IN (123,136);",
            "SELECT * FROM pelanggan WHERE kode IN (123,136) ORDER BY alamat ASC;",
            "SELECT * FROM pelanggan ORDER BY alamat ASC WHERE kode=123 OR 136;",
            "SELECT * FROM pelanggan GROUP BY kode=123,136;"
        ],
        correct: 2,
        pembahasan: "Query yang benar menggunakan IN dan ORDER BY ASC."
    },
    {
        q: "Untuk menampilkan kode 128 dan 134 digunakan query?",
        a: [
            "SELECT * FROM pelanggan WHERE kode=128,134;",
            "SELECT * FROM pelanggan WHERE kode IN (128,134);",
            "SELECT * FROM pelanggan GROUP BY kode;",
            "SELECT kode=128,134 FROM pelanggan;",
            "SELECT * FROM pelanggan WHERE kode LIKE '%128%';"
        ],
        correct: 1,
        pembahasan: "Kata kunci IN digunakan untuk memilih beberapa nilai sekaligus."
    },
    {
        q: "Query SELECT * FROM pelanggan WHERE alamat LIKE '%12%' ORDER BY tipe DESC; digunakan untuk?",
        a: [
            "Menampilkan semua data tanpa filter",
            "Menampilkan pelanggan dengan nomor rumah 12 diurutkan berdasarkan tipe menurun",
            "Menghapus record dengan alamat 12",
            "Menambahkan record baru",
            "Menampilkan tipe tertentu saja"
        ],
        correct: 1,
        pembahasan: "LIKE '%12%' mencari alamat yang mengandung angka 12, ORDER BY tipe DESC mengurutkan menurun."
    },
    {
        q: "Operator IN digunakan untuk?",
        a: [
            "Menggabungkan tabel",
            "Menentukan nilai dari daftar tertentu",
            "Menjumlahkan field",
            "Menampilkan hasil acak",
            "Menghapus record duplikat"
        ],
        correct: 1,
        pembahasan: "IN memudahkan pencarian beberapa nilai dalam satu kondisi."
    },
    {
        q: "Untuk menampilkan pelanggan bertipe GOLD, query-nya?",
        a: [
            "SELECT * FROM pelanggan WHERE tipe='GOLD';",
            "SELECT * FROM pelanggan GROUP BY tipe='GOLD';",
            "SELECT * FROM pelanggan ORDER BY tipe='GOLD';",
            "SELECT * FROM pelanggan WHERE tipe LIKE '%GOLD%';",
            "SELECT * FROM pelanggan HAVING tipe='GOLD';"
        ],
        correct: 0,
        pembahasan: "WHERE tipe='GOLD' menampilkan semua pelanggan dengan tipe GOLD."
    },
    {
        q: "ORDER BY kota DESC berarti?",
        a: [
            "Mengurutkan data berdasarkan kota dari A ke Z",
            "Mengurutkan data berdasarkan kota dari Z ke A",
            "Mengelompokkan data berdasarkan kota",
            "Menghapus kota duplikat",
            "Menambahkan kota baru"
        ],
        correct: 1,
        pembahasan: "DESC digunakan untuk mengurutkan data menurun (Z–A)."
    },
    {
        q: "Query SELECT * FROM pelanggan WHERE nama LIKE '%PUTRA%'; akan menampilkan?",
        a: [
            "Semua pelanggan dengan nama mengandung 'PUTRA'",
            "Pelanggan dengan nama diawali 'PUTRA'",
            "Pelanggan dengan nama diakhiri 'PUTRA'",
            "Tidak menampilkan data apapun",
            "Semua pelanggan GOLD"
        ],
        correct: 0,
        pembahasan: "LIKE '%PUTRA%' menampilkan semua nama yang mengandung kata 'PUTRA'."
    },
    {
        q: "Simbol * dalam SELECT * FROM berarti?",
        a: [
            "Menampilkan semua tabel",
            "Menampilkan semua kolom (field)",
            "Menampilkan kolom tertentu",
            "Menampilkan data acak",
            "Menghapus semua data"
        ],
        correct: 1,
        pembahasan: "Tanda * menampilkan seluruh kolom dari tabel."
    },
    {
        q: "GROUP BY dan ORDER BY berbeda karena?",
        a: [
            "GROUP BY mengurutkan data, ORDER BY mengelompokkan",
            "GROUP BY mengelompokkan data, ORDER BY mengurutkan",
            "Keduanya sama",
            "ORDER BY tidak bisa digunakan dengan WHERE",
            "GROUP BY hanya untuk angka"
        ],
        correct: 1,
        pembahasan: "GROUP BY mengelompokkan, sedangkan ORDER BY mengurutkan."
    },
    {
        q: "SELECT * FROM pelanggan ORDER BY nama; artinya?",
        a: [
            "Menampilkan pelanggan tanpa urutan",
            "Menampilkan pelanggan diurutkan berdasarkan nama naik",
            "Menampilkan pelanggan berdasarkan nama menurun",
            "Menghapus pelanggan berdasarkan nama",
            "Mengelompokkan pelanggan berdasarkan nama"
        ],
        correct: 1,
        pembahasan: "Tanpa ASC/DESC, ORDER BY secara default mengurutkan naik (ASC)."
    },
    {
        q: "Query SELECT tipe, COUNT(*) FROM pelanggan GROUP BY tipe; digunakan untuk?",
        a: [
            "Menampilkan semua pelanggan",
            "Menampilkan jumlah pelanggan setiap tipe",
            "Menampilkan tipe pelanggan acak",
            "Menghapus pelanggan",
            "Mengurutkan pelanggan"
        ],
        correct: 1,
        pembahasan: "COUNT(*) menghitung jumlah data dalam setiap kelompok tipe."
    },
    {
        q: "SQL merupakan bahasa yang digunakan untuk?",
        a: [
            "Mengelola database",
            "Membuat desain grafis",
            "Mengatur sistem operasi",
            "Membuat program desktop",
            "Mengedit teks biasa"
        ],
        correct: 0,
        pembahasan: "SQL (Structured Query Language) digunakan untuk mengelola database."
    },
    {
        q: "Setiap perintah SQL diakhiri dengan?",
        a: [",", ".", ";", ":", "#"],
        correct: 2,
        pembahasan: "Perintah SQL diakhiri dengan tanda titik koma (;)."
    },
    {
        q: "ASC berarti?",
        a: [
            "Ascending (menaik)",
            "Descending (menurun)",
            "Alphabetical",
            "Average",
            "Auto Sort Column"
        ],
        correct: 0,
        pembahasan: "ASC adalah singkatan dari Ascending (menaik)."
    },
    {
        q: "DESC berarti?",
        a: [
            "Descending (menurun)",
            "Description",
            "Descending Column",
            "Data Selection Code",
            "Delete Section"
        ],
        correct: 0,
        pembahasan: "DESC digunakan untuk urutan menurun."
    },
    {
        q: "Tanda kutip satu (‘ ’) dalam SQL digunakan untuk?",
        a: [
            "Nilai numerik",
            "Nilai string (teks)",
            "Nama tabel",
            "Operator logika",
            "Nama kolom"
        ],
        correct: 1,
        pembahasan: "String dalam SQL harus diapit oleh tanda kutip satu (‘ ’)."
    },
    {
        q: "LIKE '%data%' akan mencari?",
        a: [
            "Data yang diawali 'data'",
            "Data yang diakhiri 'data'",
            "Data yang mengandung kata 'data' di mana saja",
            "Data kosong",
            "Data numerik"
        ],
        correct: 2,
        pembahasan: "Pola %data% mencari semua teks yang mengandung kata 'data'."
    },
    {
        q: "Jika ORDER BY tidak disebutkan, maka data ditampilkan?",
        a: [
            "Secara alfabet",
            "Sesuai urutan penginputan",
            "Secara acak",
            "Dari data terbaru",
            "Dari data tertua"
        ],
        correct: 1,
        pembahasan: "Tanpa ORDER BY, hasil ditampilkan berdasarkan urutan input data."
    },
    {
        q: "Query SELECT * FROM pelanggan WHERE kota='JAKARTA'; menampilkan?",
        a: [
            "Semua pelanggan",
            "Hanya pelanggan dari JAKARTA",
            "Pelanggan dari semua kota",
            "Data tanpa kota",
            "Semua pelanggan GOLD"
        ],
        correct: 1,
        pembahasan: "WHERE kota='JAKARTA' menampilkan data pelanggan dari kota Jakarta saja."
    },
    {
        q: "Apa fungsi tanda * dalam SQL?",
        a: [
            "Menampilkan semua field dalam tabel",
            "Menampilkan satu kolom saja",
            "Menghapus field kosong",
            "Menjumlahkan field",
            "Menandai kolom kunci"
        ],
        correct: 0,
        pembahasan: "Tanda * digunakan untuk menampilkan semua kolom."
    },
    {
        q: "Query SELECT * FROM pelanggan; berfungsi untuk?",
        a: [
            "Menampilkan semua data pelanggan",
            "Menghapus semua data pelanggan",
            "Menambah data baru",
            "Menampilkan sebagian kolom",
            "Menampilkan data acak"
        ],
        correct: 0,
        pembahasan: "SELECT * FROM pelanggan; menampilkan semua kolom dan data dari tabel pelanggan."
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
