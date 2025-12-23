const formRegister = document.querySelector('#formRegister');

if (formRegister) {
  formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();

    const registerEmail = document.querySelector('#registerEmail').value;
    const registerPassword = document.querySelector('#registerPassword').value;
    const regexRegister = document.querySelector('.regexRegister');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    if (!emailRegex.test(registerEmail)) {
      wrongMessage.textContent = "Please enter a valid email and a password with at least 6 characters.";
wrongMessage.style.color = "red";

      formLogin.style.border = "2px solid red";
      return;
    }

    if (!passwordRegex.test(registerPassword)) {
      regexRegister.textContent = "Please enter a valid email and a password with at least 6 characters.";
regexRegister.style.color = "red";

       formRegister.style.border = "2px solid red";
       
      return;
    }

    const hashedPassword = await hashPassword(registerPassword);

    localStorage.setItem('registerEmail', registerEmail);
    localStorage.setItem('registerPassword', hashedPassword);

    window.location.href = 'login.html';
  });
}
