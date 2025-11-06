const quizData = [
    {
        q: "Perhatikan rangkaian berikut:",
        img: "soal1.jpg", // contoh gambar
        options: ["Arus mengalir dari A ke B", "Tegangan nol di titik A", "Lampu menyala", "Rangkaian terbuka"],
        correct: 2,
        explanation: "Lampu menyala karena rangkaian tertutup dan arus dapat mengalir penuh."
    },
    {
        q: "Apa output dari kode berikut?",
        code: `print(2 ** 3 ** 2)`,
        options: ["64", "512", "8", "16"],
        correct: 1,
        explanation: "Urutan pangkat di Python kanan ke kiri, jadi 3² = 9 lalu 2⁹ = 512."
    }
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitQuiz");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    quizContainer.innerHTML = "";
    quizData.forEach((item, index) => {
        let questionHTML = `
            <div class="question-block">
                <p><b>${index + 1}. ${item.q}</b></p>
        `;

        if (item.img) {
            questionHTML += `<img src="${item.img}" class="question-img" alt="Soal Gambar ${index + 1}">`;
        }

        if (item.code) {
            questionHTML += `<pre><code class="language-python">${item.code}</code></pre>`;
        }

        questionHTML += item.options.map((opt, i) => `
            <label>
                <input type="radio" name="q${index}" value="${i}">
                ${opt}
            </label><br>
        `).join("");

        questionHTML += `</div>`;
        quizContainer.innerHTML += questionHTML;
    });

    hljs.highlightAll();
}

submitBtn.addEventListener("click", () => {
    let score = 0;
    resultContainer.innerHTML = "";

    quizData.forEach((item, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        const correctIndex = item.correct;

        if (answer && parseInt(answer.value) === correctIndex) {
            score++;
        }

        // tampilkan hasil + warna biru dan hijau
        resultContainer.innerHTML += `
            <p><b>${index + 1}. ${item.q}</b></p>
            ${item.img ? `<img src="${item.img}" class="question-img">` : ""}
            ${item.code ? `<pre><code class="language-python">${item.code}</code></pre>` : ""}
            <p class="correct">✔ Jawaban benar: ${item.options[correctIndex]}</p>
            <p class="explanation">💡 Pembahasan: ${item.explanation}</p>
            <hr>
        `;
    });

    resultContainer.innerHTML = `<h3>Skor Kamu: ${score}/${quizData.length}</h3>` + resultContainer.innerHTML;
});

loadQuiz();
