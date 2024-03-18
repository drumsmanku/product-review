import React from 'react'
import { CAlert, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import '@coreui/coreui/dist/css/coreui.min.css'

function ApprovalCard({data}) {
  return (
    <div>
      <CCard>
        <CCardHeader>Header</CCardHeader>
        <CCardBody style={{display:'flex', flexDirection:'column'}}>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
          <CButton color="primary" href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ApprovalCard