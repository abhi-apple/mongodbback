const fs = require("fs");
const model = require("../model/product.js");
// const mongoose=require('mongoose')
const Product = model.Product;
exports.createprod = async (req, res) => {
  try {
    const prod = new Product(req.body);
    const savedProduct = await prod.save();
    console.log({ savedProduct });

    res.status(201).json(req.body);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getall = async (req, res) => {
  const prod = await Product.find();
  res.json(prod);
};

exports.getprod = async (req, res) => {
  // try {
  const id = req.params.id;
  console.log(id);
  const prod = await Product.findById(id);
  res.json(prod);
};

exports.override = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const filter = { _id: id }; // Construct the filter object
    const updatedProduct = await Product.findOneAndReplace(filter, req.body);

    if (!updatedProduct) {
      // Handle the case where the product is not found
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.patchprod = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id }; // Construct the filter object
  const updatedProduct = await Product.findByIdAndUpdate(filter, req.body);
  console.log(updatedProduct);
  res.json(updatedProduct);
};
exports.deleteprod = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id }; // Construct the filter object
  const updatedProduct = await Product.findOneAndDelete(filter, req.body);
  console.log(updatedProduct);
  res.json(updatedProduct);
};
