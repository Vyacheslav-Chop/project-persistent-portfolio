// основна логіка роботи секції
import { applySavedTheme } from './themes';
import { refs } from './refs';
const { openModalMenuBtn } = refs;
import { handleOpenMenu } from './handlers';

applySavedTheme();
openModalMenuBtn.addEventListener('click', handleOpenMenu);
