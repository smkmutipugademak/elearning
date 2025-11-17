let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "class Hewan:\n    def suara(self):\n        print('Hewan bersuara')\n\nclass Kucing(Hewan):\n    def suara(self):\n        print('Meong')\n\nobj = Kucing()\nobj.suara()",
        a: ["Meong", "Hewan bersuara", "Error", "None"],
        correct: 0,
        pembahasan: "Metode suara() dioverride di subclass Kucing, hasilnya 'Meong'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A:\n    def tampil(self): print('A')\nclass B(A):\n    def tampil(self): print('B')\nobj = B()\nobj.tampil()",
        a: ["B", "A", "Error", "None"],
        correct: 0,
        pembahasan: "Metode tampil() di kelas B menimpa metode A."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Burung:\n    def suara(self): print('Cuit')\nclass Ayam(Burung):\n    def suara(self): print('Kukuruyuk')\nobj = Ayam()\nobj.suara()",
        a: ["Kukuruyuk", "Cuit", "Error", "None"],
        correct: 0,
        pembahasan: "Subclass Ayam menimpa metode suara() dari Burung."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Bentuk:\n    def luas(self): print('Tidak diketahui')\nclass Persegi(Bentuk):\n    def luas(self): print('Luas = sisi * sisi')\n\nb = Persegi()\nb.luas()",
        a: ["Luas = sisi * sisi", "Tidak diketahui", "Error", "None"],
        correct: 0,
        pembahasan: "Metode luas() pada subclass menimpa metode parent."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A:\n    def f(self): print('A')\nclass B(A):\n    pass\nB().f()",
        a: ["A", "B", "Error", "None"],
        correct: 0,
        pembahasan: "Karena B tidak menimpa f(), maka f() dari A dijalankan."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A:\n    def halo(self): print('Halo A')\nclass B(A):\n    def halo(self): print('Halo B')\nclass C(B):\n    pass\n\nC().halo()",
        a: ["Halo B", "Halo A", "Error", "None"],
        correct: 0,
        pembahasan: "C mewarisi halo() dari B karena tidak menimpa."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class X:\n    def tampil(self): print('X')\nclass Y(X):\n    def tampil(self): print('Y')\nobj = X()\nobj.tampil()",
        a: ["X", "Y", "Error", "None"],
        correct: 0,
        pembahasan: "Objek berasal dari kelas X, maka metode dari X yang dipanggil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Ayam:\n    def suara(self): print('Kukuruyuk')\nclass Sapi:\n    def suara(self): print('Mooo')\nfor hewan in [Ayam(), Sapi()]:\n    hewan.suara()",
        a: ["Kukuruyuk\\nMooo", "Mooo\\nKukuruyuk", "Error", "None"],
        correct: 0,
        pembahasan: "Dua objek berbeda, keduanya punya metode suara sendiri (duck typing)."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A:\n    def cetak(self): print('A')\nclass B(A):\n    def cetak(self): print('B')\nA().cetak()\nB().cetak()",
        a: ["A\\nB", "B\\nA", "Error", "None"],
        correct: 0,
        pembahasan: "Keduanya mencetak metode sesuai kelas masing-masing."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Binatang:\n    def suara(self): print('Binatang umum')\nclass Kucing(Binatang):\n    def suara(self): super().suara()\n\nKucing().suara()",
        a: ["Binatang umum", "Kucing", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil versi parent dari metode suara()."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Bentuk:\n    def tampil(self): print('Bentuk')\nclass Persegi(Bentuk):\n    def tampil(self): print('Persegi')\nclass Lingkaran(Bentuk):\n    def tampil(self): print('Lingkaran')\nfor x in [Persegi(), Lingkaran()]:\n    x.tampil()",
        a: ["Persegi\\nLingkaran", "Bentuk\\nBentuk", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap objek menjalankan metode tampil() sesuai kelasnya."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A:\n    def f(self): print('A')\nclass B(A):\n    def f(self): print('B')\nclass C(A):\n    def f(self): print('C')\nfor obj in [A(), B(), C()]:\n    obj.f()",
        a: ["A\\nB\\nC", "B\\nC\\nA", "C\\nA\\nB", "Error"],
        correct: 0,
        pembahasan: "Setiap kelas menimpa f() sesuai definisinya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Mobil:\n    def jalan(self): print('Mobil berjalan')\nclass Motor(Mobil):\n    def jalan(self): print('Motor melaju')\nobj = [Mobil(), Motor()]\nfor i in obj: i.jalan()",
        a: ["Mobil berjalan\\nMotor melaju", "Motor melaju\\nMobil berjalan", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap objek memanggil metode sendiri."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A:\n    def cetak(self): print('A')\nclass B(A):\n    def cetak(self):\n        super().cetak()\n        print('B')\nB().cetak()",
        a: ["A\\nB", "B\\nA", "Error", "None"],
        correct: 0,
        pembahasan: "super().cetak() memanggil versi A, lalu print 'B'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Orang:\n    def bicara(self): print('Halo')\nclass Dosen(Orang):\n    def bicara(self): print('Selamat datang')\nobj = Orang()\nobj2 = Dosen()\nobj.bicara()\nobj2.bicara()",
        a: ["Halo\\nSelamat datang", "Selamat datang\\nHalo", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap objek menggunakan metode versinya sendiri."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Base:\n    def tampil(self): print('Base')\nclass Sub(Base):\n    def tampil(self):\n        super().tampil()\n        print('Sub')\nSub().tampil()",
        a: ["Base\\nSub", "Sub\\nBase", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil parent sebelum menampilkan 'Sub'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A:\n    def f(self): return 'A'\nclass B(A):\n    def f(self): return super().f() + 'B'\nprint(B().f())",
        a: ["AB", "BA", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil f() dari A lalu menambahkan 'B'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A:\n    def nilai(self): return 10\nclass B(A):\n    def nilai(self): return super().nilai() + 5\nprint(B().nilai())",
        a: ["15", "10", "Error", "None"],
        correct: 0,
        pembahasan: "Metode di B menambah hasil metode parent 10 + 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Satu:\n    def show(self): print('Satu')\nclass Dua(Satu):\n    def show(self): print('Dua')\nclass Tiga(Satu):\n    def show(self): print('Tiga')\nfor obj in [Satu(), Dua(), Tiga()]: obj.show()",
        a: ["Satu\\nDua\\nTiga", "Tiga\\nDua\\nSatu", "Error", "None"],
        correct: 0,
        pembahasan: "Polymorphism: setiap class menjalankan versi show() masing-masing."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A:\n    def tampil(self): print('A')\nclass B(A):\n    def tampil(self): print('B')\nclass C(B):\n    def tampil(self): super().tampil()\nC().tampil()",
        a: ["B", "A", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil metode tampil() milik B."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "class X:\n    def tampil(self): print('X')\nclass Y(X):\n    def tampil(self):\n        super().tampil()\n        print('Y')\nclass Z(Y):\n    def tampil(self):\n        super().tampil()\n        print('Z')\nZ().tampil()",
        a: ["X\\nY\\nZ", "Z\\nY\\nX", "Error", "None"],
        correct: 0,
        pembahasan: "Pemanggilan bertingkat menggunakan super()."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A:\n    def data(self): return 2\nclass B(A):\n    def data(self): return super().data() * 3\nprint(B().data())",
        a: ["6", "2", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil parent (2) lalu dikali 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A:\n    def f(self): print('A')\nclass B(A):\n    def f(self): print('B')\nclass C(B):\n    def f(self): super().f()\n\nC().f()",
        a: ["B", "A", "Error", "None"],
        correct: 0,
        pembahasan: "super().f() memanggil f() milik B."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Hewan:\n    def suara(self): print('Hewan')\nclass Anjing(Hewan):\n    def suara(self): print('Guk')\nclass Kucing(Hewan):\n    def suara(self): print('Meong')\nfor h in [Anjing(), Kucing(), Hewan()]: h.suara()",
        a: ["Guk\\nMeong\\nHewan", "Hewan\\nGuk\\nMeong", "Error", "None"],
        correct: 0,
        pembahasan: "Polymorphism: setiap class menjalankan versinya sendiri."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Base:\n    def show(self): print('Base')\nclass Child(Base):\n    def show(self):\n        print('Child')\n        super().show()\nChild().show()",
        a: ["Child\\nBase", "Base\\nChild", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil metode parent setelah child menampilkan pesannya."
    }
];