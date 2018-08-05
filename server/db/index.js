const Sequelize = require('sequelize');
const env = require('dotenv');
const path = require('path');
const ENV = path.resolve(__dirname, '../.env')
env.config({path: (ENV)});


const sequelize = new Sequelize( 'postgres', process.env.DB_USER, '', {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port: process.env.DB_PORT,
  operatorsAliases: false
});

module.exports = sequelize;