const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", reviewController.index);
router.get("/:userId", reviewController.show);
router.get("/user-reviews/:userId", reviewController.userReviews);
router.post(
  "/",
  // checkJwt({ secret: process.env.JWT_CUSTOMER_SECRET_KEY, algorithms: ["HS256"] }),
  reviewController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_CUSTOMER_SECRET_KEY, algorithms: ["HS256"] }),
  reviewController.update,
);
router.delete(
  "/",
  checkJwt({ secret: process.env.JWT_CUSTOMER_SECRET_KEY, algorithms: ["HS256"] }),
  reviewController.destroy,
);

module.exports = router;
