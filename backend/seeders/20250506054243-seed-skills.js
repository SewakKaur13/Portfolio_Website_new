'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Skills', [
      {
        type: 'frontend',
        skill_names: ['HTML', 'CSS', 'JavaScript', 'React.js', 'GSAP'],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'backend',
        skill_names: ['Node.js', 'Express.js', 'Java'],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'database',
        skill_names: ['MongoDB', 'PgAdmin', 'SQL'],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'tools',
        skill_names: ['Git', 'VS Code'],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'framework',
        skill_names: ['React.js', 'Spring', 'Hibernate'],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
