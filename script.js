function toggleMenu() {
  const popupMenu = document.getElementById('popupMenu');
  if (popupMenu.style.left === '0px') {
      popupMenu.style.left = '-100%';
  } else {
      popupMenu.style.left = '0px';
  }
}
