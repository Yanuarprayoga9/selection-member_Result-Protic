const users =[
    { "nim": "220302012", "nama": "Josefh Imanuel Cristian Rombot", "divisi": "kominfo", "lolos": true },
    { "nim": "220102079", "nama": "Chinta Sejatining Fitriana", "divisi": "UI/UX", "lolos": true },
    { "nim": "220102065", "nama": "Nira Ihsani Hanifah", "divisi": "Humas", "lolos": false },
    { "nim": "220302045", "nama": "Safinka Nurin Sabrina", "divisi": "Web", "lolos": true },
    { "nim": "220202083", "nama": "FAJAR DWI JUNIANTO", "divisi": "Web", "lolos": true },
    { "nim": "220302049", "nama": "Achmad Choerul Ramdhani", "divisi": "PSDA", "lolos": true },
    { "nim": "220302022", "nama": "Rayhan Afrizal Fajri", "divisi": "Web", "lolos": true },
    { "nim": "220102007", "nama": "Fardan Nurhidayat", "divisi": "PSDA", "lolos": true },
    { "nim": "220102060", "nama": "LUTFIYA AINURRAHMAN PRASETYO", "divisi": "Web", "lolos": true },
    { "nim": "220302093", "nama": "Satria Yudha Pangrangau", "divisi": "PSDA", "lolos": true },
    { "nim": "220302008", "nama": "FARIANI VINITA TAMONOB", "divisi": "Humas", "lolos": true },
    { "nim": "220102010", "nama": "Gita Listiani Putri", "divisi": "Sekretaris", "lolos": true },
    { "nim": "220303077", "nama": "Andika Bastian", "divisi": "Web", "lolos": true },
    { "nim": "220302088", "nama": "Mas Dzuky Ar-Rouf", "divisi": "Web", "lolos": true },
    { "nim": "220302082", "nama": "Evan Arlen Handy", "divisi": "Web", "lolos": true },
    { "nim": "220202095", "nama": "TRIKO NANDA PANGESTU", "divisi": "PSDA", "lolos": true },
    { "nim": "220302066", "nama": "Novita Dian Safitri", "divisi": "Web", "lolos": true },
    { "nim": "220102046", "nama": "Syam Chaidayatullah", "divisi": "Web", "lolos": true },
    { "nim": "220102013", "nama": "Maria Ine Febrianti", "divisi": "Bendahara", "lolos": true },
    { "nim": "220102014", "nama": "Meisya Anggraeni", "divisi": "Bendahara", "lolos": true },
    { "nim": "220102001", "nama": "Adisa Laras Pertiwi", "divisi": "Web", "lolos": true },
    { "nim": "220102023", "nama": "Sinthia Dwi Yolandasari", "divisi": "Web", "lolos": true },
    { "nim": "220309035", "nama": "Misbahul Khoiri", "divisi": "Web", "lolos": true },
    { "nim": "220302003", "nama": "Aulia Nabilah Zahwah", "divisi": "Bendahara", "lolos": true },
    { "nim": "220202004", "nama": "Azzahra Rikha Nur Aini", "divisi": "Bendahara", "lolos": true },
    { "nim": "220102059", "nama": "Kaila Nazael Eka Melia", "divisi": "Web", "lolos": true },
    { "nim": "220202076", "nama": "Alifia", "divisi": "Humas", "lolos": true }
]

  
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
        <h1 class="text-danger">Maaf, ${user.nama} Anda tidak lolos sebagai pengurus Protic.</h1>
        <p class="">Jangan menyerah! Tetap semangat dan coba lagi lain kali.</p>
      `;
      resultDiv.classList.remove('hapus');
    }
  }
  