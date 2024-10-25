const productModel = require('../models/productModel');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new product
const createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    await productModel.addProduct(name, description, price, quantity);
    res.status(201).send('Product added');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  try {
    await productModel.editProduct(id, name, description, price, quantity);
    res.send('Product updated');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productModel.deleteProduct(id);
    res.send('Product deleted');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
