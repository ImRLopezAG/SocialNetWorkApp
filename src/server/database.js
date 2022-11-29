const Sequelize = require("sequelize");

const sequelize = new Sequelize("SocialNetworkApp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
