import { sendFormData } from './api';
import { clearContent, showErrorMessage } from './helpers';
import { refs } from './refs';
import { appendProjects, checkEndOfCollection } from './helpers';

let displayedProjectsCount = 0;
const count = 3;

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

export function createProjectsMarkup(array) {
  return array
    .map(
      ({ title, stack, img1x, img2x, link }) => `
      <li class="projects-item">
        <picture>
          <source media="(min-width: 1280px)" srcset="${img1x} 1x, ${img2x} 2x" />
          <source media="(min-width: 768px)" srcset="${img1x} 1x, ${img2x} 2x" />
          <source media="(max-width: 767px)" srcset="${img1x} 1x, ${img2x} 2x" />
          <img class="projects-image" src="${img1x}" alt="${title}" width="320" height="180" />
        </picture>
        <p class="projects-stack">${stack}</p>
        <div class="projects-inner">
          <h3 class="projects-name">${title.toUpperCase()}</h3>
          <a class="projects-link" href="${link}" target="_blank" rel="noopener noreferrer">
            VISIT
            <img class="projects-icon" src="/img/sprite-svg/icon-projects.svg" alt="Arrow icon" width="18" height="18" />
          </a>
        </div>
      </li>
    `
    )
    .join('');
}

export function renderProjects(element, array) {
  const projectsToShow = array.slice(
    displayedProjectsCount,
    displayedProjectsCount + count
  );

  const projectsMarkup = createProjectsMarkup(projectsToShow);
  appendProjects(element, projectsMarkup);

  displayedProjectsCount += count;

  
  checkEndOfCollection(displayedProjectsCount, array);

}
