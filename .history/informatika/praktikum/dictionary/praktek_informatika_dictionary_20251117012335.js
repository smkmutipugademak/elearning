let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================

    {
        q: "Apa output dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint(data['a'])",
        a: ["1", "2", "Error", "None"],
        correct: 0,
        pembahasan: "Akses nilai dari key 'a' menghasilkan 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {}\nprint(len(data))",
        a: ["0", "1", "Error", "None"],
        correct: 0,
        pembahasan: "Dictionary kosong memiliki panjang 0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "data = {'x': 10}\ndata['y'] = 20\nprint(data)",
        a: ["{'x': 10}", "{'y': 20}", "{'x': 10, 'y': 20}", "Error"],
        correct: 2,
        pembahasan: "Key baru 'y' ditambahkan ke dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint('a' in data)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Operator 'in' memeriksa keberadaan key, bukan value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint(data.get('c'))",
        a: ["1", "2", "None", "Error"],
        correct: 2,
        pembahasan: "Key 'c' tidak ada, get() mengembalikan None."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint(len(data))",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "Dictionary berisi dua pasangan key-value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'x': 10, 'y': 20}\ndel data['x']\nprint(data)",
        a: ["{'y': 20}", "{'x': 10}", "{}", "Error"],
        correct: 0,
        pembahasan: "Key 'x' dihapus menggunakan del."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint(list(data.keys()))",
        a: ["['a', 'b']", "[1, 2]", "[('a', 1), ('b', 2)]", "Error"],
        correct: 0,
        pembahasan: "keys() menampilkan daftar key dalam dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint(sum(data.values()))",
        a: ["3", "2", "1", "Error"],
        correct: 0,
        pembahasan: "values() menghasilkan [1, 2], totalnya 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint('c' not in data)",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "'c' tidak ada, jadi hasilnya True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'x': 1}\ndata['x'] = 99\nprint(data['x'])",
        a: ["1", "99", "Error", "None"],
        correct: 1,
        pembahasan: "Nilai key 'x' diganti menjadi 99."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nfor k in data:\n    print(k)",
        a: ["a b", "1 2", "('a',1) ('b',2)", "Error"],
        correct: 0,
        pembahasan: "Loop for iterasi hanya pada key dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint('a' in data.keys())",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Key 'a' ada di dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = dict(a=1, b=2)\nprint(data)",
        a: ["{'a': 1, 'b': 2}", "{'a': '1', 'b': '2'}", "Error", "{}"],
        correct: 0,
        pembahasan: "dict(a=1, b=2) membuat dictionary {'a':1, 'b':2}."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1}\nprint(type(data))",
        a: ["<class 'list'>", "<class 'dict'>", "<class 'tuple'>", "<class 'set'>"],
        correct: 1,
        pembahasan: "Tipe data dictionary adalah dict."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 10, 'b': 20}\nprint(max(data.values()))",
        a: ["10", "20", "a", "Error"],
        correct: 1,
        pembahasan: "max() mengambil nilai terbesar dari values yaitu 20."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint(list(data.items())[0])",
        a: ["('a', 1)", "('b', 2)", "['a', 'b']", "Error"],
        correct: 0,
        pembahasan: "items() mengembalikan pasangan (key, value)."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'x': 10}\nprint('y' in data)",
        a: ["True", "False", "Error", "None"],
        correct: 1,
        pembahasan: "'y' tidak ada sebagai key dalam dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint(list(data.values())[1])",
        a: ["1", "2", "Error", "None"],
        correct: 1,
        pembahasan: "Elemen kedua dari values adalah 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1}\ndata.pop('a')\nprint(data)",
        a: ["{}", "{'a': 1}", "Error", "None"],
        correct: 0,
        pembahasan: "pop() menghapus key 'a' dan isinya."
    },

    // =================== LEVEL MENENGAH ===================

    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': {'x': 5}}\nprint(data['b']['x'])",
        a: ["1", "5", "Error", "None"],
        correct: 1,
        pembahasan: "Mengakses dictionary di dalam dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1}\ndata.update({'b': 2})\nprint(data)",
        a: ["{'a': 1}", "{'a': 1, 'b': 2}", "Error", "{}"],
        correct: 1,
        pembahasan: "update() menambah atau mengganti key."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = dict.fromkeys(['x', 'y'], 0)\nprint(data)",
        a: ["{'x': 0, 'y': 0}", "{'x': None, 'y': None}", "{}", "Error"],
        correct: 0,
        pembahasan: "fromkeys() membuat dictionary dengan default value 0."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "keys = ['a', 'b']\nvals = [1, 2]\ndata = dict(zip(keys, vals))\nprint(data)",
        a: ["{'a': 1, 'b': 2}", "{'a': 2, 'b': 1}", "{}", "Error"],
        correct: 0,
        pembahasan: "zip() menggabungkan dua list menjadi pasangan key-value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 10, 'b': 20}\nfor k, v in data.items():\n    print(v, end=' ')",
        a: ["10 20", "a b", "(a,10) (b,20)", "Error"],
        correct: 0,
        pembahasan: "Loop items() mengembalikan key dan value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'x': 1, 'y': 2}\nprint({k:v*2 for k,v in data.items()})",
        a: ["{'x': 2, 'y': 4}", "{'x': 1, 'y': 2}", "Error", "{}"],
        correct: 0,
        pembahasan: "Dictionary comprehension menggandakan setiap value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1}\ncopy = data.copy()\ncopy['a'] = 5\nprint(data['a'])",
        a: ["1", "5", "Error", "None"],
        correct: 0,
        pembahasan: "copy() membuat salinan baru, tidak memengaruhi data asli."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint(min(data.values()))",
        a: ["1", "2", "a", "Error"],
        correct: 0,
        pembahasan: "Nilai terkecil dari [1, 2] adalah 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 5, 'b': 10}\nprint(sum(v for v in data.values()))",
        a: ["15", "10", "5", "Error"],
        correct: 0,
        pembahasan: "Menjumlahkan semua value dictionary menghasilkan 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nif data.get('c', 0) == 0:\n    print('Kosong')",
        a: ["Kosong", "Error", "None", "Tidak ada output"],
        correct: 0,
        pembahasan: "get('c',0) mengembalikan 0 karena key tidak ada."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': [1,2,3]}\nprint(data['a'][1])",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "Mengakses elemen ke-2 dari list di dalam dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': (1,2)}\nprint(type(data['a']))",
        a: ["<class 'tuple'>", "<class 'list'>", "<class 'dict'>", "<class 'set'>"],
        correct: 0,
        pembahasan: "Value bertipe tuple."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'x': 10, 'y': 5}\nprint(all(v > 0 for v in data.values()))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Semua nilai > 0, maka True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint(any(v > 1 for v in data.values()))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Ada nilai lebih besar dari 1, jadi True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 10, 'b': 20}\nprint(sorted(data))",
        a: ["['a', 'b']", "['b', 'a']", "[10, 20]", "Error"],
        correct: 0,
        pembahasan: "sorted() mengurutkan key dictionary."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nprint({k:v for k,v in data.items() if v>1})",
        a: ["{'b': 2}", "{'a': 1}", "{}", "Error"],
        correct: 0,
        pembahasan: "Dictionary comprehension dengan filter v>1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': {'x': 1}}\nprint('x' in data['a'])",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "Key 'x' ada di dictionary dalam key 'a'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'a': 1, 'b': 2}\nfor k,v in data.items():\n    print(k, v, end=' ')",
        a: ["a 1 b 2", "1 a 2 b", "('a',1)('b',2)", "Error"],
        correct: 0,
        pembahasan: "Menampilkan setiap key dan valuenya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {i:i**2 for i in range(3)}\nprint(data)",
        a: ["{0:0, 1:1, 2:4}", "{1:1, 2:2, 3:3}", "Error", "{}"],
        correct: 0,
        pembahasan: "Dictionary comprehension membuat mapping kuadrat angka."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "data = {'x': 5}\nprint(data.setdefault('y', 10))",
        a: ["10", "5", "Error", "None"],
        correct: 0,
        pembahasan: "setdefault() menambah key baru dengan default value 10."
    }
];