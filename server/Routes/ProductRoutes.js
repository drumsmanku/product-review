const express= require('express');
const router =express.Router()
const Product=require('../Models/Products')
const Review =require('../Models/Reviews')

router.get('/products', async(req, res)=>{
  try{
    const products=await Product.find();
    res.json(products);
  }catch(error){
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.get('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findOne({ id: productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;

    const existingProduct = await Product.findOne({ id: productId });
    if (!existingProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const {
      productName,
      price,
      image,
      productDescription,
      department,
      
    } = req.body;

    existingProduct.productName = productName;
    existingProduct.price = price;
    existingProduct.image = image;
    existingProduct.productDescription = productDescription;
    existingProduct.department = department;

    const updatedProduct = await existingProduct.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/products/review', async (req, res) => {
  try {
    // Extracting product data from the request body
    const {
      productName,
      price,
      image,
      productDescription,
      department,
      id,
      memberId,
      author,
      status
    } = req.body;

    // Creating a new review document using the Review model
    const newReview = new Review({
      productName,
      price,
      image,
      productDescription,
      department,
      id,
      memberId,
      author,
      status
    });

    // Saving the new review document to the database
    const savedReview = await newReview.save();

    // Sending a success response
    res.status(201).json(savedReview);
  } catch (error) {
    // Handling errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.put('/products/review/:reviewId', async (req, res) => {
  try {
    const { reviewId } = req.params;
    
    // Extracting updated review data from the request body
    const {
      productName,
      price,
      image,
      productDescription,
      department,
      memberId,
      author,
      status
    } = req.body;

    // Find the review document by ID
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Update review fields
    if (productName) review.productName = productName;
    if (price) review.price = price;
    if (image) review.image = image;
    if (productDescription) review.productDescription = productDescription;
    if (department) review.department = department;
    if (memberId) review.memberId = memberId;
    if (author) review.author = author;
    if (status) review.status = status;

    // Save the updated review document
    const updatedReview = await review.save();

    // Sending a success response with the updated review
    res.status(200).json(updatedReview);
  } catch (error) {
    // Handling errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.patch('/products/review/:reviewId/status', async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { status } = req.body;

    // Find the review document by ID
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Update review status
    if (status) {
      review.status = status;
    } else {
      return res.status(400).json({ error: 'Status parameter is required' });
    }

    // Save the updated review document
    const updatedReview = await review.save();

    // Sending a success response with the updated review
    res.status(200).json(updatedReview);
  } catch (error) {
    // Handling errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/reviews', async(req, res)=>{
  try{
    const reviews=await Review.find();
    res.json(reviews);
  }catch(error){
    console.error('Error fetching reviews:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
})

module.exports = router