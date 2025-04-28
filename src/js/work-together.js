// основна логіка роботи секції
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.work-together-form');
const emailInput = document.querySelector('#user-email');
const messageInput = document.querySelector('#user-message');
const emailError = document.querySelector('.email-error');

form.addEventListener('submit', onFormSubmit);

// Функція обробки події на формі

function onFormSubmit(event) {
  event.preventDefault();

  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (!emailPattern.test(emailValue)) {
    emailError.classList.remove('hidden');
    emailError.style.marginBottom = '16px';

    emailInput.classList.add('error');
    emailInput.style.color = 'red';
    emailInput.style.marginBottom = '5px';

    return;
  } else {
    emailError.classList.add('hidden');
    // emailInput.classList.remove('error');
    // emailInput.style.marginBottom = '32px';
  }

  const requestData = {
    email: emailValue,
    comment: messageValue,
  };

  sendFormData(requestData);
}

// Функція запиту на сервер

function sendFormData(data) {
  axios
    .post('https://portfolio-js.b.goit.study/api/requests', data)

    .then(response => {
      createModal(response.data.title, response.data.message);
      form.reset();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        timeout: 10000,
        message: 'Something went wrong. Please check your data and try again.',
        position: 'topRight',
      });
    });
}

// Створення модального вікна
function createModal(title, message) {
  const backdrop = document.createElement('div');
  backdrop.className = 'work-together-backdrop';
  backdrop.innerHTML = `
    <div class="work-together-modal">
      <button class="work-modal-close-btn" type="button">
        <svg class="work-modal-btn-close-icon" width="24" height="24">
          <use href="/img/sprite-svg/icons.svg#x"></use>
        </svg>
      </button>
      <h3 class="work-modal-title text-accent"></h3>
      <p class="work-modal-text"></p>
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.style.overflow = 'hidden';

  const modalTitle = backdrop.querySelector('.work-modal-title');
  const modalText = backdrop.querySelector('.work-modal-text');

  modalTitle.textContent = title;
  modalText.textContent = message;

  const closeBtn = backdrop.querySelector('.work-modal-close-btn');

  // Закриття модального вікна

  function onCloseBtnClick() {
    closeModal(backdrop);
  }

  function onBackdropClick(event) {
    if (event.target === backdrop) {
      closeModal(backdrop);
    }
  }

  function onEscPress(event) {
    if (event.key === 'Escape') {
      closeModal(backdrop);
      document.removeEventListener('keydown', onEscPress);
    }
  }

  closeBtn.addEventListener('click', onCloseBtnClick);
  backdrop.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscPress);
}

// Закриття модального вікна
function closeModal(backdrop) {
  backdrop.remove();
  document.body.style.overflow = '';
}
