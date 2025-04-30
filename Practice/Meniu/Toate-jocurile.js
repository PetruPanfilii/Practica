const games = [
    {
      id: 1,
      title: "Dead Cells",
      image: "/Practice/Imagini/Dead-Cells.jpg",
      description: "Un joc de acțiune roguelike cu lupte intense și grafică pixel art.",
      genre: "Acțiune / Roguelike"
    },
    {
      id: 2,
      title: "Hollow Knight",
      image: "/Practice/Imagini/Hollow-knight.jpg",
      description: "O aventură metroidvania în regatul Hallownest ",
      genre: "Aventură / Metroidvania",
    },
    {
      id: 3,
      title: "Rocket League",
      image: "/Practice/Imagini/Rocket-League.jpg",
      description: "Fotbal cu mașini, multiplayer competitiv și haotic!",
      genre: "Sport / Multiplayer"
    },
    {
      id: 4,
      title: "Hotline Miami 2",
      image: "/Practice/Imagini/Hotline-Miami-2.jpg",
      description: "Violent, rapid și retro o poveste întunecată și haotică.",
      genre: "Acțiune / Indie"
    },
    {
      id: 5,
      title: "Metal Gear Rising: Revengeance",
      image: "/Practice/Imagini/Metal-Gear-Rising.jpg",
      description: `O poveste depre Raiden, un copil care a ramas traumatizat in urma războiuli transformat într-un ninja jumătate om,
       jumătate cyborg avand scopul de a opri Desperado. o companie care vinde arme de distrugere în masă. 
       (Este sugerat finisarea jocurilor anterionare Metal Gear pentru a înțelege mai bine povestea)`,
      genre: "Acțiune / Hack and Slash"
    },
    {
      id: 6,
      title: "Metal Gear Solid V: The Phantom Pain",
      image: "/Practice/Imagini/Metal-Gear-Solid-V.jpg",
      description: "Open-world stealth action cu Snake în lupta sa pentru răzbunare.",
      genre: "Acțiune / Stealth / Open World"
    },
    {
      id: 7,
      title: "Geometry Dash",
      image: "/Practice/Imagini/Geometry-Dash.jpg",
      description: "Un platformer ritmic cu nivele rapide și muzică intensă.",
      genre: "Platformer / Ritm"
    },
    {
      id: 8,
      title: "GTA V",
      image: "/Practice/Imagini/GTA-V.jpg",
      description: "Trei criminali își unesc forțele într-un oraș plin de haos și oportunități.",
      genre: "Open World / Acțiune / Aventură"
    },
    {
      id: 9,
      title: "GTA: San Andreas",
      image: "/Practice/Imagini/GTA-San-Andreas.jpg",
      description: "Povestea lui CJ într-o Americă fictivă plină de bande, crime și corupție.",
      genre: "Open World / Acțiune"
    },
    {
      id: 10,
      title: "Forager",
      image: "/Practice/Imagini/Forager.jpg",
      description: "Creează, explorează și construiește într-un joc relaxant și adictiv.",
      genre: "Supraviețuire / Explorare / Crafting"
    },
    {
      id: 11,
      title: "Need for Speed: Most Wanted (2005)",
      image: "/Practice/Imagini/NFS-Most-Wanted.jpg",
      description: "Cucerește Blacklist-ul și devino cel mai căutat șofer din oraș!",
      genre: "Curse / Acțiune"
    },
    {
      id: 12,
      title: "Undertale",
      image: "/Practice/Imagini/Undertale.png",
      description: "Un RPG unde luptele pot fi evitate prin diplomație și decizii morale.",
      genre: "RPG / Indie / Aventură"
    },
    {
      id: 13,
      title: "Metal Gear Solid",
      image: "/Practice/Imagini/Metal-Gear-Solid.jpg",
      description: "Solid Snake trebuie să elimine o amenințare nucleară într-o bază secretă.",
      genre: "Stealth / Acțiune"
    },
    {
      id: 14,
      title: "Metal Gear Solid 2: Sons of Liberty",
      image: "/Practice/Imagini/Metal-Gear-Solid-2.jpg",
      description: "Raiden și Snake luptă împotriva unei organizații teroriste care amenință lumea.",
      genre: "Stealth / Acțiune"
    },
    {
      id: 15,
      title: "Metal Gear Solid 3: Snake Eater",
      image: "/Practice/Imagini/Metal-Gear-Solid-3.jpg",
      description: "Povestea originilor lui Big Boss în timpul Războiului Rece.",
      genre: "Stealth / Supraviețuire"
    },
    {
      id: 16,
      title: "Metal Gear Solid 4: Guns of the Patriots",
      image: "/Practice/Imagini/Metal-Gear-Solid-4.jpg",
      description: "Ultima misiune a lui Solid Snake pentru a salva lumea de control total.",
      genre: "Stealth / Acțiune"
    },
    {
      id: 17,
      title: "Metal Gear Solid: Peace Walker",
      image: "/Practice/Imagini/Metal-Gear-Peace-Walker.jpg",
      description: "Big Boss fondează armata proprie și luptă pentru pace.",
      genre: "Stealth / Acțiune"
    },
    {
      id: 18,
      title: "Metal Gear Solid V: Ground Zeroes",
      image: "/Practice/Imagini/Metal-Gear-Ground-Zeroes.jpg",
      description: "Un prequel scurt și intens înainte de The Phantom Pain.",
      genre: "Stealth / Acțiune"
    },

  ];
  localStorage.setItem("games", JSON.stringify(games));
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
  alert("Trebuie să fii logat pentru a vedea și salva jocuri!");
  window.location.href = "/Practice/Auth/login.html";
}
const addedGamesKey = `addedGames_${currentUser.username}`;
const favoriteGamesKey = `favoriteGames_${currentUser.username}`;

const addedGames = JSON.parse(localStorage.getItem(addedGamesKey)) || [];
const favoriteGames = JSON.parse(localStorage.getItem(favoriteGamesKey)) || [];

  
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
      <p><strong>Gen:</strong> ${game.genre}</p>
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
      localStorage.setItem(addedGamesKey, JSON.stringify(addedGames));
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
      localStorage.setItem(favoriteGamesKey, JSON.stringify(favoriteGames));
    });
  
    iconBox.appendChild(addBtn);
    iconBox.appendChild(favBtn);
  
    card.appendChild(iconBox);
    card.appendChild(img);
    card.appendChild(content);
    container.appendChild(card);
  });
  updateGameCounters();