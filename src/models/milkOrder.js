// DEFIND SCHEMA FOR MILK ORDER MODEL
const mongoose = require("mongoose");

const milkOrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phoneno: {
      type: String,
      required: true,
      maxlength: 15,

      unique: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      default: 25,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// creating a new collection called MilkOrder
const MilkOrders = mongoose.model("MilkOrder", milkOrderSchema);

module.exports = MilkOrders;
