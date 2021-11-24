const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    name: {
      type: String,
    },
    genre: {
      type: String,
    },
    image: {
      type: String,
      default: 'https://daihoctantrao.edu.vn/media/news/s%C3%A1ch.jpg',
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
