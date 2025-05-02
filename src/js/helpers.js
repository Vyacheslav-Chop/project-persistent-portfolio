//Допоміжні функції
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';

const { form, loadMoreBtn } = refs;

// функція для слухача зняття фокусу
function removeFocusFromElements() {
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(interactiveElement => interactiveElement.blur());
}

// зняття фокусу з елементів
export function removeFocus() {
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(interactiveElement =>
    interactiveElement.addEventListener('click', removeFocusFromElements)
  );
}

// плавний скролл для посилань навігації

function smoothScroll(ev) {
  ev.preventDefault();
  const target = document.querySelector(ev.currentTarget.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  ev.currentTarget.blur();
}

// плавний скролл до секцій

export function scrollToView() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
}

// повідомлення про помилку
export function showErrorMessage(message) {
  iziToast.error({
    message,
    position: 'bottomRight',
    backgroundColor: '#ef4040',
    messageColor: '#ffffff',
    maxWidth: '400',
  });
}


// інформаційне повідомлення
export function showInfoMessage(message) {
  iziToast.info({
    message,
    position: 'center',
    maxWidth: '400',
    timeout: 1500,
  });
}


// очищення контенту
export function clearContent(container) {
  container.innerHTML = '';
}

// валідатор для інпуту пошти
export function isValidEmail(emailValue) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailInput = document.querySelector('#user-email');
  const emailError = document.querySelector('.email-error');
  const inputIcon = document.querySelector('.work-together-input-wrapper');
  const userInput = form.elements['user-email'].value.trim();

  const isValid = emailPattern.test(emailValue);

  if (!isValid) {
    emailInput.classList.add('error');
    emailInput.style.color = 'red';
    emailInput.style.marginBottom = '5px';

    emailError.classList.add('hidden');

    inputIcon.classList.add('hidden');

    emailError.classList.remove('hidden');
    emailError.style.marginBottom = '16px';
  } else {
    // Очищення стилів при валідному email
    emailInput.classList.remove('error');
    emailInput.style.color = '';
    emailInput.style.marginBottom = '';

    inputIcon.classList.remove('hidden');

    emailError.classList.add('hidden');
    emailError.style.marginBottom = '';
  }
  if (userInput === '') {
    emailError.classList.add('hidden');
    inputIcon.classList.add('hidden');
    emailInput.style.marginBottom = '32px';
  }

  return isValid;
}

// кнопку видно
export function showBtn(btn) {
  btn.hidden = false;
}


// кнопку не видно
export function hideBtn(btn) {
  btn.hidden = true;
}

// відмалювання контенту шляхом додавання елементів
export function appendProjects(element, array) {
  element.insertAdjacentHTML('beforeend', array);
}

// плавний скролл для підвантаження проектів
export function smoothScrollItems(galleryItem) {
  const rect = galleryItem.getBoundingClientRect();
  const heightItem = rect.height;

  window.scrollBy({
    top: heightItem * 1,
    behavior: 'smooth',
  });
}


// перевірка на залишок колекції проектів
export function checkEndOfCollection(counter, array) {
  if (counter >= array.length) {
    showInfoMessage('There are no more projets to load at the moment.');
    hideBtn(loadMoreBtn);
  } else {
    showBtn(loadMoreBtn);
  }
}


// скролл до першого проекту
export function scrollToFirstProject() {
  const firstProject = document.querySelector('.projects-item');
  if (firstProject) {
    firstProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
