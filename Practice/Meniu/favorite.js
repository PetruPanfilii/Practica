const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (!currentUser) {
  alert("Trebuie să fii autentificat pentru a vedea favoritele!");
  window.location.href = "/Practice/Auth/login.html"; // Redirecționează la login dacă nu e logat
}

const games = JSON.parse(localStorage.getItem('games')) || []; // Lista de jocuri
const favoriteIds = JSON.parse(localStorage.getItem(`favoriteGames_${currentUser.username}`)) || [];

const container = document.getElementById('favoriteContainer');

const favoriteGames = games.filter(game => favoriteIds.includes(game.id));

favoriteGames.forEach(game => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = game.image;

  const content = document.createElement('div');
  content.className = 'card-content';
  content.innerHTML = `
    <h3>${game.title}</h3>
    <p><strong>Gen:</strong> ${game.genre}</p>
    <p>${game.description}</p>
  `;

  card.appendChild(img);
  card.appendChild(content);
  container.appendChild(card);
});

if (favoriteGames.length === 0) {
  container.innerHTML = "<p>Nu ai jocuri favorite încă.</p>";
}