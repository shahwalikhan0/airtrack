import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "./constant"
import { useNavigate } from "react-router-dom";
import './index.css';
import Logo from './logo.png';

export function Navbar() {
  const navigate = useNavigate();
  const isUserLoggedIn = useUserAuth();
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn]);

  function handleLog(e) {
    e.preventDefault();
    if (isUserLoggedIn === 'true') {
      if (window.confirm("Are you sure you want to logout?")) {
        localStorage.clear();
        navigate("/");
      }
    } 
    else if(isUserLoggedIn === 'false' || isUserLoggedIn === null) {
      navigate("/");
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
              { isUserLoggedIn === true ?
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
              <li><Link to="/" onClick={handleLog}>{isUserLoggedIn === true ? "LOGOUT" : "LOGIN"}</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
