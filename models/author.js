const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    address: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  {
    collection: "authors",
    timestamps: true,
  }
);

module.exports = mongoose.model("authors", AuthorSchema);
