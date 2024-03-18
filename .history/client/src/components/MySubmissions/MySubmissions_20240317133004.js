import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StatusCard from '../../helpers/StatusCard';

function MySubmissions() {

  const [reviews, setReviews]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/reviews')
          .then(res=>{setReviews(res.data)})
          .catch(err=>console.log(err))
  },[])
  return (
    <div>
      {
        reviews?.map((review, idx)=>(
          <StatusCard key={idx} data={review}/>
        ))
      }
    </div>
  )
}

export default MySubmissions