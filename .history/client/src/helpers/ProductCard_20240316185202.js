import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function ProductCard({data}) {
  return (
    <MDBCard style={{width:"30%", marginRight:'1rem',  }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={data.image} fluid alt='...' /> 
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:'medium', fontWeight:'bold' }}>{data.productName}</MDBCardTitle>
        <MDBCardText style={{fontSize:'small'}}>
          {data.productDescription}
        </MDBCardText>
        <MDBCardText style={{fontSize:'medium'}}>
          Department: {data.department}
        </MDBCardText>
        <MDBCardText style={{fontSize:'medium'}}>
          Price: ₹{data.price}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}