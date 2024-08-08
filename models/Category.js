//use sequalize for these
const { Model, DataTypes } = require('sequelize');


const sequelize = require('../config/connection.js');


class Category extends Model {}

//initiate the categories
Category.init(
  {
    // define columns
    //id which will auto generate
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //category name
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
