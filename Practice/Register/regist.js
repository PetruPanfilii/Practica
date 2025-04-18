function regUser() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (username && email && password) {
    // Obține lista de utilizatori deja salvată sau creează una nouă
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Verifică dacă utilizatorul există deja
    const exista = users.some(user => user.email === email);
    if (exista) {
      alert("Acest email este deja folosit.");
      return;
    }

    // Creează un obiect user
    const newUser = {
      username: username,
      email: email,
      password: password
    };

    // Adaugă utilizatorul în listă și salvează
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Contul a fost înregistrat cu succes!");
     window.location.href = '/Practice/Auth/Login.html'
  } else {
    alert("Te rog să completezi toate câmpurile.");
  }
}
    
    
    
   

 