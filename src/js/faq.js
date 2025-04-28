import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { removeFocus } from './helpers';

const accordionList = document.querySelector('.faq-list');

const accordion = new Accordion(accordionList, {
  duration: 300,
  showMultiple: false,
  openOnInit: [0],
});

// Закриваємо всі відповіді при кліку поза акордеоном
document.addEventListener('click', event => {
  if (!accordionList.contains(event.target)) {
    accordion.closeAll();
    removeFocus();
  }
});

// Зняти фокус, якщо повторно натиснули на відкритий елемент
accordionList.addEventListener('click', event => {
  const questionBtn = event.target.closest('.ac-trigger');
  if (!questionBtn) return;

  const item = questionBtn.closest('.ac');
  if (item && item.classList.contains('is-active')) {
    removeFocus();
  }
});
