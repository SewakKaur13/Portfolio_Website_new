'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Testimonials', [
      {
        name: 'Myra Sharma',
        image_url: 'testimonal1.jpg',
        description: 'Working with Bhumi was an amazing experience. Her work on our project was top-notch, and she consistently delivered results on time.',
        user_id: 1,  
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Meet Shah',
        image_url: 'testimonal2.jpg',
        description: 'I was thoroughly impressed by Bhumi\'s skills in web development. She brings a deep understanding of both frontend and backend technologies.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Michael Johnson',
        image_url: 'testimonal3.jpg',
        description: 'Bhumi is an excellent developer and a great problem solver. She helped me create a fully functional web application from scratch.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Testimonials', null, {});
  }
};
