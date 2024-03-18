import React, {useState, useEffect} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import img from '../../assets/img1.jpg'

import axios from 'axios';

function Profile() {
  const [name, setName]=useState()
  const [profileData, setProfileData]=useState()

  useEffect(()=>{
    const User=localStorage.getItem('user');
    setName(User)
  }, []);
  useEffect(()=>{
    axios.get(`http://localhost:4000/reviews`)
    .then(response=>{setProfileData(response.data.reverse())})
  }, [profileData])
  const countAcceptedReviews = profileData ? profileData.filter(review => review.status === 'accepted').length : 0;
  const countRejectedReviews = profileData ? profileData.filter(review => review.status === 'rejected').length : 0;
  const countPendingReviews = profileData ? profileData.filter(review => review.status === 'pending').length : 0;
  return (
    <div className="vh-100" style={{ backgroundColor: '#FFFFFF', width:'100%', height:'100%' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center vh-40">
          <MDBCol  md="9" lg="8" xl="7" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '130px', borderRadius: '10px' }}
                      src={img}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <MDBCardText>Team Member</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div style={{marginRight:'1rem'}}>
                        <p className="small text-muted mb-1">Total Submissions</p>
                        <p className="mb-0">{profileData&&profileData.length}</p>
                      </div>
                      
                      <div>
                        <p  className="small text-muted mb-1">Approved Submissions</p>
                        <p className="mb-0">{countAcceptedReviews}</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Pending Submissions</p>
                        <p className="mb-0">{countPendingReviews}</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rejected Submissions</p>
                        <p className="mb-0">{countRejectedReviews}</p>
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