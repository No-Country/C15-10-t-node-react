const { mongoose, Schema } = require("../db");

const reviewsSchema = new mongoose.Schema(
  {
    placeId: String,
    userId: String,
    comment: String,
    rating: Number,
  },
  { timestamps: true },
);


module.exports = mongoose.model("reviews", reviewsSchema);
