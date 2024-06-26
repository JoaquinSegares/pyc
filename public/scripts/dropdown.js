document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Toggle dropdown visibility for both desktop and mobile
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      const dropdown = toggle.nextElementSibling;
      if (dropdown) {
        dropdown.classList.toggle('hidden');
      }
    });
  });

  // Close dropdown when a submenu item is clicked
  const dropdownLinks = document.querySelectorAll('.dropdown a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      const dropdown = link.closest('.dropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
    });
  });
});
