const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    listOrder: [
      {
         bookId: String,
         quantity: Number
      }
    ]
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", OrderSchema);
