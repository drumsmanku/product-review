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

function ProductCard({product}) {
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
            <MDBCardImage
              src={product.image}
              position="top"
              alt="Apple Computer"
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{product.productName}</MDBCardTitle>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Price</span>
                  <span>{product.price}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Department</span>
                  <span>{product.department}</span>
                </div>
                <div className="d-flex justify-content-center">
                  <span>{product.productDescription}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>Total</span>
                <span>$7,197.00</span>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ProductCard;