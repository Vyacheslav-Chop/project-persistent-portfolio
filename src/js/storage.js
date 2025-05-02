//Робота з loacalStorage
import { STORAGE_KEYS } from "./constants";
const { theme, themeText } = STORAGE_KEYS;

// функції для отримання та збереження тем в сховищі
export function saveThemeToLocalStorage(key, themeValue) {
  localStorage.setItem(key, themeValue);
}

// завантажуємо з локального сховища за ключем theme
export function loadThemeFromLocalStorage() {
  const savedTheme = localStorage.getItem(theme);
  return savedTheme ? savedTheme : 'theme-light';
}


// завантажуємо з локального сховища за ключем themeText
export function loadThemeTextFromLocalStorage() {
  const savedThemeText = localStorage.getItem(themeText)
  return savedThemeText ? savedThemeText : '';
}