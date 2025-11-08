let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH: LIST & TUPLE ===================
    {
        q: "Apa tipe data dari [] dalam Python?",
        a: ["List", "Tuple", "Set", "Dictionary"],
        correct: 0,
        pembahasan: "Tanda [] menunjukkan list kosong."
    },
    {
        q: "Apa tipe data dari () dalam Python?",
        a: ["List", "Tuple", "Set", "Dictionary"],
        correct: 1,
        pembahasan: "Tanda () menunjukkan tuple kosong."
    },
    {
        q: "Bagaimana cara membuat list kosong?",
        a: ["list = {}", "list = []", "list = ()", "list = ''"],
        correct: 1,
        pembahasan: "List kosong dibuat dengan tanda kurung siku []."
    },
    {
        q: "Bagaimana cara membuat tuple dengan satu elemen 'A'?",
        a: ["('A')", "('A',)", "['A']", "tuple('A')"],
        correct: 1,
        pembahasan: "Tuple dengan satu elemen perlu koma di belakang: ('A',)."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [1,2,3]\nprint(a[0])",
        a: ["1", "2", "3", "Error"],
        correct: 0,
        pembahasan: "Indeks 0 mengakses elemen pertama, yaitu 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "buah = ('apel','jeruk','mangga')\nprint(buah[1])",
        a: ["apel", "jeruk", "mangga", "Error"],
        correct: 1,
        pembahasan: "Indeks 1 berarti elemen kedua yaitu 'jeruk'."
    },
    {
        q: "Apa hasil dari len(['a','b','c'])?",
        a: ["2", "3", "4", "Error"],
        correct: 1,
        pembahasan: "List memiliki tiga elemen → hasilnya 3."
    },
    {
        q: "Fungsi apa yang digunakan untuk menambah elemen di akhir list?",
        a: ["add()", "append()", "insert()", "extend()"],
        correct: 1,
        pembahasan: "append() menambahkan satu elemen di akhir list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1,2,3]\nangka.append(4)\nprint(angka)",
        a: ["[1,2,3]", "[1,2,3,4]", "[4]", "Error"],
        correct: 1,
        pembahasan: "append() menambah elemen 4 di akhir list."
    },
    {
        q: "Apa fungsi dari extend()?",
        a: ["Menambah satu elemen", "Menambah beberapa elemen", "Menghapus elemen", "Mengurutkan list"],
        correct: 1,
        pembahasan: "extend() menambah beberapa elemen sekaligus ke list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [1,2,3]\na.extend([4,5])\nprint(a)",
        a: ["[1,2,3,4,5]", "[1,2,3,[4,5]]", "[4,5]", "Error"],
        correct: 0,
        pembahasan: "extend() menambah tiap elemen [4,5] ke list a."
    },
    {
        q: "Fungsi apa untuk menghapus semua isi list?",
        a: ["remove()", "del", "clear()", "pop()"],
        correct: 2,
        pembahasan: "clear() menghapus semua elemen di list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [10,20,30]\nangka.pop()\nprint(angka)",
        a: ["[10,20]", "[10,30]", "[20,30]", "Error"],
        correct: 0,
        pembahasan: "pop() tanpa argumen menghapus elemen terakhir."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "buah = ('apel','pisang','jeruk')\nprint('pisang' in buah)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Operator in mengecek keberadaan elemen di tuple."
    },
    {
        q: "Apa hasil dari tuple(['a','b','c'])?",
        a: ["('a','b','c')", "['a','b','c']", "('abc')", "Error"],
        correct: 0,
        pembahasan: "Fungsi tuple() mengubah list jadi tuple."
    },
    {
        q: "Apakah tuple bisa diubah (mutable)?",
        a: ["Ya", "Tidak", "Kadang-kadang", "Hanya jika kosong"],
        correct: 1,
        pembahasan: "Tuple bersifat immutable, tidak bisa diubah setelah dibuat."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "t = (1,2,3)\nprint(t[2])",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Indeks ke-2 berisi elemen ketiga yaitu 3."
    },
    {
        q: "Bagaimana cara menggabungkan dua tuple?",
        a: ["t1.append(t2)", "t1 + t2", "t1.extend(t2)", "t1.add(t2)"],
        correct: 1,
        pembahasan: "Tuple bisa digabung dengan operator +."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "t = (1,2,3)\nprint(len(t))",
        a: ["2", "3", "4", "Error"],
        correct: 1,
        pembahasan: "Tuple memiliki tiga elemen → len() = 3."
    },
    {
        q: "Bagaimana cara mengubah list menjadi tuple?",
        a: ["tuple(list)", "list(tuple)", "toTuple()", "convert()"],
        correct: 0,
        pembahasan: "Gunakan fungsi tuple(list) untuk mengubah list ke tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1,2,3]\nprint(angka[-1])",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Indeks -1 mengambil elemen terakhir yaitu 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "buah = ('apel','jeruk','mangga')\nprint(buah[-2])",
        a: ["apel", "jeruk", "mangga", "Error"],
        correct: 1,
        pembahasan: "Indeks -2 mengakses elemen kedua dari belakang yaitu 'jeruk'."
    },
    {
        q: "Fungsi apa yang digunakan untuk menghitung jumlah elemen?",
        a: ["count()", "sum()", "len()", "total()"],
        correct: 2,
        pembahasan: "len() digunakan untuk menghitung jumlah elemen."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = [1,2,3]\nprint(2 in a)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "2 ada di list, jadi hasilnya True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = ('x','y','z')\nprint('a' in a)",
        a: ["True", "False", "Error", "None"],
        correct: 1,
        pembahasan: "'a' tidak ada dalam tuple ('x','y','z')."
    },
    {
        q: "Bagaimana cara membuat tuple dari string 'abc'?",
        a: ["tuple('abc')", "('abc')", "('a,b,c')", "list('abc')"],
        correct: 0,
        pembahasan: "tuple('abc') akan menghasilkan ('a','b','c')."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = (5,10,15)\nprint(max(angka))",
        a: ["5", "10", "15", "Error"],
        correct: 2,
        pembahasan: "max() mengembalikan elemen terbesar → 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [2,4,6]\nprint(min(angka))",
        a: ["2", "4", "6", "Error"],
        correct: 0,
        pembahasan: "min() mengembalikan elemen terkecil → 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "t = (1,)*4\nprint(t)",
        a: ["(1,1,1,1)", "(4,)", "(1,4)", "Error"],
        correct: 0,
        pembahasan: "Mengulang elemen 1 sebanyak 4 kali → (1,1,1,1)."
    },
    {
        q: "Bagaimana cara mengubah tuple menjadi list?",
        a: ["list(tuple)", "tuple(list)", "convert()", "toList()"],
        correct: 0,
        pembahasan: "Gunakan list(tuple) untuk mengubah tuple ke list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ('A','B','C')\nprint(data[1:])",
        a: ["('A',)", "('B','C')", "('C',)", "Error"],
        correct: 1,
        pembahasan: "Slicing dari indeks 1 menghasilkan ('B','C')."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "buah = ['apel','mangga']\nbuah.insert(1,'jeruk')\nprint(buah)",
        a: ["['apel','jeruk','mangga']", "['jeruk','apel','mangga']", "['apel','mangga','jeruk']", "Error"],
        correct: 0,
        pembahasan: "insert(1,'jeruk') menyisipkan di indeks 1."
    },
    {
        q: "Fungsi apa untuk menghitung jumlah kemunculan elemen dalam list?",
        a: ["len()", "count()", "find()", "total()"],
        correct: 1,
        pembahasan: "count() menghitung jumlah kemunculan nilai tertentu."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = ['x','y','z']\nprint(a.count('x'))",
        a: ["1", "0", "2", "Error"],
        correct: 0,
        pembahasan: "count('x') menghitung jumlah 'x' yaitu 1."
    },
    {
        q: "Apakah list dapat berisi tipe data campuran?",
        a: ["Ya", "Tidak", "Hanya angka", "Hanya string"],
        correct: 0,
        pembahasan: "List bisa berisi berbagai tipe data."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = [1,2]\ny = (3,4)\nprint(x + list(y))",
        a: ["[1,2,3,4]", "(1,2,3,4)", "Error", "[[1,2],[3,4]]"],
        correct: 0,
        pembahasan: "list(y) ubah tuple ke list, lalu digabung jadi [1,2,3,4]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = (1,2,3)\nfor i in angka:\n    print(i, end=' ')",
        a: ["1 2 3", "(1,2,3)", "Error", "i i i"],
        correct: 0,
        pembahasan: "Perulangan for menampilkan semua elemen tuple."
    },
    {
        q: "Apakah elemen tuple bisa dihapus langsung dengan del?",
        a: ["Ya", "Tidak", "Kadang-kadang", "Hanya string"],
        correct: 1,
        pembahasan: "Elemen tuple tidak bisa dihapus karena immutable."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = (1,2,3)\nprint(type(a))",
        a: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "Error"],
        correct: 0,
        pembahasan: "Variabel a bertipe tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = list('abc')\nprint(data)",
        a: ["['a','b','c']", "['abc']", "('a','b','c')", "Error"],
        correct: 0,
        pembahasan: "list('abc') memecah string jadi ['a','b','c']."
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
