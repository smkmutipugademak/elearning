    const dataMapel = {
      X: ["Coding", "Desain Komunikasi Visual", "Informatika"],
      XI: ["Pemrograman Dasar", "Desain Grafis Percetakan"],
      XII: ["Pemrograman Web & Perangkat Bergerak", "Teknik Pengolahan Audio dan Video", "Desain Media Interaktif"]
    };

    function resetHome() {
      document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
      document.getElementById('homeSection').classList.remove('hidden');
    }

    function pilihKelas(kelas) {
      document.getElementById("homeSection").classList.add("hidden");
      document.getElementById("mapelSection").classList.remove("hidden");
      document.getElementById("judulKelas").textContent = `Kelas ${kelas}`;

      const mapelContainer = document.getElementById("mapelList");
      mapelContainer.innerHTML = "";
      dataMapel[kelas].forEach(mapel => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${mapel}</h3><p>Klik untuk melihat menu pembelajaran</p>`;
        div.onclick = () => pilihMapel(mapel);
        mapelContainer.appendChild(div);
      });
    }

    function kembaliKelas() {
      document.getElementById("mapelSection").classList.add("hidden");
      document.getElementById("homeSection").classList.remove("hidden");
    }

    function pilihMapel(mapel) {
      document.getElementById("mapelSection").classList.add("hidden");
      document.getElementById("menuSection").classList.remove("hidden");
      document.getElementById("judulMapel").textContent = mapel;
    }

    function kembaliMapel() {
      document.getElementById("menuSection").classList.add("hidden");
      document.getElementById("mapelSection").classList.remove("hidden");
    }

    function bukaMenu(menu) {
      if (menu === "tryout") {
        document.getElementById("menuSection").classList.add("hidden");
        document.getElementById("tryoutSection").classList.remove("hidden");
        document.getElementById("judulTryout").textContent = "TryOut - Pilih Bab";
        buatBabList();
      } else {
        alert(`Menu ${menu.toUpperCase()} akan segera tersedia!`);
      }
    }

    function buatBabList() {
      const babContainer = document.getElementById("babList");
      babContainer.innerHTML = "";
      for (let i = 1; i <= 5; i++) {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>Latihan Bab ${i}</h3><p>Kerjakan soal bab ini</p>`;
        div.onclick = () => window.location.href = "latihan.html";
        babContainer.appendChild(div);
      }
    }

    function kembaliMenu() {
      document.getElementById("tryoutSection").classList.add("hidden");
      document.getElementById("menuSection").classList.remove("hidden");
    }