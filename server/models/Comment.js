const { mongoose } = require("../db");
const User = require("./User")


const commentSchema = new mongoose.Schema({
    content: String,
    user: User,
}, { timestamps: true },
);
commentSchema.set("toJSON", { virtuals: true });


module.exports = mongoose.model("comment", commentSchema);
