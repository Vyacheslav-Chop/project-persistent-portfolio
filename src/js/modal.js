//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
import { handleClick, handleKeyDown, handleModalClick } from './handlers';
import { refs } from './refs';
const { modalMenu, body, backDropModalAnswer } = refs;


// відкриття модального вікна для меню навігації
export function openModalMenu() {
  modalMenu.classList.remove('is-close');
  modalMenu.classList.add('is-open');
  body.style.overflow = 'hidden';
  modalMenu.addEventListener('click', handleModalClick);
  window.addEventListener('keydown', handleKeyDown);
}


// заккриття модального вікна для меню навігації
export function closeModalMenu() {
  modalMenu.classList.remove('is-open');
  modalMenu.classList.add('is-close');
  body.style.overflow = '';
  modalMenu.removeEventListener('click', handleModalClick);
  window.removeEventListener('keydown', handleKeyDown);
}


// відкриття модального вікна для відповіді з бекенду
export function openFormModal() {
  backDropModalAnswer.classList.remove('is-close');
  backDropModalAnswer.classList.add('is-open');
  body.style.overflow = 'hidden';
  document.body.classList.add('page-inactive');
  backDropModalAnswer.addEventListener('click', handleClick);
  window.addEventListener('keydown', handleKeyDown);
}

// заккриття модального вікна для відповіді з бекенду
export function closeFormModal() {
  backDropModalAnswer.classList.remove('is-open');
  backDropModalAnswer.classList.add('is-close');
  body.style.overflow = '';
  document.body.classList.remove('page-inactive');
  backDropModalAnswer.removeEventListener('click', handleClick);
  window.removeEventListener('keydown', handleKeyDown);
}
