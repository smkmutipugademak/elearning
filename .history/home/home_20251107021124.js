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

const babListData = ["Latihan Bab 1", "Latihan Bab 2", "Latihan Bab 3"];

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
            else alert(`${menu.nama} untuk ${mapel} akan segera tersedia!`);
        });
        menuList.appendChild(div);
    });
}

// === BAB ===
// === BAB ===
function showBab(mapel) {
    fadeTransition(menuSection, babSection);
    babList.innerHTML = "";

    babListData.forEach((bab) => {
        const div = document.createElement("div");
        div.className = "card bab fade-in";
        div.innerHTML = `<h3>${bab}</h3><p>${mapel}</p>`;

        div.addEventListener("click", () => {
            // --- Normalisasi mapel jadi slug folder ---
            const mapelSlug = mapel
                .toLowerCase()
                .trim()
                .replace(/[^\w\s]/g, "") // hilangkan karakter aneh
                .replace(/\s+/g, "_"); // ganti spasi dengan underscore

            // Ambil angka bab (misal dari "Latihan Bab 2" → "2")
            const babNumberMatch = bab.match(/\b(\d+)\b/);
            const babNumber = babNumberMatch ? babNumberMatch[1] : "1";

            // Buat slug bab → "bab1", "bab2", dst.
            const babSlug = `bab${babNumber}`;

            // Path folder & file target
            const folderPath = `${mapelSlug}/${babSlug}/`;
            const fileName = `latihan_${mapelSlug}_${babSlug}.html`;

            // Gunakan path relatif dari root LMS
            const basePath = "../"; // sesuaikan jika file ini di folder lain
            const targetFile = `${basePath}${folderPath}${fileName}`;

            console.log(`Navigating to: ${targetFile}`);

            // --- Cek file sebelum redirect (opsional, untuk debugging) ---
            fetch(targetFile, { method: "HEAD" })
                .then((res) => {
                    if (res.ok) {
                        window.location.href = targetFile;
                    } else {
                        alert(`❌ File tidak ditemukan:\n${targetFile}`);
                    }
                })
                .catch(() => {
                    alert(`⚠️ Gagal mengakses file:\n${targetFile}`);
                });
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
