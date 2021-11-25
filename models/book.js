const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    genre: {
      type: String,
    },
    image: {
      type: String,
      default: 'https://i.imgur.com/NVRNzyf.jpg',
    },
    des: {
      type: String,
    },
    authorId: {
      type: String,
    },
    field: {
      type: String
    }
  },
  {
    collection: "books",
    timestamps: true,
  }
);

module.exports = mongoose.model("books", BookSchema);
