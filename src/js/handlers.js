// Функції, які передаються колбеками в addEventListner
import { refs } from './refs';
import { saveThemeToLocalStorage } from './storage';
const { body, openModalMenuBtn } = refs;
import { closeModalMenu, openModalMenu } from './modal';
import { STORAGE_KEYS } from './constants';
const { theme, themeText } = STORAGE_KEYS;
import { disactivBtn } from './helpers';

// перемикання тем
export function handleChangeTheme() {
  if (body.classList.contains('theme-light')) {
    body.classList.replace('theme-light', 'theme-dark');
    saveThemeToLocalStorage(theme, 'theme-dark');
  } else {
    body.classList.replace('theme-dark', 'theme-light');
    saveThemeToLocalStorage(theme, 'theme-light');
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
  const themeToggleButton = ev.target.closest('.toggle-theme-btn');

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
  } else if (themeToggleButton) {
    handleChangeTheme();
  }
}

export function handleOpenMenu() {
  if (openModalMenuBtn) {
    openModalMenu();
  }
}

export function handleChangeThemeText(ev) {

  const clickedBtn = ev.target.closest('button[data-theme]');
  if (!clickedBtn) return;

  // clickedBtn.classList.remove('is-disactiv');

  body.classList.remove(
    'text-theme-blue',
    'text-theme-purple',
    'text-theme-red'
  );

  const theme = clickedBtn.dataset.theme;
  if (theme === 'default') {
    saveThemeToLocalStorage(themeText, '');
  } else {
    body.classList.add(`text-theme-${theme}`);
    saveThemeToLocalStorage(themeText, `text-theme-${theme}`)
  }
  
  // clickedBtn.classList.add('is-disactiv');

}
