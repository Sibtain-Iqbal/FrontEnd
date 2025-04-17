const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

let menuOpen = false;

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuOpen = !menuOpen;
    hamburger.textContent = menuOpen ? '✕' : '☰';
});
