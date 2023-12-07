const User = require("../models/User");
const Order = require("../models/Order");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    checkPass = await bcrypt.compare(req.body.password, user.password);

    if (checkPass) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_CUSTOMER_SECRET_KEY, {
        expiresIn: "10h",
      });
      delete user._doc.password;
      user._doc.token = token;

      const orders = await Order.find({ user: user._id })
        .sort({ createdAt: -1 })
        .populate("user", "-password");

      user._doc.orders = orders;

      return res.status(201).json(user);
    } else {
      return res.status(401).send({ message: "Incorrect password, try again." });
    }
  } else {
    return res.status(401).send({ message: "Incorrect email, try again." });
  }
}

async function signUp(req, res) {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (user) {
    return res
      .status(409)
      .send({ message: "User already registered, try with an other email or username" });
  } else {
    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      shippingAddress: req.body.shippingAddress,
      password: req.body.password,
    });

    if (newUser) {
      const user = await User.findOne({
        email: newUser.email,
      });
      const token = jwt.sign({ id: user.id }, process.env.JWT_CUSTOMER_SECRET_KEY, {
        expiresIn: "10h",
      });
      delete user._doc.password;
      user._doc.token = token;

      return res.status(201).json(user);
    } else {
      return res.status(502).send({ message: "User cannot be created, try later" });
    }
  }
}

async function logOut(req, res) {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
}



module.exports = { login, signUp, logOut };
