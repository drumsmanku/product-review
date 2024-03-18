import React from 'react'
import { CAlert, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import '@coreui/coreui/dist/css/coreui.min.css'

const statusStyle={
  backgroundColor: 'green'
}

function StatusCard({data}) {
  return (
    <div style={{marginTop:'1rem'}}>
      <CCard>
        <CCardHeader>{data.price}</CCardHeader>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
          
        </CCardBody>
        <CButton style={data.status==='accepted'&&statusStyle} color="primary" >{data.status}</CButton>
      </CCard>
    </div>
  )
}

export default StatusCard