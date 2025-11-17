let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\n\nclass B(A):\n    pass\n\nobj = B()\nobj.tampil()",
        a: ["A", "B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Class B mewarisi method tampil() dari A, jadi mencetak 'A'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class Induk:\n    def pesan(self):\n        print('Halo dari Induk')\n\nclass Anak(Induk):\n    def pesan(self):\n        print('Halo dari Anak')\n\nobj = Anak()\nobj.pesan()",
        a: ["Halo dari Induk", "Halo dari Anak", "Error", "Tidak ada output"],
        correct: 1,
        pembahasan: "Method di subclass menimpa (override) method induk."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        print('Init A')\n\nclass B(A):\n    pass\n\nobj = B()",
        a: ["Init A", "Init B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Konstruktor A dijalankan karena B mewarisi dari A tanpa override."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    x = 10\n\nclass B(A):\n    pass\n\nobj = B()\nprint(obj.x)",
        a: ["10", "Error", "None", "0"],
        correct: 0,
        pembahasan: "Atribut class A diwarisi oleh class B."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class Induk:\n    def tampil(self):\n        print('Induk')\n\nclass Anak(Induk):\n    def tampil(self):\n        super().tampil()\n        print('Anak')\n\nobj = Anak()\nobj.tampil()",
        a: ["Induk", "Anak", "Induk\\nAnak", "Error"],
        correct: 2,
        pembahasan: "super().tampil() memanggil method Induk, lalu mencetak 'Anak'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        self.data = 5\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.data += 2\n\nobj = B()\nprint(obj.data)",
        a: ["5", "7", "2", "Error"],
        correct: 1,
        pembahasan: "Konstruktor B menambah nilai dari konstruktor A, total = 7."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\n\nclass B(A):\n    def tampil(self):\n        print('B')\n\nclass C(B):\n    pass\n\nobj = C()\nobj.tampil()",
        a: ["A", "B", "C", "Error"],
        correct: 1,
        pembahasan: "C mewarisi dari B, dan B override method tampil()."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def halo(self):\n        print('Dari A')\n\nclass B(A):\n    pass\n\nobj = B()\nobj.halo()",
        a: ["Dari A", "Dari B", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "B mewarisi method halo() dari A."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        print('A init')\n\nclass B(A):\n    def __init__(self):\n        print('B init')\n        super().__init__()\n\nobj = B()",
        a: ["A init", "B init", "B init\\nA init", "Error"],
        correct: 2,
        pembahasan: "Konstruktor B dipanggil dulu, lalu konstruktor A dengan super()."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\n\nclass B(A):\n    def tampil(self):\n        super().tampil()\n        print('B')\n\nclass C(B):\n    pass\n\nC().tampil()",
        a: ["A\\nB", "B\\nA", "C", "Error"],
        correct: 0,
        pembahasan: "super() memanggil tampil() dari A, lalu tampil() di B."
    },
    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\n\nclass B(A):\n    def tampil(self):\n        print('B')\n\nobj = A()\nobj.tampil()\nobj2 = B()\nobj2.tampil()",
        a: ["A\\nB", "B\\nA", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "obj dari A memanggil tampil() A, obj2 dari B memanggil tampil() B."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        self.x = 5\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.x *= 2\n\nprint(B().x)",
        a: ["5", "10", "Error", "2"],
        correct: 1,
        pembahasan: "Nilai x dari konstruktor A dikali 2 di konstruktor B → 10."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def data(self):\n        return 1\nclass B(A):\n    def data(self):\n        return super().data() + 1\n\nprint(B().data())",
        a: ["1", "2", "Error", "None"],
        correct: 1,
        pembahasan: "B memanggil data() dari A lalu menambah 1 → hasil 2."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    pass\nclass B(A):\n    pass\nclass C(B):\n    pass\n\nprint(issubclass(C, A))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "C turunan dari B, dan B turunan dari A → C juga subclass dari A."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def f(self):\n        return 'A'\nclass B(A):\n    def f(self):\n        return super().f() + 'B'\n\nprint(B().f())",
        a: ["A", "B", "AB", "Error"],
        correct: 2,
        pembahasan: "Method B memanggil f() dari A lalu menambahkan 'B'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self):\n        print('A')\nclass B(A):\n    def __init__(self):\n        print('B')\nclass C(B):\n    pass\nC()",
        a: ["A", "B", "A\\nB", "Error"],
        correct: 1,
        pembahasan: "C mewarisi konstruktor dari B, jadi hanya 'B' yang dicetak."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def show(self):\n        print('A')\nclass B(A):\n    def show(self):\n        print('B')\nclass C(B):\n    def show(self):\n        super().show()\n        print('C')\nC().show()",
        a: ["A\\nC", "B\\nC", "C\\nB", "Error"],
        correct: 1,
        pembahasan: "super() memanggil show() dari B, lalu mencetak 'C'."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class X:\n    def tampil(self):\n        print('X')\nclass Y:\n    def tampil(self):\n        print('Y')\nclass Z(X, Y):\n    pass\nZ().tampil()",
        a: ["X", "Y", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "Python menggunakan MRO (Method Resolution Order), X dicari lebih dulu."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def tampil(self):\n        print('A')\nclass B(A):\n    def tampil(self):\n        super().tampil()\n        print('B')\nclass C(B):\n    def tampil(self):\n        super().tampil()\n        print('C')\nC().tampil()",
        a: ["A\\nB\\nC", "C\\nB\\nA", "B\\nC", "Error"],
        correct: 0,
        pembahasan: "Setiap class memanggil super() lalu cetak sendiri, hasilnya berurutan A→B→C."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "class A:\n    def __init__(self, val):\n        self.val = val\nclass B(A):\n    pass\nobj = B(10)\nprint(obj.val)",
        a: ["10", "Error", "None", "0"],
        correct: 0,
        pembahasan: "B tidak override __init__, jadi gunakan konstruktor dari A."
    }
]