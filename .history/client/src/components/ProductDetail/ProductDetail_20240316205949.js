import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;



  return (
    <div>
      hi
    </div>
  );
}

export default ProductDetail;
