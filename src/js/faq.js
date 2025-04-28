import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

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
  }
});
