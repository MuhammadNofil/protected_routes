import { useState } from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Protected from './Protected';
import Unprotected from './Unprotected'
import './App.css';
import Home from './Home'
import PrivateRoute from './GuardRoute'
function App() {
  const[isAutheticated, setisAutheticated] = useState(false);

const login=()=>{
  setisAutheticated(true)
  console.log("authrntication:"+ isAutheticated)
}
const logout=()=>{
  setisAutheticated(false)
  console.log("authrntication:"+ isAutheticated)
}

  return (
    <>
     <Router>
     <div>
   <ul>
       <li>
         <Link to='/'>
           Link to Home Page
         </Link>
       </li>
       <li>
         <Link to='/protected'>
           Link to Protected Page
         </Link>
       </li>
       <li>
         <Link to='/unprotected'>
           Link to Unprotected Page
         </Link>
       </li>
       <button onClick={login}>Login</button>
        <br/>
        <button onClick={logout}>Logout</button>
  </ul>
</div>
     <Routes>
     <Route exact path='/' element={<Home/>}/>
      <Route exact path='/protected' element={<PrivateRoute/>} auth={isAutheticated} >
            <Route exact path='/protected' element={<Protected/>} />
      </Route>
      <Route path='/unprotected' element={<Unprotected/>}/>
     </Routes>
   </Router>
   {/* element={isAutheticated===true?<Protected/>:<Navigate to='/'/>} */}
  </>
  );
}

export default App;
