import React from "react";
import { Link, Outlet } from "react-router-dom";
import {Suspense} from 'react'
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light container">
          <Link to='/'>NAVBAR</Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/About' className="nav-link">About</Link>
            </li>
            <li class="nav-item">
              <Link to='/Contact' className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to='/Admin' className="nav-link">Admin</Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link">login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Outlet/>
      </Suspense>
      
    </>
  );
};

export default Navbar;
