import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            <p>©2024 Triplane. All rights reserved</p>
          </div>
          
          <div className="footer-links">
            <div className="links-column">
              <Link to="/">Home</Link>
              <Link to="/register">Register as traveler</Link>
            </div>
            
            <div className="links-column">
              <Link to="/flight">Flight</Link>
              <Link to="/cabs">Cabs</Link>
              <Link to="/hotels">Hotels</Link>
              <Link to="/trains">Trains</Link>
            </div>
            
            <div className="links-column">
              <Link to="/privacy">Privacy & Policy</Link>
              <Link to="/terms">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;