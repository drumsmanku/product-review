import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../../helpers/ProductCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MySubmissions from '../MySubmissions/MySubmissions'




function Dashboard() {
  const navigate =useNavigate();
  const [products, setProduts]=useState([])
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showButton, setShowButton]= useState(false);
  const [showProfile, setShowProfile]=useState(false);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); 


  useEffect(()=>{
    const User=localStorage.getItem('user');
    if(User){
      setIsLoggedIn(true);
    }
        
  }, []);
  useEffect(() => {
    setLoading(true);
    axios.get('https://product-review-y121.onrender.com/products')
      .then(res => {
        setProduts(res.data);
        console.log(res.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);
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


  const handleProductClick = productId => {
   
    axios
      .get(`https://product-review-y121.onrender.com/products/${productId}`)
      .then(res => {
        
        navigate(`/product/${productId}`, { state: { product: res.data } });
        console.log("done")
      })
      .catch(err => console.error(err));
  };

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.container}>
      <Sidebar showButton={showButton} setShowButton={setShowButton} showProfile={showProfile} setShowProfile={setShowProfile}/>

      <div style={{display:'flex', flexDirection:'column', width:'100%', alignItems:'center'}}>
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
          showProfile?
           isLoggedIn?
            <Profile/>
            :
            <p>Please login/register first</p>
          
          :
          (<>
            {
              !showButton?
              (
                
                isLoggedIn?
                <>
                
                  <div style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                    <div className={styles.mainContent}>
                        
                      {
                       
                        currentItems.map((product, idx) => (
                          <ProductCard key={product.id} data={product} onClick={() => handleProductClick(product.id)} />
                        ))
                      }
    
                        
                    </div>
                    <Stack sx={{marginTop:'2rem'}} spacing={2}>
                        <Pagination
                            count={Math.ceil(products.length / itemsPerPage)}
                            page={page}
                            onChange={(event, value) => setPage(value)}
                            color="primary"
                        />
                    </Stack>
                  </div>
                </>
                
                :
                <>
                  <p>Please login/register first</p>
                </>
              
              ):
              (
                isLoggedIn?(
                  <MySubmissions/>
                ):
                (
                  <p>Please login/register first</p>
                )
              )
            }
          </>
            
          )
        } 
      </div>
    </div>
  )
}

export default Dashboard