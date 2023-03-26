const Sequelize = require("sequelize");

const sequelizeErrorHandler = (err, req, res, next) => {
  if (err instanceof Sequelize.ValidationError) {
    const errors = err.errors.map((error) => {
      return {
        field: error.path,
        message: error.message,
      };
    });
    return res.status(400).json({ errors });
  }
  return res.status(500).json({ errors: [{ message: err.message }] });
}

module.exports = sequelizeErrorHandler;