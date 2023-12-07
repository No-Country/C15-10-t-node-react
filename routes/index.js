const packageRoutes = require("./packagesRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const reviewsRoutes = require("./reviewsRouter");

module.exports = (app) => {
  app.use("/packages", packageRoutes);
  app.use("/auth", authRoutes);
  app.use("/orders", orderRoutes);
  app.use("/admins", adminRoutes);
  app.use("/users", userRoutes);
  app.use("/reviews", reviewsRoutes);
};
