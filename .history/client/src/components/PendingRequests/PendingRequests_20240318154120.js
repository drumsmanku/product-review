import React, {useState, useEffect} from 'react';
import ApprovalCard from '../../helpers/ApprovalCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PendingRequests({change, setChange}) {
  navigate=useNavigate()
  const [pendingRequests, setPendingRequests]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/reviews')
          .then(res=>{setPendingRequests(res.data.reverse())})
          .catch(err=>console.log(err))
  },[])
  const handleRequestClick = productId => {
    // Send request to backend with productId
    axios
      .get(`http://localhost:4000/products/${productId}`)
      .then(res => {
        // Assuming you have a route defined for product details, navigate to it with product data
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