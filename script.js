// HAMBURGER MENU
const hamburgerButton = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu-items');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

// MOBILE MENU SEARCH
const mobileMenuSearchButton = document.querySelector('.mobile-menu .menu-search');
const mobileMenuSearchContainer = document.querySelector('.mobile-menu-search');
const closeMobileMenuSearchButton = document.querySelector('.mobile-menu-search-close');

mobileMenuSearchButton.addEventListener('click', () => {
    mobileMenuSearchContainer.style.display = 'flex';
});

closeMobileMenuSearchButton.addEventListener('click', () => {
    mobileMenuSearchContainer.style.display = 'none';
});