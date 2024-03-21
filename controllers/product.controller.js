const Product = require("../models/product.model.js");

//Show all products
async function getProducts(req, res) {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ messege: error.message });
  }
}

//Show single product by ID
async function getProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ messege: error.message });
  }
}

//Add product
async function addProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ messege: error.message });
  }
}

//Update product
async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    //First parameter is the id of the product, second parameter what you wanna update.
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ messege: error.messege });
  }
}

//Delete product
async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted!" });
  } catch (error) {
    res.status(500).json({ messege: error.messege });
  }
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
