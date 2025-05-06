'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserProfiles', [
      {
        title: "Bhumi's Portfolio",
        firstName: 'Bhumi',
        lastName: 'Krishnani',
        cv_pdf_url: '/BhumiKrishnaniResume.pdf',
        landing_img: '/avatar1.jpg',             
        about_img: '/avatar2.jpg',               
        description: `I'm Bhumi Krishnani, a passionate and dedicated Full Stack Developer specializing in building responsive and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I craft seamless user experiences and scalable backend systems. My journey in tech has been fueled by continuous learning and hands-on experience through multiple internships and real-world projects. I take pride in writing clean, maintainable code and collaborating effectively in team environments. Whether it's developing from scratch or enhancing existing systems, I'm always eager to bring ideas to life through technology.`,
        experience_yrs: 2,
        projects_done: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserProfiles', null, {});
  }
};
