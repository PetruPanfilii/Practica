document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        document.getElementById("logout");
        window.location.href = "/Practice/Auth/login.html"; // ajustează calea dacă e altă structură
      });
    }
  });