const selectElement = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-list');

selectElement.addEventListener('click', function () {
  selectElement.classList.toggle('active');
  navbar.classList.toggle('active');




})