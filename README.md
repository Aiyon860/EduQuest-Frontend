# EduQuest 🎓

EduQuest adalah aplikasi web pendidikan modern yang dibangun menggunakan React, TypeScript, dan Vite. Proyek ini menyediakan platform komprehensif untuk konten pendidikan dan pengalaman pembelajaran interaktif.

## Fitur yang belum diimplementasikan
- Dashboard
- Generate Soal dari Materi Siswa
- Peringkat
- Misi Harian
- Achievement

## Panduan Instalasi dan Menjalankan Aplikasi

### Persyaratan Sistem

Pastikan sistem Anda telah terinstal perangkat lunak berikut:
- **Node.js** (versi 18 atau lebih tinggi)
- **npm** atau **yarn** sebagai package manager

### Langkah-langkah Instalasi

1. **Kloning repositori:**
   ```bash
   git clone <repository-url>
   cd EduQuest
   ```

2. **Instalasi dependensi:**
   ```bash
   npm install
   ```
   atau jika Anda menggunakan yarn:
   ```bash
   yarn install
   ```

### Menjalankan Aplikasi dalam Mode Development

1. **Memulai server development:**
   ```bash
   npm run dev
   ```
   atau dengan yarn:
   ```bash
   yarn dev
   ```

2. **Membuka aplikasi di browser:**
   Buka browser dan navigasi ke `http://localhost:5173` untuk melihat aplikasi berjalan.
   
   Halaman akan secara otomatis memuat ulang ketika Anda melakukan perubahan pada kode sumber.

## Perintah yang Tersedia

- **`npm run dev`** - Memulai server development dengan hot reload
- **`npm run build`** - Membuat build produksi yang telah dioptimalisasi
- **`npm run preview`** - Melihat preview build produksi secara lokal
- **`npm run lint`** - Menjalankan ESLint untuk memeriksa kualitas kode

## Membangun untuk Produksi

1. **Membuat build produksi:**
   ```bash
   npm run build
   ```

2. **Melihat preview build produksi:**
   ```bash
   npm run preview
   ```

   Artifact build akan disimpan dalam direktori `dist/`.