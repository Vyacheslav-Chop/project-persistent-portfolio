//Допоміжні функції
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';
import { createProjectsMarkup } from './render-functions';

const { form, loadMoreBtn } = refs;
function removeFocusFromElements() {
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(interactiveElement => interactiveElement.blur());
}

export function removeFocus() {
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(interactiveElement =>
    interactiveElement.addEventListener('click', removeFocusFromElements)
  );
}

function smoothScroll(ev) {
  ev.preventDefault();
  const target = document.querySelector(ev.currentTarget.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  ev.currentTarget.blur();
}

export function scrollToView() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
}

export function showErrorMessage(message) {
  iziToast.error({
    message,
    position: 'bottomRight',
    backgroundColor: '#ef4040',
    messageColor: '#ffffff',
    maxWidth: '400',
  });
}

export function showInfoMessage(message) {
  iziToast.info({
    message,
    position: 'center',
    maxWidth: '400',
    timeout: 1500,
  });
}

export function clearContent(container) {
  container.innerHTML = '';
}

export function isValidEmail(emailValue) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const emailInput = document.querySelector('#user-email');
  const emailError = document.querySelector('.email-error');
  const userInput = form.elements['user-email'].value.trim();

  const isValid = emailPattern.test(emailValue);

  if (!isValid) {
    emailInput.classList.add('error');
    emailInput.style.color = 'red';
    emailInput.style.marginBottom = '5px';

    emailError.classList.remove('hidden');
    emailError.style.marginBottom = '16px';
  } else {
    // Очищення стилів при валідному email
    emailInput.classList.remove('error');
    emailInput.style.color = '';
    emailInput.style.marginBottom = '';

    emailError.classList.add('hidden');
    emailError.style.marginBottom = '';
  }
  if (userInput === '') {
    emailError.classList.add('hidden');
  }

  return isValid;
}
export function showLoadMoreBtn() {
  loadMoreBtn.hidden = false;
}

export function hideLoadMoreBtn() {
  loadMoreBtn.hidden = true;
}

export function appendProjects(element, array) {
  element.insertAdjacentHTML('beforeend', array);
}

export function smoothScrollItems(galleryItem) {
  const rect = galleryItem.getBoundingClientRect();
  const heightItem = rect.height;

  window.scrollBy({
    top: heightItem * 0.8,
    behavior: 'smooth',
  });
}

export function checkEndOfCollection(counter, array) {
  if (counter >= array.length) {
    showInfoMessage('There are no more products to load at the moment.');
    hideLoadMoreBtn();
    
  } else {
    showLoadMoreBtn();
  }
}