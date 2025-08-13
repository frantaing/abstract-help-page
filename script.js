/*
 *  FILE: script.js
 *  DESCRIPTION:
 *  - Handles interactive UI elements, including the mobile navigationand search functionality.
 */

// =================================================================
//   MOBILE HAMBURGER MENU TOGGLE
// =================================================================

// Get the necessary HTML elements
const hamburgerButton = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu-items');

// Add a click event listener to the hamburger button
hamburgerButton.addEventListener('click', () => {
  // Toggle the 'is-active' class on both the button and the menu
  // This triggers the CSS animations and makes the menu visible
  hamburgerButton.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

// =================================================================
//   MOBILE SEARCH OVERLAY TOGGLE
// =================================================================

// Get the necessary HTML elements
const mobileMenuSearchButton = document.querySelector('.mobile-menu .menu-search');
const mobileMenuSearchContainer = document.querySelector('.mobile-menu-search');
const closeMobileMenuSearchButton = document.querySelector('.mobile-menu-search-close');

// Add a click event listener to the search icon in the header
mobileMenuSearchButton.addEventListener('click', () => {
    // Show the search overlay by changing its display style
    mobileMenuSearchContainer.style.display = 'flex';
});

// Add a click event listener to the 'X' button inside the search overlay
closeMobileMenuSearchButton.addEventListener('click', () => {
    // Hide the search overlay
    mobileMenuSearchContainer.style.display = 'none';
});