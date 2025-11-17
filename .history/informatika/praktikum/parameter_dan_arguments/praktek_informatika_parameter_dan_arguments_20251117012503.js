let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "def sapa(nama):\n    print('Halo', nama)\n\nsapa('Budi')",
        a: ["Halo", "nama", "Halo Budi", "Error"],
        correct: 2,
        pembahasan: "Fungsi menerima argumen 'Budi' lalu mencetak 'Halo Budi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def tambah(a, b):\n    print(a + b)\n\ntambah(2, 3)",
        a: ["23", "5", "2 + 3", "Error"],
        correct: 1,
        pembahasan: "Menjumlahkan 2 + 3 menghasilkan 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def cetak(nama='Andi'):\n    print(nama)\n\ncetak()",
        a: ["Andi", "Error", "nama", "None"],
        correct: 0,
        pembahasan: "Parameter default digunakan jika tidak ada argumen, jadi mencetak 'Andi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def kali(x, y=2):\n    return x * y\n\nprint(kali(4))",
        a: ["8", "6", "4", "Error"],
        correct: 0,
        pembahasan: "y bernilai default 2, jadi 4 * 2 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def tampil(nama, umur):\n    print(nama, umur)\n\ntampil('Ayu', 18)",
        a: ["nama umur", "Ayu 18", "18 Ayu", "Error"],
        correct: 1,
        pembahasan: "Argumen diberikan sesuai urutan parameter: 'Ayu' dan 18."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def tambah(a, b):\n    return a + b\n\nhasil = tambah(5, 10)\nprint(hasil)",
        a: ["15", "510", "a + b", "Error"],
        correct: 0,
        pembahasan: "Fungsi mengembalikan hasil penjumlahan 5 + 10 = 15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def hello():\n    return 'Hai Dunia'\n\nprint(hello())",
        a: ["Hai Dunia", "None", "hello", "Error"],
        correct: 0,
        pembahasan: "Fungsi mengembalikan string 'Hai Dunia' yang dicetak oleh print()."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def total(a, b=5):\n    return a + b\n\nprint(total(3))",
        a: ["8", "35", "Error", "5"],
        correct: 0,
        pembahasan: "Parameter kedua default 5, jadi 3 + 5 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def show(nama, kota='Bandung'):\n    print(nama, kota)\n\nshow('Rina')",
        a: ["Rina Bandung", "kota Rina", "Rina", "Error"],
        correct: 0,
        pembahasan: "Default parameter digunakan untuk 'kota', jadi hasilnya 'Rina Bandung'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def hitung(a, b):\n    return a - b\n\nprint(hitung(10, 3))",
        a: ["7", "13", "-7", "Error"],
        correct: 0,
        pembahasan: "Hasil pengurangan 10 - 3 = 7."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "def fungsi(a, b, c=3):\n    print(a + b + c)\n\nfungsi(1, 2)",
        a: ["3", "6", "Error", "12"],
        correct: 1,
        pembahasan: "c menggunakan default 3 → 1 + 2 + 3 = 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def test(a, b):\n    return a * b\n\nprint(test(b=4, a=2))",
        a: ["8", "24", "Error", "6"],
        correct: 0,
        pembahasan: "Argumen bisa disebutkan dengan nama, hasilnya 2 * 4 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def sapa(nama1, nama2='Budi'):\n    print('Hai', nama1, 'dan', nama2)\n\nsapa('Ani')",
        a: ["Hai Ani dan Budi", "Hai Budi dan Ani", "Error", "Hai Ani"],
        correct: 0,
        pembahasan: "Parameter nama2 punya nilai default 'Budi'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def data(*args):\n    print(args)\n\ndata(1, 2, 3)",
        a: ["(1, 2, 3)", "[1, 2, 3]", "1 2 3", "Error"],
        correct: 0,
        pembahasan: "*args mengubah argumen menjadi tuple."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def tampil(**kwargs):\n    print(kwargs)\n\ntampil(nama='Doni', umur=20)",
        a: ["{'nama': 'Doni', 'umur': 20}", "['Doni', 20]", "('Doni', 20)", "Error"],
        correct: 0,
        pembahasan: "**kwargs mengubah argumen menjadi dictionary."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def tampil(*args):\n    for a in args:\n        print(a, end=' ')\n\ntampil('A', 'B', 'C')",
        a: ["A B C", "['A', 'B', 'C']", "('A', 'B', 'C')", "Error"],
        correct: 0,
        pembahasan: "*args dapat menampung banyak argumen dan diiterasi."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def combine(a, *args):\n    print(a, args)\n\ncombine(1, 2, 3)",
        a: ["1 (2, 3)", "1 [2, 3]", "Error", "1 2 3"],
        correct: 0,
        pembahasan: "Argumen pertama masuk ke a, sisanya jadi tuple di args."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def show_info(**info):\n    for k, v in info.items():\n        print(k, v)\n\nshow_info(nama='Ari', umur=19)",
        a: ["nama Ari\\numur 19", "('nama', 'Ari')", "Error", "None"],
        correct: 0,
        pembahasan: "Loop menampilkan pasangan key dan value dari dictionary kwargs."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def test(x, y=10):\n    return x + y\n\nprint(test(y=3, x=7))",
        a: ["10", "13", "Error", "7"],
        correct: 1,
        pembahasan: "Urutan argumen tidak masalah jika pakai nama parameter."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def f(x, y, z):\n    print(x, y, z)\n\ndata = [1, 2, 3]\nf(*data)",
        a: ["1 2 3", "(1, 2, 3)", "Error", "[1, 2, 3]"],
        correct: 0,
        pembahasan: "Operator * akan mengekstrak isi list ke parameter satu per satu."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa output dari kode berikut?",
        code: "def g(a, b=2, c=3):\n    return a * b + c\n\nprint(g(2))",
        a: ["7", "10", "8", "Error"],
        correct: 0,
        pembahasan: "a=2, b=2, c=3 → 2×2+3=7."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def fungsi(x, y):\n    return x / y\n\nprint(fungsi(10, 2))",
        a: ["5.0", "5", "Error", "0.5"],
        correct: 0,
        pembahasan: "10 / 2 = 5.0 hasilnya float."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def f(x, y=2, *args):\n    print(x, y, args)\n\nf(1, 3, 5, 7)",
        a: ["1 3 (5, 7)", "1 3 [5, 7]", "Error", "1 3 5 7"],
        correct: 0,
        pembahasan: "Argumen ekstra disimpan dalam tuple args."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def f(a, b, **kwargs):\n    print(a, b, kwargs)\n\nf(1, 2, x=10, y=20)",
        a: ["1 2 {'x':10, 'y':20}", "Error", "1 2 (10,20)", "1 2 [10,20]"],
        correct: 0,
        pembahasan: "Argumen dengan nama disimpan dalam dictionary kwargs."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def merge(a, b):\n    return str(a) + str(b)\n\nprint(merge(2, 3))",
        a: ["23", "5", "Error", "a+b"],
        correct: 0,
        pembahasan: "Konversi ke string lalu digabung → '23'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def f(x, y):\n    x = x + 1\n    y = y + 2\n    return x + y\n\nprint(f(1, 1))",
        a: ["5", "3", "4", "Error"],
        correct: 0,
        pembahasan: "x jadi 2, y jadi 3 → hasil 5."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def calc(a, b):\n    return a ** b\n\nprint(calc(2, 3))",
        a: ["8", "6", "23", "Error"],
        correct: 0,
        pembahasan: "2 pangkat 3 = 8."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def tes(x, y=5):\n    return x + y\n\nprint(tes(5, y=10))",
        a: ["15", "10", "Error", "5"],
        correct: 0,
        pembahasan: "Argumen keyword y menimpa default-nya, jadi 5+10=15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def data(a, b, c=5):\n    print(a, b, c)\n\ndata(1, c=3, b=2)",
        a: ["1 2 3", "Error", "1 3 2", "1 c=3 b=2"],
        correct: 0,
        pembahasan: "Urutan bisa diatur dengan nama parameter."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "def hitung(a, b):\n    return a + b\n\nprint(hitung(b=5, a=4))",
        a: ["9", "45", "Error", "5"],
        correct: 0,
        pembahasan: "Urutan parameter tidak masalah jika disebut dengan nama."
    }
];