import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import LoginPopup from './components/auth/LoginPopup';
import Register from './components/auth/Register';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Home from './pages/Home';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the popup permanently
    const popupDismissed = localStorage.getItem('popupDismissed');
    if (popupDismissed === 'true') return;

    // Set up the interval
    const timer = setInterval(() => {
      setShowPopup(true);
    }, 20000); 

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []);

  const handleClose = (dontShowAgain) => {
    setShowPopup(false);
    if (dontShowAgain) {
      localStorage.setItem('popupDismissed', 'true');
    }
  };

  return (
    <Router>
      {/* Popup Buttons */}
      {showPopup && <LoginPopup onClose={handleClose} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;