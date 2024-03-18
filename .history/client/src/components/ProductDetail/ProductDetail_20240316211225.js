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
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Name" value={productFields.productName} onChange={e=>e.target.value} variant="standard" />
      
    </Box>
  );
}

export default ProductDetail;
