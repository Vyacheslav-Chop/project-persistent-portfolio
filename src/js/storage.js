//Робота з loacalStorage
import { STORAGE_KEYS } from "./constants";
const { theme } = STORAGE_KEYS;

// функції для отримання та збереження тем в сховищі
export function saveThemeToLocalStorage(themeValue) {
  localStorage.setItem(theme, themeValue);
}

export function loadThemeFromLocalStorage() {
  const savedTheme = localStorage.getItem(theme);
  return savedTheme ? savedTheme : 'theme-light';
}
