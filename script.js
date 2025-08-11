// HAMBURGER MENU
const hamburgerButton = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu-items');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});