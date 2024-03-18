import React from 'react'
import { CAlert, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import '@coreui/coreui/dist/css/coreui.min.css';
import axios from 'axios';

function ApprovalCard({data}) {
  const navigate=useNavigate()
  const handlePendingReview=()=>{
    navigate(`/pending-requests/${data.id}`, { state: { product:data} })
  }

  const handleAccept=()=>{
    axios.put(`http://localhost:4000/products/review/${data.id}`,{
      productName:data.productName,
      price:data.price,
      image:data.image,
      productDescription:data.productDescription,
      department:data.department,
      id:data.id,
      memberId:data._id,
      author:localStorage.getItem('user'),
      status:"accepted"
  
    } ).then(navigate('/dashboard-admin')).catch(err=>console.log(err));

    axios.put(`http://localhost:4000/products/${data.id}`,{
      productName:data.productName,
      price:data.price,
      image:data.image,
      productDescription:data.productDescription,
      department:data.department,
      id:data.id,
  
    }).then(navigate('/dashboard-admin')).catch(err=>console.log(err));
  }

  const handleReject=()=>{
    axios.patch(`http://localhost:4000/products/review/${product.id}/status`,{status:"rejected"})
          .then(navigate('/dashboard-admin'))
          .catch(err=>console.log(err))
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
                <CButton onClick={handleAccept} style={{marginBottom:'1rem', backgroundColor:'green', border:'none'}} color="primary" >Approve</CButton>
                <CButton onClick={handleReject} style={{ backgroundColor:'red', border:'none'}}  color="primary" >Reject</CButton>
              </>:
              (
                data.status==='accepted'?
                <CButton style={{marginBottom:'1rem', backgroundColor:'green', border:'none'}} color="primary">Approved <DoneIcon/> </CButton>
                :( data.status==='rejected'&&
                  <CButton style={{ backgroundColor:'red', border:'none'}}  color="primary" >Rejected <CloseIcon/></CButton>
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