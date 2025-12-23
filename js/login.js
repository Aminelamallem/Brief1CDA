/* =========================
   LOGIN
========================= */
const formLogin = document.querySelector('#formLogin');

if (formLogin) {
  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const wrongPassword = document.querySelector('.wrongPassword');
    const registerEmail = localStorage.getItem('registerEmail');
    const registerPass = localStorage.getItem('registerPassword');

    const loginEmail = document.querySelector('#loginEmail').value;
    const loginPassword = document.querySelector('#loginPassword').value;

    const hashedLoginPass = await hashPassword(loginPassword);

    if (loginEmail === registerEmail && hashedLoginPass === registerPass) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loginEmail', loginEmail);
      window.location.href = 'profil.html';
    } else {
      
       wrongPassword.textContent = "Wrong email or password.";
        wrongPassword.style.color = "red";
      formLogin.style.border = "2px solid red";
      setTimeout(() => {
        formLogin.style.border = "";
        wrongPassword.textContent = "";
      }, 2000);
    }
  });
}
