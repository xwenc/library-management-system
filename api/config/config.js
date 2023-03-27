const {config} = require('dotenv');
config({path: ".env"});
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, BASE_PATH, PORT } = process.env;

module.exports = { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, BASE_PATH, PORT };
