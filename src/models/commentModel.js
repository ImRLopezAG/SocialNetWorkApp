const Sequelize = require('sequelize');
const sequelize = require('../server/database');

exports.Comment = sequelize.define('comment', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
