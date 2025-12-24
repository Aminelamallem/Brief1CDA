const formRegister = document.querySelector('#formRegister');

if (formRegister) {
  formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();

    const registerEmail = document.querySelector('#registerEmail').value;
    const registerPassword = document.querySelector('#registerPassword').value;
    const regexRegister = document.querySelector('.regexRegister');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    regexRegister.textContent = "";
    regexRegister.style.color = "";
    formRegister.style.border = "";

    if (!emailRegex.test(registerEmail)) {
      regexRegister.textContent = "Please enter a valid email and a password with at least 6 characters.";
      regexRegister.style.color = "red";
      formRegister.style.border = "2px solid red";

      setTimeout(() => {
        regexRegister.textContent = "";
        formRegister.style.border = "";
      }, 3000);

      return;
    }

    if (!passwordRegex.test(registerPassword)) {
      regexRegister.textContent = "Please enter a valid email and a password with at least 6 characters.";
      regexRegister.style.color = "red";
      formRegister.style.border = "2px solid red";

      setTimeout(() => {
        regexRegister.textContent = "";
        formRegister.style.border = "";
      }, 2000);

      return;
    }

    const hashedPassword = await hashPassword(registerPassword);
    localStorage.setItem('registerEmail', registerEmail);
    localStorage.setItem('registerPassword', hashedPassword);

    window.location.href = 'login.html';
  });
}
