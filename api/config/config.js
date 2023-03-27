const {config} = require('dotenv');
config({path: ".env"});
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
console.log(' DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE: ',  DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE);
module.exports = { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE };
