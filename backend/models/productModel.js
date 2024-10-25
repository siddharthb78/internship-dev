const pool = require('../db');

// Get all products
const getAllProducts = async () => {
  const result = await pool.query('SELECT * FROM products');
  return result.rows;
};

// Add a new product
const addProduct = async (name, description, price, quantity) => {
  await pool.query(
    'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4)',
    [name, description, price, quantity]
  );
};

// Edit a product
const editProduct = async (id, name, description, price, quantity) => {
  await pool.query(
    'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5',
    [name, description, price, quantity, id]
  );
};

// Delete a product
const deleteProduct = async (id) => {
  await pool.query('DELETE FROM products WHERE id = $1', [id]);
};

module.exports = {
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct,
};
