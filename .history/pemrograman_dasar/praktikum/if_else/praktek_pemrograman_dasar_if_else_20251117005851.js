let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MENENGAH (IF-ELSE) ===================

    {
        q: "Apa output dari kode berikut?",
        code: "let x = 10;\nlet y = 5;\nif (x > y) {\n    console.log('A');\n} else {\n    console.log('B');\n}",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Karena 10 > 5, maka kondisi benar dan mencetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 3;\nif (x === 3) {\n    console.log('Benar');\n} else {\n    console.log('Salah');\n}",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Kondisi x === 3 terpenuhi, maka mencetak 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 7;\nif (x % 2 === 0) {\n    console.log('Genap');\n} else {\n    console.log('Ganjil');\n}",
        a: ["Genap", "Ganjil", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "7 tidak habis dibagi 2, maka 'Ganjil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 10;\nif (x > 10) {\n    console.log('Lebih');\n} else if (x === 10) {\n    console.log('Sama');\n} else {\n    console.log('Kurang');\n}",
        a: ["Lebih", "Sama", "Kurang", "Error"],
        correct: 1,
        pembahasan: "x === 10 terpenuhi, maka 'Sama'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = 5;\nlet b = 8;\nif (a < b) {\n    console.log('A');\n}\nif (b < 10) {\n    console.log('B');\n}",
        a: ["A", "B", "A\\nB", "Tidak ada output"],
        correct: 2,
        pembahasan: "Kedua kondisi benar, maka mencetak 'A' lalu 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 4;\nif (x > 0) {\n    console.log('Positif');\n} else {\n    console.log('Negatif');\n}",
        a: ["Positif", "Negatif", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x bernilai 4 (>0), maka 'Positif'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = -2;\nif (x >= 0) {\n    console.log('A');\n} else {\n    console.log('B');\n}",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "x negatif, maka kondisi else dijalankan."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = 2;\nlet b = 3;\nif (a * b === 6) {\n    console.log('Benar');\n} else {\n    console.log('Salah');\n}",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "2 * 3 = 6, maka kondisi benar."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 10;\nif (x % 3 === 1) {\n    console.log('A');\n} else if (x % 3 === 2) {\n    console.log('B');\n} else {\n    console.log('C');\n}",
        a: ["A", "B", "C", "Error"],
        correct: 0,
        pembahasan: "10 % 3 = 1 → cetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 5;\nlet y = 10;\nif (x > 2 && y > 5) {\n    console.log('OK');\n}",
        a: ["OK", "Error", "Tidak ada output", "False"],
        correct: 0,
        pembahasan: "Kedua kondisi benar, maka 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 5;\nlet y = 10;\nif (x > 2 || y < 5) {\n    console.log('Benar');\n} else {\n    console.log('Salah');\n}",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Kondisi pertama sudah benar, maka 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 0;\nif (!x) {\n    console.log('Kosong');\n}",
        a: ["Kosong", "Error", "False", "Tidak ada output"],
        correct: 0,
        pembahasan: "x = 0 dianggap false, jadi !x bernilai true → cetak 'Kosong'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 10;\nif (x < 0) {\n    console.log('Negatif');\n} else {\n    if (x === 0) {\n        console.log('Nol');\n    } else {\n        console.log('Positif');\n    }\n}",
        a: ["Negatif", "Nol", "Positif", "Error"],
        correct: 2,
        pembahasan: "x = 10 → masuk else bagian kedua → 'Positif'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = 5;\nlet b = 10;\nif (b % a === 0) {\n    console.log('Bagi');\n} else {\n    console.log('Tidak');\n}",
        a: ["Bagi", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "10 % 5 = 0 → habis dibagi → 'Bagi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 4;\nif (x % 2 === 0) {\n    console.log('Genap');\n}\nif (x % 4 === 0) {\n    console.log('Kelipatan 4');\n}",
        a: ["Genap", "Kelipatan 4", "Genap\\nKelipatan 4", "Tidak ada output"],
        correct: 2,
        pembahasan: "Kedua kondisi benar, keduanya dieksekusi."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = 3;\nlet b = 7;\nif (a * 2 === b) {\n    console.log('Cocok');\n} else {\n    console.log('Tidak');\n}",
        a: ["Cocok", "Tidak", "Error", "None"],
        correct: 1,
        pembahasan: "3 * 2 = 6 ≠ 7, maka else dijalankan."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 5;\nif (x > 10) {\n    console.log('Besar');\n} else if (x > 3) {\n    console.log('Sedang');\n} else {\n    console.log('Kecil');\n}",
        a: ["Besar", "Sedang", "Kecil", "Error"],
        correct: 1,
        pembahasan: "x = 5 > 3 maka 'Sedang'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = 8;\nif (a % 4 === 0) {\n    console.log('Ya');\n} else {\n    console.log('Tidak');\n}",
        a: ["Ya", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "8 habis dibagi 4 → 'Ya'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 10;\nif (x > 0) {\n    console.log('A');\n}\nif (x > 5) {\n    console.log('B');\n}",
        a: ["A", "B", "A\\nB", "Tidak ada output"],
        correct: 2,
        pembahasan: "Kedua kondisi benar → 'A' dan 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 9;\nlet y = 3;\nif (x % y === 0 && x > y) {\n    console.log('OK');\n} else {\n    console.log('NO');\n}",
        a: ["OK", "NO", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "9 % 3 === 0 dan 9 > 3 → 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 0;\nif (x) {\n    console.log('True');\n} else {\n    console.log('False');\n}",
        a: ["True", "False", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "x = 0 dianggap false dalam if."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = 3;\nlet b = 5;\nif (a + b > 10) {\n    console.log('Besar');\n} else {\n    console.log('Kecil');\n}",
        a: ["Besar", "Kecil", "Error", "None"],
        correct: 1,
        pembahasan: "3 + 5 = 8 < 10 → 'Kecil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = -1;\nif (x) {\n    console.log('True');\n} else {\n    console.log('False');\n}",
        a: ["True", "False", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Nilai non-zero dianggap true."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 15;\nif (x % 5 === 0) {\n    console.log('A');\n}\nif (x % 3 === 0) {\n    console.log('B');\n}",
        a: ["A", "B", "A\\nB", "Tidak ada output"],
        correct: 2,
        pembahasan: "15 habis dibagi 5 dan 3 → 'A' lalu 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 8;\nif (x < 5) {\n    console.log('Kecil');\n} else if (x < 10) {\n    console.log('Sedang');\n} else {\n    console.log('Besar');\n}",
        a: ["Kecil", "Sedang", "Besar", "Error"],
        correct: 1,
        pembahasan: "x < 10 terpenuhi → 'Sedang'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 5;\nif (x !== 5) {\n    console.log('A');\n} else {\n    console.log('B');\n}",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "x === 5 → kondisi if salah → 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = 4;\nlet b = 2;\nif (a / b === 2) {\n    console.log('Cocok');\n} else {\n    console.log('Tidak');\n}",
        a: ["Cocok", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "4 / 2 = 2 → kondisi benar."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 6;\nif (x % 3 === 0) {\n    console.log('Kelipatan 3');\n}",
        a: ["Kelipatan 3", "Error", "Tidak ada output", "False"],
        correct: 0,
        pembahasan: "6 habis dibagi 3 → 'Kelipatan 3'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 10;\nif (x % 2 === 0 && x % 5 === 0) {\n    console.log('Ya');\n} else {\n    console.log('Tidak');\n}",
        a: ["Ya", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "10 habis dibagi 2 dan 5 → 'Ya'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = 3;\nlet b = 3;\nif (a === b) {\n    console.log('Sama');\n} else {\n    console.log('Beda');\n}",
        a: ["Sama", "Beda", "Error", "None"],
        correct: 0,
        pembahasan: "a dan b sama → 'Sama'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 5;\nlet y = 15;\nif (y / x === 3) {\n    console.log('OK');\n}",
        a: ["OK", "Error", "Tidak ada output", "False"],
        correct: 0,
        pembahasan: "15 / 5 = 3 → kondisi benar → cetak 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 4;\nlet y = 9;\nif (x % 2 === 0 && y % 3 === 0) {\n    console.log('A');\n} else {\n    console.log('B');\n}",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "4 genap dan 9 habis dibagi 3 → kondisi benar → cetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 7;\nlet y = 14;\nif (y / x === 2) {\n    if (y % x === 0) {\n        console.log('Benar');\n    } else {\n        console.log('Salah');\n    }\n} else {\n    console.log('Tidak');\n}",
        a: ["Benar", "Salah", "Tidak", "Error"],
        correct: 0,
        pembahasan: "14 / 7 = 2 dan 14 % 7 = 0 → kedua kondisi benar → 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = 10;\nlet b = 5;\nif (a > b) {\n    if (a - b === 5) {\n        console.log('OK');\n    } else {\n        console.log('X');\n    }\n} else {\n    console.log('NO');\n}",
        a: ["OK", "X", "NO", "Error"],
        correct: 0,
        pembahasan: "10 > 5 dan selisihnya 5 → 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 3;\nlet y = 5;\nlet z = 7;\nif (x < y && y < z) {\n    console.log('Naik');\n} else {\n    console.log('Turun');\n}",
        a: ["Naik", "Turun", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "3 < 5 < 7 benar → 'Naik'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = 'abc';\nif (x.length === 3 && x[0] === 'a') {\n    console.log('Valid');\n} else {\n    console.log('Invalid');\n}",
        a: ["Valid", "Invalid", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Panjang string 3 dan huruf pertama 'a' → 'Valid'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let nilai = 75;\nif (nilai >= 90) {\n    console.log('A');\n} else if (nilai >= 80) {\n    console.log('B');\n} else if (nilai >= 70) {\n    console.log('C');\n} else {\n    console.log('D');\n}",
        a: ["A", "B", "C", "D"],
        correct: 2,
        pembahasan: "75 >= 70 tapi < 80 → 'C'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = true;\nlet y = false;\nif (!y && x) {\n    console.log('Benar');\n} else {\n    console.log('Salah');\n}",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "!false = true dan x true → keduanya benar → 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let nilai = 75;\nif (nilai >= 90) {\n    console.log('A');\n} else if (nilai >= 80) {\n    console.log('B');\n} else if (nilai >= 70) {\n    console.log('C');\n} else {\n    console.log('D');\n}",
        a: ["A", "B", "C", "D"],
        correct: 2,
        pembahasan: "75 >= 70 tapi < 80 → hasilnya 'C'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let x = true;\nlet y = false;\nif (!y && x) {\n    console.log('Benar');\n} else {\n    console.log('Salah');\n}",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "!false = true dan x = true → kondisi benar → cetak 'Benar'."
    }
];