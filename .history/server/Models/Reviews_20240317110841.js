const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

  productName: String,
  price: String,
  image: String,
  productDescription:String, 
  department: String,
  id: String,
  memberId: String,
  author: String,
  status: String,
  
 
});


const Review = mongoose.model('Review1', reviewSchema);

module.exports = Review;
