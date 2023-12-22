const { mongoose } = require("../db");
const slugify = require("slugify");

const placeSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    imgs: [],
    coords: [],
    reviews: { type: [mongoose.Schema.Types.ObjectId], ref: "reviews" },
  },
  { timestamps: true },
);

placeSchema.methods.toJSON = function () {
  const place = this._doc;
  place.id = this._id;
  delete place._id;
  return place;
};

placeSchema.virtual("slug").get(function () {
  return slugify(this.name, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: "en", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
});

module.exports = mongoose.model("places", placeSchema);
