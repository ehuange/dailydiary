const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const createDatabase = async database => {
  try {
    await sequelize.queryAsync(`CREATE DATABASE ${database}`);
    success('successfully created database ', database);
  } catch (err) {
    error('error creating database ', err);
  }
};

const dropDatabase = async database => {
  try {
    await sequelize.queryAsync(`DROP DATABASE IF EXISTS ${database}`);
    success('successfully dropped database ', database);
  } catch (err) {
    error('error dropping database ', err);
  }
};

const Post = sequelize.define('post', {
  title: Sequelize.STRING,
  body: Sequelize.STRING,
  date: { type: Sequelize.STRING, unique: true }
});

module.exports = { Post };