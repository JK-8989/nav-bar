const hamburger = document.querySelector('#icon-hamburger-bars');
const menu = document.querySelector('#menu');
const icons = document.querySelector('#icons-media');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('showLists');
  icons.classList.toggle('showLists');
});
