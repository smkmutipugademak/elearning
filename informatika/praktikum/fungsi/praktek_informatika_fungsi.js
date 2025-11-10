let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa output dari kode berikut?",
        code: "def halo():\n    print('Selamat pagi')\nhalo()",
        a: ["Selamat pagi", "Error", "Tidak ada output", "Selamat siang"],
        correct: 0,
        pembahasan: "Fungsi halo() dipanggil dan mencetak 'Selamat pagi'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def tambah():\n    return 2 + 3\nprint(tambah())",
        a: ["2 + 3", "5", "Error", "23"],
        correct: 1,
        pembahasan: "Fungsi mengembalikan hasil 2+3 yaitu 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def kali(a,b):\n    print(a*b)\nkali(3,4)",
        a: ["7", "12", "3*4", "Error"],
        correct: 1,
        pembahasan: "a=3 dan b=4 → hasil perkalian = 12."
    },
    {
        q: "Apa yang dikembalikan fungsi berikut?",
        code: "def identitas(nama):\n    return 'Halo ' + nama\nprint(identitas('Rani'))",
        a: ["Halo", "Rani", "Halo Rani", "Error"],
        correct: 2,
        pembahasan: "Return menggabungkan string 'Halo ' dengan 'Rani'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def angka():\n    return 10\nx = angka()\nprint(x)",
        a: ["angka", "10", "Error", "None"],
        correct: 1,
        pembahasan: "Return mengembalikan nilai 10 ke variabel x."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def tambah(x,y):\n    return x+y\nprint(tambah(1,2)+tambah(3,4))",
        a: ["10", "9", "7", "Error"],
        correct: 1,
        pembahasan: "1+2=3 dan 3+4=7, jadi 3+7=10 → hasilnya 10."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def test():\n    print('Belajar Python')\n    return 5\ntest()",
        a: ["5", "Belajar Python", "None", "Error"],
        correct: 1,
        pembahasan: "Fungsi dipanggil, mencetak teks sebelum return."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def f(x):\n    return x*3\nprint(f(2))",
        a: ["6", "3", "2", "Error"],
        correct: 0,
        pembahasan: "x=2 → 2×3=6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def salam():\n    return 'Hai!'\nprint(salam())",
        a: ["Hai!", "None", "Error", "salam"],
        correct: 0,
        pembahasan: "Return 'Hai!' ditampilkan oleh print()."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def tampil():\n    print('Python menyenangkan')\nprint(tampil())",
        a: ["Python menyenangkan", "None", "Error", "Python menyenangkan None"],
        correct: 1,
        pembahasan: "Fungsi hanya print tanpa return → mengembalikan None."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def luas(p,l):\n    return p*l\nprint(luas(4,2))",
        a: ["6", "8", "4", "Error"],
        correct: 1,
        pembahasan: "Luas = panjang × lebar = 4×2 = 8."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def bagi(x,y):\n    return x / y\nprint(bagi(6,3))",
        a: ["2", "3", "6", "Error"],
        correct: 0,
        pembahasan: "6 ÷ 3 = 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def f(x,y):\n    return x - y\nprint(f(10,4))",
        a: ["6", "14", "-6", "Error"],
        correct: 0,
        pembahasan: "10 - 4 = 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def tampil(nama='Ayu'):\n    print('Halo', nama)\ntampil()",
        a: ["Halo", "Halo Ayu", "Ayu", "Error"],
        correct: 1,
        pembahasan: "Parameter default digunakan karena tidak ada argumen."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def tambah(a,b=5):\n    return a+b\nprint(tambah(3))",
        a: ["3", "5", "8", "Error"],
        correct: 2,
        pembahasan: "b menggunakan default 5 → 3+5=8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def tampil():\n    return 'Python'\nprint(tampil()*2)",
        a: ["Python", "PythonPython", "2", "Error"],
        correct: 1,
        pembahasan: "String dikalikan 2 → diulang dua kali."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def hitung(a,b,c):\n    return a+b+c\nprint(hitung(1,2,3))",
        a: ["5", "6", "7", "Error"],
        correct: 1,
        pembahasan: "1+2+3 = 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def cek():\n    x = 10\n    return x > 5\nprint(cek())",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "10 > 5 menghasilkan True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def f(n):\n    print(n*'A')\nf(3)",
        a: ["A", "AA", "AAA", "Error"],
        correct: 2,
        pembahasan: "n=3 → 'A' diulang 3 kali = 'AAA'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def sapa(nama):\n    return f'Halo {nama}'\nprint(sapa('Andi'))",
        a: ["Halo Andi", "Halo {nama}", "Andi", "Error"],
        correct: 0,
        pembahasan: "f-string menggantikan variabel nama menjadi 'Halo Andi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def nilai():\n    return 100\nprint(nilai()+50)",
        a: ["100", "150", "50", "Error"],
        correct: 1,
        pembahasan: "100 + 50 = 150."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def f(x):\n    return x**2\nprint(f(3))",
        a: ["6", "9", "3", "Error"],
        correct: 1,
        pembahasan: "3 pangkat 2 = 9."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def f():\n    pass\nprint(f())",
        a: ["Error", "None", "pass", "0"],
        correct: 1,
        pembahasan: "Fungsi tanpa return akan mengembalikan None."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def gabung(a,b):\n    return a + ' ' + b\nprint(gabung('Selamat','Datang'))",
        a: ["Selamat Datang", "SelamatDatang", "Error", "None"],
        correct: 0,
        pembahasan: "String digabung dengan spasi di antaranya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def cek(nilai):\n    if nilai >= 75:\n        return 'Lulus'\n    else:\n        return 'Gagal'\nprint(cek(80))",
        a: ["Lulus", "Gagal", "Error", "None"],
        correct: 0,
        pembahasan: "80 >= 75 → kondisi benar → return 'Lulus'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def f(x,y):\n    print(x+y)\nf(2,3)",
        a: ["5", "Error", "x+y", "23"],
        correct: 0,
        pembahasan: "2+3=5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def total(a,b,c=2):\n    return a+b+c\nprint(total(1,2))",
        a: ["3", "5", "6", "Error"],
        correct: 1,
        pembahasan: "c memakai nilai default 2 → 1+2+2=5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def pangkat(x):\n    return x**3\nprint(pangkat(2))",
        a: ["4", "6", "8", "Error"],
        correct: 2,
        pembahasan: "2³ = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def angka():\n    print(1)\n    print(2)\nangka()",
        a: ["1", "2", "1 2", "Error"],
        correct: 2,
        pembahasan: "Fungsi mencetak dua baris angka: 1 dan 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def data():\n    return [1,2,3]\nprint(data()[0])",
        a: ["1", "2", "3", "Error"],
        correct: 0,
        pembahasan: "Index 0 mengambil elemen pertama list → 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def f(a,b):\n    return a*b\nprint(f('Hi',2))",
        a: ["Hi", "HiHi", "2Hi", "Error"],
        correct: 1,
        pembahasan: "String dikalikan 2 → diulang dua kali = 'HiHi'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def jumlah():\n    total = sum([1,2,3])\n    return total\nprint(jumlah())",
        a: ["1", "6", "123", "Error"],
        correct: 1,
        pembahasan: "sum() menghitung total elemen list → 1+2+3=6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def panjang(teks):\n    return len(teks)\nprint(panjang('abc'))",
        a: ["2", "3", "4", "Error"],
        correct: 1,
        pembahasan: "len('abc') = 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def nilai(x):\n    if x % 2 == 0:\n        return 'Genap'\n    else:\n        return 'Ganjil'\nprint(nilai(7))",
        a: ["Genap", "Ganjil", "Error", "None"],
        correct: 1,
        pembahasan: "7 % 2 = 1 → hasilnya 'Ganjil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def f(a,b):\n    return a//b\nprint(f(7,2))",
        a: ["3", "3.5", "4", "Error"],
        correct: 0,
        pembahasan: "// adalah pembagian bulat → 7//2 = 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def f(x):\n    return type(x)\nprint(f(5))",
        a: ["<class 'int'>", "<class 'str'>", "int", "Error"],
        correct: 0,
        pembahasan: "5 adalah integer, jadi type-nya <class 'int'>."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def cek(nilai):\n    return nilai in [1,2,3]\nprint(2 in [1,2,3])",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "2 ada di list, maka True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def gabung(*args):\n    return args\nprint(gabung('a','b'))",
        a: ["('a','b')", "['a','b']", "a,b", "Error"],
        correct: 0,
        pembahasan: "*args mengembalikan tuple dari argumen yang diterima."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def data(**info):\n    return info['nama']\nprint(data(nama='Budi'))",
        a: ["Budi", "nama", "Error", "None"],
        correct: 0,
        pembahasan: "**kwargs menyimpan argumen key-value, diakses seperti dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def hitung():\n    a = 5\n    b = 3\n    return a + b\nprint(hitung())",
        a: ["8", "53", "a + b", "Error"],
        correct: 0,
        pembahasan: "Fungsi menjumlahkan 5 dan 3 lalu mengembalikannya → hasilnya 8."
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
document.querySelector('.btn-back').addEventListener('click', function (e) {
    e.preventDefault();
    // Deteksi lokasi root otomatis (3 tingkat ke atas)
    const current = window.location.href;
    const newUrl = current.split("/informatika/")[0] + "/index.html";
    window.location.href = newUrl;
});
