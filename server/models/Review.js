const { mongoose, Schema } = require("../db");

const reviewsSchema = new mongoose.Schema(
  {
    place: { type: Schema.Types.ObjectId, ref: "places" },
    user: { type: Schema.Types.ObjectId, ref: "users" },
    comment: String,
    rating: Number,
  },
  { timestamps: true },
);


module.exports = mongoose.model("reviews", reviewsSchema);
