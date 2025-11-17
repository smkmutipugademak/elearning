let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (FOR & WHILE DASAR) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    console.log('Hai');\n}",
        a: ["Hai Hai Hai", "Hai", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop berjalan 3 kali, mencetak 'Hai' sebanyak 3 kali ke console."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    console.log(i);\n}",
        a: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop dimulai dari 0 hingga kurang dari 3, sehingga mencetak 0, 1, 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 4; i++) {\n    console.log(i);\n}",
        a: ["1 2 3", "0 1 2", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Loop dimulai dari 1 sampai kurang dari 4, menghasilkan 1, 2, 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let i = 0;\nwhile (i < 3) {\n    console.log(i);\n    i++;\n}",
        a: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop berjalan selama i < 3, sehingga mencetak 0, 1, 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let huruf of 'abc') {\n    console.log(huruf);\n}",
        a: ["a b c", "abc", "a,b,c", "Error"],
        correct: 0,
        pembahasan: "Loop berjalan untuk setiap karakter dalam string 'abc'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i of [1, 2, 3]) {\n    console.log(i * 2);\n}",
        a: ["2 4 6", "1 2 3", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Setiap elemen dikali 2 menghasilkan 2, 4, 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 5; i++) {\n    if (i === 3) break;\n    console.log(i);\n}",
        a: ["0 1 2", "0 1 2 3", "1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i === 3, jadi hanya 0, 1, 2 yang dicetak."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 5; i++) {\n    if (i === 2) continue;\n    console.log(i);\n}",
        a: ["0 1 3 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "continue melewati nilai 2, jadi mencetak 0, 1, 3, 4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let count = 0;\nwhile (count < 5) {\n    console.log(count);\n    count += 2;\n}",
        a: ["0 2 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "count bertambah 2 tiap iterasi → 0, 2, 4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 6; i += 2) {\n    console.log(i);\n}",
        a: ["1 3 5", "2 4 6", "1 2 3 4 5", "Error"],
        correct: 0,
        pembahasan: "Langkah 2 menghasilkan 1, 3, 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    console.log('Loop', i);\n}",
        a: ["Loop 0 Loop 1 Loop 2", "Loop Loop Loop", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "console.log menampilkan teks dan nilai i."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [2, 4, 6];\nfor (let i of angka) {\n    console.log(i - 1);\n}",
        a: ["1 3 5", "2 4 6", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Setiap elemen dikurangi 1 → 1, 3, 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 2; j++) {\n        console.log(i, j);\n    }\n}",
        a: ["0 0 0 1 1 0 1 1 2 0 2 1", "0 1 2", "0 0 1 1 2 2", "Error"],
        correct: 0,
        pembahasan: "Loop bersarang: i=0→1→2, j=0→1 tiap kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let i = 3;\nwhile (i > 0) {\n    console.log(i);\n    i--;\n}",
        a: ["3 2 1", "1 2 3", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop mundur dari 3 ke 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 2; i++) {\n    console.log('A');\n}\nconsole.log('B');",
        a: ["A A B", "A B A", "B A A", "Error"],
        correct: 0,
        pembahasan: "'A' dua kali di dalam loop, lalu 'B' di luar loop."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 1;\nwhile (x < 5) {\n    console.log(x);\n    x += 3;\n}",
        a: ["1 4", "1 2 3 4", "1 2 4", "Error"],
        correct: 0,
        pembahasan: "x naik +3 tiap iterasi → 1, 4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 4; i++) {\n    if (i % 2 === 0) {\n        console.log(i);\n    }\n}",
        a: ["0 2", "1 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Cetak hanya bilangan genap → 0, 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 5; i++) {\n    if (i === 3) break;\n    console.log(i);\n}",
        a: ["1 2", "1 2 3", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i === 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < i; j++) {\n        process.stdout.write('*');\n    }\n    console.log();\n}",
        a: ["\\n*\\n**", "*\\n**\\n***", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop dalam mencetak segitiga bertingkat bintang."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 4; i++) {\n    console.log('A'.repeat(i));\n}",
        a: ["A AA AAA", "AAA AA A", "A A A", "Error"],
        correct: 0,
        pembahasan: "i=1→'A', i=2→'AA', i=3→'AAA'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 2; i < 8; i += 3) {\n    console.log(i);\n}",
        a: ["2 5", "2 3 4 5", "2 5 8", "Error"],
        correct: 0,
        pembahasan: "Loop dengan langkah 3 menghasilkan 2 dan 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 2; j++) {\n        console.log(i + j);\n    }\n}",
        a: ["0 1 1 2 2 3", "0 1 2 3 4", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Kombinasi i+j menghasilkan pola 0,1,1,2,2,3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let total = 0;\nfor (let i = 1; i < 4; i++) {\n    total += i;\n}\nconsole.log(total);",
        a: ["6", "10", "3", "Error"],
        correct: 0,
        pembahasan: "1 + 2 + 3 = 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let i = 0;\nwhile (i < 4) {\n    i++;\n}\nconsole.log(i);",
        a: ["4", "3", "5", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i mencapai 4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 5; i++) {\n    if (i === 3) continue;\n    console.log(i);\n}",
        a: ["0 1 2 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Melewati angka 3 karena continue."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    console.log(i);\n}\nconsole.log('Selesai');",
        a: ["0 1 2 Selesai", "0 1 2", "Selesai", "Error"],
        correct: 0,
        pembahasan: "Bagian setelah for dijalankan setelah loop selesai."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 0;\nwhile (x < 3) {\n    console.log('Loop', x);\n    x++;\n}\nconsole.log('Done');",
        a: ["Loop 0 Loop 1 Loop 2 Done", "Loop Done", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop while berakhir normal, lalu cetak 'Done'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 4; i++) {\n    for (let j = 1; j < 3; j++) {\n        console.log(i * j);\n    }\n}",
        a: ["1 2 2 4 3 6", "1 2 3 4 5 6", "2 4 6", "Error"],
        correct: 0,
        pembahasan: "Perkalian kombinasi i×j menghasilkan 1, 2, 2, 4, 3, 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 3; j++) {\n        if (i === j) console.log(i);\n    }\n}",
        a: ["0 1 2", "0 0 1 1 2 2", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Cetak hanya saat i === j → 0, 1, 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 1;\nwhile (x < 10) {\n    x *= 2;\n}\nconsole.log(x);",
        a: ["16", "8", "10", "Error"],
        correct: 0,
        pembahasan: "x dikali 2 terus hingga mencapai 16."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 4; i > 0; i--) {\n    console.log(i);\n}",
        a: ["4 3 2 1", "1 2 3 4", "4 3 2", "Error"],
        correct: 0,
        pembahasan: "Loop mundur dari 4 ke 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    if (i === 1) break;\n    console.log(i);\n}",
        a: ["0", "1", "0 1", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti di i === 1, hanya cetak 0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = [1, 2, 3];\nfor (let i of x) {\n    if (i % 2 === 0) console.log(i);\n}",
        a: ["2", "1 2", "1 3", "Error"],
        correct: 0,
        pembahasan: "Hanya angka genap (2) yang dicetak."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 1; i < 4; i++) {\n    console.log('*'.repeat(i));\n}",
        a: ["* ** ***", "*** ** *", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop menghasilkan segitiga bintang bertingkat."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 2; i++) {\n    for (let j = 0; j < 2; j++) {\n        process.stdout.write((i + j) + ' ');\n    }\n}",
        a: ["0 1 1 2", "1 2 3 4", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "i=0→(0,1), i=1→(1,2)."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let i = 0;\nwhile (i < 3) {\n    console.log('*');\n    i++;\n}",
        a: ["* * *", "*", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop while mencetak '*' sebanyak 3 kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    if (i === 1) continue;\n    console.log('A', i);\n}",
        a: ["A 0 A 2", "A 0 A 1 A 2", "A 1 A 2", "Error"],
        correct: 0,
        pembahasan: "Melewati i === 1, hanya mencetak 0 dan 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 5;\nwhile (x > 0) {\n    x -= 2;\n}\nconsole.log(x);",
        a: ["-1", "1", "0", "Error"],
        correct: 0,
        pembahasan: "x berkurang 2 tiap iterasi → terakhir -1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let i = 1;\nwhile (i <= 3) {\n    console.log(i * i);\n    i++;\n}",
        a: ["1 4 9", "1 2 3", "2 4 6", "Error"],
        correct: 0,
        pembahasan: "Setiap iterasi mencetak kuadrat dari i → 1, 4, 9."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for (let i = 0; i < 3; i++) {\n    for (let j = 0; j <= i; j++) {\n        console.log(i + '-' + j);\n    }\n}",
        a: ["0-0 1-0 1-1 2-0 2-1 2-2", "0-0 1-1 2-2", "0-0 1-0 2-0", "Error"],
        correct: 0,
        pembahasan: "Loop bersarang menghasilkan kombinasi i-j untuk setiap nilai i dan j ≤ i."
    }

];
// MULAI QUIZ
renderQuiz();