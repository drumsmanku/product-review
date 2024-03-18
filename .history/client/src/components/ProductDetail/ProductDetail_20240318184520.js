import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import {  setAdminStatus, setTeamMemberStatus } from '../../store/features/isAdminSlice';
import { useSelector } from 'react-redux';
import { Button } from 'bootstrap';
import axios from 'axios';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../cropImage';


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

  const navigate=useNavigate();
  const location = useLocation();
  const { product } = location.state;
  const isAdmin = useSelector(state => state.isAdmin.isAdmin);
  const isTeamMember = useSelector(state => state.isAdmin.isTeamMember);
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

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleCropChange = (crop) => {
    setCrop(crop);
  };

  const handleZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onCropComplete = async (_, croppedAreaPixels) => {
    // You would replace 'your-image-path.jpg' with your actual image path
    const croppedImage = await getCroppedImg(productFields.image, croppedAreaPixels);
    setCroppedImage(croppedImage);
    setProductFields({ ...productFields, image: croppedImage });
  };
  
  const handleChange=(e)=>{
    setProductFields(
      {
        ...productFields,
      [e.target.name]:e.target.value
      }
    )
  }
  const handleProductChange=()=>{
    axios.post('http://localhost:4000/products/review', productFields)
    .then(navigate('/'))
    .catch(err=>console.log(err))
    
  }
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
      <div style={{ position: 'relative', width: '100%', height: 200 }}>
        <Cropper
          image={productFields.image}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={handleCropChange}
          onZoomChange={handleZoomChange}
          onCropComplete={onCropComplete}
        />
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
        {isAdmin&&<button type='button' onClick={handleProductSubmit} style={buttonStyles}>Update Product as Admin</button>}
        {isTeamMember&&
          <button type='button' onClick={handleProductChange} style={buttonStyles}>Submit changes for approval</button>
        }
        
      </Box>
    </div>
    
  );
}

export default ProductDetail;
