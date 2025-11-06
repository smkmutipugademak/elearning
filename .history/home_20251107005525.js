// === Ambil elemen DOM ===
const kelasSection = document.getElementById("kelasSection");
const mapelSection = document.getElementById("mapelSection");
const mapelList = document.getElementById("mapelList");
const menuSection = document.getElementById("menuSection");
const menuList = document.getElementById("menuList");
const babSection = document.getElementById("babSection");
const babList = document.getElementById("babList");

// Tombol kembali (harus pastikan ada di HTML)
const backToKelas = document.getElementById("backToKelas");
const backToMapel = document.getElementById("backToMapel");
const backToMenu = document.getElementById("backToMenu");

// === Data Mapel per Kelas ===
const mapelPerKelas = {
    X: ["Coding", "Desain Komunikasi Visual", "Informatika"],
    XI: ["Pemrograman Dasar", "Desain Grafis Percetakan"],
    XII: [
        "Pemrograman Web dan Perangkat Bergerak",
        "Teknik Pengolahan Audio dan Video",
        "Desain Media Interaktif",
    ],
};

// === Data Bab ===
const babListData = ["Latihan Bab 1", "Latihan Bab 2", "Latihan Bab 3"];

// === PILIH KELAS ===
document.querySelectorAll(".kelas").forEach((card) => {
    card.addEventListener("click", () => {
        const kelas = card.getAttribute("data-kelas");

        // tampilkan mapel sesuai kelas
        kelasSection.classList.add("hidden");
        mapelSection.classList.remove("hidden");
        mapelList.innerHTML = ""; // bersihkan dulu

        // Buat kartu mapel
        mapelPerKelas[kelas].forEach((mapel) => {
            const div = document.createElement("div");
            div.className = "card mapel fade-in";
            div.innerHTML = `<h3>${mapel}</h3><p>Kelas ${kelas}</p>`;
            div.addEventListener("click", () => showMenu(mapel));
            mapelList.appendChild(div);
        });
    });
});

// === PILIH MENU (Teori, Praktikum, TryOut, Kisi-Kisi) ===
function showMenu(mapel) {
    mapelSection.classList.add("hidden");
    menuSection.classList.remove("hidden");
    menuList.innerHTML = ""; // bersihkan

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
            if (menu.key === "tryout") {
                showBab(mapel);
            } else {
                // nanti bisa diarahkan ke halaman lain (materi.html dsb)
                alert(`${menu.nama} untuk ${mapel} akan segera tersedia!`);
            }
        });

        menuList.appendChild(div);
    });
}

// === PILIH BAB (Jika klik TryOut) ===
function showBab(mapel) {
    menuSection.classList.add("hidden");
    babSection.classList.remove("hidden");
    babList.innerHTML = "";

    babListData.forEach((bab) => {
        const div = document.createElement("div");
        div.className = "card bab fade-in";
        div.innerHTML = `<h3>${bab}</h3><p>${mapel}</p>`;

        div.addEventListener("click", () => {
            // Simpan data ke localStorage untuk latihan.html
            localStorage.setItem("selectedMapel", mapel);
            localStorage.setItem("selectedBab", bab);
            window.location.href = "latihan.html";
        });

        babList.appendChild(div);
    });
}

// === TOMBOL KEMBALI ===
if (backToKelas)
    backToKelas.addEventListener("click", () => {
        mapelSection.classList.add("hidden");
        kelasSection.classList.remove("hidden");
    });

if (backToMapel)
    backToMapel.addEventListener("click", () => {
        menuSection.classList.add("hidden");
        mapelSection.classList.remove("hidden");
    });

if (backToMenu)
    backToMenu.addEventListener("click", () => {
        babSection.classList.add("hidden");
        menuSection.classList.remove("hidden");
    });
