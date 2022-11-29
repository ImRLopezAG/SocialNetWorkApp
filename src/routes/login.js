const express = require("express");

const router = express.Router();

const loginController = require("../controllers/loginController");

router.get("/login", loginController.GetLogin);
router.post("/login", loginController.PostLogin);
// router.post("/logout", loginController.PostLogout);
// router.get("/login_up", loginController.GetLogin_up);
// router.post("/login_up", loginController.PostLogin_up);

// router.get("/reset", loginController.GetReset);
// router.post("/reset", loginController.PostReset);

// router.get("/reset/:token", loginController.GetNewPassword);
// router.post("/new-password", loginController.PostNewPassword);

// router.get("/page-active-user/:User", loginController.GetPageActiveUser);
// router.get("/active-user/:User", loginController.GetActiveUser);

module.exports = router;
