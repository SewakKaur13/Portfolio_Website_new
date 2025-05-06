// js/script.js

import { getProfileData } from '../../services/api.js';

document.addEventListener('DOMContentLoaded', () => {
  getProfileData()
    .then(data => {
      if (data.success) {
        const profile = data.data;

        // Set the page title 
        document.title = profile.title || "Sewak's Portfolio";

        // Set first name in the logo
        const logo = document.querySelector('.nav__logo');
        logo.innerText = profile.firstName;

        // Set full name
        const nameElement = document.querySelector('.home__name');
        nameElement.innerText = `${profile.firstName} ${profile.lastName}`;

        // Set landing image
        const landingImg = document.querySelector('.home__img');
        landingImg.src = `http://localhost:5000/public/${profile.landing_img}`;

        // Set resume download link
        const resumeLink = document.querySelector('.button--ghost');
        resumeLink.href = `http://localhost:5000/public/${profile.cv_pdf_url}`;

         // Set about image
         const aboutImg = document.querySelector('.about__img');
         aboutImg.src = `http://localhost:5000/public/${profile.about_img}`; 
 
         // Set about description
         const aboutDescription = document.querySelector('.about__description');
         aboutDescription.innerText = profile.description; 
 
         // Set experience years
         const experienceYears = document.querySelector('.about__box:nth-child(1) .about__subtitle');
         experienceYears.innerText = `${profile.experience_yrs} Years Working`;
 
         // Set projects completed
         const projectsDone = document.querySelector('.about__box:nth-child(2) .about__subtitle');
         projectsDone.innerText = `${profile.projects_done}+ Projects`;  
         
        // Set skills completed
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
          
          // Clear static HTML for all 5 skill sections
          for (let i = 1; i <= 5; i++) {
            const box = document.querySelector(`.skills__content:nth-child(${i}) .skills__box`);
            if (box) box.innerHTML = '';
          }
          
          // Map skill type to section
          const skillTypeToSelector = {
            frontend: '.skills__content:nth-child(1) .skills__box',
            backend: '.skills__content:nth-child(2) .skills__box',
            database: '.skills__content:nth-child(3) .skills__box',
            tools: '.skills__content:nth-child(4) .skills__box',
            framework: '.skills__content:nth-child(5) .skills__box',
          };
          
          // Render each category
          profile.skills.forEach(skillCategory => {
            const selector = skillTypeToSelector[skillCategory.type];
            if (selector) {
              renderSkills(skillCategory.skill_names, selector);
            }
          });
          

      } else {
        console.error('Failed to load profile data');
      }
    })
    .catch(error => {
      console.error('Error fetching profile data:', error);
    });
});
