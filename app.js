const express = require('express');
const { engine } = require('express-handlebars');
const sequelize = require('./src/server/database');
const path = require('path');

const app = express();

// View engine setup
app.engine(
  'hbs',
  engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    extname: 'hbs',
    helpers: {},
  })
);
// controllers
const errorController = require('./src/controllers/errorController');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/src/views'));

// Routes

// App initialization

app.use('/', errorController.Get404);

sequelize
  .sync(/*{ alert: true }*/)
  .then(function (result) {
    app.listen(3000, function () {
      console.log(
        `Server is running on http://localhost:${this.address().port}`
      );
    });
  })
  .catch(function (err) {
    console.log(`Error: ${err}`);
  });
