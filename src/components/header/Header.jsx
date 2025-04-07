import React from 'react';
import '../header/Header.css';
import {FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router';

const Header = () => {
 const  navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">
          <img className="logo-link"src="../../../public/images/orangelogo.png" alt="" onClick={() => navigate("/")} />
        <nav className="nav">
          <a href="/event-categories" className="nav-link">
            Event Categories
          </a>
        </nav>

        <div className="search-box">
          <input type="text" placeholder="Search events (tech,comedy,concerts...)" />
          <FiSearch className="search-icon" />
        </div>

        <div className="actions">
          <button className="auth-button" 
          onClick={() => navigate("/login")}
          >Sign In</button>
          <button className="auth-button" 
          onClick={() => navigate("/register")}
          >Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
