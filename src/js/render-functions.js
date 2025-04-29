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

export function createProjectsMarkup(projects) {
  return projects
    .map(project => `
      <li class="projects-item">
        <picture>
          <source media="(min-width: 1280px)" srcset="${project.img.desktop['1x']} 1x, ${project.img.desktop['2x']} 2x" />
          <source media="(min-width: 768px)" srcset="${project.img.tablet['1x']} 1x, ${project.img.tablet['2x']} 2x" />
          <source media="(max-width: 767px)" srcset="${project.img.mobile['1x']} 1x, ${project.img.mobile['2x']} 2x" />
          <img class="projects-image" src="${project.img.mobile['1x']}" alt="${project.title}" width="320" height="180" />
        </picture>
        <p class="projects-stack">${project.stack}</p>
        <div class="projects-inner">
          <h3 class="projects-name">${project.title.toUpperCase()}</h3>
          <a class="projects-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
            VISIT
            <img class="projects-icon" src="/img/sprite-svg/icon-projects.svg" alt="Arrow icon" width="18" height="18" />
          </a>
        </div>
      </li>
    `)
    .join('');
}
