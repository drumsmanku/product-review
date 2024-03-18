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
          </div>
          
          <div style={{display:'flex', flexDirection:'column'}}>
            <CButton color="primary" href="#">Go somewhere</CButton>
            <CButton color="primary" href="#">Go somewhere</CButton>
          </div>
          
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ApprovalCard