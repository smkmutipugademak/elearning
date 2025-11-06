const BASE_URL = "https://script.google.com/macros/s/AKfycbyLMS-backend/exec"; // Ganti URL kamu

const quizData = [
    {
        q: "Perhatikan rangkaian berikut:",
        img: "s",
        a: ["Resistor seri", "Resistor paralel", "Resistor campuran"],
        correct: 1,
        pembahasan: "Terlihat kedua resistor disusun sejajar, berarti paralel."
    },
    {
        q: "Hasil output dari kode berikut adalah:",
        code: `
    let x = 5;
    let y = 2;
    console.log(x ** y);
    `,
        a: ["7", "10", "25"],
        correct: 2,
        pembahasan: "Operator ** berarti pangkat, jadi 5 ** 2 = 25."
    },
    {
        q: "Fungsi dari sensor ultrasonik pada robot line follower adalah?",
        a: [
            "Mendeteksi garis hitam putih",
            "Mengukur jarak dari objek di depan",
            "Mengontrol kecepatan motor"
        ],
        correct: 1,
        pembahasan: "Ultrasonik berfungsi mengukur jarak berdasarkan pantulan suara."
    }
];

// === Fungsi Acak ===
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// === Render Soal ===
const randomizedQuiz = shuffleArray(quizData);
const quizContainer = document.getElementById("quiz");
randomizedQuiz.forEach((item, i) => {
    const shuffledAnswers = shuffleArray(item.a.map((text, idx) => ({
        text,
        isCorrect: idx === item.correct
    })));
    randomizedQuiz[i].shuffledAnswers = shuffledAnswers;

    const div = document.createElement("div");
    div.className = "question";

    let html = `<h4>${i + 1}. ${item.q}</h4>`;
    if (item.img) html += `<img src="${item.img}" alt="gambar soal" class="soal-img"/>`;
    if (item.code) html += `<pre><code class="language-js">${item.code}</code></pre>`;

    html += shuffledAnswers.map(
        (ans, idx) => `
      <label>
        <input type="radio" name="q${i}" value="${idx}">
        ${String.fromCharCode(65 + idx)}. ${ans.text}
      </label><br>
    `
    ).join("");

    div.innerHTML = html;
    quizContainer.appendChild(div);
});

hljs.highlightAll();

document.getElementById("submitQuiz").addEventListener("click", async () => {
    const nama = document.getElementById("nama").value.trim();
    const kelas = document.getElementById("kelas").value;
    const mapel = document.getElementById("mapel").value.trim();

    if (!nama || !mapel) {
        alert("Lengkapi nama dan mata pelajaran terlebih dahulu!");
        return;
    }

    let benar = 0;
    let feedback = "";

    randomizedQuiz.forEach((item, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const selectedIndex = selected ? Number(selected.value) : null;
        const answers = item.shuffledAnswers;

        const correctAns = answers.find(a => a.isCorrect);
        const yourAns = selected ? answers[selectedIndex] : null;
        const isCorrect = yourAns && yourAns.isCorrect;

        if (isCorrect) benar++;

        feedback += `
      <div class="feedback-item ${isCorrect ? 'benar' : 'salah'}">
        <h4>${i + 1}. ${item.q}</h4>
        ${item.img ? `<img src="${item.img}" class="soal-img"/>` : ""}
        ${item.code ? `<pre><code class="language-js">${item.code}</code></pre>` : ""}
        <p><b>Jawaban kamu:</b> ${yourAns ? yourAns.text : 'Tidak dijawab'}</p>
        <p><b>Jawaban benar:</b> <span class="jawaban-benar">${correctAns.text}</span></p>
        <p class="pembahasan"><b>Pembahasan:</b> ${item.pembahasan}</p>
      </div>
    `;
    });

    const total = randomizedQuiz.length;
    const nilai = Math.round((benar / total) * 100);

    document.getElementById("result").innerHTML = `
    <div class="result-box">
      <h3>🎯 Nilai Kamu: ${nilai}</h3>
      <p>Benar: ${benar} / ${total}</p>
    </div>
    <h3>Pembahasan:</h3>
    ${feedback}
  `;

    // Simpan ke Google Sheet (opsional)
    const data = { nama, kelas, mapel, jenis: "Latihan", nilai };
    await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    });

    document.querySelectorAll("input[type='radio']").forEach(i => i.disabled = true);
    document.getElementById("submitQuiz").disabled = true;
});
