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

export default function ProductCard({data, onClick }) {
  return (
    <MDBCard onClick={onClick} style={{width:"30%", marginRight:'1rem', marginBottom:'1rem'  }}>
      <MDBCardImage src={data.image} fluid alt='...' /> 
      <MDBCardBody style={{paddingBottom:0}}>
        <MDBCardTitle style={{fontSize:'medium', fontWeight:'bold' }}>{data.productName}</MDBCardTitle>
        <MDBCardText style={{fontSize:'small', marginBottom:0}}>
          {data.productDescription}
        </MDBCardText>
        <MDBCardText style={{fontSize:'medium', marginBottom:0}}>
          <u>Department</u>: {data.department}
        </MDBCardText>
        <MDBCardText style={{fontSize:'medium', marginBottom:'0'}}>
        <u>Price</u>: ₹{data.price}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}