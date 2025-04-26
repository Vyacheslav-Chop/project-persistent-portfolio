//Допоміжні функції
export function disactivBtn(button) {
  if (button.disabled) {
    button.classList.add('is-disactiv');
  } else {
    button.classList.remove('is-disactiv');
  }
}