import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Logo from './logo.png';

export function Navbar() {
  const isLogged = localStorage.getItem('isLogged');
  function handleLog(e) {
    e.preventDefault();
    if (isLogged === 'true') {
      if (window.confirm("Are you sure you want to logout?")) {
        localStorage.clear();
        window.location.href = "/";
      }
    } 
    else if(isLogged === 'false' || isLogged === null) {
        window.location.href = "/";
    }
  }

  return (
    <>
      <header>
        <nav>
          <img className="navbar-brand-logo" alt="logo" src={Logo} />
          <h1>AIRTRACK</h1>
          <div className="nav-links">
            <ul>
              <li><Link to="/about">ABOUT</Link></li>
              { isLogged === 'true' ?
              <>
              <li><Link to="/user/home">HOME</Link></li>
              <li><Link to="/user/flight">FLIGHTS</Link></li>
              <li><Link to="/user/booking">BOOKING</Link></li>
              <li><Link to="/user/profile">PROFILE</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              </>
                :
                <>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/signup">SIGNUP</Link></li>
                </>
              }
              <li><Link to="/" onClick={handleLog}>{isLogged === 'true' ? "LOGOUT" : "LOGIN"}</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
