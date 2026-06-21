const menuButton = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const yearElements = document.querySelectorAll('[data-year]');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});

console.log('Nephera Labs');
