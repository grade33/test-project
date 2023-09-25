export function initBurgerMenu() {
  const burgerBtn = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');

  document.addEventListener('click', (e) => {
    if (burgerBtn.contains(e.target)) {
      if (menu.classList.contains('header__menu_active')) {
        document.documentElement.style.overflow = null;
        menu.classList.remove('header__menu_active');
      } else {
        document.documentElement.style.overflow = 'hidden';
        menu.classList.add('header__menu_active');
      }
    } else if (!menu.contains(e.target) && menu.classList.contains('header__menu_active')) {
      menu.classList.remove('header__menu_active');
      document.documentElement.style.overflow = null;
    }
  });
}
