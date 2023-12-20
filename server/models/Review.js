const { mongoose, Schema } = require("../db");

const reviewsSchema = new mongoose.Schema(
  {
    placeId: { type: Schema.Types.ObjectId, ref: "places" },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    comment: String,
    rating: Number,
  },
  { timestamps: true },
);


module.exports = mongoose.model("reviews", reviewsSchema);
