const { mongoose } = require("../db");
const slugify = require("slugify");

const packageSchema = new mongoose.Schema({
  price: Number,
  stock: Number,
  featured: Boolean,
  photos: Array,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  name: String,
});
packageSchema.set("toJSON", { virtuals: true });

// productSchema.methods.toJSON = function () {
//   const product = this._doc;
//   product.id = this._id.toString();
//   delete product._id;
//   return product;
// };

packageSchema.virtual("slug").get(function () {
  return slugify(this.name, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: "en", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
});

module.exports = mongoose.model("Package", packageSchema);
