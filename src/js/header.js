// основна логіка роботи секції
import { applySavedTheme, applySavedThemeText } from './themes';
import { refs } from './refs';
const { openModalMenuBtn, themeTextBox } = refs;
import { handleOpenMenu } from './handlers';
import { handleChangeThemeText } from './handlers';

applySavedTheme();
applySavedThemeText();
openModalMenuBtn.addEventListener('click', handleOpenMenu);
themeTextBox.addEventListener('click', handleChangeThemeText)
