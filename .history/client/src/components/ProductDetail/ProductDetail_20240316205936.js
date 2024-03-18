import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;



  return (
    <div>
      <h2 style={{color:'black'}}>{product&&product.name}</h2>
      <p>{product.description}</p>
      {/* Render other product details */}
    </div>
  );
}

export default ProductDetail;
