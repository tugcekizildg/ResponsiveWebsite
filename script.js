//Selecting Elements
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const menuTopNav = document.getElementById('menuTopNav');

//Improve accessibility TAB settings for keyboard users
const breakpoint = window.matchMedia('(width < 37.5rem)');
//Initial Setup
setUpTopNav();

//Event Listeners
btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);
breakpoint.addEventListener('change', () => setUpTopNav);

//Open Mobile Menu
function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  //Remove Inert from Menu
  menuTopNav.removeAttribute('inert');
  animateMenu();
  //Prevent body scroll
  bodyScrollLockUpgrade.disableBodyScroll(menuTopNav);
  //Focus Close Button keyboard users
  btnClose.focus();
}

//Close Mobile Menu
function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  menuTopNav.setAttribute('inert', '');
  animateMenu();
  //Allow body scroll
  bodyScrollLockUpgrade.enableBodyScroll(menuTopNav);
  btnOpen.focus();
}

//Add animating class(fixed: translate issue)
function animateMenu() {
  menuTopNav.classList.add('animating');

  //Remove animating class after animation
  setTimeout(() => {
    menuTopNav.classList.remove('animating');
  }, 350);
}

//Improve Accessibility for keyboard users
function setUpTopNav() {
  if (breakpoint.matches) {
    menuTopNav.setAttribute('inert', '');
  } else {
    menuTopNav.removeAttribute('inert');
  }
}
