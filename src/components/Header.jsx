import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">Triplane</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className="auth-buttons">
            <button className="login-btn">Login/Signup</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;