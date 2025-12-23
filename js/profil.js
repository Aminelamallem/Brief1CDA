/* =========================
   PROFIL CHECK
========================= */
const profilName = document.querySelector('#profilName');
const profilEmail = document.querySelector('#profilEmail');

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
