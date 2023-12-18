const Review = require("../models/Review");



async function index(req, res) {
  try {
    const reviews = await Review.find()
    return res.status(200).json(reviews);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function userReviews(req, res) {
  const userId = req.params.userId
  try {
    const reviews = await Review.find({ userId: userId })
    return res.status(200).json(reviews);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function store(req, res) {
  try {
    const newReview = await Review.create({
      comment: req.body.comment,
      userId: req.body.userId,
      placeId: req.body.placeId,
      rating: req.body.rating,
    });
    const review = await Review.findOne(newReview);
    return res.status(200).json(review);
  } catch (err) {
    res.status(400).json(err);
  }
}



async function update(req, res) {
  try {
    await Review.findByIdAndUpdate(req.params.commentId, {
      content: req.body.content
    });
    const commentUpdated = await Review.findById(req.params.commentId);

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
  userReviews,
  update,
  destroy,
};
