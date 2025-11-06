const BASE_URL = "https://script.google.com/macros/s/AKfycbYourGoogleScript/exec"; // Ganti dengan URL Google Apps Script kamu
let randomizedQuiz = [];

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
        pembahasan: "4 pangkat 3 = 64 karena operator ** berarti perpangkatan."
    },
    {
        q: "Fungsi sensor ultrasonik pada robot adalah?",
        a: ["Mendeteksi warna", "Mengukur jarak", "Menentukan arah"],
        correct: 1,
        pembahasan: "Sensor ultrasonik digunakan untuk mengukur jarak menggunakan gelombang suara."
    },
    {
        q: "Perhatikan rangkaian berikut:",
        img: "https://i.ibb.co/PMtZTHm/rangkaian.png",
        a: ["Seri", "Paralel", "Campuran"],
        correct: 1,
        pembahasan: "Kedua resistor tersusun sejajar sehingga disebut paralel."
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
}

function updateSubmitState() {
    const total = randomizedQuiz.length;
    let answered = 0;
    for (let i = 0; i < total; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) answered++;
    }
    document.getElementById("submitQuiz").disabled = answered !== total;
}

document.getElementById("submitQuiz").addEventListener("click", async () => {
    const nama = document.getElementById("nama").value.trim();
    const kelas = document.getElementById("kelas").value;
    const mapel = document.getElementById("mapel").value.trim();

    if (!nama || !mapel) return alert("Lengkapi nama dan mata pelajaran terlebih dahulu!");

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
        <p class="pembahasan"><b>Pembahasan:</b> ${item.pembahasan}</p>
      </div>
    `;
    });

    const total = randomizedQuiz.length;
    const nilai = Math.round((benar / total) * 100);
    document.getElementById("quiz").style.display = "none";
    document.getElementById("submitQuiz").style.display = "none";
    document.getElementById("ulangQuiz").style.display = "block";

    document.getElementById("result").innerHTML = `
    <div class="result-box">
      <h3>🎯 Nilai Kamu: ${nilai}</h3>
      <p>Benar: ${benar} / ${total}</p>
    </div>
    <h3>Pembahasan:</h3>
    ${feedback}
  `;

    // Simpan ke Google Sheet
    const data = { nama, kelas, mapel, nilai };
    await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    });
});

document.getElementById("ulangQuiz").addEventListener("click", () => {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("submitQuiz").style.display = "block";
    document.getElementById("ulangQuiz").style.display = "none";
    document.getElementById("result").innerHTML = "";
    renderQuiz();
});

renderQuiz();
