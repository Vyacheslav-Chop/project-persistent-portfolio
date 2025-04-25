// основна логіка роботи секції
import { handleChangeTheme } from './handlers';
import { refs } from './refs';
const { themeToggleButton } = refs;

themeToggleButton.addEventListener('click', handleChangeTheme);