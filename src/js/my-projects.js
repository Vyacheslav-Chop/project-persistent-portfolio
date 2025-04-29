// основна логіка роботи секції

import { projectData } from './constants.js';
import { createProjectsMarkup } from './render-functions.js';

document.addEventListener('DOMContentLoaded', () => {

  const list = document.querySelector('.projects-list');


  let visibleProjects = 3;

  function renderProjects() {
    const visible = projectData.slice(0, visibleProjects);
    list.innerHTML = createProjectsMarkup(visible);

    const button = document.querySelector('[data-load-more]');
    button.style.display = visibleProjects >= projectData.length ? 'none' : 'block';
  }

  document.querySelector('[data-load-more]').addEventListener('click', () => {
    visibleProjects += 3;
    renderProjects();
  });

  renderProjects();
});
