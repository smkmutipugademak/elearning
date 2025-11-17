let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (FOR & WHILE DASAR) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    print('Hai')",
        a: ["HaiHaiHai", "Hai", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop berjalan 3 kali, mencetak 'Hai' sebanyak 3 kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    print(i)",
        a: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "range(3) menghasilkan 0,1,2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1, 4):\n    print(i)",
        a: ["1 2 3", "0 1 2", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "range(1,4) menghasilkan 1,2,3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
        a: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop berjalan selama i < 3, yaitu 0,1,2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for huruf in 'abc':\n    print(huruf)",
        a: ["a b c", "abc", "a,b,c", "Error"],
        correct: 0,
        pembahasan: "Loop berjalan untuk setiap karakter string."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in [1, 2, 3]:\n    print(i * 2)",
        a: ["2 4 6", "1 2 3", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Setiap elemen dikali 2 menghasilkan 2,4,6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(5):\n    if i == 3:\n        break\n    print(i)",
        a: ["0 1 2", "0 1 2 3", "1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i == 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
        a: ["0 1 3 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "continue melewati nilai 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "count = 0\nwhile count < 5:\n    print(count)\n    count += 2",
        a: ["0 2 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "count bertambah 2 tiap iterasi → 0,2,4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1, 6, 2):\n    print(i)",
        a: ["1 3 5", "2 4 6", "1 2 3 4 5", "Error"],
        correct: 0,
        pembahasan: "Langkah 2 → hasilnya 1,3,5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    print('Loop', i)",
        a: ["Loop 0 Loop 1 Loop 2", "Loop Loop Loop", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Print menampilkan teks dan indeks loop."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [2, 4, 6]\nfor i in angka:\n    print(i - 1)",
        a: ["1 3 5", "2 4 6", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Setiap elemen dikurangi 1 → 1,3,5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(2):\n        print(i, j)",
        a: ["00 01 10 11 20 21", "0 1 2", "0 0 1 1 2 2", "Error"],
        correct: 0,
        pembahasan: "Loop bersarang: i=0→1→2, j=0→1 tiap kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "i = 3\nwhile i > 0:\n    print(i)\n    i -= 1",
        a: ["3 2 1", "1 2 3", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop mundur dari 3 hingga 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(2):\n    print('A')\nprint('B')",
        a: ["A A B", "A B A", "B A A", "Error"],
        correct: 0,
        pembahasan: "'A' dua kali, lalu 'B' di luar loop."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 1\nwhile x < 5:\n    print(x)\n    x += 3",
        a: ["1 4", "1 2 3 4", "1 2 4", "Error"],
        correct: 0,
        pembahasan: "x naik +3 tiap iterasi → 1,4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(4):\n    if i % 2 == 0:\n        print(i)",
        a: ["0 2", "1 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Cetak hanya bilangan genap → 0,2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1, 5):\n    if i == 3:\n        break\n    print(i)",
        a: ["1 2", "1 2 3", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i == 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(i):\n        print('*', end='')\n    print()",
        a: ["\\n*\\n**", "*\\n**\\n***", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop dalam mencetak segitiga bertingkat bintang."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1, 4):\n    print(i * 'A')",
        a: ["A AA AAA", "AAA AA A", "A A A", "Error"],
        correct: 0,
        pembahasan: "i=1→'A', i=2→'AA', i=3→'AAA'."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(2, 8, 3):\n    print(i)",
        a: ["2 5", "2 3 4 5", "2 5 8", "Error"],
        correct: 0,
        pembahasan: "range(2,8,3) menghasilkan 2 dan 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(2):\n        print(i+j)",
        a: ["0 1 1 2 2 3", "0 1 2 3 4", "0 1 2", "Error"],
        correct: 0,
        pembahasan: "Setiap kombinasi i+j menghasilkan pola 0,1,1,2,2,3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "total = 0\nfor i in range(1,4):\n    total += i\nprint(total)",
        a: ["6", "10", "3", "Error"],
        correct: 0,
        pembahasan: "1+2+3=6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "i = 0\nwhile i < 4:\n    i += 1\nprint(i)",
        a: ["4", "3", "5", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti saat i=4."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(5):\n    if i == 3:\n        continue\n    print(i)",
        a: ["0 1 2 4", "0 1 2 3 4", "1 2 3 4", "Error"],
        correct: 0,
        pembahasan: "Melewati angka 3 karena continue."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    print(i)\nelse:\n    print('Selesai')",
        a: ["0 1 2 Selesai", "0 1 2", "Selesai", "Error"],
        correct: 0,
        pembahasan: "Bagian else dijalankan setelah for selesai."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 0\nwhile x < 3:\n    print('Loop', x)\n    x += 1\nelse:\n    print('Done')",
        a: ["Loop 0 Loop 1 Loop 2 Done", "Loop Done", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Bagian else dijalankan jika while berakhir normal."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1,4):\n    for j in range(1,3):\n        print(i*j)",
        a: ["1 2 2 4 3 6", "1 2 3 4 5 6", "2 4 6", "Error"],
        correct: 0,
        pembahasan: "Perkalian kombinasi i×j menghasilkan 1,2,2,4,3,6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(3):\n        if i == j:\n            print(i)",
        a: ["0 1 2", "0 0 1 1 2 2", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Cetak hanya saat i == j → 0,1,2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 1\nwhile x < 10:\n    x *= 2\nprint(x)",
        a: ["16", "8", "10", "Error"],
        correct: 0,
        pembahasan: "x bertambah dua kali lipat sampai 16."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(4, 0, -1):\n    print(i)",
        a: ["4 3 2 1", "1 2 3 4", "4 3 2", "Error"],
        correct: 0,
        pembahasan: "Loop mundur dari 4 ke 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    if i == 1:\n        break\n    print(i)",
        a: ["0", "1", "0 1", "Error"],
        correct: 0,
        pembahasan: "Loop berhenti di i==1, hanya cetak 0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = [1, 2, 3]\nfor i in x:\n    if i % 2 == 0:\n        print(i)",
        a: ["2", "1 2", "1 3", "Error"],
        correct: 0,
        pembahasan: "Hanya angka genap 2 yang dicetak."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1,4):\n    print('*' * i)",
        a: ["* ** ***", "*** ** *", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop menghasilkan segitiga bintang bertingkat."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(2):\n    for j in range(2):\n        print(i+j, end=' ')",
        a: ["0 1 1 2", "1 2 3 4", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "i=0→(0,1), i=1→(1,2)."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "i = 0\nwhile i < 3:\n    print('*')\n    i += 1",
        a: ["* * *", "*", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop while mencetak '*' sebanyak 3 kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    if i == 1:\n        continue\n    print('A', i)",
        a: ["A 0 A 2", "A 0 A 1 A 2", "A 1 A 2", "Error"],
        correct: 0,
        pembahasan: "Melewati i==1, hanya cetak 0 dan 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "x = 5\nwhile x > 0:\n    x -= 2\nprint(x)",
        a: ["-1", "1", "0", "Error"],
        correct: 0,
        pembahasan: "x berkurang 2 tiap loop → berhenti saat -1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(1,6):\n    if i % 3 == 0:\n        print('Fizz')\n    else:\n        print(i)",
        a: ["1 2 Fizz 4 5", "1 2 3 4 5", "Fizz Fizz Fizz", "Error"],
        correct: 0,
        pembahasan: "Setiap kelipatan 3 diganti 'Fizz'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "for i in range(3):\n    for j in range(i+1):\n        print(j, end=' ')\n    print()",
        a: ["0 \\n0 1 \\n0 1 2", "1 2 3", "0 1 2 3", "Error"],
        correct: 0,
        pembahasan: "Loop bersarang membuat pola tangga angka."
    }
];