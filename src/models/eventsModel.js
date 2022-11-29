const Sequelize = require('sequelize');
const sequelize = require('../server/database');

exports.Event = sequelize.define('event', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name : {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Place: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});