const { mongoose } = require("../db");
const slugify = require("slugify");

const placeSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  imgs: [],
  coords: [],
  reviews: [],

},
  { timestamps: true },
);
placeSchema.set("toJSON", { virtuals: true });


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
