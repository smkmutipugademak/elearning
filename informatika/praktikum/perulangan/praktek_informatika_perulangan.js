let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (FOR & WHILE DASAR) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    print('Hai')",
        a: ["HaiHaiHai", "Hai", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop berjalan 3 kali, mencetak 'Hai' sebanyak 3 kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    print(i)",
        a: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "range(3) menghasilkan 0,1,2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1, 4):\n    print(i)",
        a: ["1 2 3", "0 1 2", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "range(1,4) menghasilkan 1,2,3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
        a: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop berjalan selama i < 3, yaitu 0,1,2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for huruf in 'abc':\n    print(huruf)",
        a: ["a b c", "abc", "a,b,c", "Error"],
        correct: 0,
        pembahasan: "Loop berjalan untuk setiap karakter string."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in [1, 2, 3]:\n    print(i * 2)",
        a: ["2 4 6", "1 2 3", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Setiap elemen dikali 2 menghasilkan 2,4,6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(5):\n    if i == 3:\n        break\n    print(i)",
        a: ["0 1 2", "0 1 2 3", "1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i == 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
        a: ["0 1 3 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "continue melewati nilai 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "count = 0\nwhile count < 5:\n    print(count)\n    count += 2",
        a: ["0 2 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "count bertambah 2 tiap iterasi → 0,2,4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1, 6, 2):\n    print(i)",
        a: ["1 3 5", "2 4 6", "1 2 3 4 5", "Error"],
        correct: 0,
        pembahasan: "Langkah 2 → hasilnya 1,3,5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    print('Loop', i)",
        a: ["Loop 0 Loop 1 Loop 2", "Loop Loop Loop", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Print menampilkan teks dan indeks loop."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [2, 4, 6]\nfor i in angka:\n    print(i - 1)",
        a: ["1 3 5", "2 4 6", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Setiap elemen dikurangi 1 → 1,3,5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(2):\n        print(i, j)",
        a: ["00 01 10 11 20 21", "0 1 2", "0 0 1 1 2 2", "Error"],
        correct: 0,
        pembahasan: "Loop bersarang: i=0→1→2, j=0→1 tiap kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "i = 3\nwhile i > 0:\n    print(i)\n    i -= 1",
        a: ["3 2 1", "1 2 3", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop mundur dari 3 hingga 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(2):\n    print('A')\nprint('B')",
        a: ["A A B", "A B A", "B A A", "Error"],
        correct: 0,
        pembahasan: "'A' dua kali, lalu 'B' di luar loop."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 1\nwhile x < 5:\n    print(x)\n    x += 3",
        a: ["1 4", "1 2 3 4", "1 2 4", "Error"],
        correct: 0,
        pembahasan: "x naik +3 tiap iterasi → 1,4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(4):\n    if i % 2 == 0:\n        print(i)",
        a: ["0 2", "1 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Cetak hanya bilangan genap → 0,2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1, 5):\n    if i == 3:\n        break\n    print(i)",
        a: ["1 2", "1 2 3", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i == 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(i):\n        print('*', end='')\n    print()",
        a: ["\\n*\\n**", "*\\n**\\n***", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop dalam mencetak segitiga bertingkat bintang."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1, 4):\n    print(i * 'A')",
        a: ["A AA AAA", "AAA AA A", "A A A", "Error"],
        correct: 0,
        pembahasan: "i=1→'A', i=2→'AA', i=3→'AAA'."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(2, 8, 3):\n    print(i)",
        a: ["2 5", "2 3 4 5", "2 5 8", "Error"],
        correct: 0,
        pembahasan: "range(2,8,3) menghasilkan 2 dan 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(2):\n        print(i+j)",
        a: ["0 1 1 2 2 3", "0 1 2 3 4", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Setiap kombinasi i+j menghasilkan pola 0,1,1,2,2,3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "total = 0\nfor i in range(1,4):\n    total += i\nprint(total)",
        a: ["6", "10", "3", "Error"],
        correct: 0,
        pembahasan: "1+2+3=6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "i = 0\nwhile i < 4:\n    i += 1\nprint(i)",
        a: ["4", "3", "5", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i=4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(5):\n    if i == 3:\n        continue\n    print(i)",
        a: ["0 1 2 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Melewati angka 3 karena continue."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    print(i)\nelse:\n    print('Selesai')",
        a: ["0 1 2 Selesai", "0 1 2", "Selesai", "Error"],
        correct: 0,
        pembahasan: "Bagian else dijalankan setelah for selesai."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 0\nwhile x < 3:\n    print('Loop', x)\n    x += 1\nelse:\n    print('Done')",
        a: ["Loop 0 Loop 1 Loop 2 Done", "Loop Done", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Bagian else dijalankan jika while berakhir normal."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1,4):\n    for j in range(1,3):\n        print(i*j)",
        a: ["1 2 2 4 3 6", "1 2 3 4 5 6", "2 4 6", "Error"],
        correct: 0,
        pembahasan: "Perkalian kombinasi i×j menghasilkan 1,2,2,4,3,6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(3):\n        if i == j:\n            print(i)",
        a: ["0 1 2", "0 0 1 1 2 2", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Cetak hanya saat i == j → 0,1,2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 1\nwhile x < 10:\n    x *= 2\nprint(x)",
        a: ["16", "8", "10", "Error"],
        correct: 0,
        pembahasan: "x bertambah dua kali lipat sampai 16."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(4, 0, -1):\n    print(i)",
        a: ["4 3 2 1", "1 2 3 4", "4 3 2", "Error"],
        correct: 0,
        pembahasan: "Loop mundur dari 4 ke 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    if i == 1:\n        break\n    print(i)",
        a: ["0", "1", "0 1", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti di i==1, hanya cetak 0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = [1, 2, 3]\nfor i in x:\n    if i % 2 == 0:\n        print(i)",
        a: ["2", "1 2", "1 3", "Error"],
        correct: 0,
        pembahasan: "Hanya angka genap 2 yang dicetak."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1,4):\n    print('*' * i)",
        a: ["* ** ***", "*** ** *", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop menghasilkan segitiga bintang bertingkat."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(2):\n    for j in range(2):\n        print(i+j, end=' ')",
        a: ["0 1 1 2", "1 2 3 4", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "i=0→(0,1), i=1→(1,2)."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "i = 0\nwhile i < 3:\n    print('*')\n    i += 1",
        a: ["* * *", "*", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop while mencetak '*' sebanyak 3 kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    if i == 1:\n        continue\n    print('A', i)",
        a: ["A 0 A 2", "A 0 A 1 A 2", "A 1 A 2", "Error"],
        correct: 0,
        pembahasan: "Melewati i==1, hanya cetak 0 dan 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\nwhile x > 0:\n    x -= 2\nprint(x)",
        a: ["-1", "1", "0", "Error"],
        correct: 0,
        pembahasan: "x berkurang 2 tiap loop → berhenti saat -1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1,6):\n    if i % 3 == 0:\n        print('Fizz')\n    else:\n        print(i)",
        a: ["1 2 Fizz 4 5", "1 2 3 4 5", "Fizz Fizz Fizz", "Error"],
        correct: 0,
        pembahasan: "Setiap kelipatan 3 diganti 'Fizz'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(i+1):\n        print(j, end=' ')\n    print()",
        a: ["0 \\n0 1 \\n0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop bersarang membuat pola tangga angka."
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
