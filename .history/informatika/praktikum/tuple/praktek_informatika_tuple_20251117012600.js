let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (TUPLE DASAR) ===================
    {
        q: "Apa tipe data dari variabel berikut?",
        code: "data = (1, 2, 3)",
        a: ["tuple", "list", "set", "dict"],
        correct: 0,
        pembahasan: "Tanda kurung biasa () menandakan tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (10, 20, 30)\nprint(data[0])",
        a: ["10", "20", "30", "Error"],
        correct: 0,
        pembahasan: "Indeks 0 mengakses elemen pertama tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(len(data))",
        a: ["2", "3", "1", "Error"],
        correct: 1,
        pembahasan: "len() menghitung jumlah elemen dalam tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ()\nprint(len(data))",
        a: ["0", "1", "Error", "None"],
        correct: 0,
        pembahasan: "Tuple kosong memiliki panjang 0."
    },
    {
        q: "Bagaimana cara membuat tuple dengan satu elemen?",
        code: "data = (1,)\nprint(type(data))",
        a: ["<class 'tuple'>", "<class 'int'>", "<class 'list'>", "Error"],
        correct: 0,
        pembahasan: "Tuple satu elemen harus diakhiri dengan koma: (1,)."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(2 in data)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Operator in memeriksa apakah elemen ada di tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(data[-1])",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Indeks -1 mengakses elemen terakhir tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (10, 20, 30)\nprint(data[1+1])",
        a: ["10", "20", "30", "Error"],
        correct: 2,
        pembahasan: "1+1=2, jadi elemen di indeks ke-2 adalah 30."
    },
    {
        q: "Bagaimana cara menggabungkan dua tuple?",
        code: "a = (1, 2)\nb = (3, 4)\nprint(a + b)",
        a: ["(1, 2, 3, 4)", "(1, 2).append(3,4)", "Error", "['1','2','3','4']"],
        correct: 0,
        pembahasan: "Operator + digunakan untuk menggabungkan tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2)\nprint(data * 2)",
        a: ["(1, 2, 1, 2)", "(2, 4)", "(1, 1, 2, 2)", "Error"],
        correct: 0,
        pembahasan: "Operator * menggandakan isi tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = tuple([1, 2, 3])\nprint(data)",
        a: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "Error"],
        correct: 0,
        pembahasan: "Fungsi tuple() mengubah list menjadi tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nfor i in data:\n    print(i)",
        a: ["1\\n2\\n3", "123", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "for loop mencetak setiap elemen tuple pada baris baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ('a', 'b', 'c')\nprint(data[1])",
        a: ["'a'", "'b'", "'c'", "Error"],
        correct: 1,
        pembahasan: "Indeks 1 berarti elemen kedua yaitu 'b'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(type(data))",
        a: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
        correct: 0,
        pembahasan: "Variabel bertipe tuple akan menghasilkan <class 'tuple'>."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(sum(data))",
        a: ["6", "3", "Error", "None"],
        correct: 0,
        pembahasan: "sum() menjumlahkan semua elemen numerik → 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ('python',) * 3\nprint(data)",
        a: ["('python', 'python', 'python')", "('python')", "Error", "['python', 'python', 'python']"],
        correct: 0,
        pembahasan: "Pengulangan tuple menghasilkan elemen yang sama tiga kali."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, (2, 3))\nprint(data[1][0])",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "data[1] adalah tuple (2,3), elemen pertama dari itu adalah 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(max(data))",
        a: ["3", "2", "1", "Error"],
        correct: 0,
        pembahasan: "max() mengembalikan nilai terbesar dari tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 2, 3)\nprint(data.count(2))",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "count() menghitung berapa kali nilai tertentu muncul."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(4 in data)",
        a: ["True", "False", "Error", "None"],
        correct: 1,
        pembahasan: "4 tidak ada dalam tuple, jadi hasilnya False."
    },

    // =================== LEVEL MENENGAH–ADVANCED ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (10, 20, 30)\na, b, c = data\nprint(a + b + c)",
        a: ["60", "102030", "Error", "None"],
        correct: 0,
        pembahasan: "Tuple dapat di-unpack ke beberapa variabel."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3, 4)\na, *b = data\nprint(b)",
        a: ["[2, 3, 4]", "(2, 3, 4)", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "Operator * mengumpulkan sisa elemen menjadi list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\ndata[0] = 10\nprint(data)",
        a: ["(10, 2, 3)", "Error", "(1, 2, 3)", "None"],
        correct: 1,
        pembahasan: "Tuple bersifat immutable, elemennya tidak bisa diubah."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nnew = data + (4,)\nprint(new)",
        a: ["(1, 2, 3, 4)", "(1, 2, 3)", "Error", "None"],
        correct: 0,
        pembahasan: "Gabungan tuple membuat tuple baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (5, 10, 15)\nprint(min(data))",
        a: ["5", "10", "15", "Error"],
        correct: 0,
        pembahasan: "min() mengembalikan nilai terkecil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ('a', 'b', 'c')\nprint('-'.join(data))",
        a: ["a-b-c", "('a','b','c')", "Error", "abc"],
        correct: 0,
        pembahasan: "join() dapat menggabungkan elemen string tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, (2, (3, 4)))\nprint(data[1][1][0])",
        a: ["3", "4", "2", "Error"],
        correct: 0,
        pembahasan: "Tuple bertingkat diakses dengan indeks berlapis."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(sum(data) / len(data))",
        a: ["2.0", "3", "1", "Error"],
        correct: 0,
        pembahasan: "Rata-rata = (1+2+3)/3 = 2.0."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(all(data))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Semua elemen bukan nol → True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (0, 1, 2)\nprint(any(data))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Ada elemen non-nol, maka True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3, 4)\nprint(data[1:3])",
        a: ["(2, 3)", "(1, 2, 3)", "(3, 4)", "Error"],
        correct: 0,
        pembahasan: "Slice [1:3] mengambil elemen indeks 1 dan 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3, 4)\nprint(data[::-1])",
        a: ["(4, 3, 2, 1)", "(1, 2, 3, 4)", "Error", "None"],
        correct: 0,
        pembahasan: "Step -1 membalik urutan tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (x**2 for x in range(3))\nprint(tuple(data))",
        a: ["(0, 1, 4)", "(1, 4, 9)", "(1, 2, 3)", "Error"],
        correct: 0,
        pembahasan: "Generator dikonversi menjadi tuple berisi kuadrat tiap angka."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(tuple(reversed(data)))",
        a: ["(3, 2, 1)", "(1, 2, 3)", "Error", "None"],
        correct: 0,
        pembahasan: "reversed() membalik urutan elemen tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "a = (1, 2)\nb = (3, 4)\nc = (a, b)\nprint(c)",
        a: ["((1, 2), (3, 4))", "(1, 2, 3, 4)", "(a, b)", "Error"],
        correct: 0,
        pembahasan: "Tuple dapat berisi tuple lain sebagai elemen."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = ('x', 'y', 'z')\nfor i in range(len(data)):\n    print(data[i])",
        a: ["x\\ny\\nz", "xyz", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Loop berdasarkan indeks mencetak tiap elemen tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\nprint(hash(data))",
        a: ["Bilangan unik", "Error", "None", "0"],
        correct: 0,
        pembahasan: "Tuple bersifat hashable, menghasilkan nilai hash unik."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (1, 2, 3)\ntry:\n    data[0] = 9\nexcept TypeError:\n    print('immutable')",
        a: ["immutable", "Error", "(9,2,3)", "Tidak ada output"],
        correct: 0,
        pembahasan: "Tuple tidak dapat diubah; akan memicu TypeError."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "def hitung():\n    return (1, 2, 3)\na, b, c = hitung()\nprint(b)",
        a: ["2", "1", "3", "Error"],
        correct: 0,
        pembahasan: "Fungsi mengembalikan tuple (1,2,3), b = 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = (True, False, True)\nprint(data.count(True))",
        a: ["2", "1", "3", "Error"],
        correct: 0,
        pembahasan: "count(True) menghitung dua nilai True dalam tuple."
    }
];