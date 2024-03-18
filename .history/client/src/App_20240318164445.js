import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Dashboard from './components/Dashboard/Dashboard';
import {store, persistor} from './store/store'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductDetailOnAdmin from './components/ProductDetailOnAdmin/ProductDetailOnAdmin';
import PendingRequests from './components/PendingRequests/PendingRequests';

function App() {
  return (
    <div className="App">
      <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/dashboard-admin' element={<DashboardAdmin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/product/:productId' element={<ProductDetail/>}/>
          <Route path='/pending-requests/' element={<PendingRequests/>}/>
          <Route path='/pending-requests/:request_id' element={<ProductDetailOnAdmin/>}/>
          
          
          </Routes>
        </Router>
      </PersistGate>
        

      </Provider>
     
    </div>
  );
}

export default App;
