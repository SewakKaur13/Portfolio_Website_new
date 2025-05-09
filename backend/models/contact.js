'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Each Contact belongs to a UserProfile
      Contact.belongsTo(models.UserProfile, {
        foreignKey: 'user_id',
        as: 'userProfile'
      });
    }
  }
  Contact.init({
    email: DataTypes.STRING,
    whatsapp_no: DataTypes.STRING,
    linkedin_link: DataTypes.TEXT,
    github_link: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contact',
    paranoid:true
  });
  return Contact;
};
