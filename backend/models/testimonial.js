'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define the relationship with the UserProfile model
      this.belongsTo(models.UserProfile, {
        foreignKey: 'user_id',  
        as: 'userProfile',      
      });
    }
  }
  Testimonial.init({
    name: DataTypes.STRING,
    image_url: DataTypes.TEXT,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Testimonial',
    paranoid:true
  });
  return Testimonial;
};
