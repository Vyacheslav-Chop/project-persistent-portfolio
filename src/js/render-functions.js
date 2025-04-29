import { sendFormData } from './api';
import { clearContent, showErrorMessage } from './helpers';
import { refs } from './refs';

const { modalAnswer } = refs;

//Функцію для створення, рендеру або видалення розмітки

function createAnswer(title, message) {
  return `
  <button class="work-modal-close-btn" type="button">
      <svg class="work-modal-btn-close-icon" width="24" height="24">
        <use href="/img/sprite-svg/icons.svg#x"></use>
      </svg>
    </button>
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
