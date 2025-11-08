let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (ARRAY/LIST DASAR) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[0])",
        a: ["1", "2", "3", "Error"],
        correct: 0,
        pembahasan: "Indeks pertama (0) berisi nilai 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [5, 10, 15]\nprint(angka[2])",
        a: ["5", "10", "15", "Error"],
        correct: 2,
        pembahasan: "Indeks ke-2 menunjukkan elemen ketiga yaitu 15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(len(angka))",
        a: ["2", "3", "4", "Error"],
        correct: 1,
        pembahasan: "len() menghitung jumlah elemen dalam list, yaitu 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = []\nangka.append(10)\nprint(angka)",
        a: ["[]", "[10]", "10", "Error"],
        correct: 1,
        pembahasan: "append() menambah elemen ke akhir list → [10]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2]\nangka.append(3)\nprint(angka)",
        a: ["[1, 2, 3]", "[3, 2, 1]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "append() menambahkan elemen 3 di akhir list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [10, 20, 30]\nangka[1] = 99\nprint(angka)",
        a: ["[10, 99, 30]", "[99, 20, 30]", "[10, 20, 30]", "Error"],
        correct: 0,
        pembahasan: "Elemen pada indeks ke-1 diubah menjadi 99."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.pop()\nprint(angka)",
        a: ["[1, 2]", "[2, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "pop() menghapus elemen terakhir → [1, 2]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[-1])",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Indeks -1 mengambil elemen terakhir dari list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [2, 4]\nprint(angka * 2)",
        a: ["[2, 4, 2, 4]", "[4, 8]", "[2, 4, 4]", "Error"],
        correct: 0,
        pembahasan: "Operator * menggandakan isi list → [2, 4, 2, 4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(sum(angka))",
        a: ["6", "123", "Error", "None"],
        correct: 0,
        pembahasan: "sum() menjumlahkan semua elemen → 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [5, 6, 7]\nprint(2 in angka)",
        a: ["True", "False", "Error", "None"],
        correct: 1,
        pembahasan: "2 tidak ada di list [5,6,7] → hasilnya False."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[0:2])",
        a: ["[1, 2]", "[2, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "Slicing 0:2 mengambil indeks 0 dan 1 → [1,2]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.clear()\nprint(angka)",
        a: ["[]", "[1, 2, 3]", "None", "Error"],
        correct: 0,
        pembahasan: "clear() menghapus seluruh isi list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [2, 4, 6]\nprint(max(angka))",
        a: ["2", "4", "6", "Error"],
        correct: 2,
        pembahasan: "max() mencari nilai terbesar dalam list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [3, 1, 2]\nangka.sort()\nprint(angka)",
        a: ["[3, 1, 2]", "[1, 2, 3]", "[2, 1, 3]", "Error"],
        correct: 1,
        pembahasan: "sort() mengurutkan elemen secara ascending."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.reverse()\nprint(angka)",
        a: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"],
        correct: 0,
        pembahasan: "reverse() membalik urutan elemen dalam list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [10]\nprint(len(angka))",
        a: ["0", "1", "10", "Error"],
        correct: 1,
        pembahasan: "List berisi satu elemen, panjangnya 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 1, 1]\nprint(angka.count(1))",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "count() menghitung kemunculan nilai tertentu → 3 kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.insert(1, 5)\nprint(angka)",
        a: ["[1, 5, 2, 3]", "[5, 1, 2, 3]", "[1, 2, 5, 3]", "Error"],
        correct: 0,
        pembahasan: "insert(1,5) menyisipkan 5 di posisi indeks 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.remove(2)\nprint(angka)",
        a: ["[1, 3]", "[2, 3]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "remove(2) menghapus nilai pertama yang cocok, yaitu 2."
    },

    // =================== LEVEL MENENGAH (LIST OPEARSI & LOGIKA) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[::2])",
        a: ["[1, 3]", "[2, 3]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "Langkah 2 artinya ambil setiap dua elemen → [1,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka2 = angka.copy()\nangka2.append(4)\nprint(angka)",
        a: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
        correct: 0,
        pembahasan: "copy() membuat salinan, jadi list asli tidak berubah."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2]\nbuah = ['apel', 'pisang']\nprint(angka + buah)",
        a: ["[1, 2, 'apel', 'pisang']", "['apel', 'pisang', 1, 2]", "Error", "[1, 2]['apel','pisang']"],
        correct: 0,
        pembahasan: "Operator + menggabungkan dua list menjadi satu."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "data = [[1,2], [3,4]]\nprint(data[1][0])",
        a: ["1", "2", "3", "4"],
        correct: 2,
        pembahasan: "data[1] = [3,4], lalu [0] mengambil elemen pertama yaitu 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4]\nprint(angka[1:3])",
        a: ["[2, 3]", "[1, 2, 3]", "[3, 4]", "Error"],
        correct: 0,
        pembahasan: "Slicing 1:3 mengambil indeks 1 dan 2 → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4,5]\nprint(angka[1:5:2])",
        a: ["[2, 4]", "[1,3,5]", "[2,3,4]", "Error"],
        correct: 0,
        pembahasan: "Mulai indeks 1 hingga 5 (step 2) → [2,4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [10,20,30]\nfor x in angka:\n    print(x,end=' ')",
        a: ["10 20 30 ", "10,20,30", "[10, 20, 30]", "Error"],
        correct: 0,
        pembahasan: "Loop menampilkan setiap elemen dipisah spasi."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3]\nprint(sum(angka)/len(angka))",
        a: ["2.0", "3.0", "1.0", "Error"],
        correct: 0,
        pembahasan: "Rata-rata (1+2+3)/3 = 2.0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, [2,3], 4]\nprint(angka[1][1])",
        a: ["1", "2", "3", "4"],
        correct: 2,
        pembahasan: "angka[1] = [2,3], lalu indeks [1] → 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [4,2,8,6]\nangka.sort(reverse=True)\nprint(angka)",
        a: ["[8, 6, 4, 2]", "[2, 4, 6, 8]", "Error", "None"],
        correct: 0,
        pembahasan: "reverse=True mengurutkan dari besar ke kecil."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3, 4]\nprint(angka[-3:-1])",
        a: ["[2, 3]", "[3, 4]", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "Dari indeks -3 (2) sampai sebelum -1 (4) → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = [1, 2]\nb = a\nb.append(3)\nprint(a)",
        a: ["[1, 2, 3]", "[1, 2]", "[3]", "Error"],
        correct: 0,
        pembahasan: "a dan b menunjuk list yang sama, jadi keduanya berubah."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [x*2 for x in [1,2,3]]\nprint(angka)",
        a: ["[2, 4, 6]", "[1,2,3]", "[1,4,9]", "Error"],
        correct: 0,
        pembahasan: "List comprehension menggandakan setiap elemen."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [10, 20, 30]\nprint(angka.index(20))",
        a: ["0", "1", "2", "Error"],
        correct: 1,
        pembahasan: "index(20) mengembalikan posisi nilai 20, yaitu indeks 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3]\nangka.pop(0)\nprint(angka)",
        a: ["[2, 3]", "[1, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "pop(0) menghapus elemen pertama → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3]\nangka.extend([4,5])\nprint(angka)",
        a: ["[1, 2, 3, 4, 5]", "[[1,2,3],[4,5]]", "[4,5,1,2,3]", "Error"],
        correct: 0,
        pembahasan: "extend() menambah elemen dari list lain ke akhir."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4]\nprint(angka[::-1])",
        a: ["[4, 3, 2, 1]", "[1,2,3,4]", "Error", "None"],
        correct: 0,
        pembahasan: "Slicing [::-1] membalik urutan list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4,5]\nprint(angka[::3])",
        a: ["[1, 4]", "[3, 5]", "[1, 3, 5]", "Error"],
        correct: 0,
        pembahasan: "Step 3 artinya ambil elemen tiap tiga langkah → [1,4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka *= 2\nprint(angka)",
        a: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "Operator *= menggandakan isi list dua kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4]\nprint(sum(angka[1:3]))",
        a: ["5", "6", "9", "7"],
        correct: 0,
        pembahasan: "Slicing 1:3 menghasilkan [2,3], jumlahnya 5."
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
