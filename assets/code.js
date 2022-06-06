const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#closeBtn');
const menu = document.querySelector('.w-nav-overlay');
const container = document.querySelector('.container');

function openMenu() {
  container.style.display = 'none';
  menu.style.display = 'flex';
}

menuBtn.addEventListener('click', openMenu);

function closeMenu() {
  container.style.display = 'grid';
  menu.style.display = 'none';
}

closeBtn.addEventListener('click', closeMenu);
