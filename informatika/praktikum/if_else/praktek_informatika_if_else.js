let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x > 5:\n    print('Besar')\nelse:\n    print('Kecil')",
        a: ["Besar", "Kecil", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x = 10, kondisi x > 5 bernilai True, maka blok if dijalankan → cetak 'Besar'."
    },
    {
        q: "Output dari kode ini?",
        code: "x = 3\nif x < 5:\n    print('Aman')\nelse:\n    print('Bahaya')",
        a: ["Aman", "Bahaya", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Karena 3 < 5 True → program cetak 'Aman'."
    },
    {
        q: "Apa hasilnya?",
        code: "nilai = 60\nif nilai >= 70:\n    print('Lulus')\nelse:\n    print('Remedial')",
        a: ["Lulus", "Remedial", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "nilai = 60 < 70 → False, maka blok else dijalankan → 'Remedial'."
    },
    {
        q: "Apa hasil output?",
        code: "angka = -2\nif angka > 0:\n    print('Positif')\nelse:\n    print('Negatif atau Nol')",
        a: ["Positif", "Negatif atau Nol", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "angka = -2 → tidak lebih dari 0 → False → cetak 'Negatif atau Nol'."
    },
    {
        q: "Output dari kode berikut?",
        code: "umur = 20\nif umur >= 17:\n    print('Dewasa')\nelse:\n    print('Anak-anak')",
        a: ["Dewasa", "Anak-anak", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "20 >= 17 → True → cetak 'Dewasa'."
    },

    // =================== LEVEL SEDANG ===================
    {
        q: "Apa outputnya?",
        code: "nilai = 80\nif nilai >= 90:\n    print('A')\nelif nilai >= 80:\n    print('B')\nelse:\n    print('C')",
        a: ["A", "B", "C", "Error"],
        correct: 1,
        pembahasan: "nilai 80 tidak >= 90, tapi >= 80 True → cetak 'B'."
    },
    {
        q: "Output dari kode berikut?",
        code: "x = 4\ny = 2\nif x > y:\n    print('X lebih besar')\nelse:\n    print('Y lebih besar')",
        a: ["X lebih besar", "Y lebih besar", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "4 > 2 True → cetak 'X lebih besar'."
    },
    {
        q: "Hasilnya apa?",
        code: "x = 5\ny = 10\nif x * 2 == y:\n    print('Sama')\nelse:\n    print('Beda')",
        a: ["Sama", "Beda", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x*2 = 10 sama dengan y (10) → True → cetak 'Sama'."
    },
    {
        q: "Output dari kode ini?",
        code: "angka = 8\nif angka % 2 == 0:\n    print('Genap')\nelse:\n    print('Ganjil')",
        a: ["Genap", "Ganjil", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "8 % 2 = 0 → True → cetak 'Genap'."
    },
    {
        q: "Output berikut?",
        code: "x = 7\nif x % 2 == 0:\n    print('Genap')\nelse:\n    print('Ganjil')",
        a: ["Genap", "Ganjil", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "7 % 2 = 1 → False → blok else → cetak 'Ganjil'."
    },
    {
        q: "Hasil kode berikut?",
        code: "nilai = 50\nif nilai >= 80:\n    print('A')\nelif nilai >= 60:\n    print('B')\nelse:\n    print('C')",
        a: ["A", "B", "C", "Error"],
        correct: 2,
        pembahasan: "nilai=50 tidak >=80, tidak >=60, maka else dijalankan → cetak 'C'."
    },
    {
        q: "Output dari kode berikut?",
        code: "x = 10\ny = 5\nif x > y and y > 0:\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x>y True, y>0 True, keduanya True → `and` menghasilkan True → cetak 'Benar'."
    },
    {
        q: "Apa hasilnya?",
        code: "x = 10\nif not (x < 5):\n    print('Masuk')\nelse:\n    print('Keluar')",
        a: ["Masuk", "Keluar", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "`x < 5` False → not(False) = True → cetak 'Masuk'."
    },
    {
        q: "Output berikut?",
        code: "a = 0\nif a:\n    print('True')\nelse:\n    print('False')",
        a: ["True", "False", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "Dalam Python, 0 dianggap False → cetak 'False'."
    },
    {
        q: "Hasil kode berikut?",
        code: "x = 2\ny = 3\nif x * y == 6:\n    print('Betul')\nelse:\n    print('Salah')",
        a: ["Betul", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "2 * 3 = 6 → True → cetak 'Betul'."
    },
    {
        q: "Output kode ini?",
        code: "x = 5\ny = 2\nif x % y == 0:\n    print('Habis dibagi')\nelse:\n    print('Tidak habis')",
        a: ["Habis dibagi", "Tidak habis", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "5 % 2 = 1 → False → cetak 'Tidak habis'."
    },
    {
        q: "Apa hasilnya?",
        code: "x = 10\ny = 20\nif x != y:\n    print('Tidak sama')\nelse:\n    print('Sama')",
        a: ["Tidak sama", "Sama", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "10 != 20 True → cetak 'Tidak sama'."
    },
    {
        q: "Output dari kode berikut?",
        code: "angka = 9\nif angka % 3 == 0:\n    print('Kelipatan 3')\nelse:\n    print('Bukan kelipatan 3')",
        a: ["Kelipatan 3", "Bukan kelipatan 3", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "9 % 3 = 0 → True → cetak 'Kelipatan 3'."
    },
    {
        q: "Output dari kode berikut?",
        code: "nilai = 100\nif nilai >= 90:\n    print('A')\nif nilai == 100:\n    print('Sempurna')",
        a: ["A dan Sempurna", "A", "Sempurna", "Tidak ada output"],
        correct: 0,
        pembahasan: "Dua kondisi `if` berdiri sendiri, keduanya True → cetak 'A' dan 'Sempurna'."
    },

    // =================== LEVEL SULIT ===================
    {
        q: "Apa hasil dari kode ini?",
        code: "x = 10\ny = 5\nif x > 5:\n    if y < 10:\n        print('Cocok')\n    else:\n        print('Tidak')",
        a: ["Cocok", "Tidak", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "`x > 5` True, `y < 10` True → masuk blok dalam → cetak 'Cocok'."
    },
    {
        q: "Output berikut?",
        code: "x = 4\ny = 8\nif x * 2 == y:\n    if y / 2 == x:\n        print('Benar')\n    else:\n        print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x*2 = 8 True → lanjut, y/2 = 4 sama dengan x → True → cetak 'Benar'."
    },
    {
        q: "Apa hasilnya?",
        code: "a = 7\nif a > 5:\n    if a % 2 == 1:\n        print('Ganjil >5')\n    else:\n        print('Genap >5')",
        a: ["Ganjil >5", "Genap >5", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "7 > 5 True dan 7 % 2 = 1 True → cetak 'Ganjil >5'."
    },
    {
        q: "Output berikut?",
        code: "x = 6\ny = 3\nif (x / y == 2) and (x % y == 0):\n    print('Valid')\nelse:\n    print('Tidak valid')",
        a: ["Valid", "Tidak valid", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x/y = 2 True, x%y = 0 True, keduanya True → cetak 'Valid'."
    },
    {
        q: "Output dari kode ini?",
        code: "a = 10\nif a > 5:\n    if a < 15:\n        print('Di tengah')\n    else:\n        print('Besar')\nelse:\n    print('Kecil')",
        a: ["Di tengah", "Besar", "Kecil", "Error"],
        correct: 0,
        pembahasan: "a=10 → a>5 True → masuk blok, a<15 True → cetak 'Di tengah'."
    },
    {
        q: "Apa hasil berikut?",
        code: "x = 3\ny = 6\nif y / x == 2 and not (y % x):\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "`y/x == 2` True, `y % x = 0` berarti False jika dipakai langsung, tapi `not (y % x)` = not(0) = True → cetak 'Benar'."
    },
    {
        q: "Output berikut?",
        code: "x = 5\ny = 15\nif (x * 3 == y) or (y / x == 2):\n    print('Satu cocok')\nelse:\n    print('Tidak cocok')",
        a: ["Satu cocok", "Tidak cocok", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "`x*3==y` → 15==15 True → or langsung True → cetak 'Satu cocok'."
    },
    {
        q: "Hasilnya apa?",
        code: "a = 4\nb = 2\nif a > b:\n    if a % b == 0:\n        print('Kelipatan')\n    else:\n        print('Tidak')\nelse:\n    print('B')",
        a: ["Kelipatan", "Tidak", "B", "Error"],
        correct: 0,
        pembahasan: "4>2 True → masuk dalam, 4%2=0 True → cetak 'Kelipatan'."
    },
    {
        q: "Output dari kode berikut?",
        code: "nilai = 85\nif nilai >= 80:\n    if nilai < 90:\n        print('B+')\n    else:\n        print('A')",
        a: ["B+", "A", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "85>=80 True, 85<90 True → cetak 'B+'."
    },
    {
        q: "hasil akhir?",
        code: "x = 5\ny = 10\nif x * 2 == y and y % x == 0:\n    if y / x == 2:\n        print('Cocok')\n    else:\n        print('Tidak')",
        a: ["Cocok", "Tidak", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Semua kondisi True → cetak 'Cocok'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\ny = 5\nif x > y:\n    if x % y == 0:\n        print('Kelipatan')\n    else:\n        print('Tidak Kelipatan')\nelse:\n    print('Y lebih besar')",
        a: ["Kelipatan", "Tidak Kelipatan", "Y lebih besar", "Error"],
        correct: 0,
        pembahasan: "x=10, y=5 → x>y True, x%y=0 True → cetak 'Kelipatan'."
    },
    {
        q: "Apa hasilnya?",
        code: "x = 12\nif x % 3 == 0:\n    if x % 4 == 0:\n        print('Bisa 3 dan 4')\n    else:\n        print('Hanya 3')\nelse:\n    print('Tidak bisa 3')",
        a: ["Bisa 3 dan 4", "Hanya 3", "Tidak bisa 3", "Error"],
        correct: 0,
        pembahasan: "12 % 3 = 0 dan 12 % 4 = 0 → kedua kondisi True → cetak 'Bisa 3 dan 4'."
    },
    {
        q: "Output berikut?",
        code: "a = 15\nif a > 10:\n    if a < 20:\n        print('Rentang')\n    else:\n        print('Tinggi')\nelse:\n    print('Rendah')",
        a: ["Rentang", "Tinggi", "Rendah", "Error"],
        correct: 0,
        pembahasan: "a=15 → a>10 True, a<20 True → cetak 'Rentang'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 9\nif x % 2 == 0:\n    print('Genap')\nelif x % 3 == 0:\n    print('Kelipatan 3')\nelse:\n    print('Lainnya')",
        a: ["Genap", "Kelipatan 3", "Lainnya", "Error"],
        correct: 1,
        pembahasan: "9 % 2 != 0 False, 9 % 3 == 0 True → cetak 'Kelipatan 3'."
    },
    {
        q: "Output kode ini?",
        code: "x = 7\ny = 2\nif x > y:\n    if (x + y) % 2 == 1:\n        print('Ganjil')\n    else:\n        print('Genap')",
        a: ["Ganjil", "Genap", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x+y=9 → ganjil → cetak 'Ganjil'."
    },
    {
        q: "Hasil dari kode berikut?",
        code: "x = 5\ny = 10\nif (x * 2 == y) and (y / x == 2):\n    print('Dua kali lipat')\nelse:\n    print('Tidak cocok')",
        a: ["Dua kali lipat", "Tidak cocok", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x*2=10 True dan y/x=2 True → cetak 'Dua kali lipat'."
    },
    {
        q: "Output berikut?",
        code: "x = 5\ny = 8\nif (x < y) or (y < 0):\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "`x<y` True → or langsung True → cetak 'Benar'."
    },
    {
        q: "Output dari kode berikut?",
        code: "nilai = 95\nif nilai >= 90:\n    if nilai == 100:\n        print('Sempurna')\n    else:\n        print('Hebat')",
        a: ["Sempurna", "Hebat", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "nilai>=90 True tapi tidak ==100 → cetak 'Hebat'."
    },
    {
        q: "Apa hasilnya?",
        code: "a = 0\nb = 5\nif not a and b > 0:\n    print('True')\nelse:\n    print('False')",
        a: ["True", "False", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "`not a` = True (karena a=0 dianggap False), b>0 True → True and True → cetak 'True'."
    },
    {
        q: "Apa output kode berikut?",
        code: "x = 3\ny = 6\nif x * 2 == y:\n    print('A')\nelif y / 3 == x:\n    print('B')\nelse:\n    print('C')",
        a: ["A", "B", "C", "Error"],
        correct: 0,
        pembahasan: "x*2==6 True → blok if dijalankan, else tidak dieksekusi → cetak 'A'."
    },
    {
        q: "Output berikut?",
        code: "x = 10\ny = 20\nif (x + y) / 2 > 10:\n    print('Rata-rata tinggi')\nelse:\n    print('Rata-rata rendah')",
        a: ["Rata-rata tinggi", "Rata-rata rendah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "(10+20)/2=15 >10 → True → cetak 'Rata-rata tinggi'."
    },
    {
        q: "Apa hasil dari kode ini?",
        code: "angka = 11\nif angka % 2 == 0:\n    print('Genap')\nelif angka % 3 == 0:\n    print('Kelipatan 3')\nelse:\n    print('Lainnya')",
        a: ["Genap", "Kelipatan 3", "Lainnya", "Error"],
        correct: 2,
        pembahasan: "11 tidak habis dibagi 2 atau 3 → else → 'Lainnya'."
    },
    {
        q: "Output dari kode berikut?",
        code: "x = 5\ny = 15\nif y % x == 0:\n    if y / x == 3:\n        print('Tepat')\n    else:\n        print('Tidak Tepat')",
        a: ["Tepat", "Tidak Tepat", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "15%5=0 True, y/x=3 True → cetak 'Tepat'."
    },
    {
        q: "Apa hasil kode ini?",
        code: "x = 2\ny = 8\nif (y % x == 0) and (y / x == 4):\n    print('Pas')\nelse:\n    print('Tidak pas')",
        a: ["Pas", "Tidak pas", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "8%2=0 True, 8/2=4 True → cetak 'Pas'."
    },
    {
        q: "Output kode berikut?",
        code: "a = 10\nif a > 0:\n    if a % 2 == 0:\n        print('Positif Genap')\n    else:\n        print('Positif Ganjil')\nelse:\n    print('Negatif')",
        a: ["Positif Genap", "Positif Ganjil", "Negatif", "Error"],
        correct: 0,
        pembahasan: "a=10 >0 dan genap → cetak 'Positif Genap'."
    },
    {
        q: "Output berikut?",
        code: "nilai = 65\nif nilai >= 80:\n    print('A')\nelif nilai >= 70:\n    print('B')\nelif nilai >= 60:\n    print('C')\nelse:\n    print('D')",
        a: ["A", "B", "C", "D"],
        correct: 2,
        pembahasan: "65 >=60 True setelah dua kondisi pertama gagal → cetak 'C'."
    },
    {
        q: "Output berikut?",
        code: "x = 5\nif x > 10:\n    print('A')\nelse:\n    if x > 0:\n        print('B')\n    else:\n        print('C')",
        a: ["A", "B", "C", "Error"],
        correct: 1,
        pembahasan: "x>10 False → masuk else → x>0 True → cetak 'B'."
    },
    {
        q: "Output dari kode ini?",
        code: "x = -3\nif x > 0:\n    print('Positif')\nelif x == 0:\n    print('Nol')\nelse:\n    print('Negatif')",
        a: ["Positif", "Nol", "Negatif", "Error"],
        correct: 2,
        pembahasan: "x=-3 → if & elif salah → else → cetak 'Negatif'."
    },
    {
        q: "Apa hasilnya?",
        code: "x = 6\ny = 3\nif (x / y == 2) and not (x % y):\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x/y=2 True, x%y=0 → not(0)=True → keduanya True → cetak 'Benar'."
    },
    {
        q: "Output terakhir?",
        code: "a = 9\nb = 3\nif a % b == 0:\n    if (a / b) == 3:\n        print('Cocok')\n    else:\n        print('Tidak cocok')\nelse:\n    print('Bukan kelipatan')",
        a: ["Cocok", "Tidak cocok", "Bukan kelipatan", "Error"],
        correct: 0,
        pembahasan: "9%3=0 True, 9/3=3 True → cetak 'Cocok'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\ny = 20\nz = 15\nif (x < y and z > x):\n    if (z < y):\n        print('Di tengah')\n    else:\n        print('Terbesar')\nelse:\n    print('Tidak memenuhi')",
        a: ["Di tengah", "Terbesar", "Tidak memenuhi", "Error"],
        correct: 0,
        pembahasan: "x<y True, z>x True → masuk if luar. Dalamnya: z<y True (15<20) → cetak 'Di tengah'."
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
