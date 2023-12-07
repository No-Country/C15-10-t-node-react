const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/token", authController.login);
router.post("/signup", authController.signUp);
router.get("/logout", authController.logOut);

module.exports = router;
