import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LoginPopup from '../components/auth/LoginPopup';
import BlogsSection from '../components/BlogsSection';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HotelsSection from '../components/HotelsSection';
import LocalExperts from '../components/LocalExperts';
import QuickQuestion from '../components/QuickQuestion';
import SuccessStories from '../components/SuccessStories';
import TravelerBenefits from '../components/TravelerBenefits';
import TripPlanning from '../components/TripPlanning';
import CabButton from '../components/CabButton';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [transportType, setTransportType] = useState(null); // LIFTED UP
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const hidePopup = localStorage.getItem('hideLoginPopup');

    if (currentPath === '/' && !hidePopup) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [location]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home-page">
      <Header />

      <BookingForm transportType={transportType} setTransportType={setTransportType} />

      {transportType === 'Cabs' ? (
        <>
          <CabButton />
          <LocalExperts />
        </>
      ) : (
        <>
          <TravelerBenefits />
          <TripPlanning />
          <LocalExperts />
          <QuickQuestion />
          <HotelsSection />
          <SuccessStories />
          <BlogsSection />
        </>
      )}

      <Footer />
      {showPopup && <LoginPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Home;
