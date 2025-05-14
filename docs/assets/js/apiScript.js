// js/script.js

import { getProfileData } from '../../services/api.js';

document.addEventListener('DOMContentLoaded', () => {
  getProfileData()
    .then(data => {
      if (data.success) {
        const profile = data.data;

        //^ Set the page title 
        document.title = profile.title || "Sewak's Portfolio";

        //^ Set first name in the logo
        const logo = document.querySelector('.nav__logo');
        logo.innerText = profile.firstName;

        //^ Set full name
        const nameElement = document.querySelector('.home__name');
        nameElement.innerText = `${profile.firstName} ${profile.lastName}`;

        //^ Set landing image
        const landingImg = document.querySelector('.home__img');
        landingImg.src = `http://localhost:5000/public/${profile.landing_img}`;

        //^ Set resume download link
        const resumeLink = document.querySelector('.button--ghost');
        resumeLink.href = `http://localhost:5000/public/${profile.cv_pdf_url}`;

        //^ Set about image
        const aboutImg = document.querySelector('.about__img');
        aboutImg.src = `http://localhost:5000/public/${profile.about_img}`;

        //^ Set about description
        const aboutDescription = document.querySelector('.about__description');
        aboutDescription.innerText = profile.description;

        //^ Set experience years
        const experienceYears = document.querySelector('.about__box:nth-child(1) .about__subtitle');
        experienceYears.innerText = `${profile.experience_yrs} Years Working`;

        //^ Set projects completed
        const projectsDone = document.querySelector('.about__box:nth-child(2) .about__subtitle');
        projectsDone.innerText = `${profile.projects_done}+ Projects`;
        const fallbackSkills = [
          { type: 'frontend', skill_names: ['HTML', 'CSS', 'JavaScript'] },
          { type: 'backend', skill_names: ['Node.js', 'Express.js'] },
          { type: 'database', skill_names: ['MongoDB', 'PostgreSQL'] },
          { type: 'tools', skill_names: ['Git', 'VS Code'] },
          { type: 'framework', skill_names: ['React', 'Bootstrap'] }
        ];
      
        const safeSkills = profile && Array.isArray(profile.skills) && profile.skills.length > 0
          ? profile.skills
          : fallbackSkills;
      
        console.log("Safe skills data:", safeSkills);
      
        const renderSkills = (skillsArray, containerSelector) => {
          const container = document.querySelector(containerSelector);
          if (!container || !Array.isArray(skillsArray)) return;
      
          for (let i = 0; i < skillsArray.length; i += 3) {
            const group = document.createElement('div');
            group.className = 'skills__group';
      
            skillsArray.slice(i, i + 3).forEach(skill => {
              const skillHTML = `
                <div class="skills__data">
                  <i class='bx bxs-badge-check'></i>
                  <div>
                    <h3 class="skills__name">${skill}</h3>
                    <span class="skills__level">${containerSelector.split(' ')[0].split('--')[1] || ''}</span>
                  </div>
                </div>
              `;
              group.innerHTML += skillHTML;
            });
      
            container.appendChild(group);
          }
        };
      
        // Clear previous content
        for (let i = 1; i <= 5; i++) {
          const box = document.querySelector(`.skills__content:nth-child(${i}) .skills__box`);
          if (box) box.innerHTML = '';
        }
      
        const skillTypeToSelector = {
          frontend: '.skills__content:nth-child(1) .skills__box',
          backend: '.skills__content:nth-child(2) .skills__box',
          database: '.skills__content:nth-child(3) .skills__box',
          tools: '.skills__content:nth-child(4) .skills__box',
          framework: '.skills__content:nth-child(5) .skills__box',
        };
      
        safeSkills.forEach(skillCategory => {
          const selector = skillTypeToSelector[skillCategory.type];
          if (selector) {
            console.log(`Rendering ${skillCategory.type} skills`);
            renderSkills(skillCategory.skill_names, selector);
          }
        });


        //^ Set services completed
        const renderServices = (servicesArray) => {
          const container = document.querySelector('.services__container');
          if (!Array.isArray(servicesArray) || container.length === 0) return;

          // Clear existing cards
          container.innerHTML = '';

          // Create a card for each service in the array
          servicesArray.forEach(service => {
            const card = document.createElement('div');
            card.classList.add('services__card');

            // Create the "serv" div
            const servDiv = document.createElement('div');
            servDiv.classList.add('serv');

            // Create the title element
            const titleElement = document.createElement('h3');
            titleElement.classList.add('services__title');
            titleElement.innerHTML = service.title.replace(' ', '<br>');

            // Create the "See More" button
            const buttonElement = document.createElement('span');
            buttonElement.classList.add('services__button');
            buttonElement.innerHTML = 'See More <i class="bx bx-right-arrow services__icon"></i>';

            // Append title and button to the "serv" div
            servDiv.appendChild(titleElement);
            servDiv.appendChild(buttonElement);

            // Create the modal content
            const modalDiv = document.createElement('div');
            modalDiv.classList.add('services__modal');

            const modalContentDiv = document.createElement('div');
            modalContentDiv.classList.add('services__modal-content');

            // Create the close button
            const closeButton = document.createElement('i');
            closeButton.classList.add('bx', 'bx-x', 'services__modal-close');

            // Create the modal title
            const modalTitle = document.createElement('h3');
            modalTitle.classList.add('services__modal-title');
            modalTitle.textContent = service.title;

            // Create the modal description
            const modalDescription = document.createElement('p');
            modalDescription.classList.add('services__modal-description');
            modalDescription.textContent = service.description;

            // Create the bullet points list
            const ulElement = document.createElement('ul');
            ulElement.classList.add('services__modal-list');

            service.bulletPoints.forEach(point => {
              const liElement = document.createElement('li');
              liElement.classList.add('services__modal-item');

              const iconElement = document.createElement('i');
              iconElement.classList.add('bx', 'bx-check-circle');

              const infoElement = document.createElement('p');
              infoElement.classList.add('services__modal-info');
              infoElement.textContent = point;

              liElement.appendChild(iconElement);
              liElement.appendChild(infoElement);
              ulElement.appendChild(liElement);
            });

            // Append everything to the modal content
            modalContentDiv.appendChild(closeButton);
            modalContentDiv.appendChild(modalTitle);
            modalContentDiv.appendChild(modalDescription);
            modalContentDiv.appendChild(ulElement);
            modalDiv.appendChild(modalContentDiv);

            // Append the "serv" div and modal to the card
            card.appendChild(servDiv);
            card.appendChild(modalDiv);

            // Append the new card to the container
            container.appendChild(card);
          });

          // Add modal open/close event handlers
          document.querySelectorAll('.services__button').forEach((btn, i) => {
            btn.addEventListener('click', () => {
              const modals = document.querySelectorAll('.services__modal');
              if (modals[i]) modals[i].classList.add('active-modal');
            });
          });

          document.querySelectorAll('.services__modal-close').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
              closeBtn.closest('.services__modal')?.classList.remove('active-modal');
            });
          });
        };
        // After fetching the profile
        renderServices(profile.services);

        //^ Set  Project completed
        const container = document.querySelector('.work__container');
        container.innerHTML = '';  // Clear the container
        const filtersContainer = document.querySelector('.work__filters');
        let projects = profile.projects;

        // Get unique project types (as-is from DB)
        const getUniqueTypes = (projects) => {
          const types = projects.map(p => p.project_type);
          return [...new Set(types)];
        };

        // Render filter buttons
        const renderFilters = (types) => {
          if (!filtersContainer) return;

          filtersContainer.innerHTML = '';  // Clear existing filters

          // Create the "All" filter button
          const allFilter = document.createElement('span');
          allFilter.classList.add('work__item', 'active-work');
          allFilter.setAttribute('data-filter', 'all');
          allFilter.innerText = 'All';
          filtersContainer.appendChild(allFilter);

          // Create a filter button for each project type
          types.forEach(type => {
            const filterButton = document.createElement('span');
            filterButton.classList.add('work__item');
            filterButton.setAttribute('data-filter', type);
            filterButton.innerText = type;
            filtersContainer.appendChild(filterButton);
          });

          addFilterListeners();
        };

        // Add click listeners to filter buttons
        const addFilterListeners = () => {
          document.querySelectorAll('.work__item').forEach(btn => {
            btn.addEventListener('click', () => {
              document.querySelectorAll('.work__item').forEach(b => b.classList.remove('active-work'));
              btn.classList.add('active-work');

              const filter = btn.getAttribute('data-filter');
              filterProjects(filter);
            });
          });
        };

        // Dynamically render project cards
        const renderProjects = (projectsArray) => {
          // If no projects, show a message
          if (projectsArray.length === 0) {
            container.innerHTML = '<p>No projects available.</p>';
            return;
          }

          // Clear container before adding new cards
          container.innerHTML = '';

          projectsArray.forEach((project) => {
            const { name, image_url, github_link, project_type } = project;

            // Create a new card for each project
            const card = document.createElement('div');
            card.className = `work__card ${project_type}`;
            card.setAttribute('data-project-type', project_type);

            card.innerHTML = `
      <img src="http://localhost:5000/public/${image_url}" alt="${name}" class="work__img">
      <h3 class="work__title">${name}</h3>
      <a href="${github_link}" class="work__button" target="_blank">
        Demo <i class='bx bx-right-arrow work__icon'></i>
      </a>
    `;

            // Append the new card to the container
            container.appendChild(card);
          });
        };

        // Filter only visible cards based on project type
        const filterProjects = (type) => {
          const cards = container.querySelectorAll('.work__card');

          cards.forEach(card => {
            const cardType = card.getAttribute('data-project-type');
            const isMatch = type === 'all' || cardType === type;
            card.style.display = isMatch ? 'block' : 'none';
          });
        };

        // Initialize the filter system and render projects
        const initializePortfolio = () => {
          // Render projects and filters
          renderProjects(projects);
          const types = getUniqueTypes(projects);
          renderFilters(types);

          // Show all projects initially
          filterProjects('all');
        };
        initializePortfolio();


        //^ Set testimonal info Completed
        const testimonials = profile.testimonials;
        const wrapper = document.querySelector('.swiper-wrapper');

        // Clear existing Swiper if already initialized
        if (window.testimonialSwiper && typeof window.testimonialSwiper.destroy === 'function') {
          window.testimonialSwiper.destroy(true, true);
        }

        if (testimonials && wrapper) {
          wrapper.innerHTML = ''; // Clear existing slides to avoid duplicates

          testimonials.forEach((testimonial) => {
            const card = document.createElement('div');
            card.className = 'testimonial__card swiper-slide';
            card.style.cursor = 'pointer';

            card.innerHTML = `
      <img src="http://localhost:5000/public/${testimonial.image_url}" alt="${testimonial.name}" class="testimonial__img">
      <h3 class="testimonial__name">${testimonial.name}</h3>
      <p class="testimonial__description">${testimonial.description}</p>
    `;

            //Add click handler to move to the next slide
            card.addEventListener('click', () => {
              if (window.testimonialSwiper) {
                window.testimonialSwiper.slideNext();
              }
            });

            wrapper.appendChild(card);
          });

          // Initialize and store swiper instance
          window.testimonialSwiper = new Swiper('.testimonial__container', {
            loop: true,
            spaceBetween: 30,
            grabCursor: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            breakpoints: {
              568: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            },
          });
        }

        //^ Set contact info Completed
        const contact = profile.contacts[0];
        if (contact) {
          const contactCards = document.querySelectorAll('.contact__card');

          // Email
          const emailCard = contactCards[0];
          emailCard.querySelector('.contact__card-data').innerText = contact.email;
          emailCard.querySelector('a.contact__button').href = `mailto:${contact.email}`;

          // WhatsApp
          const whatsappCard = contactCards[1];
          whatsappCard.querySelector('.contact__card-data').innerText = contact.whatsapp_no;
          whatsappCard.querySelector('a.contact__button').href = `https://wa.me/${contact.whatsapp_no}`;

          // LinkedIn
          const linkedinCard = contactCards[2];
          linkedinCard.querySelector('a.contact__button').href = contact.linkedin_link;

          //^ Set footer link
          const footerSocialLinks = document.querySelectorAll('.footer__social-link');
          if (footerSocialLinks.length >= 2) {
            footerSocialLinks[0].href = contact.github_link;    
            footerSocialLinks[1].href = contact.linkedin_link;   
          }
          //^ Set home link
          const homeSocialLinks = document.querySelectorAll('.home__social-link');
          if (homeSocialLinks.length >= 2) {
            homeSocialLinks[0].href = contact.linkedin_link;    
            homeSocialLinks[1].href = contact.github_link;   
          }
        }

        //^ Set first name in the footer
        const footer = document.querySelector('.footer__title');
        footer.innerText = profile.firstName;
      } else {
        console.error('Failed to load profile data');
      }
    })
    .catch(error => {
      console.error('Error fetching profile data:', error);
    });
});
