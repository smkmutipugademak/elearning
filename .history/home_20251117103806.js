// === Ambil elemen DOM ===
const kelasSection = document.getElementById("kelasSection");
const mapelSection = document.getElementById("mapelSection");
const mapelList = document.getElementById("mapelList");
const menuSection = document.getElementById("menuSection");
const menuList = document.getElementById("menuList");
const babSection = document.getElementById("babSection");
const babList = document.getElementById("babList");

const backToKelas = document.getElementById("backToKelas");
const backToMapel = document.getElementById("backToMapel");
const backToMenu = document.getElementById("backToMenu");

// === Data ===
const mapelPerKelas = {
    X: ["Coding", "Desain Komunikasi Visual", "Informatika"],
    XI: ["Pemrograman Dasar", "Desain Grafis Percetakan"],
    XII: [
        "Pemrograman Web dan Perangkat Bergerak",
        "Teknik Pengolahan Audio dan Video",
        "Desain Media Interaktif",
    ],
};

const babListData = [
    "Latihan Bab 1",
    "Latihan Bab 2",
    "Latihan Bab 3",
    "Latihan Bab 4",
    "Latihan Bab 5",
    "Latihan Bab 6",
    "Latihan Bab 7",
];

// === Data Praktikum per Mapel ===
const praktikumData = {
    Informatika: ["If Else", "Perulangan", "Array", "Tuple", "Fungsi", "Dictionary", "Inheritance", "Abstraction", "Polymorphism", "Lambda", "Tipe Data", "Parameter dan Arguments"],
    "Desain Komunikasi Visual": ["Adobe Photoshop", "CorelDRAW", "Layouting", "Tipografi"],
    "Coding": ["Dasar HTML", "Dasar CSS", "Dasar JavaScript"],
    "Pemrograman Dasar": ["If Else", "Perulangan", "Array", "Tuple", "Fungsi", "Dictionary", "Inheritance", "Abstraction", "Polymorphism", "Lambda", "Tipe Data", "Parameter dan Arguments"],
    "Pemrograman Web dan Perangkat Bergerak": ["HTML", "CSS", "JavaScript", "Responsive Design"],
    "Desain Grafis Percetakan": ["CorelDRAW", "Adobe Illustrator", "Percetakan Digital", "Layout Brosur"],
    "Teknik Pengolahan Audio dan Video": ["Editing Audio", "Editing Video"],
    "Desain Media Interaktif": ["UI/UX Design", "Prototyping", "Animasi Interaktif"]
};

// === PILIH KELAS ===
document.querySelectorAll(".kelas").forEach((card) => {
    card.addEventListener("click", () => {
        const kelas = card.getAttribute("data-kelas");
        fadeTransition(kelasSection, mapelSection);
        mapelList.innerHTML = "";

        mapelPerKelas[kelas].forEach((mapel) => {
            const div = document.createElement("div");
            div.className = "card mapel fade-in";
            div.innerHTML = `<h3>${mapel}</h3><p>Kelas ${kelas}</p>`;
            div.addEventListener("click", () => showMenu(mapel));
            mapelList.appendChild(div);
        });
    });
});

// === MENU ===
function showMenu(mapel) {
    fadeTransition(mapelSection, menuSection);
    menuList.innerHTML = "";

    const menus = [
        { nama: "Materi Teori", key: "teori" },
        { nama: "Praktikum", key: "praktikum" },
        { nama: "TryOut", key: "tryout" },
        { nama: "Kisi-Kisi", key: "kisi" },
    ];

    menus.forEach((menu) => {
        const div = document.createElement("div");
        div.className = "card menu fade-in";
        div.innerHTML = `<h3>${menu.nama}</h3><p>${mapel}</p>`;
        div.addEventListener("click", () => {
            if (menu.key === "tryout") showBab(mapel);
            else if (menu.key === "praktikum") showPraktikum(mapel);
            else alert(`${menu.nama} untuk ${mapel} akan segera tersedia!`);
        });
        menuList.appendChild(div);
    });
}

// === PRAKTIKUM ===
function showPraktikum(mapel) {
    fadeTransition(menuSection, babSection);
    babList.innerHTML = "";

    const list = praktikumData[mapel] || ["Belum ada data praktikum."];

    list.forEach((topik) => {
        const div = document.createElement("div");
        div.className = "card bab fade-in";
        div.innerHTML = `<h3>${topik}</h3><p>${mapel}</p>`;

        div.addEventListener("click", () => {
            const mapelSlug = mapel.toLowerCase().trim().replace(/\s+/g, "_");
            const topikSlug = topik.toLowerCase().trim().replace(/\s+/g, "_");

            const folderPath = `${mapelSlug}/praktikum/${topikSlug}/`;
            const targetFile = `${folderPath}praktek_${mapelSlug}_${topikSlug}.html`;

            console.log(`Navigating to: ${targetFile}`);
            window.location.href = targetFile;
        });

        babList.appendChild(div);
    });
}

// === BAB ===
function showBab(mapel) {
    fadeTransition(menuSection, babSection);
    babList.innerHTML = "";

    babListData.forEach((bab) => {
        const div = document.createElement("div");
        div.className = "card bab fade-in";
        div.innerHTML = `<h3>${bab}</h3><p>${mapel}</p>`;

        div.addEventListener("click", () => {
            const mapelSlug = mapel.toLowerCase().trim().replace(/\s+/g, "_");
            const babNumberMatch = bab.match(/\b(\d+)\b/);
            const babNumber = babNumberMatch ? babNumberMatch[1] : "1";
            const babSlug = `bab${babNumber}`;
            const folderPath = `${mapelSlug}/${babSlug}/`;
            const targetFile = `${folderPath}latihan_${mapelSlug}_${babSlug}.html`;

            console.log(`Navigating to: ${targetFile}`);
            window.location.href = targetFile;
        });

        babList.appendChild(div);
    });
}

// === Transisi Halus ===
function fadeTransition(from, to) {
    from.classList.add("fade-out");
    setTimeout(() => {
        from.classList.add("hidden");
        to.classList.remove("hidden");
        to.classList.add("fade-in");
        from.classList.remove("fade-out");
    }, 300);
}

// === Tombol Kembali ===
if (backToKelas)
    backToKelas.addEventListener("click", () => fadeTransition(mapelSection, kelasSection));

if (backToMapel)
    backToMapel.addEventListener("click", () => fadeTransition(menuSection, mapelSection));

if (backToMenu)
    backToMenu.addEventListener("click", () => fadeTransition(babSection, menuSection));

// === DARK MODE TOGGLE ===
const toggle = document.createElement("button");
toggle.className = "toggle-dark";
toggle.innerHTML = "🌙";
document.querySelector(".navbar").appendChild(toggle);

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.innerHTML = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
