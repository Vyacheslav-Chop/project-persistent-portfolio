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

    if (!reviews || reviews.length === 0) {
      wrapper.innerHTML = `
        <li class="not-found">
          <h3 class="not-found-title">Not found</h3>
        </li>
      `;

      return;
    }

    wrapper.innerHTML = createMarkUpReviews(reviews);

    const swiper = new Swiper('.reviews-swiper', {
      enabled: reviews.length > 1,
      slidesPerView: 1,
      spaceBetween: 20,

      centeredSlidesBounds: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
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
          slidesPerGroup: 2,
        },
      },
      on: {
        slideChange: updateButtons,
        reachBeginning: updateButtons,
        reachEnd: updateButtons,
      },
    });

    function updateButtons() {
      const next = swiper.navigation.nextEl;
      const prev = swiper.navigation.prevEl;

      next.classList.toggle('swiper-button-disabled', swiper.isEnd);
      prev.classList.toggle('swiper-button-disabled', swiper.isBeginning);
    }

    updateButtons();
  } catch (error) {
    showErrorMessage('Failed to load reviews from server.');
  }
}

initReviews();
