import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;
  console.log('Product data:', product);


  return (
    <div>
      <h2 style={{color:'black'}}>{product&&product.productName}</h2>
      <p>{product.description}</p>
      {/* Render other product details */}
    </div>
  );
}

export default ProductDetail;
