import React, {useState, useEffect} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

import axios from 'axios';

function Profile() {
  const [name, setName]=useState()
  const [profileData, setProfileData]=useState()

  useEffect(()=>{
    const User=localStorage.getItem('user');
    setName(User)
  }, []);
  useEffect(()=>{
    axios.get(`https://doubtshare-postgres-server.onrender.com/doubt/get-all`)
    .then(response=>{setProfileData(response.data.reverse())})
  }, [profileData])
  return (
    <div className="vh-40" style={{ backgroundColor: '#FFFFFF' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={img}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <MDBCardText>Student</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div style={{marginRight:'1rem'}}>
                        <p className="small text-muted mb-1">Doubts</p>
                        <p className="mb-0">{profileData&&profileData.length}</p>
                      </div>
                      
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Profile