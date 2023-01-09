const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

const navItem = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
})

navItem.addEventListener('click', () => {
  navbar.classList.toggle('change');
})