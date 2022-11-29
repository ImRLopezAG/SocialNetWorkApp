const Sequelize = require("sequelize");
const sequelize = require("../server/database");

exports.User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  LastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  IsActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  ResetToken: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ResetTokenExpiration: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});
