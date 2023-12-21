const Place = require("../models/Place");
const Review = require("../models/Review");



async function index(req, res) {
  try {
    const reviews = await Review.find()
    return res.status(200).json(reviews);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res) {
  try {
    const review = await Review.findById(req.params.id)
    return res.status(200).json(review);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function userReviews(req, res) {
  const userId = req.params.userId
  console.log(userId)
  try {
    const reviews = await Review.find({ user: userId }).populate("place")
    return res.status(200).json(reviews);
  } catch (err) {
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
    const updatePlace = await Place.find(review.place);

    updatePlace.reviews.push(review._id);

    console.log(updatePlace);

    return res.status(200).json(review);
  } catch (err) {
    res.status(400).json(err);
  }
}



async function update(req, res) {
  try {
    await Review.findByIdAndUpdate(req.params.id, {
      comment: req.body.comment,
      rating: req.body.rating
    });
    const commentUpdated = await Review.findById(req.params.id);

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
