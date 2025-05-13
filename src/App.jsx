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
  const [transportType, setTransportType] = useState(null); 
  const location = useLocation(); 

  useEffect(() => {

    const popupDismissed = localStorage.getItem('popupDismissed');
    if (popupDismissed === 'true') return;

  
    if (location.pathname === '/') {
      const timer = setInterval(() => {
        setShowPopup(true);
      }, 20000);


      return () => clearInterval(timer);
    }
  }, [location.pathname]);  

  const handleClose = (dontShowAgain) => {
    setShowPopup(false);
    if (dontShowAgain) {
      localStorage.setItem('popupDismissed', 'true');
    }
  };

  return (
    <>
      {}
      {showPopup && location.pathname === '/' && <LoginPopup onClose={handleClose} />} {}

      <Routes>
        <Route path="/" element={<Home transportType={transportType} setTransportType={setTransportType} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {}
        {transportType === 'Cabs' && <Route path="/cabs" element={<CabButton />} />}
      </Routes>
    </>
  );
}

export default App;
