//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
import {
  handleKeyDown,
  handleModalClick,
} from './handlers';
import { refs } from './refs';
const { modalMenu } = refs;

export function openModalMenu() {
  modalMenu.classList.remove('is-close');
  modalMenu.classList.add('is-open');
  modalMenu.addEventListener('click', handleModalClick);
  window.addEventListener('keydown', handleKeyDown);
}

export function closeModalMenu() {
  modalMenu.classList.remove('is-open');
  modalMenu.classList.add('is-close');
  modalMenu.removeEventListener('click', handleModalClick);
  window.removeEventListener('keydown', handleKeyDown);
}
