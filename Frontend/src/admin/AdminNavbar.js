import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Logo from './logo.png';

export function AdminNavbar() {
  const isAdmin = localStorage.getItem('isAdmin');

  function handleLog(e) {
    e.preventDefault();
    if (isAdmin === 'true') {
      if (window.confirm("Are you sure you want to logout?")) {
        localStorage.clear();
        window.location.href = "/";
      }
    } 
    else if(isAdmin === 'false' || isAdmin === null) {
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
              <li><Link to="/admin/home">HOME</Link></li>
              <li><Link to="/admin/management">MANAGEMENT</Link></li>
              <li><Link to="/" onClick={handleLog}>{isAdmin === 'true' ? "LOGOUT" : "LOGIN"}</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
