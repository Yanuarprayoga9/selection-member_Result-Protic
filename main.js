const users = [
    { nim: '220302072', nama: 'Yanuar Prayoga', divisi: 'Web' },
    { nim: '220302073', nama: 'Achmad choerul', divisi: 'Mobile' },
    { nim: '220302074', nama: 'Budi Santoso', divisi: 'Web' },
    { nim: '220302075', nama: 'Dewi Indriani', divisi: 'Mobile' },
    { nim: '220302076', nama: 'Ahmad Ridwan', divisi: 'Web' }
    // Tambahkan data pengguna lainnya di sini
  ];

  function cekHasil() {
    const nimInput = document.getElementById('nimInput').value;
    const user = users.find(user => user.nim === nimInput);
  
    if (user) {
      const message = `Selamat ${user.nama}, Anda diterima sebagai pengurus Protic di divisi ${user.divisi}.`;
      const encodedMessage = encodeURIComponent(message);
      window.location.href = `pengumuman.html?message=${encodedMessage}`; // Mengarahkan ke halaman pengumuman dengan pesan pengumuman sebagai parameter URL
    } else {
      const message = 'Maaf ${user.nama}, Belum lolos.';
      const encodedMessage = encodeURIComponent(message);
      window.location.href = `pengumuman.html?message=${encodedMessage}`; // Mengarahkan ke halaman pengumuman dengan pesan pengumuman sebagai parameter URL
    }
  }