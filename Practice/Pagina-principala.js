document.addEventListener("DOMContentLoaded", () => {
    updateGameCounters();
  });
  
  function updateGameCounters() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return;
    
    const favoriteGamesKey = `favoriteGames_${currentUser.username}`;
    
    const favoriteGames = JSON.parse(localStorage.getItem(favoriteGamesKey)) || [];
  
    const favoriteGamesElem = document.getElementById('favoriteGames');
  
    if (addedGamesElem) addedGamesElem.textContent = addedGames.length;
    if (favoriteGamesElem) favoriteGamesElem.textContent = favoriteGames.length;
  }