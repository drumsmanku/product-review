const express= require('express');
const router =express.Router()
const Product=require('../Models/Users/Product')

router.get('/products', async(req, res)=>{
  try{
    const products=await Product.find();
    res.json(products);
  }catch(error){
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
})

module.exports = router