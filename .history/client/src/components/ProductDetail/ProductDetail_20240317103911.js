import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import {  setAdminStatus, setTeamMemberStatus } from '../../store/features/isAdminSlice';
import { useSelector } from 'react-redux';
import { Button } from 'bootstrap';

const inputStyles={
  width:'100%'
}

function ProductDetail() {

  const location = useLocation();
  const { product } = location.state;
  const isAdmin = useSelector(state => state.isAdmin.isAdmin);
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
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', border:'2px solid black'}}>
      <div style={{width:'100%', display:'flex',  justifyContent:'center', border:'2px solid black', alignItems:'center'}}>
        <div style={{ width:'30%'}}>
          <img src={productFields.image} alt="prod" width={300}/>
        </div>
      <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            display: 'flex',
            flexDirection:'column',
            width: '40%',
            border: '1px solid black',
            padding: '1rem'
          }}
          noValidate
          autoComplete="off"
        >
          
          <TextField id="standard-basic" style={inputStyles} label="Name" name='productName' value={productFields.productName} onChange={handleChange} variant="standard" />
          <TextField id="standard-basic" label="Price" style={inputStyles} name='price' value={productFields.price} onChange={handleChange} variant="standard" />
          <TextField id="standard-basic" label="Image" style={inputStyles} name='image' value={productFields.image} onChange={handleChange} variant="standard" />
          <TextField id="standard-basic" label="Description" style={inputStyles} name='productDescription' value={productFields.productDescription} onChange={handleChange} variant="standard" />
          <TextField id="standard-basic" label="Department" style={inputStyles} name='department' value={productFields.department} onChange={handleChange} variant="standard" />
          {isAdmin?<button>Update Product as Admin</button>:<button>Submit changes for approval</button>}
          
        </Box>
      </div>
      
    </div>
    
  );
}

export default ProductDetail;
