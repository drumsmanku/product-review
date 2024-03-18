import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;
