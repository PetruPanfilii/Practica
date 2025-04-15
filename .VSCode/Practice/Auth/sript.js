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
