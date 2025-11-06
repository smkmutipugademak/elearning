const BASE_URL = "https://script.google.com/macros/s/AKfycbyLMS-backend/exec"; // Ganti URL kamu

const quizData = [
    {
        q: "Perhatikan rangkaian berikut:",
        img: "data:image/jpeg;base64,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",
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

// === Acak array ===
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
        <p><b>Jawaban kamu:</b> ${yourAns ? yourAns.text : 'Tidak dijawab'}</p>
        <p><b>Jawaban benar:</b> ${correctAns.text}</p>
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

    // Simpan ke Google Sheet
    const data = { nama, kelas, mapel, jenis: "Latihan", nilai };
    await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    });

    document.querySelectorAll("input[type='radio']").forEach(i => i.disabled = true);
    document.getElementById("submitQuiz").disabled = true;
});
