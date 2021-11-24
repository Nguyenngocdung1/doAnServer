const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    field: {
      type: String,
    },
  },
  {
    collection: "authors",
    timestamps: true,
  }
);

module.exports = mongoose.model("authors", AuthorSchema);
