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
      },
      {
        name: 'Aisha Khan',
        image_url: 'testimonal4.png',
        description: 'Bhumi demonstrated great communication and collaboration skills throughout our project. She is truly a team player.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Ravi Patel',
        image_url: 'testimonal5.png',
        description: 'Bhumi’s attention to detail and creative approach made a big impact on our project. I would definitely work with her again.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Emily Carter',
        image_url: 'testimonal6.png',
        description: 'Bhumi is incredibly dedicated and always eager to take on new challenges. Her contributions were invaluable to our success.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Jay Mehta',
        image_url: 'testimonal7.png',
        description: 'It was a pleasure collaborating with Bhumi. Her ability to solve complex issues is truly impressive.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Neha Desai',
        image_url: 'testimonal8.png',
        description: 'Bhumi’s user interface designs are modern and user-friendly. Her creativity made our platform look amazing.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Chris Evans',
        image_url: 'testimonal9.png',
        description: 'Bhumi is a reliable and passionate developer. She exceeded our expectations in every aspect.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: 'Sonal Raj',
        image_url: 'testimonal10.png',
        description: 'Working with Bhumi felt effortless. Her proactive approach helped streamline our entire development cycle.',
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
