import React from 'react'
import { CAlert, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import '@coreui/coreui/dist/css/coreui.min.css'

function ApprovalCard({data}) {
  const navigate=useNavigate()
  const handlePendingReview=()=>{
    navigate(`/pending-requests/${data.id}`, { state: { product:data} })
  }
  return (
    <div style={{marginBottom:'1rem', marginTop:'0.5rem'}}>
      <CCard>
        <CCardHeader>Request id: {data.id}</CCardHeader>
        <CCardBody style={{display:'flex', justifyContent:'space-between'}}>
          <div>
            <CCardTitle>{data.productName}</CCardTitle>
            <CCardText>{data.productDescription}</CCardText>
            <CButton color="primary" onClick={handlePendingReview}>View Changes</CButton>
          </div>
          
          <div style={{display:'flex', flexDirection:'column'}}>
            {
              data.status==='pending'?
              <>
                <CButton style={{marginBottom:'1rem', backgroundColor:'green', border:'none'}} color="primary" href="#">Approve</CButton>
                <CButton style={{ backgroundColor:'red', border:'none'}}  color="primary" href="#">Reject</CButton>
              </>:
              (
                data.status==='accepted'?
                <CButton style={{marginBottom:'1rem', backgroundColor:'green', border:'none'}} color="primary" href="#">Approved √</CButton>
                :(
                  <CButton style={{ backgroundColor:'red', border:'none'}}  color="primary" href="#">Rejected ×</CButton>
                )
              )
            }
            
          </div>
          
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ApprovalCard