// основна логіка роботи секції

import { projectData } from './constants.js';

document.addEventListener('DOMContentLoaded', () => {

    const projects = projectData;

    let visibleProjects = 3;

    function renderProjects() {
        const list = document.querySelector('.projects-list');

        //         list.innerHTML = '';

        //         const visible = projects.slice(0, visibleProjects);

        //         visible.forEach(project => {
        //             const li = document.createElement('li');
        //             li.classList.add('projects-item');

        //             li.innerHTML = `
        //     <picture>
        //     <source 
        //         media="(min-width: 1280px)" 
        //         srcset="${project.img.desktop['1x']} 1x, ${project.img.desktop['2x']
        //                 } 2x"
        //     />
        //     <source 
        //         media="(min-width: 768px)" 
        //         srcset="${project.img.tablet['1x']} 1x, ${project.img.tablet['2x']} 2x"
        //     />
        //     <source 
        //         media="(max-width: 767px)" 
        //         srcset="${project.img.mobile['1x']} 1x, ${project.img.mobile['2x']} 2x"
        //     />
        //     <img 
        //         class="projects-image"
        //         src="${project.img.mobile['1x']}" 
        //         alt="${project.title}" 
        //         width="320" 
        //         height="180"
        //     />
        //     </picture>

        //     <p class="projects-stack">${project.stack}</p>
        //     <div class="projects-inner">
        //         <h3 class="projects-name">${project.title.toUpperCase()}</h3>
        //         <a
        //             class="projects-link"
        //             href="${project.link}"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             VISIT
        //             <img
        //             class="projects-icon"
        //             src="/img/sprite-svg/icon-projects.svg"
        //             alt="Arrow icon"
        //             width="18"
        //             height="18"
        //             />
        //         </a>
        //     </div>

        // `;

        //             list.appendChild(li);
        //         });

        list.innerHTML = projects
            .slice(0, visibleProjects)
            .map(project => `
    <li class="projects-item">
      <picture>
        <source media="(min-width: 1280px)" srcset="${project.img.desktop['1x']} 1x, ${project.img.desktop['2x']} 2x" />
        <source media="(min-width: 768px)" srcset="${project.img.tablet['1x']} 1x, ${project.img.tablet['2x']} 2x" />
        <source media="(max-width: 767px)" srcset="${project.img.mobile['1x']} 1x, ${project.img.mobile['2x']} 2x" />
        <img
          class="projects-image"
          src="${project.img.mobile['1x']}"
          alt="${project.title}"
          width="320"
          height="180"
        />
      </picture>
      <p class="projects-stack">${project.stack}</p>
      <div class="projects-inner">
        <h3 class="projects-name">${project.title.toUpperCase()}</h3>
        <a
          class="projects-link"
          href="${project.link}"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT
          <img
            class="projects-icon"
            src="/img/sprite-svg/icon-projects.svg"
            alt="Arrow icon"
            width="18"
            height="18"
          />
        </a>
      </div>
    </li>
  `)
            .join('');

        const button = document.querySelector('[data-load-more]');
        if (visibleProjects >= projects.length) {
            button.style.display = 'none';
        } else {
            button.style.display = 'block';
        }
    }

    document.querySelector('[data-load-more]').addEventListener('click', () => {
        visibleProjects += 3;
        renderProjects();
    });

    renderProjects();
});
