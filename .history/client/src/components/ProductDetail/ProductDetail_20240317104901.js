import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import {  setAdminStatus, setTeamMemberStatus } from '../../store/features/isAdminSlice';
import { useSelector } from 'react-redux';
import { Button } from 'bootstrap';
import Cropper from 'react-cropper';
import AvatarEditor from 'react-avatar-editor';
import 'cropperjs/dist/cropper.css';

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
  const [croppedImage, setCroppedImage] = useState('');
  const [editor, setEditor] = useState(null);
  const cropperRef = useRef(null);

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

  const handleCropImage = () => {
    if (cropperRef.current) {
      const croppedCanvas = cropperRef.current.getCroppedCanvas();
      setCroppedImage(croppedCanvas.toDataURL());
    }
  };
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', border:'2px solid black'}}>
      <div style={{ width:'30%', display:'flex', flexDirection:'column', alignItems:'center' }}>
        <img src={productFields.image} alt="prod" width={300}/>
        <p>Click on the image to change it</p>
      </div>
      <Cropper
        ref={cropperRef}
        src={productFields.image}
        aspectRatio={1 / 1} // Set desired aspect ratio
        guides={true}
        crop={handleCropImage}
      />
      <AvatarEditor
        ref={setEditor}
        image={productFields.image}
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
      <button onClick={handleImageEdit}>Edit Image</button>
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
        {isAdmin?<button style={buttonStyles}>Update Product as Admin</button>:<button style={buttonStyles}>Submit changes for approval</button>}
        
      </Box>
    </div>
    
  );
}

export default ProductDetail;
