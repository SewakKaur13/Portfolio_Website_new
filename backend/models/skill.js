'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      Skill.belongsTo(models.UserProfile, {
        foreignKey: 'user_id',
        as: 'userProfile'
      });
    }
  }

  Skill.init({
    type: DataTypes.ENUM('frontend', 'backend', 'tools', 'framework', 'database'),
    skill_names: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Skill',
    paranoid: true
  });

  return Skill;
};
