import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { createMarkUpReviews } from './render-functions';
import { fetchReviews } from './api';
import { showErrorMessage } from './helpers';

Swiper.use([Navigation, Keyboard, Mousewheel]);

async function initReviews() {
  try {
    const reviews = await fetchReviews();
    const wrapper = document.querySelector('#reviews-list');

    if (!reviews || !reviews.length) {
      wrapper.innerHTML = `<li class="no-reviews">Not found</li>`;
      return;
    }

    wrapper.innerHTML = createMarkUpReviews(reviews);

    const swiper = new Swiper('.reviews-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        1280: {
          slidesPerView: 2,
        },
      },
      on: {
        slideChange: updateButtons,
        reachBeginning: updateButtons,
        reachEnd: updateButtons,
      },
    });

    function updateButtons() {
      const next = document.querySelector('.swiper-button-next');
      const prev = document.querySelector('.swiper-button-prev');

      next.classList.toggle('swiper-button-disabled', swiper.isEnd);
      prev.classList.toggle('swiper-button-disabled', swiper.isBeginning);
    }

    updateButtons();
  } catch (error) {
    showErrorMessage('Failed to load reviews from server.');
  }
}

initReviews();
