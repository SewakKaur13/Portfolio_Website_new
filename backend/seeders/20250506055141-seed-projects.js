'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'Symbiotic Growth Initiative',
        image_url: 'https://example.com/symbiotic-growth.jpg',
        github_link: 'https://github.com/yourusername/symbiotic-growth',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Memory Card Game',
        image_url: 'MemoryGame.png',
        github_link: 'https://sewakkaur13.github.io/MemoryCardGame/',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Happy Diwali Card',
        image_url: '/DiwaliCard.png',
        github_link: 'https://sewakkaur13.github.io/DiwaliCard/',
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
