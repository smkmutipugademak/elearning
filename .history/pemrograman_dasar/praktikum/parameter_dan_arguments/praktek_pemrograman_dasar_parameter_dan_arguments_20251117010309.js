let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "function sapa(nama) {\n    console.log('Halo', nama);\n}\n\nsapa('Budi');",
        a: ["Halo", "nama", "Halo Budi", "Error"],
        correct: 2,
        pembahasan: "Fungsi menerima argumen 'Budi' lalu mencetak 'Halo Budi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tambah(a, b) {\n    console.log(a + b);\n}\n\ntambah(2, 3);",
        a: ["23", "5", "2 + 3", "Error"],
        correct: 1,
        pembahasan: "Menjumlahkan 2 + 3 menghasilkan 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function cetak(nama = 'Andi') {\n    console.log(nama);\n}\n\ncetak();",
        a: ["Andi", "Error", "nama", "undefined"],
        correct: 0,
        pembahasan: "Parameter default digunakan jika tidak ada argumen, jadi mencetak 'Andi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function kali(x, y = 2) {\n    return x * y;\n}\n\nconsole.log(kali(4));",
        a: ["8", "6", "4", "Error"],
        correct: 0,
        pembahasan: "y bernilai default 2, jadi 4 * 2 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tampil(nama, umur) {\n    console.log(nama, umur);\n}\n\ntampil('Ayu', 18);",
        a: ["nama umur", "Ayu 18", "18 Ayu", "Error"],
        correct: 1,
        pembahasan: "Argumen diberikan sesuai urutan parameter: 'Ayu' dan 18."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tambah(a, b) {\n    return a + b;\n}\n\nlet hasil = tambah(5, 10);\nconsole.log(hasil);",
        a: ["15", "510", "a + b", "Error"],
        correct: 0,
        pembahasan: "Fungsi mengembalikan hasil penjumlahan 5 + 10 = 15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function hello() {\n    return 'Hai Dunia';\n}\n\nconsole.log(hello());",
        a: ["Hai Dunia", "undefined", "hello", "Error"],
        correct: 0,
        pembahasan: "Fungsi mengembalikan string 'Hai Dunia' yang dicetak oleh console.log()."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function total(a, b = 5) {\n    return a + b;\n}\n\nconsole.log(total(3));",
        a: ["8", "35", "Error", "5"],
        correct: 0,
        pembahasan: "Parameter kedua default 5, jadi 3 + 5 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function show(nama, kota = 'Bandung') {\n    console.log(nama, kota);\n}\n\nshow('Rina');",
        a: ["Rina Bandung", "kota Rina", "Rina", "Error"],
        correct: 0,
        pembahasan: "Default parameter digunakan untuk 'kota', jadi hasilnya 'Rina Bandung'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function hitung(a, b) {\n    return a - b;\n}\n\nconsole.log(hitung(10, 3));",
        a: ["7", "13", "-7", "Error"],
        correct: 0,
        pembahasan: "Hasil pengurangan 10 - 3 = 7."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "function fungsi(a, b, c = 3) {\n    console.log(a + b + c);\n}\n\nfungsi(1, 2);",
        a: ["3", "6", "Error", "12"],
        correct: 1,
        pembahasan: "c menggunakan default 3 → 1 + 2 + 3 = 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function test(a, b) {\n    return a * b;\n}\n\nconsole.log(test(2, 4));",
        a: ["8", "24", "Error", "6"],
        correct: 0,
        pembahasan: "Fungsi dikirim argumen sesuai posisi, hasilnya 2 * 4 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function sapa(nama1, nama2 = 'Budi') {\n    console.log('Hai', nama1, 'dan', nama2);\n}\n\nsapa('Ani');",
        a: ["Hai Ani dan Budi", "Hai Budi dan Ani", "Error", "Hai Ani"],
        correct: 0,
        pembahasan: "Parameter nama2 punya nilai default 'Budi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function data(...args) {\n    console.log(args);\n}\n\ndata(1, 2, 3);",
        a: ["[1, 2, 3]", "(1, 2, 3)", "1 2 3", "Error"],
        correct: 0,
        pembahasan: "Rest parameter ...args menampung semua argumen sebagai array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tampil(obj) {\n    console.log(obj);\n}\n\ntampil({nama: 'Doni', umur: 20});",
        a: ["{nama: 'Doni', umur: 20}", "['Doni', 20]", "('Doni', 20)", "Error"],
        correct: 0,
        pembahasan: "Objek dalam JavaScript ditulis dengan tanda kurung kurawal."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tampil(...args) {\n    for (let a of args) {\n        process.stdout.write(a + ' ');\n    }\n}\n\ntampil('A', 'B', 'C');",
        a: ["A B C ", "['A', 'B', 'C']", "('A', 'B', 'C')", "Error"],
        correct: 0,
        pembahasan: "Rest parameter dapat diiterasi dengan for-of."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function combine(a, ...args) {\n    console.log(a, args);\n}\n\ncombine(1, 2, 3);",
        a: ["1 [2, 3]", "1 (2, 3)", "Error", "1 2 3"],
        correct: 0,
        pembahasan: "Argumen pertama masuk ke a, sisanya disimpan dalam array args."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function showInfo(info) {\n    for (let key in info) {\n        console.log(key, info[key]);\n    }\n}\n\nshowInfo({nama: 'Ari', umur: 19});",
        a: ["nama Ari\\numur 19", "('nama', 'Ari')", "Error", "None"],
        correct: 0,
        pembahasan: "Loop for-in menampilkan pasangan key dan value dari objek."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function test(x, y = 10) {\n    return x + y;\n}\n\nconsole.log(test(7, 3));",
        a: ["10", "13", "Error", "7"],
        correct: 1,
        pembahasan: "Nilai 7 dan 3 dijumlahkan menghasilkan 10."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f(x, y, z) {\n    console.log(x, y, z);\n}\n\nlet data = [1, 2, 3];\nf(...data);",
        a: ["1 2 3", "(1, 2, 3)", "Error", "[1, 2, 3]"],
        correct: 0,
        pembahasan: "Operator spread `...` mengekstrak isi array ke parameter satu per satu."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa output dari kode berikut?",
        code: "function g(a, b = 2, c = 3) {\n    return a * b + c;\n}\n\nconsole.log(g(2));",
        a: ["7", "10", "8", "Error"],
        correct: 0,
        pembahasan: "a=2, b=2, c=3 → 2×2+3=7."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function fungsi(x, y) {\n    return x / y;\n}\n\nconsole.log(fungsi(10, 2));",
        a: ["5", "5.0", "Error", "0.5"],
        correct: 0,
        pembahasan: "10 / 2 = 5 hasilnya number."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f(x, y = 2, ...args) {\n    console.log(x, y, args);\n}\n\nf(1, 3, 5, 7);",
        a: ["1 3 [5, 7]", "1 3 (5, 7)", "Error", "1 3 5 7"],
        correct: 0,
        pembahasan: "Argumen ekstra disimpan dalam array args."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f(a, b, kwargs) {\n    console.log(a, b, kwargs);\n}\n\nf(1, 2, {x: 10, y: 20});",
        a: ["1 2 {x: 10, y: 20}", "Error", "1 2 (10,20)", "1 2 [10,20]"],
        correct: 0,
        pembahasan: "Objek {x:10, y:20} digunakan sebagai argumen ketiga."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function merge(a, b) {\n    return String(a) + String(b);\n}\n\nconsole.log(merge(2, 3));",
        a: ["23", "5", "Error", "a+b"],
        correct: 0,
        pembahasan: "Konversi ke string lalu digabung → '23'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function f(x, y) {\n    x = x + 1;\n    y = y + 2;\n    return x + y;\n}\n\nconsole.log(f(1, 1));",
        a: ["5", "3", "4", "Error"],
        correct: 0,
        pembahasan: "x jadi 2, y jadi 3 → hasil 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function calc(a, b) {\n    return a ** b;\n}\n\nconsole.log(calc(2, 3));",
        a: ["8", "6", "23", "Error"],
        correct: 0,
        pembahasan: "2 pangkat 3 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function tes(x, y = 5) {\n    return x + y;\n}\n\nconsole.log(tes(5, 10));",
        a: ["15", "10", "Error", "5"],
        correct: 0,
        pembahasan: "Argumen kedua menimpa default-nya, jadi 5+10=15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function data(a, b, c = 5) {\n    console.log(a, b, c);\n}\n\ndata(1, 2, 3);",
        a: ["1 2 3", "Error", "1 3 2", "1 c=3 b=2"],
        correct: 0,
        pembahasan: "Parameter dikirim sesuai urutan."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "function hitung(a, b) {\n    return a + b;\n}\n\nconsole.log(hitung(4, 5));",
        a: ["9", "45", "Error", "5"],
        correct: 0,
        pembahasan: "Urutan parameter tidak masalah karena sesuai posisi, hasil 4 + 5 = 9."
    }
];
// MULAI QUIZ
renderQuiz();