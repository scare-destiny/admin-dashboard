const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#closeBtn')
const menu = document.querySelector('.w-nav-overlay')
const container = document.querySelector('.container');

menuBtn.addEventListener('click', openMenu);

function openMenu() {
	container.style.display = "none";
	menu.style.display = "flex";
}

closeBtn.addEventListener('click', closeMenu);

function closeMenu() {
	container.style.display = 'grid';
	menu.style.display = 'none';
}