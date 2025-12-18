const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('showNav');
});


// LOGIN
const formLogin = document.querySelector('#formLogin');

if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginEmail = document.querySelector('#loginEmail');
    const loginPassword = document.querySelector('#loginPassword');

    localStorage.setItem('loginEmail', loginEmail.value);
    localStorage.setItem('loginPassword', loginPassword.value);
     window.location.href = 'profil.html';
  });
}


// REGISTER
const formRegister = document.querySelector('#formRegister');

if (formRegister) {
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();

    const registerEmail = document.querySelector('#registerEmail');
    const registerPassword = document.querySelector('#registerPassword');

    localStorage.setItem('registerEmail', registerEmail.value);
    localStorage.setItem('registerPassword', registerPassword.value);
  });
}

const profilName = document.querySelector('#profilName');
const profilEmail = document.querySelector('#profilEmail');

if (profilName && profilEmail) {
    const logMail = localStorage.getItem('loginEmail');
    const logoLogin = document.querySelector('#LoginLink');
    if (!logMail) {
        profilEmail.textContent = "Vous devez vous connecter";
        profilName.textContent = "Accès refusé";
    } else {
        profilEmail.textContent = "Bienvenue " + logMail;
        profilName.textContent = "Vous êtes bien connecté !";
        console.log(logoLogin);
        logoLogin.style.display = "none";

    }
}




;
