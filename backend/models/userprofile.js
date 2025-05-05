'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Association with Skills
      UserProfile.hasMany(models.Skill, {
        foreignKey: 'user_id',
        as: 'skills' 
      });

      // Association with Services
      UserProfile.hasMany(models.Service, {
        foreignKey: 'user_id',
        as: 'services' 
      });

      // Association with Projects
      UserProfile.hasMany(models.Project, {
        foreignKey: 'user_id',
        as: 'projects' 
      });

      // Association with Testimonials
      UserProfile.hasMany(models.Testimonial, {
        foreignKey: 'user_id',
        as: 'testimonials' 
      });

      // Association with Contacts
      UserProfile.hasMany(models.Contact, {
        foreignKey: 'user_id',
        as: 'contacts' 
      });

      // Association with Messages
      UserProfile.hasMany(models.Message, {
        foreignKey: 'user_id',
        as: 'messages' 
      });
    }
  }
  UserProfile.init({
    title: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cv_pdf_url: DataTypes.STRING,
    landing_img: DataTypes.STRING,
    about_img: DataTypes.STRING,
    description: DataTypes.TEXT,
    experience_yrs: DataTypes.INTEGER,
    projects_done: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserProfile',
    paranoid: true
  });
  return UserProfile;
};
