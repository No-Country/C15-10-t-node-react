const Place = require("../models/Place");
const Review = require("../models/Review");
const User = require("../models/User");

async function index(req, res) {
  try {
    const reviews = await Review.find();
    return res.status(200).json(reviews);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res) {
  try {
    const { userId } = req.params;
    const review = await Review.findById(userId);
    return res.status(200).json(review);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function userReviews(req, res) {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  try {
    const reviews = await Review.find({ user: userId }).populate({
      path: "place",
      select: ["name", "imgs"],
    });

    return res.status(200).json(reviews);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function store(req, res) {
  try {
    const newReview = await Review.create({
      comment: req.body.comment,
      user: req.body.user,
      place: req.body.place,
      rating: req.body.rating,
    });
    const review = await Review.findOne(newReview);
    const updatePlace = await Place.findById(review.place);

    updatePlace.reviews.push(review._id);

    await updatePlace.save();

    return res.status(200).json(review);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    await Review.findByIdAndUpdate(req.params.id, {
      comment: req.body.comment,
      rating: req.body.rating,
    });
    const commentUpdated = await Review.findById(req.params.id).populate({
      path: "place",
      select: ["name", "imgs"],
    });

    res.status(201).json(commentUpdated);
  } catch (err) {
    res.status(404).json(err);
  }
}

async function destroy(req, res) {
  try {
    await Review.findByIdAndDelete(req.body.commentId);

    return res.status(200).send({ message: "Review deleted" });
  } catch (err) {
    return res.status(404).send({ message: "Something went wrong, try again later" });
  }
}

module.exports = {
  index,
  store,
  show,
  userReviews,
  update,
  destroy,
};
