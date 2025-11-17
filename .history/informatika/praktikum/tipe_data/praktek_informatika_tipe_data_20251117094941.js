let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (TIPE DATA DASAR) ===================
    {
        q: "Apa tipe data dari nilai 10?",
        code: "x = 10\nprint(type(x))",
        a: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
        correct: 0,
        pembahasan: "10 adalah bilangan bulat, jadi bertipe int."
    },
    {
        q: "Apa tipe data dari nilai 10.5?",
        code: "x = 10.5\nprint(type(x))",
        a: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'bool'>"],
        correct: 0,
        pembahasan: "10.5 memiliki desimal, jadi bertipe float."
    },
    {
        q: "Apa tipe data dari 'Halo Dunia'?",
        code: "x = 'Halo Dunia'\nprint(type(x))",
        a: ["<class 'str'>", "<class 'int'>", "<class 'list'>", "<class 'tuple'>"],
        correct: 0,
        pembahasan: "Tanda kutip menunjukkan tipe data string (str)."
    },
    {
        q: "Apa tipe data dari nilai True?",
        code: "x = True\nprint(type(x))",
        a: ["<class 'bool'>", "<class 'str'>", "<class 'int'>", "<class 'tuple'>"],
        correct: 0,
        pembahasan: "True dan False termasuk tipe data bool (boolean)."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 5\ny = 2\nprint(x / y)",
        a: ["2.5", "2", "2.0", "Error"],
        correct: 0,
        pembahasan: "Operator / menghasilkan hasil float → 2.5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 5\ny = 2\nprint(x // y)",
        a: ["2", "2.5", "3", "Error"],
        correct: 0,
        pembahasan: "Operator // menghasilkan pembagian bulat → 2."
    },
    {
        q: "Apa tipe data hasil operasi berikut?",
        code: "x = 5 + 2.0\nprint(type(x))",
        a: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'complex'>"],
        correct: 0,
        pembahasan: "int + float menghasilkan float."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = str(123)\nprint(x)",
        a: ["'123'", "123", "Error", "'x'"],
        correct: 0,
        pembahasan: "str(123) mengubah angka menjadi string '123'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = int('10')\nprint(x + 5)",
        a: ["15", "105", "Error", "10"],
        correct: 0,
        pembahasan: "String '10' dikonversi ke integer, jadi 10 + 5 = 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = float('3.14')\nprint(x)",
        a: ["3.14", "'3.14'", "Error", "3"],
        correct: 0,
        pembahasan: "float('3.14') mengubah string menjadi angka desimal 3.14."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = bool(0)\nprint(x)",
        a: ["False", "True", "0", "Error"],
        correct: 0,
        pembahasan: "0 dianggap False dalam konteks boolean."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = bool('Python')\nprint(x)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "String non-kosong dianggap True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = type(10) == int\nprint(x)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "type(10) adalah <class 'int'>, jadi True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "print(isinstance(3.14, float))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "3.14 bertipe float, jadi True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 10\ny = '10'\nprint(x == y)",
        a: ["False", "True", "Error", "None"],
        correct: 0,
        pembahasan: "Tipe data berbeda (int vs str), jadi hasilnya False."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '5'\nprint(x * 3)",
        a: ["'555'", "15", "Error", "['5', '5', '5']"],
        correct: 0,
        pembahasan: "String dikalikan angka menggandakan isinya → '555'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = int(3.9)\nprint(x)",
        a: ["3", "4", "3.9", "Error"],
        correct: 0,
        pembahasan: "int() mengubah float menjadi int tanpa pembulatan → 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = float(5)\nprint(x)",
        a: ["5.0", "5", "Error", "‘5.0’"],
        correct: 0,
        pembahasan: "float(5) mengubah integer menjadi 5.0."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = str(5.5)\nprint(x + '0')",
        a: ["'5.50'", "5.5", "Error", "'55.0'"],
        correct: 0,
        pembahasan: "Kedua operand string, jadi digabung jadi '5.50'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = bool('')\nprint(x)",
        a: ["False", "True", "Error", "None"],
        correct: 0,
        pembahasan: "String kosong bernilai False."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '5'\ny = 2\nprint(int(x) * y)",
        a: ["10", "52", "Error", "'10'"],
        correct: 0,
        pembahasan: "int('5') mengubah string menjadi angka → 5*2=10."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '3.5'\nprint(float(x) + 1)",
        a: ["4.5", "35", "Error", "‘3.51’"],
        correct: 0,
        pembahasan: "float('3.5') menghasilkan 3.5 → 3.5 + 1 = 4.5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '10'\nprint(x * 2)",
        a: ["'1010'", "20", "Error", "‘x2’"],
        correct: 0,
        pembahasan: "String dikali 2 menggandakan string → '1010'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '10'\ny = 5\nprint(x + str(y))",
        a: ["'105'", "15", "Error", "'10 5'"],
        correct: 0,
        pembahasan: "Keduanya string setelah konversi → '105'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 10\ny = '5'\nprint(x + int(y))",
        a: ["15", "105", "Error", "‘10+5’"],
        correct: 0,
        pembahasan: "int('5') = 5 → 10 + 5 = 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = bool(3.14)\nprint(x)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Nilai non-nol dianggap True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = complex(2, 3)\nprint(x)",
        a: ["(2+3j)", "‘2+3j’", "Error", "(3+2j)"],
        correct: 0,
        pembahasan: "complex(2,3) membuat bilangan kompleks 2+3j."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = type(True)\nprint(x == bool)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "type(True) adalah <class 'bool'> → True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 10.0\ny = int(x)\nprint(type(y))",
        a: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
        correct: 0,
        pembahasan: "int() mengubah float menjadi integer."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 'Hello'\nprint(len(x))",
        a: ["5", "Error", "6", "‘Hello’"],
        correct: 0,
        pembahasan: "len() menghitung jumlah karakter → 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = [1, 2, 3]\nprint(type(x))",
        a: ["<class 'list'>", "<class 'tuple'>", "<class 'set'>", "<class 'dict'>"],
        correct: 0,
        pembahasan: "Tanda kurung siku [] menandakan list."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = {'a': 1}\nprint(type(x))",
        a: ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"],
        correct: 0,
        pembahasan: "Tanda kurung kurawal dengan pasangan key:value menandakan dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = (1, 2, 3)\nprint(type(x))",
        a: ["<class 'tuple'>", "<class 'list'>", "<class 'set'>", "<class 'dict'>"],
        correct: 0,
        pembahasan: "Kurung biasa () dengan elemen dipisah koma adalah tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = {1, 2, 3}\nprint(type(x))",
        a: ["<class 'set'>", "<class 'list'>", "<class 'dict'>", "<class 'tuple'>"],
        correct: 0,
        pembahasan: "Kurung kurawal tanpa pasangan adalah set."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = None\nprint(type(x))",
        a: ["<class 'NoneType'>", "<class 'bool'>", "<class 'str'>", "<class 'object'>"],
        correct: 0,
        pembahasan: "Nilai None memiliki tipe NoneType."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = '10'\ny = 10\nprint(type(x) == type(y))",
        a: ["False", "True", "Error", "None"],
        correct: 0,
        pembahasan: "x bertipe str, y bertipe int, jadi False."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = int(True)\nprint(x)",
        a: ["1", "0", "Error", "True"],
        correct: 0,
        pembahasan: "True dikonversi ke 1 dalam konteks integer."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = float(False)\nprint(x)",
        a: ["0.0", "1.0", "False", "Error"],
        correct: 0,
        pembahasan: "False dikonversi menjadi 0.0 saat diubah ke float."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 3.0\ny = 3\nprint(x == y)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Nilainya sama meskipun tipe berbeda, jadi True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "x = 'Python'\nprint(isinstance(x, (int, str)))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "x bertipe str, cocok dengan salah satu tuple tipe (int, str)."
    }
];
