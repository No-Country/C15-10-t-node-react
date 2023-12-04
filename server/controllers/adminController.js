const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function index(req, res) {
  const admin = await Admin.find().select("-password");
  return res.json(admin);
}
async function login(req, res) {
  const admin = await Admin.findOne({ email: req.body.email });
  if (admin) {
    checkPass = await bcrypt.compare(req.body.password, admin.password);

    if (checkPass) {
      const token = jwt.sign({ id: admin.id }, process.env.JWT_ADMIN_SECRET_KEY, {
        expiresIn: "9h",
      });
      delete admin._doc.password;
      admin._doc.token = token;

      return res.status(201).json(admin);
    } else {
      return res.status(401).send({ message: "Incorrect Credentials" });
    }
  } else {
    return res.status(401).send({ message: "Incorrect Credentials" });
  }
}
async function store(req, res) {
  try {
    const admin = await Admin.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(200).json(admin);
  } catch (err) {
    return res.status(404).send({ message: "Something went wrong, try again later" });
  }
}
async function update(req, res) {
  try {
    const admin = await Admin.findByIdAndUpdate(
      req.body.id,
      {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      },
      { new: true },
    );

    return res.status(200).json(admin);
  } catch (err) {
    return res.status(400).send({ message: "Something went wrong, try again later" });
  }
}
async function destroy(req, res) {
  try {
    await Admin.findByIdAndDelete(req.body.adminId);
    return res.status(200).send({ message: "Admin deleted" });
  } catch (err) {
    return res.status(404).send({ message: "Something went wrong, try again later" });
  }
}

module.exports = {
  index,
  login,
  store,
  update,
  destroy,
};
