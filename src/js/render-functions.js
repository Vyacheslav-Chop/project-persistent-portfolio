import { sendFormData } from './api';
import { clearContent, showErrorMessage } from './helpers';
import { refs } from './refs';

const { modalAnswer } = refs;

//Функцію для створення, рендеру або видалення розмітки

function createAnswer(title, message) {
  return `
<h3 class="work-modal-title text-accent">
      ${title}
    </h3>
    <p class="work-modal-text">
      ${message}
    </p>
`;
}

export async function renderAnswer(value) {
  clearContent(modalAnswer);
  if (!value) return;
  try {
    const { title, message } = await sendFormData(value);

    modalAnswer.innerHTML = createAnswer(title, message);
  } catch (error) {
    showErrorMessage('Something went wrong!');
  }
}

// Розмітка reviews
export function createMarkUpReviews(reviews) {
  return reviews
    .map(
      ({ author, avatar_url, review }) => `
      <li class="swiper-slide">
        <div class="review-card">
          <p class="text">"${review}"</p>
          <div class="review-author">
            <img src="${avatar_url}" alt="${author}'s avatar" class="avatar">
            <p class="author">${author}</p>
          </div>
        </div>
      </li>`
    )
    .join('');
}
