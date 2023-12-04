const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
var { expressjwt: checkJwt } = require("express-jwt");

router.get("/", adminController.index);
router.post("/token", adminController.login);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  adminController.store,
);
router.patch(
  "/",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  adminController.update,
);
router.delete(
  "/",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  adminController.destroy,
);

module.exports = router;
