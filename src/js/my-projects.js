// основна логіка роботи секції

document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Wallet Webservice',
            stack: 'React, JavaScript, Node.js, Git',
            img: {
                mobile: {
                    '1x': '/img/projects/project-wallet.webp',
                    '2x': '/img/projects/project-wallet@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-wallet.webp',
                    '2x': '/img/projects/project-wallet@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-wallet.webp',
                    '2x': '/img/projects/project-wallet@2x.webp',
                },
            },
            link: '#',
        },
        {
            title: 'Green Harvest Online Store',
            stack: 'React, JavaScript, Node.js, Git',
            img: {
                mobile: {
                    '1x': '/img/projects/project-greenharvest.webp',
                    '2x': '/img/projects/project-greenharvest@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-greenharvest.webp',
                    '2x': '/img/projects/project-greenharvest@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-greenharvest.webp',
                    '2x': '/img/projects/project-greenharvest@2x.webp',
                },
            },
            link: '#',
        },
        {
            title: 'English Excellence Website',
            stack: 'HTML, CSS, JS',
            img: {
                mobile: {
                    '1x': '/img/projects/project-english.webp',
                    '2x': '/img/projects/project-english@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-english.webp',
                    '2x': '/img/projects/project-english@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-english.webp',
                    '2x': '/img/projects/project-english@2x.webp',
                },
            },
            link: '#',
        },
        {
            title: 'Fruitbox Online Store',
            stack: 'HTML, CSS, JS',
            img: {
                mobile: {
                    '1x': '/img/projects/project-fruitbox.webp',
                    '2x': '/img/projects/project-fruitbox@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-fruitbox.webp',
                    '2x': '/img/projects/project-fruitbox@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-fruitbox.webp',
                    '2x': '/img/projects/project-fruitbox@2x.webp',
                },
            },
            link: '#',
        },
        {
            title: 'Vyshyvanka Vibes Landing Page',
            stack: 'React, Tailwind CSS',
            img: {
                mobile: {
                    '1x': '/img/projects/project-vyshyvanka.webp',
                    '2x': '/img/projects/project-vyshyvanka@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-vyshyvanka.webp',
                    '2x': '/img/projects/project-vyshyvanka@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-vyshyvanka.webp',
                    '2x': '/img/projects/project-vyshyvanka@2x.webp',
                },
            },
            link: '#',
        },
        {
            title: 'Energy Flow Webservice',
            stack: 'React, SCSS',
            img: {
                mobile: {
                    '1x': '/img/projects/project-energyflow.webp',
                    '2x': '/img/projects/project-energyflow@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-energyflow.webp',
                    '2x': '/img/projects/project-energyflow@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-energyflow.webp',
                    '2x': '/img/projects/project-energyflow@2x.webp',
                },
            },
            link: '#',
        },
        {
            title: 'Chego Jewelry Website',
            stack: 'React, SCSS',
            img: {
                mobile: {
                    '1x': '/img/projects/project-chego.webp',
                    '2x': '/img/projects/project-chego@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-chego.webp',
                    '2x': '/img/projects/project-chego@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-chego.webp',
                    '2x': '/img/projects/project-chego@2x.webp',
                },
            },
            link: '#',
        },
        {
            title: 'Mimino Website',
            stack: 'HTML, CSS',
            img: {
                mobile: {
                    '1x': '/img/projects/project-mimino.webp',
                    '2x': '/img/projects/project-mimino@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-mimino.webp',
                    '2x': '/img/projects/project-mimino@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-mimino.webp',
                    '2x': '/img/projects/project-mimino@2x.webp',
                },
            },
            link: '#',
        },
        {
            title: 'Power Pulse',
            stack: 'JS, Node.js',
            img: {
                mobile: {
                    '1x': '/img/projects/project-powerpulse.webp',
                    '2x': '/img/projects/project-powerpulse@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-powerpulse.webp',
                    '2x': '/img/projects/project-powerpulse@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-powerpulse.webp',
                    '2x': '/img/projects/project-powerpulse@2x.webp',
                },
            },
            link: '#',
        },
        {
            title: 'Starlight Studio Landing Page',
            stack: 'JS, Node.js, Git',
            img: {
                mobile: {
                    '1x': '/img/projects/project-starlight.webp',
                    '2x': '/img/projects/project-starlight@2x.webp',
                },
                tablet: {
                    '1x': '/img/projects/project-starlight.webp',
                    '2x': '/img/projects/project-starlight@2x.webp',
                },
                desktop: {
                    '1x': '/img/projects/project-starlight.webp',
                    '2x': '/img/projects/project-starlight@2x.webp',
                },
            },
            link: '#',
        },
    ];

    let visibleProjects = 3;

    function renderProjects() {
        const list = document.querySelector('.projects-list');

        list.innerHTML = '';

        const visible = projects.slice(0, visibleProjects);

        visible.forEach(project => {
            const li = document.createElement('li');
            li.classList.add('projects-item');

            li.innerHTML = `
    <picture>
    <source 
        media="(min-width: 1280px)" 
        srcset="${project.img.desktop['1x']} 1x, ${project.img.desktop['2x']
                } 2x"
    />
    <source 
        media="(min-width: 768px)" 
        srcset="${project.img.tablet['1x']} 1x, ${project.img.tablet['2x']} 2x"
    />
    <source 
        media="(max-width: 767px)" 
        srcset="${project.img.mobile['1x']} 1x, ${project.img.mobile['2x']} 2x"
    />
    <img 
        class="projects-image"
        src="${project.img.mobile['1x']}" 
        alt="${project.title}" 
        width="320" 
        height="180"
    />
    </picture>

    <p class="projects-stack">${project.stack}</p>
    <h3 class="projects-name">${project.title.toUpperCase()}</h3>
    <div class="projects-link-wrapper">
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
`;

            list.appendChild(li);
        });

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
