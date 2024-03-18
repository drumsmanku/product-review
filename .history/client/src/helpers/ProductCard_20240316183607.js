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
    <MDBCard style={{width:"30%", marginRight:'1rem', fontSize:'x-small' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={data.image} fluid alt='...' /> 
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{data.productName}</MDBCardTitle>
        <MDBCardText>
          {data.productDescription}
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}