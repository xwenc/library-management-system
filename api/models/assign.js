"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Assign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Assign.belongsTo(models.Book, {as: "book"});
      Assign.belongsTo(models.User, {as: "user"});
    }
  }
  Assign.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "books",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      returnStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Assign",
    }
  );
  return Assign;
};
