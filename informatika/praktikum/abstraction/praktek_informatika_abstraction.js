let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL DASAR (ABSTRACTION) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "from abc import ABC, abstractmethod\n\nclass Hewan(ABC):\n    @abstractmethod\n    def suara(self):\n        pass",
        a: ["Tidak ada output", "Error", "suara()", "None"],
        correct: 0,
        pembahasan: "Tidak ada instance dibuat, jadi tidak ada output."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def tampil(self):\n        pass\n\nobj = A()",
        a: ["Error", "Tidak ada output", "None", "tampil"],
        correct: 0,
        pembahasan: "Kelas abstrak tidak bisa diinstansiasi langsung."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Hewan(ABC):\n    @abstractmethod\n    def suara(self):\n        pass\n\nclass Kucing(Hewan):\n    def suara(self):\n        print('Meong')\n\nk = Kucing()\nk.suara()",
        a: ["Meong", "Error", "None", "pass"],
        correct: 0,
        pembahasan: "Kelas turunan mengimplementasikan metode abstrak → mencetak 'Meong'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Bentuk(ABC):\n    @abstractmethod\n    def luas(self):\n        pass\n\nclass Persegi(Bentuk):\n    def luas(self):\n        return 25\n\np = Persegi()\nprint(p.luas())",
        a: ["25", "Error", "luas", "None"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasikan dan mengembalikan 25."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Tes(ABC):\n    @abstractmethod\n    def f(self): pass\n\nclass Coba(Tes):\n    pass\n\nobj = Coba()",
        a: ["Error", "Tidak ada output", "None", "pass"],
        correct: 0,
        pembahasan: "Kelas Coba belum mengimplementasikan f(), jadi error saat instansiasi."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def tampil(self): pass\n\nclass B(A):\n    def tampil(self): print('Halo')\n\nB().tampil()",
        a: ["Halo", "Error", "None", "pass"],
        correct: 0,
        pembahasan: "Metode tampil() diimplementasikan → output 'Halo'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Mesin(ABC):\n    @abstractmethod\n    def hidupkan(self): pass\n\nclass Mobil(Mesin):\n    def hidupkan(self): print('Mesin hidup')\n\nm = Mobil()\nm.hidupkan()",
        a: ["Mesin hidup", "Error", "pass", "None"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi dengan benar."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def show(self): pass\n\nclass B(A):\n    def show(self): return 'OK'\n\nprint(B().show())",
        a: ["OK", "Error", "None", "show"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasikan dan dipanggil → 'OK'."
    },
    {
        q: "Apa yang terjadi jika metode abstrak tidak diimplementasikan di subclass?",
        a: ["Error saat membuat objek", "Program tetap jalan", "Hanya peringatan", "Metode diabaikan"],
        correct: 0,
        pembahasan: "Python akan error ketika mencoba membuat objek subclass tanpa implementasi."
    },
    {
        q: "Apa fungsi dari decorator @abstractmethod?",
        a: ["Menandai metode harus diimplementasi di subclass", "Menjalankan otomatis", "Membuat fungsi privat", "Menghapus fungsi"],
        correct: 0,
        pembahasan: "@abstractmethod menandai metode wajib diimplementasikan."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Bentuk(ABC):\n    @abstractmethod\n    def luas(self): pass\n\nclass Lingkaran(Bentuk):\n    def luas(self): return 3.14 * 5 * 5\n\nprint(Lingkaran().luas())",
        a: ["78.5", "Error", "3.14", "25"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak dengan rumus luas lingkaran."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def f1(self): pass\n\nclass B(A):\n    def f1(self): print('Implementasi B')\n\nb = B()\nb.f1()",
        a: ["Implementasi B", "Error", "None", "pass"],
        correct: 0,
        pembahasan: "B mengimplementasikan f1() dengan benar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def tampil(self): pass\n\nclass B(A):\n    def tampil(self): print('B tampil')\n\nclass C(B): pass\n\nC().tampil()",
        a: ["B tampil", "Error", "C tampil", "None"],
        correct: 0,
        pembahasan: "C mewarisi implementasi tampil() dari B."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass X(ABC):\n    @abstractmethod\n    def f(self): pass\n\nclass Y(X):\n    def f(self): print('Y')\n\nclass Z(Y):\n    def f(self): super().f()\n\nZ().f()",
        a: ["Y", "Z", "Error", "None"],
        correct: 0,
        pembahasan: "super().f() memanggil implementasi dari Y → output 'Y'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def f(self): pass\n\nclass B(A):\n    def f(self): print('B')\n\nclass C(B):\n    def g(self): print('C')\n\nC().f()",
        a: ["B", "C", "Error", "None"],
        correct: 0,
        pembahasan: "C mewarisi f() dari B → mencetak 'B'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def data(self): pass\n\nclass B(A):\n    def data(self): return 10\n\nprint(isinstance(B(), A))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "B adalah subclass dari A, jadi isinstance(B(), A) bernilai True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Animal(ABC):\n    @abstractmethod\n    def sound(self): pass\n\nclass Dog(Animal):\n    def sound(self): return 'Bark'\n\nprint(Dog().sound())",
        a: ["Bark", "Error", "None", "sound"],
        correct: 0,
        pembahasan: "Metode sound diimplementasikan, hasilnya 'Bark'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Base(ABC):\n    @abstractmethod\n    def show(self): pass\n\nclass Derived(Base):\n    def show(self): print('Derived')\n\nobj = Derived()\nobj.show()",
        a: ["Derived", "Base", "Error", "None"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi di subclass Derived."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Satu(ABC):\n    @abstractmethod\n    def run(self): pass\n\nclass Dua(Satu):\n    def run(self): print('Berjalan')\n\nDua().run()",
        a: ["Berjalan", "Error", "None", "run"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak dengan benar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Bentuk(ABC):\n    @abstractmethod\n    def nama(self): pass\n\nclass Persegi(Bentuk):\n    def nama(self): return 'Persegi'\n\nb = Persegi()\nprint(b.nama())",
        a: ["Persegi", "Error", "None", "nama"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi → mengembalikan 'Persegi'."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def tampil(self): pass\n\nclass B(A):\n    def tampil(self): print('B')\n\nclass C(B):\n    def tampil(self):\n        super().tampil()\n        print('C')\n\nC().tampil()",
        a: ["B\\nC", "C\\nB", "Error", "B"],
        correct: 0,
        pembahasan: "super() memanggil tampil() dari B lalu mencetak 'C'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Base(ABC):\n    @abstractmethod\n    def info(self): pass\n\nclass Sub(Base):\n    def info(self): return 42\n\nprint(Sub().info() * 2)",
        a: ["84", "42", "Error", "None"],
        correct: 0,
        pembahasan: "Metode abstrak mengembalikan 42, dikali 2 = 84."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Base(ABC):\n    @abstractmethod\n    def data(self): pass\n\nclass Child(Base):\n    def data(self): return [1, 2, 3]\n\nprint(sum(Child().data()))",
        a: ["6", "3", "Error", "None"],
        correct: 0,
        pembahasan: "Metode mengembalikan list [1,2,3], hasil penjumlahan = 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass X(ABC):\n    @abstractmethod\n    def nilai(self): pass\n\nclass Y(X):\n    def nilai(self): return 5\n\nclass Z(Y):\n    def nilai(self): return super().nilai() + 5\n\nprint(Z().nilai())",
        a: ["10", "5", "Error", "None"],
        correct: 0,
        pembahasan: "Z menambah 5 dari nilai() superclass Y → total 10."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Transport(ABC):\n    @abstractmethod\n    def jalan(self): pass\n\nclass Mobil(Transport):\n    def jalan(self): print('Braaak!')\n\nm = Mobil()\nm.jalan()",
        a: ["Braaak!", "Error", "None", "jalan"],
        correct: 0,
        pembahasan: "Implementasi metode abstrak berhasil dijalankan."
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
