import React from 'react'
import { CAlert, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import '@coreui/coreui/dist/css/coreui.min.css'

const statusColors = {
  accepted: 'success',
  rejected: 'danger',
  pending: 'primary'
};

function StatusCard({data}) {
  const buttonColor = statusColors[data.status] || 'primary';

  return (
    <div style={{marginTop:'1rem'}}>
      <CCard>
        <CCardHeader>Product id: {data.id}</CCardHeader>
        <CCardBody>
          <CCardTitle>Name: {data.productName}</CCardTitle>
          <CCardText>Description:{data.productDescription}</CCardText>
          
        </CCardBody>
        <CButton color={buttonColor}>{data.status}</CButton>
      </CCard>
    </div>
  )
}

export default StatusCard