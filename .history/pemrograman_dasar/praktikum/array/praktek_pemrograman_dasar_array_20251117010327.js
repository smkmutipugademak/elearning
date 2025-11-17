let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (ARRAY DASAR) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka[0]);",
        a: ["1", "2", "3", "Error"],
        correct: 0,
        pembahasan: "Indeks pertama (0) berisi nilai 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [5, 10, 15];\nconsole.log(angka[2]);",
        a: ["5", "10", "15", "Error"],
        correct: 2,
        pembahasan: "Indeks ke-2 menunjukkan elemen ketiga yaitu 15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka.length);",
        a: ["2", "3", "4", "Error"],
        correct: 1,
        pembahasan: "Properti length menghitung jumlah elemen dalam array, yaitu 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [];\nangka.push(10);\nconsole.log(angka);",
        a: ["[]", "[10]", "10", "Error"],
        correct: 1,
        pembahasan: "push() menambah elemen ke akhir array → [10]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2];\nangka.push(3);\nconsole.log(angka);",
        a: ["[1, 2, 3]", "[3, 2, 1]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "push() menambahkan elemen 3 di akhir array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [10, 20, 30];\nangka[1] = 99;\nconsole.log(angka);",
        a: ["[10, 99, 30]", "[99, 20, 30]", "[10, 20, 30]", "Error"],
        correct: 0,
        pembahasan: "Elemen pada indeks ke-1 diubah menjadi 99."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka.pop();\nconsole.log(angka);",
        a: ["[1, 2]", "[2, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "pop() menghapus elemen terakhir → [1, 2]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka[angka.length - 1]);",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Indeks terakhir adalah length - 1, hasilnya 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [2, 4];\nconsole.log(angka.concat(angka));",
        a: ["[2, 4, 2, 4]", "[4, 8]", "[2, 4, 4]", "Error"],
        correct: 0,
        pembahasan: "concat() menggandakan isi array → [2, 4, 2, 4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka.reduce((a,b)=>a+b));",
        a: ["6", "123", "Error", "None"],
        correct: 0,
        pembahasan: "reduce() menjumlahkan semua elemen → 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [5, 6, 7];\nconsole.log(angka.includes(2));",
        a: ["True", "False", "Error", "None"],
        correct: 1,
        pembahasan: "2 tidak ada di array [5,6,7] → hasilnya false."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka.slice(0, 2));",
        a: ["[1, 2]", "[2, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "slice(0,2) mengambil indeks 0 dan 1 → [1,2]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka = [];\nconsole.log(angka);",
        a: ["[]", "[1, 2, 3]", "None", "Error"],
        correct: 0,
        pembahasan: "Array dikosongkan, hasilnya []."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [2, 4, 6];\nconsole.log(Math.max(...angka));",
        a: ["2", "4", "6", "Error"],
        correct: 2,
        pembahasan: "Math.max() mencari nilai terbesar dalam array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [3, 1, 2];\nangka.sort();\nconsole.log(angka);",
        a: ["[3, 1, 2]", "[1, 2, 3]", "[2, 1, 3]", "Error"],
        correct: 1,
        pembahasan: "sort() mengurutkan elemen secara ascending (string-based, tapi tetap benar di sini)."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka.reverse();\nconsole.log(angka);",
        a: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"],
        correct: 0,
        pembahasan: "reverse() membalik urutan elemen dalam array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [10];\nconsole.log(angka.length);",
        a: ["0", "1", "10", "Error"],
        correct: 1,
        pembahasan: "Array berisi satu elemen, panjangnya 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 1, 1];\nconsole.log(angka.filter(x => x === 1).length);",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Ada tiga angka 1 dalam array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka.splice(1, 0, 5);\nconsole.log(angka);",
        a: ["[1, 5, 2, 3]", "[5, 1, 2, 3]", "[1, 2, 5, 3]", "Error"],
        correct: 0,
        pembahasan: "splice(1,0,5) menyisipkan 5 di posisi indeks 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka.splice(angka.indexOf(2), 1);\nconsole.log(angka);",
        a: ["[1, 3]", "[2, 3]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "splice() menghapus nilai pertama yang cocok, yaitu 2."
    },

    // =================== LEVEL MENENGAH (ARRAY OPERASI & LOGIKA) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nconsole.log(angka.filter((_,i)=>i%2===0));",
        a: ["[1, 3]", "[2, 3]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "Indeks genap diambil → [1,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nlet angka2 = angka.slice();\nangka2.push(4);\nconsole.log(angka);",
        a: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
        correct: 0,
        pembahasan: "slice() membuat salinan, jadi array asli tidak berubah."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2];\nlet buah = ['apel', 'pisang'];\nconsole.log(angka.concat(buah));",
        a: ["[1, 2, 'apel', 'pisang']", "['apel', 'pisang', 1, 2]", "Error", "[1, 2]['apel','pisang']"],
        correct: 0,
        pembahasan: "concat() menggabungkan dua array menjadi satu."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let data = [[1,2], [3,4]];\nconsole.log(data[1][0]);",
        a: ["1", "2", "3", "4"],
        correct: 2,
        pembahasan: "data[1] = [3,4], lalu [0] mengambil elemen pertama yaitu 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4];\nconsole.log(angka.slice(1,3));",
        a: ["[2, 3]", "[1, 2, 3]", "[3, 4]", "Error"],
        correct: 0,
        pembahasan: "slice(1,3) mengambil indeks 1 dan 2 → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4,5];\nconsole.log(angka.filter((_,i)=>i%2!==0));",
        a: ["[2, 4]", "[1,3,5]", "[2,3,4]", "Error"],
        correct: 0,
        pembahasan: "Indeks ganjil diambil → [2,4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [10,20,30];\nangka.forEach(x=>process.stdout.write(x + ' '));",
        a: ["10 20 30 ", "10,20,30", "[10, 20, 30]", "Error"],
        correct: 0,
        pembahasan: "Loop menampilkan setiap elemen dipisah spasi."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3];\nconsole.log(angka.reduce((a,b)=>a+b)/angka.length);",
        a: ["2.0", "3.0", "1.0", "Error"],
        correct: 0,
        pembahasan: "Rata-rata (1+2+3)/3 = 2.0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, [2,3], 4];\nconsole.log(angka[1][1]);",
        a: ["1", "2", "3", "4"],
        correct: 2,
        pembahasan: "angka[1] = [2,3], lalu indeks [1] → 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [4,2,8,6];\nangka.sort((a,b)=>b-a);\nconsole.log(angka);",
        a: ["[8, 6, 4, 2]", "[2, 4, 6, 8]", "Error", "None"],
        correct: 0,
        pembahasan: "Sort dengan pembanding (b-a) mengurutkan dari besar ke kecil."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3, 4];\nconsole.log(angka.slice(-3,-1));",
        a: ["[2, 3]", "[3, 4]", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "slice(-3,-1) mengambil elemen kedua dan ketiga → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let a = [1, 2];\nlet b = a;\nb.push(3);\nconsole.log(a);",
        a: ["[1, 2, 3]", "[1, 2]", "[3]", "Error"],
        correct: 0,
        pembahasan: "a dan b menunjuk array yang sama, jadi keduanya berubah."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3].map(x=>x*2);\nconsole.log(angka);",
        a: ["[2, 4, 6]", "[1,2,3]", "[1,4,9]", "Error"],
        correct: 0,
        pembahasan: "map() menggandakan setiap elemen."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [10, 20, 30];\nconsole.log(angka.indexOf(20));",
        a: ["0", "1", "2", "Error"],
        correct: 1,
        pembahasan: "indexOf(20) mengembalikan posisi nilai 20, yaitu indeks 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3];\nangka.shift();\nconsole.log(angka);",
        a: ["[2, 3]", "[1, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "shift() menghapus elemen pertama → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3];\nangka.push(...[4,5]);\nconsole.log(angka);",
        a: ["[1, 2, 3, 4, 5]", "[[1,2,3],[4,5]]", "[4,5,1,2,3]", "Error"],
        correct: 0,
        pembahasan: "push(...[4,5]) menambah semua elemen ke akhir array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4];\nconsole.log([...angka].reverse());",
        a: ["[4, 3, 2, 1]", "[1,2,3,4]", "Error", "None"],
        correct: 0,
        pembahasan: "Spread copy lalu reverse membalik urutan array."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4,5];\nconsole.log(angka.filter((_,i)=>i%3===0));",
        a: ["[1, 4]", "[3, 5]", "[1, 3, 5]", "Error"],
        correct: 0,
        pembahasan: "Ambil elemen tiap tiga langkah (indeks 0 dan 3) → [1,4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1, 2, 3];\nangka = angka.concat(angka);\nconsole.log(angka);",
        a: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "concat() menggandakan isi array dua kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "let angka = [1,2,3,4];\nconsole.log(angka.slice(1,3).reduce((a,b)=>a+b));",
        a: ["5", "6", "9", "7"],
        correct: 0,
        pembahasan: "slice(1,3) menghasilkan [2,3], jumlahnya 5."
    }
];
// MULAI QUIZ
renderQuiz();