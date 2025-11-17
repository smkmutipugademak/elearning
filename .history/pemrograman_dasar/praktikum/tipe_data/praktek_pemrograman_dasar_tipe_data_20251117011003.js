let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    {
        q: "Apa tipe data dari nilai 10?",
        code: "let x = 10;\nconsole.log(typeof x);",
        a: ["number", "string", "boolean", "object"],
        correct: 0,
        pembahasan: "10 adalah bilangan, jadi bertipe number."
    },
    {
        q: "Apa tipe data dari nilai 10.5?",
        code: "let x = 10.5;\nconsole.log(typeof x);",
        a: ["number", "string", "boolean", "object"],
        correct: 0,
        pembahasan: "JavaScript tidak membedakan int dan float, keduanya adalah number."
    },
    {
        q: "Apa tipe data dari 'Halo Dunia'?",
        code: "let x = 'Halo Dunia';\nconsole.log(typeof x);",
        a: ["string", "number", "object", "boolean"],
        correct: 0,
        pembahasan: "Tanda kutip menunjukkan tipe data string."
    },
    {
        q: "Apa tipe data dari nilai true?",
        code: "let x = true;\nconsole.log(typeof x);",
        a: ["boolean", "string", "number", "object"],
        correct: 0,
        pembahasan: "true dan false termasuk tipe data boolean."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 5;\nlet y = 2;\nconsole.log(x / y);",
        a: ["2.5", "2", "2.0", "Error"],
        correct: 0,
        pembahasan: "Operator / menghasilkan pembagian biasa → 2.5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 5;\nlet y = 2;\nconsole.log(Math.floor(x / y));",
        a: ["2", "2.5", "3", "Error"],
        correct: 0,
        pembahasan: "Math.floor(x / y) membulatkan ke bawah → 2."
    },
    {
        q: "Apa tipe data hasil operasi berikut?",
        code: "let x = 5 + 2.0;\nconsole.log(typeof x);",
        a: ["number", "string", "boolean", "object"],
        correct: 0,
        pembahasan: "Hasil operasi bilangan menghasilkan number."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = String(123);\nconsole.log(x);",
        a: ["'123'", "123", "Error", "'x'"],
        correct: 0,
        pembahasan: "String(123) mengubah angka menjadi string '123'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Number('10');\nconsole.log(x + 5);",
        a: ["15", "105", "Error", "10"],
        correct: 0,
        pembahasan: "String '10' dikonversi ke angka, jadi 10 + 5 = 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = parseFloat('3.14');\nconsole.log(x);",
        a: ["3.14", "'3.14'", "Error", "3"],
        correct: 0,
        pembahasan: "parseFloat('3.14') mengubah string menjadi angka desimal 3.14."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Boolean(0);\nconsole.log(x);",
        a: ["false", "true", "0", "Error"],
        correct: 0,
        pembahasan: "0 dianggap false dalam konteks boolean."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Boolean('JavaScript');\nconsole.log(x);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "String non-kosong dianggap true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = typeof 10 === 'number';\nconsole.log(x);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "typeof 10 menghasilkan 'number', jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "console.log(typeof 3.14 === 'number');",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "3.14 bertipe number, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 10;\nlet y = '10';\nconsole.log(x == y);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "Operator == membandingkan nilai, bukan tipe, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '5';\nconsole.log(x.repeat(3));",
        a: ["'555'", "15", "Error", "['5','5','5']"],
        correct: 0,
        pembahasan: "String.repeat(3) menggandakan isi string → '555'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Math.trunc(3.9);\nconsole.log(x);",
        a: ["3", "4", "3.9", "Error"],
        correct: 0,
        pembahasan: "Math.trunc() menghapus desimal tanpa pembulatan → 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 5;\nconsole.log(parseFloat(x));",
        a: ["5", "5.0", "Error", "'5.0'"],
        correct: 0,
        pembahasan: "parseFloat(5) tetap menghasilkan number 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = String(5.5);\nconsole.log(x + '0');",
        a: ["'5.50'", "5.5", "Error", "'55.0'"],
        correct: 0,
        pembahasan: "Keduanya string, jadi digabung jadi '5.50'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Boolean('');\nconsole.log(x);",
        a: ["false", "true", "Error", "null"],
        correct: 0,
        pembahasan: "String kosong bernilai false."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '5';\nlet y = 2;\nconsole.log(Number(x) * y);",
        a: ["10", "52", "Error", "'10'"],
        correct: 0,
        pembahasan: "Number('5') mengubah string jadi angka → 5*2=10."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '3.5';\nconsole.log(parseFloat(x) + 1);",
        a: ["4.5", "35", "Error", "'3.51'"],
        correct: 0,
        pembahasan: "parseFloat('3.5') menghasilkan 3.5 → 3.5 + 1 = 4.5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '10';\nconsole.log(x.repeat(2));",
        a: ["'1010'", "20", "Error", "'x2'"],
        correct: 0,
        pembahasan: "String.repeat(2) menggandakan string → '1010'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '10';\nlet y = 5;\nconsole.log(x + String(y));",
        a: ["'105'", "15", "Error", "'10 5'"],
        correct: 0,
        pembahasan: "Keduanya string setelah konversi → '105'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 10;\nlet y = '5';\nconsole.log(x + Number(y));",
        a: ["15", "105", "Error", "'10+5'"],
        correct: 0,
        pembahasan: "Number('5') = 5 → 10 + 5 = 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Boolean(3.14);\nconsole.log(x);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "Nilai non-nol dianggap true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = {real: 2, imag: 3};\nconsole.log(x);",
        a: ["{real: 2, imag: 3}", "‘2+3j’", "Error", "(3+2j)"],
        correct: 0,
        pembahasan: "JavaScript tidak punya tipe kompleks bawaan, tapi bisa disimulasikan dengan object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = true;\nconsole.log(typeof x === 'boolean');",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "typeof true menghasilkan 'boolean' → true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 10.0;\nlet y = parseInt(x);\nconsole.log(typeof y);",
        a: ["number", "string", "boolean", "object"],
        correct: 0,
        pembahasan: "parseInt() menghasilkan number bertipe number."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 'Hello';\nconsole.log(x.length);",
        a: ["5", "Error", "6", "'Hello'"],
        correct: 0,
        pembahasan: "String memiliki properti length → 5."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = [1, 2, 3];\nconsole.log(Array.isArray(x));",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "Array.isArray(x) mengembalikan true jika x adalah array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = {a: 1};\nconsole.log(typeof x);",
        a: ["object", "array", "function", "Error"],
        correct: 0,
        pembahasan: "Object literal dengan {} bertipe object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = [1, 2, 3];\nconsole.log(typeof x);",
        a: ["object", "array", "number", "function"],
        correct: 0,
        pembahasan: "Array di JavaScript bertipe object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = null;\nconsole.log(typeof x);",
        a: ["object", "null", "undefined", "boolean"],
        correct: 0,
        pembahasan: "typeof null di JavaScript adalah 'object' (bug historis)."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = '10';\nlet y = 10;\nconsole.log(typeof x === typeof y);",
        a: ["false", "true", "Error", "null"],
        correct: 0,
        pembahasan: "x string, y number, jadi false."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Number(true);\nconsole.log(x);",
        a: ["1", "0", "Error", "true"],
        correct: 0,
        pembahasan: "true dikonversi ke 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = Number(false);\nconsole.log(x);",
        a: ["0", "1", "false", "Error"],
        correct: 0,
        pembahasan: "false dikonversi ke 0."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 3.0;\nlet y = 3;\nconsole.log(x === y);",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "Keduanya bernilai sama dan bertipe number, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 'JavaScript';\nconsole.log(typeof x === 'string');",
        a: ["true", "false", "Error", "null"],
        correct: 0,
        pembahasan: "x bertipe string, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let x = 0;\nlet y = '0';\nconsole.log(x === y);",
        a: ["false", "true", "Error", "undefined"],
        correct: 0,
        pembahasan: "Operator === membandingkan nilai dan tipe data, jadi 0 (number) tidak sama dengan '0' (string)."
    }

];