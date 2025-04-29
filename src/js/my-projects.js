// основна логіка роботи секції

import { renderProjects } from './render-functions';
import { refs } from './refs';
const { projectsContainer, loadMoreBtn } = refs;
import { projects } from './constants';
import { handleLoadMore } from './handlers';

renderProjects(projectsContainer, projects,);

loadMoreBtn.addEventListener('click', handleLoadMore);
