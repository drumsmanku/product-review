const express= require('express');
const router =express.Router()
const Product=require('../Models/Products')

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
    const product = await Product.findById(mongoose.Types.ObjectId(productId));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
module.exports = router