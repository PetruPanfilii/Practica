function regUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (username && email && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
  
      alert("Contul a fost înregistrat cu succes!");
       window.location.href = ""
    } else {
      alert("Te rog să completezi toate câmpurile.");
    }
  }
  
 