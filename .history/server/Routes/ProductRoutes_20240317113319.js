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

module.exports = router