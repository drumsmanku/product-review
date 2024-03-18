import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import ProductCard from '../../helpers/ProductCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




function Dashboard() {
  const navigate =useNavigate();
  const [products, setProduts]=useState([])
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showButton, setShowButton]= useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Or any number you prefer


  useEffect(()=>{
    const User=localStorage.getItem('user');
    if(User){
      setIsLoggedIn(true);
    }
        
  }, []);
  useEffect(()=>{
    axios.get('http://localhost:4000/products')
          .then(res=>{setProduts(res.data); console.log(res.data)})
          .catch(err=>console.error(err))
  },[])

  const handleLogin=()=>{
    navigate('/login');
  }
  const handleSignup=()=>{
    navigate('/register')
  }
  const handleLogout=()=>{
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    
  }
  const handleAdd = () => {
    setShowAddModal(true);
  };

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.container}>
      <Sidebar showButton={showButton} setShowButton={setShowButton}/>

      <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
        <div className={styles.navbar}>
          <div className={styles.navBarContent}>


            <div>
              {
                isLoggedIn?(
                  <>
                    <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
                  </>
                ):
                <>
                <button className={styles.loginButton} onClick={handleLogin}>Login </button>&nbsp;|&nbsp;
                <button className={styles.signupButton} onClick={handleSignup}>Signup</button>
                </>
              }
            </div>
          </div>
          
        </div>
        
          {
           
              isLoggedIn?
              <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                 <div className={styles.mainContent}>
                    
                  {
                    products.map((product, idx)=>(
                      <ProductCard key={product.id} data={product}/>
                    ))
                  }

                    
                </div>
              </div>
              :
              <>
                <p>Please login/register first</p>
              </>
            
           
          }

          <Stack spacing={2}>
               <Pagination
                  count={Math.ceil(products.length / itemsPerPage)}
                  page={page}
                  onChange={(event, value) => setPage(value)}
                  color="primary"
               />
           </Stack>
          
        
      
      </div>
    </div>
  )
}

export default Dashboard