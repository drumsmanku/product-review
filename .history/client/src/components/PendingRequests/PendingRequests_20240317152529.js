import React, {useState, useEffect} from 'react';
import ApprovalCard from '../../helpers/ApprovalCard';
import axios from 'axios';

function PendingRequests() {
  const [pendingRequests, setPendingRequests]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/reviews')
          .then(res=>{setPendingRequests(res.data.reverse())})
          .catch(err=>console.log(err))
  },[])
  return (
    <div style={{width:'80%', height:'100%', overflow:'auto'}}>
        {
        pendingRequests?.map((requests, idx)=>(
          <ApprovalCard key={idx} data={requests}/>
        ))
      }
    </div>
  )
}

export default PendingRequests