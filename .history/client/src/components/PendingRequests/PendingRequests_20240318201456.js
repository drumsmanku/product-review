import React, {useState, useEffect} from 'react';
import ApprovalCard from '../../helpers/ApprovalCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PendingRequests({change, setChange}) {
  const navigate=useNavigate()
  const [pendingRequests, setPendingRequests]=useState([]);
  useEffect(()=>{
    axios.get('https://product-review-y121.onrender.com/reviews')
          .then(res=>{setPendingRequests(res.data.reverse())})
          .catch(err=>console.log(err))
  },[])
  const handleRequestClick = productId => {
    // Send request to backend with productId
    axios
      .get(`https://product-review-y121.onrender.com/products/${productId}`)
      .then(res => {
      
        navigate(`/product/${productId}`, { state: { product: res.data } });
        console.log("done")
      })
      .catch(err => console.error(err));
  };
  return (
    <div style={{width:'80%', height:'100%', overflow:'auto'}}>
        {
        pendingRequests?.map((requests, idx)=>(
          <ApprovalCard change={change} setChange={setChange} key={idx} data={requests} onClick={()=>handleRequestClick()}/>
        ))
      }
    </div>
  )
}

export default PendingRequests