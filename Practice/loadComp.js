/*window.addEventListener('DOMContentLoaded',() =>{
    fetch('Navbar/Navig.html')
    .then(res =>res.text())
    .then(data => document.getElementById('navbar-container').innerHTML = data);

    fetch('Footer/Foot.html')
    .then(res =>res.text())
    .then(data => document.getElementById('footer-container').innerHTML= data);
});*/
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
  
    fetch('/Practice/Footer/Foot.html')
      .then(res => res.text())
      .then(data => footerContainer.innerHTML = data);
  });