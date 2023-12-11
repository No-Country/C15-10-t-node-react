const Comment = require("../models/Comment");


async function store(req, res) {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      userId: req.body.userId,
    });
    const comment = await Comment.findOne(newComment);
    return res.status(200).json(comment);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    await Comment.findByIdAndUpdate(req.params.commentId, {
      content: req.body.content
    });
    const commentUpdated = await Comment.findById(req.params.commentId);

    res.status(201).json(commentUpdated);
  } catch (err) {
    res.status(404).json(err);
  }
}

async function destroy(req, res) {
  try {
    await Comment.findByIdAndDelete(req.body.commentId);

    return res.status(200).send({ message: "Comment deleted" });
  } catch (err) {
    return res.status(404).send({ message: "Something went wrong, try again later" });
  }
}

module.exports = {
  store,
  update,
  destroy,
};
