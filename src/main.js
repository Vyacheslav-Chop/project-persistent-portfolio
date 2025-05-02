import './js/header';
import './js/my-projects';
import './js/faq';
import './js/reviews';
import './js/work-together';
import { options } from './js/constants';

// скролл до хедера
const goTopBtn = document.querySelector('.go-top');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    goTopBtn.classList.add('go-top--show');
  } else {
    goTopBtn.classList.remove('go-top--show');
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 0);
  }
}

// бібліотека для анімації
particlesJS('tsparticles', options);
