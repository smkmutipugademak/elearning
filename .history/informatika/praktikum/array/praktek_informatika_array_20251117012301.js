let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH (ARRAY/LIST DASAR) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[0])",
        a: ["1", "2", "3", "Error"],
        correct: 0,
        pembahasan: "Indeks pertama (0) berisi nilai 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [5, 10, 15]\nprint(angka[2])",
        a: ["5", "10", "15", "Error"],
        correct: 2,
        pembahasan: "Indeks ke-2 menunjukkan elemen ketiga yaitu 15."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(len(angka))",
        a: ["2", "3", "4", "Error"],
        correct: 1,
        pembahasan: "len() menghitung jumlah elemen dalam list, yaitu 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = []\nangka.append(10)\nprint(angka)",
        a: ["[]", "[10]", "10", "Error"],
        correct: 1,
        pembahasan: "append() menambah elemen ke akhir list → [10]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2]\nangka.append(3)\nprint(angka)",
        a: ["[1, 2, 3]", "[3, 2, 1]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "append() menambahkan elemen 3 di akhir list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [10, 20, 30]\nangka[1] = 99\nprint(angka)",
        a: ["[10, 99, 30]", "[99, 20, 30]", "[10, 20, 30]", "Error"],
        correct: 0,
        pembahasan: "Elemen pada indeks ke-1 diubah menjadi 99."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.pop()\nprint(angka)",
        a: ["[1, 2]", "[2, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "pop() menghapus elemen terakhir → [1, 2]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[-1])",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "Indeks -1 mengambil elemen terakhir dari list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [2, 4]\nprint(angka * 2)",
        a: ["[2, 4, 2, 4]", "[4, 8]", "[2, 4, 4]", "Error"],
        correct: 0,
        pembahasan: "Operator * menggandakan isi list → [2, 4, 2, 4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(sum(angka))",
        a: ["6", "123", "Error", "None"],
        correct: 0,
        pembahasan: "sum() menjumlahkan semua elemen → 6."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [5, 6, 7]\nprint(2 in angka)",
        a: ["True", "False", "Error", "None"],
        correct: 1,
        pembahasan: "2 tidak ada di list [5,6,7] → hasilnya False."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[0:2])",
        a: ["[1, 2]", "[2, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "Slicing 0:2 mengambil indeks 0 dan 1 → [1,2]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.clear()\nprint(angka)",
        a: ["[]", "[1, 2, 3]", "None", "Error"],
        correct: 0,
        pembahasan: "clear() menghapus seluruh isi list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [2, 4, 6]\nprint(max(angka))",
        a: ["2", "4", "6", "Error"],
        correct: 2,
        pembahasan: "max() mencari nilai terbesar dalam list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [3, 1, 2]\nangka.sort()\nprint(angka)",
        a: ["[3, 1, 2]", "[1, 2, 3]", "[2, 1, 3]", "Error"],
        correct: 1,
        pembahasan: "sort() mengurutkan elemen secara ascending."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.reverse()\nprint(angka)",
        a: ["[3, 2, 1]", "[1, 2, 3]", "Error", "None"],
        correct: 0,
        pembahasan: "reverse() membalik urutan elemen dalam list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [10]\nprint(len(angka))",
        a: ["0", "1", "10", "Error"],
        correct: 1,
        pembahasan: "List berisi satu elemen, panjangnya 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 1, 1]\nprint(angka.count(1))",
        a: ["1", "2", "3", "Error"],
        correct: 2,
        pembahasan: "count() menghitung kemunculan nilai tertentu → 3 kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.insert(1, 5)\nprint(angka)",
        a: ["[1, 5, 2, 3]", "[5, 1, 2, 3]", "[1, 2, 5, 3]", "Error"],
        correct: 0,
        pembahasan: "insert(1,5) menyisipkan 5 di posisi indeks 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka.remove(2)\nprint(angka)",
        a: ["[1, 3]", "[2, 3]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "remove(2) menghapus nilai pertama yang cocok, yaitu 2."
    },

    // =================== LEVEL MENENGAH (LIST OPEARSI & LOGIKA) ===================
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nprint(angka[::2])",
        a: ["[1, 3]", "[2, 3]", "[1, 2]", "Error"],
        correct: 0,
        pembahasan: "Langkah 2 artinya ambil setiap dua elemen → [1,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka2 = angka.copy()\nangka2.append(4)\nprint(angka)",
        a: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
        correct: 0,
        pembahasan: "copy() membuat salinan, jadi list asli tidak berubah."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2]\nbuah = ['apel', 'pisang']\nprint(angka + buah)",
        a: ["[1, 2, 'apel', 'pisang']", "['apel', 'pisang', 1, 2]", "Error", "[1, 2]['apel','pisang']"],
        correct: 0,
        pembahasan: "Operator + menggabungkan dua list menjadi satu."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "data = [[1,2], [3,4]]\nprint(data[1][0])",
        a: ["1", "2", "3", "4"],
        correct: 2,
        pembahasan: "data[1] = [3,4], lalu [0] mengambil elemen pertama yaitu 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4]\nprint(angka[1:3])",
        a: ["[2, 3]", "[1, 2, 3]", "[3, 4]", "Error"],
        correct: 0,
        pembahasan: "Slicing 1:3 mengambil indeks 1 dan 2 → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4,5]\nprint(angka[1:5:2])",
        a: ["[2, 4]", "[1,3,5]", "[2,3,4]", "Error"],
        correct: 0,
        pembahasan: "Mulai indeks 1 hingga 5 (step 2) → [2,4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [10,20,30]\nfor x in angka:\n    print(x,end=' ')",
        a: ["10 20 30 ", "10,20,30", "[10, 20, 30]", "Error"],
        correct: 0,
        pembahasan: "Loop menampilkan setiap elemen dipisah spasi."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3]\nprint(sum(angka)/len(angka))",
        a: ["2.0", "3.0", "1.0", "Error"],
        correct: 0,
        pembahasan: "Rata-rata (1+2+3)/3 = 2.0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, [2,3], 4]\nprint(angka[1][1])",
        a: ["1", "2", "3", "4"],
        correct: 2,
        pembahasan: "angka[1] = [2,3], lalu indeks [1] → 3."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [4,2,8,6]\nangka.sort(reverse=True)\nprint(angka)",
        a: ["[8, 6, 4, 2]", "[2, 4, 6, 8]", "Error", "None"],
        correct: 0,
        pembahasan: "reverse=True mengurutkan dari besar ke kecil."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3, 4]\nprint(angka[-3:-1])",
        a: ["[2, 3]", "[3, 4]", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "Dari indeks -3 (2) sampai sebelum -1 (4) → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "a = [1, 2]\nb = a\nb.append(3)\nprint(a)",
        a: ["[1, 2, 3]", "[1, 2]", "[3]", "Error"],
        correct: 0,
        pembahasan: "a dan b menunjuk list yang sama, jadi keduanya berubah."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [x*2 for x in [1,2,3]]\nprint(angka)",
        a: ["[2, 4, 6]", "[1,2,3]", "[1,4,9]", "Error"],
        correct: 0,
        pembahasan: "List comprehension menggandakan setiap elemen."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [10, 20, 30]\nprint(angka.index(20))",
        a: ["0", "1", "2", "Error"],
        correct: 1,
        pembahasan: "index(20) mengembalikan posisi nilai 20, yaitu indeks 1."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3]\nangka.pop(0)\nprint(angka)",
        a: ["[2, 3]", "[1, 3]", "[3]", "Error"],
        correct: 0,
        pembahasan: "pop(0) menghapus elemen pertama → [2,3]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3]\nangka.extend([4,5])\nprint(angka)",
        a: ["[1, 2, 3, 4, 5]", "[[1,2,3],[4,5]]", "[4,5,1,2,3]", "Error"],
        correct: 0,
        pembahasan: "extend() menambah elemen dari list lain ke akhir."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4]\nprint(angka[::-1])",
        a: ["[4, 3, 2, 1]", "[1,2,3,4]", "Error", "None"],
        correct: 0,
        pembahasan: "Slicing [::-1] membalik urutan list."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4,5]\nprint(angka[::3])",
        a: ["[1, 4]", "[3, 5]", "[1, 3, 5]", "Error"],
        correct: 0,
        pembahasan: "Step 3 artinya ambil elemen tiap tiga langkah → [1,4]."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1, 2, 3]\nangka *= 2\nprint(angka)",
        a: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3]", "Error"],
        correct: 0,
        pembahasan: "Operator *= menggandakan isi list dua kali."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "angka = [1,2,3,4]\nprint(sum(angka[1:3]))",
        a: ["5", "6", "9", "7"],
        correct: 0,
        pembahasan: "Slicing 1:3 menghasilkan [2,3], jumlahnya 5."
    }
];
