const games = [
    {
      id: 1,
      title: "Dead Cells",
      image: "/Practice/Imagini/Dead-Cells.jpg",
      description: "Un joc de acțiune roguelike cu lupte intense și grafică pixel art."
    },
    {
      id: 2,
      title: "Hollow Knight",
      image: "/Practice/Imagini/Hollow-knight.jpg",
      description: "O aventură metroidvania în regatul Hallownest plin de mistere."
    },
    {
      id: 3,
      title: "Rocket League",
      image: "/Practice/Imagini/Rocket-League.jpg",
      description: "Fotbal cu mașini, multiplayer competitiv și haotic!"
    },
    {
      id: 4,
      title: "Hotline Miami 2",
      image: "/Practice/Imagini/Hotline-Miami-2.jpg",
      description: "Violent, rapid și retro – o poveste întunecată și haotică."
    }
  ];
  
  const addedGames = JSON.parse(localStorage.getItem('addedGames')) || [];
  const favoriteGames = JSON.parse(localStorage.getItem('favoriteGames')) || [];
  
  const container = document.getElementById('gameContainer');
  
  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'card';
  
    const img = document.createElement('img');
    img.src = game.image;
  
    const content = document.createElement('div');
    content.className = 'card-content';
    content.innerHTML = `
      <h3>${game.title}</h3>
      <p>${game.description}</p>
    `;
  
    const iconBox = document.createElement('div');
    iconBox.className = 'card-icons';
  
    const addBtn = document.createElement('button');
    addBtn.className = 'icon-btn';
    addBtn.innerHTML = '<i class="fa-solid fa-gamepad"></i>';
    if (addedGames.includes(game.id)) addBtn.classList.add('added');
  
    addBtn.addEventListener('click', () => {
      const index = addedGames.indexOf(game.id);
      if (index > -1) {
        addedGames.splice(index, 1);
        addBtn.classList.remove('added');
      } else {
        addedGames.push(game.id);
        addBtn.classList.add('added');
      }
      localStorage.setItem('addedGames', JSON.stringify(addedGames));
    });
  
    const favBtn = document.createElement('button');
    favBtn.className = 'icon-btn';
    favBtn.innerHTML = '<i class="fa-star fa-regular"></i>';
    if (favoriteGames.includes(game.id)) {
      favBtn.innerHTML = '<i class="fa-solid fa-star"></i>';
      favBtn.classList.add('favorite');
    }
  
    favBtn.addEventListener('click', () => {
      const index = favoriteGames.indexOf(game.id);
      if (index > -1) {
        favoriteGames.splice(index, 1);
        favBtn.innerHTML = '<i class="fa-regular fa-star"></i>';
        favBtn.classList.remove('favorite');
      } else {
        favoriteGames.push(game.id);
        favBtn.innerHTML = '<i class="fa-solid fa-star"></i>';
        favBtn.classList.add('favorite');
      }
      localStorage.setItem('favoriteGames', JSON.stringify(favoriteGames));
    });
  
    iconBox.appendChild(addBtn);
    iconBox.appendChild(favBtn);
  
    card.appendChild(iconBox);
    card.appendChild(img);
    card.appendChild(content);
    container.appendChild(card);
  });