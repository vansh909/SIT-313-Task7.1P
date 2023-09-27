import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Login';
import Signup from './SignUp';
import NavFooter from './NavFooter';
import Navigation from './Navigation';
function App() {
  return (
    <>
{/* <NavFooter /> */}
    <Routes>
      {/* <Route path='/' element={<NavFooter />} > */}
      <Route path='/' element={<Navigation />}></Route>
     <Route path='/Login' element={<Login />} />
     <Route path='/Signup' element={<Signup />} />
      
      

    </Routes>
    </>
  );
}

export default App;

