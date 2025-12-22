/* =========================
   SELECTEURS GLOBAUX
========================= */
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

const navLogin = document.querySelector('#navLogin');
const navRegister = document.querySelector('#navRegister');
const navProfil = document.querySelector('#navProfil');

const formLogin = document.querySelector('#formLogin');
const formRegister = document.querySelector('#formRegister');

const profilName = document.querySelector('#profilName');
const profilEmail = document.querySelector('#profilEmail');


/* =========================
   MENU / NAVBAR 
========================= */
if (menu && navbar) {
  menu.addEventListener('click', () => {
    navbar.classList.toggle('showNav');
  });
}


/* =========================
   NAVBAR AUTH
========================= */
const isLoggedIn = localStorage.getItem('isLoggedIn');

if (isLoggedIn === 'true') {
  // Utilisateur connecté
  if (navLogin) navLogin.style.display = 'none';
  if (navRegister) navRegister.style.display = 'none';
} else {
  // Utilisateur NON connecté
  if (navProfil) navProfil.style.display = 'none';
}


/* =========================
   LOGIN
========================= */
if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const registerEmail = localStorage.getItem('registerEmail');
    const registerPass = localStorage.getItem('registerPassword');

    const loginEmail = document.querySelector('#loginEmail').value;
    const loginPassword = document.querySelector('#loginPassword').value;

    localStorage.setItem('loginEmail', loginEmail);
    localStorage.setItem('loginPassword', loginPassword);

    if (loginEmail === registerEmail && loginPassword === registerPass) {

      localStorage.setItem('isLoggedIn', 'true');

      if (profilEmail && profilName) {
        profilEmail.textContent = "Bienvenue " + loginEmail;
        profilName.textContent = "Vous êtes bien connecté !";
      }

      window.location.href = 'profil.html';

    } else {
      if (profilEmail && profilName) {
        profilEmail.textContent = "Vous devez vous connecter";
        profilName.textContent = "Accès refusé";
      }
    }
  });
}


/* =========================
   REGISTER
========================= */
if (formRegister) {
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();

    const registerEmail = document.querySelector('#registerEmail').value;
    const registerPassword = document.querySelector('#registerPassword').value;

    localStorage.setItem('registerEmail', registerEmail);
    localStorage.setItem('registerPassword', registerPassword);

    window.location.href = 'login.html';
  });
}


/* =========================
   PROFIL CHECK
========================= */
if (profilName && profilEmail) {
  const logMail = localStorage.getItem('loginEmail');

  if (logMail) {
    profilEmail.textContent = "Bienvenue " + logMail;
    profilName.textContent = "Vous êtes bien connecté !";
  } else {
    profilEmail.textContent = "Vous devez vous connecter";
    profilName.textContent = "Accès refusé";
  }
}
