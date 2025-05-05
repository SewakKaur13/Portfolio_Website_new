'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Each Skill belongs to a single UserProfile
      Skill.belongsTo(models.UserProfile, {
        foreignKey: 'user_id',
        as: 'userProfile' // Alias for the association
      });
    }
  }
  Skill.init({
    type: DataTypes.ENUM('frontend', 'backend'),
    skill_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skill',
    paranoid: true
  });
  return Skill;
};
