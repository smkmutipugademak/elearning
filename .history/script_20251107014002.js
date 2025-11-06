let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0; // in seconds

const quizData = [
  {
    q: "MySQL termasuk jenis perangkat lunak yang bersifat?",
    a: ["Berbayar", "Freeware", "Shareware"],
    correct: 1,
    pembahasan: "MySQL bersifat freeware, artinya dapat digunakan secara gratis."
  },
  {
    q: "Kelebihan MySQL dibandingkan DBMS lain adalah?",
    a: ["Sulit digunakan", "Berat dijalankan", "Ringan dan mudah digunakan"],
    correct: 2,
    pembahasan: "MySQL dikenal ringan dan mudah digunakan sehingga populer di kalangan pengguna database."
  },
  {
    q: "Software yang sering digunakan untuk menjalankan MySQL adalah?",
    a: ["WAMP", "XAMPP", "Mercury"],
    correct: 1,
    pembahasan: "XAMPP merupakan paket yang berisi Apache, MySQL, PHP, dan lainnya untuk pengembangan lokal."
  },
  {
    q: "Dalam paket XAMPP, MySQL berfungsi sebagai?",
    a: ["Web Server", "Database Server", "Mail Server"],
    correct: 1,
    pembahasan: "MySQL digunakan sebagai database server untuk menyimpan data aplikasi."
  },
  {
    q: "Apache pada XAMPP digunakan untuk?",
    a: ["Database Server", "Web Server", "FTP Server"],
    correct: 1,
    pembahasan: "Apache adalah web server untuk menjalankan aplikasi berbasis web secara lokal."
  },
  {
    q: "Direktori MySQL yang berisi file database adalah?",
    a: ["bin", "data", "htdocs"],
    correct: 1,
    pembahasan: "Direktori data menyimpan file-file database yang telah dibuat di MySQL."
  },
  {
    q: "Direktori 'bin' pada MySQL berisi?",
    a: ["File data", "Service dan executable file", "Backup database"],
    correct: 1,
    pembahasan: "Folder bin berisi file .exe untuk menjalankan MySQL, seperti mysql.exe."
  },
  {
    q: "Untuk menjalankan MySQL melalui CMD, direktori yang digunakan adalah?",
    a: ["c:\\xampp\\htdocs", "c:\\xampp\\mysql\\bin", "c:\\xampp\\apache"],
    correct: 1,
    pembahasan: "Perintah dijalankan dari direktori c:\\xampp\\mysql\\bin agar mysql.exe dapat diakses."
  },
  {
    q: "Perintah untuk masuk ke MySQL dengan user root tanpa password adalah?",
    a: ["mysql –u root –p", "mysql –u root", "mysql –root"],
    correct: 1,
    pembahasan: "User root tanpa password cukup ditulis mysql –u root."
  },
  {
    q: "Setelah berhasil masuk ke MySQL, pengguna dapat menulis?",
    a: ["Perintah DOS", "Query SQL", "Kode PHP"],
    correct: 1,
    pembahasan: "Di dalam MySQL, perintah ditulis dalam bentuk query SQL."
  },
  {
    q: "Perintah SHOW DATABASES; berfungsi untuk?",
    a: ["Membuat database", "Menampilkan daftar database", "Menghapus database"],
    correct: 1,
    pembahasan: "SHOW DATABASES menampilkan semua database yang ada di server MySQL."
  },
  {
    q: "Perintah untuk menampilkan semua tabel dalam database adalah?",
    a: ["SHOW TABLES;", "LIST TABLES;", "SHOW ALL;"],
    correct: 0,
    pembahasan: "SHOW TABLES digunakan untuk menampilkan semua tabel pada database aktif."
  },
  {
    q: "Fungsi USE nama_database; adalah?",
    a: ["Membuat database baru", "Memilih database yang akan digunakan", "Menghapus database"],
    correct: 1,
    pembahasan: "Perintah USE digunakan untuk berpindah atau memilih database tertentu."
  },
  {
    q: "Perintah CREATE DATABASE mahasiswa; digunakan untuk?",
    a: ["Membuat database baru", "Menghapus tabel", "Menampilkan isi tabel"],
    correct: 0,
    pembahasan: "CREATE DATABASE membuat database baru dengan nama yang ditentukan."
  },
  {
    q: "Perintah untuk membuat tabel baru adalah?",
    a: ["NEW TABLE", "CREATE TABLE", "ADD TABLE"],
    correct: 1,
    pembahasan: "CREATE TABLE digunakan untuk membuat tabel baru di database."
  },
  {
    q: "Bagian tabel yang berisi tipe data disebut?",
    a: ["Record", "Field", "Primary Key"],
    correct: 1,
    pembahasan: "Field mendefinisikan nama kolom dan tipe datanya."
  },
  {
    q: "Perintah DESC nama_tabel; digunakan untuk?",
    a: ["Melihat struktur tabel", "Menampilkan isi tabel", "Menghapus tabel"],
    correct: 0,
    pembahasan: "DESC (describe) digunakan untuk menampilkan struktur atau metadata tabel."
  },
  {
    q: "SQL adalah singkatan dari?",
    a: ["System Query Language", "Structured Query Language", "Standard Query Logic"],
    correct: 1,
    pembahasan: "SQL merupakan singkatan dari Structured Query Language."
  },
  {
    q: "Setiap perintah SQL diakhiri dengan?",
    a: [".", ";", ","],
    correct: 1,
    pembahasan: "Setiap perintah SQL harus diakhiri dengan tanda titik koma (;)."
  },
  {
    q: "Tipe data numerik pada MySQL adalah?",
    a: ["CHAR", "VARCHAR", "INT"],
    correct: 2,
    pembahasan: "INT digunakan untuk menyimpan data bilangan bulat."
  },
  {
    q: "Dalam contoh praktikum, nama database yang dibuat adalah?",
    a: ["sekolah", "mahasiswa", "dosen"],
    correct: 1,
    pembahasan: "Contoh pada modul membuat database bernama 'mahasiswa'."
  },
  {
    q: "Tabel siswa pada contoh memiliki field berikut, kecuali?",
    a: ["Nim", "Nama", "Alamat"],
    correct: 2,
    pembahasan: "Tabel siswa hanya berisi Nim, Nama, dan Wali — tidak memiliki field Alamat."
  },
  {
    q: "Tabel wali memiliki field berikut, kecuali?",
    a: ["Nip", "Nama", "Wali"],
    correct: 2,
    pembahasan: "Field dalam tabel wali adalah Nip, Nama, dan Alamat."
  },
  {
    q: "Kata kunci NOT NULL digunakan untuk?",
    a: ["Mengizinkan nilai kosong", "Menolak nilai kosong", "Menentukan default value"],
    correct: 1,
    pembahasan: "NOT NULL memastikan kolom harus berisi nilai (tidak boleh kosong)."
  },
  {
    q: "Perintah SQL yang benar untuk membuat database adalah?",
    a: ["CREATE DATABASE mahasiswa;", "NEW DATABASE mahasiswa;", "ADD DATABASE mahasiswa;"],
    correct: 0,
    pembahasan: "CREATE DATABASE adalah sintaks yang benar untuk membuat database baru."
  },
  {
    q: "Perintah yang benar untuk melihat struktur tabel siswa adalah?",
    a: ["SHOW TABLE siswa;", "DESC siswa;", "VIEW siswa;"],
    correct: 1,
    pembahasan: "DESC siswa; digunakan untuk menampilkan struktur tabel siswa."
  },
  {
    q: "Fungsi utama XAMPP adalah?",
    a: ["Aplikasi pengolah kata", "Server lokal untuk pengembangan web", "Program desain grafis"],
    correct: 1,
    pembahasan: "XAMPP menyediakan lingkungan server lokal lengkap untuk pengembangan web."
  },
  {
    q: "FileZilla dalam XAMPP berfungsi sebagai?",
    a: ["FTP Server", "Web Server", "Database Server"],
    correct: 0,
    pembahasan: "FileZilla merupakan FTP server untuk transfer file antar komputer."
  },
  {
    q: "Mercury pada XAMPP berfungsi sebagai?",
    a: ["Mail Server", "Web Server", "Database Server"],
    correct: 0,
    pembahasan: "Mercury adalah mail server untuk mengelola pengiriman email lokal."
  },
  {
    q: "Perintah SHOW TABLES; dapat dijalankan setelah?",
    a: ["Menjalankan Apache", "Memilih database dengan USE", "Menginstal XAMPP"],
    correct: 1,
    pembahasan: "SHOW TABLES hanya dapat dijalankan setelah memilih database aktif dengan USE."
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
