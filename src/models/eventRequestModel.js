const Sequelize = require('sequelize');
const sequelize = require('../server/database');

exports.EventRequest = sequelize.define('eventRequest', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

