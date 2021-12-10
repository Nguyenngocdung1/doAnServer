const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    listOrder: {
      type: String,
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", OrderSchema);
