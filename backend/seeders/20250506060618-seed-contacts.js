'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [
      {
        email: 'bhumikrishnani211@gmail.com',
        whatsapp_no: '9277955152',
        twitter_link: 'https://twitter.com/bhumi_krishnani',
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
