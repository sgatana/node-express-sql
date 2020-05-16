const dotenv = require('dotenv').config();

const { SQL_SERVER, SQL_PASSWORD, SQL_USER, SQL_DATABASE } = process.env;

module.exports = {
  dbConfig: {
    server: SQL_SERVER,
    user: SQL_USER,
    database: SQL_DATABASE,
    password: SQL_PASSWORD,
    options: {
      enableArithAbort: true,
    },
  },
};
