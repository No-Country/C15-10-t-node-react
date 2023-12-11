const Review = require("../models/Review");

async function index(req, res) {
  try {
    const reviews = await Review.find();
    console.log(reviews);
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(401).json(err);
  }
}

async function show(req, res) {
  try {
    const review = await Review.findOne({ userId: req.body._id });
    return res.status(200).json(review);
  } catch (error) {
    return res.status(401).json(err);
  }
}

async function store(req, res) {
  try {
    const newReview = await Review.create({
      userId: req.body.userId,
      userName: req.body.name,
      points: req.body.points,
      comments: req.body.comments,
    });
    const review = await Review.findOne(newReview);
    return res.status(200).json(review);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    await Review.findByIdAndUpdate(req.params._id, {
      stock: req.body.stock,
    });
    const reviewToFront = await Review.findById(req.params._id);

    res.status(201).json(reviewToFront);
  } catch (err) {
    res.status(404).json(err);
  }
}

async function destroy(req, res) {
  try {
    await Review.findByIdAndDelete(req.body._id);

    return res.status(200).send({ message: "Review deleted" });
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
