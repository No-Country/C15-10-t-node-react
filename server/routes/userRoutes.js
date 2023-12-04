const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
var { expressjwt: checkJwt } = require("express-jwt");

router.get("/", userController.index);
router.post("/resetPassword", userController.requestPass);
router.patch("/resetPassword/:id", userController.resetPass);
router.get(
  "/orders/:id",
  checkJwt({ secret: process.env.JWT_CUSTOMER_SECRET_KEY, algorithms: ["HS256"] }),
  userController.getOrders,
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.JWT_CUSTOMER_SECRET_KEY, algorithms: ["HS256"] }),
  userController.show,
);
router.post("/", userController.store);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_CUSTOMER_SECRET_KEY, algorithms: ["HS256"] }),
  userController.update,
);
router.delete(
  "/",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  userController.destroy,
);

module.exports = router;
