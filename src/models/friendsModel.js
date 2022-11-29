const Sequelize = require('sequelize');
const sequelize = require('../server/database');

exports.Friends = sequelize.define('friend', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  IsAccepted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  receptorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
