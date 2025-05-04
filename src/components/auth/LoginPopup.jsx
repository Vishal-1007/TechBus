import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './LoginPopup.css';

const LoginPopup = ({ onClose }) => {
  const dontShowAgainRef = useRef(null);

  const handleClose = () => {
    const dontShow = dontShowAgainRef.current?.checked;

    // Store in localStorage if user checked "Don't show this again"
    if (dontShow) {
      localStorage.setItem('hideLoginPopup', 'true');
    }

    // Notify parent to close popup
    onClose();
  };

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div className="login-popup">
        {/* Close button */}
        <button
          className="close-btn"
          onClick={handleClose}
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Popup content */}
        <h2 id="popup-title">Join Our Community</h2>
        <p>Sign up or log in to access exclusive features!</p>

        <div className="popup-buttons">
          <Link to="/login" className="login-btn" onClick={handleClose}>
            Log In
          </Link>
          <Link to="/register" className="signup-btn" onClick={handleClose}>
            Sign Up
          </Link>
        </div>

        <div className="dont-show-again">
          <input
            type="checkbox"
            id="dont-show"
            ref={dontShowAgainRef}
          />
          <label htmlFor="dont-show">Don't show this again</label>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
