// Функції, які передаються колбеками в addEventListner
import { refs } from "./refs";
import { saveThemeToLocalStorage } from "./storage";
const { body } = refs;

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