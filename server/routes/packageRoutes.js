const express = require("express");
const router = express.Router();
const packageController = require("../controllers/packageController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", packageController.index);
router.get("/:id", packageController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  packageController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  packageController.update,
);
router.delete(
  "/",
  checkJwt({ secret: process.env.JWT_ADMIN_SECRET_KEY, algorithms: ["HS256"] }),
  packageController.destroy,
);

module.exports = router;
