/* =========================
   SELECTEURS GLOBAUX
========================= */
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

const navLogin = document.querySelector('#navLogin');
const navRegister = document.querySelector('#navRegister');
const navProfil = document.querySelector('#navProfil');
const navLogout = document.querySelector('#navLogout');

const formLogin = document.querySelector('#formLogin');
const formRegister = document.querySelector('#formRegister');

const profilName = document.querySelector('#profilName');
const profilEmail = document.querySelector('#profilEmail');

const sliderDiv = document.getElementById('slider');



/* =========================
   MENU / NAVBAR
========================= */
if (menu && navbar) {
  menu.addEventListener('click', () => {
    navbar.classList.toggle('showNav');
  });
}


/* =========================
   AUTHENTIFICATION NAVBAR
========================= */
const isLoggedIn = localStorage.getItem('isLoggedIn');

if (isLoggedIn === 'true') {
  // Utilisateur connecté
  if (navLogin) navLogin.style.display = 'none';
  if (navRegister) navRegister.style.display = 'none';
  if (navbar) navbar.style.backgroundColor = '#3a48c5ff';
} else {
  // Utilisateur NON connecté
  if (navProfil) navProfil.style.display = 'none';
  if (navLogout) navLogout.style.display = 'none';
}


/* =========================
   FONCTION UTILE
========================= */
// Fonction pour hasher un mot de passe
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}


/* =========================
   REGISTER
========================= */
if (formRegister) {
  formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();

    const registerEmail = document.querySelector('#registerEmail').value;
    const registerPassword = document.querySelector('#registerPassword').value;

    const hashedPassword = await hashPassword(registerPassword);

    localStorage.setItem('registerEmail', registerEmail);
    localStorage.setItem('registerPassword', hashedPassword); // stocke le hash

    window.location.href = 'login.html';
  });
}


/* =========================
   LOGIN
========================= */
if (formLogin) {
  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();

    const registerEmail = localStorage.getItem('registerEmail');
    const registerPass = localStorage.getItem('registerPassword');

    const loginEmail = document.querySelector('#loginEmail').value;
    const loginPassword = document.querySelector('#loginPassword').value;

    const hashedLoginPass = await hashPassword(loginPassword);

    if (loginEmail === registerEmail && hashedLoginPass === registerPass) {
      // Utilisateur connecté
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loginEmail', loginEmail);

      if (profilEmail && profilName) {
        profilEmail.textContent = "Bienvenue " + loginEmail;
        profilName.textContent = "Vous êtes bien connecté !";
      }

      window.location.href = 'profil.html';
    } else {
      // Identifiants incorrects
      if (formLogin) {
        formLogin.style.border = "2px solid red";

        // Remet la bordure normale après 2 secondes
        setTimeout(() => {
          formLogin.style.border = "";
        }, 2000);
      }

      if (profilEmail && profilName) {
        profilEmail.textContent = "Vous devez vous connecter";
        profilName.textContent = "Accès refusé";
      }
    }
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


const slides = [
  {
    img: "profilImages/abdul.png",
    text: "Super expérience chez White Wrestling ! Abdul a énormément progressé grâce à un encadrement sérieux et motivant. Les entraînements sont intenses, bien structurés et adaptés à tous les niveaux.",
    stars: 5
  },
  {
    img: "profilImages/jerome.png",
    text: "Excellent coaching et très bonne ambiance. Jerome a particulièrement apprécié la pédagogie des coachs et la motivation transmise à chaque séance. Une salle idéale pour progresser en lutte.",
    stars: 4
  },
  {
    img: "profilImages/muhammad.png",
    text: "Muhammad est très satisfait de son expérience. Les entraînements sont de qualité, les conseils personnalisés et les résultats sont rapidement visibles, aussi bien sur le plan physique que technique.",
    stars: 5
  },
  {
    img: "profilImages/sophia.png",
    text: "Sophia recommande vivement White Wrestling. Une salle inspirante où l’on progresse à son rythme, dans le respect, la discipline et la persévérance, avec un excellent esprit d’équipe.",
    stars: 5
  },
  {
    img: "profilImages/john.png",
    text: "John a adoré l’approche des coachs, à la fois professionnels et accessibles. Les séances sont efficaces, bien encadrées et adaptées aux objectifs de chacun.",
    stars: 4
  }
];


let currentIndex = 0;

function showSlide() {
    if (!sliderDiv) return;

    const slide = slides[currentIndex];

    // Génère les étoiles
    let starsHtml = "★".repeat(slide.stars) + "☆".repeat(5 - slide.stars);

    // Remplace le contenu par image + texte + étoiles
    sliderDiv.innerHTML = `
        <img src="${slide.img}" alt="profil">
        <div class="comment">
            <div class="stars">${starsHtml}</div>
            <div class="text">${slide.text}</div>
        </div>
    `;

    currentIndex = (currentIndex + 1) % slides.length;
}

// Initialisation
showSlide();
setInterval(showSlide, 5000);

/* =========================
   DECONNECTION
========================= */
if (navLogout) {
  navLogout.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le lien de naviguer immédiatement

    const confirmed = confirm("Voulez-vous vraiment vous déconnecter ?");
    if (confirmed) {
      // Supprime les infos de connexion
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loginEmail');

      // Redirection vers login ou accueil
      window.location.href = 'login.html';
    }
  });
}
