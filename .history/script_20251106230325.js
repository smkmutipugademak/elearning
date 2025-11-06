const MAPEL_DATA = [
    { grade: "X", title: "Teknik Dasar Mesin", kode: "MDT-101" },
    { grade: "X", title: "Gambar Teknik", kode: "MDT-102" },
    { grade: "XI", title: "Otomasi Industri", kode: "AUT-201" },
    { grade: "XI", title: "Pemrograman PLC", kode: "AUT-202" },
    { grade: "XII", title: "Proyek Akhir Produksi", kode: "PRJ-301" },
    { grade: "XII", title: "Perawatan Mesin", kode: "PRJ-302" },
];

let currentGrade = "X";

function renderMapel() {
    const container = document.getElementById("mapelContainer");
    container.innerHTML = "";
    const filtered = MAPEL_DATA.filter(m => m.grade === currentGrade);

    filtered.forEach(m => {
        const div = document.createElement("div");
        div.className = "mapel-card";
        div.innerHTML = `
      <h4>${m.title}</h4>
      <p>Kode: ${m.kode}</p>
      <button onclick="openMapel('${m.title}')">Buka</button>
    `;
        container.appendChild(div);
    });
}

function openMapel(mapel) {
    alert(`Membuka ${mapel}. Pilih Materi, Praktikum, Latihan Soal, atau TryOut.`);
}

document.querySelectorAll(".kelas-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".kelas-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentGrade = btn.dataset.grade;
        renderMapel();
    });
});

renderMapel();
