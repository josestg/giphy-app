# A Simple GIPHY App

[![Netlify Status](https://api.netlify.com/api/v1/badges/7c559604-0013-45f3-91dd-07b3e1c14834/deploy-status)](https://app.netlify.com/sites/compassionate-shockley-198152/deploys)

## Pages

- [x] Landing
- [x] Iron Man Page
- [x] Search Page
- [x] Not Found Page

## Components

- [x] Gif Item
- [x] Gif List
- [x] Search Input
- [x] Layout

## Hooks

- [x] Use Giphy Search API: Reusable hooks yang berfungsi untuk melakukan `fetch` dan `debouncing` ke endpoint search.

# Features

- [x] Halaman Iron Man menampilkan Gif Iron Man yang diambil dari GIPHY API.
- [x] Halaman Iron Man Page menampilkan maksimal 9 Gif dalam satu halaman.
- [x] Tersedia tombol `Prev` dan `Next` di Halaman Iron Man yang berguna untuk mengambil 9 Gif berikut atau sebelumnya.
- [x] Halaman Search dapat menampilkan Gif secara dinamis bedasarkan `keyword` yang diberikan.
- [x] Halaman Search juga menampikan maksimal 9 Gif dalam satu halaman.
- [x] Proses `Search` menggunakan teknik `Debouncing` dan `React.useMemo` untuk meningkatkan performa.
- [x] Setiap Gif yang di-render dapat di `copy` dengan cara diklik.
- [x] Tersedia halaman not found apabila tidak ada `path` yang ditemukan.

## Tech Stack

- [Create React App](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Chakra UI](https://reactjs.org/)
- [Netlify](https://www.netlify.com/)
