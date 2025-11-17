let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL DASAR ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "const f = x => x + 2;\nconsole.log(f(3));",
        a: ["5", "6", "3", "Error"],
        correct: 0,
        pembahasan: "Arrow function menambah 2 ke x, jadi hasilnya 3 + 2 = 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const g = (x, y) => x * y;\nconsole.log(g(2, 3));",
        a: ["6", "5", "8", "Error"],
        correct: 0,
        pembahasan: "Arrow function mengalikan 2 × 3 = 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const f = () => 10;\nconsole.log(f());",
        a: ["10", "undefined", "Error", "f"],
        correct: 0,
        pembahasan: "Arrow function tanpa argumen bisa mengembalikan nilai tetap."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const f = x => x ** 2;\nconsole.log(f(4));",
        a: ["16", "8", "4", "Error"],
        correct: 0,
        pembahasan: "4 pangkat 2 = 16."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const f = (x, y = 2) => x + y;\nconsole.log(f(3));",
        a: ["5", "3", "Error", "2"],
        correct: 0,
        pembahasan: "Parameter default y=2, jadi 3 + 2 = 5."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const f = (a, b) => a > b ? a : b;\nconsole.log(f(5, 9));",
        a: ["9", "5", "Error", "undefined"],
        correct: 0,
        pembahasan: "Operator ternary mengembalikan nilai terbesar → 9."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const f = x => x % 2 === 0 ? 'Genap' : 'Ganjil';\nconsole.log(f(7));",
        a: ["Ganjil", "Genap", "7", "Error"],
        correct: 0,
        pembahasan: "7 tidak habis dibagi 2 → Ganjil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const hasil = ((x, y) => x - y)(10, 3);\nconsole.log(hasil);",
        a: ["7", "13", "Error", "undefined"],
        correct: 0,
        pembahasan: "Arrow function langsung dipanggil, hasil 10 - 3 = 7."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const f = s => s.toUpperCase();\nconsole.log(f('halo'));",
        a: ["HALO", "halo", "Error", "undefined"],
        correct: 0,
        pembahasan: "Mengubah string menjadi huruf besar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const f = () => console.log('Hi');\nf();",
        a: ["Hi", "undefined", "Error", "lambda"],
        correct: 0,
        pembahasan: "Arrow function dapat berisi console.log() dan menampilkan 'Hi'."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "const angka = [1, 2, 3, 4];\nconst kuadrat = angka.map(x => x ** 2);\nconsole.log(kuadrat);",
        a: ["[1, 4, 9, 16]", "[2, 3, 4, 5]", "Error", "[]"],
        correct: 0,
        pembahasan: "map() menerapkan arrow function ke setiap elemen."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const data = [1, 2, 3, 4, 5];\nconst ganjil = data.filter(x => x % 2 !== 0);\nconsole.log(ganjil);",
        a: ["[1, 3, 5]", "[2, 4]", "Error", "[]"],
        correct: 0,
        pembahasan: "filter() memilih hanya bilangan ganjil."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const kata = ['apel', 'pisang', 'kiwi'];\nconst urut = kata.sort((a, b) => a.length - b.length);\nconsole.log(urut);",
        a: ["['kiwi', 'apel', 'pisang']", "['pisang', 'apel', 'kiwi']", "Error", "['apel', 'kiwi', 'pisang']"],
        correct: 0,
        pembahasan: "sort() mengurut berdasarkan panjang kata."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [5, 10, 15];\nconsole.log(data.map(x => x / 5));",
        a: ["[1, 2, 3]", "[5, 10, 15]", "Error", "undefined"],
        correct: 0,
        pembahasan: "Setiap elemen dibagi 5 menggunakan arrow function."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const f = x => x.split('').reverse().join('');\nconsole.log(f('abcd'));",
        a: ["dcba", "abcd", "Error", "undefined"],
        correct: 0,
        pembahasan: "Membalik string menggunakan method reverse()."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const f = x => (x > 0 ? 'Positif' : 'Negatif');\nconsole.log(f(-5));",
        a: ["Negatif", "Positif", "Error", "undefined"],
        correct: 0,
        pembahasan: "x < 0 maka hasilnya 'Negatif'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const f = x => x % 3 === 0;\nconsole.log(f(9));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "9 habis dibagi 3 → true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const angka = [1, 2, 3, 4, 5];\nconst hasil = angka.map(x => (x % 2 === 0 ? x : x * 10));\nconsole.log(hasil);",
        a: ["[10, 2, 30, 4, 50]", "[1, 2, 3, 4, 5]", "Error", "[2, 4]"],
        correct: 0,
        pembahasan: "Jika ganjil dikali 10, genap tetap."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const a = (x, y) => (x > y ? x : y);\nconsole.log(a(5, 8));",
        a: ["8", "5", "Error", "undefined"],
        correct: 0,
        pembahasan: "Mengembalikan nilai terbesar antara dua angka."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const fungsi = x => y => x + y;\nconsole.log(fungsi(2)(3));",
        a: ["5", "23", "Error", "undefined"],
        correct: 0,
        pembahasan: "Arrow function bersarang, hasil 2 + 3 = 5."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil kode berikut?",
        code: "const data = [10, 25, 30, 45];\nconst hasil = data.filter(x => x % 15 === 0);\nconsole.log(hasil);",
        a: ["[30, 45]", "[10, 25]", "[]", "Error"],
        correct: 0,
        pembahasan: "30 dan 45 habis dibagi 15."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const kata = ['python', 'ai', 'chatgpt'];\nconst urut = kata.sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));\nconsole.log(urut);",
        a: ["['ai', 'python', 'chatgpt']", "['chatgpt', 'python', 'ai']", "Error", "['python', 'ai', 'chatgpt']"],
        correct: 0,
        pembahasan: "Urut berdasarkan huruf terakhir tiap kata."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const f = x => [x + 5, x * 2];\nconsole.log(f(3));",
        a: ["[8, 6]", "8,6", "Error", "[8,6]"],
        correct: 0,
        pembahasan: "Arrow function dapat mengembalikan array."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const data = ['a', 'bb', 'ccc'];\nconsole.log(data.map(x => x.length));",
        a: ["[1, 2, 3]", "[3, 2, 1]", "Error", "undefined"],
        correct: 0,
        pembahasan: "Menghitung panjang tiap string dalam array."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const data = [3, 6, 9];\nconsole.log(data.map(x => Math.floor(x / 3)));",
        a: ["[1, 2, 3]", "[3, 6, 9]", "Error", "undefined"],
        correct: 0,
        pembahasan: "Membagi setiap angka dengan 3 menggunakan Math.floor()."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const f = x => x * (x - 1);\nconsole.log(f(5));",
        a: ["20", "25", "10", "Error"],
        correct: 0,
        pembahasan: "5 × 4 = 20."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const data = [2, 4, 6];\nconst res = data.map(x => x + 1).reduce((a, b) => a + b, 0);\nconsole.log(res);",
        a: ["15", "12", "9", "Error"],
        correct: 0,
        pembahasan: "Setiap elemen ditambah 1 → (3 + 5 + 7) = 15."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const f = (x, y) => x ** y;\nconsole.log(f(2, 3));",
        a: ["8", "6", "9", "Error"],
        correct: 0,
        pembahasan: "2 pangkat 3 = 8."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const a = x => (x > 5 ? 100 : 0);\nconsole.log(a(4));",
        a: ["0", "100", "Error", "undefined"],
        correct: 0,
        pembahasan: "x=4 lebih kecil dari 5 → 0."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const f = x => x > 10 ? 'besar' : (x > 5 ? 'sedang' : 'kecil');\nconsole.log(f(8));",
        a: ["sedang", "besar", "kecil", "Error"],
        correct: 0,
        pembahasan: "x=8 lebih dari 5 tapi kurang dari 10 → sedang."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "const angka = [1, 2, 3];\nconsole.log((x => x.map(i => i * 2))(angka));",
        a: ["[2, 4, 6]", "[1, 2, 3]", "Error", "undefined"],
        correct: 0,
        pembahasan: "Arrow function bisa berisi map() juga."
    }
];
// MULAI QUIZ
renderQuiz();