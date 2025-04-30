// основна логіка роботи секції

import { renderProjects } from './render-functions';
import { refs } from './refs';
const { projectsContainer, loadMoreBtn, closeCollectionBtn } = refs;
import { projects } from './constants';
import { handleLoadMore, handleCloseCollection } from './handlers';

renderProjects(projectsContainer, projects,);

loadMoreBtn.addEventListener('click', handleLoadMore);
closeCollectionBtn.addEventListener('click', handleCloseCollection);