const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
    {
        name: {
          type: String,
        },
        slug: {
            type: String
        }
      },
  {
    collection: "genre",
    timestamps: true,
  }
);

module.exports = mongoose.model("genre", GenreSchema);
