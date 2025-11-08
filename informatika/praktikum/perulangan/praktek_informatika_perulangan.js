let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    print('Halo')",
        a: ["Halo Halo Halo", "Halo", "Halo x 3 (dalam 3 baris)", "Error"],
        correct: 2,
        pembahasan: "range(3) menghasilkan 0,1,2 → perulangan 3 kali → mencetak 'Halo' tiga kali di baris terpisah."
    },
    {
        q: "Berapa kali perulangan dijalankan?",
        code: "for i in range(5):\n    print(i)",
        a: ["4 kali", "5 kali", "6 kali", "Tidak ada"],
        correct: 1,
        pembahasan: "range(5) menghasilkan 0–4 → total 5 angka → loop berjalan 5 kali."
    },
    {
        q: "Output dari kode ini?",
        code: "for i in range(1, 4):\n    print(i)",
        a: ["1 2 3", "0 1 2 3", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "range(1,4) menghasilkan 1,2,3 → dicetak satu per satu."
    },
    {
        q: "Apa hasilnya?",
        code: "for i in range(2):\n    print('Python')",
        a: ["Python", "Python Python", "Python\nPython", "Error"],
        correct: 2,
        pembahasan: "Loop dua kali → print 'Python' dua baris."
    },
    {
        q: "Output dari kode berikut?",
        code: "count = 0\nwhile count < 3:\n    print('OK')\n    count += 1",
        a: ["OK\nOK\nOK", "OK OK OK", "Tidak ada output", "Error"],
        correct: 0,
        pembahasan: "count naik dari 0→2 → loop berhenti saat count=3 → cetak 'OK' tiga baris."
    },

    // =================== LEVEL SEDANG ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "for i in range(1,6):\n    print(i*2)",
        a: ["2 4 6 8 10", "1 2 3 4 5", "0 2 4 6 8", "Error"],
        correct: 0,
        pembahasan: "Loop 1–5 → tiap i dikali 2 → hasil: 2,4,6,8,10."
    },
    {
        q: "Output dari kode ini?",
        code: "for i in range(5):\n    if i == 3:\n        break\n    print(i)",
        a: ["0 1 2", "0 1 2 3 4", "3 4", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop berhenti saat i==3 → hanya mencetak 0,1,2."
    },
    {
        q: "Output berikut?",
        code: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
        a: ["0 1 2 3 4", "0 1 3 4", "1 2 3 4", "Error"],
        correct: 1,
        pembahasan: "Saat i==2, `continue` lewati print → 0,1,3,4 dicetak."
    },
    {
        q: "Output dari kode ini?",
        code: "x = 0\nwhile x < 5:\n    print(x)\n    x += 2",
        a: ["0 2 4", "0 1 2 3 4", "2 4", "Tidak ada output"],
        correct: 0,
        pembahasan: "x naik 2 tiap iterasi (0,2,4) → berhenti saat x>=5."
    },
    {
        q: "Apa hasilnya?",
        code: "for i in range(1, 10, 3):\n    print(i)",
        a: ["1 2 3 4 5 6 7 8 9", "1 4 7", "1 3 6 9", "Error"],
        correct: 1,
        pembahasan: "range(1,10,3) → mulai 1, lompat 3 → hasil 1,4,7."
    },
    {
        q: "Output berikut?",
        code: "for huruf in 'abc':\n    print(huruf)",
        a: ["abc", "a b c (3 baris)", "a, b, c", "Error"],
        correct: 1,
        pembahasan: "Loop per karakter string 'abc' → cetak a, b, c per baris."
    },
    {
        q: "Apa hasil kode ini?",
        code: "angka = [2,4,6]\nfor x in angka:\n    print(x+1)",
        a: ["2 4 6", "3 5 7", "1 2 3", "Error"],
        correct: 1,
        pembahasan: "Setiap elemen ditambah 1 → 3,5,7."
    },
    {
        q: "Output dari kode ini?",
        code: "for i in range(3):\n    for j in range(2):\n        print(i,j)",
        a: ["(0,0)(1,1)(2,2)", "0 1 2", "semua kombinasi i,j", "Error"],
        correct: 2,
        pembahasan: "Nested loop → total 3×2=6 kombinasi pasangan i,j dicetak."
    },
    {
        q: "Apa hasil berikut?",
        code: "i = 0\nwhile i < 5:\n    print(i)\n    i += 1\nelse:\n    print('Selesai')",
        a: ["0 1 2 3 4", "0 1 2 3 4 Selesai", "Selesai saja", "Error"],
        correct: 1,
        pembahasan: "`else` dijalankan setelah while selesai normal → cetak 0–4 lalu 'Selesai'."
    },
    {
        q: "Output dari kode ini?",
        code: "for i in range(1,6):\n    if i % 2 == 0:\n        print('Genap')\n    else:\n        print('Ganjil')",
        a: ["Ganjil Genap Ganjil Genap Ganjil", "Genap Ganjil", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop 1–5 → hasil berurutan ganjil/genap sesuai nilai i."
    },
    {
        q: "Output berikut?",
        code: "for i in range(5):\n    print(i, end=' ')",
        a: ["0 1 2 3 4", "01234", "0 1 2 3 4 (baris terpisah)", "Error"],
        correct: 0,
        pembahasan: "`end=' '` mencegah pindah baris → hasil dalam satu baris dipisah spasi."
    },

    // =================== LEVEL SULIT ===================
    {
        q: "Apa hasil dari kode ini?",
        code: "for i in range(3):\n    for j in range(3):\n        if i == j:\n            print(i)",
        a: ["0 1 2", "Semua kombinasi i,j", "0 0 0", "Error"],
        correct: 0,
        pembahasan: "Hanya saat i==j (0,1,2) → cetak 0,1,2 masing-masing sekali."
    },
    {
        q: "Output kode berikut?",
        code: "for i in range(5):\n    for j in range(i):\n        print('*', end='')\n    print()",
        a: ["Segitiga bintang naik", "Segitiga turun", "Baris kosong", "Error"],
        correct: 0,
        pembahasan: "Inner loop mencetak '*' sebanyak i → hasil bentuk segitiga bintang menaik."
    },
    {
        q: "Apa output dari kode ini?",
        code: "i = 0\nwhile i < 3:\n    j = 0\n    while j < 2:\n        print(i,j)\n        j += 1\n    i += 1",
        a: ["Semua pasangan i,j dari 0–2 dan 0–1", "Hanya 0,1", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Nested while → menghasilkan kombinasi i=0..2 dan j=0..1 → total 6 baris."
    },
    {
        q: "Output berikut?",
        code: "for i in range(1,6):\n    if i == 3:\n        pass\n    else:\n        print(i)",
        a: ["1 2 4 5", "1 2 3 4 5", "3 4 5", "Error"],
        correct: 0,
        pembahasan: "`pass` hanya melewati blok tanpa aksi → 3 dilewati → cetak 1,2,4,5."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "for i in range(1,5):\n    for j in range(1,3):\n        print(i+j, end=' ')",
        a: ["2 3 3 4 4 5 5 6", "1 2 3 4", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop i=1..4, j=1..2 → jumlah i+j dicetak berurutan."
    },
    {
        q: "Output dari kode ini?",
        code: "for i in range(5):\n    if i < 3:\n        continue\n    print(i)",
        a: ["3 4", "0 1 2 3 4", "4 5", "Error"],
        correct: 0,
        pembahasan: "`continue` lewati iterasi i<3 → mulai cetak dari 3 dan 4."
    },
    {
        q: "Apa hasil berikut?",
        code: "i = 5\nwhile i > 0:\n    print(i)\n    i -= 2",
        a: ["5 3 1", "5 4 3 2 1", "5 2", "Error"],
        correct: 0,
        pembahasan: "i berkurang 2 → 5,3,1 tercetak sebelum i<=0."
    },
    {
        q: "Output dari kode berikut?",
        code: "for i in range(1,10):\n    if i % 2 == 0:\n        if i % 3 == 0:\n            print(i)",
        a: ["6", "2 4 6 8", "3 6 9", "Error"],
        correct: 0,
        pembahasan: "Hanya angka genap dan kelipatan 3 → hanya 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "for i in range(2):\n    for j in range(2):\n        for k in range(2):\n            print(i,j,k)",
        a: ["Semua kombinasi 0 dan 1", "Hanya 0 0 0", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Nested 3 tingkat → 2×2×2 = 8 kombinasi i,j,k."
    },
    {
        q: "Output berikut?",
        code: "x = [1,2,3]\nfor i in x:\n    x.append(i)\n    if len(x) > 5:\n        break\nprint(x)",
        a: ["[1,2,3,1,2,3]", "[1,2,3,1,2]", "Error", "[1,2,3,3]"],
        correct: 1,
        pembahasan: "Saat len(x)>5 (jadi 6) loop break → list jadi [1,2,3,1,2]."
    },
    {
        q: "Output kode ini?",
        code: "for i in range(5):\n    for j in range(5):\n        if i+j == 4:\n            print(i,j)",
        a: ["0 4, 1 3, 2 2, 3 1, 4 0", "Semua kombinasi", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Hanya pasangan i+j=4 → (0,4),(1,3),(2,2),(3,1),(4,0)."
    },
    {
        q: "Hasil berikut?",
        code: "for i in range(3):\n    print(i)\nelse:\n    print('Done')",
        a: ["0 1 2 Done", "Done saja", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "`else` dijalankan setelah for selesai tanpa break → tampil 'Done'."
    },
    {
        q: "Apa hasilnya?",
        code: "for i in range(1,6):\n    if i == 4:\n        break\n    print(i)\nelse:\n    print('Selesai')",
        a: ["1 2 3", "1 2 3 Selesai", "Selesai", "Error"],
        correct: 0,
        pembahasan: "Karena ada break → blok else tidak dijalankan → hanya 1,2,3."
    },
    {
        q: "Output dari kode berikut?",
        code: "x = [1,2,3]\nfor i in range(len(x)):\n    x[i] *= 2\nprint(x)",
        a: ["[2,4,6]", "[1,2,3,4,5,6]", "Error", "[1,4,9]"],
        correct: 0,
        pembahasan: "Setiap elemen dikalikan 2 → hasil [2,4,6]."
    },
    {
        q: "Apa hasil berikut?",
        code: "for i in range(1,5):\n    for j in range(1,i+1):\n        print(j, end=' ')\n    print()",
        a: ["Segitiga angka naik", "Baris sama semua", "Segitiga turun", "Error"],
        correct: 0,
        pembahasan: "Loop j dalam i → mencetak segitiga angka bertambah tiap baris."
    },
    {
        q: "Output kode ini?",
        code: "i = 1\nwhile i < 10:\n    print(i)\n    i *= 2",
        a: ["1 2 4 8", "1 2 3 4 5 6 7 8 9", "2 4 8", "Error"],
        correct: 0,
        pembahasan: "i dikali 2 tiap iterasi: 1,2,4,8 → berhenti saat >=10."
    },
    {
        q: "Output dari kode berikut?",
        code: "for i in range(5):\n    print(i)\n    i += 2",
        a: ["0 1 2 3 4", "0 2 4", "0 1 2", "Tidak ada output"],
        correct: 0,
        pembahasan: "Penambahan i di dalam loop tidak mempengaruhi urutan range → tetap 0–4."
    },
    {
        q: "Hasil dari kode ini?",
        code: "for i in range(10,0,-2):\n    print(i)",
        a: ["10 8 6 4 2", "0 2 4 6 8 10", "Error", "10 9 8 7 6"],
        correct: 0,
        pembahasan: "range(10,0,-2) menurun dengan step -2 → 10,8,6,4,2."
    },
    {
        q: "Output berikut?",
        code: "for i in range(3):\n    print('Loop luar', i)\n    for j in range(2):\n        print('   Dalam', j)",
        a: ["Loop bersarang 3x2", "Loop luar saja", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Nested loop → tiap loop luar berisi 2 iterasi dalam → total 6 baris output."
    },
    {
        q: "Apa hasil kode ini?",
        code: "total = 0\nfor i in range(1,6):\n    total += i\nprint(total)",
        a: ["15", "10", "20", "Error"],
        correct: 0,
        pembahasan: "Menjumlah 1+2+3+4+5 = 15."
    },
    {
        q: "Output dari kode berikut?",
        code: "x = [1,3,5,7]\nfor i in x:\n    if i % 2 == 0:\n        print('Genap')\n    else:\n        print('Ganjil')",
        a: ["Semua Ganjil", "Ganjil Genap", "Genap saja", "Error"],
        correct: 0,
        pembahasan: "Semua elemen ganjil → cetak 'Ganjil' tiap iterasi."
    },
    {
        q: "Output berikut?",
        code: "for i in range(1,4):\n    for j in range(1,4):\n        if i*j % 2 == 0:\n            print(i,j)",
        a: ["Semua pasangan dengan hasil perkalian genap", "Semua kombinasi", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Hanya mencetak pasangan i,j di mana hasil kali genap."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "for i in range(1,6):\n    print('*' * i)",
        a: ["Segitiga bintang naik", "Satu baris bintang", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Bintang dicetak sebanyak i → bentuk segitiga menaik."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "count = 0\nfor i in range(1, 10):\n    if i % 3 == 0:\n        continue\n    count += i\nprint(count)",
        a: ["27", "30", "33", "36"],
        correct: 0,
        pembahasan: `Perulangan dari 1–9, tetapi melewati (continue) angka yang habis dibagi 3 → 3, 6, 9 tidak dijumlahkan.\nJadi jumlah = 1+2+4+5+7+8 = 27.`
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
