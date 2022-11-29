const Sequelize = require('sequelize');

exports.sequelize = new Sequelize('SocialNetworkApp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
