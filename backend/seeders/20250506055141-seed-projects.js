'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'Symbiotic Growth Initiative',
        image_url: '/GreenMind.gif',
        github_link: 'https://github.com/SewakKaur13/GreenMind',
        project_type: 'Web',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Memory Card Game',
        image_url: '/MemoryCardGame.gif',
        github_link: 'https://github.com/SewakKaur13/MemoryCardGame',
        project_type: 'Web',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Happy Diwali Card',
        image_url: '/DiwaliCard.gif',
        github_link: 'https://github.com/SewakKaur13/DiwaliCard',
        project_type: 'Web',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
