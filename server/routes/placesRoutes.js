const express = require("express");
const router = express.Router();
const placesController = require("../controllers/placesController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", placesController.index);
router.get("/:id", placesController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_CUSTOMER_SECRET_KEY, algorithms: ["HS256"] }),
  placesController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_CUSTOMER_SECRET_KEY, algorithms: ["HS256"] }),
  placesController.update,
);
router.delete(
  "/",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  placesController.destroy,
);

module.exports = router;
