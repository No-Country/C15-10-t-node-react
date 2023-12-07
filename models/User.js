const { mongoose, Schema } = require("../db");

const userSchema = new mongoose.Schema(
  {
    user: {},
    packages: [],
    totalAmount: Number,
    totalQuantity: Number,
    paymentMethod: String,
    status: String,
  },
  { timestamps: true },
);

// userSchema.set("toJSON", { virtuals: true });
userSchema.methods.toJSON = function () {
  const user = this._doc;
  user.id = this._id.toString();
  delete user._id;
  return user;
};

module.exports = mongoose.model("users", userSchema);
