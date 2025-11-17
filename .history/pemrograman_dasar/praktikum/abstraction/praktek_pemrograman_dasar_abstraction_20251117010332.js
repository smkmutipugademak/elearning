let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL DASAR (ABSTRACTION) ===================
    {
        q: "Apa output dari kode berikut?",
        code: `class Hewan {
    suara() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
// Tidak ada instance dibuat`,
        a: ["Tidak ada output", "Error", "suara()", "undefined"],
        correct: 0,
        pembahasan: "Tidak ada objek yang dibuat, jadi tidak ada output."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    tampil() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
let obj = new A();`,
        a: ["Error", "Tidak ada output", "undefined", "tampil"],
        correct: 0,
        pembahasan: "Kelas abstrak tidak bisa digunakan langsung karena metodenya belum diimplementasikan."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Hewan {
    suara() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class Kucing extends Hewan {
    suara() {
        console.log("Meong");
    }
}
let k = new Kucing();
k.suara();`,
        a: ["Meong", "Error", "undefined", "pass"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak → mencetak 'Meong'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Bentuk {
    luas() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class Persegi extends Bentuk {
    luas() {
        return 25;
    }
}
let p = new Persegi();
console.log(p.luas());`,
        a: ["25", "Error", "luas", "undefined"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasikan dan mengembalikan 25."
    },
    {
        q: "Apa hasil kode berikut?",
        code: `class Tes {
    f() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class Coba extends Tes {}
let obj = new Coba();`,
        a: ["Error", "Tidak ada output", "undefined", "pass"],
        correct: 0,
        pembahasan: "Kelas Coba belum mengimplementasikan f(), jadi error saat instansiasi."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    tampil() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class B extends A {
    tampil() {
        console.log("Halo");
    }
}
new B().tampil();`,
        a: ["Halo", "Error", "undefined", "pass"],
        correct: 0,
        pembahasan: "Metode tampil() diimplementasikan → output 'Halo'."
    },
    {
        q: "Apa hasil kode berikut?",
        code: `class Mesin {
    hidupkan() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class Mobil extends Mesin {
    hidupkan() {
        console.log("Mesin hidup");
    }
}
let m = new Mobil();
m.hidupkan();`,
        a: ["Mesin hidup", "Error", "pass", "undefined"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi dengan benar."
    },
    {
        q: "Apa hasil kode berikut?",
        code: `class A {
    show() {
        throw new Error("Metode abstrak harus diimplementasikan");
    }
}
class B extends A {
    show() {
        return "OK";
    }
}
console.log(new B().show());`,
        a: ["OK", "Error", "undefined", "show"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasikan dan dipanggil → 'OK'."
    },
    {
        q: "Apa yang terjadi jika metode abstrak tidak diimplementasikan di subclass?",
        a: ["Error saat membuat objek", "Program tetap jalan", "Hanya peringatan", "Metode diabaikan"],
        correct: 0,
        pembahasan: "Akan error ketika memanggil metode yang belum diimplementasikan."
    },
    {
        q: "Apa fungsi dari konsep metode abstrak?",
        a: ["Menandai metode harus diimplementasi di subclass", "Menjalankan otomatis", "Membuat fungsi privat", "Menghapus fungsi"],
        correct: 0,
        pembahasan: "Metode abstrak menandakan bahwa subclass wajib mengimplementasikannya."
    },

    // =================== LEVEL MENENGAH ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Bentuk {
    luas() {
        throw new Error("Harus diimplementasikan");
    }
}
class Lingkaran extends Bentuk {
    luas() {
        return 3.14 * 5 * 5;
    }
}
console.log(new Lingkaran().luas());`,
        a: ["78.5", "Error", "3.14", "25"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak dengan rumus luas lingkaran."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    f1() {
        throw new Error("Abstrak");
    }
}
class B extends A {
    f1() {
        console.log("Implementasi B");
    }
}
let b = new B();
b.f1();`,
        a: ["Implementasi B", "Error", "undefined", "pass"],
        correct: 0,
        pembahasan: "B mengimplementasikan f1() dengan benar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    tampil() {
        throw new Error("Abstrak");
    }
}
class B extends A {
    tampil() {
        console.log("B tampil");
    }
}
class C extends B {}
new C().tampil();`,
        a: ["B tampil", "Error", "C tampil", "undefined"],
        correct: 0,
        pembahasan: "C mewarisi implementasi tampil() dari B."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class X {
    f() {
        throw new Error("Abstrak");
    }
}
class Y extends X {
    f() {
        console.log("Y");
    }
}
class Z extends Y {
    f() {
        super.f();
    }
}
new Z().f();`,
        a: ["Y", "Z", "Error", "undefined"],
        correct: 0,
        pembahasan: "super.f() memanggil implementasi dari Y → output 'Y'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    f() {
        throw new Error("Abstrak");
    }
}
class B extends A {
    f() {
        console.log("B");
    }
}
class C extends B {
    g() {
        console.log("C");
    }
}
new C().f();`,
        a: ["B", "C", "Error", "undefined"],
        correct: 0,
        pembahasan: "C mewarisi f() dari B → mencetak 'B'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    data() { throw new Error("Abstrak"); }
}
class B extends A {
    data() { return 10; }
}
console.log(new B() instanceof A);`,
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "B adalah subclass dari A, jadi instanceof bernilai true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Animal {
    sound() { throw new Error("Abstrak"); }
}
class Dog extends Animal {
    sound() { return "Bark"; }
}
console.log(new Dog().sound());`,
        a: ["Bark", "Error", "undefined", "sound"],
        correct: 0,
        pembahasan: "Metode sound diimplementasikan, hasilnya 'Bark'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Base {
    show() { throw new Error("Abstrak"); }
}
class Derived extends Base {
    show() { console.log("Derived"); }
}
let obj = new Derived();
obj.show();`,
        a: ["Derived", "Base", "Error", "undefined"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi di subclass Derived."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Satu {
    run() { throw new Error("Abstrak"); }
}
class Dua extends Satu {
    run() { console.log("Berjalan"); }
}
new Dua().run();`,
        a: ["Berjalan", "Error", "undefined", "run"],
        correct: 0,
        pembahasan: "Subclass mengimplementasikan metode abstrak dengan benar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Bentuk {
    nama() { throw new Error("Abstrak"); }
}
class Persegi extends Bentuk {
    nama() { return "Persegi"; }
}
let b = new Persegi();
console.log(b.nama());`,
        a: ["Persegi", "Error", "undefined", "nama"],
        correct: 0,
        pembahasan: "Metode abstrak diimplementasi → mengembalikan 'Persegi'."
    },

    // =================== LEVEL LANJUT ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: `class A {
    tampil() { throw new Error("Abstrak"); }
}
class B extends A {
    tampil() { console.log("B"); }
}
class C extends B {
    tampil() {
        super.tampil();
        console.log("C");
    }
}
new C().tampil();`,
        a: ["B\\nC", "C\\nB", "Error", "B"],
        correct: 0,
        pembahasan: "super() memanggil tampil() dari B lalu mencetak 'C'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Base {
    info() { throw new Error("Abstrak"); }
}
class Sub extends Base {
    info() { return 42; }
}
console.log(new Sub().info() * 2);`,
        a: ["84", "42", "Error", "undefined"],
        correct: 0,
        pembahasan: "Metode abstrak mengembalikan 42, dikali 2 = 84."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Base {
    data() { throw new Error("Abstrak"); }
}
class Child extends Base {
    data() { return [1, 2, 3]; }
}
console.log(Child.prototype.data.call(new Child()).reduce((a,b)=>a+b));`,
        a: ["6", "3", "Error", "undefined"],
        correct: 0,
        pembahasan: "Metode mengembalikan array [1,2,3], hasil penjumlahan = 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class X {
    nilai() { throw new Error("Abstrak"); }
}
class Y extends X {
    nilai() { return 5; }
}
class Z extends Y {
    nilai() { return super.nilai() + 5; }
}
console.log(new Z().nilai());`,
        a: ["10", "5", "Error", "undefined"],
        correct: 0,
        pembahasan: "Z menambah 5 dari nilai() superclass Y → total 10."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: `class Transport {
    jalan() { throw new Error("Abstrak"); }
}
class Mobil extends Transport {
    jalan() { console.log("Braaak!"); }
}
let m = new Mobil();
m.jalan();`,
        a: ["Braaak!", "Error", "undefined", "jalan"],
        correct: 0,
        pembahasan: "Implementasi metode abstrak berhasil dijalankan."
    }
];
// MULAI QUIZ
renderQuiz();