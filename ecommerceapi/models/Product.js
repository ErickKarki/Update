const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    // title: { type: String, required: true, unique: true },
    // desc: { type: String, required: true },
    // img: { type: String, required: true },
    // categories: { type: Array },
    // size: { type: Array },
    // color: { type: Array },
    // price: { type: Number, required: true },
    // inStock: { type: Boolean, default: true },

    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    category: { type: Array },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
