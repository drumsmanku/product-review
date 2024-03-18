import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import {  setAdminStatus, setTeamMemberStatus } from '../../store/features/isAdminSlice';
import { useSelector } from 'react-redux';
import { Button } from 'bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../store/features/productsSlice';


const inputStyles={
  width:'100%'
}
const buttonStyles={
  backgroundColor:'#36416A',
  border:'none',
  borderRadius:'2rem',
  padding:'0.5rem',
  color:'white'
}

function ProductDetail() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const location = useLocation();
  const { product } = location.state;
  const isAdmin = useSelector(state => state.isAdmin.isAdmin);
  const [changedFields, setChangedFields] = useState({});
  const[productFields, setProductFields]=useState({
    productName:product.productName,
    price:product.price,
    image:product.image,
    productDescription:product.productDescription,
    department:product.department,
    id:product.id,
    memberId:product._id,
    author:localStorage.getItem('user'),
    status:'pending'

  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the changedFields state to mark the field as changed
    setChangedFields(prevState => ({
      ...prevState,
      [name]: true
    }));

    // Update productFields state
    setProductFields({
      ...productFields,
      [name]: value
    });
  };
  const handleProductChange=()=>{
    
    dispatch(updateProduct(productFields)); 
    axios.post('http://localhost:4000/products/review', productFields)
    .then(navigate('/'))
    .catch(err=>console.log(err))
    
  }
  const getInputStyle = (fieldName) => {
    return changedFields[fieldName] ? { border: '2px solid green' } : {};
  };
  const handleProductSubmit=(event)=>{
    event.stopPropagation();
    axios.put(`http://localhost:4000/products/${product.id}`,{
      productName:productFields.productName,
      price:productFields.price,
      image:productFields.image,
      productDescription:productFields.productDescription,
      department:productFields.department,
      id:productFields.id,
    }).then(navigate('/dashboard-admin'))
  }

 
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', border:'2px solid black'}}>
      <div style={{ width:'30%', display:'flex', flexDirection:'column', alignItems:'center' }}>
        <img src={productFields.image} alt="prod" width={300}/>
        <p>Click on the image to change it</p>
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
        
         <TextField id="standard-basic" style={{ ...inputStyles, ...getInputStyle('productName') }} label="Name" name='productName' value={productFields.productName} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" label="Price" style={{ ...inputStyles, ...getInputStyle('price') }} name='price' value={productFields.price} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" label="Image" style={{ ...inputStyles, ...getInputStyle('image') }} name='image' value={productFields.image} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" label="Description" style={{ ...inputStyles, ...getInputStyle('productDescription') }} name='productDescription' value={productFields.productDescription} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" label="Department" style={{ ...inputStyles, ...getInputStyle('department') }} name='department' value={productFields.department} onChange={handleChange} variant="standard" />
        {isAdmin ? <button type='button' onClick={handleProductSubmit} style={buttonStyles}>Update Product as Admin</button> : <button type='button' onClick={handleProductChange} style={buttonStyles}>Submit changes for approval</button>}
        
      </Box>
    </div>
    
  );
}

export default ProductDetail;
