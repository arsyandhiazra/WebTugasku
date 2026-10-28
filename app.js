let tugas = JSON.parse(localStorage.getItem("tugas"))||[];
let filterAktif = "semua";

const form = document.getElementById("form-tugas");
const inputJudul= document.getElementById("input-judul");
const inputTenggat=document.getElementById("input-tenggat");
const daftar = document.getElementById("daftar-tugas");
const ringkasan = document.getElementById("ringkasan");
const tombolFilter = document.querySelectorAll(".filter button"); 

function simpan() {
    localStorage.setItem("tugas",JSON.stringify(tugas));
}

function tampilkan(){
    daftar.innerHTML="";

    const terlihat = tugas.filter((t) => {
        if (filterAktif === "belum" ) return !t.selesai;
        if (filterAktif === "selesai" ) return t.selesai;
        return true;
        
    });

    terlihat.forEach((t) => {
        const li = document.createElement("li");
        if (t.selesai) li.classList.add("selesai");
        const teks = document.createElement("span");
teks.textContent = t.tenggat ? `${t.judul} (${t.tenggat})`
: t.judul;
teks.addEventListener("click"
, () => balik(t.id));
const tombolHapus = document.createElement("button");
tombolHapus.textContent = "Hapus";
tombolHapus.addEventListener("click"
, () => hapus(t.id));
li.append(teks, tombolHapus);
daftar.appendChild(li);
    });

    const sisa = tugas.filter((t) => !t.selesai).length;
ringkasan.textContent =
tugas.length === 0
? "Belum ada tugas"
:
`${sisa} dari ${tugas.length} tugas belum selesai`
;
}

function tambah(judul, tenggat) {
tugas.push({ id: Date.now(), judul, tenggat, selesai: false });
simpan();
tampilkan();
}
function balik(id) {
tugas = tugas.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } :
t));
simpan();
tampilkan();
}
function hapus(id) {
tugas = tugas.filter((t) => t.id !== id);
simpan();
tampilkan();
}

form.addEventListener("submit"
, (e) => {
e.preventDefault();
const judul = inputJudul.value.trim();
if (!judul) return;
tambah(judul, inputTenggat.value);
form.reset();
});
tombolFilter.forEach((tombol) => {
tombol.addEventListener("click"
, () => {
filterAktif = tombol.dataset.filter;
tombolFilter.forEach((b) => b.classList.toggle("dipilih"
, b === tombol));
tampilkan();
});
});
tampilkan();s
