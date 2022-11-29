const Sequelize = require("sequelize");
const sequelize = require("../server/database");

const Posts = sequelize.define("post", {
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
  Src: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Posts;
