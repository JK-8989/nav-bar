const hamburger = document.querySelector('#icon-hamburger-bars');
const menu = document.querySelector('#menu');
const icons = document.querySelector('#icons-media');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
