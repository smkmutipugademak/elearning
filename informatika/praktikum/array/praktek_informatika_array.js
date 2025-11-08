let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[0])",
        a: ["1", "2", "3", "Error"],
        correct: 0,
        pembahasan: "Indeks pertama (0) mengakses elemen pertama → 1."
    },
    {
        q: "Apa hasil dari len([5, 10, 15, 20])?",
        a: ["3", "4", "5", "Error"],
        correct: 1,
        pembahasan: "Ada empat elemen, jadi hasilnya 4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "buah = ['apel', 'pisang', 'mangga']\nprint(buah[-1])",
        a: ["apel", "pisang", "mangga", "Error"],
        correct: 2,
        pembahasan: "Indeks -1 mengambil elemen terakhir → 'mangga'."
    },
    {
        q: "Fungsi apa yang digunakan untuk menambah elemen di akhir list?",
        a: ["add()", "insert()", "append()", "push()"],
        correct: 2,
        pembahasan: "append() menambah elemen di akhir list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [1, 2, 3]\na.append(4)\nprint(a)",
        a: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
        correct: 1,
        pembahasan: "append() menambah elemen ke akhir list → [1,2,3,4]."
    },
    {
        q: "Bagaimana cara menghapus elemen pertama dari list berikut?\nangka = [10, 20, 30]",
        a: ["angka.remove(10)", "angka.pop(0)", "del angka[0]", "Semua benar"],
        correct: 3,
        pembahasan: "Ketiganya dapat menghapus elemen pertama dari list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [2, 4, 6]\nprint(4 in a)",
        a: ["True", "False", "4", "Error"],
        correct: 0,
        pembahasan: "Operator 'in' mengecek keberadaan elemen. 4 ada di list → True."
    },
    {
        q: "Apa hasil dari sum([1, 2, 3, 4])?",
        a: ["10", "24", "6", "Error"],
        correct: 0,
        pembahasan: "Menjumlahkan semua elemen list → 1+2+3+4 = 10."
    },
    {
        q: "Kode apa yang benar untuk membuat list kosong?",
        a: ["list = {}", "list = []", "list = ()", "list = ''"],
        correct: 1,
        pembahasan: "List kosong dibuat dengan tanda kurung siku kosong → []."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "warna = ['merah', 'hijau', 'biru']\nprint(warna[1])",
        a: ["merah", "hijau", "biru", "Error"],
        correct: 1,
        pembahasan: "Indeks 1 berarti elemen kedua → 'hijau'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1, 2, 3, 4, 5]\nprint(angka[:3])",
        a: ["[1, 2, 3]", "[2, 3, 4]", "[3, 4, 5]", "Error"],
        correct: 0,
        pembahasan: "Slicing [:3] mengambil tiga elemen pertama."
    },
    {
        q: "Apa fungsi dari list.sort()?",
        a: ["Menghapus elemen", "Mengurutkan list", "Menambah elemen", "Membalik list"],
        correct: 1,
        pembahasan: "sort() mengurutkan elemen dalam list secara menaik."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [3, 1, 2]\na.sort()\nprint(a)",
        a: ["[3,1,2]", "[1,2,3]", "[2,1,3]", "Error"],
        correct: 1,
        pembahasan: "sort() mengurutkan list → [1,2,3]."
    },
    {
        q: "Fungsi apa yang digunakan untuk membalik urutan list?",
        a: ["flip()", "reverse()", "invert()", "backward()"],
        correct: 1,
        pembahasan: "reverse() membalik urutan elemen dalam list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [1, 2, 3]\na.insert(1, 99)\nprint(a)",
        a: ["[1,99,2,3]", "[99,1,2,3]", "[1,2,3,99]", "Error"],
        correct: 0,
        pembahasan: "insert(1,99) menyisipkan 99 di posisi indeks 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [10, 20, 30]\nangka.pop()\nprint(angka)",
        a: ["[10,20]", "[10,30]", "[20,30]", "Error"],
        correct: 0,
        pembahasan: "pop() tanpa argumen menghapus elemen terakhir → [10,20]."
    },
    {
        q: "Bagaimana cara mengetahui jumlah elemen di dalam list?",
        a: ["total()", "jumlah()", "len()", "count()"],
        correct: 2,
        pembahasan: "len() digunakan untuk menghitung panjang list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [2, 4, 6]\nprint(max(angka))",
        a: ["2", "4", "6", "Error"],
        correct: 2,
        pembahasan: "max() mengembalikan elemen terbesar dalam list → 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = [1, 2, 3]\ny = [4, 5]\nprint(x + y)",
        a: ["[1, 2, 3, 4, 5]", "[5, 7, 8]", "[x, y]", "Error"],
        correct: 0,
        pembahasan: "Operator + menggabungkan dua list → [1,2,3,4,5]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [0]*4\nprint(a)",
        a: ["[0,0,0,0]", "[0,4]", "[4,4,4,4]", "Error"],
        correct: 0,
        pembahasan: "Mengulang elemen 0 sebanyak 4 kali → [0,0,0,0]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [5, 10, 15]\nangka.remove(10)\nprint(angka)",
        a: ["[5,15]", "[10,15]", "[5,10]", "Error"],
        correct: 0,
        pembahasan: "remove(10) menghapus elemen bernilai 10."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ['A','B','C']\nprint(data[2])",
        a: ["A", "B", "C", "Error"],
        correct: 2,
        pembahasan: "Indeks ke-2 adalah elemen ketiga yaitu 'C'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "nilai = [2,4,6,8]\nprint(min(nilai))",
        a: ["8", "2", "4", "Error"],
        correct: 1,
        pembahasan: "min() mengembalikan elemen terkecil → 2."
    },
    {
        q: "Apa fungsi dari 'in' pada list?",
        a: ["Menjumlahkan list", "Mengecek keberadaan elemen", "Menyalin list", "Menghapus elemen"],
        correct: 1,
        pembahasan: "'in' digunakan untuk memeriksa apakah elemen ada di dalam list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1,2,3]\nangka2 = angka.copy()\nangka2.append(4)\nprint(angka)",
        a: ["[1,2,3,4]", "[1,2,3]", "Error", "[4]"],
        correct: 1,
        pembahasan: "copy() membuat salinan baru, jadi angka tetap [1,2,3]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = ['a','b','c']\nprint(a*2)",
        a: ["['a','b','c','a','b','c']", "['a','b','c']*2", "['a','a','b','b','c','c']", "Error"],
        correct: 0,
        pembahasan: "Mengulang seluruh list dua kali → ['a','b','c','a','b','c']."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [1,2,3,4]\nprint(a[1:3])",
        a: ["[1,2,3]", "[2,3]", "[3,4]", "Error"],
        correct: 1,
        pembahasan: "Slicing dari indeks 1 sampai sebelum 3 → [2,3]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "buah = ['apel','mangga','jeruk']\nbuah[0] = 'nanas'\nprint(buah)",
        a: ["['nanas','mangga','jeruk']", "['apel','mangga','jeruk']", "Error", "['nanas']"],
        correct: 0,
        pembahasan: "Elemen pertama diganti dengan 'nanas'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1,3,5]\nangka.clear()\nprint(angka)",
        a: ["[]", "[1,3,5]", "Error", "[0]"],
        correct: 0,
        pembahasan: "clear() menghapus semua elemen → []."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = [10, 20, 30]\nfor i in x:\n    print(i, end=' ')",
        a: ["10 20 30", "[10,20,30]", "Error", "i i i"],
        correct: 0,
        pembahasan: "Perulangan for mencetak setiap elemen → 10 20 30."
    },
    {
        q: "Bagaimana cara menambahkan beberapa elemen sekaligus ke list?",
        a: ["append()", "extend()", "insert()", "push()"],
        correct: 1,
        pembahasan: "extend() menambah beberapa elemen sekaligus ke list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [1, 2, 3]\na.extend([4,5])\nprint(a)",
        a: ["[1,2,3,4,5]", "[1,2,3,[4,5]]", "[4,5]", "Error"],
        correct: 0,
        pembahasan: "extend menambah tiap elemen [4,5] ke dalam list a."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1,2,3]\nangka.pop(1)\nprint(angka)",
        a: ["[1,3]", "[2,3]", "[1,2]", "Error"],
        correct: 0,
        pembahasan: "pop(1) menghapus elemen pada indeks ke-1 → [1,3]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = ['x','y','z']\nprint(a.count('x'))",
        a: ["1", "0", "2", "Error"],
        correct: 0,
        pembahasan: "count('x') menghitung jumlah kemunculan 'x' → 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ['a','b','c']\nprint('d' in data)",
        a: ["True", "False", "Error", "None"],
        correct: 1,
        pembahasan: "'d' tidak ada di list → False."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1,2,3]\nprint(type(angka))",
        a: ["<class 'list'>", "<class 'int'>", "<class 'tuple'>", "Error"],
        correct: 0,
        pembahasan: "Variabel angka bertipe list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = list('abc')\nprint(a)",
        a: ["['a','b','c']", "['abc']", "('a','b','c')", "Error"],
        correct: 0,
        pembahasan: "list('abc') memecah string jadi list karakter → ['a','b','c']."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[-2])",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "Indeks -2 berarti elemen kedua dari belakang → 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = [10,20,30]\nprint(len(data))",
        a: ["2", "3", "4", "Error"],
        correct: 1,
        pembahasan: "List memiliki tiga elemen, jadi hasilnya 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = [5,10,15]\ny = x\nx.append(20)\nprint(y)",
        a: ["[5,10,15,20]", "[5,10,15]", "Error", "[20]"],
        correct: 0,
        pembahasan: "x dan y menunjuk list yang sama, jadi keduanya berubah."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1, 2, 3, 4]\nprint(len(angka))",
        a: ["3", "4", "5", "Error"],
        correct: 1,
        pembahasan: "Fungsi len() menghitung jumlah elemen dalam list → ada 4 elemen."
    },

    {
        q: "Apa output dari kode berikut?",
        code: "buah = ['apel', 'mangga', 'jeruk']\nprint(buah[1])",
        a: ["apel", "mangga", "jeruk", "Error"],
        correct: 1,
        pembahasan: "Indeks 1 berarti elemen kedua dalam list → 'mangga'."
    },

    {
        q: "Apa hasil dari kode berikut?",
        code: "warna = ['merah', 'biru', 'kuning']\nwarna.append('hijau')\nprint(warna)",
        a: ["['merah', 'biru', 'kuning']", "['hijau', 'merah', 'biru', 'kuning']", "['merah', 'biru', 'kuning', 'hijau']", "Error"],
        correct: 2,
        pembahasan: "append() menambah elemen di akhir list → ['merah', 'biru', 'kuning', 'hijau']."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [5, 10, 15]\nangka[0] = 20\nprint(angka)",
        a: ["[5, 10, 15]", "[20, 10, 15]", "[5, 20, 15]", "Error"],
        correct: 1,
        pembahasan: "Indeks 0 berarti elemen pertama diubah jadi 20 → [20, 10, 15]."
    },

    {
        q: "Output yang benar dari kode berikut?",
        code: "buah = ['apel', 'jeruk', 'pisang']\nprint('apel' in buah)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Operator 'in' memeriksa apakah elemen ada dalam list → 'apel' ada, jadi True."
    },

    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [2, 4, 6]\nangka.remove(4)\nprint(angka)",
        a: ["[2, 4, 6]", "[2, 6]", "[4, 6]", "Error"],
        correct: 1,
        pembahasan: "remove(4) menghapus nilai 4 dari list → [2, 6]."
    },

    {
        q: "Output kode berikut?",
        code: "huruf = ['a', 'b', 'c']\nprint(huruf[-1])",
        a: ["a", "b", "c", "Error"],
        correct: 2,
        pembahasan: "Indeks -1 mengakses elemen terakhir dari list → 'c'."
    },

    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.insert(1, 10)\nprint(angka)",
        a: ["[1, 10, 2, 3]", "[10, 1, 2, 3]", "[1, 2, 3, 10]", "Error"],
        correct: 0,
        pembahasan: "insert(1,10) menambah 10 di indeks ke-1 → [1, 10, 2, 3]."
    },

    {
        q: "Output berikut?",
        code: "data = [1, 2, 3]\nprint(sum(data))",
        a: ["6", "123", "Error", "None"],
        correct: 0,
        pembahasan: "sum() menjumlahkan semua elemen list → 1+2+3 = 6."
    },

    {
        q: "Apa hasil dari kode berikut?",
        code: "warna = ['merah', 'biru', 'hijau']\nwarna.pop()\nprint(warna)",
        a: ["['merah', 'biru', 'hijau']", "['merah', 'biru']", "['biru', 'hijau']", "Error"],
        correct: 1,
        pembahasan: "pop() tanpa argumen menghapus elemen terakhir → ['merah', 'biru']."
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
