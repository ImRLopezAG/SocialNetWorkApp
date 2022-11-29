const Sequelize = require('sequelize');
const sequelize = require('../server/database');

exports.Notification = sequelize.define('notification', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  TypeOfNotification: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  IsRead: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});
