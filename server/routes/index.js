const packageRoutes = require("./packageRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use("/package", packageRoutes);
  app.use("/auth", authRoutes);
  app.use("/orders", orderRoutes);
  app.use("/admins", adminRoutes);
  app.use("/users", userRoutes);
};
