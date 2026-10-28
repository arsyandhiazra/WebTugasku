# Tugasku

Aplikasi web sederhana untuk mencatat tugas kuliah. Dibuat dengan HyperText Markup Language (HTML), Cascading Style Sheets (CSS), dan JavaScript murni, tanpa framework dan tanpa pustaka tambahan.

**Demo:** [ganti dengan tautan GitHub Pages kamu]

## Fitur

- Menambah tugas dengan judul (wajib) dan tenggat (opsional)
- Menandai tugas selesai atau belum dengan mengklik tulisannya
- Menghapus tugas
- Menyaring daftar: semua, belum selesai, atau selesai
- Ringkasan jumlah tugas yang belum selesai
- Data tersimpan di peramban (browser) sehingga tidak hilang saat halaman ditutup

## Teknologi

- HTML untuk kerangka halaman
- CSS untuk tampilan (Flexbox)
- JavaScript untuk logika aplikasi
- `localStorage` untuk penyimpanan data

## Struktur Folder

```
tugasku/
├── index.html   # kerangka halaman
├── style.css    # tampilan
└── app.js       # logika aplikasi
```

## Cara Menjalankan

1. Unduh atau salin ketiga berkas ke satu folder.
2. Buka `index.html` di peramban. Tidak perlu instalasi apa pun.

## Cara Kerja Singkat

Seluruh data tugas disimpan dalam satu larik (array) bernama `tugas`. Setiap aksi pengguna mengikuti pola yang sama:

**ubah data → simpan ke `localStorage` → gambar ulang daftar**

Fungsi `tampilkan()` selalu menggambar ulang daftar dari data, sehingga tampilan dan data tidak pernah berselisih.

## Yang Saya Pelajari

- Mengubah tampilan lewat Document Object Model (DOM)
- Menangani peristiwa (event) seperti klik dan pengiriman formulir
- Memakai metode larik `filter`, `map`, dan `forEach`
- Menyimpan data dengan `localStorage` dan format JavaScript Object Notation (JSON)
- Memakai `textContent` alih-alih `innerHTML` agar teks masukan pengguna tidak dijalankan sebagai kode (pencegahan Cross-Site Scripting atau XSS)
- Mengubah data dengan membuat salinan baru, bukan mengubah objek lama

## Rencana Pengembangan

- [ ] Menandai tugas yang melewati tenggat
- [ ] Mengurutkan tugas berdasarkan tenggat terdekat
- [ ] Tombol "Hapus semua yang selesai"
- [ ] Mode gelap
- [ ] Mengedit judul tugas

## Pembuat

Dibuat oleh Zulfa Arsyandhi Azra.
