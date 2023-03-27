"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const createError = require("http-errors");
const sequelizeErrorHandler = require("@utils/sequelizeErrorHandler");
const basename = path.basename(__filename);
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} = require("@config/config");
const db = {};
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: "mysql",
  host: DB_HOST,
  port: DB_PORT,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
      createError,
      sequelizeErrorHandler
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
