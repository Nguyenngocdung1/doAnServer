const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    email: {
      type: String,
    },
    bookId: {
      type: String,
    },
    content: {
      type: String,
    },
    icon: {
      type: Number,
    },
  },
  {
    collection: "comments",
    timestamps: true,
  }
);

module.exports = mongoose.model("comments", CommentSchema);
