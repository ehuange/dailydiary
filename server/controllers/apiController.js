const db = require('../db/schema.js');
const sequelize = require('../db/index.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

Date.prototype.yyyymmdd = function() {
  let mm = this.getMonth() + 1; // getMonth() is zero-based
  const dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('-');
};

const apiController = {
  getList: async (req, res) => {
    try {
      const date = new Date();
      const today = date.yyyymmdd();
      const results = await db.Post.findAll({ where: { date: today } });
      res.send(results);
    } catch (error) {
      console.log('Error with getList', error);
      return;
    }
  },
  getDay: async (req, res) => {
    try {
      const { day } = req.params;
      const results = await db.Post.findAll({ where: { date: day } });
      res.send(results);
    } catch (error) {
      console.log('Error with getDay', error);
      return;
    }
  },
  sendToday: async (req, res) => {
    try {
      const date = new Date();
      const today = date.yyyymmdd();
      const results = await db.Post.findAll({ where: { date: today } });
      res.send(results);
    } catch (error) {
      console.log('Error with sendToday', error);
      return;
    }
  },
  createPage: async (req, res) => {
    try {
      const { title, body, date } = req.body;
      const newPage = await db.Post.create({
        title: title, body: body, date: date
      });
      const savedEntry = await newPage.save();
      res.send([savedEntry]);
    } catch (error) {
      console.log('Error with createPage', error);
      return;
    }
  },
  editPage: async (req, res) => {
    try {
      const { title, body, date } = req.body;
      const updatedPage = await db.Post.update({
          title, body, date
        }, { 
          where: {
            date
        },
        returning: true, 
        plain: true
      });
      res.send(updatedPage);
    } catch (error) {
      console.log('Error with editPage', error);
      return;
    }
  },
  searchKeyword: async (req, res) => {
    try {
      console.log('searching');
      const { keyword } = req.params;
      const results = await db.Post.findAll({ 
        where: {
          [Op.or]: [
            {
              title: {
                [Op.like]: `%${keyword}%`
              }
            },
            {
              body: {
                [Op.like]: `%${keyword}%`
              }
            }
          ]
        }
      });
      res.send(results);
    } catch (error) {
      console.log('Error with searchKeyword', error);
      return;
    }
  }
}

module.exports = apiController 