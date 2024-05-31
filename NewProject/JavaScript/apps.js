// function createDatabase() {
//   var Database_Name = 'MyDatabase';
//   var version = 1.0;
// }
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click' function{
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})