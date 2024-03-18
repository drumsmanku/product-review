import React from 'react';
import ApprovalCard from '../../helpers/ApprovalCard';

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
          <ApprovalCard key={idx} data={review}/>
        ))
      }
    </div>
  )
}

export default PendingRequests