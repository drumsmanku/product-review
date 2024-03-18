import React from 'react'
import { CAlert, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import '@coreui/coreui/dist/css/coreui.min.css'

function ApprovalCard({data}) {
  const navigate=useNavigate()
  const handlePendingReview=()=>{
    navigate('/', { state: { data} })
  }
  return (
    <div>
      <CCard>
        <CCardHeader>Request id: {data.id}</CCardHeader>
        <CCardBody style={{display:'flex', justifyContent:'space-between'}}>
          <div>
            <CCardTitle>{data.productName}</CCardTitle>
            <CCardText>{data.productDescription}</CCardText>
            <CButton color="primary" onClick={handlePendingReview}>View Changes</CButton>
          </div>
          
          <div style={{display:'flex', flexDirection:'column'}}>
            <CButton style={{marginBottom:'1rem', backgroundColor:'green', border:'none'}} color="primary" href="#">Approve</CButton>
            <CButton style={{ backgroundColor:'red', border:'none'}}  color="primary" href="#">Reject</CButton>
          </div>
          
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ApprovalCard