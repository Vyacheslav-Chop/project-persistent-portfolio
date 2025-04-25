// Функції, які передаються колбеками в addEventListner
import { refs } from './refs';
import { saveThemeToLocalStorage } from './storage';
const { body, openModalMenuBtn } = refs;
import {
  closeModalMenu,
  openModalMenu,
} from './modal';

// перемикання тем
export function handleChangeTheme() {
  if (body.classList.contains('theme-light')) {
    body.classList.replace('theme-light', 'theme-dark');
    saveThemeToLocalStorage('theme-dark');
  } else {
    body.classList.replace('theme-dark', 'theme-light');
    saveThemeToLocalStorage('theme-light');
  }
}

// функція для клавіші
export function handleKeyDown(ev) {
  if (ev.key === 'Escape') {
    closeModalMenu();
  }
}

export function handleModalClick(ev) {
  const closeMenuBtn = ev.target.closest('.menu-close-btn');
  const navLink = ev.target.closest('.menu-nav-link');
  const orderLink = ev.target.closest('.menu-order-link');
  console.log(orderLink);
  console.log(navLinks);
  

  if (ev.target === ev.currentTarget) return;

  if (closeMenuBtn) {
    closeModalMenu();
    return;
  } else if (orderLink) {
    closeModalMenu();
    return;
  } else if (navLink) {
    closeModalMenu();
    return;
  }
}

export function handleOpenMenu() {
  if (openModalMenuBtn) {
    openModalMenu();
  }
}

