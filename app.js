const express = require("express");
const { engine } = require("express-handlebars");
const sequelize = require("./src/server/database");
const relationships = require("./src/util/relationShip");
const path = require("path");

// Models
const Users = require("./src/models/userModel");

// Controllers
const loginRouter = require("./src/routes/login");

// Initialize express app
const app = express();

// View engine setup
app.engine(
  "hbs",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    extname: "hbs",
    helpers: {},
  })
);
// controllers
const errorController = require("./src/controllers/errorController");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/src/views"));

// Routes

// App initialization

app.use("/", errorController.Get404);

//routes
// app.use(homeRouter);
// app.use(friendRouter);
// app.use(notificationRouter);
// app.use(eventRouter);
// app.use(errorController.Get404);
app.use(loginRouter);

//db relationships
relationships.RelationShip();

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
