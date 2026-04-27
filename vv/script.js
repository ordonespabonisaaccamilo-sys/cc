function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
}

document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !e.target.closest('.hamburger')) {
    menu.classList.remove('open');
  }
});
