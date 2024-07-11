const menuSvg = document.querySelector('.mobile-nav .menu-svg');
const menuCloseSvg = document.querySelector('.menu svg');

// in HTML, it is the class="menu-overlay", but for the sake of javascript, I name it menu only.
const menu = document.querySelector('.menu-overlay');

menuSvg.addEventListener('click', () => {
  menu.classList.toggle('active');
});

menuCloseSvg.addEventListener('click', () => {
  menu.classList.toggle('active');
});

menu.addEventListener('click', (e) => {
  if(e.target === menu) menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});