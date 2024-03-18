import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'bootstrap';
import axios from 'axios';
import { updateProductField } from '../../store/features/productSlice';

const inputStyles = {
  width: '100%'
};
const buttonStyles1 = {
  backgroundColor: 'green',
  border: 'none',
  borderRadius: '2rem',
  padding: '0.5rem',
  color: 'white'
};
const buttonStyles2 = {
  backgroundColor: 'red',
  border: 'none',
  borderRadius: '2rem',
  padding: '0.5rem',
  color: 'white'
};
const changedFieldStyles = {
  border: '2px solid green'
};

function ProductDetailOnAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const product = useSelector(state => state.product.product);
  const isAdmin = useSelector(state => state.isAdmin.isAdmin);
  
  // State to keep track of changed fields
  const [changedFields, setChangedFields] = useState({});

  // Initialize productFields with Redux product state
  const [productFields, setProductFields] = useState(product);

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update productFields state
    setProductFields({
      ...productFields,
      [name]: value
    });

    // Dispatch action to update Redux product state
    dispatch(updateProductField({ fieldName: name, value }));

    // Update changedFields state
    setChangedFields({
      ...changedFields,
      [name]: true
    });
  };

  // Handle product acceptance
  const handleAccept = () => {
    // Update product status and save it
    const updatedProduct = {
      ...productFields,
      status: 'accepted'
    };
    axios.put(`http://localhost:4000/products/review/${product._id}`, updatedProduct)
      .then(() => {
        navigate('/dashboard-admin');
      })
      .catch(err => console.log(err));

    // Update product details
    axios.put(`http://localhost:4000/products/${product.id}`, updatedProduct)
      .then(() => navigate('/dashboard-admin'))
      .catch(err => console.log(err));
  };

  // Handle product rejection
  const handleReject = () => {
    axios.patch(`http://localhost:4000/products/review/${product._id}/status`, { status: "rejected" })
      .then(() => navigate('/dashboard-admin'))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    setProductFields(product);
  }, [product]);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid black' }}>
      <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={productFields.image} alt="prod" width={300} />
        <p>Click on the image to change it</p>
      </div>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          width: '40%',
          border: '1px solid black',
          padding: '1rem'
        }}
        noValidate
        autoComplete="off"
      >

        <TextField id="standard-basic" style={{ ...inputStyles, ...(changedFields.productName ? changedFieldStyles : {}) }} label="Name" name='productName' value={productFields.productName} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" style={{ ...inputStyles, ...(changedFields.price ? changedFieldStyles : {}) }} label="Price" name='price' value={productFields.price} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" style={{ ...inputStyles, ...(changedFields.image ? changedFieldStyles : {}) }} label="Image" name='image' value={productFields.image} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" style={{ ...inputStyles, ...(changedFields.productDescription ? changedFieldStyles : {}) }} label="Description" name='productDescription' value={productFields.productDescription} onChange={handleChange} variant="standard" />
        <TextField id="standard-basic" style={{ ...inputStyles, ...(changedFields.department ? changedFieldStyles : {}) }} label="Department" name='department' value={productFields.department} onChange={handleChange} variant="standard" />
        <button type='button' onClick={handleAccept} style={buttonStyles1}>Approve</button>
        <button type='button' onClick={handleReject} style={buttonStyles2}>Reject</button>

      </Box>
    </div>
  );
}

export default ProductDetailOnAdmin;
