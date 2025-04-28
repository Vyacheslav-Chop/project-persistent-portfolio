//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
import { handleClick, handleKeyDown, handleModalClick } from './handlers';
import { refs } from './refs';
const { modalMenu, body, backDropModalAnswer } = refs;

export function openModalMenu() {
  modalMenu.classList.remove('is-close');
  modalMenu.classList.add('is-open');
  body.style.overflow = 'hidden';
  modalMenu.addEventListener('click', handleModalClick);
  window.addEventListener('keydown', handleKeyDown);
}

export function closeModalMenu() {
  modalMenu.classList.remove('is-open');
  modalMenu.classList.add('is-close');
  body.style.overflow = '';
  modalMenu.removeEventListener('click', handleModalClick);
  window.removeEventListener('keydown', handleKeyDown);
}

export function openFormModal() {
  backDropModalAnswer.classList.remove('is-close');
  backDropModalAnswer.classList.add('is-open');
  body.style.overflow = 'hidden';
  backDropModalAnswer.addEventListener('click', handleClick);
  window.addEventListener('keydown', handleKeyDown);
}
export function closeFormModal() {
  backDropModalAnswer.classList.remove('is-open');
  backDropModalAnswer.classList.add('is-close');
  body.style.overflow = '';
  backDropModalAnswer.removeEventListener('click', handleClick);
  window.removeEventListener('keydown', handleKeyDown);
}
