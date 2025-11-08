let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (TUPLE DASAR) ===================
    {
        q: "Apa tipe data dari variabel berikut?",
        code: "data = (1, 2, 3)",
        a: ["tuple", "list", "set", "dict"],
        correct: 0,
        pembahasan: "Tanda kurung biasa () menandakan tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (10, 20, 30)\nprint(data[0])",
        a: ["10", "20", "30", "Error"],
        correct: 0,
        pembahasan: "Indeks 0 mengakses elemen pertama tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(len(data))",
        a: ["2", "3", "1", "Error"],
        correct: 1,
        pembahasan: "len() menghitung jumlah elemen dalam tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ()\nprint(len(data))",
        a: ["0", "1", "Error", "None"],
        correct: 0,
        pembahasan: "Tuple kosong memiliki panjang 0."
    },
    {
        q: "Bagaimana cara membuat tuple dengan satu elemen?",
        code: "data = (1,)\nprint(type(data))",
        a: ["<class 'tuple'>", "<class 'int'>", "<class 'list'>", "Error"],
        correct: 0,
        pembahasan: "Tuple satu elemen harus diakhiri dengan koma: (1,)."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(2 in data)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Operator in memeriksa apakah elemen ada di tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(data[-1])",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Indeks -1 mengakses elemen terakhir tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (10, 20, 30)\nprint(data[1+1])",
        a: ["10", "20", "30", "Error"],
        correct: 2,
        pembahasan: "1+1=2, jadi elemen di indeks ke-2 adalah 30."
    },
    {
        q: "Bagaimana cara menggabungkan dua tuple?",
        code: "a = (1, 2)\nb = (3, 4)\nprint(a + b)",
        a: ["(1, 2, 3, 4)", "(1, 2).append(3,4)", "Error", "['1','2','3','4']"],
        correct: 0,
        pembahasan: "Operator + digunakan untuk menggabungkan tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2)\nprint(data * 2)",
        a: ["(1, 2, 1, 2)", "(2, 4)", "(1, 1, 2, 2)", "Error"],
        correct: 0,
        pembahasan: "Operator * menggandakan isi tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = tuple([1, 2, 3])\nprint(data)",
        a: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "Error"],
        correct: 0,
        pembahasan: "Fungsi tuple() mengubah list menjadi tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nfor i in data:\n    print(i)",
        a: ["1\\n2\\n3", "123", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "for loop mencetak setiap elemen tuple pada baris baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ('a', 'b', 'c')\nprint(data[1])",
        a: ["'a'", "'b'", "'c'", "Error"],
        correct: 1,
        pembahasan: "Indeks 1 berarti elemen kedua yaitu 'b'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(type(data))",
        a: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
        correct: 0,
        pembahasan: "Variabel bertipe tuple akan menghasilkan <class 'tuple'>."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(sum(data))",
        a: ["6", "3", "Error", "None"],
        correct: 0,
        pembahasan: "sum() menjumlahkan semua elemen numerik → 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ('python',) * 3\nprint(data)",
        a: ["('python', 'python', 'python')", "('python')", "Error", "['python', 'python', 'python']"],
        correct: 0,
        pembahasan: "Pengulangan tuple menghasilkan elemen yang sama tiga kali."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, (2, 3))\nprint(data[1][0])",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "data[1] adalah tuple (2,3), elemen pertama dari itu adalah 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(max(data))",
        a: ["3", "2", "1", "Error"],
        correct: 0,
        pembahasan: "max() mengembalikan nilai terbesar dari tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 2, 3)\nprint(data.count(2))",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "count() menghitung berapa kali nilai tertentu muncul."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(4 in data)",
        a: ["True", "False", "Error", "None"],
        correct: 1,
        pembahasan: "4 tidak ada dalam tuple, jadi hasilnya False."
    },

    // =================== LEVEL MENENGAH–ADVANCED ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (10, 20, 30)\na, b, c = data\nprint(a + b + c)",
        a: ["60", "102030", "Error", "None"],
        correct: 0,
        pembahasan: "Tuple dapat di-unpack ke beberapa variabel."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3, 4)\na, *b = data\nprint(b)",
        a: ["[2, 3, 4]", "(2, 3, 4)", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "Operator * mengumpulkan sisa elemen menjadi list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\ndata[0] = 10\nprint(data)",
        a: ["(10, 2, 3)", "Error", "(1, 2, 3)", "None"],
        correct: 1,
        pembahasan: "Tuple bersifat immutable, elemennya tidak bisa diubah."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nnew = data + (4,)\nprint(new)",
        a: ["(1, 2, 3, 4)", "(1, 2, 3)", "Error", "None"],
        correct: 0,
        pembahasan: "Gabungan tuple membuat tuple baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (5, 10, 15)\nprint(min(data))",
        a: ["5", "10", "15", "Error"],
        correct: 0,
        pembahasan: "min() mengembalikan nilai terkecil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ('a', 'b', 'c')\nprint('-'.join(data))",
        a: ["a-b-c", "('a','b','c')", "Error", "abc"],
        correct: 0,
        pembahasan: "join() dapat menggabungkan elemen string tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, (2, (3, 4)))\nprint(data[1][1][0])",
        a: ["3", "4", "2", "Error"],
        correct: 0,
        pembahasan: "Tuple bertingkat diakses dengan indeks berlapis."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(sum(data) / len(data))",
        a: ["2.0", "3", "1", "Error"],
        correct: 0,
        pembahasan: "Rata-rata = (1+2+3)/3 = 2.0."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(all(data))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Semua elemen bukan nol → True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (0, 1, 2)\nprint(any(data))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Ada elemen non-nol, maka True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3, 4)\nprint(data[1:3])",
        a: ["(2, 3)", "(1, 2, 3)", "(3, 4)", "Error"],
        correct: 0,
        pembahasan: "Slice [1:3] mengambil elemen indeks 1 dan 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3, 4)\nprint(data[::-1])",
        a: ["(4, 3, 2, 1)", "(1, 2, 3, 4)", "Error", "None"],
        correct: 0,
        pembahasan: "Step -1 membalik urutan tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (x**2 for x in range(3))\nprint(tuple(data))",
        a: ["(0, 1, 4)", "(1, 4, 9)", "(1, 2, 3)", "Error"],
        correct: 0,
        pembahasan: "Generator dikonversi menjadi tuple berisi kuadrat tiap angka."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(tuple(reversed(data)))",
        a: ["(3, 2, 1)", "(1, 2, 3)", "Error", "None"],
        correct: 0,
        pembahasan: "reversed() membalik urutan elemen tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = (1, 2)\nb = (3, 4)\nc = (a, b)\nprint(c)",
        a: ["((1, 2), (3, 4))", "(1, 2, 3, 4)", "(a, b)", "Error"],
        correct: 0,
        pembahasan: "Tuple dapat berisi tuple lain sebagai elemen."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ('x', 'y', 'z')\nfor i in range(len(data)):\n    print(data[i])",
        a: ["x\\ny\\nz", "xyz", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop berdasarkan indeks mencetak tiap elemen tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(hash(data))",
        a: ["Bilangan unik", "Error", "None", "0"],
        correct: 0,
        pembahasan: "Tuple bersifat hashable, menghasilkan nilai hash unik."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\ntry:\n    data[0] = 9\nexcept TypeError:\n    print('immutable')",
        a: ["immutable", "Error", "(9,2,3)", "Tidak ada output"],
        correct: 0,
        pembahasan: "Tuple tidak dapat diubah; akan memicu TypeError."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def hitung():\n    return (1, 2, 3)\na, b, c = hitung()\nprint(b)",
        a: ["2", "1", "3", "Error"],
        correct: 0,
        pembahasan: "Fungsi mengembalikan tuple (1,2,3), b = 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (True, False, True)\nprint(data.count(True))",
        a: ["2", "1", "3", "Error"],
        correct: 0,
        pembahasan: "count(True) menghitung dua nilai True dalam tuple."
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
