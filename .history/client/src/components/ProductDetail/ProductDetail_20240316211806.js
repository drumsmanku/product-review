import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

const inputStyles={
  width:'50%'
}

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
    <div style={{width:'100vw', height:'100vh'}}>
     <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection:'column',
          width: '50%',
        }}
        noValidate
        autoComplete="off"
      >
        
        <TextField id="standard-basic"  label="Name" name='productName' value={productFields.productName} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" label="Price" name='price' value={productFields.price} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" label="Image" name='image' value={productFields.image} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" label="Description" name='productDescription' value={productFields.productDescription} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" label="Department" name='department' value={productFields.department} onChange={handleChange} variant="standard" />
        
      </Box>
    </div>
    
  );
}

export default ProductDetail;
