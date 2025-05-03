import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login/Signup</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
