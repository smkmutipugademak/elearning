let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL DASAR ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda x: x + 2\nprint(f(3))",
        a: ["5", "6", "3", "Error"],
        correct: 0,
        pembahasan: "Lambda menambah 2 ke x, jadi hasilnya 3 + 2 = 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "g = lambda x, y: x * y\nprint(g(2, 3))",
        a: ["6", "5", "8", "Error"],
        correct: 0,
        pembahasan: "Lambda mengalikan 2 × 3 = 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda: 10\nprint(f())",
        a: ["10", "None", "Error", "f"],
        correct: 0,
        pembahasan: "Lambda tanpa argumen bisa mengembalikan nilai tetap."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda x: x ** 2\nprint(f(4))",
        a: ["16", "8", "4", "Error"],
        correct: 0,
        pembahasan: "4 kuadrat = 16."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x, y=2: x + y\nprint(f(3))",
        a: ["5", "3", "Error", "2"],
        correct: 0,
        pembahasan: "Argumen default y=2, jadi 3 + 2 = 5."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda a, b: a if a > b else b\nprint(f(5, 9))",
        a: ["9", "5", "Error", "None"],
        correct: 0,
        pembahasan: "Ternary di lambda mengembalikan nilai terbesar → 9."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda x: 'Genap' if x % 2 == 0 else 'Ganjil'\nprint(f(7))",
        a: ["Ganjil", "Genap", "7", "Error"],
        correct: 0,
        pembahasan: "7 tidak habis dibagi 2 → Ganjil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "hasil = (lambda x, y: x - y)(10, 3)\nprint(hasil)",
        a: ["7", "13", "Error", "None"],
        correct: 0,
        pembahasan: "Lambda langsung dipanggil, hasil 10 - 3 = 7."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda s: s.upper()\nprint(f('halo'))",
        a: ["HALO", "halo", "Error", "None"],
        correct: 0,
        pembahasan: "Mengubah string menjadi huruf besar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "f = lambda: print('Hi')\nf()",
        a: ["Hi", "None", "Error", "lambda"],
        correct: 0,
        pembahasan: "Lambda dapat berisi print() dan menampilkan 'Hi'."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1, 2, 3, 4]\nkuadrat = list(map(lambda x: x ** 2, angka))\nprint(kuadrat)",
        a: ["[1, 4, 9, 16]", "[2, 3, 4, 5]", "Error", "[]"],
        correct: 0,
        pembahasan: "map() menerapkan lambda ke setiap elemen."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "data = [1, 2, 3, 4, 5]\nganjil = list(filter(lambda x: x % 2 != 0, data))\nprint(ganjil)",
        a: ["[1, 3, 5]", "[2, 4]", "Error", "[]"],
        correct: 0,
        pembahasan: "filter() memilih hanya bilangan ganjil."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "kata = ['apel', 'pisang', 'kiwi']\nurut = sorted(kata, key=lambda x: len(x))\nprint(urut)",
        a: ["['kiwi', 'apel', 'pisang']", "['pisang', 'apel', 'kiwi']", "Error", "['apel', 'kiwi', 'pisang']"],
        correct: 0,
        pembahasan: "sorted() mengurut berdasarkan panjang kata."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = [5, 10, 15]\nprint(list(map(lambda x: x / 5, data)))",
        a: ["[1.0, 2.0, 3.0]", "[5, 10, 15]", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap elemen dibagi 5 menggunakan lambda."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: x[::-1]\nprint(f('abcd'))",
        a: ["dcba", "abcd", "Error", "None"],
        correct: 0,
        pembahasan: "Membalik string menggunakan slicing."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: (x > 0) and 'Positif' or 'Negatif'\nprint(f(-5))",
        a: ["Negatif", "Positif", "Error", "None"],
        correct: 0,
        pembahasan: "x < 0 maka hasilnya 'Negatif'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: x % 3 == 0\nprint(f(9))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "9 habis dibagi 3 → True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "angka = [1, 2, 3, 4, 5]\nhasil = list(map(lambda x: x if x % 2 == 0 else x * 10, angka))\nprint(hasil)",
        a: ["[10, 2, 30, 4, 50]", "[1, 2, 3, 4, 5]", "Error", "[2, 4]"],
        correct: 0,
        pembahasan: "Jika ganjil dikali 10, genap tetap."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "a = lambda x, y: x if x > y else y\nprint(a(5, 8))",
        a: ["8", "5", "Error", "None"],
        correct: 0,
        pembahasan: "Mengembalikan nilai terbesar antara dua angka."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "fungsi = lambda x: (lambda y: x + y)\nprint(fungsi(2)(3))",
        a: ["5", "23", "Error", "None"],
        correct: 0,
        pembahasan: "Lambda bersarang, hasil 2 + 3 = 5."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil kode berikut?",
        code: "data = [10, 25, 30, 45]\nhasil = list(filter(lambda x: x % 15 == 0, data))\nprint(hasil)",
        a: ["[30, 45]", "[10, 25]", "[]", "Error"],
        correct: 0,
        pembahasan: "30 dan 45 habis dibagi 15."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "kata = ['python', 'ai', 'chatgpt']\nurut = sorted(kata, key=lambda x: x[-1])\nprint(urut)",
        a: ["['ai', 'python', 'chatgpt']", "['chatgpt', 'python', 'ai']", "Error", "['python', 'ai', 'chatgpt']"],
        correct: 0,
        pembahasan: "Urut berdasarkan huruf terakhir tiap kata."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: (x + 5, x * 2)\nprint(f(3))",
        a: ["(8, 6)", "8,6", "Error", "[8,6]"],
        correct: 0,
        pembahasan: "Lambda dapat mengembalikan tuple."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "data = ['a', 'bb', 'ccc']\nprint(list(map(lambda x: len(x), data)))",
        a: ["[1, 2, 3]", "[3, 2, 1]", "Error", "None"],
        correct: 0,
        pembahasan: "Menghitung panjang tiap string dalam list."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "data = [3, 6, 9]\nprint(list(map(lambda x: x//3, data)))",
        a: ["[1, 2, 3]", "[3, 6, 9]", "Error", "None"],
        correct: 0,
        pembahasan: "Membagi setiap angka dengan 3 menggunakan floor division."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: x * (x - 1)\nprint(f(5))",
        a: ["20", "25", "10", "Error"],
        correct: 0,
        pembahasan: "5 × 4 = 20."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "data = [2, 4, 6]\nres = sum(map(lambda x: x + 1, data))\nprint(res)",
        a: ["15", "12", "9", "Error"],
        correct: 0,
        pembahasan: "map menambah 1 ke tiap elemen → (3 + 5 + 7) = 15."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x, y: x ** y\nprint(f(2, 3))",
        a: ["8", "6", "9", "Error"],
        correct: 0,
        pembahasan: "2 pangkat 3 = 8."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "a = lambda x: (x > 5) * 100\nprint(a(4))",
        a: ["0", "100", "Error", "None"],
        correct: 0,
        pembahasan: "Ekspresi (x > 5) bernilai False (0)."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "f = lambda x: 'besar' if x > 10 else ('sedang' if x > 5 else 'kecil')\nprint(f(8))",
        a: ["sedang", "besar", "kecil", "Error"],
        correct: 0,
        pembahasan: "x=8 lebih dari 5 tapi kurang dari 10 → sedang."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "angka = [1, 2, 3]\nprint((lambda x: [i * 2 for i in x])(angka))",
        a: ["[2, 4, 6]", "[1, 2, 3]", "Error", "None"],
        correct: 0,
        pembahasan: "Lambda bisa berisi list comprehension juga."
    }
];