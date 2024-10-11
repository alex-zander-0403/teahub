require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER, // отсылка к .env
    password: process.env.DB_PASS, // отсылка к .env
    database: process.env.DB_NAME, // отсылка к .env
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
