'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Project belongs to a UserProfile (one-to-many relationship)
      Project.belongsTo(models.UserProfile, {
        foreignKey: 'user_id', 
        as: 'userProfile', 
        onDelete: 'CASCADE',
      });
    }
  }
  
  Project.init({
    name: DataTypes.STRING,
    image_url: DataTypes.TEXT,
    github_link: DataTypes.TEXT,
    project_type:DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
    paranoid:true
  });
  
  return Project;
};
