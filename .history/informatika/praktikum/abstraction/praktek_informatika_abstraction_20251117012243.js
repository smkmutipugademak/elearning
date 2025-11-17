let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL DASAR (ABSTRACTION) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "from abc import ABC, abstractmethod\n\nclass Hewan(ABC):\n    @abstractmethod\n    def suara(self):\n        pass",
        a: ["Tidak ada output", "Error", "suara()", "None"],
        correct: 0,
        pembahasan: "Tidak ada instance dibuat, jadi tidak ada output."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def tampil(self):\n        pass\n\nobj = A()",
        a: ["Error", "Tidak ada output", "None", "tampil"],
        correct: 0,
        pembahasan: "Kelas abstrak tidak bisa diinstansiasi langsung."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Hewan(ABC):\n    @abstractmethod\n    def suara(self):\n        pass\n\nclass Kucing(Hewan):\n    def suara(self):\n        print('Meong')\n\nk = Kucing()\nk.suara()",
        a: ["Meong", "Error", "None", "pass"],
        correct: 0,
        pembahasan: "Kelas turunan mengimplementasikan metode abstrak → mencetak 'Meong'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Bentuk(ABC):\n    @abstractmethod\n    def luas(self):\n        pass\n\nclass Persegi(Bentuk):\n    def luas(self):\n        return 25\n\np = Persegi()\nprint(p.luas())",
        a: ["25", "Error", "luas", "None"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasikan dan mengembalikan 25."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Tes(ABC):\n    @abstractmethod\n    def f(self): pass\n\nclass Coba(Tes):\n    pass\n\nobj = Coba()",
        a: ["Error", "Tidak ada output", "None", "pass"],
        correct: 0,
        pembahasan: "Kelas Coba belum mengimplementasikan f(), jadi error saat instansiasi."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def tampil(self): pass\n\nclass B(A):\n    def tampil(self): print('Halo')\n\nB().tampil()",
        a: ["Halo", "Error", "None", "pass"],
        correct: 0,
        pembahasan: "Metode tampil() diimplementasikan → output 'Halo'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Mesin(ABC):\n    @abstractmethod\n    def hidupkan(self): pass\n\nclass Mobil(Mesin):\n    def hidupkan(self): print('Mesin hidup')\n\nm = Mobil()\nm.hidupkan()",
        a: ["Mesin hidup", "Error", "pass", "None"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi dengan benar."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def show(self): pass\n\nclass B(A):\n    def show(self): return 'OK'\n\nprint(B().show())",
        a: ["OK", "Error", "None", "show"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasikan dan dipanggil → 'OK'."
    },
    {
        q: "Apa yang terjadi jika metode abstrak tidak diimplementasikan di subclass?",
        a: ["Error saat membuat objek", "Program tetap jalan", "Hanya peringatan", "Metode diabaikan"],
        correct: 0,
        pembahasan: "Python akan error ketika mencoba membuat objek subclass tanpa implementasi."
    },
    {
        q: "Apa fungsi dari decorator @abstractmethod?",
        a: ["Menandai metode harus diimplementasi di subclass", "Menjalankan otomatis", "Membuat fungsi privat", "Menghapus fungsi"],
        correct: 0,
        pembahasan: "@abstractmethod menandai metode wajib diimplementasikan."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Bentuk(ABC):\n    @abstractmethod\n    def luas(self): pass\n\nclass Lingkaran(Bentuk):\n    def luas(self): return 3.14 * 5 * 5\n\nprint(Lingkaran().luas())",
        a: ["78.5", "Error", "3.14", "25"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak dengan rumus luas lingkaran."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def f1(self): pass\n\nclass B(A):\n    def f1(self): print('Implementasi B')\n\nb = B()\nb.f1()",
        a: ["Implementasi B", "Error", "None", "pass"],
        correct: 0,
        pembahasan: "B mengimplementasikan f1() dengan benar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def tampil(self): pass\n\nclass B(A):\n    def tampil(self): print('B tampil')\n\nclass C(B): pass\n\nC().tampil()",
        a: ["B tampil", "Error", "C tampil", "None"],
        correct: 0,
        pembahasan: "C mewarisi implementasi tampil() dari B."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass X(ABC):\n    @abstractmethod\n    def f(self): pass\n\nclass Y(X):\n    def f(self): print('Y')\n\nclass Z(Y):\n    def f(self): super().f()\n\nZ().f()",
        a: ["Y", "Z", "Error", "None"],
        correct: 0,
        pembahasan: "super().f() memanggil implementasi dari Y → output 'Y'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def f(self): pass\n\nclass B(A):\n    def f(self): print('B')\n\nclass C(B):\n    def g(self): print('C')\n\nC().f()",
        a: ["B", "C", "Error", "None"],
        correct: 0,
        pembahasan: "C mewarisi f() dari B → mencetak 'B'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def data(self): pass\n\nclass B(A):\n    def data(self): return 10\n\nprint(isinstance(B(), A))",
        a: ["True", "False", "Error", "None"],
        correct: 0,
        pembahasan: "B adalah subclass dari A, jadi isinstance(B(), A) bernilai True."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Animal(ABC):\n    @abstractmethod\n    def sound(self): pass\n\nclass Dog(Animal):\n    def sound(self): return 'Bark'\n\nprint(Dog().sound())",
        a: ["Bark", "Error", "None", "sound"],
        correct: 0,
        pembahasan: "Metode sound diimplementasikan, hasilnya 'Bark'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Base(ABC):\n    @abstractmethod\n    def show(self): pass\n\nclass Derived(Base):\n    def show(self): print('Derived')\n\nobj = Derived()\nobj.show()",
        a: ["Derived", "Base", "Error", "None"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi di subclass Derived."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Satu(ABC):\n    @abstractmethod\n    def run(self): pass\n\nclass Dua(Satu):\n    def run(self): print('Berjalan')\n\nDua().run()",
        a: ["Berjalan", "Error", "None", "run"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak dengan benar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Bentuk(ABC):\n    @abstractmethod\n    def nama(self): pass\n\nclass Persegi(Bentuk):\n    def nama(self): return 'Persegi'\n\nb = Persegi()\nprint(b.nama())",
        a: ["Persegi", "Error", "None", "nama"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi → mengembalikan 'Persegi'."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass A(ABC):\n    @abstractmethod\n    def tampil(self): pass\n\nclass B(A):\n    def tampil(self): print('B')\n\nclass C(B):\n    def tampil(self):\n        super().tampil()\n        print('C')\n\nC().tampil()",
        a: ["B\\nC", "C\\nB", "Error", "B"],
        correct: 0,
        pembahasan: "super() memanggil tampil() dari B lalu mencetak 'C'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Base(ABC):\n    @abstractmethod\n    def info(self): pass\n\nclass Sub(Base):\n    def info(self): return 42\n\nprint(Sub().info() * 2)",
        a: ["84", "42", "Error", "None"],
        correct: 0,
        pembahasan: "Metode abstrak mengembalikan 42, dikali 2 = 84."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Base(ABC):\n    @abstractmethod\n    def data(self): pass\n\nclass Child(Base):\n    def data(self): return [1, 2, 3]\n\nprint(sum(Child().data()))",
        a: ["6", "3", "Error", "None"],
        correct: 0,
        pembahasan: "Metode mengembalikan list [1,2,3], hasil penjumlahan = 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass X(ABC):\n    @abstractmethod\n    def nilai(self): pass\n\nclass Y(X):\n    def nilai(self): return 5\n\nclass Z(Y):\n    def nilai(self): return super().nilai() + 5\n\nprint(Z().nilai())",
        a: ["10", "5", "Error", "None"],
        correct: 0,
        pembahasan: "Z menambah 5 dari nilai() superclass Y → total 10."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "from abc import ABC, abstractmethod\nclass Transport(ABC):\n    @abstractmethod\n    def jalan(self): pass\n\nclass Mobil(Transport):\n    def jalan(self): print('Braaak!')\n\nm = Mobil()\nm.jalan()",
        a: ["Braaak!", "Error", "None", "jalan"],
        correct: 0,
        pembahasan: "Implementasi metode abstrak berhasil dijalankan."
    }
];