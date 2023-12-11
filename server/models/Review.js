const { mongoose, Schema } = require("../db");
const Place = require("./Place");
const User = require("./User")

const reviewsSchema = new mongoose.Schema(
  {
    place: Place,
    user: User,
    rating: Number,
    comment: String,
  },
  { timestamps: true },
);

// reviewSchema.set("toJSON", { virtuals: true });
reviewsSchema.methods.toJSON = function () {
  const review = this._doc;
  review.userId = this.userId.toString();
  delete review.userId;
  return review;
};

module.exports = mongoose.model("reviews", reviewsSchema);
