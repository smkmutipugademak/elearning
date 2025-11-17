let randomizedQuiz = [];
let timerInterval;
let timeRemaining = 0;

const quizData = [
    // =================== LEVEL MUDAH ===================

    {
        q: "Apa output dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(data['a']);",
        a: ["1", "2", "Error", "undefined"],
        correct: 0,
        pembahasan: "Akses nilai dari key 'a' menghasilkan 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {};\nconsole.log(Object.keys(data).length);",
        a: ["0", "1", "Error", "undefined"],
        correct: 0,
        pembahasan: "Object kosong memiliki panjang 0."
    },
    {
        q: "Apa output dari kode berikut?",
        code: "const data = {x: 10};\ndata.y = 20;\nconsole.log(data);",
        a: ["{x: 10}", "{y: 20}", "{x: 10, y: 20}", "Error"],
        correct: 2,
        pembahasan: "Property baru 'y' ditambahkan ke object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log('a' in data);",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Operator 'in' memeriksa keberadaan property."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(data['c']);",
        a: ["1", "2", "undefined", "Error"],
        correct: 2,
        pembahasan: "Property 'c' tidak ada, hasilnya undefined."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.keys(data).length);",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "Object memiliki dua properti."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let data = {x: 10, y: 20};\ndelete data.x;\nconsole.log(data);",
        a: ["{y: 20}", "{x: 10}", "{}", "Error"],
        correct: 0,
        pembahasan: "Property 'x' dihapus menggunakan delete."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.keys(data));",
        a: ["['a', 'b']", "[1, 2]", "[['a', 1], ['b', 2]]", "Error"],
        correct: 0,
        pembahasan: "Object.keys() menampilkan daftar key."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.values(data).reduce((a,b)=>a+b));",
        a: ["3", "2", "1", "Error"],
        correct: 0,
        pembahasan: "Object.values() menghasilkan [1,2], totalnya 3."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(!('c' in data));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "'c' tidak ada, jadi hasilnya true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let data = {x: 1};\ndata.x = 99;\nconsole.log(data.x);",
        a: ["1", "99", "Error", "undefined"],
        correct: 1,
        pembahasan: "Nilai property 'x' diganti menjadi 99."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nfor (let k in data) {\n  console.log(k);\n}",
        a: ["a b", "1 2", "['a',1] ['b',2]", "Error"],
        correct: 0,
        pembahasan: "Loop for...in iterasi pada key object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log('a' in data);",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Property 'a' ada di object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = Object.assign({}, {a: 1, b: 2});\nconsole.log(data);",
        a: ["{a: 1, b: 2}", "{a: '1', b: '2'}", "Error", "{}"],
        correct: 0,
        pembahasan: "Object.assign() menyalin properti ke object baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1};\nconsole.log(typeof data);",
        a: ["'object'", "'array'", "'function'", "'set'"],
        correct: 0,
        pembahasan: "Tipe data object adalah 'object'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 10, b: 20};\nconsole.log(Math.max(...Object.values(data)));",
        a: ["10", "20", "a", "Error"],
        correct: 1,
        pembahasan: "Nilai terbesar dari [10,20] adalah 20."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.entries(data)[0]);",
        a: ["['a', 1]", "['b', 2]", "['a','b']", "Error"],
        correct: 0,
        pembahasan: "Object.entries() mengembalikan pasangan [key, value]."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {x: 10};\nconsole.log('y' in data);",
        a: ["true", "false", "Error", "undefined"],
        correct: 1,
        pembahasan: "'y' tidak ada di object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.values(data)[1]);",
        a: ["1", "2", "Error", "undefined"],
        correct: 1,
        pembahasan: "Elemen kedua dari values adalah 2."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "let data = {a: 1};\ndelete data.a;\nconsole.log(data);",
        a: ["{}", "{a: 1}", "Error", "undefined"],
        correct: 0,
        pembahasan: "delete menghapus property 'a' dari object."
    },

    // =================== LEVEL MENENGAH ===================

    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: {x: 5}};\nconsole.log(data.b.x);",
        a: ["1", "5", "Error", "undefined"],
        correct: 1,
        pembahasan: "Mengakses object di dalam object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1};\nObject.assign(data, {b: 2});\nconsole.log(data);",
        a: ["{a: 1}", "{a: 1, b: 2}", "Error", "{}"],
        correct: 1,
        pembahasan: "Object.assign menambah atau mengganti property."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const keys = ['x', 'y'];\nconst data = Object.fromEntries(keys.map(k => [k, 0]));\nconsole.log(data);",
        a: ["{x: 0, y: 0}", "{x: null, y: null}", "{}", "Error"],
        correct: 0,
        pembahasan: "Object.fromEntries membuat object dengan default value 0."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const keys = ['a', 'b'];\nconst vals = [1, 2];\nconst data = Object.fromEntries(keys.map((k,i)=>[k, vals[i]]));\nconsole.log(data);",
        a: ["{a: 1, b: 2}", "{a: 2, b: 1}", "{}", "Error"],
        correct: 0,
        pembahasan: "Menggabungkan dua array jadi pasangan key-value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 10, b: 20};\nObject.values(data).forEach(v => process.stdout.write(v + ' '));",
        a: ["10 20", "a b", "(a,10) (b,20)", "Error"],
        correct: 0,
        pembahasan: "Loop menampilkan setiap value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {x: 1, y: 2};\nconst doubled = Object.fromEntries(Object.entries(data).map(([k,v]) => [k, v*2]));\nconsole.log(doubled);",
        a: ["{x: 2, y: 4}", "{x: 1, y: 2}", "Error", "{}"],
        correct: 0,
        pembahasan: "Object comprehension menggandakan value."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1};\nconst copy = {...data};\ncopy.a = 5;\nconsole.log(data.a);",
        a: ["1", "5", "Error", "undefined"],
        correct: 0,
        pembahasan: "Spread operator membuat salinan baru."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Math.min(...Object.values(data)));",
        a: ["1", "2", "a", "Error"],
        correct: 0,
        pembahasan: "Nilai terkecil dari [1,2] adalah 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 5, b: 10};\nconsole.log(Object.values(data).reduce((a,b)=>a+b));",
        a: ["15", "10", "5", "Error"],
        correct: 0,
        pembahasan: "Menjumlahkan semua value object menghasilkan 15."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nif (!('c' in data)) {\n  console.log('Kosong');\n}",
        a: ["Kosong", "Error", "undefined", "Tidak ada output"],
        correct: 0,
        pembahasan: "Karena 'c' tidak ada, maka output 'Kosong'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: [1,2,3]};\nconsole.log(data.a[1]);",
        a: ["1", "2", "3", "Error"],
        correct: 1,
        pembahasan: "Mengakses elemen ke-2 dari array di dalam object."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: [1,2]};\nconsole.log(Array.isArray(data.a));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Value bertipe array."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {x: 10, y: 5};\nconsole.log(Object.values(data).every(v => v > 0));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Semua nilai > 0, maka true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconsole.log(Object.values(data).some(v => v > 1));",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Ada nilai lebih besar dari 1, jadi true."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 10, b: 20};\nconsole.log(Object.keys(data).sort());",
        a: ["['a', 'b']", "['b', 'a']", "[10, 20]", "Error"],
        correct: 0,
        pembahasan: "Object.keys() mengembalikan key yang bisa diurutkan."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nconst filtered = Object.fromEntries(Object.entries(data).filter(([k,v])=>v>1));\nconsole.log(filtered);",
        a: ["{b: 2}", "{a: 1}", "{}", "Error"],
        correct: 0,
        pembahasan: "Filter hanya value > 1."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: {x: 1}};\nconsole.log('x' in data.a);",
        a: ["true", "false", "Error", "undefined"],
        correct: 0,
        pembahasan: "Property 'x' ada di dalam object 'a'."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {a: 1, b: 2};\nfor (const [k,v] of Object.entries(data)) {\n  process.stdout.write(k + ' ' + v + ' ');\n}",
        a: ["a 1 b 2", "1 a 2 b", "['a',1]['b',2]", "Error"],
        correct: 0,
        pembahasan: "Menampilkan setiap key dan valuenya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = Object.fromEntries(Array.from({length:3}, (_,i)=>[i, i**2]));\nconsole.log(data);",
        a: ["{0:0, 1:1, 2:4}", "{1:1, 2:2, 3:3}", "Error", "{}"],
        correct: 0,
        pembahasan: "Membuat object dengan key angka dan value kuadratnya."
    },
    {
        q: "Apa hasil dari kode berikut?",
        code: "const data = {x: 5};\nif (!('y' in data)) data.y = 10;\nconsole.log(data.y);",
        a: ["10", "5", "Error", "undefined"],
        correct: 0,
        pembahasan: "Property baru 'y' ditambah dengan nilai default 10."
    }
];
// MULAI QUIZ
renderQuiz();