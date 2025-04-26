// основна логіка роботи секції
import { applySavedTheme, applySavedThemeText } from './themes';
import { refs } from './refs';
const { openModalMenuBtn } = refs;
import { handleOpenMenu, handleChangeThemeText } from './handlers';

document.addEventListener('DOMContentLoaded', () => {
  const switchers = document.querySelectorAll('.theme-switcher.container');
  switchers.forEach(switcher => {
    switcher.addEventListener('click', handleChangeThemeText);
  });
});

applySavedTheme();
applySavedThemeText();
openModalMenuBtn.addEventListener('click', handleOpenMenu);
