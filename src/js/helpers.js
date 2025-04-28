//Допоміжні функції
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
