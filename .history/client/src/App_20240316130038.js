import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard/Dashboard';
import store from './store/store'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';

function App() {
  return (
    <div className="App">
      <Provider store={store}> 
        <Router>
          <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/dashboard-admin' element={<DashboardAdmin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          
          
          </Routes>
        </Router>

      </Provider>
     
    </div>
  );
}

export default App;
