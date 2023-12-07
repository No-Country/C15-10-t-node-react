const { mongoose, Schema } = require("../db");

const reviewsSchema = new mongoose.Schema(
  {
    userId: String,
    userName: String,
    points: Number,
    comments: String,
    status: String,
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
