let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================
    {
        q: "Apa output dari kode berikut?",
        code: "class Hewan {\n  suara() {\n    console.log('Hewan bersuara');\n  }\n}\n\nclass Kucing extends Hewan {\n  suara() {\n    console.log('Meong');\n  }\n}\n\nconst obj = new Kucing();\nobj.suara();",
        a: ["Meong", "Hewan bersuara", "Error", "None"],
        correct: 0,
        pembahasan: "Metode suara() dioverride di subclass Kucing, hasilnya 'Meong'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  tampil() { console.log('A'); }\n}\nclass B extends A {\n  tampil() { console.log('B'); }\n}\nconst obj = new B();\nobj.tampil();",
        a: ["B", "A", "Error", "None"],
        correct: 0,
        pembahasan: "Metode tampil() di kelas B menimpa metode A."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Burung {\n  suara() { console.log('Cuit'); }\n}\nclass Ayam extends Burung {\n  suara() { console.log('Kukuruyuk'); }\n}\nconst obj = new Ayam();\nobj.suara();",
        a: ["Kukuruyuk", "Cuit", "Error", "None"],
        correct: 0,
        pembahasan: "Subclass Ayam menimpa metode suara() dari Burung."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Bentuk {\n  luas() { console.log('Tidak diketahui'); }\n}\nclass Persegi extends Bentuk {\n  luas() { console.log('Luas = sisi * sisi'); }\n}\n\nconst b = new Persegi();\nb.luas();",
        a: ["Luas = sisi * sisi", "Tidak diketahui", "Error", "None"],
        correct: 0,
        pembahasan: "Metode luas() pada subclass menimpa metode parent."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  f() { console.log('A'); }\n}\nclass B extends A {}\nnew B().f();",
        a: ["A", "B", "Error", "None"],
        correct: 0,
        pembahasan: "Karena B tidak menimpa f(), maka f() dari A dijalankan."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  halo() { console.log('Halo A'); }\n}\nclass B extends A {\n  halo() { console.log('Halo B'); }\n}\nclass C extends B {}\n\nnew C().halo();",
        a: ["Halo B", "Halo A", "Error", "None"],
        correct: 0,
        pembahasan: "C mewarisi halo() dari B karena tidak menimpa."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class X {\n  tampil() { console.log('X'); }\n}\nclass Y extends X {\n  tampil() { console.log('Y'); }\n}\nconst obj = new X();\nobj.tampil();",
        a: ["X", "Y", "Error", "None"],
        correct: 0,
        pembahasan: "Objek berasal dari kelas X, maka metode dari X yang dipanggil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Ayam {\n  suara() { console.log('Kukuruyuk'); }\n}\nclass Sapi {\n  suara() { console.log('Mooo'); }\n}\nfor (const hewan of [new Ayam(), new Sapi()]) {\n  hewan.suara();\n}",
        a: ["Kukuruyuk\\nMooo", "Mooo\\nKukuruyuk", "Error", "None"],
        correct: 0,
        pembahasan: "Dua objek berbeda, keduanya punya metode suara sendiri (duck typing)."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  cetak() { console.log('A'); }\n}\nclass B extends A {\n  cetak() { console.log('B'); }\n}\nnew A().cetak();\nnew B().cetak();",
        a: ["A\\nB", "B\\nA", "Error", "None"],
        correct: 0,
        pembahasan: "Keduanya mencetak metode sesuai kelas masing-masing."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Binatang {\n  suara() { console.log('Binatang umum'); }\n}\nclass Kucing extends Binatang {\n  suara() { super.suara(); }\n}\nnew Kucing().suara();",
        a: ["Binatang umum", "Kucing", "Error", "None"],
        correct: 0,
        pembahasan: "super.memanggil versi parent dari metode suara()."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Bentuk {\n  tampil() { console.log('Bentuk'); }\n}\nclass Persegi extends Bentuk {\n  tampil() { console.log('Persegi'); }\n}\nclass Lingkaran extends Bentuk {\n  tampil() { console.log('Lingkaran'); }\n}\nfor (const x of [new Persegi(), new Lingkaran()]) {\n  x.tampil();\n}",
        a: ["Persegi\\nLingkaran", "Bentuk\\nBentuk", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap objek menjalankan metode tampil() sesuai kelasnya."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  f() { console.log('A'); }\n}\nclass B extends A {\n  f() { console.log('B'); }\n}\nclass C extends A {\n  f() { console.log('C'); }\n}\nfor (const obj of [new A(), new B(), new C()]) {\n  obj.f();\n}",
        a: ["A\\nB\\nC", "B\\nC\\nA", "C\\nA\\nB", "Error"],
        correct: 0,
        pembahasan: "Setiap kelas menimpa f() sesuai definisinya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Mobil {\n  jalan() { console.log('Mobil berjalan'); }\n}\nclass Motor extends Mobil {\n  jalan() { console.log('Motor melaju'); }\n}\nconst obj = [new Mobil(), new Motor()];\nfor (const i of obj) i.jalan();",
        a: ["Mobil berjalan\\nMotor melaju", "Motor melaju\\nMobil berjalan", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap objek memanggil metode sendiri."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  cetak() { console.log('A'); }\n}\nclass B extends A {\n  cetak() {\n    super.cetak();\n    console.log('B');\n  }\n}\nnew B().cetak();",
        a: ["A\\nB", "B\\nA", "Error", "None"],
        correct: 0,
        pembahasan: "super.cetak() memanggil versi A, lalu print 'B'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Orang {\n  bicara() { console.log('Halo'); }\n}\nclass Dosen extends Orang {\n  bicara() { console.log('Selamat datang'); }\n}\nconst obj = new Orang();\nconst obj2 = new Dosen();\nobj.bicara();\nobj2.bicara();",
        a: ["Halo\\nSelamat datang", "Selamat datang\\nHalo", "Error", "None"],
        correct: 0,
        pembahasan: "Setiap objek menggunakan metode versinya sendiri."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Base {\n  tampil() { console.log('Base'); }\n}\nclass Sub extends Base {\n  tampil() {\n    super.tampil();\n    console.log('Sub');\n  }\n}\nnew Sub().tampil();",
        a: ["Base\\nSub", "Sub\\nBase", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil parent sebelum menampilkan 'Sub'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  f() { return 'A'; }\n}\nclass B extends A {\n  f() { return super.f() + 'B'; }\n}\nconsole.log(new B().f());",
        a: ["AB", "BA", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil f() dari A lalu menambahkan 'B'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  nilai() { return 10; }\n}\nclass B extends A {\n  nilai() { return super.nilai() + 5; }\n}\nconsole.log(new B().nilai());",
        a: ["15", "10", "Error", "None"],
        correct: 0,
        pembahasan: "Metode di B menambah hasil metode parent 10 + 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Satu {\n  show() { console.log('Satu'); }\n}\nclass Dua extends Satu {\n  show() { console.log('Dua'); }\n}\nclass Tiga extends Satu {\n  show() { console.log('Tiga'); }\n}\nfor (const obj of [new Satu(), new Dua(), new Tiga()]) obj.show();",
        a: ["Satu\\nDua\\nTiga", "Tiga\\nDua\\nSatu", "Error", "None"],
        correct: 0,
        pembahasan: "Polymorphism: setiap class menjalankan versi show() masing-masing."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  tampil() { console.log('A'); }\n}\nclass B extends A {\n  tampil() { console.log('B'); }\n}\nclass C extends B {\n  tampil() { super.tampil(); }\n}\nnew C().tampil();",
        a: ["B", "A", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil metode tampil() milik B."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "class X {\n  tampil() { console.log('X'); }\n}\nclass Y extends X {\n  tampil() {\n    super.tampil();\n    console.log('Y');\n  }\n}\nclass Z extends Y {\n  tampil() {\n    super.tampil();\n    console.log('Z');\n  }\n}\nnew Z().tampil();",
        a: ["X\\nY\\nZ", "Z\\nY\\nX", "Error", "None"],
        correct: 0,
        pembahasan: "Pemanggilan bertingkat menggunakan super()."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class A {\n  data() { return 2; }\n}\nclass B extends A {\n  data() { return super.data() * 3; }\n}\nconsole.log(new B().data());",
        a: ["6", "2", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil parent (2) lalu dikali 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class A {\n  f() { console.log('A'); }\n}\nclass B extends A {\n  f() { console.log('B'); }\n}\nclass C extends B {\n  f() { super.f(); }\n}\nnew C().f();",
        a: ["B", "A", "Error", "None"],
        correct: 0,
        pembahasan: "super().f() memanggil f() milik B."
    },
    {
        q: "Apa hasil kode berikut?",
        code: "class Hewan {\n  suara() { console.log('Hewan'); }\n}\nclass Anjing extends Hewan {\n  suara() { console.log('Guk'); }\n}\nclass Kucing extends Hewan {\n  suara() { console.log('Meong'); }\n}\nfor (const h of [new Anjing(), new Kucing(), new Hewan()]) h.suara();",
        a: ["Guk\\nMeong\\nHewan", "Hewan\\nGuk\\nMeong", "Error", "None"],
        correct: 0,
        pembahasan: "Polymorphism: setiap class menjalankan versinya sendiri."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "class Base {\n  show() { console.log('Base'); }\n}\nclass Child extends Base {\n  show() {\n    console.log('Child');\n    super.show();\n  }\n}\nnew Child().show();",
        a: ["Child\\nBase", "Base\\nChild", "Error", "None"],
        correct: 0,
        pembahasan: "super() memanggil metode parent setelah child menampilkan pesannya."
    }
];