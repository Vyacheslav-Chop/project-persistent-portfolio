// основна логіка роботи секції

import { STORAGE_KEYS } from './constants';
import { handleInput, handleSubmit } from './handlers';
import { refs } from './refs';

const { form } = refs;
const { formData } = STORAGE_KEYS;

if (localStorage.getItem(formData)) {
  const parsedKey = JSON.parse(localStorage.getItem(formData));
  if (parsedKey.email) {
    form.elements['user-email'].value = parsedKey.email;
  }
  if (parsedKey.comment) {
    form.elements['user-message'].value = parsedKey.comment;
  }
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
