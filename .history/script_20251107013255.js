let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0; // in seconds

const quizData = [
    {
        q: "Output dari kode berikut adalah:",
        code: `
      let x = 4;
      let y = 3;
      console.log(x ** y);
    `,
        a: ["7", "64", "12"],
        correct: 1,
        pembahasan: "Operator ** berarti pangkat, jadi 4 pangkat 3 = 64."
    },
    {
        q: "Fungsi sensor ultrasonik pada robot adalah?",
        a: ["Mendeteksi warna", "Mengukur jarak", "Menentukan arah"],
        correct: 1,
        pembahasan: "Sensor ultrasonik digunakan untuk mengukur jarak dengan gelombang suara."
    },
    {
        q: "Perhatikan rangkaian berikut:",
        img: "https://i.ibb.co/PMtZTHm/rangkaian.png",
        a: ["Seri", "Paralel", "Campuran"],
        correct: 1,
        pembahasan: "Kedua resistor sejajar, jadi disebut paralel."
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

    // Timer: 1 menit per soal
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

    timer.classList.remove("warning", "danger");

    if (timeRemaining <= 60) {
        timer.classList.add("danger");
    } else if (timeRemaining <= 180) {
        timer.classList.add("warning");
    }
}

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

// Jalankan setelah semua elemen siap
document.addEventListener("DOMContentLoaded", () => {
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

    // Render quiz pertama kali
    renderQuiz();
});
