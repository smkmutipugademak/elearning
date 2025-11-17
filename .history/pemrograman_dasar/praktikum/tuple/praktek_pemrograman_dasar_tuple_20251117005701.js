let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (ARRAY "TUPLE" DASAR) ===================
    {
        q: "Apa tipe data dari variabel berikut?",
        code: "const data = [1, 2, 3];",
        a: ["Array", "Object", "Set", "Map"],
        correct: 0,
        pembahasan: "Tanda kurung siku [] menandakan array di JavaScript."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [10, 20, 30];\nconsole.log(data[0]);",
        a: ["10", "20", "30", "Error"],
        correct: 0,
        pembahasan: "Indeks 0 mengakses elemen pertama array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.length);",
        a: ["2", "3", "1", "Error"],
        correct: 1,
        pembahasan: "length menghitung jumlah elemen dalam array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [];\nconsole.log(data.length);",
        a: ["0", "1", "Error", "undefined"],
        correct: 0,
        pembahasan: "Array kosong memiliki panjang 0."
    },
    {
        q: "Bagaimana cara membuat array dengan satu elemen?",
        code: "const data = [1];\nconsole.log(Array.isArray(data));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Array dengan satu elemen ditulis [1]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.includes(2));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "includes() memeriksa apakah elemen ada di array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data[data.length - 1]);",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "data[data.length - 1] mengakses elemen terakhir array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [10, 20, 30];\nconsole.log(data[1 + 1]);",
        a: ["10", "20", "30", "Error"],
        correct: 2,
        pembahasan: "1+1=2, jadi elemen di indeks ke-2 adalah 30."
    },
    {
        q: "Bagaimana cara menggabungkan dua array?",
        code: "const a = [1, 2];\nconst b = [3, 4];\nconsole.log(a.concat(b));",
        a: ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "Error", "undefined"],
        correct: 0,
        pembahasan: "concat() digunakan untuk menggabungkan dua array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2];\nconsole.log(data.concat(data));",
        a: ["[1, 2, 1, 2]", "[2, 4]", "[1, 1, 2, 2]", "Error"],
        correct: 0,
        pembahasan: "concat() dapat menggandakan isi array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = Array.from([1, 2, 3]);\nconsole.log(data);",
        a: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "Error"],
        correct: 0,
        pembahasan: "Array.from() mengubah iterable menjadi array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\ndata.forEach(i => console.log(i));",
        a: ["1\\n2\\n3", "123", "Error", "Tidak ada output"],
        correct: 0,
        pembahasan: "forEach mencetak setiap elemen array pada baris baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = ['a', 'b', 'c'];\nconsole.log(data[1]);",
        a: ["'a'", "'b'", "'c'", "Error"],
        correct: 1,
        pembahasan: "Indeks 1 berarti elemen kedua yaitu 'b'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(typeof data);",
        a: ["object", "array", "set", "list"],
        correct: 0,
        pembahasan: "Array adalah tipe object di JavaScript."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.reduce((a,b)=>a+b));",
        a: ["6", "3", "Error", "undefined"],
        correct: 0,
        pembahasan: "reduce() menjumlahkan semua elemen → 6."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = Array(3).fill('js');\nconsole.log(data);",
        a: ["['js', 'js', 'js']", "['js']", "Error", "undefined"],
        correct: 0,
        pembahasan: "fill() mengisi array dengan nilai yang sama."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, [2, 3]];\nconsole.log(data[1][0]);",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "data[1] adalah [2,3], elemen pertama dari itu adalah 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(Math.max(...data));",
        a: ["3", "2", "1", "Error"],
        correct: 0,
        pembahasan: "Math.max(...array) mengembalikan nilai terbesar."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 2, 3];\nconsole.log(data.filter(x => x === 2).length);",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "Ada dua nilai 2 dalam array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.includes(4));",
        a: ["true", "false", "Error", "undefined"],
        correct: 1,
        pembahasan: "4 tidak ada dalam array, jadi hasilnya false."
    },

    // =================== LEVEL MENENGAH–ADVANCED ===================
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [10, 20, 30];\nconst [a, b, c] = data;\nconsole.log(a + b + c);",
        a: ["60", "102030", "Error", "undefined"],
        correct: 0,
        pembahasan: "Array bisa di-destructuring ke beberapa variabel."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3, 4];\nconst [a, ...b] = data;\nconsole.log(b);",
        a: ["[2, 3, 4]", "[1, 2, 3]", "Error", "undefined"],
        correct: 0,
        pembahasan: "Operator spread (...) mengumpulkan sisa elemen menjadi array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\ndata[0] = 10;\nconsole.log(data);",
        a: ["[10, 2, 3]", "Error", "[1, 2, 3]", "undefined"],
        correct: 0,
        pembahasan: "Array bersifat mutable, elemennya bisa diubah."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconst newData = data.concat([4]);\nconsole.log(newData);",
        a: ["[1, 2, 3, 4]", "[1, 2, 3]", "Error", "undefined"],
        correct: 0,
        pembahasan: "concat() membuat array baru hasil gabungan."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [5, 10, 15];\nconsole.log(Math.min(...data));",
        a: ["5", "10", "15", "Error"],
        correct: 0,
        pembahasan: "Math.min(...array) mengembalikan nilai terkecil."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = ['a', 'b', 'c'];\nconsole.log(data.join('-'));",
        a: ["a-b-c", "['a','b','c']", "Error", "abc"],
        correct: 0,
        pembahasan: "join() menggabungkan elemen string array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, [2, [3, 4]]];\nconsole.log(data[1][1][0]);",
        a: ["3", "4", "2", "Error"],
        correct: 0,
        pembahasan: "Array bersarang diakses dengan indeks berlapis."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.reduce((a,b)=>a+b)/data.length);",
        a: ["2", "3", "1", "Error"],
        correct: 0,
        pembahasan: "Rata-rata = (1+2+3)/3 = 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [1, 2, 3];\nconsole.log(data.every(Boolean));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Semua elemen bukan nol → true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = [0, 1, 2];\nconsole.log(data.some(Boolean));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Ada elemen non-nol, maka true."
    }
];


