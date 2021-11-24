const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
    },
    avatar: {
      type: String,
      default:
        "https://w1.pngwing.com/pngs/386/684/png-transparent-face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette.png",
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
    field: [{ name: { type: String }, value: { type: String } }],
  },
  {
    collection: "users",
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);
