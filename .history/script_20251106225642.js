const API_URL = "https://script.google.com/macros/s/PASTE_YOUR_URL_HERE/exec";

let selectedGrade = "";
let selectedMapel = "";

async function loadMapel() {
    const res = await fetch(`${API_URL}?sheet=Courses`);
    const data = await res.json();
    const select = document.getElementById("mapelSelect");
    select.innerHTML = `<option value=''>-- Pilih Mapel --</option>`;
    const filtered = data.filter(c => c.grade === selectedGrade);
    filtered.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.title;
        opt.textContent = c.title;
        select.appendChild(opt);
    });
}

document.querySelectorAll("#kelas button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll("#kelas button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedGrade = btn.dataset.grade;
        loadMapel();
        document.getElementById("menu").classList.add("hidden");
    });
});

document.getElementById("mapelSelect").addEventListener("change", e => {
    selectedMapel = e.target.value;
    if (selectedMapel) {
        document.getElementById("menu").classList.remove("hidden");
        // Simpan state ke localStorage agar bisa diakses halaman lain
        localStorage.setItem("grade", selectedGrade);
        localStorage.setItem("mapel", selectedMapel);
    } else {
        document.getElementById("menu").classList.add("hidden");
    }
});
