document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('#menu-button');
  const navMenu = document.querySelector('#nav-menu');
  const navLinks = navMenu.querySelectorAll('a'); // Select all links inside the nav menu

  if (menuButton && navMenu) {
    // Toggle menu visibility on button click
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
    });

    // Hide the menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.add('hidden'); // Ensure the menu is hidden after a link click
      });
    });
  } else {
    console.error("Menu button or navigation menu not found");
  }
});
