# Panduan Menambahkan Foto / Gambar Portofolio

Direktori ini digunakan untuk menyimpan seluruh aset gambar web portofolio Anda.

## 1. Foto Profil (Avatar)
- **Lokasi Folder:** `public/images/profile/`
- **File Default:** `avatar.svg` (dapat diganti dengan `avatar.jpg` atau `avatar.png`)
- **Cara Mengganti Foto Anda:**
  1. Masukkan file foto profil Anda (misalnya `profile.jpg` atau `avatar.png`) ke dalam folder `public/images/profile/`.
  2. Buka file [`src/lib/constants.js`](file:///d:/magang/task/5/src/lib/constants.js) dan perbarui nilai `avatarUrl`:
     ```js
     export const SITE_CONFIG = {
       name: 'Alexandre Rivera',
       // ...
       avatarUrl: '/images/profile/foto-saya.jpg', // ganti dengan nama file foto Anda
     };
     ```

## 2. Foto Preview Proyek (Project Thumbnails)
- **Lokasi Folder:** `public/images/projects/`
- **File Default:**
  - `nexus-analytics.svg`
  - `saas-flow.svg`
  - `dev-pulse.svg`
  - `omni-store.svg`
- **Cara Mengganti Screenshot Proyek Anda:**
  1. Simpan gambar screenshot proyek ke folder `public/images/projects/` (format `.png`, `.jpg`, atau `.webp`).
  2. Buka file [`src/data/projects.js`](file:///d:/magang/task/5/src/data/projects.js) dan perbarui path `image` pada objek proyek terkait:
     ```js
     {
       id: 'nexus-analytics',
       title: 'Nexus Analytics Dashboard',
       image: '/images/projects/screenshot-nexus.png',
       // ...
     }
     ```
