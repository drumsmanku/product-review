// fetchProducts.js

const axios = require('axios');
const Product = require('./Models/Products');

async function fetchAndSaveProducts(apiUrl) {
  try {
    // Fetch products from the API
    const response = await axios.get(apiUrl);

    // Assuming the API response is an array of products
    const products = response.data;

    // Loop through each product
    for (const productData of products) {
      // Check if a product with the same name already exists in the database
      const existingProduct = await Product.findOne({ name: productData.name });

      // If no existing product found, save the new product
      if (!existingProduct) {
        const newProduct = new Product(productData);
        await newProduct.save();
      }
    }

    console.log('Products fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching or saving products:', error.message);
  }
}

module.exports = fetchAndSaveProducts;
