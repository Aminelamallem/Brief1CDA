/* =========================
   MENU / NAVBAR
========================= */
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

if (menu && navbar) {
  menu.addEventListener('click', () => {
    navbar.classList.toggle('showNav');
  });
}



/* =========================
   AUTHENTIFICATION NAVBAR
========================= */
const navLogin = document.querySelector('#navLogin');
const navRegister = document.querySelector('#navRegister');
const navProfil = document.querySelector('#navProfil');
const navLogout = document.querySelector('#navLogout');


const isLoggedIn = localStorage.getItem('isLoggedIn');

if (isLoggedIn === 'true') {
  if (navLogin) navLogin.style.display = 'none';
  if (navRegister) navRegister.style.display = 'none';
  if (navbar) navbar.style.backgroundColor = '#3a48c5ff';
} else {
  if (navProfil) navProfil.style.display = 'none';
  if (navLogout) navLogout.style.display = 'none';
}


  