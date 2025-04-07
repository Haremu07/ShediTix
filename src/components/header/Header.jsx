import React from 'react';
import '../header/Header.css';
import {FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo-link">
          <span className="logo-text">ScheduTix</span>
        </a>

        <nav className="nav">
          <a href="/categories" className="nav-link">
            Event Categories
          </a>
        </nav>

        <div className="search-box">
          <input type="text" placeholder="Search events (tech,comedy,concerts...)" />
          <FiSearch className="search-icon" />
        </div>

        <div className="actions">
          <button className="auth-button">Sign In</button>
          <button className="auth-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
