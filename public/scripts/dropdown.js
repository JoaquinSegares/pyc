document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to each dropdown toggle
    const dropdownToggles = document.querySelectorAll('.group');
  
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        // Toggle the hidden class on the dropdown menu
        const dropdownMenu = toggle.querySelector('div');
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('hidden');
        }
      });
    });
  
    // Close dropdown if clicked outside
    document.addEventListener('click', () => {
      dropdownToggles.forEach(toggle => {
        const dropdownMenu = toggle.querySelector('div');
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
          dropdownMenu.classList.add('hidden');
        }
      });
    });
  });
  