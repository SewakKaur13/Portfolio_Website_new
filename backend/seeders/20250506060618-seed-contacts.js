'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [
      {
        email: 'bhumikrishnani211@gmail.com',
        whatsapp_no: '9277955152',
        linkedin_link: 'https://www.linkedin.com/in/bhumi-krishnani-452082293/',
        github_link:'https://github.com/SewakKaur13',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contacts', null, {});
  }
};
