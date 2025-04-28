import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let swiper;

async function fetchReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load reviews from server.',
    });
    return null;
  }
}

function renderReviews(reviews) {
  const list = document.getElementById('reviews-list');
  list.innerHTML = '';

  if (!reviews || reviews.length === 0) {
    list.innerHTML = '<li class="swiper-slide">Not found</li>';
    return;
  }

  reviews.map(({ author, avatar_url, review }) => {
    const li = document.createElement('li');
    li.className = 'swiper-slide';
    li.innerHTML = `
      <div class="review-card">
        <p class="text">"${review}"</p>
        <div class="review-author">
          <img src="${avatar_url}" alt="${author}'s avatar" class="avatar">
          <p class="author">${author}</p>
        </div>
      </div>
    `;
    list.appendChild(li);
  });
}

function initSwiper() {
  swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

async function initReviews() {
  const reviews = await fetchReviews();
  renderReviews(reviews);
  initSwiper();
}

initReviews();
