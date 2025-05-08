import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/auth/Login';
import LoginPopup from './components/auth/LoginPopup';
import Register from './components/auth/Register';
import CabButton from './components/CabButton';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Home from './pages/Home';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [transportType, setTransportType] = useState(null); // To track selected transport option
  const location = useLocation(); // Get the current route

  useEffect(() => {
    // Check if user has dismissed the popup permanently
    const popupDismissed = localStorage.getItem('popupDismissed');
    if (popupDismissed === 'true') return;

    // Set up the interval to show the popup after 20 seconds, only on Home page
    if (location.pathname === '/') {
      const timer = setInterval(() => {
        setShowPopup(true);
      }, 20000);

      // Clean up interval on unmount
      return () => clearInterval(timer);
    }
  }, [location.pathname]);  // Dependency on location.pathname ensures the effect runs when the page changes

  const handleClose = (dontShowAgain) => {
    setShowPopup(false);
    if (dontShowAgain) {
      localStorage.setItem('popupDismissed', 'true');
    }
  };

  return (
    <>
      {/* Conditionally render the LoginPopup based on state */}
      {showPopup && location.pathname === '/' && <LoginPopup onClose={handleClose} />} {/* Only show on Home page */}

      <Routes>
        <Route path="/" element={<Home transportType={transportType} setTransportType={setTransportType} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Render CabButton only when 'Cabs' is selected */}
        {transportType === 'Cabs' && <Route path="/cabs" element={<CabButton />} />}
      </Routes>
    </>
  );
}

export default App;
