const mongoose = require("mongoose");
const { Schema } = mongoose;
const productschema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: {
    type: Number,
    min: [1, "Wrong min rating"],
  },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong min disc"],
    max: [50, "High disc"],
  },
  rating: {
    type: Number,
    min: [0, "Wrong min rating"],
    max: [5, "High rating"],
    default: 0,
  },
  stock: Number,
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

exports.Product = mongoose.model("Product", productschema);
