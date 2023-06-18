const users = [
    { nim: '220302072', nama: 'Yanuar Prayoga', divisi: 'Web', lolos: false },
    { nim: '220302073', nama: 'Rina Amelia', divisi: 'Mobile', lolos: true },
    { nim: '220302074', nama: 'Budi Santoso', divisi: 'Web', lolos: true },
    { nim: '220302075', nama: 'Dewi Indriani', divisi: 'Mobile', lolos: true },
    { nim: '220302076', nama: 'Ahmad Ridwan', divisi: 'Web', lolos: true }
  ];
  
  function cekHasil() {
    const nimInput = document.getElementById('nimInput').value;
  
    const user = users.find(user => user.nim === nimInput);
    if (user && user.lolos) {
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'pengumuman.html';
    }
     else {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
        <h1 class="text-danger">Maaf,${user.nama} Anda tidak lolos sebagai pengurus Protic.</h1>
        <p class="">Jangan menyerah! Tetap semangat dan coba lagi lain kali.</p>
      `;
      resultDiv.classList.remove('d-none');
    }
  }
  