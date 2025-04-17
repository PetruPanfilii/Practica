window.addEventListener('DOMContentLoaded',() =>{
    fetch('../Navbar/Navig.html')
    .then(res =>res.text())
    .then(data => document.getElementById('navbar-container').innerHTML = data);

    fetch('Footer/Foot.html')
    .then(res =>res.text())
    .then(data => document.getElementById('footer-container').innerHTML= data);
});