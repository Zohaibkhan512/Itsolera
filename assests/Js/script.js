const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active'); // Show or hide the menu
  menuToggle.classList.toggle('cross'); // Change to cross icon
});

