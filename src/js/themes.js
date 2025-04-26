// логіка роботи тем
 import { handleChangeTheme } from './handlers';
import { refs } from './refs';
const { themeToggleButton, body } = refs;
import { loadThemeFromLocalStorage, loadThemeTextFromLocalStorage } from './storage';

themeToggleButton.addEventListener('click', handleChangeTheme);

export function applySavedTheme() {
  const savedTheme = loadThemeFromLocalStorage();
  if (savedTheme) {
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add(savedTheme);
  } else {
    body.classList.add('theme-light');
  }
}

export function applySavedThemeText() {
  const savedThemeText = loadThemeTextFromLocalStorage();
  if (!savedThemeText) return;
  body.classList.add(savedThemeText);
}