let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MENENGAH (IF-ELSE) ===================

    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\ny = 5\nif x > y:\n    print('A')\nelse:\n    print('B')",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Karena 10 > 5, maka kondisi benar dan mencetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 3\nif x == 3:\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Kondisi x == 3 terpenuhi, maka mencetak 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 7\nif x % 2 == 0:\n    print('Genap')\nelse:\n    print('Ganjil')",
        a: ["Genap", "Ganjil", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "7 tidak habis dibagi 2, maka 'Ganjil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x > 10:\n    print('Lebih')\nelif x == 10:\n    print('Sama')\nelse:\n    print('Kurang')",
        a: ["Lebih", "Sama", "Kurang", "Error"],
        correct: 1,
        pembahasan: "x == 10 terpenuhi, maka 'Sama'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 5\nb = 8\nif a < b:\n    print('A')\nif b < 10:\n    print('B')",
        a: ["A", "B", "A\\nB", "Tidak ada output"],
        correct: 2,
        pembahasan: "Kedua kondisi benar, maka mencetak 'A' lalu 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 4\nif x > 0:\n    print('Positif')\nelse:\n    print('Negatif')",
        a: ["Positif", "Negatif", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "x bernilai 4 (>0), maka 'Positif'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = -2\nif x >= 0:\n    print('A')\nelse:\n    print('B')",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "x negatif, maka kondisi else dijalankan."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 2\nb = 3\nif a * b == 6:\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "2*3 = 6, maka kondisi benar."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x % 3 == 1:\n    print('A')\nelif x % 3 == 2:\n    print('B')\nelse:\n    print('C')",
        a: ["A", "B", "C", "Error"],
        correct: 1,
        pembahasan: "10 % 3 = 1, sisanya 1 → cetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\ny = 10\nif x > 2 and y > 5:\n    print('OK')",
        a: ["OK", "Error", "Tidak ada output", "False"],
        correct: 0,
        pembahasan: "Kedua kondisi benar, maka 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\ny = 10\nif x > 2 or y < 5:\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Kondisi pertama sudah benar, maka 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 0\nif not x:\n    print('Kosong')",
        a: ["Kosong", "Error", "False", "Tidak ada output"],
        correct: 0,
        pembahasan: "x = 0 dianggap False, jadi not False = True → cetak 'Kosong'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x < 0:\n    print('Negatif')\nelse:\n    if x == 0:\n        print('Nol')\n    else:\n        print('Positif')",
        a: ["Negatif", "Nol", "Positif", "Error"],
        correct: 2,
        pembahasan: "x = 10 → masuk else bagian kedua → 'Positif'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 5\nb = 10\nif b % a == 0:\n    print('Bagi')\nelse:\n    print('Tidak')",
        a: ["Bagi", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "10 % 5 = 0 → habis dibagi → 'Bagi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 4\nif x % 2 == 0:\n    print('Genap')\nif x % 4 == 0:\n    print('Kelipatan 4')",
        a: ["Genap", "Kelipatan 4", "Genap\\nKelipatan 4", "Tidak ada output"],
        correct: 2,
        pembahasan: "Kedua kondisi benar, keduanya dieksekusi."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 3\nb = 7\nif a * 2 == b:\n    print('Cocok')\nelse:\n    print('Tidak')",
        a: ["Cocok", "Tidak", "Error", "None"],
        correct: 1,
        pembahasan: "3*2 = 6 ≠ 7, maka else dijalankan."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\nif x > 10:\n    print('Besar')\nelif x > 3:\n    print('Sedang')\nelse:\n    print('Kecil')",
        a: ["Besar", "Sedang", "Kecil", "Error"],
        correct: 1,
        pembahasan: "x=5 > 3 maka 'Sedang'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 8\nif a % 4 == 0:\n    print('Ya')\nelse:\n    print('Tidak')",
        a: ["Ya", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "8 habis dibagi 4 → 'Ya'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 7\nif x % 2 == 0:\n    print('Genap')\nelse:\n    print('Ganjil')",
        a: ["Genap", "Ganjil", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "7 tidak habis dibagi 2 → 'Ganjil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x > 0:\n    print('A')\nif x > 5:\n    print('B')",
        a: ["A", "B", "A\\nB", "Tidak ada output"],
        correct: 2,
        pembahasan: "Kedua kondisi benar → 'A' dan 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 9\ny = 3\nif x % y == 0 and x > y:\n    print('OK')\nelse:\n    print('NO')",
        a: ["OK", "NO", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "9 % 3 == 0 dan 9 > 3 → 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 0\nif x:\n    print('True')\nelse:\n    print('False')",
        a: ["True", "False", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "x=0 dianggap False dalam if."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 3\nb = 5\nif a + b > 10:\n    print('Besar')\nelse:\n    print('Kecil')",
        a: ["Besar", "Kecil", "Error", "None"],
        correct: 1,
        pembahasan: "3+5=8 <10 → 'Kecil'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = -1\nif x:\n    print('True')\nelse:\n    print('False')",
        a: ["True", "False", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Nilai non-zero dianggap True."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 15\nif x % 5 == 0:\n    print('A')\nif x % 3 == 0:\n    print('B')",
        a: ["A", "B", "A\\nB", "Tidak ada output"],
        correct: 2,
        pembahasan: "15 habis dibagi 5 dan 3 → 'A' lalu 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 8\nif x < 5:\n    print('Kecil')\nelif x < 10:\n    print('Sedang')\nelse:\n    print('Besar')",
        a: ["Kecil", "Sedang", "Besar", "Error"],
        correct: 1,
        pembahasan: "x < 10 terpenuhi → 'Sedang'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\nif x != 5:\n    print('A')\nelse:\n    print('B')",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "x == 5 → kondisi if salah → 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 4\nb = 2\nif a / b == 2:\n    print('Cocok')\nelse:\n    print('Tidak')",
        a: ["Cocok", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "4 / 2 = 2 → kondisi benar."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 6\nif x % 3 == 0:\n    print('Kelipatan 3')",
        a: ["Kelipatan 3", "Error", "Tidak ada output", "False"],
        correct: 0,
        pembahasan: "6 habis dibagi 3 → 'Kelipatan 3'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 10\nif x % 2 == 0 and x % 5 == 0:\n    print('Ya')\nelse:\n    print('Tidak')",
        a: ["Ya", "Tidak", "Error", "None"],
        correct: 0,
        pembahasan: "10 habis dibagi 2 dan 5 → 'Ya'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 3\nb = 3\nif a == b:\n    print('Sama')\nelse:\n    print('Beda')",
        a: ["Sama", "Beda", "Error", "None"],
        correct: 0,
        pembahasan: "a dan b sama → 'Sama'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\ny = 15\nif y / x == 3:\n    print('OK')",
        a: ["OK", "Error", "Tidak ada output", "False"],
        correct: 0,
        pembahasan: "15/5 = 3 → kondisi benar → cetak 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 8\nif x % 2 == 0:\n    print('Genap')\nelse:\n    print('Ganjil')",
        a: ["Genap", "Ganjil", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "8 habis dibagi 2 → 'Genap'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 4\ny = 9\nif (x % 2 == 0 and y % 3 == 0):\n    print('A')\nelse:\n    print('B')",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "4 genap dan 9 habis dibagi 3 → kondisi benar → cetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 7\ny = 14\nif y / x == 2:\n    if y % x == 0:\n        print('Benar')\n    else:\n        print('Salah')\nelse:\n    print('Tidak')",
        a: ["Benar", "Salah", "Tidak", "Error"],
        correct: 0,
        pembahasan: "14/7=2 dan 14%7=0 → kedua kondisi benar → 'Benar'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = 10\nb = 5\nif a > b:\n    if a - b == 5:\n        print('OK')\n    else:\n        print('X')\nelse:\n    print('NO')",
        a: ["OK", "X", "NO", "Error"],
        correct: 0,
        pembahasan: "10 > 5 dan selisihnya 5 → 'OK'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 3\ny = 5\nz = 7\nif x < y < z:\n    print('Naik')\nelse:\n    print('Turun')",
        a: ["Naik", "Turun", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "3 < 5 < 7 benar → 'Naik'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 'abc'\nif len(x) == 3 and x[0] == 'a':\n    print('Valid')\nelse:\n    print('Invalid')",
        a: ["Valid", "Invalid", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Panjang string 3 dan huruf pertama 'a' → 'Valid'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "nilai = 75\nif nilai >= 90:\n    print('A')\nelif nilai >= 80:\n    print('B')\nelif nilai >= 70:\n    print('C')\nelse:\n    print('D')",
        a: ["A", "B", "C", "D"],
        correct: 2,
        pembahasan: "75 >= 70 tapi < 80 → 'C'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = True\ny = False\nif not y and x:\n    print('Benar')\nelse:\n    print('Salah')",
        a: ["Benar", "Salah", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "not False = True dan x True → keduanya benar → 'Benar'."
    }
];
