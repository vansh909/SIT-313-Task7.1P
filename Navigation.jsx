// import { Outlet,Link } from "react-router-dom"

// function Navigation()
// {
//  return(<div>
//    <Link to= '/'>
//    DevDeakin
//    </Link>

//    <Link to= 'login'>
//    Login
//    </Link>
//    <Link to='/Post'>
//    Post
//    </Link>

//  <Outlet />
//  </div>)

// }
// export default Navigation;
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navbar">
      <Link to="/">DevDeakin</Link>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/Post">Post</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
