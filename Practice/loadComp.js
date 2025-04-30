window.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.createElement('div');
    navbarContainer.id = 'navbar-container';
    document.body.prepend(navbarContainer);
  
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    document.body.appendChild(footerContainer);
  
    fetch('/Practice/Navbar/Navig.html')
      .then(res => res.text())
      .then(data => navbarContainer.innerHTML = data);

      const script = document.createElement("script");
      script.src = "/Practice/NavBar/logout.js";
      
      document.body.appendChild(script);
    fetch('/Practice/Footer/Foot.html')
      .then(res => res.text())
      .then(data => footerContainer.innerHTML = data);
  });
  