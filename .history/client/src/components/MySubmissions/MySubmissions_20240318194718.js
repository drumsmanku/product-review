import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StatusCard from '../../helpers/StatusCard';

function MySubmissions() {

  const [reviews, setReviews]=useState([]);
  useEffect(()=>{
    axios.get('https://product-review-y121.onrender.com/reviews')
          .then(res=>{setReviews(res.data.reverse())})
          .catch(err=>console.log(err))
  },[])
  return (
    <div style={{width:'80%', height:'100%', overflow:'auto'}}>
      {
        reviews?.map((review, idx)=>(
          <StatusCard key={idx} data={review}/>
        ))
      }
    </div>
  )
}

export default MySubmissions