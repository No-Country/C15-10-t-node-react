const Package = require("../models/Package");

async function index(req, res) {
  const packages = await Package.find();

  return res.status(200).json(packages);
}

async function show(req, res) {
  const package = await Package.findById(req.params.id);

  return res.json(package);
}

async function store(req, res) {
  try {
    const newPackage = await Package.create({
      stock: req.body.stock,
      featured: req.body.featured,
      name: req.body.name,
      price: price,
    });
    const package = await Package.findOne(newPackage);
    return res.status(200).json(package);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    await Package.findByIdAndUpdate(req.params.id, {
      stock: req.body.stock,
    });
    const packageToFront = await Package.findById(req.params.id);

    res.status(201).json(packageToFront);
  } catch (err) {
    res.status(404).json(err);
  }
}

async function destroy(req, res) {
  try {
    await Package.findByIdAndDelete(req.body.packageId);

    return res.status(200).send({ message: "Package deleted" });
  } catch (err) {
    return res.status(404).send({ message: "Something went wrong, try again later" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
