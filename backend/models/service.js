'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define the relationship between Service and UserProfile
      // A Service belongs to a UserProfile (one-to-many relationship)
      Service.belongsTo(models.UserProfile, {
        foreignKey: 'user_id',
        as: 'userProfile', 
        onDelete: 'CASCADE',
      });
    }
  }
  
  Service.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    bulletPoints:DataTypes.ARRAY(DataTypes.STRING),
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Service',
    paranoid:true
  });
  
  return Service;
};
