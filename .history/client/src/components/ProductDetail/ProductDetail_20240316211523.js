import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;
  const[productFields, setProductFields]=useState({
    productName:product.productName,
    price:product.price,
    image:product.image,
    productDescription:product.productDescription,
    department:product.department,

  });
  const handleChange=(e)=>{
    setProductFields(
      {
        ...productFields,
      [e.target.name]:e.target.value
      }
    )
  }


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection:'column',
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Name" name='productName' value={productFields.productName} onChange={handleChange} variant="standard" />
      <TextField id="standard-basic" label="Name" name='price' value={productFields.price} onChange={handleChange} variant="standard" />
      <TextField id="standard-basic" label="Name" name='image' value={productFields.image} onChange={handleChange} variant="standard" />
      <TextField id="standard-basic" label="Name" name='productDescription' value={productFields.productDescription} onChange={handleChange} variant="standard" />
      <TextField id="standard-basic" label="Name" name='department' value={productFields.department} onChange={handleChange} variant="standard" />
      
    </Box>
  );
}

export default ProductDetail;
