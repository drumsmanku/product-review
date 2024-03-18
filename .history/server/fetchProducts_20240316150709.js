// fetchProducts.js

const axios = require('axios');
const Product = require('./Models/Products');

async function fetchAndSaveProducts(apiUrl) {
  try {
    // Fetch products from the API
    const response = await axios.get(apiUrl);

    // Assuming the API response is an array of products
    const products = response.data;

    // Save products to the database
    await Product.insertMany(products);

    console.log('Products fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching or saving products:', error.message);
  }
}

module.exports = fetchAndSaveProducts;
