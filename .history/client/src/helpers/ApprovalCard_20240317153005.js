import React from 'react'
import { CAlert, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import '@coreui/coreui/dist/css/coreui.min.css'

function ApprovalCard({data}) {
  return (
    <div>
      <CCard>
        <CCardHeader>Header</CCardHeader>
        <CCardBody style={{display:'flex', justifyContent:'space-between'}}>
          <div>
            <CCardTitle>Special title treatment</CCardTitle>
            <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
            <CButton color="primary" href="#">View Changes</CButton>
          </div>
          
          <div style={{display:'flex', flexDirection:'column'}}>
            <CButton style={{marginBottom:'1rem', backgroundColor:'green'}} color="primary" href="#">Approve</CButton>
            <CButton style={{ backgroundColor:'red'}}  color="primary" href="#">Reject</CButton>
          </div>
          
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ApprovalCard