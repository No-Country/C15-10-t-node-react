const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_CUSTOMER_SECRET_KEY, algorithms: ["HS256"] }),
  orderController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  orderController.update,
);
router.delete(
  "/",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  orderController.destroy,
);

module.exports = router;
