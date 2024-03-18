import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

function ProductCard({data}) {
  return (
    <MDBContainer fluid className="my-5 w-25 h-25 ">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
            <MDBCardImage
              src={data.image}
              position="top"
              alt="Apple Computer"
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{data.productName}</MDBCardTitle>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Price</span>
                  <span>{data.price}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Department</span>
                  <span>{data.department}</span>
                </div>
                <div className="d-flex justify-content-center">
                  <span>{data.productDescription}</span>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ProductCard;