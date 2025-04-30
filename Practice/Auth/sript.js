   function ArataParola() {
     const parola = document.getElementById("password");
     const icon = document.getElementById("ochiIcon");
     
     if (parola.type === "password"){
          parola.type ="text";
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
     } else {
          parola.type = "password";
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
     }
}
function loginUser() {
     const email_username = document.getElementById("email").value;
     const password = document.getElementById("password").value;
     const users = JSON.parse(localStorage.getItem("users")) || [];
     
     const user = users.find(user => (user.email === email_username || user.username=== email_username) && user.password === password);
   
     if (user) {
       localStorage.setItem("currentUser", JSON.stringify(user)); // salvăm utilizatorul curent
       alert("Autentificare reușită!");
       window.location.href = "/Practice/Pagina-principala.html";
     } else {
       alert("Email sau parolă incorecte.");
     }
   }
   