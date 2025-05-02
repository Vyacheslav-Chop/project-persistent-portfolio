// Функції, які передаються колбеками в addEventListner
import { refs } from './refs';
import { saveThemeToLocalStorage } from './storage';
const { body, openModalMenuBtn, form, projectsContainer, closeCollectionBtn } =
  refs;
import {
  closeFormModal,
  closeModalMenu,
  openFormModal,
  openModalMenu,
} from './modal';
import { STORAGE_KEYS, requestData, projects } from './constants';
const { theme, themeText, formData } = STORAGE_KEYS;
import {
  clearContent,
  isValidEmail,
  removeFocus,
  scrollToView,
  showErrorMessage,
  smoothScrollItems,
  showBtn,
  hideBtn,
  scrollToFirstProject,
} from './helpers';

import {
  renderAnswer,
  renderProjects,
  resetProjects,
} from './render-functions';

// перемикання тем
export function handleChangeTheme() {
  if (body.classList.contains('theme-light')) {
    body.classList.replace('theme-light', 'theme-dark');
    saveThemeToLocalStorage(theme, 'theme-dark');
  } else {
    body.classList.replace('theme-dark', 'theme-light');
    saveThemeToLocalStorage(theme, 'theme-light');
  }
}

// функція для клавіші
export function handleKeyDown(ev) {
  if (ev.key === 'Escape') {
    closeModalMenu();
    closeFormModal();
  }
}

// закриття модального вікна при натискані на посилання

export function handleModalClick(ev) {
  const closeMenuBtn = ev.target.closest('.menu-close-btn');
  const navLink = ev.target.closest('.menu-nav-link');
  const orderLink = ev.target.closest('.menu-order-link');
  const themeToggleButton = ev.target.closest('.toggle-theme-btn');

  if (ev.target === ev.currentTarget) return;

  if (closeMenuBtn) {
    closeModalMenu();
    return;
  } else if (orderLink) {
    closeModalMenu();
    return;
  } else if (navLink) {
    closeModalMenu();
    return;
  } else if (themeToggleButton) {
    handleChangeTheme();
  }
  removeFocus();
  scrollToView();
}


// відкриття модального вікна
export function handleOpenMenu() {
  if (openModalMenuBtn) {
    openModalMenu();
    removeFocus();
  }
}


// перемикання тем для тексту
export function handleChangeThemeText(ev) {
  const clickedBtn = ev.target.closest('button[data-theme]');
  if (!clickedBtn) return;

  body.classList.remove(
    'text-theme-blue',
    'text-theme-purple',
    'text-theme-red'
  );

  const theme = clickedBtn.dataset.theme;
  if (theme === 'default') {
    saveThemeToLocalStorage(themeText, '');
  } else {
    body.classList.add(`text-theme-${theme}`);
    saveThemeToLocalStorage(themeText, `text-theme-${theme}`);
  }
  removeFocus();
}

// відслідкування кожного символу в формі для валіідації та занесення до локального сховища

export function handleInput(ev) {
  if (ev.target.name === 'user-email') {
    requestData.email = form.elements['user-email'].value.trim();
  } else if (ev.target.name === 'user-message') {
    requestData.comment = form.elements['user-message'].value.trim();
  }
  isValidEmail(requestData.email);
  localStorage.setItem(formData, JSON.stringify(requestData));
}

// відправлення форми та запуск модального вікна з відповідю

export function handleSubmit(ev) {
  ev.preventDefault();

  const userEmail = form.elements['user-email'].value.trim();
  const userComment = form.elements['user-message'].value.trim();
  requestData.email = userEmail;
  requestData.comment = userComment;
  if (userEmail === '' || userComment === '') {
    showErrorMessage(
      'Something went wrong. Please check your data and try again.'
    );
    return;
  }

  localStorage.removeItem(formData);

  renderAnswer(requestData);
  openFormModal();

  removeFocus();
  form.reset();
  isValidEmail();
}

// закриття модального вікна для форми

export function handleClick(ev) {
  const closeAnswerModalBtn = ev.target.closest('.work-modal-close-btn');
  if (ev.target === ev.currentTarget) {
    closeFormModal();
    return;
  } else if (closeAnswerModalBtn) {
    closeFormModal();
  }
  removeFocus();
}

// дозавантаження проектів на сторінку

export function handleLoadMore() {
  renderProjects(projectsContainer, projects);
  const galleryItem = document.querySelector('.projects-item');

  setTimeout(() => {
    smoothScrollItems(galleryItem);
  }, 10);
  removeFocus();
  showBtn(closeCollectionBtn);
}

// закриття колекції проектів та скрол до першого проекту

export function handleCloseCollection() {
  clearContent(projectsContainer);

  resetProjects(projectsContainer, projects);
  hideBtn(closeCollectionBtn);
  scrollToFirstProject();
  removeFocus();
}
