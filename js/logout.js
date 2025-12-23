document.addEventListener('DOMContentLoaded', () => {
  const navLogout = document.querySelector('#navLogout');

  if (navLogout) {
    navLogout.addEventListener('click', (e) => {
      e.preventDefault();

      const confirmed = confirm("Voulez-vous vraiment vous déconnecter ?");
      if (confirmed) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loginEmail');
        window.location.href = 'login.html';
      }
    });
  }
});
