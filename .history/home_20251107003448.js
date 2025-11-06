const kelasSection = document.getElementById("kelasSection");
const mapelSection = document.getElementById("mapelSection");
const mapelList = document.getElementById("mapelList");
const babSection = document.getElementById("babSection");
const babList = document.getElementById("babList");
const backToKelas = document.getElementById("backToKelas");
const backToMapel = document.getElementById("backToMapel");

const mapelPerKelas = {
    X: ["Coding", "Desain Komunikasi Visual", "Informatika"],
    XI: ["Pemrograman Dasar", "Desain Grafis Percetakan"],
    XII: ["Pemrograman Web dan Perangkat Bergerak", "Teknik Pengolahan Audio dan Video", "Desain Media Interaktif"]
};

const babListData = ["Latihan Bab 1", "Latihan Bab 2", "Latihan Bab 3"];

document.querySelectorAll(".kelas").forEach(card => {
    card.addEventListener("click", () => {
        const kelas = card.getAttribute("data-kelas");
        kelasSection.classList.add("hidden");
        mapelSection.classList.remove("hidden");
        mapelList.innerHTML = "";

        mapelPerKelas[kelas].forEach(mapel => {
            const div = document.createElement("div");
            div.className = "card mapel fade-in";
            div.innerHTML = `<h3>${mapel}</h3><p>Kelas ${kelas}</p>`;
            div.addEventListener("click", () => {
                showBab(mapel);
            });
            mapelList.appendChild(div);
        });
    });
});

function showBab(mapel) {
    mapelSection.classList.add("hidden");
    babSection.classList.remove("hidden");
    babList.innerHTML = "";

    babListData.forEach((bab, index) => {
        const div = document.createElement("div");
        div.className = "card bab fade-in";
        div.innerHTML = `<h3>${bab}</h3><p>${mapel}</p>`;
        div.addEventListener("click", () => {
            // Simpan info mapel dan bab jika ingin dipakai di latihan.html
            localStorage.setItem("selectedMapel", mapel);
            localStorage.setItem("selectedBab", bab);
            window.location.href = "latihan.html";
        });
        babList.appendChild(div);
    });
}

backToKelas.addEventListener("click", () => {
    mapelSection.classList.add("hidden");
    kelasSection.classList.remove("hidden");
});

backToMapel.addEventListener("click", () => {
    babSection.classList.add("hidden");
    mapelSection.classList.remove("hidden");
});