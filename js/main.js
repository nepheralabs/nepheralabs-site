const menuButton = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const yearElements = document.querySelectorAll('[data-year]');
const scrollButtons = document.querySelectorAll('.js-scroll-to-form');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

scrollButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const target = document.querySelector('#waitlist');

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});

console.log('Nephera Labs');
