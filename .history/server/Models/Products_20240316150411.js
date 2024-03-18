const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  
 
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
