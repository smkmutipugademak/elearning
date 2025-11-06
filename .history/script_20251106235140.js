const BASE_URL = "https://script.google.com/macros/s/AKfycbYourGoogleScript/exec"; // Ganti ke URL Google Script kamu

const quizData = [
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
        a: ["Mendeteksi garis hitam putih", "Mengukur jarak dari objek di depan", "Mengontrol kecepatan motor"],
        correct: 1,
        pembahasan: "Ultrasonik digunakan untuk mengukur jarak dengan pantulan suara."
    },
    {
        q: "Perhatikan rangkaian berikut:",
        img: "https://i.ibb.co/PMtZTHm/rangkaian.png",
        a: ["Resistor seri", "Resistor paralel", "Resistor campuran"],
        correct: 1,
        pembahasan: "Rangkaian menunjukkan dua resistor sejajar, berarti paralel."
    }
];

let randomizedQuiz = [];

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

    randomizedQuiz = shuffleArray(quizData).map((item) => ({
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
        if (item.img) html += `<img src="${item.img}" class="soal-img">`;
        if (item.code) html += `<pre><code class="language-js">${item.code}</code></pre>`;

        html += item.shuffledAnswers.map((ans, idx) => `
      <label>
        <input type="radio" name="q${i}" value="${idx}"> 
        ${String.fromCharCode(65 + idx)}. ${ans.text}
      </label>`).join("");

        div.innerHTML = html;
        quizContainer.appendChild(div);
    });

    hljs.highlightAll();
}

function tampilHasil(benar, total, feedback) {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("submitQuiz").style.display = "none";
    document.getElementById("ulangQuiz").style.display = "block";

    const nilai = Math.round((benar / total) * 100);
    document.getElementById("result").innerHTML = `
    <div class="result-box">
      <h3>🎯 Nilai Kamu: ${nilai}</h3>
      <p>Benar: ${benar} / ${total}</p>
    </div>
    <h3>Pembahasan:</h3>
    ${feedback}
  `;
}

document.getElementById("submitQuiz").addEventListener("click", async () => {
    const nama = document.getElementById("nama").value.trim();
    const kelas = document.getElementById("kelas").value;
    const mapel = document.getElementById("mapel").value.trim();

    if (!nama || !mapel) return alert("Lengkapi nama dan mapel dulu!");

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

    tampilHasil(benar, randomizedQuiz.length, feedback);

    // Simpan ke Google Sheet
    const data = { nama, kelas, mapel, nilai: Math.round((benar / randomizedQuiz.length) * 100) };
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
