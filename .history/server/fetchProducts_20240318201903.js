

const axios = require('axios');
const Product = require('./Models/Products');

async function fetchAndSaveProducts(apiUrl) {
  try {
   
    const existingProductsCount = await Product.countDocuments();

  
    if (existingProductsCount > 0) {
      console.log('Products already exist in the database. Skipping fetch and save.');
      return;
    }

 
    const response = await axios.get(apiUrl);


    const products = response.data;


    await Product.insertMany(products);

    console.log('Products fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching or saving products:', error.message);
  }
}

module.exports = fetchAndSaveProducts;
